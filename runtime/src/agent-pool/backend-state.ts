import { extensionKvGet, extensionKvSet } from "../db.js";
import { getAgentBackendConfig, type AgentBackend } from "../core/config.js";
import { getDb } from "../db/connection.js";

const EXTENSION_ID = "agent-backend";
const STATE_KEY = "state";
const HANDOFF_MAX_CHARS = 16_000;

export interface ChatBackendState {
  backend?: AgentBackend;
  handoff?: BackendHandoffState | null;
}

export interface BackendHandoffState {
  from: AgentBackend;
  to: AgentBackend;
  summary: string;
  createdAt: string;
  usedAt?: string | null;
}

function normalizeBackend(value: string | undefined | null): AgentBackend | null {
  const raw = (value || "").trim().toLowerCase();
  if (!raw || raw === "default") return null;
  if (raw === "pi") return "pi";
  if (raw === "codex" || raw === "codex-app-server") return "codex-app-server";
  if (raw === "claude" || raw === "claude-sdk" || raw === "claude-agent-sdk") return "claude-agent-sdk";
  return null;
}

export function getChatAgentBackend(chatJid: string): AgentBackend {
  const state = extensionKvGet<ChatBackendState>(EXTENSION_ID, STATE_KEY, "chat", chatJid);
  return state?.backend ?? getAgentBackendConfig().backend;
}

function readState(chatJid: string): ChatBackendState {
  return extensionKvGet<ChatBackendState>(EXTENSION_ID, STATE_KEY, "chat", chatJid) ?? {};
}

function writeState(chatJid: string, state: ChatBackendState): void {
  extensionKvSet(EXTENSION_ID, STATE_KEY, state, "chat", chatJid);
}

function updateState<T>(chatJid: string, update: (state: ChatBackendState) => { next: ChatBackendState; result: T }): T {
  return getDb().transaction(() => {
    const { next, result } = update(readState(chatJid));
    writeState(chatJid, next);
    return result;
  })();
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
