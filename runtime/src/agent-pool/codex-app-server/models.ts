import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { WORKSPACE_DIR, getAgentBackendConfig } from "../../core/config.js";
import { getPersistedBackendState, patchCodexBackendState } from "../backend-state.js";
import { DEFAULT_CODEX_THINKING_LEVEL, PROVIDER_USAGE_TTL_MS, THINKING_LEVELS } from "./constants.js";
import { getClient } from "./client.js";
import {
  getCodexChatState,
  getCodexFastModeForChat,
  getCodexModelForChat,
  getCodexThinkingForChat,
  getModelOptionsCache,
  getProviderUsageCache,
  getProviderUsageInFlight,
  isCodexFastModeSetForChat,
  isCodexModelSetForChat,
  setCodexFastModeForChat,
  setCodexModelForChat,
  setCodexThinkingForChat,
  setModelOptionsCache,
  setProviderUsageCache,
  setProviderUsageInFlight,
} from "./state.js";
import type { CodexModelOption, CodexProviderUsageSnapshot, CodexProviderUsageWindow, CodexThinkingLevel, JsonObject } from "./types.js";
import { readString } from "./utils.js";
import { log } from "./telemetry.js";

const FAST_CONFIG_PATH = join(WORKSPACE_DIR, ".pi", "extensions", "pi-openai-fast.json");

function clampPercent(value: unknown): number | null {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return Math.max(0, Math.min(100, num));
}

function parseUnixSeconds(value: unknown): Date | null {
  const num = Number(value);
  if (!Number.isFinite(num) || num <= 0) return null;
  return new Date(num * 1000);
}

function formatResetDescription(date: Date | null): string | null {
  if (!date) return null;
  const deltaMs = date.getTime() - Date.now();
  if (!Number.isFinite(deltaMs)) return null;
  if (deltaMs <= 0) return "resets soon";
  const totalMinutes = Math.max(1, Math.round(deltaMs / 60000));
  if (totalMinutes < 60) return `resets in ~${totalMinutes}m`;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  return mins > 0 ? `resets in ~${hours}h ${mins}m` : `resets in ~${hours}h`;
}

function compactPercent(value: number | null): string | null {
  return value == null ? null : `${Math.round(value)}%`;
}

function makeProviderUsageWindow(label: string, raw: unknown): CodexProviderUsageWindow | null {
  const window = raw && typeof raw === "object" ? raw as JsonObject : null;
  if (!window) return null;
  const usedPercent = clampPercent(window.usedPercent);
  if (usedPercent == null) return null;
  const resetDate = parseUnixSeconds(window.resetsAt);
  const windowMinutes = Number(window.windowDurationMins);
  return {
    label,
    used_percent: usedPercent,
    remaining_percent: clampPercent(100 - usedPercent),
    window_minutes: Number.isFinite(windowMinutes) ? windowMinutes : null,
    resets_at: resetDate ? resetDate.toISOString() : null,
    reset_description: formatResetDescription(resetDate),
  };
}

function buildProviderUsageHint(primary: CodexProviderUsageWindow | null, secondary: CodexProviderUsageWindow | null): string {
  const parts: string[] = [];
  const p1 = compactPercent(primary?.remaining_percent ?? null);
  const p2 = compactPercent(secondary?.remaining_percent ?? null);
  if (p1) parts.push(p1);
  if (p2) parts.push(p2);
  return parts.join(" • ");
}

function normalizeProviderUsage(payload: unknown): CodexProviderUsageSnapshot | null {
  const root = payload && typeof payload === "object" ? payload as JsonObject : null;
  if (!root) return null;
  const byId = root.rateLimitsByLimitId && typeof root.rateLimitsByLimitId === "object" ? root.rateLimitsByLimitId as JsonObject : null;
  const rawLimit = (byId?.codex && typeof byId.codex === "object" ? byId.codex : root.rateLimits) as JsonObject | null;
  if (!rawLimit || typeof rawLimit !== "object") return null;

  const primary = makeProviderUsageWindow("5h", rawLimit.primary);
  const secondary = makeProviderUsageWindow("week", rawLimit.secondary);
  const credits = rawLimit.credits && typeof rawLimit.credits === "object" ? rawLimit.credits as JsonObject : null;
  const creditsRemaining = credits?.balance != null ? Number(credits.balance) : null;
  const creditsUnlimited = Boolean(credits?.unlimited);

  return {
    provider: "openai-codex",
    source: "codex-app-server-rate-limits",
    plan: readString(rawLimit.planType),
    fetched_at: new Date().toISOString(),
    primary,
    secondary,
    credits_remaining: Number.isFinite(creditsRemaining) ? creditsRemaining : null,
    credits_unlimited: creditsUnlimited,
    extra_usage: null,
    hint_short: buildProviderUsageHint(primary, secondary),
  };
}

export function configuredModel(): string | null {
  return getAgentBackendConfig().codexAppServerModel;
}

export function getChatModel(chatJid: string): string | null {
  if (isCodexModelSetForChat(chatJid)) return getCodexModelForChat(chatJid) ?? null;
  const persisted = getPersistedBackendState(chatJid).codex?.model;
  if (persisted !== undefined) {
    setCodexModelForChat(chatJid, persisted ?? null);
    return persisted ?? null;
  }
  return configuredModel();
}

function getChatThinking(chatJid: string): CodexThinkingLevel {
  const cached = getCodexThinkingForChat(chatJid);
  if (cached) return cached;
  const persisted = normalizeThinkingLevel(getPersistedBackendState(chatJid).codex?.thinking);
  if (persisted) {
    setCodexThinkingForChat(chatJid, persisted);
    return persisted;
  }
  return DEFAULT_CODEX_THINKING_LEVEL;
}

function readPersistedFastMode(chatJid: string): boolean {
  try {
    const parsed = JSON.parse(readFileSync(FAST_CONFIG_PATH, "utf8")) as { active?: unknown; activeByChat?: Record<string, unknown> };
    if (parsed.activeByChat && typeof parsed.activeByChat === "object" && chatJid in parsed.activeByChat) {
      return parsed.activeByChat[chatJid] === true;
    }
    return parsed.active === true;
  } catch {
    return false;
  }
}

function writePersistedFastMode(chatJid: string, enabled: boolean): void {
  try {
    let parsed: Record<string, unknown> = {};
    try {
      parsed = JSON.parse(readFileSync(FAST_CONFIG_PATH, "utf8")) as Record<string, unknown>;
    } catch {
      parsed = { persistState: true };
    }
    const activeByChat = parsed.activeByChat && typeof parsed.activeByChat === "object" && !Array.isArray(parsed.activeByChat)
      ? parsed.activeByChat as Record<string, unknown>
      : {};
    activeByChat[chatJid] = enabled;
    mkdirSync(join(WORKSPACE_DIR, ".pi", "extensions"), { recursive: true });
    writeFileSync(FAST_CONFIG_PATH, `${JSON.stringify({ ...parsed, activeByChat }, null, 2)}\n`);
  } catch (err) {
    log.warn("Failed to persist Codex fast mode", { operation: "codex_app_server.fast_mode.persist", err });
  }
}

function normalizeThinkingLevel(value: string | null | undefined): CodexThinkingLevel | null {
  const lower = String(value || "").toLowerCase();
  if (lower === "none") return "off";
  if (THINKING_LEVELS.includes(lower as CodexThinkingLevel)) return lower as CodexThinkingLevel;
  return null;
}

function appServerEffort(level: CodexThinkingLevel): string {
  return level === "off" ? "none" : level;
}

export function turnReasoningConfig(chatJid: string): JsonObject {
  const level = getChatThinking(chatJid);
  const config: JsonObject = {
    effort: appServerEffort(level),
    summary: level === "off" ? "none" : "concise",
  };
  if (getCodexAppServerFastMode(chatJid)) config.serviceTier = "fast";
  return config;
}

export function codexModelLabel(model: string | null = configuredModel()): string {
  return `codex/${model || "default"}`;
}

function parseCodexModelInput(input: string | null | undefined): string | null {
  const trimmed = String(input || "").trim();
  if (!trimmed || trimmed === "codex/default" || trimmed === "default") return null;
  return trimmed.startsWith("codex/") ? trimmed.slice("codex/".length) : trimmed;
}

function getModelArray(response: unknown): JsonObject[] {
  if (!response || typeof response !== "object") return [];
  const root = response as JsonObject;
  const candidates = [root.models, root.data, root.availableModels];
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate.filter((item): item is JsonObject => Boolean(item && typeof item === "object" && !Array.isArray(item)));
  }
  return [];
}

function normalizeModelOption(raw: JsonObject): CodexModelOption | null {
  const id = readString(raw.id) ?? readString(raw.modelId) ?? readString(raw.model);
  if (!id) return null;
  const effortObjects = Array.isArray(raw.supportedReasoningEfforts) ? raw.supportedReasoningEfforts : [];
  const efforts = effortObjects
    .map((entry) => entry && typeof entry === "object" ? normalizeThinkingLevel(readString((entry as JsonObject).reasoningEffort)) : normalizeThinkingLevel(String(entry)))
    .filter((level): level is CodexThinkingLevel => Boolean(level));
  const directEfforts = Array.isArray(raw.reasoningEfforts)
    ? raw.reasoningEfforts.map((entry) => normalizeThinkingLevel(String(entry))).filter((level): level is CodexThinkingLevel => Boolean(level))
    : [];
  const reasoningEfforts = [...new Set([...(efforts.length ? efforts : directEfforts), DEFAULT_CODEX_THINKING_LEVEL])];
  const contextWindow = Number(raw.contextWindow ?? raw.context_window ?? raw.modelContextWindow);
  return {
    id,
    label: codexModelLabel(id),
    name: readString(raw.displayName) ?? readString(raw.name),
    description: readString(raw.description),
    reasoningEfforts,
    defaultReasoningEffort: normalizeThinkingLevel(readString(raw.defaultReasoningEffort)),
    contextWindow: Number.isFinite(contextWindow) && contextWindow > 0 ? contextWindow : null,
    isDefault: raw.isDefault === true,
  };
}

export function getCodexAppServerDisplayModelLabel(chatJid: string, models: CodexModelOption[]): string {
  const selected = getChatModel(chatJid);
  if (selected) return codexModelLabel(selected);
  return models.find((model) => model.isDefault)?.label ?? models[0]?.label ?? codexModelLabel(null);
}

export function getCodexAppServerModelLabel(chatJid?: string): string {
  return codexModelLabel(chatJid ? getChatModel(chatJid) : configuredModel());
}

export function getCodexAppServerThinkingLevel(chatJid: string): CodexThinkingLevel {
  return getChatThinking(chatJid);
}

export function setCodexAppServerThinkingLevel(chatJid: string, requested: string): CodexThinkingLevel | null {
  const level = normalizeThinkingLevel(requested);
  if (!level) return null;
  setCodexThinkingForChat(chatJid, level);
  patchCodexBackendState(chatJid, { thinking: level });
  return level;
}

export function cycleCodexAppServerThinkingLevel(chatJid: string): CodexThinkingLevel {
  const current = getChatThinking(chatJid);
  const index = THINKING_LEVELS.indexOf(current);
  const next = THINKING_LEVELS[(index + 1) % THINKING_LEVELS.length] ?? DEFAULT_CODEX_THINKING_LEVEL;
  setCodexThinkingForChat(chatJid, next);
  patchCodexBackendState(chatJid, { thinking: next });
  return next;
}

export function setCodexAppServerFastMode(chatJid: string, enabled: boolean): boolean {
  setCodexFastModeForChat(chatJid, enabled);
  patchCodexBackendState(chatJid, { fast: enabled });
  writePersistedFastMode(chatJid, enabled);
  return enabled;
}

export function getCodexAppServerFastMode(chatJid: string): boolean {
  if (isCodexFastModeSetForChat(chatJid)) return getCodexFastModeForChat(chatJid) === true;
  const persisted = getPersistedBackendState(chatJid).codex?.fast ?? readPersistedFastMode(chatJid);
  setCodexFastModeForChat(chatJid, persisted);
  return persisted;
}

export async function resolveCodexAppServerModel(modelInput: string | null | undefined): Promise<{ model: string | null; label: string }> {
  const model = parseCodexModelInput(modelInput);
  if (model) {
    const available = await listCodexAppServerModels().catch(() => []);
    if (available.length > 0 && !available.some((option) => option.id === model || option.label === codexModelLabel(model))) {
      throw new Error(`Model not found: ${codexModelLabel(model)}.`);
    }
  }
  return { model, label: codexModelLabel(model) };
}

export async function setCodexAppServerModel(chatJid: string, modelInput: string | null | undefined): Promise<string> {
  const { model, label } = await resolveCodexAppServerModel(modelInput);
  setResolvedCodexAppServerModel(chatJid, model);
  return label;
}

export function setResolvedCodexAppServerModel(chatJid: string, model: string | null): void {
  setCodexModelForChat(chatJid, model);
  patchCodexBackendState(chatJid, { model });
}

export async function listCodexAppServerModels(): Promise<CodexModelOption[]> {
  const now = Date.now();
  const cachedModels = getModelOptionsCache();
  if (cachedModels.value && now - cachedModels.at < 60_000) return cachedModels.value;
  const nextClient = await getClient();
  const response = await nextClient.request("model/list", { cursor: null, limit: null }).catch(() => null);
  const options = getModelArray(response).map(normalizeModelOption).filter((option): option is CodexModelOption => Boolean(option));
  const fallback = options.length > 0 ? options : [{
    id: configuredModel() || "default",
    label: codexModelLabel(configuredModel()),
    name: configuredModel() || "Codex default",
    reasoningEfforts: [...THINKING_LEVELS],
    defaultReasoningEffort: DEFAULT_CODEX_THINKING_LEVEL,
    contextWindow: null,
    isDefault: true,
  }];
  setModelOptionsCache(fallback, now);
  return fallback;
}

export function peekCodexAppServerProviderUsage(): CodexProviderUsageSnapshot | null {
  const cache = getProviderUsageCache();
  if (!cache || cache.expiresAt <= Date.now()) return null;
  return cache.value;
}

export async function warmCodexAppServerProviderUsage(): Promise<CodexProviderUsageSnapshot | null> {
  const cache = getProviderUsageCache();
  if (cache && cache.expiresAt > Date.now()) return cache.value;
  const inFlightExisting = getProviderUsageInFlight();
  if (inFlightExisting) return await inFlightExisting;

  const inFlight = (async () => {
    try {
      const nextClient = await getClient();
      const response = await nextClient.request("account/rateLimits/read", undefined);
      const value = normalizeProviderUsage(response);
      setProviderUsageCache({ expiresAt: Date.now() + PROVIDER_USAGE_TTL_MS, value });
      return value;
    } catch (error) {
      log.warn("Failed to read Codex app-server rate limits", {
        operation: "codex_app_server.rate_limits_read_failed",
        err: error,
      });
      return getProviderUsageCache()?.value ?? null;
    } finally {
      setProviderUsageInFlight(null);
    }
  })();

  setProviderUsageInFlight(inFlight);
  return await inFlight;
}
