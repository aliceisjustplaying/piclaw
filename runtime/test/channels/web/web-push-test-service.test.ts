import { afterEach, describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { upsertStoredWebPushSubscription } from "../../../src/channels/web/push/web-push-store.js";
import { sendStoredWebPushTestNotification } from "../../../src/channels/web/push/web-push-service.js";

const tempDirs: string[] = [];

function createTempPushDir(): string {
  const dir = mkdtempSync(join(tmpdir(), "piclaw-web-push-test-service-"));
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

describe("web push test service", () => {
  test("adds a default source marker to test notifications", async () => {
    const baseDir = createTempPushDir();
    upsertStoredWebPushSubscription({
      endpoint: "https://push.example.test/device/9",
      expirationTime: null,
      keys: {
        auth: "auth-token",
        p256dh: "p256dh-token",
      },
    }, { baseDir });

    const deliveries: Array<Record<string, unknown>> = [];
    await sendStoredWebPushTestNotification({
      baseDir,
      sendNotification: async (_subscription, payload) => {
        deliveries.push(JSON.parse(payload));
      },
    });

    expect(deliveries).toEqual([{
      title: "PiClaw notifications enabled",
      body: "Web Push is configured for this device.",
      url: "/",
      tag: "piclaw:test",
      sourceLabel: "Web Push",
    }]);
  });
});
