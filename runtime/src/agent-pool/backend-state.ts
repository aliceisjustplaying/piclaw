import { extensionKvGet, extensionKvSet } from "../db.js";
import { getAgentBackendConfig, type AgentBackend } from "../core/config.js";
import { getDb } from "../db/connection.js";
import { createLogger } from "../utils/logger.js";

const EXTENSION_ID = "agent-backend";
const STATE_KEY = "state";
const HANDOFF_MAX_CHARS = 16_000;
const volatileStateByChat = new Map<string, ChatBackendState>();
const log = createLogger("agent-pool.backend-state");

export interface ChatBackendState {
  backend?: AgentBackend;
  handoff?: BackendHandoffState | null;
  codex?: CodexBackendPersistedState;
  claude?: ClaudeBackendPersistedState;
}

export interface BackendHandoffState {
  from: AgentBackend;
  to: AgentBackend;
  summary: string;
  createdAt: string;
  usedAt?: string | null;
}

export interface CodexBackendPersistedState {
  model?: string | null;
  thinking?: string;
  fast?: boolean;
}

export interface ClaudeBackendPersistedState {
  model?: string | null;
  thinking?: string;
  providerUsage?: unknown;
  contextUsage?: unknown;
  hasUntrustedExternalContent?: boolean;
}

function normalizeBackend(value: string | undefined | null): AgentBackend | null {
  const raw = (value || "").trim().toLowerCase();
  if (!raw || raw === "default") return null;
  if (raw === "pi") return "pi";
  if (raw === "codex" || raw === "codex-app-server") return "codex-app-server";
  if (raw === "claude" || raw === "claude-sdk" || raw === "claude-agent-sdk") return "claude-agent-sdk";
  return null;
}

function shouldUseVolatileFallback(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /closed database|no such table: extension_kv|database is not open/i.test(message);
}

export function getChatAgentBackend(chatJid: string): AgentBackend {
  return readState(chatJid).backend ?? getAgentBackendConfig().backend;
}

function readState(chatJid: string): ChatBackendState {
  try {
    // Volatile fallback is only for focused adapter tests and init/shutdown gaps; successful KV reads remain authoritative.
    return extensionKvGet<ChatBackendState>(EXTENSION_ID, STATE_KEY, "chat", chatJid) ?? volatileStateByChat.get(chatJid) ?? {};
  } catch (error) {
    if (!shouldUseVolatileFallback(error)) throw error;
    log.warn("Falling back to volatile backend state read", {
      operation: "agent_backend.kv_read_failed",
      chatJid,
      err: error,
    });
    return volatileStateByChat.get(chatJid) ?? {};
  }
}

function writeState(chatJid: string, state: ChatBackendState): void {
  volatileStateByChat.set(chatJid, state);
  try {
    extensionKvSet(EXTENSION_ID, STATE_KEY, state, "chat", chatJid);
  } catch (error) {
    if (!shouldUseVolatileFallback(error)) throw error;
    log.warn("Falling back to volatile backend state write", {
      operation: "agent_backend.kv_write_failed",
      chatJid,
      err: error,
    });
  }
}

function updateState<T>(chatJid: string, update: (state: ChatBackendState) => { next: ChatBackendState; result: T }): T {
  try {
    return getDb().transaction(() => {
      const { next, result } = update(readState(chatJid));
      writeState(chatJid, next);
      return result;
    })();
  } catch (error) {
    if (!shouldUseVolatileFallback(error)) throw error;
    log.warn("Falling back to volatile backend state transaction", {
      operation: "agent_backend.kv_transaction_failed",
      chatJid,
      err: error,
    });
    const { next, result } = update(volatileStateByChat.get(chatJid) ?? {});
    volatileStateByChat.set(chatJid, next);
    return result;
  }
}

export function getPersistedBackendState(chatJid: string): ChatBackendState {
  return readState(chatJid);
}

export function updatePersistedBackendState<T>(
  chatJid: string,
  update: (state: ChatBackendState) => { next: ChatBackendState; result: T },
): T {
  return updateState(chatJid, update);
}

export function patchCodexBackendState(chatJid: string, patch: CodexBackendPersistedState): CodexBackendPersistedState {
  return updateState(chatJid, (state) => {
    const nextCodex = { ...(state.codex ?? {}), ...patch };
    return {
      next: { ...state, codex: nextCodex },
      result: nextCodex,
    };
  });
}

export function patchClaudeBackendState(chatJid: string, patch: ClaudeBackendPersistedState): ClaudeBackendPersistedState {
  return updateState(chatJid, (state) => {
    const nextClaude = { ...(state.claude ?? {}), ...patch };
    return {
      next: { ...state, claude: nextClaude },
      result: nextClaude,
    };
  });
}

export function setChatAgentBackend(chatJid: string, backend: string): AgentBackend {
  const normalized = normalizeBackend(backend);
  if (!normalized) throw new Error("Unknown backend. Available: codex, claude, pi.");
  return updateState(chatJid, (state) => ({
    next: { ...state, backend: normalized },
    result: normalized,
  }));
}

export function setBackendHandoff(chatJid: string, handoff: Omit<BackendHandoffState, "createdAt" | "usedAt">): BackendHandoffState {
  const state: BackendHandoffState = {
    ...handoff,
    summary: handoff.summary.slice(0, HANDOFF_MAX_CHARS),
    createdAt: new Date().toISOString(),
    usedAt: null,
  };
  return updateState(chatJid, (current) => ({
    next: { ...current, handoff: state },
    result: state,
  }));
}

export function getPendingBackendHandoff(chatJid: string, backend: AgentBackend): BackendHandoffState | null {
  const state = readState(chatJid).handoff ?? null;
  if (!state || state.to !== backend || state.usedAt) return null;
  return state;
}

export function markBackendHandoffUsed(chatJid: string): void {
  updateState(chatJid, (state) => ({
    next: !state.handoff || state.handoff.usedAt
      ? state
      : { ...state, handoff: { ...state.handoff, usedAt: new Date().toISOString() } },
    result: undefined,
  }));
}

export function formatBackendLabel(backend: AgentBackend): string {
  if (backend === "codex-app-server") return "codex";
  if (backend === "claude-agent-sdk") return "claude";
  return backend;
}
