import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import "../helpers.js";

import {
  PROACTIVE_NO_UPDATE,
  PROACTIVE_PROMPT,
  buildProactivePrompt,
  recordProactiveResult,
  shouldSuppressProactiveOutput,
} from "../../src/agent-pool/proactive.js";
import { extensionKvGet, initDatabase } from "../../src/db.js";
import type { ScheduledTask } from "../../src/types.js";
import { closeDbQuietly } from "../helpers.js";

let dbModule: typeof import("../../src/db.js") | null = null;

beforeEach(async () => {
  dbModule = await import("../../src/db.js");
  initDatabase();
});

afterEach(() => {
  closeDbQuietly(dbModule);
  dbModule = null;
});

function task(chatJid = "web:proactive-state"): ScheduledTask {
  return {
    id: "task-proactive-state",
    chat_jid: chatJid,
    prompt: PROACTIVE_PROMPT,
    task_kind: "agent",
    schedule_type: "interval",
    schedule_value: "900000",
    next_run: new Date().toISOString(),
    last_run: null,
    last_result: null,
    status: "active",
    created_at: new Date().toISOString(),
  };
}

describe("proactive state", () => {
  test("records surfaced digests and includes them in later prompts", () => {
    const t = task();

    expect(recordProactiveResult(t, "Email from Alice about tomorrow's meeting.").shouldNotify).toBe(true);
    const prompt = buildProactivePrompt(t);

    expect(prompt).toContain("Recently surfaced items");
    expect(prompt).toContain("Email from Alice");
    expect(prompt).toContain("Do not repeat recently surfaced items");
  });

  test("suppresses exact no-update sentinel and duplicate digests", () => {
    const t = task("web:proactive-dedupe");

    expect(shouldSuppressProactiveOutput(PROACTIVE_NO_UPDATE)).toBe(true);
    expect(recordProactiveResult(t, PROACTIVE_NO_UPDATE)).toEqual({ shouldNotify: false, reason: "no_update" });
    expect(recordProactiveResult(t, "Calendar: dentist at 3pm.")).toEqual({ shouldNotify: true, reason: "new" });
    expect(recordProactiveResult(t, "Calendar: dentist at 3pm.")).toEqual({ shouldNotify: false, reason: "duplicate" });

    const state = extensionKvGet<any>("proactive-agent", "state", "chat", t.chat_jid)!;
    expect(state.noUpdateCount).toBe(0);
    expect(state.surfacedCount).toBe(1);
    expect(state.recent.length).toBe(1);
  });
});
