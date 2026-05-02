import { query as claudeQuery, type CanUseTool, type Options, type PermissionResult, type SDKMessage } from "@anthropic-ai/claude-agent-sdk";
import { type AgentSessionEvent } from "@mariozechner/pi-coding-agent";
import { createRequire } from "node:module";

import { WORKSPACE_DIR, getAgentBackendConfig } from "../core/config.js";
import type { AgentOutput, RunAgentOptions } from "./contracts.js";
import { createLogger } from "../utils/logger.js";

const log = createLogger("agent-pool.claude-agent-sdk");
const DEFAULT_CONTEXT_WINDOW = 200_000;
const requireFromHere = createRequire(import.meta.url);

type ClaudeQueryFactory = typeof claudeQuery;

let queryFactory: ClaudeQueryFactory = claudeQuery;
let oauthTokenResolverForTests: (() => Promise<string | null>) | null = null;

const sessionIdByChat = new Map<string, string>();
const activeRunsByChat = new Map<string, AbortController>();
const contextUsageByChat = new Map<string, { tokens: number | null; contextWindow: number; percent: number | null }>();

export function setClaudeAgentSdkQueryFactoryForTests(factory: ClaudeQueryFactory | null): void {
  queryFactory = factory ?? claudeQuery;
}

export function setClaudeAgentSdkOAuthTokenResolverForTests(resolver: (() => Promise<string | null>) | null): void {
  oauthTokenResolverForTests = resolver;
}

export function resetClaudeAgentSdkBackendForTests(): void {
  queryFactory = claudeQuery;
  oauthTokenResolverForTests = null;
  sessionIdByChat.clear();
  activeRunsByChat.clear();
  contextUsageByChat.clear();
}

export function getClaudeAgentSdkModelLabel(): string {
  const model = getAgentBackendConfig().claudeAgentSdkModel;
  return model ? `claude/${model}` : "claude/default";
}

export function listClaudeAgentSdkModels(): { label: string; provider: string; id: string; name: string; contextWindow: number }[] {
  const configured = getAgentBackendConfig().claudeAgentSdkModel;
  const ids = configured ? [configured] : ["default", "opus", "sonnet"];
  return ids.map((id) => ({
    label: `claude/${id}`,
    provider: "claude",
    id,
    name: id,
    contextWindow: DEFAULT_CONTEXT_WINDOW,
  }));
}

export function getClaudeAgentSdkContextUsage(chatJid: string): {
  tokens: number | null;
  contextWindow: number;
  percent: number | null;
} | null {
  return contextUsageByChat.get(chatJid) ?? null;
}

export function hasClaudeAgentSdkSession(chatJid: string): boolean {
  return sessionIdByChat.has(chatJid);
}

export async function abortClaudeAgentSdkChat(chatJid: string): Promise<boolean> {
  const controller = activeRunsByChat.get(chatJid);
  if (!controller) return false;
  controller.abort();
  return true;
}

async function resolveOAuthToken(): Promise<string | null> {
  if (oauthTokenResolverForTests) return oauthTokenResolverForTests();
  const configured = getAgentBackendConfig().claudeAgentSdkOAuthToken;
  if (configured) return configured;
  return null;
}

function emit(onEvent: RunAgentOptions["onEvent"], event: AgentSessionEvent): void {
  onEvent?.(event);
}

function emitText(runOptions: RunAgentOptions, text: string): void {
  if (!text) return;
  emit(runOptions.onEvent, {
    type: "message_update",
    assistantMessageEvent: { type: "text_start", contentIndex: 0, partial: { type: "text", text: "" } },
  } as unknown as AgentSessionEvent);
  emit(runOptions.onEvent, {
    type: "message_update",
    assistantMessageEvent: { type: "text_delta", delta: text, contentIndex: 0, partial: { type: "text", text } },
  } as unknown as AgentSessionEvent);
  emit(runOptions.onEvent, {
    type: "message_update",
    assistantMessageEvent: { type: "text_end", contentIndex: 0, partial: { type: "text", text } },
  } as unknown as AgentSessionEvent);
}

function extractAssistantText(message: SDKMessage): string {
  if (message.type !== "assistant") return "";
  const content = (message as any).message?.content;
  if (!Array.isArray(content)) return "";
  return content
    .map((block) => {
      if (!block || typeof block !== "object") return "";
      if (block.type === "text" && typeof block.text === "string") return block.text;
      return "";
    })
    .filter(Boolean)
    .join("");
}

function updateContextUsage(chatJid: string, message: SDKMessage): void {
  if (message.type !== "result") return;
  const usage = (message as any).usage ?? {};
  const modelUsage = (message as any).modelUsage ?? {};
  const modelWindows = Object.values(modelUsage)
    .map((entry: any) => (typeof entry?.contextWindow === "number" ? entry.contextWindow : null))
    .filter((value): value is number => value != null && Number.isFinite(value) && value > 0);
  const contextWindow = modelWindows[0] ?? DEFAULT_CONTEXT_WINDOW;
  const totalTokens =
    readNumber(usage.total_tokens) ??
    readNumber(usage.totalTokens) ??
    sumNumbers([
      usage.input_tokens,
      usage.output_tokens,
      usage.cache_read_input_tokens,
      usage.cache_creation_input_tokens,
      usage.inputTokens,
      usage.outputTokens,
      usage.cacheReadInputTokens,
      usage.cacheCreationInputTokens,
    ]);
  contextUsageByChat.set(chatJid, {
    tokens: totalTokens,
    contextWindow,
    percent: totalTokens == null ? null : (totalTokens / contextWindow) * 100,
  });
}

function readNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function sumNumbers(values: unknown[]): number | null {
  let total = 0;
  let saw = false;
  for (const value of values) {
    if (typeof value === "number" && Number.isFinite(value)) {
      total += value;
      saw = true;
    }
  }
  return saw ? total : null;
}

function createPermissionHandler(runOptions: RunAgentOptions): CanUseTool {
  return async (toolName, _input, options): Promise<PermissionResult> => {
    if (runOptions.hasUntrustedExternalContent && isMutatingClaudeTool(toolName)) {
      return {
        behavior: "deny",
        message: "Denied because this turn contains untrusted external content.",
        toolUseID: options.toolUseID,
        decisionClassification: "user_reject",
      };
    }
    return { behavior: "allow", toolUseID: options.toolUseID, decisionClassification: "user_temporary" };
  };
}

function isMutatingClaudeTool(toolName: string): boolean {
  return /^(Bash|Edit|MultiEdit|Write|NotebookEdit)$/i.test(toolName);
}

function resolveClaudeCodeExecutable(): string | undefined {
  if (process.platform !== "linux") return undefined;
  const report = process.report?.getReport?.() as { header?: { glibcVersionRuntime?: string } } | undefined;
  if (report?.header?.glibcVersionRuntime) {
    try {
      return requireFromHere.resolve(`@anthropic-ai/claude-agent-sdk-linux-${process.arch}/claude`);
    } catch {
      return undefined;
    }
  }
  return undefined;
}

export async function runClaudeAgentSdkPrompt(prompt: string, chatJid: string, runOptions: RunAgentOptions): Promise<AgentOutput> {
  const token = await resolveOAuthToken();

  const controller = new AbortController();
  const abortFromCaller = () => controller.abort();
  runOptions.signal?.addEventListener("abort", abortFromCaller, { once: true });
  activeRunsByChat.set(chatJid, controller);

  let finalText = "";
  let errorMessage: string | null = null;
  const sessionId = sessionIdByChat.get(chatJid);
  const options: Options & { getOAuthToken?: (options: { signal: AbortSignal }) => Promise<string | null> } = {
    abortController: controller,
    cwd: WORKSPACE_DIR,
    pathToClaudeCodeExecutable: resolveClaudeCodeExecutable(),
    env: {
      ...process.env,
      CLAUDE_AGENT_SDK_CLIENT_APP: "piclaw/2.1.0",
      ...(token ? { CLAUDE_CODE_OAUTH_TOKEN: token, CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH: "1" } : {}),
    },
    ...(token ? { getOAuthToken: async () => (await resolveOAuthToken()) ?? token } : {}),
    ...(getAgentBackendConfig().claudeAgentSdkModel ? { model: getAgentBackendConfig().claudeAgentSdkModel ?? undefined } : {}),
    ...(sessionId ? { resume: sessionId } : {}),
    tools: { type: "preset", preset: "claude_code" },
    canUseTool: createPermissionHandler(runOptions),
    permissionMode: runOptions.hasUntrustedExternalContent ? "default" : "bypassPermissions",
  };

  try {
    const stream = queryFactory({ prompt, options });
    for await (const message of stream) {
      if ((message as any).session_id) sessionIdByChat.set(chatJid, String((message as any).session_id));
      updateContextUsage(chatJid, message);
      const assistantText = extractAssistantText(message);
      if (assistantText) {
        finalText += assistantText;
        emitText(runOptions, assistantText);
      }
      if (message.type === "result") {
        if ((message as any).subtype === "success" && typeof (message as any).result === "string" && !finalText) {
          finalText = (message as any).result;
          emitText(runOptions, finalText);
        } else if ((message as any).subtype !== "success") {
          const errors = Array.isArray((message as any).errors) ? (message as any).errors.filter(Boolean).join("\n") : "";
          errorMessage = errors || `Claude SDK run failed: ${(message as any).subtype}`;
        }
      }
    }
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
  } finally {
    runOptions.signal?.removeEventListener("abort", abortFromCaller);
    activeRunsByChat.delete(chatJid);
  }

  emit(runOptions.onEvent, {
    type: "message_end",
    message: {
      role: "assistant",
      content: finalText ? [{ type: "text", text: finalText }] : [],
      stopReason: errorMessage ? "error" : "stop",
      ...(errorMessage ? { errorMessage } : {}),
    },
  } as AgentSessionEvent);

  if (errorMessage) return { status: "error", result: finalText || null, error: errorMessage };
  return { status: "success", result: finalText };
}
