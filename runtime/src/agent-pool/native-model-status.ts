import { type AuthStorage } from "@mariozechner/pi-coding-agent";

import {
  getChatAgentBackend,
} from "./backend-state.js";
import { createAgentBackendAdapter } from "./agent-backends.js";
import type { ContextUsageSnapshot } from "./context-usage.js";
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
  const adapter = createAgentBackendAdapter(getChatAgentBackend(chatJid));
  if (adapter) return adapter.getDisplayModelLabel ? adapter.getDisplayModelLabel(chatJid) : adapter.getModelLabel(chatJid);
  return runtimeFacade.getCurrentModelLabel(chatJid);
}

export async function getNativeAvailableModels(
  chatJid: string,
  authStorage: AuthStorage,
  runtimeFacade: RuntimeModelFacade,
): Promise<AvailableModelsResult> {
  const adapter = createAgentBackendAdapter(getChatAgentBackend(chatJid));
  if (adapter?.getAvailableModels) return adapter.getAvailableModels(chatJid, authStorage);
  return runtimeFacade.getAvailableModels(chatJid);
}

export async function getNativeContextUsageForChat(
  chatJid: string,
  runtimeFacade: RuntimeModelFacade,
): Promise<ContextUsageSnapshot | null> {
  const adapter = createAgentBackendAdapter(getChatAgentBackend(chatJid));
  if (adapter?.getContextUsage) return await adapter.getContextUsage(chatJid);
  return await runtimeFacade.getContextUsageForChat(chatJid);
}
