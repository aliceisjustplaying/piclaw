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
import { getNativeAvailableModels } from "../../src/agent-pool/native-model-status.js";
import { clearProviderUsageCache } from "../../src/agent-pool/provider-usage.js";
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
  clearProviderUsageCache();
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

test("available model picker options stay scoped to the active backend", async () => {
  const chatJid = `web:backend-models-${Date.now()}`;
  setCodexAppServerClientFactoryForTests(() => new StubCodexClient() as any);
  const pool = new AgentPool({ createSession: async () => createRuntime() });
  try {
    setChatAgentBackend(chatJid, "codex");
    const codexModels = await pool.getAvailableModels(chatJid);
    expect(codexModels.model_options?.every((model) => model.provider === "codex")).toBe(true);
    expect(codexModels.models.every((model) => model.startsWith("codex/"))).toBe(true);

    setChatAgentBackend(chatJid, "claude");
    const claudeModels = await pool.getAvailableModels(chatJid);
    expect(claudeModels.model_options?.every((model) => model.provider === "claude")).toBe(true);
    expect(claudeModels.models.every((model) => model.startsWith("claude/"))).toBe(true);
  } finally {
    await pool.shutdown();
  }
});

test("Claude model status waits for Anthropic usage on first refresh", async () => {
  const chatJid = `web:claude-usage-${Date.now()}`;
  const previousFetch = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL) => {
    const url = String(input);
    if (url.endsWith("/api/oauth/usage")) {
      return new Response(JSON.stringify({
        five_hour: { utilization: 3, resets_at: "2026-05-03T18:40:00.000Z" },
        seven_day: { utilization: 7, resets_at: "2026-05-09T19:00:00.000Z" },
      }), { status: 200, headers: { "content-type": "application/json" } });
    }
    return new Response("{}", { status: 404 });
  }) as typeof fetch;

  try {
    setChatAgentBackend(chatJid, "claude");
    const status = await getNativeAvailableModels(
      chatJid,
      { get: () => ({ type: "oauth", access: "anthropic-token", expires: Date.now() + 60_000 }) } as any,
      {
        getCurrentModelLabel: async () => null,
        getAvailableModels: async () => ({ current: null, models: [] }),
        getContextUsageForChat: () => null,
      },
    );

    expect((status.provider_usage as any)?.primary?.remaining_percent).toBe(97);
    expect((status.provider_usage as any)?.secondary?.remaining_percent).toBe(93);
  } finally {
    globalThis.fetch = previousFetch;
  }
});
