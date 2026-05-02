import { extensionKvGet, extensionKvSet } from "../db.js";
import { getAgentBackendConfig, type AgentBackend } from "../core/config.js";

const EXTENSION_ID = "agent-backend";
const STATE_KEY = "state";
const HANDOFF_KEY = "handoff";
const HANDOFF_MAX_CHARS = 16_000;

export interface ChatBackendState {
  backend?: AgentBackend;
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

export function setChatAgentBackend(chatJid: string, backend: string): AgentBackend {
  const normalized = normalizeBackend(backend);
  if (!normalized) throw new Error("Unknown backend. Available: codex, claude, pi.");
  extensionKvSet(EXTENSION_ID, STATE_KEY, { backend: normalized }, "chat", chatJid);
  return normalized;
}

export function setBackendHandoff(chatJid: string, handoff: Omit<BackendHandoffState, "createdAt" | "usedAt">): BackendHandoffState {
  const state: BackendHandoffState = {
    ...handoff,
    summary: handoff.summary.slice(0, HANDOFF_MAX_CHARS),
    createdAt: new Date().toISOString(),
    usedAt: null,
  };
  extensionKvSet(EXTENSION_ID, HANDOFF_KEY, state, "chat", chatJid);
  return state;
}

export function getPendingBackendHandoff(chatJid: string, backend: AgentBackend): BackendHandoffState | null {
  const state = extensionKvGet<BackendHandoffState>(EXTENSION_ID, HANDOFF_KEY, "chat", chatJid);
  if (!state || state.to !== backend || state.usedAt) return null;
  return state;
}

export function markBackendHandoffUsed(chatJid: string): void {
  const state = extensionKvGet<BackendHandoffState>(EXTENSION_ID, HANDOFF_KEY, "chat", chatJid);
  if (!state || state.usedAt) return;
  extensionKvSet(EXTENSION_ID, HANDOFF_KEY, { ...state, usedAt: new Date().toISOString() }, "chat", chatJid);
}

export function formatBackendLabel(backend: AgentBackend): string {
  if (backend === "codex-app-server") return "codex";
  if (backend === "claude-agent-sdk") return "claude";
  return backend;
}
