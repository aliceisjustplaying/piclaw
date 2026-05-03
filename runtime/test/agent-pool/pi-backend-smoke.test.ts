import { afterEach, beforeEach, expect, test } from "bun:test";
import "../helpers.js";

import type { AgentSessionRuntime } from "@mariozechner/pi-coding-agent";

import { AgentPool } from "../../src/agent-pool.js";
import { setChatAgentBackend } from "../../src/agent-pool/backend-state.js";
import { closeDbQuietly } from "../helpers.js";
import { initDatabase } from "../../src/db.js";

let dbModule: typeof import("../../src/db.js") | null = null;

beforeEach(async () => {
  dbModule = await import("../../src/db.js");
  initDatabase();
});

afterEach(() => {
  closeDbQuietly(dbModule);
  dbModule = null;
});

function createRuntime(session: any): AgentSessionRuntime {
  return {
    session,
    cwd: "/workspace",
    diagnostics: [],
    services: {} as any,
    modelFallbackMessage: undefined,
    newSession: async () => ({ cancelled: false }),
    switchSession: async () => ({ cancelled: false }),
    fork: async () => ({ cancelled: false }),
    importFromJsonl: async () => ({ cancelled: false }),
    dispose: async () => session.dispose?.(),
  } as any;
}

test("pi backend still routes through the native session prompt path", async () => {
  const chatJid = "web:pi-backend-smoke";
  setChatAgentBackend(chatJid, "pi");

  class StubSession {
    prompts: string[] = [];
    private listeners: Array<(event: any) => void> = [];

    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((candidate) => candidate !== listener);
      };
    }

    async prompt(prompt: string) {
      this.prompts.push(prompt);
      for (const listener of this.listeners) {
        listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "pi smoke ok" } });
      }
    }

    async abort() {}
    dispose() {}
  }

  const session = new StubSession();
  const pool = new AgentPool({ createSession: async () => createRuntime(session) });
  try {
    const result = await pool.runAgent("test pi backend", chatJid);
    expect(result).toMatchObject({ status: "success", result: "pi smoke ok" });
    expect(session.prompts).toEqual(["test pi backend"]);
  } finally {
    await pool.shutdown();
  }
});
