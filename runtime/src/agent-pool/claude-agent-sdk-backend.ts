import { query as claudeQuery, type CanUseTool, type Options, type PermissionResult, type SDKMessage } from "@anthropic-ai/claude-agent-sdk";
import { type AgentSessionEvent } from "@mariozechner/pi-coding-agent";
import { createRequire } from "node:module";

import { WORKSPACE_DIR, getAgentBackendConfig } from "../core/config.js";
import {
  getPersistedBackendState,
  patchClaudeBackendState,
  type ClaudeBackendPersistedState,
} from "./backend-state.js";
import { normalizeContextUsageSnapshot, type ContextUsageSnapshot } from "./context-usage.js";
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

type ClaudeQueryFactory = typeof claudeQuery;

let queryFactory: ClaudeQueryFactory = claudeQuery;
let oauthTokenResolverForTests: (() => Promise<string | null>) | null = null;

const CLAUDE_THINKING_LEVELS = ["off", "low", "medium", "high", "xhigh", "max"] as const;
type ClaudeThinkingLevel = typeof CLAUDE_THINKING_LEVELS[number];
const DEFAULT_THINKING_LEVEL: ClaudeThinkingLevel = "high";
const CLAUDE_MODEL_ALIASES: Record<string, string> = {
  "claude-opus-4.6[1m]": "claude-opus-4-6[1m]",
};

type PersistedClaudeState = ClaudeBackendPersistedState & {
  thinking?: ClaudeThinkingLevel | string;
  contextUsage?: ContextUsageSnapshot | null;
};

type ClaudeChatState = {
  sessionId: string | null;
  activeRun: AbortController | null;
  contextUsage: ContextUsageSnapshot | null;
  controlStream: { getContextUsage?: () => Promise<unknown> } | null;
  providerUsage: unknown | null;
  thinking: ClaudeThinkingLevel | undefined;
  model: string | undefined;
  hasUntrustedExternalContent: boolean | undefined;
};

const chatStateByChat = new Map<string, ClaudeChatState>();

function createClaudeChatState(): ClaudeChatState {
  return {
    sessionId: null,
    activeRun: null,
    contextUsage: null,
    controlStream: null,
    providerUsage: null,
    thinking: undefined,
    model: undefined,
    hasUntrustedExternalContent: undefined,
  };
}

function getClaudeChatState(chatJid: string): ClaudeChatState {
  let state = chatStateByChat.get(chatJid);
  if (!state) {
    state = createClaudeChatState();
    chatStateByChat.set(chatJid, state);
  }
  return state;
}

function readPersistedState(chatJid: string): PersistedClaudeState {
  const state = getPersistedBackendState(chatJid).claude ?? {};
  const contextUsage = normalizeContextUsageSnapshot(state.contextUsage);
  return { ...state, contextUsage };
}

function writePersistedState(chatJid: string, patch: PersistedClaudeState): void {
  patchClaudeBackendState(chatJid, { ...patch });
}

function normalizeClaudeModelId(value: string | null | undefined): string | null {
  const raw = (value || "").trim();
  if (!raw || raw === "default") return null;
  return CLAUDE_MODEL_ALIASES[raw] ?? raw;
}

function normalizeClaudeThinkingLevel(value: string | null | undefined): ClaudeThinkingLevel | null {
  const normalized = (value || "").trim().toLowerCase();
  return CLAUDE_THINKING_LEVELS.includes(normalized as ClaudeThinkingLevel) ? normalized as ClaudeThinkingLevel : null;
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
  chatStateByChat.clear();
}

export function getClaudeAgentSdkModelLabel(chatJid?: string): string {
  const persisted = chatJid ? normalizeClaudeModelId(readPersistedState(chatJid).model) : null;
  const configured = normalizeClaudeModelId(getAgentBackendConfig().claudeAgentSdkModel);
  const state = chatJid ? chatStateByChat.get(chatJid) : null;
  const model = chatJid ? (normalizeClaudeModelId(state?.model) ?? persisted ?? configured) : configured;
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

export function getClaudeAgentSdkContextUsage(chatJid: string): ContextUsageSnapshot | null {
  return chatStateByChat.get(chatJid)?.contextUsage ?? readPersistedState(chatJid).contextUsage ?? null;
}

export async function refreshClaudeAgentSdkContextUsage(chatJid: string): Promise<ContextUsageSnapshot | null> {
  const state = getClaudeChatState(chatJid);
  const stream = state.controlStream;
  if (!stream?.getContextUsage) return getClaudeAgentSdkContextUsage(chatJid);
  try {
    const selectedModel = state.model || readPersistedState(chatJid).model || getAgentBackendConfig().claudeAgentSdkModel;
    const snapshot = normalizeClaudeContextUsage(await stream.getContextUsage(), {
      model: normalizeClaudeModelId(selectedModel),
      sessionId: state.sessionId ?? null,
    });
    if (snapshot) {
      state.contextUsage = snapshot;
      writePersistedState(chatJid, { contextUsage: snapshot });
    }
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
  return chatStateByChat.get(chatJid)?.providerUsage ?? readPersistedState(chatJid).providerUsage ?? null;
}

export function hasClaudeAgentSdkSession(chatJid: string): boolean {
  return Boolean(chatStateByChat.get(chatJid)?.sessionId);
}

export function getClaudeAgentSdkThinkingLevel(chatJid: string): ClaudeThinkingLevel {
  return chatStateByChat.get(chatJid)?.thinking
    ?? normalizeClaudeThinkingLevel(readPersistedState(chatJid).thinking)
    ?? DEFAULT_THINKING_LEVEL;
}

export function setClaudeAgentSdkThinkingLevel(chatJid: string, level: string): ClaudeThinkingLevel | null {
  const next = normalizeClaudeThinkingLevel(level);
  if (!next) return null;
  getClaudeChatState(chatJid).thinking = next;
  writePersistedState(chatJid, { thinking: next });
  return next;
}

export function cycleClaudeAgentSdkThinkingLevel(chatJid: string): ClaudeThinkingLevel {
  const current = getClaudeAgentSdkThinkingLevel(chatJid);
  const index = CLAUDE_THINKING_LEVELS.indexOf(current);
  const next = CLAUDE_THINKING_LEVELS[(index + 1) % CLAUDE_THINKING_LEVELS.length];
  getClaudeChatState(chatJid).thinking = next;
  writePersistedState(chatJid, { thinking: next });
  return next;
}

export async function setClaudeAgentSdkModel(chatJid: string, requested: string | undefined): Promise<string> {
  const raw = (requested || "").trim();
  if (!raw) throw new Error("Missing Claude model.");
  const requestedId = raw.startsWith("claude/") ? raw.slice("claude/".length) : raw;
  const id = normalizeClaudeModelId(requestedId) ?? "default";
  getClaudeChatState(chatJid).model = id === "default" ? "" : id;
  writePersistedState(chatJid, { model: id === "default" ? null : id });
  return resolveClaudeAgentSdkModelLabel(requested);
}

export async function abortClaudeAgentSdkChat(chatJid: string): Promise<boolean> {
  const controller = chatStateByChat.get(chatJid)?.activeRun;
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

function normalizeClaudeContextUsage(
  payload: unknown,
  options: { model: string | null; sessionId: string | null },
): ContextUsageSnapshot | null {
  if (!payload || typeof payload !== "object") return null;
  const data = payload as Record<string, unknown>;
  const tokens = readNumber(data.totalTokens) ?? readNumber(data.total_tokens);
  const contextWindow = readNumber(data.maxTokens) ?? readNumber(data.max_tokens) ?? readNumber(data.rawMaxTokens) ?? readNumber(data.raw_max_tokens);
  const percent = readNumber(data.percentage) ?? (tokens != null && contextWindow != null ? (tokens / contextWindow) * 100 : null);
  if (contextWindow == null || contextWindow <= 0) return null;
  return {
    backend: "claude-agent-sdk",
    source: "claude-native-context",
    tokens,
    contextWindow,
    percent,
    model: options.model,
    updatedAt: new Date().toISOString(),
    sessionId: options.sessionId,
  };
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
  const state = getClaudeChatState(chatJid);
  state.providerUsage = {
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
  };
  writePersistedState(chatJid, { providerUsage: state.providerUsage });
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
  if (!chatStateByChat.get(chatJid)?.sessionId) return false;
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
  const state = getClaudeChatState(chatJid);
  const persistedState = readPersistedState(chatJid);

  const abortHandle = createNativeAbortHandle(runOptions);
  if (!abortHandle) return { status: "error", result: null, error: "Claude Agent SDK aborted" };
  state.activeRun = abortHandle.controller;

  const streamState = createNativeStreamState();
  let errorMessage: string | null = null;
  const sessionId = state.sessionId;
  const selectedModel = normalizeClaudeModelId(state.model) || normalizeClaudeModelId(persistedState.model) || normalizeClaudeModelId(getAgentBackendConfig().claudeAgentSdkModel) || undefined;
  const promptWithAttachments = buildClaudePrompt(chatJid, prompt, runOptions.inputMediaIds, bridgeSession, runOptions.toolCeilingFilter);
  const bridgeTrustState: ClaudeBridgeTrustState = {
    hasUntrustedExternalContent: runOptions.hasUntrustedExternalContent === true
      || state.hasUntrustedExternalContent === true
      || persistedState.hasUntrustedExternalContent === true,
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
    mcpServers: { piclaw: createPiclawMcpServer(chatJid, bridgeSession, () => state.contextUsage ?? null, bridgeTrustState, runOptions.toolCeilingFilter) },
    canUseTool: createPermissionHandler(runOptions, bridgeTrustState),
    permissionMode: "default",
    includePartialMessages: true,
  };

  try {
    const stream = queryFactory({ prompt: promptWithAttachments, options });
    state.controlStream = stream as { getContextUsage?: () => Promise<unknown> };
    for await (const message of stream) {
      if ((message as any).session_id) state.sessionId = String((message as any).session_id);
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
    if (bridgeTrustState.hasUntrustedExternalContent) {
      state.hasUntrustedExternalContent = true;
      writePersistedState(chatJid, { hasUntrustedExternalContent: true });
    }
    abortHandle.dispose();
    if (state.activeRun === abortHandle.controller) state.activeRun = null;
  }

  finishNativeStreams(runOptions, streamState);
  emitNativeMessageEnd(runOptions, streamState.text, errorMessage);
  if (errorMessage) return nativeOutputWithAttachments(chatJid, "error", streamState.text || null, errorMessage);
  return nativeOutputWithAttachments(chatJid, "success", streamState.text);
}
