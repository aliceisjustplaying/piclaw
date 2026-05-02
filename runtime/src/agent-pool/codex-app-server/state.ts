import type {
  CodexAppServerClientLike,
  CodexContextUsage,
  CodexModelOption,
  CodexProviderUsageSnapshot,
  CodexThreadState,
  CodexThinkingLevel,
  PiclawBridgeSession,
} from "./types.js";

export let client: CodexAppServerClientLike | null = null;
export const threadsByChat = new Map<string, CodexThreadState>();
export const chatByThread = new Map<string, string>();
export const contextUsageByChat = new Map<string, CodexContextUsage>();
export const untrustedExternalContentByThread = new Map<string, boolean>();
export const toolAbortControllersByThread = new Map<string, AbortController>();
export const activeTurnByChat = new Map<string, { threadId: string; turnId: string }>();
export const modelByChat = new Map<string, string | null>();
export const thinkingByChat = new Map<string, CodexThinkingLevel>();
export const fastByChat = new Map<string, boolean>();
export const bridgeSessionByThread = new Map<string, PiclawBridgeSession>();

export let providerUsageCache: { expiresAt: number; value: CodexProviderUsageSnapshot | null } | null = null;
export let providerUsageInFlight: Promise<CodexProviderUsageSnapshot | null> | null = null;
export let modelOptionsCache: CodexModelOption[] | null = null;
export let modelOptionsCacheAt = 0;
export let testClientFactory: (() => CodexAppServerClientLike) | null = null;

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
  modelOptionsCacheAt = at;
}

export function resetCodexAppServerState(): void {
  threadsByChat.clear();
  chatByThread.clear();
  bridgeSessionByThread.clear();
  untrustedExternalContentByThread.clear();
  toolAbortControllersByThread.clear();
  activeTurnByChat.clear();
  contextUsageByChat.clear();
  providerUsageCache = null;
  providerUsageInFlight = null;
}
