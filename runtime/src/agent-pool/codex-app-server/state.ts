import type {
  CodexAppServerClientLike,
  CodexContextUsage,
  CodexModelOption,
  CodexProviderUsageSnapshot,
  CodexThreadState,
  CodexThinkingLevel,
  PiclawBridgeSession,
} from "./types.js";

export type ActiveCodexTurn = { threadId: string; turnId: string };

export interface CodexChatState {
  thread: CodexThreadState | null;
  contextUsage: CodexContextUsage | null;
  activeTurn: ActiveCodexTurn | null;
  model: string | null | undefined;
  thinking: CodexThinkingLevel | undefined;
  fast: boolean | undefined;
  untrustedThreadIds: Set<string>;
  bridgeSessionsByThread: Map<string, PiclawBridgeSession>;
  toolAbortControllersByThread: Map<string, AbortController>;
}

let client: CodexAppServerClientLike | null = null;
let providerUsageCache: { expiresAt: number; value: CodexProviderUsageSnapshot | null } | null = null;
let providerUsageInFlight: Promise<CodexProviderUsageSnapshot | null> | null = null;
let modelOptionsCache: CodexModelOption[] | null = null;
let modelOptionsCacheAt = 0;
let testClientFactory: (() => CodexAppServerClientLike) | null = null;

const chatStateByChat = new Map<string, CodexChatState>();
const chatByThreadIndex = new Map<string, string>();

function createCodexChatState(): CodexChatState {
  return {
    thread: null,
    contextUsage: null,
    activeTurn: null,
    model: undefined,
    thinking: undefined,
    fast: undefined,
    untrustedThreadIds: new Set(),
    bridgeSessionsByThread: new Map(),
    toolAbortControllersByThread: new Map(),
  };
}

export function getCodexChatState(chatJid: string): CodexChatState {
  let state = chatStateByChat.get(chatJid);
  if (!state) {
    state = createCodexChatState();
    chatStateByChat.set(chatJid, state);
  }
  return state;
}

function stateForThread(threadId: string): CodexChatState | null {
  const chatJid = chatByThreadIndex.get(threadId);
  if (chatJid) return chatStateByChat.get(chatJid) ?? null;
  for (const state of chatStateByChat.values()) {
    if (
      state.untrustedThreadIds.has(threadId)
      || state.bridgeSessionsByThread.has(threadId)
      || state.toolAbortControllersByThread.has(threadId)
    ) return state;
  }
  return null;
}

export function getThreadForChat(chatJid: string): CodexThreadState | null {
  return chatStateByChat.get(chatJid)?.thread ?? null;
}

export function hasThreadForChat(chatJid: string): boolean {
  return Boolean(chatStateByChat.get(chatJid)?.thread);
}

export function setThreadForChat(chatJid: string, thread: CodexThreadState): void {
  const state = getCodexChatState(chatJid);
  if (state.thread?.threadId && state.thread.threadId !== thread.threadId) chatByThreadIndex.delete(state.thread.threadId);
  state.thread = thread;
  chatByThreadIndex.set(thread.threadId, chatJid);
}

export function deleteThreadForChat(chatJid: string): boolean {
  const state = chatStateByChat.get(chatJid);
  if (!state?.thread) return false;
  chatByThreadIndex.delete(state.thread.threadId);
  state.thread = null;
  return true;
}

export function getChatForThread(threadId: string): string | null {
  return chatByThreadIndex.get(threadId) ?? null;
}

export function getContextUsageForChat(chatJid: string): CodexContextUsage | null {
  return chatStateByChat.get(chatJid)?.contextUsage ?? null;
}

export function setContextUsageForChat(chatJid: string, usage: CodexContextUsage): void {
  getCodexChatState(chatJid).contextUsage = usage;
}

export function clearContextUsageForChat(chatJid: string): boolean {
  const state = chatStateByChat.get(chatJid);
  if (!state?.contextUsage) return false;
  state.contextUsage = null;
  return true;
}

export function getActiveTurnForChat(chatJid: string): ActiveCodexTurn | null {
  return chatStateByChat.get(chatJid)?.activeTurn ?? null;
}

export function setActiveTurnForChat(chatJid: string, turn: ActiveCodexTurn): void {
  getCodexChatState(chatJid).activeTurn = turn;
}

export function clearActiveTurnForChat(chatJid: string): boolean {
  const state = chatStateByChat.get(chatJid);
  if (!state?.activeTurn) return false;
  state.activeTurn = null;
  return true;
}

export function isCodexModelSetForChat(chatJid: string): boolean {
  return chatStateByChat.has(chatJid) && chatStateByChat.get(chatJid)!.model !== undefined;
}

export function getCodexModelForChat(chatJid: string): string | null | undefined {
  return chatStateByChat.get(chatJid)?.model;
}

export function setCodexModelForChat(chatJid: string, model: string | null): void {
  getCodexChatState(chatJid).model = model;
}

export function getCodexThinkingForChat(chatJid: string): CodexThinkingLevel | undefined {
  return chatStateByChat.get(chatJid)?.thinking;
}

export function setCodexThinkingForChat(chatJid: string, thinking: CodexThinkingLevel): void {
  getCodexChatState(chatJid).thinking = thinking;
}

export function isCodexFastModeSetForChat(chatJid: string): boolean {
  return chatStateByChat.has(chatJid) && chatStateByChat.get(chatJid)!.fast !== undefined;
}

export function getCodexFastModeForChat(chatJid: string): boolean | undefined {
  return chatStateByChat.get(chatJid)?.fast;
}

export function setCodexFastModeForChat(chatJid: string, fast: boolean): void {
  getCodexChatState(chatJid).fast = fast;
}

export function isThreadUntrusted(threadId: string | null): boolean {
  return Boolean(threadId && stateForThread(threadId)?.untrustedThreadIds.has(threadId));
}

export function markThreadUntrusted(threadId: string | null): void {
  const state = threadId ? stateForThread(threadId) : null;
  if (threadId && state) state.untrustedThreadIds.add(threadId);
}

export function clearThreadUntrusted(threadId: string): boolean {
  return stateForThread(threadId)?.untrustedThreadIds.delete(threadId) ?? false;
}

export function getBridgeSessionForThread(threadId: string): PiclawBridgeSession | undefined {
  return stateForThread(threadId)?.bridgeSessionsByThread.get(threadId);
}

export function setBridgeSessionForThread(threadId: string, session: PiclawBridgeSession): void {
  stateForThread(threadId)?.bridgeSessionsByThread.set(threadId, session);
}

export function deleteBridgeSessionForThread(threadId: string): boolean {
  return stateForThread(threadId)?.bridgeSessionsByThread.delete(threadId) ?? false;
}

export function getToolAbortControllerForThread(threadId: string): AbortController | undefined {
  return stateForThread(threadId)?.toolAbortControllersByThread.get(threadId);
}

export function setToolAbortControllerForThread(threadId: string, controller: AbortController): void {
  stateForThread(threadId)?.toolAbortControllersByThread.set(threadId, controller);
}

export function deleteToolAbortControllerForThread(threadId: string): boolean {
  return stateForThread(threadId)?.toolAbortControllersByThread.delete(threadId) ?? false;
}

export function getClientState(): CodexAppServerClientLike | null {
  return client;
}

export function setClient(next: CodexAppServerClientLike | null): void {
  client = next;
}

export function getTestClientFactory(): (() => CodexAppServerClientLike) | null {
  return testClientFactory;
}

export function setTestClientFactory(factory: (() => CodexAppServerClientLike) | null): void {
  testClientFactory = factory;
}

export function getProviderUsageCache(): { expiresAt: number; value: CodexProviderUsageSnapshot | null } | null {
  return providerUsageCache;
}

export function setProviderUsageCache(next: { expiresAt: number; value: CodexProviderUsageSnapshot | null } | null): void {
  providerUsageCache = next;
}

export function getProviderUsageInFlight(): Promise<CodexProviderUsageSnapshot | null> | null {
  return providerUsageInFlight;
}

export function setProviderUsageInFlight(next: Promise<CodexProviderUsageSnapshot | null> | null): void {
  providerUsageInFlight = next;
}

export function getModelOptionsCache(): { value: CodexModelOption[] | null; at: number } {
  return { value: modelOptionsCache, at: modelOptionsCacheAt };
}

export function setModelOptionsCache(next: CodexModelOption[] | null, at = Date.now()): void {
  modelOptionsCache = next;
  modelOptionsCacheAt = next ? at : 0;
}

export function resetCodexAppServerState(): void {
  chatStateByChat.clear();
  chatByThreadIndex.clear();
  client = null;
  providerUsageCache = null;
  providerUsageInFlight = null;
  modelOptionsCache = null;
  modelOptionsCacheAt = 0;
  testClientFactory = null;
}
