import { expect, test } from "bun:test";

import { cdpSendWithTimeout } from "../../extensions/browser/cdp-browser/cdp.ts";

class FakeWebSocket {
  sent: string[] = [];
  listeners = new Map<string, Array<(...args: any[]) => void>>();

  addEventListener(type: string, listener: (...args: any[]) => void) {
    const current = this.listeners.get(type) || [];
    current.push(listener);
    this.listeners.set(type, current);
  }

  removeEventListener(type: string, listener: (...args: any[]) => void) {
    const current = this.listeners.get(type) || [];
    this.listeners.set(type, current.filter((candidate) => candidate !== listener));
  }

  send(payload: string) {
    this.sent.push(payload);
  }

  emit(type: string, event: any) {
    for (const listener of this.listeners.get(type) || []) {
      listener(event);
    }
  }
}

test("cdpSendWithTimeout rejects timed out commands instead of resolving null", async () => {
  const ws = new FakeWebSocket() as unknown as WebSocket;

  await expect(cdpSendWithTimeout(ws, "Page.enable", undefined, undefined, 5)).rejects.toThrow(
    "CDP command timed out: Page.enable",
  );
});

test("cdpSendWithTimeout rejects protocol errors instead of resolving them", async () => {
  const ws = new FakeWebSocket() as unknown as WebSocket;
  const pending = cdpSendWithTimeout(ws, "Page.navigate", { url: "https://example.com" }, undefined, 50);
  const [{ id }] = ws.sent.map((payload) => JSON.parse(payload));

  (ws as any).emit("message", {
    data: JSON.stringify({
      id,
      error: {
        code: -32000,
        message: "Navigation failed",
      },
    }),
  });

  await expect(pending).rejects.toThrow("CDP command failed for Page.navigate: Navigation failed");
});

test("cdpSendWithTimeout still resolves successful protocol results", async () => {
  const ws = new FakeWebSocket() as unknown as WebSocket;
  const pending = cdpSendWithTimeout(ws, "Runtime.evaluate", { expression: "2 + 2" }, undefined, 50);
  const [{ id }] = ws.sent.map((payload) => JSON.parse(payload));

  (ws as any).emit("message", {
    data: JSON.stringify({
      id,
      result: {
        result: { type: "number", value: 4 },
      },
    }),
  });

  await expect(pending).resolves.toEqual({
    result: { type: "number", value: 4 },
  });
});
