import type { AgentControlCommand, AgentControlResult } from "../agent-control/index.js";
import type { AgentBackend } from "../core/config.js";
import {
  createAgentBackendAdapter,
  type AgentBackendControlDeps,
} from "./agent-backends.js";
import type { ContextUsageSnapshot } from "./context-usage.js";
import {
  formatBackendLabel,
  getChatAgentBackend,
  setChatAgentBackend,
} from "./backend-state.js";
import { withScopedChatRunLock } from "./chat-run-lock.js";
import { createLogger } from "../utils/logger.js";

const log = createLogger("agent-pool.native-backend-control");

export type NativeBackendControlDeps = AgentBackendControlDeps & {
  getContextUsageForChat: (chatJid: string) => Promise<ContextUsageSnapshot | null>;
  abortPiTurnForSwitch: (chatJid: string) => Promise<void>;
  captureBackendHandoff: (chatJid: string, from: AgentBackend, to: AgentBackend) => Promise<boolean>;
};

function normalizeBackend(value: string): AgentBackend | null {
  const raw = value.trim().toLowerCase();
  if (raw === "pi") return "pi";
  if (raw === "codex" || raw === "codex-app-server") return "codex-app-server";
  if (raw === "claude" || raw === "claude-sdk" || raw === "claude-agent-sdk") return "claude-agent-sdk";
  return null;
}

async function abortBackendTurn(
  chatJid: string,
  backend: AgentBackend,
  deps: NativeBackendControlDeps,
  options: { tolerateFailure?: boolean } = {},
): Promise<void> {
  const adapter = createAgentBackendAdapter(backend);
  try {
    if (adapter) {
      await adapter.abort(chatJid);
      return;
    }
    await deps.abortPiTurnForSwitch(chatJid);
  } catch (error) {
    if (!options.tolerateFailure) throw error;
    log.warn("Failed to abort active backend turn before switch", {
      operation: "agent_backend.abort_before_switch_failed",
      chatJid,
      backend,
      err: error,
    });
  }
}

async function applyBackendCommand(chatJid: string, command: Extract<AgentControlCommand, { type: "backend" }>, deps: NativeBackendControlDeps): Promise<AgentControlResult> {
  const previous = getChatAgentBackend(chatJid);
  if (!command.backend) {
    return { status: "success", message: `Current backend: ${formatBackendLabel(previous)}.` };
  }
  const target = normalizeBackend(command.backend);
  if (!target) return { status: "error", message: "Unknown backend. Available: codex, claude, pi." };

  if (target !== previous) await abortBackendTurn(chatJid, previous, deps, { tolerateFailure: true });
  const handoff = target !== previous
    ? await deps.captureBackendHandoff(chatJid, previous, target)
    : false;
  const next = setChatAgentBackend(chatJid, command.backend);
  if (next !== previous) {
    const handoffNote = handoff ? " Handoff state captured for the next turn." : " Handoff state capture was unavailable; recent transcript replay will still be used.";
    return { status: "success", message: `Backend set to ${formatBackendLabel(next)} for ${chatJid}.${handoffNote}` };
  }
  return { status: "success", message: `Backend set to ${formatBackendLabel(next)} for ${chatJid}.` };
}

async function applyProviderModelSwitch(chatJid: string, command: Extract<AgentControlCommand, { type: "model" }>, deps: NativeBackendControlDeps): Promise<AgentControlResult | null> {
  const target = command.provider === "claude"
    ? "claude-agent-sdk"
    : command.provider === "codex"
      ? "codex-app-server"
      : null;
  if (!target) return null;

  const previous = getChatAgentBackend(chatJid);
  const targetAdapter = createAgentBackendAdapter(target);
  const applySwitch = await targetAdapter?.prepareProviderModelSwitch?.(chatJid, command);
  if (target !== previous) {
    // Model switches keep abort failures fatal so backend/model state is not committed after an uncertain active turn.
    await abortBackendTurn(chatJid, previous, deps);
    await deps.captureBackendHandoff(chatJid, previous, target);
  }
  setChatAgentBackend(chatJid, target);
  return applySwitch ? await applySwitch() : await targetAdapter?.applyProviderModelSwitch?.(chatJid, command) ?? null;
}

export async function applyNativeBackendControlCommand(
  chatJid: string,
  command: AgentControlCommand,
  deps: NativeBackendControlDeps,
): Promise<AgentControlResult | null> {
  if (command.type === "backend") return withScopedChatRunLock("backend-control", chatJid, () => applyBackendCommand(chatJid, command, deps));
  if (command.type === "model") {
    const switched = await withScopedChatRunLock("backend-control", chatJid, async () => {
      try {
        return await applyProviderModelSwitch(chatJid, command, deps);
      } catch (error) {
        return { status: "error" as const, message: error instanceof Error ? error.message : String(error) };
      }
    });
    if (switched) return switched;
  }

  const adapter = createAgentBackendAdapter(getChatAgentBackend(chatJid));
  return await adapter?.applyControlCommand?.(chatJid, command, deps) ?? null;
}
