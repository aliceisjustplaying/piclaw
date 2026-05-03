import type { AgentSessionRuntime, AuthStorage } from "@mariozechner/pi-coding-agent";

import type { AgentControlCommand, AgentControlResult } from "../agent-control/index.js";
import { getEagerWarmupConfig, type AgentBackend } from "../core/config.js";
import type { AgentOutput, RunAgentOptions } from "./contracts.js";
import {
  abortCodexAppServerChat,
  compactCodexAppServerChat,
  cycleCodexAppServerThinkingLevel,
  getCodexAppServerContextUsage,
  getCodexAppServerDisplayModelLabel,
  getCodexAppServerFastMode,
  getCodexAppServerModelLabel,
  getCodexAppServerThinkingLevel,
  listCodexAppServerModels,
  peekCodexAppServerProviderUsage,
  resolveCodexAppServerModel,
  runCodexAppServerPrompt,
  setCodexAppServerFastMode,
  setCodexAppServerModel,
  setCodexAppServerThinkingLevel,
  setResolvedCodexAppServerModel,
  warmCodexAppServerProviderUsage,
  willCodexAppServerStartNewThread,
  type PiclawBridgeSession,
} from "./codex-app-server-backend.js";
import {
  abortClaudeAgentSdkChat,
  compactClaudeAgentSdkChat,
  cycleClaudeAgentSdkThinkingLevel,
  getClaudeAgentSdkContextUsage,
  getClaudeAgentSdkModelLabel,
  getClaudeAgentSdkProviderUsage,
  getClaudeAgentSdkThinkingLevel,
  hasClaudeAgentSdkSession,
  listClaudeAgentSdkModels,
  refreshClaudeAgentSdkContextUsage,
  resolveClaudeAgentSdkModelLabel,
  runClaudeAgentSdkPrompt,
  setClaudeAgentSdkModel,
  setClaudeAgentSdkThinkingLevel,
} from "./claude-agent-sdk-backend.js";
import { withWarmupTimeout } from "./config.js";
import type { ContextUsageSnapshot } from "./context-usage.js";
import { peekProviderUsage, warmProviderUsage } from "./provider-usage.js";
import type { AvailableModelsResult } from "./runtime-facade.js";

export interface AgentBackendAdapter {
  backend: AgentBackend;
  logSource: string;
  getModelLabel(chatJid: string): string | null | Promise<string | null>;
  getDisplayModelLabel?(chatJid: string): string | null | Promise<string | null>;
  preparePrompt(prompt: string, chatJid: string, runOptions: RunAgentOptions, runtime: AgentSessionRuntime): string;
  run(prompt: string, chatJid: string, runOptions: RunAgentOptions, runtime: AgentSessionRuntime): Promise<AgentOutput>;
  abort(chatJid: string): Promise<boolean>;
  compact?(chatJid: string): Promise<{ ok: boolean; errorMessage?: string | null }>;
  getAvailableModels?(chatJid: string, authStorage: AuthStorage): Promise<AvailableModelsResult>;
  getContextUsage?(chatJid: string): Promise<ContextUsageSnapshot | null> | ContextUsageSnapshot | null;
  applyControlCommand?(
    chatJid: string,
    command: AgentControlCommand,
    deps: AgentBackendControlDeps,
  ): Promise<AgentControlResult | null>;
  applyProviderModelSwitch?(
    chatJid: string,
    command: Extract<AgentControlCommand, { type: "model" }>,
  ): Promise<AgentControlResult>;
  prepareProviderModelSwitch?(
    chatJid: string,
    command: Extract<AgentControlCommand, { type: "model" }>,
  ): Promise<() => Promise<AgentControlResult>>;
}

export type AgentBackendControlDeps = {
  getContextUsageForChat: (chatJid: string) => Promise<ContextUsageSnapshot | null>;
};

function formatContextUsage(usage: ContextUsageSnapshot): string {
  const used = usage.tokens == null ? "?" : Math.round(usage.tokens).toLocaleString();
  const total = Math.round(usage.contextWindow).toLocaleString();
  const percent = usage.percent == null ? "?" : `${usage.percent.toFixed(1)}%`;
  return `**Context usage**\n\n| Metric | Value |\n|---|---:|\n| Used | ${used} / ${total} tokens |\n| Percent | ${percent} |`;
}

async function codexDisplayModel(chatJid: string): Promise<string> {
  return getCodexAppServerDisplayModelLabel(chatJid, await listCodexAppServerModels());
}

async function applyCodexControlCommand(
  chatJid: string,
  command: AgentControlCommand,
  deps: AgentBackendControlDeps,
): Promise<AgentControlResult | null> {
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
    try {
      const requested = command.provider ? `${command.provider}/${command.modelId || "default"}` : command.modelId;
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
        message: `Current model: ${await codexDisplayModel(chatJid)}.\nCurrent thinking level: ${thinking}.\nAvailable levels: off, minimal, low, medium, high, xhigh.`,
        model_label: await codexDisplayModel(chatJid),
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
      model_label: await codexDisplayModel(chatJid),
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
      model_label: await codexDisplayModel(chatJid),
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
      message: `Codex Fast mode ${next ? "on" : "off"} for ${await codexDisplayModel(chatJid)}. Thinking level: ${thinking}.`,
      model_label: await codexDisplayModel(chatJid),
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

async function applyClaudeControlCommand(
  chatJid: string,
  command: AgentControlCommand,
  deps: AgentBackendControlDeps,
): Promise<AgentControlResult | null> {
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

export function createAgentBackendAdapter(backend: AgentBackend): AgentBackendAdapter | null {
  if (backend === "codex-app-server") {
    return {
      backend,
      logSource: "run_agent.codex_app_server",
      getModelLabel: (chatJid) => getCodexAppServerModelLabel(chatJid),
      getDisplayModelLabel: async (chatJid) => getCodexAppServerDisplayModelLabel(chatJid, await listCodexAppServerModels()),
      getAvailableModels: async (chatJid) => {
        const eagerWarmup = getEagerWarmupConfig();
        const models = await listCodexAppServerModels();
        const current = getCodexAppServerDisplayModelLabel(chatJid, models);
        const thinking = getCodexAppServerThinkingLevel(chatJid);
        const providerUsage = eagerWarmup.enabled
          ? await withWarmupTimeout(warmCodexAppServerProviderUsage(), eagerWarmup.providerUsageTimeoutMs)
          : peekCodexAppServerProviderUsage();
        if (!eagerWarmup.enabled) void warmCodexAppServerProviderUsage();
        return {
          current,
          models: models.map((model) => model.label),
          model_options: models.map((model) => ({
            label: model.label,
            provider: "codex",
            id: model.id,
            name: model.name,
            context_window: model.contextWindow ?? getCodexAppServerContextUsage(chatJid)?.contextWindow ?? null,
            reasoning: true,
          })),
          thinking_level: thinking,
          thinking_level_label: thinking,
          fast_mode: getCodexAppServerFastMode(chatJid),
          supports_thinking: true,
          available_thinking_levels: ["off", "minimal", "low", "medium", "high", "xhigh"],
          provider_usage: providerUsage,
        };
      },
      getContextUsage: (chatJid) => getCodexAppServerContextUsage(chatJid),
      preparePrompt: (prompt, chatJid, runOptions, runtime) => {
        const bridgeSession = runtime.session as unknown as PiclawBridgeSession;
        return willCodexAppServerStartNewThread(chatJid, bridgeSession, runOptions.toolCeilingFilter)
          ? (runOptions.codexReplayPrompt || prompt)
          : prompt;
      },
      run: (prompt, chatJid, runOptions, runtime) => runCodexAppServerPrompt(
        prompt,
        chatJid,
        runOptions,
        runtime.session as unknown as PiclawBridgeSession,
      ),
      abort: (chatJid) => abortCodexAppServerChat(chatJid),
      compact: async (chatJid) => {
        try {
          await compactCodexAppServerChat(chatJid);
          return { ok: true };
        } catch (err) {
          return { ok: false, errorMessage: err instanceof Error ? err.message : String(err) };
        }
      },
      applyProviderModelSwitch: async (chatJid, command) => {
        const modelInput = command.modelId || "default";
        const { model, label: modelLabel } = await resolveCodexAppServerModel(modelInput);
        setResolvedCodexAppServerModel(chatJid, model);
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
      },
      prepareProviderModelSwitch: async (chatJid, command) => {
        const modelInput = command.modelId || "default";
        const { model, label: modelLabel } = await resolveCodexAppServerModel(modelInput);
        return async () => {
          setResolvedCodexAppServerModel(chatJid, model);
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
        };
      },
      applyControlCommand: applyCodexControlCommand,
    };
  }
  if (backend === "claude-agent-sdk") {
    return {
      backend,
      logSource: "run_agent.claude_agent_sdk",
      getModelLabel: (chatJid) => getClaudeAgentSdkModelLabel(chatJid),
      getAvailableModels: async (chatJid, authStorage) => {
        const eagerWarmup = getEagerWarmupConfig();
        const current = getClaudeAgentSdkModelLabel(chatJid);
        const usage = getClaudeAgentSdkContextUsage(chatJid);
        const models = listClaudeAgentSdkModels();
        const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
        const providerUsage = peekProviderUsage("anthropic", { allowStale: true })
          ?? await withWarmupTimeout(warmProviderUsage(authStorage, "anthropic"), eagerWarmup.providerUsageTimeoutMs)
          ?? getClaudeAgentSdkProviderUsage(chatJid);
        return {
          current,
          models: models.map((model) => model.label),
          model_options: models.map((model) => ({
            label: model.label,
            provider: "claude",
            id: model.id,
            name: model.name,
            context_window: model.contextWindow ?? usage?.contextWindow ?? null,
            reasoning: true,
          })),
          thinking_level: thinking,
          thinking_level_label: thinking,
          fast_mode: null,
          supports_thinking: true,
          available_thinking_levels: ["off", "low", "medium", "high", "xhigh", "max"],
          provider_usage: providerUsage as any,
        };
      },
      getContextUsage: (chatJid) => refreshClaudeAgentSdkContextUsage(chatJid),
      preparePrompt: (prompt, chatJid, runOptions) => hasClaudeAgentSdkSession(chatJid)
        ? prompt
        : (runOptions.codexReplayPrompt || prompt),
      run: (prompt, chatJid, runOptions, runtime) => runClaudeAgentSdkPrompt(
        prompt,
        chatJid,
        runOptions,
        runtime.session as unknown as PiclawBridgeSession,
      ),
      abort: (chatJid) => abortClaudeAgentSdkChat(chatJid),
      compact: async (chatJid) => ({ ok: await compactClaudeAgentSdkChat(chatJid) }),
      applyProviderModelSwitch: async (chatJid, command) => {
        const modelInput = command.modelId || "default";
        const modelLabel = resolveClaudeAgentSdkModelLabel(modelInput);
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
      },
      prepareProviderModelSwitch: async (chatJid, command) => {
        const modelInput = command.modelId || "default";
        const modelLabel = resolveClaudeAgentSdkModelLabel(modelInput);
        return async () => {
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
        };
      },
      applyControlCommand: applyClaudeControlCommand,
    };
  }
  return null;
}
