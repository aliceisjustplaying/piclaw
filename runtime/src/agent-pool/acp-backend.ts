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
  type RequestPermissionRequest,
  type RequestPermissionResponse,
  type SessionNotification,
  type SessionUpdate,
} from "@agentclientprotocol/sdk";
import type { AgentSessionEvent } from "@mariozechner/pi-coding-agent";

import type { AgentOutput, RunAgentOptions } from "./contracts.js";
import { getTimeline } from "../db.js";
import { WORKSPACE_DIR } from "../core/config.js";
import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("agent-pool.acp-backend");
const require = createRequire(import.meta.url);
const DEFAULT_REPLAY_MESSAGES = 20;

type AcpToolState = {
  title: string;
  toolName: string;
  args?: unknown;
};

function parseReplayMessageLimit(): number {
  const raw = process.env.PICLAW_ACP_REPLAY_MESSAGES;
  const parsed = Number.parseInt(String(raw || ""), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? Math.min(parsed, 200) : DEFAULT_REPLAY_MESSAGES;
}

function getWorkspaceDir(): string {
  return process.env.PICLAW_WORKSPACE || WORKSPACE_DIR;
}

function resolveCodexAcpCommand(): { command: string; args: string[] } {
  const override = process.env.PICLAW_CODEX_ACP_COMMAND?.trim();
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

function buildReplayPrompt(chatJid: string, prompt: string): string {
  const replayLimit = parseReplayMessageLimit();
  if (replayLimit <= 0) return prompt;

  const rows = getTimeline(chatJid, replayLimit + 1);
  const normalizedPrompt = normalizeContent(prompt);
  const priorRows = rows.filter((row, index) => {
    const content = normalizeContent(row?.data?.content);
    const isLatestDuplicate = index === rows.length - 1 && content === normalizedPrompt && row?.data?.type !== "agent_response";
    return content && !isLatestDuplicate;
  }).slice(-replayLimit);

  if (priorRows.length === 0) return prompt;

  const transcript = priorRows.map((row) => {
    const role = row.data?.type === "agent_response" ? "assistant" : "user";
    return `${role}: ${normalizeContent(row.data?.content)}`;
  }).join("\n\n");

  return [
    "Previous Piclaw transcript, oldest to newest:",
    transcript,
    "",
    "Current user message:",
    prompt,
  ].join("\n");
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

  constructor(private readonly onEvent?: (event: AgentSessionEvent) => void) {}

  getFinalText(): string {
    return this.finalText.trim();
  }

  async requestPermission(params: RequestPermissionRequest): Promise<RequestPermissionResponse> {
    const optionId = selectPermissionOption(params);
    if (!optionId) return { outcome: { outcome: "cancelled" } };
    return { outcome: { outcome: "selected", optionId } };
  }

  async sessionUpdate(params: SessionNotification): Promise<void> {
    const update = params.update;
    if (update.sessionUpdate === "agent_message_chunk" && update.content.type === "text") {
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
      this.onEvent?.(thoughtMessageUpdate(update.content.text || ""));
      return;
    }

    if (update.sessionUpdate === "tool_call" || update.sessionUpdate === "tool_call_update") {
      emitToolUpdate(update, this.tools, this.onEvent);
    }
  }
}

export function shouldUseCodexAcpBackend(): boolean {
  return process.env.PICLAW_AGENT_BACKEND === "acp-codex" || process.env.PICLAW_EXPERIMENTAL_CODEX_ACP === "1";
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

  try {
    child = spawn(acpCommand.command, acpCommand.args, {
      cwd,
      env: process.env,
      stdio: ["pipe", "pipe", "pipe"],
    });

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
      log.debug("codex-acp stderr", { operation: "acp.codex.stderr", text });
    });

    await connection.initialize({
      protocolVersion: PROTOCOL_VERSION,
      clientInfo: { name: "piclaw", version: "acp-spike" },
      clientCapabilities: {},
    });

    const session = await connection.newSession({ cwd, mcpServers: [] });
    const replayPrompt = buildReplayPrompt(chatJid, prompt);
    const result = await connection.prompt({
      sessionId: session.sessionId,
      prompt: [{ type: "text", text: replayPrompt }],
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
