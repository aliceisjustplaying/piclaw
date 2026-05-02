#!/usr/bin/env bun

import { createInterface } from "node:readline";

type JsonObject = Record<string, unknown>;

let turnCounter = 0;
const threadId = "thread-smoke-1";
let nextRequestId = 10_000;
const pendingToolResponses = new Map<unknown, (message: JsonObject) => void>();

function write(message: JsonObject): void {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", ...message })}\n`);
}

function respond(id: unknown, result: unknown): void {
  write({ id, result });
}

function notify(method: string, params: JsonObject): void {
  write({ method, params });
}

function request(method: string, params: JsonObject): Promise<JsonObject> {
  const id = nextRequestId++;
  write({ id, method, params });
  return new Promise((resolve) => {
    pendingToolResponses.set(id, resolve);
  });
}

function readString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

function inputText(params: JsonObject): string {
  const input = Array.isArray(params.input) ? params.input : [];
  return input
    .map((item) => item && typeof item === "object" && typeof (item as JsonObject).text === "string" ? (item as JsonObject).text : "")
    .join("\n");
}

function handleTurnStart(id: unknown, params: JsonObject): void {
  turnCounter += 1;
  const nextThreadId = readString(params.threadId) ?? threadId;
  const turnId = `turn-smoke-${turnCounter}`;
  respond(id, { turn: { id: turnId } });

  setTimeout(async () => {
    notify("turn/started", { threadId: nextThreadId, turn: { id: turnId } });
    notify("item/reasoning/summaryTextDelta", {
      threadId: nextThreadId,
      turnId,
      delta: "smoke reasoning\n",
    });
    if (inputText(params).includes("smoke codex app-server")) {
      const toolItem = {
        id: "tool-attach-smoke-1",
        type: "mcpToolCall",
        tool: "attach_file",
        namespace: "piclaw_tool",
        status: "in_progress",
        args: { path: "smoke-output.txt", name: "smoke-output.txt", content_type: "text/plain", kind: "file" },
      };
      notify("item/started", { threadId: nextThreadId, turnId, item: toolItem });
      await request("item/tool/call", {
        threadId: nextThreadId,
        turnId,
        namespace: "piclaw_tool",
        tool: "attach_file",
        arguments: toolItem.args,
      });
      notify("item/completed", {
        threadId: nextThreadId,
        turnId,
        item: { ...toolItem, status: "completed", success: true },
      });
    }
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
  if (message && Object.prototype.hasOwnProperty.call(message, "id") && !message.method && pendingToolResponses.has(message.id)) {
    const resolve = pendingToolResponses.get(message.id)!;
    pendingToolResponses.delete(message.id);
    resolve(message);
    return;
  }
  if (message && Object.prototype.hasOwnProperty.call(message, "id") && typeof message.method === "string") {
    handleRequest(message);
  }
});
