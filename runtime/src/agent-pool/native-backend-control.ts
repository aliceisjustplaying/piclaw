import type { AgentControlCommand, AgentControlResult } from "../agent-control/index.js";
import type { AgentBackend } from "../core/config.js";
import {
  abortCodexAppServerChat,
  compactCodexAppServerChat,
  cycleCodexAppServerThinkingLevel,
  getCodexAppServerDisplayModelLabel,
  getCodexAppServerFastMode,
  getCodexAppServerThinkingLevel,
  listCodexAppServerModels,
  resolveCodexAppServerModel,
  setCodexAppServerFastMode,
  setCodexAppServerModel,
  setCodexAppServerThinkingLevel,
} from "./codex-app-server-backend.js";
import {
  abortClaudeAgentSdkChat,
  compactClaudeAgentSdkChat,
  cycleClaudeAgentSdkThinkingLevel,
  getClaudeAgentSdkModelLabel,
  getClaudeAgentSdkThinkingLevel,
  listClaudeAgentSdkModels,
  resolveClaudeAgentSdkModelLabel,
  setClaudeAgentSdkModel,
  setClaudeAgentSdkThinkingLevel,
} from "./claude-agent-sdk-backend.js";
import {
  formatBackendLabel,
  getChatAgentBackend,
  setChatAgentBackend,
} from "./backend-state.js";
import { withScopedChatRunLock } from "./chat-run-lock.js";

export type NativeBackendControlDeps = {
  getContextUsageForChat: (chatJid: string) => Promise<{ tokens: number | null; contextWindow: number; percent: number | null } | null>;
  abortBackendTurnForSwitch: (chatJid: string, backend: AgentBackend) => Promise<void>;
  captureBackendHandoff: (chatJid: string, from: AgentBackend, to: AgentBackend) => Promise<boolean>;
};

function normalizeBackend(value: string): AgentBackend | null {
  const raw = value.trim().toLowerCase();
  if (raw === "pi") return "pi";
  if (raw === "codex" || raw === "codex-app-server") return "codex-app-server";
  if (raw === "claude" || raw === "claude-sdk" || raw === "claude-agent-sdk") return "claude-agent-sdk";
  return null;
}

function formatContextUsage(usage: { tokens: number | null; contextWindow: number; percent: number | null }): string {
  const used = usage.tokens == null ? "?" : Math.round(usage.tokens).toLocaleString();
  const total = Math.round(usage.contextWindow).toLocaleString();
  const percent = usage.percent == null ? "?" : `${usage.percent.toFixed(1)}%`;
  return `**Context usage**\n\n| Metric | Value |\n|---|---:|\n| Used | ${used} / ${total} tokens |\n| Percent | ${percent} |`;
}

async function applyBackendCommand(chatJid: string, command: Extract<AgentControlCommand, { type: "backend" }>, deps: NativeBackendControlDeps): Promise<AgentControlResult> {
  const backend = getChatAgentBackend(chatJid);
  if (!command.backend) {
    return { status: "success", message: `Current backend: ${formatBackendLabel(backend)}.` };
  }
  const previous = backend;
  const normalizedTarget = normalizeBackend(command.backend);
  if (!normalizedTarget) {
    return { status: "error", message: "Unknown backend. Available: codex, claude, pi." };
  }
  if (normalizedTarget !== previous) await deps.abortBackendTurnForSwitch(chatJid, previous);
  const handoff = normalizedTarget !== previous
    ? await deps.captureBackendHandoff(chatJid, previous, normalizedTarget)
    : false;
  const next = setChatAgentBackend(chatJid, command.backend);
  if (next !== previous) {
    const handoffNote = handoff ? " Handoff state captured for the next turn." : " Handoff state capture was unavailable; recent transcript replay will still be used.";
    return { status: "success", message: `Backend set to ${formatBackendLabel(next)} for ${chatJid}.${handoffNote}` };
  }
  return { status: "success", message: `Backend set to ${formatBackendLabel(next)} for ${chatJid}.` };
}

async function applyProviderModelSwitch(chatJid: string, command: Extract<AgentControlCommand, { type: "model" }>, deps: NativeBackendControlDeps): Promise<AgentControlResult | null> {
  const backend = getChatAgentBackend(chatJid);
  if (command.provider === "claude") {
    const target: AgentBackend = "claude-agent-sdk";
    const modelInput = command.modelId || "default";
    const modelLabel = resolveClaudeAgentSdkModelLabel(modelInput);
    if (target !== backend) {
      await deps.abortBackendTurnForSwitch(chatJid, backend);
      await deps.captureBackendHandoff(chatJid, backend, target);
    }
    setChatAgentBackend(chatJid, "claude");
    await setClaudeAgentSdkModel(chatJid, modelInput);
    const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
    return {
      status: "success",
      message: `Backend set to claude. Model set to ${modelLabel}. Thinking level: ${thinking}.`,
      model_label: modelLabel,
      thinking_level: thinking,
      thinking_level_label: thinking,
      supports_thinking: true,
    };
  }
  if (command.provider === "codex") {
    const target: AgentBackend = "codex-app-server";
    const modelInput = command.modelId || "default";
    const { label: modelLabel } = await resolveCodexAppServerModel(modelInput);
    if (target !== backend) {
      await deps.abortBackendTurnForSwitch(chatJid, backend);
      await deps.captureBackendHandoff(chatJid, backend, target);
    }
    setChatAgentBackend(chatJid, "codex");
    await setCodexAppServerModel(chatJid, modelInput);
    const thinking = getCodexAppServerThinkingLevel(chatJid);
    return {
      status: "success",
      message: `Backend set to codex. Model set to ${modelLabel}. Thinking level: ${thinking}.`,
      model_label: modelLabel,
      thinking_level: thinking,
      thinking_level_label: thinking,
      fast_mode: getCodexAppServerFastMode(chatJid),
      supports_thinking: true,
    };
  }
  return null;
}

async function applyCodexCommand(chatJid: string, command: AgentControlCommand, deps: NativeBackendControlDeps): Promise<AgentControlResult | null> {
  const getDisplayModel = async () => getCodexAppServerDisplayModelLabel(chatJid, await listCodexAppServerModels());
  if (command.type === "model") {
    if (!command.modelId && !command.provider) {
      const models = await listCodexAppServerModels();
      const current = getCodexAppServerDisplayModelLabel(chatJid, models);
      const rows = models.map((model) => `| ${model.label} | ${model.label === current ? "current" : ""} |`);
      const thinking = getCodexAppServerThinkingLevel(chatJid);
      return {
        status: "success",
        message: ["**Available Codex models**", "", "| Model | Status |", "|---|---|", ...rows, "", "Use `/model codex/<model>` to switch."].join("\n"),
        model_label: current,
        thinking_level: thinking,
        thinking_level_label: thinking,
        fast_mode: getCodexAppServerFastMode(chatJid),
        supports_thinking: true,
      };
    }
    const requested = command.provider ? `${command.provider}/${command.modelId || "default"}` : command.modelId;
    try {
      const modelLabel = await setCodexAppServerModel(chatJid, requested);
      const thinking = getCodexAppServerThinkingLevel(chatJid);
      return {
        status: "success",
        message: `Model set to ${modelLabel}. Thinking level: ${thinking}.`,
        model_label: modelLabel,
        thinking_level: thinking,
        thinking_level_label: thinking,
        fast_mode: getCodexAppServerFastMode(chatJid),
        supports_thinking: true,
      };
    } catch (err) {
      return { status: "error", message: err instanceof Error ? err.message : String(err) };
    }
  }
  if (command.type === "thinking") {
    if (!command.level) {
      const thinking = getCodexAppServerThinkingLevel(chatJid);
      return {
        status: "success",
        message: `Current model: ${await getDisplayModel()}.\nCurrent thinking level: ${thinking}.\nAvailable levels: off, minimal, low, medium, high, xhigh.`,
        model_label: await getDisplayModel(),
        thinking_level: thinking,
        thinking_level_label: thinking,
        fast_mode: getCodexAppServerFastMode(chatJid),
        supports_thinking: true,
        available_thinking_levels: ["off", "minimal", "low", "medium", "high", "xhigh"],
      };
    }
    const thinking = setCodexAppServerThinkingLevel(chatJid, command.level);
    if (!thinking) return { status: "error", message: "Unknown thinking level. Available: off, minimal, low, medium, high, xhigh." };
    return {
      status: "success",
      message: `Thinking level set to ${thinking}.`,
      model_label: await getDisplayModel(),
      thinking_level: thinking,
      thinking_level_label: thinking,
      fast_mode: getCodexAppServerFastMode(chatJid),
      supports_thinking: true,
    };
  }
  if (command.type === "cycle_thinking") {
    const thinking = cycleCodexAppServerThinkingLevel(chatJid);
    return {
      status: "success",
      message: `Thinking level set to ${thinking}.`,
      model_label: await getDisplayModel(),
      thinking_level: thinking,
      thinking_level_label: thinking,
      fast_mode: getCodexAppServerFastMode(chatJid),
      supports_thinking: true,
    };
  }
  if (command.type === "fast") {
    const current = getCodexAppServerFastMode(chatJid);
    const next = command.action === "status" && command.enabled === undefined ? current : command.enabled ?? !current;
    if (!(command.action === "status" && command.enabled === undefined)) setCodexAppServerFastMode(chatJid, next);
    const thinking = getCodexAppServerThinkingLevel(chatJid);
    return {
      status: "success",
      message: `Codex Fast mode ${next ? "on" : "off"} for ${await getDisplayModel()}. Thinking level: ${thinking}.`,
      model_label: await getDisplayModel(),
      thinking_level: thinking,
      thinking_level_label: thinking,
      fast_mode: next,
      supports_thinking: true,
    };
  }
  if (command.type === "compact") {
    await compactCodexAppServerChat(chatJid);
    return { status: "success", message: "Codex app-server compaction complete. Context usage updated if the app-server reported token usage." };
  }
  if (command.type === "abort") {
    const aborted = await abortCodexAppServerChat(chatJid);
    return { status: "success", message: aborted ? "Aborted current Codex response." : "No active Codex response to abort." };
  }
  if (command.type === "context") {
    const usage = await deps.getContextUsageForChat(chatJid);
    if (!usage) return { status: "error", message: "Context usage unavailable for Codex app-server until the first token-usage update." };
    return { status: "success", message: formatContextUsage(usage) };
  }
  return null;
}

async function applyClaudeCommand(chatJid: string, command: AgentControlCommand, deps: NativeBackendControlDeps): Promise<AgentControlResult | null> {
  if (command.type === "model") {
    const current = getClaudeAgentSdkModelLabel(chatJid);
    const models = listClaudeAgentSdkModels();
    if (command.modelId || command.provider) {
      try {
        const modelLabel = await setClaudeAgentSdkModel(chatJid, command.provider ? `${command.provider}/${command.modelId || "default"}` : command.modelId);
        const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
        return {
          status: "success",
          message: `Model set to ${modelLabel}. Thinking level: ${thinking}.`,
          model_label: modelLabel,
          thinking_level: thinking,
          thinking_level_label: thinking,
          supports_thinking: true,
        };
      } catch (err) {
        return { status: "error", message: err instanceof Error ? err.message : String(err) };
      }
    }
    const rows = models.map((model) => `| ${model.label} | ${model.label === current ? "current" : ""} |`);
    return {
      status: "success",
      message: ["**Available Claude models**", "", "| Model | Status |", "|---|---|", ...rows].join("\n"),
      model_label: current,
      thinking_level: getClaudeAgentSdkThinkingLevel(chatJid),
      thinking_level_label: getClaudeAgentSdkThinkingLevel(chatJid),
      supports_thinking: true,
    };
  }
  if (command.type === "thinking") {
    if (!command.level) {
      const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
      return {
        status: "success",
        message: `Current model: ${getClaudeAgentSdkModelLabel(chatJid)}.\nCurrent thinking level: ${thinking}.\nAvailable levels: off, low, medium, high, xhigh, max.`,
        model_label: getClaudeAgentSdkModelLabel(chatJid),
        thinking_level: thinking,
        thinking_level_label: thinking,
        supports_thinking: true,
        available_thinking_levels: ["off", "low", "medium", "high", "xhigh", "max"],
      };
    }
    const thinking = setClaudeAgentSdkThinkingLevel(chatJid, command.level);
    if (!thinking) return { status: "error", message: "Unknown thinking level. Available: off, low, medium, high, xhigh, max." };
    return {
      status: "success",
      message: `Thinking level set to ${thinking}.`,
      model_label: getClaudeAgentSdkModelLabel(chatJid),
      thinking_level: thinking,
      thinking_level_label: thinking,
      supports_thinking: true,
    };
  }
  if (command.type === "cycle_thinking") {
    const thinking = cycleClaudeAgentSdkThinkingLevel(chatJid);
    return {
      status: "success",
      message: `Thinking level set to ${thinking}.`,
      model_label: getClaudeAgentSdkModelLabel(chatJid),
      thinking_level: thinking,
      thinking_level_label: thinking,
      supports_thinking: true,
    };
  }
  if (command.type === "fast") {
    return {
      status: "success",
      message: "Claude Agent SDK does not expose Codex Fast mode. Use `/thinking off` or `/thinking low` for faster Claude turns.",
      model_label: getClaudeAgentSdkModelLabel(chatJid),
      thinking_level: getClaudeAgentSdkThinkingLevel(chatJid),
      thinking_level_label: getClaudeAgentSdkThinkingLevel(chatJid),
      fast_mode: null,
      supports_thinking: true,
    };
  }
  if (command.type === "compact") {
    const compacted = await compactClaudeAgentSdkChat(chatJid);
    return { status: compacted ? "success" : "error", message: compacted ? "Claude native compaction complete." : "No active Claude session to compact yet." };
  }
  if (command.type === "abort") {
    const aborted = await abortClaudeAgentSdkChat(chatJid);
    return { status: "success", message: aborted ? "Aborted current Claude response." : "No active Claude response to abort." };
  }
  if (command.type === "context") {
    const usage = await deps.getContextUsageForChat(chatJid);
    if (!usage) return { status: "error", message: "Context usage unavailable for Claude Agent SDK until the first result usage update." };
    return { status: "success", message: formatContextUsage(usage) };
  }
  return null;
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

  const backend = getChatAgentBackend(chatJid);
  if (backend === "codex-app-server") return applyCodexCommand(chatJid, command, deps);
  if (backend === "claude-agent-sdk") return applyClaudeCommand(chatJid, command, deps);
  return null;
}
