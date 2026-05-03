import type {
  CodexAppServerClientLike,
  CodexContextUsage,
  CodexModelOption,
  CodexProviderUsageSnapshot,
  CodexThreadState,
  CodexThinkingLevel,
  PiclawBridgeSession,
} from "./types.js";

type ActiveCodexTurn = { threadId: string; turnId: string };

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

const chatStateByChat = new Map<string, CodexChatState>();
const chatByThreadIndex = new Map<string, string>();

export let client: CodexAppServerClientLike | null = null;
export let providerUsageCache: { expiresAt: number; value: CodexProviderUsageSnapshot | null } | null = null;
export let providerUsageInFlight: Promise<CodexProviderUsageSnapshot | null> | null = null;
export let modelOptionsCache: CodexModelOption[] | null = null;
export let modelOptionsCacheAt = 0;
export let testClientFactory: (() => CodexAppServerClientLike) | null = null;

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

function chatForThread(threadId: string): string | null {
  return chatByThreadIndex.get(threadId) ?? null;
}

function stateForThread(threadId: string): CodexChatState | null {
  const chatJid = chatForThread(threadId);
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

function indexThread(chatJid: string, threadId: string): void {
  chatByThreadIndex.set(threadId, chatJid);
}

function unindexThread(threadId: string): void {
  chatByThreadIndex.delete(threadId);
}

export const threadsByChat: {
  get(chatJid: string): CodexThreadState | undefined;
  set(chatJid: string, thread: CodexThreadState): void;
  has(chatJid: string): boolean;
  delete(chatJid: string): boolean;
  clear(): void;
} = {
  get(chatJid: string): CodexThreadState | undefined {
    return chatStateByChat.get(chatJid)?.thread ?? undefined;
  },
  set(chatJid: string, thread: CodexThreadState): void {
    const state = getCodexChatState(chatJid);
    if (state.thread?.threadId && state.thread.threadId !== thread.threadId) unindexThread(state.thread.threadId);
    state.thread = thread;
    indexThread(chatJid, thread.threadId);
  },
  has(chatJid: string): boolean {
    return Boolean(chatStateByChat.get(chatJid)?.thread);
  },
  delete(chatJid: string): boolean {
    const state = chatStateByChat.get(chatJid);
    if (!state?.thread) return false;
    unindexThread(state.thread.threadId);
    state.thread = null;
    return true;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.thread = null;
    chatByThreadIndex.clear();
  },
};

export const chatByThread: {
  get(threadId: string): string | undefined;
  set(threadId: string, chatJid: string): void;
  delete(threadId: string): boolean;
  clear(): void;
} = {
  get(threadId: string): string | undefined {
    return chatByThreadIndex.get(threadId);
  },
  set(threadId: string, chatJid: string): void {
    indexThread(chatJid, threadId);
  },
  delete(threadId: string): boolean {
    const existed = chatByThreadIndex.has(threadId);
    unindexThread(threadId);
    return existed;
  },
  clear(): void {
    chatByThreadIndex.clear();
  },
};

export const contextUsageByChat: {
  get(chatJid: string): CodexContextUsage | undefined;
  set(chatJid: string, usage: CodexContextUsage): void;
  delete(chatJid: string): boolean;
  clear(): void;
} = {
  get(chatJid: string): CodexContextUsage | undefined {
    return chatStateByChat.get(chatJid)?.contextUsage ?? undefined;
  },
  set(chatJid: string, usage: CodexContextUsage): void {
    getCodexChatState(chatJid).contextUsage = usage;
  },
  delete(chatJid: string): boolean {
    const state = chatStateByChat.get(chatJid);
    if (!state?.contextUsage) return false;
    state.contextUsage = null;
    return true;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.contextUsage = null;
  },
};

export const activeTurnByChat: {
  get(chatJid: string): ActiveCodexTurn | undefined;
  set(chatJid: string, turn: ActiveCodexTurn): void;
  delete(chatJid: string): boolean;
  clear(): void;
} = {
  get(chatJid: string): ActiveCodexTurn | undefined {
    return chatStateByChat.get(chatJid)?.activeTurn ?? undefined;
  },
  set(chatJid: string, turn: ActiveCodexTurn): void {
    getCodexChatState(chatJid).activeTurn = turn;
  },
  delete(chatJid: string): boolean {
    const state = chatStateByChat.get(chatJid);
    if (!state?.activeTurn) return false;
    state.activeTurn = null;
    return true;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.activeTurn = null;
  },
};

export const modelByChat: {
  get(chatJid: string): string | null | undefined;
  set(chatJid: string, model: string | null): void;
  has(chatJid: string): boolean;
  clear(): void;
} = {
  get(chatJid: string): string | null | undefined {
    return chatStateByChat.get(chatJid)?.model;
  },
  set(chatJid: string, model: string | null): void {
    getCodexChatState(chatJid).model = model;
  },
  has(chatJid: string): boolean {
    return chatStateByChat.has(chatJid) && chatStateByChat.get(chatJid)!.model !== undefined;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.model = undefined;
  },
};

export const thinkingByChat: {
  get(chatJid: string): CodexThinkingLevel | undefined;
  set(chatJid: string, thinking: CodexThinkingLevel): void;
  clear(): void;
} = {
  get(chatJid: string): CodexThinkingLevel | undefined {
    return chatStateByChat.get(chatJid)?.thinking;
  },
  set(chatJid: string, thinking: CodexThinkingLevel): void {
    getCodexChatState(chatJid).thinking = thinking;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.thinking = undefined;
  },
};

export const fastByChat: {
  get(chatJid: string): boolean | undefined;
  set(chatJid: string, fast: boolean): void;
  has(chatJid: string): boolean;
  clear(): void;
} = {
  get(chatJid: string): boolean | undefined {
    return chatStateByChat.get(chatJid)?.fast;
  },
  set(chatJid: string, fast: boolean): void {
    getCodexChatState(chatJid).fast = fast;
  },
  has(chatJid: string): boolean {
    return chatStateByChat.has(chatJid) && chatStateByChat.get(chatJid)!.fast !== undefined;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.fast = undefined;
  },
};

export const untrustedExternalContentByThread: {
  get(threadId: string): boolean | undefined;
  set(threadId: string, value: boolean): void;
  delete(threadId: string): boolean;
  clear(): void;
} = {
  get(threadId: string): boolean | undefined {
    return stateForThread(threadId)?.untrustedThreadIds.has(threadId) || undefined;
  },
  set(threadId: string, value: boolean): void {
    const state = stateForThread(threadId);
    if (state && value) state.untrustedThreadIds.add(threadId);
    if (state && !value) state.untrustedThreadIds.delete(threadId);
  },
  delete(threadId: string): boolean {
    const state = stateForThread(threadId);
    return state?.untrustedThreadIds.delete(threadId) ?? false;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.untrustedThreadIds.clear();
  },
};

export const bridgeSessionByThread: {
  get(threadId: string): PiclawBridgeSession | undefined;
  set(threadId: string, session: PiclawBridgeSession): void;
  delete(threadId: string): boolean;
  clear(): void;
} = {
  get(threadId: string): PiclawBridgeSession | undefined {
    return stateForThread(threadId)?.bridgeSessionsByThread.get(threadId);
  },
  set(threadId: string, session: PiclawBridgeSession): void {
    stateForThread(threadId)?.bridgeSessionsByThread.set(threadId, session);
  },
  delete(threadId: string): boolean {
    return stateForThread(threadId)?.bridgeSessionsByThread.delete(threadId) ?? false;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.bridgeSessionsByThread.clear();
  },
};

export const toolAbortControllersByThread: {
  get(threadId: string): AbortController | undefined;
  set(threadId: string, controller: AbortController): void;
  delete(threadId: string): boolean;
  clear(): void;
} = {
  get(threadId: string): AbortController | undefined {
    return stateForThread(threadId)?.toolAbortControllersByThread.get(threadId);
  },
  set(threadId: string, controller: AbortController): void {
    stateForThread(threadId)?.toolAbortControllersByThread.set(threadId, controller);
  },
  delete(threadId: string): boolean {
    return stateForThread(threadId)?.toolAbortControllersByThread.delete(threadId) ?? false;
  },
  clear(): void {
    for (const state of chatStateByChat.values()) state.toolAbortControllersByThread.clear();
  },
};

export function setClient(next: CodexAppServerClientLike | null): void {
  client = next;
}

export function setTestClientFactory(factory: (() => CodexAppServerClientLike) | null): void {
  testClientFactory = factory;
}

export function setProviderUsageCache(next: { expiresAt: number; value: CodexProviderUsageSnapshot | null } | null): void {
  providerUsageCache = next;
}

export function setProviderUsageInFlight(next: Promise<CodexProviderUsageSnapshot | null> | null): void {
  providerUsageInFlight = next;
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
