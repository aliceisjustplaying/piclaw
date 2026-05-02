import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import "../helpers.js";

import { AgentPool } from "../../src/agent-pool.js";
import { extensionKvGet, getDb, getTaskById, initDatabase } from "../../src/db.js";
import { closeDbQuietly } from "../helpers.js";

let pool: AgentPool | null = null;
let dbModule: typeof import("../../src/db.js") | null = null;

beforeEach(async () => {
  dbModule = await import("../../src/db.js");
  initDatabase();
  pool = new AgentPool();
});

afterEach(async () => {
  await pool?.shutdown();
  pool = null;
  closeDbQuietly(dbModule);
  dbModule = null;
});

describe("proactive agent controls", () => {
  test("/proactive creates pauses and resumes a recurring agent task", async () => {
    const chatJid = "web:proactive-test";
    await pool!.applyControlCommand(chatJid, { type: "backend", backend: "claude", raw: "/backend claude" });

    const enabled = await pool!.applyControlCommand(chatJid, { type: "proactive", action: "on", raw: "/proactive on" });
    expect(enabled.status).toBe("success");

    const taskRef = extensionKvGet<{ id: string }>("proactive-agent", "task", "chat", chatJid);
    expect(taskRef?.id).toBeTruthy();
    const task = getTaskById(taskRef!.id)!;
    expect(task.chat_jid).toBe(chatJid);
    expect(task.task_kind).toBe("agent");
    expect(task.status).toBe("active");
    expect(task.schedule_type).toBe("interval");
    expect(task.schedule_value).toBe(String(15 * 60 * 1000));
    expect(task.model).toBe("claude/default");
    expect(task.prompt).toContain("Gmail and Google Calendar tools");
    expect(task.prompt).toContain("Do not send email");

    const status = await pool!.applyControlCommand(chatJid, { type: "proactive", action: "status", raw: "/proactive status" });
    expect(status.message).toContain("active");
    expect(status.message).toContain(task.id);

    const paused = await pool!.applyControlCommand(chatJid, { type: "proactive", action: "off", raw: "/proactive off" });
    expect(paused.status).toBe("success");
    expect(getTaskById(task.id)?.status).toBe("paused");

    const resumed = await pool!.applyControlCommand(chatJid, { type: "proactive", action: "on", raw: "/proactive on" });
    expect(resumed.status).toBe("success");
    expect(extensionKvGet<{ id: string }>("proactive-agent", "task", "chat", chatJid)?.id).toBe(task.id);
    expect(getTaskById(task.id)?.status).toBe("active");

    expect(getDb().prepare("SELECT COUNT(*) as count FROM scheduled_tasks WHERE chat_jid = ?").get(chatJid)).toEqual({ count: 1 });
  });
});
