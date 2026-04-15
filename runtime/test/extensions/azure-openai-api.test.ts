import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { join } from "node:path";

import {
  applySessionCorrelationHeaders,
  processResponsesStream,
  resolvePiAiResponsesSharedModulePath,
} from "../../src/extensions/azure-openai-api.js";

test("resolvePiAiResponsesSharedModulePath finds the bundled pi-ai helper", () => {
  const resolved = resolvePiAiResponsesSharedModulePath();
  expect(resolved.endsWith(join("@mariozechner", "pi-ai", "dist", "providers", "openai-responses-shared.js"))).toBe(true);
});

test("resolvePiAiResponsesSharedModulePath walks up to a parent node_modules", () => {
  const startDir = join(process.cwd(), "runtime", "src", "extensions", "nested", "deeper");
  const resolved = resolvePiAiResponsesSharedModulePath(startDir);
  expect(existsSync(resolved)).toBe(true);
  expect(resolved.endsWith(join("@mariozechner", "pi-ai", "dist", "providers", "openai-responses-shared.js"))).toBe(true);
});

test("processResponsesStream maps reasoning_text events into thinking events", async () => {
  async function* events() {
    yield {
      type: "response.output_item.added",
      item: { id: "rs_1", type: "reasoning", content: [] },
      output_index: 0,
      sequence_number: 1,
    };
    yield {
      type: "response.content_part.added",
      item_id: "rs_1",
      output_index: 0,
      content_index: 0,
      sequence_number: 2,
      part: { type: "reasoning_text", text: "" },
    };
    yield {
      type: "response.reasoning_text.delta",
      item_id: "rs_1",
      output_index: 0,
      content_index: 0,
      sequence_number: 3,
      delta: "plan",
    };
    yield {
      type: "response.reasoning_text.done",
      item_id: "rs_1",
      output_index: 0,
      content_index: 0,
      sequence_number: 4,
      text: "plan",
    };
    yield {
      type: "response.output_item.done",
      output_index: 0,
      sequence_number: 5,
      item: {
        id: "rs_1",
        type: "reasoning",
        content: [{ type: "reasoning_text", text: "plan" }],
      },
    };
  }

  const output: any = { content: [] };
  const pushed: any[] = [];
  const stream = { push: (event: any) => pushed.push(event) };
  const model: any = { id: "gpt-5-4", provider: "azure-openai", api: "responses" };

  await processResponsesStream(events(), output, stream, model);

  expect(pushed.some((event) => event.type === "thinking_start")).toBe(true);
  expect(pushed.some((event) => event.type === "thinking_delta" && event.delta === "plan")).toBe(true);
  expect(pushed.some((event) => event.type === "thinking_end" && event.content.includes("plan"))).toBe(true);
  expect(output.content[0]?.type).toBe("thinking");
  expect(output.content[0]?.thinking).toContain("plan");
});

test("applySessionCorrelationHeaders aligns session_id and x-client-request-id", () => {
  expect(applySessionCorrelationHeaders({}, "sess_123")).toEqual({
    session_id: "sess_123",
    "x-client-request-id": "sess_123",
  });
});

test("applySessionCorrelationHeaders optionally includes x-ms-client-request-id", () => {
  expect(applySessionCorrelationHeaders({ existing: "value" }, "sess_456", { includeAzureClientRequestId: true })).toEqual({
    existing: "value",
    session_id: "sess_456",
    "x-client-request-id": "sess_456",
    "x-ms-client-request-id": "sess_456",
  });
});

test("processResponsesStream reroutes commentary-phase output_text into thinking events", async () => {
  async function* events() {
    yield {
      type: "response.output_item.added",
      item: { id: "msg_1", type: "message", phase: "commentary", status: "in_progress", content: [], role: "assistant" },
      output_index: 0,
      sequence_number: 1,
    };
    yield {
      type: "response.content_part.added",
      item_id: "msg_1",
      output_index: 0,
      content_index: 0,
      sequence_number: 2,
      part: { type: "output_text", text: "" },
    };
    yield {
      type: "response.output_text.delta",
      item_id: "msg_1",
      output_index: 0,
      content_index: 0,
      sequence_number: 3,
      delta: "thinking aloud",
    };
    yield {
      type: "response.output_text.done",
      item_id: "msg_1",
      output_index: 0,
      content_index: 0,
      sequence_number: 4,
      text: "thinking aloud",
      logprobs: [],
    };
    yield {
      type: "response.output_item.done",
      output_index: 0,
      sequence_number: 5,
      item: {
        id: "msg_1",
        type: "message",
        phase: "commentary",
        role: "assistant",
        content: [{ type: "output_text", text: "thinking aloud", annotations: [] }],
      },
    };
  }

  const output: any = { content: [] };
  const pushed: any[] = [];
  const stream = { push: (event: any) => pushed.push(event) };
  const model: any = { id: "gpt-5-4", provider: "azure-openai", api: "responses" };

  await processResponsesStream(events(), output, stream, model);

  expect(pushed.some((event) => event.type === "thinking_start")).toBe(true);
  expect(pushed.some((event) => event.type === "thinking_delta" && event.delta === "thinking aloud")).toBe(true);
  expect(pushed.some((event) => event.type === "thinking_end" && event.content.includes("thinking aloud"))).toBe(true);
  expect(pushed.some((event) => event.type === "text_delta")).toBe(false);
  expect(output.content[0]?.type).toBe("thinking");
  expect(output.content[0]?.thinking).toContain("thinking aloud");
});
