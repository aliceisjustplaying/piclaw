import type { ScheduledTask } from "../types.js";
import { extensionKvGet, extensionKvSet } from "../db.js";

export const PROACTIVE_EXTENSION_ID = "proactive-agent";
export const PROACTIVE_TASK_KEY = "task";
export const PROACTIVE_STATE_KEY = "state";
export const PROACTIVE_INTERVAL_MS = 15 * 60 * 1000;
export const PROACTIVE_TIMEOUT_SEC = 20;
export const PROACTIVE_NO_UPDATE = "NO_PROACTIVE_UPDATE";

const MAX_RECENT_ITEMS = 8;
const MAX_DIGEST_CHARS = 1200;

export const PROACTIVE_PROMPT = [
  "Proactive check-in task.",
  "Use available Gmail and Google Calendar tools to inspect recent unread or important email and upcoming calendar events.",
  "Use personal_memory when useful.",
  "Do not send email, create/delete/update calendar events, or modify external state without explicit user confirmation.",
  "Reply with a concise digest and suggested next actions only when there is something genuinely new or worth surfacing.",
  `If there is no genuinely new signal, reply exactly: ${PROACTIVE_NO_UPDATE}`,
].join("\n");

interface ProactiveMemoryItem {
  at: string;
  key: string;
  digest: string;
}

interface ProactiveState {
  lastRunAt?: string;
  lastNoUpdateAt?: string;
  noUpdateCount?: number;
  surfacedCount?: number;
  recent?: ProactiveMemoryItem[];
}

export interface ProactiveRecordResult {
  shouldNotify: boolean;
  reason: "new" | "no_update" | "duplicate";
}

function truncate(text: string, maxChars = MAX_DIGEST_CHARS): string {
  const normalized = text.trim();
  return normalized.length <= maxChars ? normalized : `${normalized.slice(0, maxChars - 1)}…`;
}

function digestKey(text: string): string {
  return text
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .slice(0, 800);
}

function readState(chatJid: string): ProactiveState {
  return extensionKvGet<ProactiveState>(PROACTIVE_EXTENSION_ID, PROACTIVE_STATE_KEY, "chat", chatJid) ?? {};
}

function writeState(chatJid: string, state: ProactiveState): void {
  extensionKvSet(PROACTIVE_EXTENSION_ID, PROACTIVE_STATE_KEY, state, "chat", chatJid);
}

export function isProactiveTask(task: ScheduledTask): boolean {
  return task.task_kind !== "shell" && task.prompt.trim().startsWith("Proactive check-in task.");
}

export function buildProactivePrompt(task: ScheduledTask): string {
  const state = readState(task.chat_jid);
  const recent = (state.recent ?? []).slice(0, MAX_RECENT_ITEMS);
  const lines = [
    PROACTIVE_PROMPT,
    "",
    "Proactive memory for this chat:",
    `- Last run: ${state.lastRunAt ?? task.last_run ?? "never"}`,
    `- Consecutive no-update runs: ${state.noUpdateCount ?? 0}`,
    `- Surfaced items total: ${state.surfacedCount ?? 0}`,
  ];

  if (recent.length) {
    lines.push("- Recently surfaced items:");
    for (const item of recent) {
      lines.push(`  - ${item.at}: ${item.digest}`);
    }
    lines.push("Do not repeat recently surfaced items unless something materially changed.");
  } else {
    lines.push("- Recently surfaced items: none");
  }

  return lines.join("\n");
}

export function shouldSuppressProactiveOutput(result: string): boolean {
  return result.trim() === PROACTIVE_NO_UPDATE;
}

export function recordProactiveResult(task: ScheduledTask, result: string): ProactiveRecordResult {
  const now = new Date().toISOString();
  const state = readState(task.chat_jid);
  const recent = state.recent ?? [];

  if (shouldSuppressProactiveOutput(result)) {
    writeState(task.chat_jid, {
      ...state,
      lastRunAt: now,
      lastNoUpdateAt: now,
      noUpdateCount: (state.noUpdateCount ?? 0) + 1,
      recent,
    });
    return { shouldNotify: false, reason: "no_update" };
  }

  const digest = truncate(result);
  const key = digestKey(digest);
  const duplicate = key.length > 0 && recent.some((item) => item.key === key);
  const nextRecent = duplicate
    ? recent
    : [{ at: now, key, digest }, ...recent].slice(0, MAX_RECENT_ITEMS);

  writeState(task.chat_jid, {
    ...state,
    lastRunAt: now,
    noUpdateCount: 0,
    surfacedCount: duplicate ? (state.surfacedCount ?? 0) : (state.surfacedCount ?? 0) + 1,
    recent: nextRecent,
  });

  return { shouldNotify: !duplicate, reason: duplicate ? "duplicate" : "new" };
}
