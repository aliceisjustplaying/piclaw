import { expect, test } from "bun:test";

import {
  compactCodexAppServerChat,
  getCodexAppServerFastMode,
  hasCodexAppServerThread,
  isCodexAppServerThreadUntrustedForTests,
  isCodexExternalDataToolForTests,
  isCodexBridgeToolAllowed,
  listCodexBridgeDynamicToolsForTests,
  markCodexAppServerThreadUntrustedForTests,
  resolveCodexAppServerApprovalForTests,
  runCodexAppServerPrompt,
  setCodexAppServerFastMode,
  setCodexAppServerClientFactoryForTests,
  stopCodexAppServerBackend,
  willCodexAppServerStartNewThread,
  type PiclawBridgeSession,
} from "../../src/agent-pool/codex-app-server-backend.js";

type NotificationHandler = (message: Record<string, unknown>) => void;

class StubCodexClient {
  requests: Array<{ method: string; params: any }> = [];
  handlers = new Set<NotificationHandler>();
  rejectTurnStart = false;
  rejectCompactStart = false;
  rejectNextThreadStart = false;
  holdTurn = false;
  stopped = false;
  private threadCounter = 0;

  async ready() {}

  async request(method: string, params: unknown): Promise<unknown> {
    this.requests.push({ method, params });
    if (method === "thread/start") {
      if (this.rejectNextThreadStart) {
        this.rejectNextThreadStart = false;
        throw new Error("thread start failed");
      }
      this.threadCounter += 1;
      return { thread: { id: `thread-${this.threadCounter}` } };
    }
    if (method === "turn/start") {
      if (this.rejectTurnStart) throw new Error("turn start failed");
      const threadId = (params as any).threadId || "thread-1";
      if (!this.holdTurn) queueMicrotask(() => this.emit({ method: "turn/completed", params: { threadId, turn: { id: "turn-1", status: "completed" } } }));
      return { turn: { id: "turn-1" } };
    }
    if (method === "thread/compact/start") {
      if (this.rejectCompactStart) throw new Error("compact start failed");
      queueMicrotask(() => this.emit({ method: "thread/compacted", params: { threadId: (params as any).threadId || "thread-1" } }));
      return {};
    }
    if (method === "turn/cancel") return {};
    return {};
  }

  onNotification(handler: NotificationHandler): () => void {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  emit(message: Record<string, unknown>) {
    for (const handler of [...this.handlers]) handler(message);
  }

  stop() {
    this.stopped = true;
  }
}

function useStubClient(client: StubCodexClient): void {
  setCodexAppServerClientFactoryForTests(() => client);
}

test("Codex bridge filters native Pi tools and exposes Piclaw extension tools", () => {
  expect(isCodexBridgeToolAllowed("bash")).toBe(false);
  expect(isCodexBridgeToolAllowed("edit")).toBe(false);
  expect(isCodexBridgeToolAllowed("m365_mail")).toBe(true);
  expect(isCodexBridgeToolAllowed("schedule_task")).toBe(true);

  const session: PiclawBridgeSession = {
    getAllTools: () => [
      { name: "bash", description: "shell", parameters: {}, execute: async () => ({ content: [] }) },
      { name: "m365_mail", description: "Mail", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      { name: "schedule_task", description: "Schedule", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
    ],
  };

  expect(listCodexBridgeDynamicToolsForTests(session)).toEqual([
    {
      namespace: "piclaw_tool",
      name: "m365_mail",
      description: "Mail",
      inputSchema: { type: "object" },
    },
    {
      namespace: "piclaw_tool",
      name: "schedule_task",
      description: "Schedule",
      inputSchema: { type: "object" },
    },
  ]);
});

test("Codex fast mode persists per chat", () => {
  setCodexAppServerFastMode("web:codex-fast-a", true);
  setCodexAppServerFastMode("web:codex-fast-b", false);

  expect(getCodexAppServerFastMode("web:codex-fast-a")).toBe(true);
  expect(getCodexAppServerFastMode("web:codex-fast-b")).toBe(false);
});

test("Codex bridge exposes extension runner registered tools", () => {
  const session: PiclawBridgeSession = {
    extensionRunner: {
      createContext: () => ({ chatJid: "web:default" }),
      getAllRegisteredTools: () => [
        {
          definition: {
            name: "google_calendar",
            description: "Google Calendar",
            parameters: { type: "object" },
            execute: async () => ({ content: [] }),
          },
        },
        {
          definition: {
            name: "gmail_fetch_email",
            description: "Fetch Gmail message",
            parameters: { type: "object" },
            execute: async () => ({ content: [] }),
          },
        },
      ],
    },
  };

  expect(listCodexBridgeDynamicToolsForTests(session)).toEqual([
    {
      namespace: "piclaw_tool",
      name: "gmail_fetch_email",
      description: "Fetch Gmail message",
      inputSchema: { type: "object" },
    },
    {
      namespace: "piclaw_tool",
      name: "google_calendar",
      description: "Google Calendar",
      inputSchema: { type: "object" },
    },
  ]);
});

test("Codex app-server registers bridge tools on thread start and compacts existing thread", async () => {
  const client = new StubCodexClient();
  useStubClient(client);
  try {
    const session: PiclawBridgeSession = {
      getAllTools: () => [
        { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      ],
    };

    await runCodexAppServerPrompt("hello", "web:codex-stub", { timeoutMs: 1000 }, session);
    expect(hasCodexAppServerThread("web:codex-stub")).toBe(true);
    expect(willCodexAppServerStartNewThread("web:codex-stub", session)).toBe(false);
    expect(client.requests.filter((request) => request.method === "thread/start").length).toBe(1);
    expect(client.requests.find((request) => request.method === "thread/start")?.params.dynamicTools.some((tool: any) => tool.name === "google_calendar")).toBe(true);

    await compactCodexAppServerChat("web:codex-stub");
    expect(client.requests.filter((request) => request.method === "thread/start").length).toBe(1);
    expect(client.requests.some((request) => request.method === "thread/compact/start")).toBe(true);
  } finally {
    setCodexAppServerClientFactoryForTests(null);
  }
});

test("Codex app-server detects dynamic tool changes before a replay decision", async () => {
  const client = new StubCodexClient();
  useStubClient(client);
  try {
    const firstSession: PiclawBridgeSession = {
      getAllTools: () => [
        { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      ],
    };
    const secondSession: PiclawBridgeSession = {
      getAllTools: () => [
        { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
        { name: "gmail_fetch_email", description: "Fetch email", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      ],
    };

    await runCodexAppServerPrompt("hello", "web:codex-tool-change", { timeoutMs: 1000 }, firstSession);
    expect(willCodexAppServerStartNewThread("web:codex-tool-change", secondSession)).toBe(true);
  } finally {
    setCodexAppServerClientFactoryForTests(null);
  }
});

test("Codex app-server keeps the old thread when restart thread/start fails", async () => {
  const client = new StubCodexClient();
  useStubClient(client);
  try {
    const firstSession: PiclawBridgeSession = {
      getAllTools: () => [
        { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      ],
    };
    const secondSession: PiclawBridgeSession = {
      getAllTools: () => [
        { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
        { name: "gmail_fetch_email", description: "Fetch email", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      ],
    };

    await runCodexAppServerPrompt("hello", "web:codex-restart-fail", { timeoutMs: 1000 }, firstSession);
    client.rejectNextThreadStart = true;
    await expect(runCodexAppServerPrompt("hello", "web:codex-restart-fail", { timeoutMs: 1000 }, secondSession)).rejects.toThrow("thread start failed");
    expect(hasCodexAppServerThread("web:codex-restart-fail")).toBe(true);
    expect(willCodexAppServerStartNewThread("web:codex-restart-fail", firstSession)).toBe(false);
  } finally {
    setCodexAppServerClientFactoryForTests(null);
  }
});

test("Codex app-server removes notification handlers when start requests fail", async () => {
  const client = new StubCodexClient();
  useStubClient(client);
  try {
    client.rejectTurnStart = true;
    const output = await runCodexAppServerPrompt("hello", "web:codex-fail-turn", { timeoutMs: 1000 });
    expect(output.status).toBe("error");
    expect(client.handlers.size).toBe(0);

    client.rejectTurnStart = false;
    await runCodexAppServerPrompt("hello", "web:codex-fail-compact", { timeoutMs: 1000 });
    client.rejectCompactStart = true;
    await expect(compactCodexAppServerChat("web:codex-fail-compact")).rejects.toThrow("compact start failed");
    expect(client.handlers.size).toBe(0);
  } finally {
    setCodexAppServerClientFactoryForTests(null);
  }
});

test("Codex app-server denies command and file approvals for untrusted external content", () => {
  expect(resolveCodexAppServerApprovalForTests(
    "item/commandExecution/requestApproval",
    { threadId: "thread-1" },
    true,
  )).toEqual({ decision: "reject" });
  expect(resolveCodexAppServerApprovalForTests(
    "item/fileChange/requestApproval",
    { threadId: "thread-1" },
    true,
  )).toEqual({ decision: "reject" });
  expect(resolveCodexAppServerApprovalForTests(
    "execCommandApproval",
    { conversationId: "thread-1" },
    true,
  )).toEqual({ decision: "denied" });
  expect(resolveCodexAppServerApprovalForTests(
    "applyPatchApproval",
    { conversationId: "thread-1" },
    true,
  )).toEqual({ decision: "denied" });
  expect(resolveCodexAppServerApprovalForTests(
    "item/permissions/requestApproval",
    { threadId: "thread-1", permissions: { sandbox: "danger-full-access" } },
    true,
  )).toEqual({ permissions: {}, scope: "turn" });
  expect(resolveCodexAppServerApprovalForTests(
    "future/requestApproval",
    { threadId: "thread-1" },
    true,
  )).toEqual({ decision: "denied" });
});

test("Codex app-server accepts approvals for normal local-user turns", () => {
  expect(resolveCodexAppServerApprovalForTests(
    "item/commandExecution/requestApproval",
    { threadId: "thread-1" },
    false,
  )).toEqual({ decision: "accept" });
  expect(resolveCodexAppServerApprovalForTests(
    "item/permissions/requestApproval",
    { threadId: "thread-1", permissions: { sandbox: "danger-full-access" } },
    false,
  )).toEqual({ permissions: { sandbox: "danger-full-access" }, scope: "turn" });
  expect(resolveCodexAppServerApprovalForTests(
    "future/requestApproval",
    { threadId: "thread-1" },
    false,
  )).toEqual({ decision: "denied" });
});

test("Codex app-server keeps untrusted thread state sticky across later trusted turns", async () => {
  const client = new StubCodexClient();
  useStubClient(client);
  try {
    await runCodexAppServerPrompt("hello", "web:codex-untrusted-sticky", { timeoutMs: 1000 });
    markCodexAppServerThreadUntrustedForTests("web:codex-untrusted-sticky");
    expect(isCodexAppServerThreadUntrustedForTests("web:codex-untrusted-sticky")).toBe(true);

    await runCodexAppServerPrompt("followup", "web:codex-untrusted-sticky", { timeoutMs: 1000, hasUntrustedExternalContent: false });
    expect(isCodexAppServerThreadUntrustedForTests("web:codex-untrusted-sticky")).toBe(true);
  } finally {
    setCodexAppServerClientFactoryForTests(null);
  }
});

test("Codex app-server carries untrusted state across dynamic tool restarts", async () => {
  const client = new StubCodexClient();
  useStubClient(client);
  try {
    const firstSession: PiclawBridgeSession = {
      getAllTools: () => [
        { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      ],
    };
    const secondSession: PiclawBridgeSession = {
      getAllTools: () => [
        { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
        { name: "gmail_fetch_email", description: "Fetch email", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      ],
    };

    await runCodexAppServerPrompt("hello", "web:codex-untrusted-restart", { timeoutMs: 1000 }, firstSession);
    markCodexAppServerThreadUntrustedForTests("web:codex-untrusted-restart");
    await runCodexAppServerPrompt("followup", "web:codex-untrusted-restart", { timeoutMs: 1000 }, secondSession);
    expect(isCodexAppServerThreadUntrustedForTests("web:codex-untrusted-restart")).toBe(true);
  } finally {
    setCodexAppServerClientFactoryForTests(null);
  }
});

test("Codex app-server cancels active turns when the caller aborts", async () => {
  const client = new StubCodexClient();
  useStubClient(client);
  try {
    client.holdTurn = true;
    const controller = new AbortController();
    const run = runCodexAppServerPrompt("hello", "web:codex-abort", { timeoutMs: 0, signal: controller.signal });
    await new Promise((resolve) => setTimeout(resolve, 0));
    controller.abort();
    const output = await run;
    expect(output.status).toBe("error");
    expect(output.error).toContain("aborted");
    expect(client.requests.some((request) => request.method === "turn/cancel")).toBe(true);
  } finally {
    setCodexAppServerClientFactoryForTests(null);
  }
});

test("Codex treats all bridged Piclaw tools as external data for approval safety", () => {
  expect(isCodexExternalDataToolForTests("gmail_fetch_email")).toBe(true);
  expect(isCodexExternalDataToolForTests("m365_mail")).toBe(true);
  expect(isCodexExternalDataToolForTests("m365_spo_download")).toBe(true);
  expect(isCodexExternalDataToolForTests("office_read")).toBe(true);
  expect(isCodexExternalDataToolForTests("schedule_task")).toBe(true);
  expect(isCodexExternalDataToolForTests("anything_xyz")).toBe(true);
});
