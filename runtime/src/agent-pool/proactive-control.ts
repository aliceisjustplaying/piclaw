import { type AgentControlCommand, type AgentControlResult } from "../agent-control/index.js";
import { createTask, getTaskById, updateTask, extensionKvGet, extensionKvSet } from "../db.js";
import { createUuid } from "../utils/ids.js";
import {
  PROACTIVE_EXTENSION_ID,
  PROACTIVE_INTERVAL_MS,
  PROACTIVE_PROMPT,
  PROACTIVE_TASK_KEY,
  PROACTIVE_TIMEOUT_SEC,
} from "./proactive.js";

export async function applyProactiveControlCommand(
  chatJid: string,
  command: Extract<AgentControlCommand, { type: "proactive" }>,
): Promise<AgentControlResult> {
  if (!command.action) return { status: "error", message: "Unknown proactive action. Available: on, off, status." };
  const taskRef = extensionKvGet<{ id: string }>(PROACTIVE_EXTENSION_ID, PROACTIVE_TASK_KEY, "chat", chatJid);
  const existing = taskRef?.id ? getTaskById(taskRef.id) : undefined;
  if (command.action === "status") {
    return {
      status: "success",
      message: existing
        ? `Proactive checks are ${existing.status} for ${chatJid}. Task: ${existing.id}.`
        : `Proactive checks are off for ${chatJid}.`,
    };
  }
  if (command.action === "off") {
    if (existing) updateTask(existing.id, { status: "paused" });
    return { status: "success", message: existing ? `Paused proactive checks for ${chatJid}.` : `Proactive checks were not enabled for ${chatJid}.` };
  }

  const nextRun = new Date(Date.now() + PROACTIVE_INTERVAL_MS).toISOString();
  if (existing) {
    updateTask(existing.id, {
      prompt: PROACTIVE_PROMPT,
      model: null,
      timeout_sec: PROACTIVE_TIMEOUT_SEC,
      schedule_type: "interval",
      schedule_value: String(PROACTIVE_INTERVAL_MS),
      next_run: nextRun,
      status: "active",
    });
    return { status: "success", message: `Proactive checks enabled for ${chatJid}. Task: ${existing.id}.` };
  }

  const id = createUuid("task");
  createTask({
    id,
    chat_jid: chatJid,
    prompt: PROACTIVE_PROMPT,
    model: null,
    task_kind: "agent",
    command: null,
    cwd: null,
    timeout_sec: PROACTIVE_TIMEOUT_SEC,
    schedule_type: "interval",
    schedule_value: String(PROACTIVE_INTERVAL_MS),
    next_run: nextRun,
    status: "active",
    created_at: new Date().toISOString(),
  });
  extensionKvSet(PROACTIVE_EXTENSION_ID, PROACTIVE_TASK_KEY, { id }, "chat", chatJid);
  return { status: "success", message: `Proactive checks enabled for ${chatJid}. Task: ${id}.` };
}
