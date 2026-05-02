#!/usr/bin/env bun

import { createInterface } from "node:readline";

type JsonObject = Record<string, unknown>;

let turnCounter = 0;
const threadId = "thread-smoke-1";

function write(message: JsonObject): void {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", ...message })}\n`);
}

function respond(id: unknown, result: unknown): void {
  write({ id, result });
}

function notify(method: string, params: JsonObject): void {
  write({ method, params });
}

function readString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

function handleTurnStart(id: unknown, params: JsonObject): void {
  turnCounter += 1;
  const nextThreadId = readString(params.threadId) ?? threadId;
  const turnId = `turn-smoke-${turnCounter}`;
  respond(id, { turn: { id: turnId } });

  setTimeout(() => {
    notify("turn/started", { threadId: nextThreadId, turn: { id: turnId } });
    notify("item/reasoning/summaryTextDelta", {
      threadId: nextThreadId,
      turnId,
      delta: "smoke reasoning\n",
    });
    notify("item/agentMessage/delta", {
      threadId: nextThreadId,
      turnId,
      delta: "codex smoke ok",
    });
    notify("thread/tokenUsage/updated", {
      threadId: nextThreadId,
      tokenUsage: {
        modelContextWindow: 128000,
        last: { totalTokens: 1234 },
      },
    });
    notify("turn/completed", {
      threadId: nextThreadId,
      turn: { id: turnId, status: "completed" },
    });
  }, 25);
}

function handleCompactStart(id: unknown, params: JsonObject): void {
  const nextThreadId = readString(params.threadId) ?? threadId;
  respond(id, {});
  setTimeout(() => {
    notify("item/started", {
      threadId: nextThreadId,
      item: { id: "compact-smoke-1", type: "contextCompaction" },
    });
    notify("thread/compacted", { threadId: nextThreadId, turnId: "compact-smoke-1" });
    notify("thread/tokenUsage/updated", {
      threadId: nextThreadId,
      tokenUsage: {
        modelContextWindow: 128000,
        last: { totalTokens: 321 },
      },
    });
    notify("item/completed", {
      threadId: nextThreadId,
      item: { id: "compact-smoke-1", type: "contextCompaction", status: "completed" },
    });
    notify("turn/completed", {
      threadId: nextThreadId,
      turn: { id: "compact-smoke-1", status: "completed" },
    });
  }, 25);
}

function handleRequest(message: JsonObject): void {
  const id = message.id;
  const method = readString(message.method);
  const params = message.params && typeof message.params === "object" ? message.params as JsonObject : {};

  if (method === "initialize") {
    respond(id, { serverInfo: { name: "piclaw-codex-app-server-mock", version: "0.0.0" } });
    return;
  }
  if (method === "model/list") {
    respond(id, {
      models: [{
        id: "gpt-5.5",
        displayName: "GPT-5.5",
        isDefault: true,
        modelContextWindow: 128000,
        reasoningEfforts: ["minimal", "medium", "high"],
        defaultReasoningEffort: "medium",
      }],
    });
    return;
  }
  if (method === "account/rateLimits/read") {
    const reset = Math.floor(Date.now() / 1000) + 60 * 60;
    respond(id, {
      rateLimitsByLimitId: {
        codex: {
          planType: "smoke",
          primary: { usedPercent: 10, resetsAt: reset, windowDurationMins: 300 },
          secondary: { usedPercent: 20, resetsAt: reset + 60 * 60 * 24, windowDurationMins: 10080 },
          credits: { unlimited: true },
        },
      },
    });
    return;
  }
  if (method === "thread/start") {
    respond(id, { thread: { id: threadId } });
    return;
  }
  if (method === "turn/start") {
    handleTurnStart(id, params);
    return;
  }
  if (method === "turn/cancel") {
    respond(id, {});
    return;
  }
  if (method === "thread/compact/start") {
    handleCompactStart(id, params);
    return;
  }
  respond(id, null);
}

const input = createInterface({ input: process.stdin });
input.on("line", (line) => {
  let message: JsonObject | null = null;
  try {
    message = JSON.parse(line) as JsonObject;
  } catch {
    return;
  }
  if (message && Object.prototype.hasOwnProperty.call(message, "id") && typeof message.method === "string") {
    handleRequest(message);
  }
});
