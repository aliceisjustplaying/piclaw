export type ContextUsageSource =
  | "claude-native-context"
  | "codex-app-server-token-usage"
  | "pi-session-context";

export interface ContextUsageSnapshot {
  backend: string;
  source: ContextUsageSource;
  tokens: number | null;
  contextWindow: number;
  percent: number | null;
  model?: string | null;
  updatedAt: string;
  sessionId?: string | null;
}

export function normalizeContextUsageSnapshot(payload: unknown): ContextUsageSnapshot | null {
  if (!payload || typeof payload !== "object") return null;
  const data = payload as Record<string, unknown>;
  const backend = typeof data.backend === "string" && data.backend.trim() ? data.backend.trim() : null;
  const source = typeof data.source === "string" && isContextUsageSource(data.source) ? data.source : null;
  const updatedAt = typeof data.updatedAt === "string" && data.updatedAt.trim() ? data.updatedAt.trim() : null;
  const tokens = data.tokens == null ? null : Number(data.tokens);
  const contextWindow = Number(data.contextWindow);
  const percent = data.percent == null ? null : Number(data.percent);
  if (!backend || !source || !updatedAt) return null;
  if (!Number.isFinite(contextWindow) || contextWindow <= 0) return null;
  if (tokens != null && (!Number.isFinite(tokens) || tokens > contextWindow)) return null;
  if (percent != null && (!Number.isFinite(percent) || percent > 100)) return null;
  return {
    backend,
    source,
    tokens,
    contextWindow,
    percent,
    model: typeof data.model === "string" ? data.model : null,
    updatedAt,
    sessionId: typeof data.sessionId === "string" ? data.sessionId : null,
  };
}

function isContextUsageSource(value: string): value is ContextUsageSource {
  return value === "claude-native-context"
    || value === "codex-app-server-token-usage"
    || value === "pi-session-context";
}
