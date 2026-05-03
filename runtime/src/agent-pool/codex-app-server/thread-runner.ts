import { getAgentBackendConfig, getCompactionRuntimeConfig } from "../../core/config.js";
import type { AgentOutput, RunAgentOptions } from "../contracts.js";
import { withScopedChatRunLock } from "../chat-run-lock.js";
import {
  createNativeStreamState,
  emitNativeMessageEnd,
  emitNativeTextDelta,
  emitNativeThinkingDelta,
  finishNativeStreams,
  nativeOutputWithAttachments,
} from "../native-stream.js";
import {
  buildUserInput,
  dynamicToolsConfig,
  dynamicToolSignature,
  summarizeDynamicToolNames,
} from "./bridge-tools.js";
import { TOKEN_USAGE_TRAILING_GRACE_MS } from "./constants.js";
import { getClient } from "./client.js";
import { getChatModel, turnReasoningConfig } from "./models.js";
import {
  isToolItem,
  isUntrustedThread,
  itemArgs,
  itemToolName,
  markThreadUntrusted,
  normalizeContextUsage,
  updateContextUsageFromTokenUsage,
} from "./notifications.js";
import {
  clearActiveTurnForChat,
  clearContextUsageForChat,
  clearThreadUntrusted,
  deleteBridgeSessionForThread,
  deleteThreadForChat,
  deleteToolAbortControllerForThread,
  getActiveTurnForChat,
  getContextUsageForChat,
  getThreadForChat,
  getToolAbortControllerForThread,
  hasThreadForChat,
  setActiveTurnForChat,
  setBridgeSessionForThread,
  setContextUsageForChat,
  setThreadForChat,
  setToolAbortControllerForThread,
} from "./state.js";
import { emit, log } from "./telemetry.js";
import type { CodexAppServerClientLike, CodexContextUsage, CodexThreadState, JsonObject } from "./types.js";
import type { PiclawBridgeSession } from "../piclaw-bridge-builtins.js";
import { asError, readString, workspaceCwd } from "./utils.js";

function cancelCodexTurn(nextClient: CodexAppServerClientLike, chatJid: string, threadId: string, turnId: string): void {
  void nextClient.request("turn/interrupt", { threadId, turnId }).catch((err) => {
    log.warn("Failed to cancel Codex turn", {
      operation: "codex_app_server.turn_cancel_failed",
      chatJid,
      threadId,
      turnId,
      err,
    });
  });
}

export function getCodexAppServerContextUsage(chatJid: string): CodexContextUsage | null {
  return getContextUsageForChat(chatJid);
}

export function hasCodexAppServerThread(chatJid: string): boolean {
  return hasThreadForChat(chatJid);
}

export function willCodexAppServerStartNewThread(chatJid: string, bridgeSession?: PiclawBridgeSession | null, toolFilter?: (toolName: string) => boolean): boolean {
  const existing = getThreadForChat(chatJid);
  if (!existing) return true;
  return existing.dynamicToolSignature !== dynamicToolSignature(dynamicToolsConfig(bridgeSession, toolFilter));
}

export function markCodexAppServerThreadUntrustedForTests(chatJid: string): void {
  markThreadUntrusted(getThreadForChat(chatJid)?.threadId ?? null);
}

export function isCodexAppServerThreadUntrustedForTests(chatJid: string): boolean {
  return isUntrustedThread(getThreadForChat(chatJid)?.threadId ?? null);
}

export async function abortCodexAppServerChat(chatJid: string): Promise<boolean> {
  const active = getActiveTurnForChat(chatJid);
  const activeThread = active?.threadId ?? getThreadForChat(chatJid)?.threadId ?? null;
  if (activeThread) getToolAbortControllerForThread(activeThread)?.abort();
  if (!active) return false;
  const nextClient = await getClient();
  cancelCodexTurn(nextClient, chatJid, active.threadId, active.turnId);
  return true;
}

export async function compactCodexAppServerChat(chatJid: string): Promise<void> {
  return withScopedChatRunLock("codex-app-server", chatJid, () => compactCodexAppServerChatUnlocked(chatJid));
}

async function compactCodexAppServerChatUnlocked(chatJid: string): Promise<void> {
  const nextClient = await getClient();
  const thread = getThreadForChat(chatJid);
  if (!thread) throw new Error("Codex app-server has no active thread to compact.");
  const previousUsage = getContextUsageForChat(chatJid);
  clearContextUsageForChat(chatJid);

  const timeoutMs = getCompactionRuntimeConfig().timeoutMs;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let settleTimer: ReturnType<typeof setTimeout> | null = null;
  let compactTurnId: string | null = null;
  let completionError: Error | null = null;
  let unsubscribe: Function | null = null;
  let usageUpdatedDuringCompaction = false;
  const compacted = new Promise<void>((resolve, reject) => {
    const resolveAfterTrailingEvents = () => {
      if (settleTimer) return;
      if (timeout) clearTimeout(timeout);
      settleTimer = setTimeout(() => {
        unsubscribe?.();
        unsubscribe = null;
        resolve();
      }, TOKEN_USAGE_TRAILING_GRACE_MS);
    };
    unsubscribe = nextClient.onNotification((message) => {
      const method = readString(message.method);
      const params = (message.params && typeof message.params === "object" ? message.params : {}) as JsonObject;
      if (params.threadId !== thread.threadId) return;
      if (method === "thread/tokenUsage/updated") {
        const usage = updateContextUsageFromTokenUsage(chatJid, params.tokenUsage);
        if (usage) {
          usageUpdatedDuringCompaction = true;
          log.info("Codex app-server context usage updated after compaction", {
            operation: "codex_app_server.context_usage_updated_after_compaction",
            chatJid,
            tokens: usage.tokens,
            contextWindow: usage.contextWindow,
            percent: usage.percent,
          });
        }
        return;
      }
      if (method === "thread/compacted") {
        resolveAfterTrailingEvents();
        return;
      }
      if (method === "item/started" || method === "item/completed") {
        const item = params.item && typeof params.item === "object" ? params.item as JsonObject : null;
        if (item?.type === "contextCompaction") compactTurnId = readString(params.turnId) ?? compactTurnId;
        return;
      }
      if (method === "turn/completed") {
        const turn = params.turn && typeof params.turn === "object" ? params.turn as JsonObject : null;
        const turnId = readString(turn?.id) ?? readString(params.turnId);
        if (!compactTurnId || turnId !== compactTurnId) return;
        const status = readString(turn?.status);
        if (status && status !== "completed") {
          const error = turn?.error && typeof turn.error === "object" ? turn.error as JsonObject : null;
          completionError = new Error(readString(error?.message) || `Codex compaction turn ${status}`);
          resolveAfterTrailingEvents();
        } else {
          resolveAfterTrailingEvents();
        }
      }
    });
    timeout = setTimeout(() => {
      unsubscribe?.();
      unsubscribe = null;
      reject(new Error(`Codex app-server compaction timed out after ${Math.round(timeoutMs / 1000)}s`));
    }, timeoutMs);
  });

  try {
    await nextClient.request("thread/compact/start", { threadId: thread.threadId });
    await compacted;
    if (completionError) throw completionError;
  } catch (error) {
    if (!usageUpdatedDuringCompaction) {
      if (previousUsage) setContextUsageForChat(chatJid, previousUsage);
      else clearContextUsageForChat(chatJid);
    }
    throw error;
  } finally {
    const cleanup = unsubscribe as (() => void) | null;
    cleanup?.();
    if (timeout) clearTimeout(timeout);
    if (settleTimer) clearTimeout(settleTimer);
  }
}

async function getThread(nextClient: CodexAppServerClientLike, chatJid: string, bridgeSession?: PiclawBridgeSession | null, toolFilter?: (toolName: string) => boolean): Promise<CodexThreadState> {
  const toolsConfig = dynamicToolsConfig(bridgeSession, toolFilter);
  const toolSignature = dynamicToolSignature(toolsConfig);
  const existing = getThreadForChat(chatJid);
  const existingWasUntrusted = existing ? isUntrustedThread(existing.threadId) : false;
  if (existing?.dynamicToolSignature === toolSignature) return existing;
  if (existing) log.info("Restarting Codex app-server thread after dynamic tool set changed", {
    operation: "codex_app_server.thread_restart_for_dynamic_tools",
    chatJid,
    threadId: existing.threadId,
  });

  const config = getAgentBackendConfig();
  const response = await nextClient.request("thread/start", {
    cwd: workspaceCwd(),
    model: getChatModel(chatJid) ?? config.codexAppServerModel,
    approvalPolicy: "on-request",
    approvalsReviewer: "user",
    sandbox: "danger-full-access",
    serviceName: "piclaw",
    ...toolsConfig,
  }) as { thread?: { id?: string } };

  const threadId = response?.thread?.id;
  if (!threadId) throw new Error("Codex app-server did not return a thread id");
  if (existing) {
    deleteBridgeSessionForThread(existing.threadId);
    clearThreadUntrusted(existing.threadId);
    deleteToolAbortControllerForThread(existing.threadId);
    deleteThreadForChat(chatJid);
    clearActiveTurnForChat(chatJid);
  }
  const state = { threadId, dynamicToolSignature: toolSignature };
  setThreadForChat(chatJid, state);
  if (bridgeSession) setBridgeSessionForThread(threadId, bridgeSession);
  if (existingWasUntrusted) markThreadUntrusted(threadId);
  return state;
}

export async function runCodexAppServerPrompt(
  prompt: string,
  chatJid: string,
  runOptions: RunAgentOptions,
  bridgeSession?: PiclawBridgeSession | null,
): Promise<AgentOutput> {
  return withScopedChatRunLock("codex-app-server", chatJid, () => runCodexAppServerPromptUnlocked(prompt, chatJid, runOptions, bridgeSession));
}

async function runCodexAppServerPromptUnlocked(
  prompt: string,
  chatJid: string,
  runOptions: RunAgentOptions,
  bridgeSession?: PiclawBridgeSession | null,
): Promise<AgentOutput> {
  if (runOptions.signal?.aborted) return { status: "error", result: null, error: "Codex app-server aborted" };
  const nextClient = await getClient();
  const thread = await getThread(nextClient, chatJid, bridgeSession, runOptions.toolCeilingFilter);
  if (bridgeSession) setBridgeSessionForThread(thread.threadId, bridgeSession);
  if (runOptions.hasUntrustedExternalContent === true) markThreadUntrusted(thread.threadId);

  const config = getAgentBackendConfig();
  const abortController = new AbortController();
  setToolAbortControllerForThread(thread.threadId, abortController);
  let turnId: string | null = null;
  const streamState = createNativeStreamState();
  let completed = false;
  let completionErrorMessage: string | null = null;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let settleTimer: ReturnType<typeof setTimeout> | null = null;
  let unsubscribe: Function | null = null;
  let abortHandler: (() => void) | null = null;
  let completeTurn: ((turn: JsonObject | null) => void) | null = null;
  let pendingCompletedTurn: JsonObject | null = null;
  let turnStartRequestedAt = 0;
  let firstDeltaLogged = false;

  const finish = new Promise<void>((resolve, reject) => {
    const resolveAfterTrailingEvents = () => {
      if (settleTimer) return;
      if (timeout) clearTimeout(timeout);
      settleTimer = setTimeout(() => {
        unsubscribe?.();
        unsubscribe = null;
        resolve();
      }, TOKEN_USAGE_TRAILING_GRACE_MS);
    };
    const abortRun = () => {
      if (completed) return;
      abortController.abort();
      if (settleTimer) clearTimeout(settleTimer);
      if (turnId) cancelCodexTurn(nextClient, chatJid, thread.threadId, turnId);
      unsubscribe?.();
      unsubscribe = null;
      reject(new Error("Codex app-server aborted"));
    };
    completeTurn = (turn) => {
      const status = readString(turn?.status);
      const error = turn?.error && typeof turn.error === "object" ? turn.error as JsonObject : null;
      completed = status === "completed";
      if (!completed) completionErrorMessage = readString(error?.message) || `Codex turn ${status || "did not complete"}`;
      if (completed) resolveAfterTrailingEvents();
      else resolveAfterTrailingEvents();
    };
    abortHandler = abortRun;
    if (runOptions.signal?.aborted) {
      abortRun();
      return;
    }
    runOptions.signal?.addEventListener("abort", abortRun, { once: true });
    unsubscribe = nextClient.onNotification((message) => {
      const method = readString(message.method);
      const params = (message.params && typeof message.params === "object" ? message.params : {}) as JsonObject;
      if (params.threadId !== thread.threadId) return;
      if (method === "turn/started") {
        const turn = params.turn && typeof params.turn === "object" ? params.turn as JsonObject : null;
        if (turn?.id) turnId = String(turn.id);
        if (turnId) setActiveTurnForChat(chatJid, { threadId: thread.threadId, turnId });
        log.info("Codex app-server turn started", {
          operation: "codex_app_server.turn_started",
          chatJid,
          threadId: thread.threadId,
          turnId,
          msSinceTurnStartRequest: turnStartRequestedAt ? Date.now() - turnStartRequestedAt : null,
        });
        return;
      }
      if (turnId && params.turnId && params.turnId !== turnId) return;
      if (method === "thread/tokenUsage/updated") {
        const usage = updateContextUsageFromTokenUsage(chatJid, params.tokenUsage);
        if (usage) log.info("Codex app-server context usage updated", {
          operation: "codex_app_server.context_usage_updated",
          chatJid,
          tokens: usage.tokens,
          contextWindow: usage.contextWindow,
          percent: usage.percent,
        });
        return;
      }
      if (method === "item/agentMessage/delta") {
        const delta = readString(params.delta) ?? "";
        if (!firstDeltaLogged && delta.length > 0) {
          firstDeltaLogged = true;
          log.info("Codex app-server first text delta", {
            operation: "codex_app_server.first_text_delta",
            chatJid,
            threadId: thread.threadId,
            turnId,
            msSinceTurnStartRequest: turnStartRequestedAt ? Date.now() - turnStartRequestedAt : null,
          });
        }
        emitNativeTextDelta(runOptions, delta, streamState);
        return;
      }
      if (method === "item/reasoning/summaryTextDelta" || method === "item/reasoning/textDelta") {
        const delta = readString(params.delta);
        if (delta) {
          emitNativeThinkingDelta(runOptions, delta, streamState);
        }
        return;
      }
      if (method === "item/started" || method === "item/completed") {
        const item = params.item && typeof params.item === "object" ? params.item as JsonObject : null;
        if (item?.type === "contextCompaction") {
          emit(runOptions.onEvent, { type: method === "item/started" ? "compaction_start" : "compaction_end", source: "codex_app_server", threadId: thread.threadId });
          return;
        }
        if (method === "item/completed" && item?.type === "agentMessage") {
          const text = readString(item.text);
          if (text !== null) streamState.text = text;
          return;
        }
        if (!item || !isToolItem(item)) return;
        emit(runOptions.onEvent, {
          type: method === "item/started" ? "tool_execution_start" : "tool_execution_end",
          toolCallId: item.id,
          toolName: itemToolName(item),
          args: itemArgs(item),
          isError: item.status === "failed" || item.success === false,
        });
        return;
      }
      if (method === "item/commandExecution/outputDelta" || method === "item/fileChange/outputDelta" || method === "item/mcpToolCall/progress") {
        emit(runOptions.onEvent, { type: "tool_execution_update", toolCallId: params.itemId, toolName: null, args: {} });
        return;
      }
      if (method === "thread/compacted") {
        emit(runOptions.onEvent, { type: "compaction_end", source: "codex_app_server", threadId: thread.threadId });
        log.info("Codex app-server compacted thread", { operation: "codex_app_server.thread_compacted", chatJid, threadId: thread.threadId });
        return;
      }
      if (method === "turn/completed") {
        const turn = params.turn && typeof params.turn === "object" ? params.turn as JsonObject : null;
        if (turnId && turn?.id && turn.id !== turnId) return;
        if (!turnId && turn?.id) {
          pendingCompletedTurn = turn;
          return;
        }
        completeTurn?.(turn);
      }
    });

    const timeoutMs = typeof runOptions.timeoutMs === "number" ? runOptions.timeoutMs : 0;
    if (timeoutMs > 0) timeout = setTimeout(() => abortRun(), timeoutMs);
  });

  try {
    const toolsConfig = dynamicToolsConfig(bridgeSession, runOptions.toolCeilingFilter);
    const dynamicToolNames = summarizeDynamicToolNames(toolsConfig);
    log.info("Codex app-server dynamic tools configured", {
      operation: "codex_app_server.dynamic_tools_configured",
      chatJid,
      count: dynamicToolNames.length,
      hasGoogleCalendar: dynamicToolNames.includes("google_calendar"),
      hasGmailFetch: dynamicToolNames.includes("gmail_fetch_email"),
      names: dynamicToolNames.slice(0, 80),
    });
    if (runOptions.signal?.aborted) await finish;
    turnStartRequestedAt = Date.now();
    if (runOptions.signal?.aborted) await finish;
    const response = await nextClient.request("turn/start", {
      threadId: thread.threadId,
      cwd: workspaceCwd(),
      input: buildUserInput(chatJid, prompt, runOptions.inputMediaIds, dynamicToolNames),
      model: getChatModel(chatJid) ?? config.codexAppServerModel,
      ...turnReasoningConfig(chatJid),
      approvalPolicy: "on-request",
      approvalsReviewer: "user",
      sandboxPolicy: { type: "dangerFullAccess" },
      ...toolsConfig,
    }) as { turn?: { id?: string } };
    if (response?.turn?.id) {
      turnId = String(response.turn.id);
      setActiveTurnForChat(chatJid, { threadId: thread.threadId, turnId });
      const pendingTurn = pendingCompletedTurn as JsonObject | null;
      const completePendingTurn = completeTurn as ((turn: JsonObject | null) => void) | null;
      if (pendingTurn && readString(pendingTurn.id) === turnId && completePendingTurn) completePendingTurn(pendingTurn);
      log.info("Codex app-server turn/start accepted", {
        operation: "codex_app_server.turn_start_accepted",
        chatJid,
        threadId: thread.threadId,
        turnId,
        msSinceTurnStartRequest: Date.now() - turnStartRequestedAt,
      });
    }
    await finish;
  } catch (err) {
    if (timeout) clearTimeout(timeout);
    const error = asError(err);
    finishNativeStreams(runOptions, streamState);
    emitNativeMessageEnd(runOptions, streamState.text, error.message);
    return nativeOutputWithAttachments(chatJid, "error", streamState.text || null, error.message);
  } finally {
    const cleanup = unsubscribe as (() => void) | null;
    cleanup?.();
    if (abortHandler) runOptions.signal?.removeEventListener("abort", abortHandler);
    const activeTurn = getActiveTurnForChat(chatJid);
    if (activeTurn?.threadId === thread.threadId && activeTurn.turnId === turnId) clearActiveTurnForChat(chatJid);
    if (getToolAbortControllerForThread(thread.threadId) === abortController) deleteToolAbortControllerForThread(thread.threadId);
    abortController.abort();
    if (timeout) clearTimeout(timeout);
    if (settleTimer) clearTimeout(settleTimer);
  }

  finishNativeStreams(runOptions, streamState);
  emitNativeMessageEnd(runOptions, streamState.text, completionErrorMessage);
  if (!completed) return nativeOutputWithAttachments(chatJid, "error", streamState.text || null, completionErrorMessage || "Codex turn failed");
  return nativeOutputWithAttachments(chatJid, "success", streamState.text || null);
}
