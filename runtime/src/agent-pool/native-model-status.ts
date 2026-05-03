import { type AuthStorage } from "@mariozechner/pi-coding-agent";

import { getEagerWarmupConfig } from "../core/config.js";
import {
  getChatAgentBackend,
} from "./backend-state.js";
import {
  getClaudeAgentSdkContextUsage,
  getClaudeAgentSdkModelLabel,
  getClaudeAgentSdkProviderUsage,
  getClaudeAgentSdkThinkingLevel,
  listClaudeAgentSdkModels,
  refreshClaudeAgentSdkContextUsage,
} from "./claude-agent-sdk-backend.js";
import {
  getCodexAppServerContextUsage,
  getCodexAppServerDisplayModelLabel,
  getCodexAppServerFastMode,
  getCodexAppServerThinkingLevel,
  listCodexAppServerModels,
  peekCodexAppServerProviderUsage,
  warmCodexAppServerProviderUsage,
} from "./codex-app-server-backend.js";
import { withWarmupTimeout } from "./config.js";
import type { ContextUsageSnapshot } from "./context-usage.js";
import { peekProviderUsage, warmProviderUsage } from "./provider-usage.js";
import { type AvailableModelsResult } from "./runtime-facade.js";

interface RuntimeModelFacade {
  getCurrentModelLabel(chatJid: string): Promise<string | null>;
  getAvailableModels(chatJid: string): Promise<AvailableModelsResult>;
  getContextUsageForChat(chatJid: string): Promise<ContextUsageSnapshot | null> | ContextUsageSnapshot | null;
}

export async function getNativeCurrentModelLabel(
  chatJid: string,
  runtimeFacade: RuntimeModelFacade,
): Promise<string | null> {
  const backend = getChatAgentBackend(chatJid);
  if (backend === "codex-app-server") return getCodexAppServerDisplayModelLabel(chatJid, await listCodexAppServerModels());
  if (backend === "claude-agent-sdk") return getClaudeAgentSdkModelLabel(chatJid);
  return runtimeFacade.getCurrentModelLabel(chatJid);
}

export async function getNativeAvailableModels(
  chatJid: string,
  authStorage: AuthStorage,
  runtimeFacade: RuntimeModelFacade,
): Promise<AvailableModelsResult> {
  const backend = getChatAgentBackend(chatJid);
  const eagerWarmup = getEagerWarmupConfig();
  if (backend === "codex-app-server") {
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
  }
  if (backend === "claude-agent-sdk") {
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
  }
  return runtimeFacade.getAvailableModels(chatJid);
}

export async function getNativeContextUsageForChat(
  chatJid: string,
  runtimeFacade: RuntimeModelFacade,
): Promise<ContextUsageSnapshot | null> {
  const backend = getChatAgentBackend(chatJid);
  if (backend === "claude-agent-sdk") return refreshClaudeAgentSdkContextUsage(chatJid);
  if (backend === "codex-app-server") return getCodexAppServerContextUsage(chatJid);
  return await runtimeFacade.getContextUsageForChat(chatJid);
}
