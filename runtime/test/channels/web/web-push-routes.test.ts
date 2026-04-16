import { afterEach, describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { WebNotificationPresenceService } from "../../../src/channels/web/push/web-notification-presence-service.js";
import {
  handleWebPushPresence,
  handleWebPushSubscriptionUpsert,
} from "../../../src/channels/web/push/web-push-routes.js";

const tempDirs: string[] = [];

function createTempPushDir(): string {
  const dir = mkdtempSync(join(tmpdir(), "piclaw-web-push-routes-"));
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

describe("web push routes", () => {
  test("stores subscription device ids and tracks live presence updates", async () => {
    const baseDir = createTempPushDir();
    const upsertReq = new Request("https://example.com/agent/push/subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json", "user-agent": "PiClaw Test" },
      body: JSON.stringify({
        device_id: "device-1",
        subscription: {
          endpoint: "https://push.example.test/device/1",
          expirationTime: null,
          keys: {
            auth: "auth-token",
            p256dh: "p256dh-token",
          },
        },
      }),
    });

    const upsertResponse = await handleWebPushSubscriptionUpsert(upsertReq, { baseDir });
    expect(upsertResponse.status).toBe(200);
    expect(await upsertResponse.json()).toEqual({ ok: true, endpoint: "https://push.example.test/device/1", device_id: "device-1" });

    const presenceService = new WebNotificationPresenceService({ now: () => 1000 });
    const presenceReq = new Request("https://example.com/agent/push/presence", {
      method: "POST",
      headers: { "Content-Type": "application/json", "user-agent": "PiClaw Test" },
      body: JSON.stringify({
        device_id: "device-1",
        client_id: "client-1",
        chat_jid: "web:default",
        visibility_state: "hidden",
        has_focus: false,
      }),
    });

    const presenceResponse = await handleWebPushPresence(presenceReq, { presenceService });
    expect(presenceResponse.status).toBe(200);
    expect(await presenceResponse.json()).toEqual({
      ok: true,
      active: true,
      device_id: "device-1",
      client_id: "client-1",
      chat_jid: "web:default",
      visibility_state: "hidden",
    });
    expect(presenceService.getDeviceChatState("device-1", "web:default").hasLiveClient).toBe(true);
  });
});
