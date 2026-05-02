import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import "../helpers.js";

import type { AgentSessionRuntime } from "@mariozechner/pi-coding-agent";
import { AgentPool } from "../../src/agent-pool.js";
import { getPendingBackendHandoff, setBackendHandoff, setChatAgentBackend } from "../../src/agent-pool/backend-state.js";
import { PROACTIVE_EXTENSION_ID, PROACTIVE_TASK_KEY } from "../../src/agent-pool/proactive.js";
import { extensionKvGet, getTaskById, initDatabase } from "../../src/db.js";
import { closeDbQuietly } from "../helpers.js";

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

describe("backend handoff injection", () => {
  test("injects a pending handoff into the next run and marks it used", async () => {
    const chatJid = "web:handoff-injection";
    setChatAgentBackend(chatJid, "pi");
    setBackendHandoff(chatJid, {
      from: "claude-agent-sdk",
      to: "pi",
      summary: "Open task: keep testing the backend switch.",
    });

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
          listener({ type: "message_update", assistantMessageEvent: { type: "text_delta", delta: "ok" } });
        }
      }
      async abort() {}
      dispose() {}
    }

    const session = new StubSession();
    const pool = new AgentPool({ createSession: async () => createRuntime(session) });
    try {
      const result = await pool.runAgent("current user request", chatJid);
      expect(result.status).toBe("success");
      expect(session.prompts[0]).toContain("Backend handoff state");
      expect(session.prompts[0]).toContain("Open task: keep testing the backend switch.");
      expect(session.prompts[0]).toContain("current user request");
      expect(getPendingBackendHandoff(chatJid, "pi")).toBeNull();
    } finally {
      await pool.shutdown();
    }
  });

  test("keeps a pending handoff when the receiving backend run fails", async () => {
    const chatJid = "web:handoff-failed-run";
    setChatAgentBackend(chatJid, "pi");
    setBackendHandoff(chatJid, {
      from: "claude-agent-sdk",
      to: "pi",
      summary: "Open task: keep testing the backend switch.",
    });

    class FailingSession {
      subscribe() {
        return () => undefined;
      }
      async prompt() {
        throw new Error("model failed");
      }
      async abort() {}
      dispose() {}
    }

    const pool = new AgentPool({ createSession: async () => createRuntime(new FailingSession()) });
    try {
      const result = await pool.runAgent("current user request", chatJid);
      expect(result.status).toBe("error");
      expect(getPendingBackendHandoff(chatJid, "pi")?.summary).toContain("Open task");
    } finally {
      await pool.shutdown();
    }
  });

  test("proactive tasks follow the current chat backend instead of pinning an enable-time model", async () => {
    const chatJid = "web:proactive-current-backend";
    setChatAgentBackend(chatJid, "pi");
    const pool = new AgentPool({ createSession: async () => createRuntime({ subscribe: () => () => undefined, prompt: async () => undefined }) });
    try {
      const result = await pool.applyControlCommand(chatJid, { type: "proactive", action: "on", raw: "/proactive on" } as any);
      expect(result.status).toBe("success");
      const taskRef = extensionKvGet<{ id: string }>(PROACTIVE_EXTENSION_ID, PROACTIVE_TASK_KEY, "chat", chatJid);
      expect(taskRef?.id).toBeTruthy();
      expect(getTaskById(taskRef!.id)?.model).toBeNull();
    } finally {
      await pool.shutdown();
    }
  });
});
