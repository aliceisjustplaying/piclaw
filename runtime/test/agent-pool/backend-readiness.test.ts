import { afterEach, beforeEach, expect, test } from "bun:test";
import "../helpers.js";

import type { AgentSessionRuntime } from "@mariozechner/pi-coding-agent";

import { AgentPool } from "../../src/agent-pool.js";
import { setBackendHandoff, setChatAgentBackend } from "../../src/agent-pool/backend-state.js";
import {
  setCodexAppServerClientFactoryForTests,
  stopCodexAppServerBackend,
} from "../../src/agent-pool/codex-app-server-backend.js";
import {
  resetClaudeAgentSdkBackendForTests,
  setClaudeAgentSdkQueryFactoryForTests,
} from "../../src/agent-pool/claude-agent-sdk-backend.js";
import { closeDbQuietly } from "../helpers.js";
import { initDatabase } from "../../src/db.js";

type NotificationHandler = (message: Record<string, unknown>) => void;

class StubCodexClient {
  requests: Array<{ method: string; params: any }> = [];
  handlers = new Set<NotificationHandler>();
  private threadCounter = 0;
  private turnCounter = 0;

  async ready() {}

  async request(method: string, params: unknown): Promise<unknown> {
    this.requests.push({ method, params });
    if (method === "thread/start") {
      this.threadCounter += 1;
      return { thread: { id: `thread-readiness-${this.threadCounter}` } };
    }
    if (method === "turn/start") {
      this.turnCounter += 1;
      const threadId = (params as any).threadId;
      const turnId = `turn-readiness-${this.turnCounter}`;
      queueMicrotask(() => {
        this.emit({
          method: "item/agentMessage/delta",
          params: { threadId, turnId, itemId: `item-${this.turnCounter}`, delta: `codex ${this.turnCounter}` },
        });
        this.emit({ method: "turn/completed", params: { threadId, turn: { id: turnId, status: "completed" } } });
      });
      return { turn: { id: turnId } };
    }
    if (method === "turn/interrupt") return {};
    return {};
  }

  onNotification(handler: NotificationHandler): () => void {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  emit(message: Record<string, unknown>) {
    for (const handler of [...this.handlers]) handler(message);
  }

  stop() {}
}

function makeQuery(messages: unknown[]) {
  const generator = (async function* () {
    for (const message of messages) yield message;
  })();
  return Object.assign(generator, {
    interrupt: async () => {},
    setPermissionMode: async () => {},
    setModel: async () => {},
    setMaxThinkingTokens: async () => {},
    applyFlagSettings: async () => {},
    getSettings: async () => ({}),
    rewindFiles: async () => ({}),
    cancelAsyncMessage: async () => false,
    seedReadState: async () => {},
    enableRemoteControl: async () => ({}),
    submitFeedback: async () => ({}),
    generateSessionTitle: async () => "title",
    askSideQuestion: async () => null,
    launchUltrareview: async () => ({}),
    messageRated: async () => {},
  }) as any;
}

function createRuntime(): AgentSessionRuntime {
  const session = {
    getAllTools: () => [],
    subscribe: () => () => {},
    abort: async () => {},
    dispose: () => {},
  };
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
    dispose: async () => {},
  } as any;
}

let dbModule: typeof import("../../src/db.js") | null = null;

beforeEach(async () => {
  dbModule = await import("../../src/db.js");
  initDatabase();
});

afterEach(() => {
  stopCodexAppServerBackend();
  resetClaudeAgentSdkBackendForTests();
  closeDbQuietly(dbModule);
  dbModule = null;
});

test("backend switching preserves handoff context across Codex and Claude turns", async () => {
  const chatJid = `web:backend-readiness-${Date.now()}`;
  const codex = new StubCodexClient();
  setCodexAppServerClientFactoryForTests(() => codex as any);
  const claudePrompts: string[] = [];
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    claudePrompts.push(params.prompt);
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-readiness-session",
        result: "claude 1",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  const pool = new AgentPool({ createSession: async () => createRuntime() });
  try {
    setChatAgentBackend(chatJid, "codex");
    expect(await pool.runAgent("first turn", chatJid)).toMatchObject({ status: "success", result: "codex 1" });

    setBackendHandoff(chatJid, {
      from: "codex-app-server",
      to: "claude-agent-sdk",
      summary: "Carry forward: generated a barcode attachment.",
    });
    setChatAgentBackend(chatJid, "claude");
    expect(await pool.runAgent("second turn", chatJid)).toMatchObject({ status: "success", result: "claude 1" });
    expect(claudePrompts[0]).toContain("Backend handoff state");
    expect(claudePrompts[0]).toContain("generated a barcode attachment");

    setBackendHandoff(chatJid, {
      from: "claude-agent-sdk",
      to: "codex-app-server",
      summary: "Carry forward: checked calendar and found no changes.",
    });
    setChatAgentBackend(chatJid, "codex");
    expect(await pool.runAgent("third turn", chatJid)).toMatchObject({ status: "success", result: "codex 2" });
    const lastTurnStart = [...codex.requests].reverse().find((request) => request.method === "turn/start");
    const textInput = String(lastTurnStart?.params?.input?.[0]?.text ?? "");
    expect(textInput).toContain("Backend handoff state");
    expect(textInput).toContain("checked calendar and found no changes");
  } finally {
    await pool.shutdown();
  }
});
