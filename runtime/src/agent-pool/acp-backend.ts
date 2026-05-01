/**
 * agent-pool/acp-backend.ts - Experimental ACP-backed agent runner.
 *
 * This is intentionally narrow: it proves Piclaw can keep its web UI,
 * message DB, and SSE plumbing while a native ACP agent owns the turn loop.
 */

import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { spawn, type ChildProcessWithoutNullStreams } from "child_process";
import { Readable, Writable } from "stream";
import {
  ClientSideConnection,
  PROTOCOL_VERSION,
  ndJsonStream,
  type Client,
  type ContentBlock,
  type RequestPermissionRequest,
  type RequestPermissionResponse,
  type SessionNotification,
  type SessionUpdate,
} from "@agentclientprotocol/sdk";
import type { AgentSessionEvent } from "@mariozechner/pi-coding-agent";

import type { AgentOutput, RunAgentOptions } from "./contracts.js";
import { getTimeline } from "../db.js";
import { WORKSPACE_DIR, getAgentBackendConfig } from "../core/config.js";
import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("agent-pool.acp-backend");
const require = createRequire(import.meta.url);
const STABLE_ACP_PROMPT = [
  "You are running as Piclaw's ACP backend.",
  "Use your native ACP harness for repository inspection, shell commands, file edits, and reasoning.",
  "Piclaw is providing recent chat transcript context separately from the current user message.",
].join("\n");

type AcpToolState = {
  title: string;
  toolName: string;
  args?: unknown;
};

type AcpPromptParts = {
  prompt: ContentBlock[];
  replayCount: number;
  transcriptChars: number;
  promptChars: number;
};

type AcpClientDiagnostics = {
  agentMessageChunks: number;
  thoughtChunks: number;
  toolCallUpdates: number;
  permissionRequests: number;
  selectedPermissionRequests: number;
};

function getWorkspaceDir(): string {
  return process.env.PICLAW_WORKSPACE || WORKSPACE_DIR;
}

function resolveCodexAcpCommand(): { command: string; args: string[] } {
  const override = getAgentBackendConfig().codexAcpCommand;
  if (override) return { command: override, args: [] };

  const packageJsonPath = require.resolve("@agentclientprotocol/codex-acp/package.json");
  const packageDir = dirname(packageJsonPath);
  const binPath = join(packageDir, "dist", "index.js");
  if (existsSync(binPath)) return { command: binPath, args: [] };

  return { command: "codex-acp", args: [] };
}

function normalizeContent(value: unknown): string {
  return String(value ?? "").replace(/\r\n/g, "\n").trim();
}

function buildReplayPrompt(chatJid: string, prompt: string): AcpPromptParts {
  const replayLimit = getAgentBackendConfig().replayMessages;
  const blocks: ContentBlock[] = [{ type: "text", text: STABLE_ACP_PROMPT }];
  if (replayLimit <= 0) {
    blocks.push({ type: "text", text: `Current user message:\n${prompt}` });
    return { prompt: blocks, replayCount: 0, transcriptChars: 0, promptChars: prompt.length };
  }

  const rows = getTimeline(chatJid, replayLimit + 1);
  const normalizedPrompt = normalizeContent(prompt);
  const priorRows = rows.filter((row, index) => {
    const content = normalizeContent(row?.data?.content);
    const isLatestDuplicate = index === rows.length - 1 && content === normalizedPrompt && row?.data?.type !== "agent_response";
    return content && !isLatestDuplicate;
  }).slice(-replayLimit);

  if (priorRows.length === 0) {
    blocks.push({ type: "text", text: `Current user message:\n${prompt}` });
    return { prompt: blocks, replayCount: 0, transcriptChars: 0, promptChars: prompt.length };
  }

  const transcript = priorRows.map((row) => {
    const role = row.data?.type === "agent_response" ? "assistant" : "user";
    return `${role}: ${normalizeContent(row.data?.content)}`;
  }).join("\n\n");

  blocks.push({ type: "text", text: `Previous Piclaw transcript, oldest to newest:\n${transcript}` });
  blocks.push({ type: "text", text: `Current user message:\n${prompt}` });
  return {
    prompt: blocks,
    replayCount: priorRows.length,
    transcriptChars: transcript.length,
    promptChars: prompt.length,
  };
}

function textMessageUpdate(delta: string, phase: "start" | "delta" | "end"): AgentSessionEvent {
  const assistantMessageEvent =
    phase === "start"
      ? { type: "text_start" }
      : phase === "delta"
        ? { type: "text_delta", delta }
        : { type: "text_end", content: delta };
  return { type: "message_update", assistantMessageEvent } as unknown as AgentSessionEvent;
}

function thoughtMessageUpdate(delta: string): AgentSessionEvent {
  return {
    type: "message_update",
    assistantMessageEvent: { type: "thinking_delta", delta },
  } as unknown as AgentSessionEvent;
}

function toolNameFromUpdate(update: SessionUpdate): string {
  if ("kind" in update && typeof update.kind === "string" && update.kind) return update.kind;
  if ("title" in update && typeof update.title === "string" && update.title) return update.title;
  return "acp_tool";
}

function emitToolUpdate(
  update: Extract<SessionUpdate, { sessionUpdate: "tool_call" | "tool_call_update" }>,
  tools: Map<string, AcpToolState>,
  onEvent?: (event: AgentSessionEvent) => void,
): void {
  const toolCallId = String(update.toolCallId || "");
  if (!toolCallId) return;

  const existing = tools.get(toolCallId);
  const title = ("title" in update && update.title ? String(update.title) : existing?.title) || "ACP tool";
  const toolName = toolNameFromUpdate(update) || existing?.toolName || "acp_tool";
  const args = "rawInput" in update && update.rawInput !== undefined ? update.rawInput : existing?.args;
  tools.set(toolCallId, { title, toolName, args });

  const status = "status" in update ? update.status : undefined;
  if (update.sessionUpdate === "tool_call" || status === "pending" || status === "in_progress") {
    onEvent?.({
      type: "tool_execution_start",
      toolCallId,
      toolName,
      args,
    } as unknown as AgentSessionEvent);
    return;
  }

  if (status === "completed" || status === "failed") {
    onEvent?.({
      type: "tool_execution_end",
      toolCallId,
      toolName,
      args,
      isError: status === "failed",
    } as unknown as AgentSessionEvent);
    tools.delete(toolCallId);
  }
}

function selectPermissionOption(params: RequestPermissionRequest): string | null {
  const options = Array.isArray(params.options) ? params.options : [];
  const preferred = options.find((option) => option.kind === "allow_once")
    ?? options.find((option) => option.kind === "allow_always")
    ?? options.find((option) => option.kind.startsWith("allow_"))
    ?? options[0];
  return preferred?.optionId ?? null;
}

class PiclawAcpClient implements Client {
  private finalText = "";
  private textStarted = false;
  private readonly tools = new Map<string, AcpToolState>();
  private readonly diagnostics: AcpClientDiagnostics = {
    agentMessageChunks: 0,
    thoughtChunks: 0,
    toolCallUpdates: 0,
    permissionRequests: 0,
    selectedPermissionRequests: 0,
  };

  constructor(private readonly onEvent?: (event: AgentSessionEvent) => void) {}

  getFinalText(): string {
    return this.finalText.trim();
  }

  getDiagnostics(): AcpClientDiagnostics {
    return { ...this.diagnostics };
  }

  async requestPermission(params: RequestPermissionRequest): Promise<RequestPermissionResponse> {
    this.diagnostics.permissionRequests += 1;
    const optionId = selectPermissionOption(params);
    log.info("ACP permission request handled", {
      operation: "acp.permission_request",
      optionCount: Array.isArray(params.options) ? params.options.length : 0,
      selectedOptionId: optionId,
    });
    if (!optionId) return { outcome: { outcome: "cancelled" } };
    this.diagnostics.selectedPermissionRequests += 1;
    return { outcome: { outcome: "selected", optionId } };
  }

  async sessionUpdate(params: SessionNotification): Promise<void> {
    const update = params.update;
    if (update.sessionUpdate === "agent_message_chunk" && update.content.type === "text") {
      this.diagnostics.agentMessageChunks += 1;
      const text = update.content.text || "";
      if (!this.textStarted) {
        this.textStarted = true;
        this.onEvent?.(textMessageUpdate("", "start"));
      }
      this.finalText += text;
      this.onEvent?.(textMessageUpdate(text, "delta"));
      return;
    }

    if (update.sessionUpdate === "agent_thought_chunk" && update.content.type === "text") {
      this.diagnostics.thoughtChunks += 1;
      this.onEvent?.(thoughtMessageUpdate(update.content.text || ""));
      return;
    }

    if (update.sessionUpdate === "tool_call" || update.sessionUpdate === "tool_call_update") {
      this.diagnostics.toolCallUpdates += 1;
      emitToolUpdate(update, this.tools, this.onEvent);
    }
  }
}

export function shouldUseCodexAcpBackend(): boolean {
  return getAgentBackendConfig().backend === "codex-acp";
}

function observeChildExit(child: ChildProcessWithoutNullStreams): Promise<{ code: number | null; signal: NodeJS.Signals | null }> {
  return new Promise((resolve) => {
    child.once("exit", (code, signal) => resolve({ code, signal }));
  });
}

async function waitForChildExit(
  childExit: Promise<{ code: number | null; signal: NodeJS.Signals | null }>,
): Promise<{ code: number | null; signal: NodeJS.Signals | null } | null> {
  return Promise.race([
    childExit,
    Bun.sleep(1_000).then(() => null),
  ]);
}

export async function runCodexAcpPrompt(
  prompt: string,
  chatJid: string,
  runOptions: RunAgentOptions,
): Promise<AgentOutput> {
  const startedAt = Date.now();
  const cwd = getWorkspaceDir();
  const acpCommand = resolveCodexAcpCommand();
  let child: ChildProcessWithoutNullStreams | null = null;
  let childExit: Promise<{ code: number | null; signal: NodeJS.Signals | null }> | null = null;

  try {
    log.info("Starting Codex ACP backend", {
      operation: "acp.codex.start",
      chatJid,
      cwd,
      command: acpCommand.command,
      argCount: acpCommand.args.length,
      replayMessages: getAgentBackendConfig().replayMessages,
    });
    child = spawn(acpCommand.command, acpCommand.args, {
      cwd,
      env: process.env,
      stdio: ["pipe", "pipe", "pipe"],
    });
    childExit = observeChildExit(child);

    const client = new PiclawAcpClient(runOptions.onEvent);
    const stream = ndJsonStream(
      Writable.toWeb(child.stdin),
      Readable.toWeb(child.stdout) as unknown as ReadableStream<Uint8Array>,
    );
    const connection = new ClientSideConnection(() => client, stream);
    const stderrChunks: string[] = [];
    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (chunk) => {
      const text = String(chunk || "");
      stderrChunks.push(text);
      log.debug("codex-acp stderr", { operation: "acp.codex.stderr", chars: text.length, text });
    });

    await connection.initialize({
      protocolVersion: PROTOCOL_VERSION,
      clientInfo: { name: "piclaw", version: "acp-spike" },
      clientCapabilities: {},
    });
    log.info("Codex ACP connection initialized", {
      operation: "acp.codex.initialized",
      chatJid,
      protocolVersion: PROTOCOL_VERSION,
    });

    const session = await connection.newSession({ cwd, mcpServers: [] });
    const replayPrompt = buildReplayPrompt(chatJid, prompt);
    log.info("Codex ACP session ready", {
      operation: "acp.codex.session_ready",
      chatJid,
      sessionId: session.sessionId,
      promptBlockCount: replayPrompt.prompt.length,
      replayCount: replayPrompt.replayCount,
      transcriptChars: replayPrompt.transcriptChars,
      promptChars: replayPrompt.promptChars,
    });
    const result = await connection.prompt({
      sessionId: session.sessionId,
      prompt: replayPrompt.prompt,
    });

    const finalText = client.getFinalText();
    runOptions.onEvent?.(textMessageUpdate(finalText, "end"));
    runOptions.onEvent?.({
      type: "message_end",
      message: {
        role: "assistant",
        content: finalText ? [{ type: "text", text: finalText }] : [],
        stopReason: result.stopReason === "end_turn" ? "stop" : result.stopReason,
      },
    } as unknown as AgentSessionEvent);

    child.kill();
    const exit = childExit ? await waitForChildExit(childExit) : null;
    const diagnostics = client.getDiagnostics();
    log.info("Codex ACP prompt completed", {
      operation: "acp.codex.prompt_complete",
      chatJid,
      sessionId: session.sessionId,
      stopReason: result.stopReason,
      durationMs: Date.now() - startedAt,
      finalTextChars: finalText.length,
      stderrChars: stderrChunks.join("").length,
      childExitCode: exit?.code ?? null,
      childSignal: exit?.signal ?? null,
      ...diagnostics,
    });
    const status = result.stopReason === "cancelled" || result.stopReason === "refusal" ? "error" : "success";
    return status === "success"
      ? { status: "success", result: finalText || null }
      : { status: "error", result: finalText || null, error: `ACP stopped: ${result.stopReason}` };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    debugSuppressedError(log, "Codex ACP prompt failed.", error, {
      operation: "acp.codex.prompt",
      chatJid,
      durationMs: Date.now() - startedAt,
    });
    return { status: "error", result: null, error: message };
  } finally {
    if (child && !child.killed) child.kill();
  }
}
