import type { AgentSessionRuntime, AuthStorage } from "@mariozechner/pi-coding-agent";

import { getEagerWarmupConfig, type AgentBackend } from "../core/config.js";
import type { AgentOutput, RunAgentOptions } from "./contracts.js";
import {
  compactCodexAppServerChat,
  getCodexAppServerContextUsage,
  getCodexAppServerDisplayModelLabel,
  getCodexAppServerFastMode,
  getCodexAppServerModelLabel,
  getCodexAppServerThinkingLevel,
  listCodexAppServerModels,
  peekCodexAppServerProviderUsage,
  runCodexAppServerPrompt,
  warmCodexAppServerProviderUsage,
  willCodexAppServerStartNewThread,
  type PiclawBridgeSession,
} from "./codex-app-server-backend.js";
import {
  compactClaudeAgentSdkChat,
  getClaudeAgentSdkContextUsage,
  getClaudeAgentSdkModelLabel,
  getClaudeAgentSdkProviderUsage,
  getClaudeAgentSdkThinkingLevel,
  hasClaudeAgentSdkSession,
  listClaudeAgentSdkModels,
  refreshClaudeAgentSdkContextUsage,
  runClaudeAgentSdkPrompt,
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
  compact?(chatJid: string): Promise<{ ok: boolean; errorMessage?: string | null }>;
  getAvailableModels?(chatJid: string, authStorage: AuthStorage): Promise<AvailableModelsResult>;
  getContextUsage?(chatJid: string): Promise<ContextUsageSnapshot | null> | ContextUsageSnapshot | null;
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
          latest_requested_model: null,
          latest_response_model: null,
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
      compact: async (chatJid) => {
        try {
          await compactCodexAppServerChat(chatJid);
          return { ok: true };
        } catch (err) {
          return { ok: false, errorMessage: err instanceof Error ? err.message : String(err) };
        }
      },
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
          latest_requested_model: null,
          latest_response_model: null,
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
      compact: async (chatJid) => ({ ok: await compactClaudeAgentSdkChat(chatJid) }),
    };
  }
  return null;
}
