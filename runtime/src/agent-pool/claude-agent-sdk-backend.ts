import { query as claudeQuery, type CanUseTool, type Options, type PermissionResult, type SDKMessage } from "@anthropic-ai/claude-agent-sdk";
import { type AgentSessionEvent } from "@mariozechner/pi-coding-agent";
import { createRequire } from "node:module";

import { WORKSPACE_DIR, getAgentBackendConfig } from "../core/config.js";
import { extensionKvGet, extensionKvSet } from "../db.js";
import type { AgentOutput, RunAgentOptions } from "./contracts.js";
import { createLogger } from "../utils/logger.js";
import type { PiclawBridgeSession } from "./codex-app-server-backend.js";
import { buildAgentChildEnv } from "./child-env.js";
import { buildClaudePrompt, createPiclawMcpServer, type ClaudeBridgeTrustState } from "./claude-agent-sdk/bridge.js";
import { withScopedChatRunLock } from "./chat-run-lock.js";
import { createNativeAbortHandle } from "./native-abort.js";
import {
  createNativeStreamState,
  emitNativeEvent,
  emitNativeMessageEnd,
  emitNativeTextDelta,
  emitNativeThinkingDelta,
  finishNativeStreams,
  nativeOutputWithAttachments,
} from "./native-stream.js";

const log = createLogger("agent-pool.claude-agent-sdk");
const DEFAULT_CONTEXT_WINDOW = 200_000;
const ONE_MILLION_CONTEXT_WINDOW = 1_000_000;
const requireFromHere = createRequire(import.meta.url);
const STATE_EXTENSION_ID = "claude-agent-sdk";
const STATE_KEY = "state";

type ClaudeQueryFactory = typeof claudeQuery;

let queryFactory: ClaudeQueryFactory = claudeQuery;
let oauthTokenResolverForTests: (() => Promise<string | null>) | null = null;

const sessionIdByChat = new Map<string, string>();
const activeRunsByChat = new Map<string, AbortController>();
const contextUsageByChat = new Map<string, { tokens: number | null; contextWindow: number; percent: number | null }>();
const controlStreamByChat = new Map<string, { getContextUsage?: () => Promise<unknown> }>();
const providerUsageByChat = new Map<string, unknown>();
const thinkingLevelByChat = new Map<string, ClaudeThinkingLevel>();
const modelByChat = new Map<string, string>();
const untrustedExternalContentByChat = new Map<string, boolean>();

const CLAUDE_THINKING_LEVELS = ["off", "low", "medium", "high", "xhigh", "max"] as const;
type ClaudeThinkingLevel = typeof CLAUDE_THINKING_LEVELS[number];
const DEFAULT_THINKING_LEVEL: ClaudeThinkingLevel = "high";
const CLAUDE_MODEL_ALIASES: Record<string, string> = {
  "claude-opus-4.6[1m]": "claude-opus-4-6[1m]",
};

type PersistedClaudeState = {
  model?: string | null;
  thinking?: ClaudeThinkingLevel;
  providerUsage?: unknown;
};

function readPersistedState(chatJid: string): PersistedClaudeState {
  return extensionKvGet<PersistedClaudeState>(STATE_EXTENSION_ID, STATE_KEY, "chat", chatJid) ?? {};
}

function writePersistedState(chatJid: string, patch: PersistedClaudeState): void {
  const next = { ...readPersistedState(chatJid), ...patch };
  extensionKvSet(STATE_EXTENSION_ID, STATE_KEY, next, "chat", chatJid);
}

function normalizeClaudeModelId(value: string | null | undefined): string | null {
  const raw = (value || "").trim();
  if (!raw || raw === "default") return null;
  return CLAUDE_MODEL_ALIASES[raw] ?? raw;
}

function contextWindowForClaudeModel(id: string | null | undefined): number {
  return normalizeClaudeModelId(id)?.includes("[1m]") ? ONE_MILLION_CONTEXT_WINDOW : DEFAULT_CONTEXT_WINDOW;
}

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
  controlStreamByChat.clear();
  providerUsageByChat.clear();
  thinkingLevelByChat.clear();
  modelByChat.clear();
  untrustedExternalContentByChat.clear();
}

export function getClaudeAgentSdkModelLabel(chatJid?: string): string {
  const persisted = chatJid ? normalizeClaudeModelId(readPersistedState(chatJid).model) : null;
  const configured = normalizeClaudeModelId(getAgentBackendConfig().claudeAgentSdkModel);
  const model = chatJid ? (normalizeClaudeModelId(modelByChat.get(chatJid)) ?? persisted ?? configured) : configured;
  return model ? `claude/${model}` : "claude/default";
}

export function listClaudeAgentSdkModels(): { label: string; provider: string; id: string; name: string; contextWindow: number }[] {
  const configured = getAgentBackendConfig().claudeAgentSdkModel;
  const ids = Array.from(new Set([
    "default",
    "claude-opus-4-6[1m]",
    "opus",
    "sonnet",
    ...(normalizeClaudeModelId(configured) ? [normalizeClaudeModelId(configured)!] : []),
  ]));
  return ids.map((id) => ({
    label: `claude/${id}`,
    provider: "claude",
    id,
    name: id,
    contextWindow: contextWindowForClaudeModel(id),
  }));
}

export function resolveClaudeAgentSdkModelLabel(requested: string | undefined): string {
  const raw = (requested || "").trim();
  if (!raw) throw new Error("Missing Claude model.");
  const requestedId = raw.startsWith("claude/") ? raw.slice("claude/".length) : raw;
  const id = normalizeClaudeModelId(requestedId) ?? "default";
  return id === "default" ? "claude/default" : `claude/${id}`;
}

export function getClaudeAgentSdkContextUsage(chatJid: string): {
  tokens: number | null;
  contextWindow: number;
  percent: number | null;
} | null {
  return contextUsageByChat.get(chatJid) ?? null;
}

export async function refreshClaudeAgentSdkContextUsage(chatJid: string): Promise<{
  tokens: number | null;
  contextWindow: number;
  percent: number | null;
} | null> {
  const stream = controlStreamByChat.get(chatJid);
  if (!stream?.getContextUsage) return getClaudeAgentSdkContextUsage(chatJid);
  try {
    const snapshot = normalizeClaudeContextUsage(await stream.getContextUsage());
    if (snapshot) contextUsageByChat.set(chatJid, snapshot);
  } catch (error) {
    log.debug("Claude Agent SDK context usage refresh failed", {
      operation: "claude_agent_sdk.context_usage_refresh_failed",
      chatJid,
      err: error,
    });
  }
  return getClaudeAgentSdkContextUsage(chatJid);
}

export function getClaudeAgentSdkProviderUsage(chatJid: string): unknown | null {
  return providerUsageByChat.get(chatJid) ?? readPersistedState(chatJid).providerUsage ?? null;
}

export function hasClaudeAgentSdkSession(chatJid: string): boolean {
  return sessionIdByChat.has(chatJid);
}

export function getClaudeAgentSdkThinkingLevel(chatJid: string): ClaudeThinkingLevel {
  return thinkingLevelByChat.get(chatJid) ?? readPersistedState(chatJid).thinking ?? DEFAULT_THINKING_LEVEL;
}

export function setClaudeAgentSdkThinkingLevel(chatJid: string, level: string): ClaudeThinkingLevel | null {
  const normalized = level.trim().toLowerCase();
  if (!CLAUDE_THINKING_LEVELS.includes(normalized as ClaudeThinkingLevel)) return null;
  const next = normalized as ClaudeThinkingLevel;
  thinkingLevelByChat.set(chatJid, next);
  writePersistedState(chatJid, { thinking: next });
  return next;
}

export function cycleClaudeAgentSdkThinkingLevel(chatJid: string): ClaudeThinkingLevel {
  const current = getClaudeAgentSdkThinkingLevel(chatJid);
  const index = CLAUDE_THINKING_LEVELS.indexOf(current);
  const next = CLAUDE_THINKING_LEVELS[(index + 1) % CLAUDE_THINKING_LEVELS.length];
  thinkingLevelByChat.set(chatJid, next);
  writePersistedState(chatJid, { thinking: next });
  return next;
}

export async function setClaudeAgentSdkModel(chatJid: string, requested: string | undefined): Promise<string> {
  const raw = (requested || "").trim();
  if (!raw) throw new Error("Missing Claude model.");
  const requestedId = raw.startsWith("claude/") ? raw.slice("claude/".length) : raw;
  const id = normalizeClaudeModelId(requestedId) ?? "default";
  modelByChat.set(chatJid, id === "default" ? "" : id);
  writePersistedState(chatJid, { model: id === "default" ? null : id });
  return resolveClaudeAgentSdkModelLabel(requested);
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
  const modelUsage = (message as any).modelUsage ?? {};
  const modelWindows = Object.values(modelUsage)
    .map((entry: any) => (typeof entry?.contextWindow === "number" ? entry.contextWindow : null))
    .filter((value): value is number => value != null && Number.isFinite(value) && value > 0);
  const selectedModel = modelByChat.get(chatJid) || readPersistedState(chatJid).model || getAgentBackendConfig().claudeAgentSdkModel;
  const contextWindow = modelWindows[0] ?? contextWindowForClaudeModel(selectedModel);
  contextUsageByChat.set(chatJid, {
    tokens: null,
    contextWindow,
    percent: null,
  });
}

function normalizeClaudeContextUsage(payload: unknown): { tokens: number | null; contextWindow: number; percent: number | null } | null {
  if (!payload || typeof payload !== "object") return null;
  const data = payload as Record<string, unknown>;
  const tokens = readNumber(data.totalTokens) ?? readNumber(data.total_tokens);
  const contextWindow = readNumber(data.maxTokens) ?? readNumber(data.max_tokens) ?? readNumber(data.rawMaxTokens) ?? readNumber(data.raw_max_tokens);
  const percent = readNumber(data.percentage) ?? (tokens != null && contextWindow != null ? (tokens / contextWindow) * 100 : null);
  if (contextWindow == null || contextWindow <= 0) return null;
  return { tokens, contextWindow, percent };
}

function updateProviderUsage(chatJid: string, message: SDKMessage): void {
  if (message.type !== "rate_limit_event") return;
  const info = (message as any).rate_limit_info ?? {};
  const utilization = readNumber(info.utilization);
  const usedPercent = utilization == null ? null : utilization <= 1 ? utilization * 100 : utilization;
  const remainingPercent = usedPercent == null ? null : Math.max(0, 100 - usedPercent);
  if (remainingPercent == null) return;
  const resetAt = typeof info.resetsAt === "number" && Number.isFinite(info.resetsAt)
    ? new Date(info.resetsAt).toISOString()
    : null;
  const primary = {
    label: info.rateLimitType === "seven_day" ? "weekly" : "5h",
    used_percent: usedPercent,
    remaining_percent: remainingPercent,
    window_minutes: info.rateLimitType === "seven_day" ? 10_080 : 300,
    resets_at: resetAt,
    reset_description: resetAt,
  };
  providerUsageByChat.set(chatJid, {
    provider: "anthropic",
    source: "claude-agent-sdk-rate-limit-event",
    plan: null,
    fetched_at: new Date().toISOString(),
    primary,
    secondary: null,
    credits_remaining: null,
    credits_unlimited: false,
    extra_usage: null,
    hint_short: `${Math.round(remainingPercent)}%`,
  });
  writePersistedState(chatJid, { providerUsage: providerUsageByChat.get(chatJid) });
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

function createPermissionHandler(runOptions: RunAgentOptions, trustState: ClaudeBridgeTrustState): CanUseTool {
  return async (toolName, input, options): Promise<PermissionResult> => {
    if ((runOptions.hasUntrustedExternalContent || trustState.hasUntrustedExternalContent) && isMutatingClaudeTool(toolName)) {
      return {
        behavior: "deny",
        message: "Denied because this turn contains untrusted external content.",
        toolUseID: options.toolUseID,
        decisionClassification: "user_reject",
      };
    }
    return {
      behavior: "allow",
      updatedInput: input,
      toolUseID: options.toolUseID,
      decisionClassification: "user_temporary",
    };
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

function thinkingOptions(level: ClaudeThinkingLevel): Pick<Options, "thinking" | "effort"> {
  if (level === "off") return { thinking: { type: "disabled" } };
  return { thinking: { type: "adaptive", display: "summarized" }, effort: level === "max" ? "max" : level };
}

export async function compactClaudeAgentSdkChat(chatJid: string): Promise<boolean> {
  if (!sessionIdByChat.has(chatJid)) return false;
  emitNativeEvent(undefined, { type: "compaction_start", reason: "manual" } as AgentSessionEvent);
  const output = await runClaudeAgentSdkPrompt("/compact", chatJid, { timeoutMs: 120_000 });
  emitNativeEvent(undefined, { type: "compaction_end", reason: "manual", result: undefined, aborted: false, willRetry: false } as AgentSessionEvent);
  return output.status === "success";
}

export async function runClaudeAgentSdkPrompt(
  prompt: string,
  chatJid: string,
  runOptions: RunAgentOptions,
  bridgeSession?: PiclawBridgeSession | null,
): Promise<AgentOutput> {
  return withScopedChatRunLock("claude-agent-sdk", chatJid, () => runClaudeAgentSdkPromptUnlocked(prompt, chatJid, runOptions, bridgeSession));
}

async function runClaudeAgentSdkPromptUnlocked(
  prompt: string,
  chatJid: string,
  runOptions: RunAgentOptions,
  bridgeSession?: PiclawBridgeSession | null,
): Promise<AgentOutput> {
  if (runOptions.signal?.aborted) return { status: "error", result: null, error: "Claude Agent SDK aborted" };
  const token = await resolveOAuthToken();

  const abortHandle = createNativeAbortHandle(runOptions);
  if (!abortHandle) return { status: "error", result: null, error: "Claude Agent SDK aborted" };
  activeRunsByChat.set(chatJid, abortHandle.controller);

  const streamState = createNativeStreamState();
  let errorMessage: string | null = null;
  const sessionId = sessionIdByChat.get(chatJid);
  const selectedModel = normalizeClaudeModelId(modelByChat.get(chatJid)) || normalizeClaudeModelId(readPersistedState(chatJid).model) || normalizeClaudeModelId(getAgentBackendConfig().claudeAgentSdkModel) || undefined;
  const promptWithAttachments = buildClaudePrompt(chatJid, prompt, runOptions.inputMediaIds, bridgeSession);
  const bridgeTrustState: ClaudeBridgeTrustState = {
    hasUntrustedExternalContent: runOptions.hasUntrustedExternalContent === true || untrustedExternalContentByChat.get(chatJid) === true,
  };
  const options: Options & { getOAuthToken?: (options: { signal: AbortSignal }) => Promise<string | null> } = {
    abortController: abortHandle.controller,
    cwd: WORKSPACE_DIR,
    pathToClaudeCodeExecutable: resolveClaudeCodeExecutable(),
    env: buildAgentChildEnv("claude", {
      CLAUDE_AGENT_SDK_CLIENT_APP: "piclaw/2.1.0",
      ...(token ? { CLAUDE_CODE_OAUTH_TOKEN: token, CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH: "1" } : {}),
    }),
    ...(token ? { getOAuthToken: async () => (await resolveOAuthToken()) ?? token } : {}),
    ...(selectedModel ? { model: selectedModel } : {}),
    ...(sessionId ? { resume: sessionId } : {}),
    ...thinkingOptions(getClaudeAgentSdkThinkingLevel(chatJid)),
    tools: { type: "preset", preset: "claude_code" },
    mcpServers: { piclaw: createPiclawMcpServer(chatJid, bridgeSession, () => contextUsageByChat.get(chatJid) ?? null, bridgeTrustState) },
    canUseTool: createPermissionHandler(runOptions, bridgeTrustState),
    permissionMode: "default",
    includePartialMessages: true,
  };

  try {
    const stream = queryFactory({ prompt: promptWithAttachments, options });
    controlStreamByChat.set(chatJid, stream as { getContextUsage?: () => Promise<unknown> });
    for await (const message of stream) {
      if ((message as any).session_id) sessionIdByChat.set(chatJid, String((message as any).session_id));
      updateContextUsage(chatJid, message);
      updateProviderUsage(chatJid, message);
      if (message.type === "stream_event") {
        const event = (message as any).event;
        const delta = event?.delta;
        if (event?.type === "content_block_delta" && delta?.type === "text_delta" && typeof delta.text === "string") {
          emitNativeTextDelta(runOptions, delta.text, streamState);
        }
        if (event?.type === "content_block_delta" && (delta?.type === "thinking_delta" || delta?.type === "signature_delta")) {
          const thinkingDelta = typeof delta.thinking === "string" ? delta.thinking : typeof delta.text === "string" ? delta.text : "";
          emitNativeThinkingDelta(runOptions, thinkingDelta, streamState);
        }
        continue;
      }
      const assistantText = extractAssistantText(message);
      if (assistantText && !streamState.textStarted) {
        emitNativeTextDelta(runOptions, assistantText, streamState);
      }
      if (message.type === "result") {
        if ((message as any).subtype === "success" && typeof (message as any).result === "string" && !streamState.text) {
          emitNativeTextDelta(runOptions, (message as any).result, streamState);
        } else if ((message as any).subtype !== "success") {
          const errors = Array.isArray((message as any).errors) ? (message as any).errors.filter(Boolean).join("\n") : "";
          errorMessage = errors || `Claude SDK run failed: ${(message as any).subtype}`;
        }
      }
    }
    await refreshClaudeAgentSdkContextUsage(chatJid);
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
    const operation = /Tool permission request failed:\s*(ZodError|.*invalid_union)|ZodError|invalid_union/i.test(errorMessage)
      ? "claude_agent_sdk.protocol_validation_error"
      : "claude_agent_sdk.run_error";
    log.warn("Claude Agent SDK run failed", {
      operation,
      chatJid,
      model: selectedModel ?? "default",
      err: error,
    });
  } finally {
    if (bridgeTrustState.hasUntrustedExternalContent) untrustedExternalContentByChat.set(chatJid, true);
    abortHandle.dispose();
    if (activeRunsByChat.get(chatJid) === abortHandle.controller) activeRunsByChat.delete(chatJid);
  }

  finishNativeStreams(runOptions, streamState);
  emitNativeMessageEnd(runOptions, streamState.text, errorMessage);
  if (errorMessage) return nativeOutputWithAttachments(chatJid, "error", streamState.text || null, errorMessage);
  return nativeOutputWithAttachments(chatJid, "success", streamState.text);
}
