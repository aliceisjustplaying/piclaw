import { listRecentChatJids } from "../db.js";

interface WarmupSessionManager {
  prewarm(chatJid: string, options?: { priority?: boolean; mode?: "lightweight" | "full" }): boolean;
}

interface ScheduleRecentChatWarmupOptions {
  limit?: number;
  excludeChatJids?: string[];
}

export function scheduleRecentChatWarmup(
  options: ScheduleRecentChatWarmupOptions,
  deps: {
    pool: Map<string, unknown>;
    sessionManager: WarmupSessionManager;
    shuttingDown: boolean;
    eagerWarmup: boolean;
    cooldownByChat: Map<string, number>;
  },
): string[] {
  if (deps.shuttingDown) return [];
  const targetCount = Math.max(1, Math.min(8, Math.trunc(options.limit ?? 3) || 3));
  const excluded = new Set(
    Array.isArray(options.excludeChatJids)
      ? options.excludeChatJids.map((jid) => String(jid || "").trim()).filter(Boolean)
      : [],
  );
  const now = Date.now();
  for (const [chatJid, lastQueuedAt] of deps.cooldownByChat) {
    if (now - lastQueuedAt >= 30_000) deps.cooldownByChat.delete(chatJid);
  }

  const scheduled: string[] = [];
  const seen = new Set<string>();
  let fetchLimit = Math.min(100, Math.max(targetCount * 4, targetCount));
  while (scheduled.length < targetCount) {
    const candidates = listRecentChatJids(fetchLimit, { excludeChatJids: [...excluded, ...seen] });
    for (const chatJid of candidates) {
      if (seen.has(chatJid)) continue;
      seen.add(chatJid);
      if (excluded.has(chatJid) || deps.pool.has(chatJid)) continue;
      if (now - (deps.cooldownByChat.get(chatJid) ?? 0) < 30_000) continue;
      scheduled.push(chatJid);
      if (scheduled.length >= targetCount) break;
    }

    if (scheduled.length >= targetCount || fetchLimit >= 100 || candidates.length < fetchLimit) break;
    const nextFetchLimit = Math.min(100, fetchLimit * 2);
    if (nextFetchLimit === fetchLimit) break;
    fetchLimit = nextFetchLimit;
  }

  const actuallyScheduled: string[] = [];
  for (const chatJid of scheduled) {
    if (deps.sessionManager.prewarm(chatJid, { mode: deps.eagerWarmup ? "full" : "lightweight" })) {
      deps.cooldownByChat.set(chatJid, now);
      actuallyScheduled.push(chatJid);
    }
  }
  return actuallyScheduled;
}
