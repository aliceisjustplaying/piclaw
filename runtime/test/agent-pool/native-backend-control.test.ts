import { afterEach, beforeEach, expect, test } from "bun:test";
import "../helpers.js";

import { applyNativeBackendControlCommand } from "../../src/agent-pool/native-backend-control.js";
import { getChatAgentBackend, setChatAgentBackend } from "../../src/agent-pool/backend-state.js";
import { resetAgentChatRunLocksForTests, withAgentChatRunLock } from "../../src/agent-pool/chat-run-lock.js";
import {
  getCodexAppServerModelLabel,
  setCodexAppServerClientFactoryForTests,
  stopCodexAppServerBackend,
} from "../../src/agent-pool/codex-app-server-backend.js";
import {
  setActiveTurnForChat,
  setThreadForChat,
} from "../../src/agent-pool/codex-app-server/state.js";
import { initDatabase } from "../../src/db.js";
import { closeDbQuietly } from "../helpers.js";

let dbModule: typeof import("../../src/db.js") | null = null;

beforeEach(async () => {
  dbModule = await import("../../src/db.js");
  initDatabase();
  resetAgentChatRunLocksForTests();
});

afterEach(() => {
  stopCodexAppServerBackend();
  resetAgentChatRunLocksForTests();
  closeDbQuietly(dbModule);
  dbModule = null;
});

function deferred() {
  let resolve!: () => void;
  const promise = new Promise<void>((nextResolve) => {
    resolve = nextResolve;
  });
  return { promise, resolve };
}

function deps(overrides: Partial<Parameters<typeof applyNativeBackendControlCommand>[2]> = {}) {
  return {
    getContextUsageForChat: async () => null,
    abortPiTurnForSwitch: async () => {},
    captureBackendHandoff: async () => false,
    ...overrides,
  };
}

function codexClient(overrides: Record<string, unknown> = {}) {
  return {
    ready: async () => {},
    request: async (method: string) => method === "model/list"
      ? { models: [{ id: "gpt-ok", name: "GPT OK" }] }
      : method === "thread/start"
        ? { thread: { id: "thread-1" } }
        : method === "turn/start"
          ? { turn: { id: "turn-1" } }
          : {},
    onNotification: () => () => undefined,
    stop: () => {},
    ...overrides,
  } as any;
}

test("backend switch commands serialize per chat", async () => {
  const chatJid = "web:native-backend-serialize";
  setChatAgentBackend(chatJid, "pi");
  const firstCapture = deferred();
  const captures: string[] = [];

  const controlDeps = deps({
    captureBackendHandoff: async (_chatJid, from, to) => {
      captures.push(`${from}->${to}`);
      if (captures.length === 1) await firstCapture.promise;
      return true;
    },
  });

  const first = applyNativeBackendControlCommand(chatJid, { type: "backend", backend: "claude", raw: "/backend claude" }, controlDeps);
  const second = applyNativeBackendControlCommand(chatJid, { type: "backend", backend: "codex", raw: "/backend codex" }, controlDeps);
  await Bun.sleep(10);

  expect(captures).toEqual(["pi->claude-agent-sdk"]);
  firstCapture.resolve();
  await expect(first).resolves.toMatchObject({ status: "success" });
  await expect(second).resolves.toMatchObject({ status: "success" });
  expect(captures).toEqual(["pi->claude-agent-sdk", "claude-agent-sdk->codex-app-server"]);
  expect(getChatAgentBackend(chatJid)).toBe("codex-app-server");
});

test("backend switch handoff can use the agent run lock without deadlocking", async () => {
  const chatJid = "web:native-backend-handoff-lock";
  setChatAgentBackend(chatJid, "pi");
  let captured = false;

  const result = await Promise.race([
    applyNativeBackendControlCommand(
      chatJid,
      { type: "backend", backend: "claude", raw: "/backend claude" },
      deps({
        captureBackendHandoff: async () => {
          await withAgentChatRunLock(chatJid, async () => {
            captured = true;
          });
          return true;
        },
      }),
    ),
    Bun.sleep(250).then(() => ({ status: "error" as const, message: "deadlocked" })),
  ]);

  expect(result).toMatchObject({ status: "success" });
  expect(captured).toBe(true);
  expect(getChatAgentBackend(chatJid)).toBe("claude-agent-sdk");
});

test("provider model switch handoff can use the agent run lock without deadlocking", async () => {
  const chatJid = "web:native-model-handoff-lock";
  setChatAgentBackend(chatJid, "pi");
  setCodexAppServerClientFactoryForTests(() => codexClient());
  let captured = false;

  const result = await Promise.race([
    applyNativeBackendControlCommand(
      chatJid,
      { type: "model", provider: "codex", modelId: "gpt-ok", raw: "/model codex/gpt-ok" },
      deps({
        captureBackendHandoff: async () => {
          await withAgentChatRunLock(chatJid, async () => {
            captured = true;
          });
          return true;
        },
      }),
    ),
    Bun.sleep(250).then(() => ({ status: "error" as const, message: "deadlocked" })),
  ]);

  expect(result).toMatchObject({ status: "success" });
  expect(captured).toBe(true);
  expect(getChatAgentBackend(chatJid)).toBe("codex-app-server");
  expect(getCodexAppServerModelLabel(chatJid)).toBe("codex/gpt-ok");
});

test("provider model switch leaves backend unchanged when model validation fails", async () => {
  const chatJid = "web:native-backend-model-rollback";
  setChatAgentBackend(chatJid, "pi");
  setCodexAppServerClientFactoryForTests(() => codexClient());
  let abortCalls = 0;
  let captureCalls = 0;

  const result = await applyNativeBackendControlCommand(
    chatJid,
    { type: "model", provider: "codex", modelId: "gpt-missing", raw: "/model codex/gpt-missing" },
    deps({
      abortPiTurnForSwitch: async () => {
        abortCalls += 1;
      },
      captureBackendHandoff: async () => {
        captureCalls += 1;
        return true;
      },
    }),
  );

  expect(result?.status).toBe("error");
  expect(String(result?.message)).toContain("Model not found");
  expect(getChatAgentBackend(chatJid)).toBe("pi");
  expect(abortCalls).toBe(0);
  expect(captureCalls).toBe(0);
});

test("provider model switch does not leak model state when abort fails", async () => {
  const chatJid = "web:native-backend-model-abort-fail";
  setChatAgentBackend(chatJid, "pi");
  setCodexAppServerClientFactoryForTests(() => codexClient());

  const result = await applyNativeBackendControlCommand(
    chatJid,
    { type: "model", provider: "codex", modelId: "gpt-ok", raw: "/model codex/gpt-ok" },
    deps({
      abortPiTurnForSwitch: async () => {
        throw new Error("abort failed");
      },
    }),
  );

  expect(result).toMatchObject({ status: "error", message: "abort failed" });
  expect(getChatAgentBackend(chatJid)).toBe("pi");
  expect(getCodexAppServerModelLabel(chatJid)).toBe("codex/default");
});

test("backend command tolerates native abort failure and still switches", async () => {
  const chatJid = "web:native-backend-abort-tolerated";
  setCodexAppServerClientFactoryForTests(() => codexClient({
    ready: async () => {
      throw new Error("native abort unavailable");
    },
  }));

  setChatAgentBackend(chatJid, "codex");

  const result = await applyNativeBackendControlCommand(
    chatJid,
    { type: "backend", backend: "pi", raw: "/backend pi" },
    deps(),
  );

  expect(result).toMatchObject({ status: "success" });
  expect(getChatAgentBackend(chatJid)).toBe("pi");
});

test("provider model switch keeps state unchanged when native abort fails", async () => {
  const chatJid = "web:native-model-native-abort-fail";
  setCodexAppServerClientFactoryForTests(() => codexClient({
    ready: async () => {
      throw new Error("native abort unavailable");
    },
  }));
  setChatAgentBackend(chatJid, "codex");
  setThreadForChat(chatJid, { threadId: "thread-1", dynamicToolSignature: "test" });
  setActiveTurnForChat(chatJid, { threadId: "thread-1", turnId: "turn-1" });

  const result = await applyNativeBackendControlCommand(
    chatJid,
    { type: "model", provider: "claude", modelId: "sonnet", raw: "/model claude/sonnet" },
    deps(),
  );

  expect(result).toMatchObject({ status: "error", message: "native abort unavailable" });
  expect(getChatAgentBackend(chatJid)).toBe("codex-app-server");
});
