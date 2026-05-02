import { getAgentBackendConfig, getCompactionRuntimeConfig } from "../../core/config.js";
import type { AgentOutput, RunAgentOptions } from "../contracts.js";
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
  activeTurnByChat,
  bridgeSessionByThread,
  chatByThread,
  contextUsageByChat,
  threadsByChat,
  toolAbortControllersByThread,
  untrustedExternalContentByThread,
} from "./state.js";
import { emit, log } from "./telemetry.js";
import type { CodexAppServerClientLike, CodexContextUsage, CodexThreadState, JsonObject, PiclawBridgeSession } from "./types.js";
import { asError, readString, workspaceCwd } from "./utils.js";

function cancelCodexTurn(nextClient: CodexAppServerClientLike, chatJid: string, threadId: string, turnId: string): void {
  void nextClient.request("turn/cancel", { threadId, turnId }).catch((err) => {
    log.warn("Failed to cancel Codex turn", {
      operation: "codex_app_server.turn_cancel_failed",
      chatJid,
      threadId,
      turnId,
      err,
    });
  });
}

const SENTENCE_STARTERS_AFTER_LIST = "(?:No|The|This|That|There|It|I|We|You|A|An)";
const MONTH_NAMES = "(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)";

function normalizeCodexAppServerAssistantText(text: string): string {
  const normalized = text.replace(/\r\n?/g, "\n");
  const dateFixed = normalized
    .replace(new RegExp(`\\b(${MONTH_NAMES})(\\d{1,2})(\\b)`, "g"), "$1 $2$3")
    .replace(new RegExp(`([A-Za-z])-(until|through|before|after|since)-(?=${MONTH_NAMES}|\\d)`, "gi"), "$1 $2 ");
  const bulletFixed = dateFixed.replace(/([^\s\n])(-\s+(?=[A-Za-z0-9]))/g, "$1\n$2");
  if (!bulletFixed.includes("\n- ")) return bulletFixed;
  return bulletFixed.replace(
    new RegExp(`([a-z0-9.!?])(${SENTENCE_STARTERS_AFTER_LIST}\\s+)`, "g"),
    "$1\n\n$2",
  );
}

export function normalizeCodexAppServerAssistantTextForTests(text: string): string {
  return normalizeCodexAppServerAssistantText(text);
}

export function getCodexAppServerContextUsage(chatJid: string): CodexContextUsage | null {
  return contextUsageByChat.get(chatJid) ?? null;
}

export function hasCodexAppServerThread(chatJid: string): boolean {
  return threadsByChat.has(chatJid);
}

export function willCodexAppServerStartNewThread(chatJid: string, bridgeSession?: PiclawBridgeSession | null): boolean {
  const existing = threadsByChat.get(chatJid);
  if (!existing) return true;
  return existing.dynamicToolSignature !== dynamicToolSignature(dynamicToolsConfig(bridgeSession));
}

export function markCodexAppServerThreadUntrustedForTests(chatJid: string): void {
  markThreadUntrusted(threadsByChat.get(chatJid)?.threadId ?? null);
}

export function isCodexAppServerThreadUntrustedForTests(chatJid: string): boolean {
  return isUntrustedThread(threadsByChat.get(chatJid)?.threadId ?? null);
}

export async function abortCodexAppServerChat(chatJid: string): Promise<boolean> {
  const active = activeTurnByChat.get(chatJid);
  const activeThread = active?.threadId ?? threadsByChat.get(chatJid)?.threadId ?? null;
  if (activeThread) toolAbortControllersByThread.get(activeThread)?.abort();
  if (!active) return false;
  const nextClient = await getClient();
  cancelCodexTurn(nextClient, chatJid, active.threadId, active.turnId);
  return true;
}

export async function compactCodexAppServerChat(chatJid: string): Promise<void> {
  const nextClient = await getClient();
  const thread = threadsByChat.get(chatJid);
  if (!thread) throw new Error("Codex app-server has no active thread to compact.");
  const previousUsage = contextUsageByChat.get(chatJid) ?? null;
  contextUsageByChat.delete(chatJid);

  const timeoutMs = getCompactionRuntimeConfig().timeoutMs;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let settleTimer: ReturnType<typeof setTimeout> | null = null;
  let compactTurnId: string | null = null;
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
          unsubscribe?.();
          unsubscribe = null;
          if (timeout) clearTimeout(timeout);
          if (settleTimer) clearTimeout(settleTimer);
          const error = turn?.error && typeof turn.error === "object" ? turn.error as JsonObject : null;
          reject(new Error(readString(error?.message) || `Codex compaction turn ${status}`));
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
  } catch (error) {
    if (!usageUpdatedDuringCompaction) {
      if (previousUsage) contextUsageByChat.set(chatJid, previousUsage);
      else contextUsageByChat.delete(chatJid);
    }
    throw error;
  } finally {
    const cleanup = unsubscribe as (() => void) | null;
    cleanup?.();
    if (timeout) clearTimeout(timeout);
    if (settleTimer) clearTimeout(settleTimer);
  }
}

async function getThread(nextClient: CodexAppServerClientLike, chatJid: string, bridgeSession?: PiclawBridgeSession | null): Promise<CodexThreadState> {
  const toolsConfig = dynamicToolsConfig(bridgeSession);
  const toolSignature = dynamicToolSignature(toolsConfig);
  const existing = threadsByChat.get(chatJid);
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
    threadsByChat.delete(chatJid);
    chatByThread.delete(existing.threadId);
    bridgeSessionByThread.delete(existing.threadId);
    untrustedExternalContentByThread.delete(existing.threadId);
    toolAbortControllersByThread.delete(existing.threadId);
    activeTurnByChat.delete(chatJid);
  }
  const state = { threadId, dynamicToolSignature: toolSignature };
  threadsByChat.set(chatJid, state);
  chatByThread.set(threadId, chatJid);
  if (bridgeSession) bridgeSessionByThread.set(threadId, bridgeSession);
  if (existingWasUntrusted) markThreadUntrusted(threadId);
  return state;
}

export async function runCodexAppServerPrompt(
  prompt: string,
  chatJid: string,
  runOptions: RunAgentOptions,
  bridgeSession?: PiclawBridgeSession | null,
): Promise<AgentOutput> {
  if (runOptions.signal?.aborted) return { status: "error", result: null, error: "Codex app-server aborted" };
  const nextClient = await getClient();
  const thread = await getThread(nextClient, chatJid, bridgeSession);
  if (bridgeSession) bridgeSessionByThread.set(thread.threadId, bridgeSession);
  if (runOptions.hasUntrustedExternalContent === true) markThreadUntrusted(thread.threadId);

  const config = getAgentBackendConfig();
  const abortController = new AbortController();
  toolAbortControllersByThread.set(thread.threadId, abortController);
  let turnId: string | null = null;
  let finalText = "";
  let emittedText = "";
  let textStarted = false;
  let thinkingStarted = false;
  let thinkingText = "";
  let completed = false;
  let completionErrorMessage: string | null = null;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let settleTimer: ReturnType<typeof setTimeout> | null = null;
  let unsubscribe: Function | null = null;
  let abortHandler: (() => void) | null = null;

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
        if (!textStarted) {
          textStarted = true;
          emit(runOptions.onEvent, {
            type: "message_update",
            assistantMessageEvent: { type: "text_start", contentIndex: 0, partial: { type: "text", text: "" } },
          });
        }
        finalText += delta;
        const displayText = normalizeCodexAppServerAssistantText(finalText);
        const canStreamNormalizedDelta = displayText.startsWith(emittedText);
        const displayDelta = canStreamNormalizedDelta ? displayText.slice(emittedText.length) : delta;
        emittedText = canStreamNormalizedDelta ? displayText : `${emittedText}${delta}`;
        emit(runOptions.onEvent, {
          type: "message_update",
          assistantMessageEvent: { type: "text_delta", delta: displayDelta, contentIndex: 0, partial: { type: "text", text: displayText } },
        });
        return;
      }
      if (method === "item/reasoning/summaryTextDelta" || method === "item/reasoning/textDelta") {
        const delta = readString(params.delta);
        if (delta) {
          if (!thinkingStarted) {
            thinkingStarted = true;
            emit(runOptions.onEvent, {
              type: "message_update",
              assistantMessageEvent: { type: "thinking_start", contentIndex: 0, partial: { type: "thinking", thinking: "" } },
            });
          }
          thinkingText += delta;
          emit(runOptions.onEvent, {
            type: "message_update",
            assistantMessageEvent: { type: "thinking_delta", delta, contentIndex: 0, partial: { type: "thinking", thinking: thinkingText } },
          });
        }
        return;
      }
      if (method === "item/started" || method === "item/completed") {
        const item = params.item && typeof params.item === "object" ? params.item as JsonObject : null;
        if (item?.type === "contextCompaction") {
          emit(runOptions.onEvent, { type: method === "item/started" ? "compaction_start" : "compaction_end", source: "codex_app_server", threadId: thread.threadId });
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
        const status = readString(turn?.status);
        const error = turn?.error && typeof turn.error === "object" ? turn.error as JsonObject : null;
        completed = status === "completed";
        if (!completed) completionErrorMessage = readString(error?.message) || `Codex turn ${status || "did not complete"}`;
        if (completed) resolveAfterTrailingEvents();
        else {
          unsubscribe?.();
          unsubscribe = null;
          if (timeout) clearTimeout(timeout);
          resolve();
        }
      }
    });

    const timeoutMs = typeof runOptions.timeoutMs === "number" ? runOptions.timeoutMs : 0;
    if (timeoutMs > 0) timeout = setTimeout(() => abortRun(), timeoutMs);
  });

  try {
    const toolsConfig = dynamicToolsConfig(bridgeSession);
    const dynamicToolNames = summarizeDynamicToolNames(toolsConfig);
    log.info("Codex app-server dynamic tools configured", {
      operation: "codex_app_server.dynamic_tools_configured",
      chatJid,
      count: dynamicToolNames.length,
      hasGoogleCalendar: dynamicToolNames.includes("google_calendar"),
      hasGmailFetch: dynamicToolNames.includes("gmail_fetch_email"),
      names: dynamicToolNames.slice(0, 80),
    });
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
      activeTurnByChat.set(chatJid, { threadId: thread.threadId, turnId });
    }
    await finish;
  } catch (err) {
    if (timeout) clearTimeout(timeout);
    const error = asError(err);
    emit(runOptions.onEvent, {
      type: "message_end",
      message: { role: "assistant", content: [], stopReason: "error", errorMessage: error.message },
    });
    return { status: "error", result: null, error: error.message };
  } finally {
    const cleanup = unsubscribe as (() => void) | null;
    cleanup?.();
    if (abortHandler) runOptions.signal?.removeEventListener("abort", abortHandler);
    activeTurnByChat.delete(chatJid);
    toolAbortControllersByThread.delete(thread.threadId);
    abortController.abort();
    if (timeout) clearTimeout(timeout);
    if (settleTimer) clearTimeout(settleTimer);
  }

  finalText = normalizeCodexAppServerAssistantText(finalText);
  if (textStarted) {
    emit(runOptions.onEvent, {
      type: "message_update",
      assistantMessageEvent: { type: "text_end", contentIndex: 0, partial: { type: "text", text: finalText } },
    });
  }
  if (thinkingStarted) {
    emit(runOptions.onEvent, {
      type: "message_update",
      assistantMessageEvent: { type: "thinking_end", contentIndex: 0, content: thinkingText },
    });
  }
  emit(runOptions.onEvent, {
    type: "message_end",
    message: {
      role: "assistant",
      content: finalText ? [{ type: "text", text: finalText }] : [],
      stopReason: completed ? "stop" : "error",
      ...(completionErrorMessage ? { errorMessage: completionErrorMessage } : {}),
    },
  });

  if (!completed) return { status: "error", result: finalText || null, error: completionErrorMessage || "Codex turn failed" };
  return { status: "success", result: finalText || null };
}
