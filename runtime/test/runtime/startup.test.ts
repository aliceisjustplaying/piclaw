import { afterEach, expect, test } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import type { RuntimeState } from "../../src/runtime/state.js";
import { createTempWorkspace, importFresh, setEnv, type TempWorkspace } from "../helpers.js";

let restoreEnv: (() => void) | null = null;
let tempWorkspace: TempWorkspace | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
  tempWorkspace?.cleanup();
  tempWorkspace = null;
});

test("createWhatsAppChannel writes pairing IPC payloads with noNudge enabled", async () => {
  tempWorkspace = createTempWorkspace("piclaw-startup-pairing-");
  restoreEnv = setEnv({
    PICLAW_WORKSPACE: tempWorkspace.workspace,
    PICLAW_STORE: tempWorkspace.store,
    PICLAW_DATA: tempWorkspace.data,
    WHATSAPP_PHONE: "+15551234567",
  });

  const { createWhatsAppChannel } = await importFresh<typeof import("../../src/runtime/startup.js")>(
    "../src/runtime/startup.js"
  );

  const state = {
    chatJids: new Set<string>(),
    saveChats: () => {},
  } as RuntimeState;

  const channel = createWhatsAppChannel(state);
  const onPairingCode = (channel as any).opts?.onPairingCode as ((code: string) => void) | undefined;
  expect(typeof onPairingCode).toBe("function");

  onPairingCode?.("123-456");

  const ipcDir = join(tempWorkspace.data, "ipc", "messages");
  const [fileName] = readdirSync(ipcDir);
  expect(fileName).toBeTruthy();

  const payload = JSON.parse(readFileSync(join(ipcDir, fileName), "utf8"));
  expect(payload).toEqual({
    type: "message",
    chatJid: "web:default",
    text: "123-456",
    noNudge: true,
  });
});
