import { afterEach, describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { upsertStoredWebPushSubscription } from "../../../src/channels/web/push/web-push-store.js";
import { handleWebPushTest } from "../../../src/channels/web/push/web-push-routes.js";

const tempDirs: string[] = [];

function createTempPushDir(): string {
  const dir = mkdtempSync(join(tmpdir(), "piclaw-web-push-test-routes-"));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  while (tempDirs.length > 0) {
    const dir = tempDirs.pop();
    if (!dir) continue;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("web push test routes", () => {
  test("sends a test notification using stored subscriptions", async () => {
    const baseDir = createTempPushDir();
    upsertStoredWebPushSubscription({
      endpoint: "https://push.example.test/device/1",
      expirationTime: null,
      keys: {
        auth: "auth-token",
        p256dh: "p256dh-token",
      },
    }, { baseDir, deviceId: "device-1" });

    const deliveries: Array<Record<string, unknown>> = [];
    const req = new Request("https://example.com/agent/push/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        device_id: "device-1",
        title: "Custom title",
        body: "Custom body",
        url: "/?chat_jid=web%3Atest",
        tag: "piclaw:custom",
        sourceLabel: "Web Push",
      }),
    });

    const response = await handleWebPushTest(req, {
      baseDir,
      enabled: true,
      sendNotification: async (subscription, payload, options) => {
        deliveries.push({
          endpoint: subscription.endpoint,
          payload: JSON.parse(payload),
          options,
        });
      },
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, attempted: 1, sent: 1, removed: 0, failed: 0 });
    expect(deliveries).toHaveLength(1);
    expect(deliveries[0]?.payload).toEqual({
      title: "Custom title",
      body: "Custom body",
      url: "/?chat_jid=web%3Atest",
      tag: "piclaw:custom",
      sourceLabel: "Web Push",
    });
    expect(((deliveries[0]?.options as any)?.TTL)).toBe(120);
    expect(((deliveries[0]?.options as any)?.urgency)).toBe("high");
  });

  test("rejects push test requests without a target device id", async () => {
    const response = await handleWebPushTest(new Request("https://example.com/agent/push/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Missing device" }),
    }), { enabled: true });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Missing device_id." });
  });

  test("rejects push test requests that navigate outside the chat root", async () => {
    const response = await handleWebPushTest(new Request("https://example.com/agent/push/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ device_id: "device-1", url: "/settings" }),
    }), { enabled: true });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "Invalid push test URL." });
  });
});
