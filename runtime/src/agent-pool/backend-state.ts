import { extensionKvGet, extensionKvSet } from "../db.js";
import { getAgentBackendConfig, type AgentBackend } from "../core/config.js";

const EXTENSION_ID = "agent-backend";
const STATE_KEY = "state";

export interface ChatBackendState {
  backend?: AgentBackend;
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

export function formatBackendLabel(backend: AgentBackend): string {
  if (backend === "codex-app-server") return "codex";
  if (backend === "claude-agent-sdk") return "claude";
  return backend;
}
