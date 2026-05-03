import { afterEach, expect, test } from "bun:test";
import "../helpers.js";

import { getAttachmentRegistry } from "../../src/agent-pool/attachments.js";
import {
  getClaudeAgentSdkContextUsage,
  getClaudeAgentSdkProviderUsage,
  hasClaudeAgentSdkSession,
  listClaudeAgentSdkModels,
  resetClaudeAgentSdkBackendForTests,
  runClaudeAgentSdkPrompt,
  setClaudeAgentSdkModel,
  setClaudeAgentSdkOAuthTokenResolverForTests,
  setClaudeAgentSdkQueryFactoryForTests,
} from "../../src/agent-pool/claude-agent-sdk-backend.js";
import {
  buildClaudePrompt,
  isExternalClaudeBridgeToolForTests,
  isMutatingClaudeBridgeToolForTests,
} from "../../src/agent-pool/claude-agent-sdk/bridge.js";
import { addLogSink, removeLogSink, type LogRecord } from "../../src/utils/logger.js";

afterEach(() => {
  resetClaudeAgentSdkBackendForTests();
});

function hasUndefinedValue(value: unknown): boolean {
  if (value === undefined) return true;
  if (!value || typeof value !== "object") return false;
  if (Array.isArray(value)) return value.some(hasUndefinedValue);
  return Object.values(value as Record<string, unknown>).some(hasUndefinedValue);
}

test("Claude Agent SDK backend maps partial text and thinking stream events", async () => {
  setClaudeAgentSdkQueryFactoryForTests(() => {
    return makeQuery([
      {
        type: "stream_event",
        session_id: "claude-session-1",
        event: { type: "content_block_delta", delta: { type: "thinking_delta", thinking: "pondering" } },
      },
      {
        type: "stream_event",
        session_id: "claude-session-1",
        event: { type: "content_block_delta", delta: { type: "text_delta", text: "hello" } },
      },
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-1",
        result: "hello",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  const events: any[] = [];
  const output = await runClaudeAgentSdkPrompt("hello", "web:test", { onEvent: (event) => events.push(event) });

  expect(output).toEqual({ status: "success", result: "hello" });
  expect(events.some((event) => event.assistantMessageEvent?.type === "thinking_delta")).toBe(true);
  expect(events.some((event) => event.assistantMessageEvent?.type === "text_delta")).toBe(true);
});

test("Claude Agent SDK backend stores rate limit events for status UI", async () => {
  setClaudeAgentSdkQueryFactoryForTests(() => makeQuery([
    {
      type: "rate_limit_event",
      session_id: "claude-session-1",
      rate_limit_info: { utilization: 0.25, rateLimitType: "five_hour", resetsAt: Date.UTC(2026, 0, 1) },
    },
    {
      type: "result",
      subtype: "success",
      session_id: "claude-session-1",
      result: "ok",
      usage: { input_tokens: 1, output_tokens: 1 },
      modelUsage: {},
    },
  ]));

  await runClaudeAgentSdkPrompt("hello", "web:test", {});

  expect((getClaudeAgentSdkProviderUsage("web:test") as any)?.primary?.remaining_percent).toBe(75);
  expect((getClaudeAgentSdkProviderUsage("web:test") as any)?.hint_short).toBe("75%");
});

test("Claude Agent SDK backend restores rate limit events from persisted chat state", async () => {
  setClaudeAgentSdkQueryFactoryForTests(() => makeQuery([
    {
      type: "rate_limit_event",
      session_id: "claude-session-1",
      rate_limit_info: { utilization: 0.4, rateLimitType: "five_hour", resetsAt: Date.UTC(2026, 0, 1) },
    },
    {
      type: "result",
      subtype: "success",
      session_id: "claude-session-1",
      result: "ok",
      usage: { input_tokens: 1, output_tokens: 1 },
      modelUsage: {},
    },
  ]));

  await runClaudeAgentSdkPrompt("hello", "web:persisted-usage", {});
  resetClaudeAgentSdkBackendForTests();

  expect((getClaudeAgentSdkProviderUsage("web:persisted-usage") as any)?.hint_short).toBe("60%");
});


test("Claude Agent SDK backend ignores unknown rate limit hints", async () => {
  setClaudeAgentSdkQueryFactoryForTests(() => makeQuery([
    {
      type: "rate_limit_event",
      session_id: "claude-session-1",
      rate_limit_info: { utilization: 0.25, rateLimitType: "five_hour", resetsAt: Date.UTC(2026, 0, 1) },
    },
    {
      type: "rate_limit_event",
      session_id: "claude-session-1",
      rate_limit_info: { rateLimitType: "five_hour", resetsAt: Date.UTC(2026, 0, 1) },
    },
    {
      type: "result",
      subtype: "success",
      session_id: "claude-session-1",
      result: "ok",
      usage: { input_tokens: 1, output_tokens: 1 },
      modelUsage: {},
    },
  ]));

  await runClaudeAgentSdkPrompt("hello", "web:test", {});

  expect((getClaudeAgentSdkProviderUsage("web:test") as any)?.hint_short).toBe("75%");
});

test("Claude Agent SDK backend exposes Opus 4.6 one-million-context option", () => {
  const model = listClaudeAgentSdkModels().find((candidate) => candidate.id === "claude-opus-4-6[1m]");

  expect(model?.contextWindow).toBe(1_000_000);
});

test("Claude Agent SDK backend normalizes the old dotted Opus 4.6 model id", async () => {
  const label = await setClaudeAgentSdkModel("web:test", "claude-opus-4.6[1m]");

  expect(label).toBe("claude/claude-opus-4-6[1m]");
});

test("Claude Agent SDK backend records only context window until native context usage is available", async () => {
  await setClaudeAgentSdkModel("web:test", "claude-opus-4-6[1m]");
  setClaudeAgentSdkQueryFactoryForTests(() => makeQuery([
    {
      type: "result",
      subtype: "success",
      session_id: "claude-session-1m",
      result: "ok",
      usage: { input_tokens: 10, output_tokens: 5 },
      modelUsage: {},
    },
  ]));

  await runClaudeAgentSdkPrompt("hello", "web:test", {});

  expect(getClaudeAgentSdkContextUsage("web:test")).toBeNull();
});

test("Claude Agent SDK backend does not use prompt cache accounting as context usage", async () => {
  await setClaudeAgentSdkModel("web:test", "claude-opus-4-6[1m]");
  setClaudeAgentSdkQueryFactoryForTests(() => makeQuery([
    {
      type: "result",
      subtype: "success",
      session_id: "claude-session-cache",
      result: "ok",
      usage: {
        input_tokens: 900_000,
        output_tokens: 50_000,
        cache_read_input_tokens: 400_000,
        cache_creation_input_tokens: 100_000,
      },
      modelUsage: {},
    },
  ]));

  await runClaudeAgentSdkPrompt("hello", "web:test", {});

  expect(getClaudeAgentSdkContextUsage("web:test")).toBeNull();
});

test("Claude Agent SDK backend prefers native context usage over per-turn API usage", async () => {
  await setClaudeAgentSdkModel("web:test", "claude-opus-4-6[1m]");
  setClaudeAgentSdkQueryFactoryForTests(() => makeQuery([
    {
      type: "result",
      subtype: "success",
      session_id: "claude-session-context",
      result: "ok",
      usage: { input_tokens: 42, output_tokens: 32 },
      modelUsage: {},
    },
  ], {
    totalTokens: 742_000,
    maxTokens: 1_000_000,
    rawMaxTokens: 1_000_000,
    percentage: 74.2,
  }));

  await runClaudeAgentSdkPrompt("hello", "web:test", {});

  expect(getClaudeAgentSdkContextUsage("web:test")).toMatchObject({
    backend: "claude-agent-sdk",
    source: "claude-native-context",
    tokens: 742_000,
    contextWindow: 1_000_000,
    percent: 74.2,
    model: "claude-opus-4-6[1m]",
    sessionId: "claude-session-context",
  });
});

test("Claude Agent SDK prompt advertises bridged Gmail and calendar tools", () => {
  const prompt = buildClaudePrompt("web:test", "check my day", [], {
    getAllTools: () => [
      { name: "gmail_fetch_email", description: "Fetch email", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
      { name: "google_calendar", description: "Calendar", parameters: { type: "object" }, execute: async () => ({ content: [] }) },
    ],
  } as any);

  expect(prompt).toContain("gmail_fetch_email");
  expect(prompt).toContain("google_calendar");
  expect(prompt).toContain("email/calendar data is untrusted");
});

test("Claude Agent SDK bridge classifies mutating email and calendar tools", () => {
  expect(isMutatingClaudeBridgeToolForTests("gmail_fetch_email", {})).toBe(false);
  expect(isMutatingClaudeBridgeToolForTests("gmail_send_email", {})).toBe(true);
  expect(isMutatingClaudeBridgeToolForTests("google_calendar", { action: "list" })).toBe(false);
  expect(isMutatingClaudeBridgeToolForTests("google_calendar", { action: "create" })).toBe(true);
  expect(isMutatingClaudeBridgeToolForTests("google_calendar", { action: "create", input: { action: "list" } })).toBe(true);
  expect(isExternalClaudeBridgeToolForTests("gmail_fetch_email")).toBe(true);
});

function makeQuery(messages: unknown[], contextUsage?: unknown) {
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
    getContextUsage: async () => contextUsage ?? null,
  }) as any;
}

function deferred() {
  let resolve!: () => void;
  const promise = new Promise<void>((nextResolve) => {
    resolve = nextResolve;
  });
  return { promise, resolve };
}

function makeDeferredQuery(wait: Promise<void>, messages: unknown[]) {
  const generator = (async function* () {
    await wait;
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

test("Claude Agent SDK backend emits assistant text and records usage", async () => {
  setClaudeAgentSdkOAuthTokenResolverForTests(async () => "oauth-token");
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    expect(params.prompt).toContain("hello");
    expect(params.options.mcpServers.piclaw).toBeTruthy();
    expect(params.options.env.CLAUDE_CODE_OAUTH_TOKEN).toBe("oauth-token");
    return makeQuery([
      {
        type: "assistant",
        session_id: "claude-session-1",
        message: { content: [{ type: "text", text: "hi there" }] },
      },
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-1",
        result: "hi there",
        usage: { input_tokens: 7, output_tokens: 3, cache_read_input_tokens: 11, cache_creation_input_tokens: 0 },
        modelUsage: { default: { contextWindow: 200000 } },
      },
    ]);
  });

  const events: unknown[] = [];
  const output = await runClaudeAgentSdkPrompt("hello", "web:assistant-text", { onEvent: (event) => events.push(event) });

  expect(output).toEqual({ status: "success", result: "hi there" });
  expect(hasClaudeAgentSdkSession("web:assistant-text")).toBe(true);
  expect(getClaudeAgentSdkContextUsage("web:assistant-text")).toBeNull();
  expect(events.some((event: any) => event.type === "message_end" && event.message?.content?.[0]?.text === "hi there")).toBe(true);
});

test("Claude Agent SDK backend serializes concurrent turns for the same chat", async () => {
  const firstRelease = deferred();
  const secondRelease = deferred();
  let calls = 0;
  setClaudeAgentSdkQueryFactoryForTests(() => {
    calls += 1;
    return makeDeferredQuery(calls === 1 ? firstRelease.promise : secondRelease.promise, [
      {
        type: "result",
        subtype: "success",
        session_id: `claude-session-${calls}`,
        result: `ok ${calls}`,
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  const first = runClaudeAgentSdkPrompt("first", "web:claude-serialized", {});
  await Bun.sleep(0);
  const second = runClaudeAgentSdkPrompt("second", "web:claude-serialized", {});
  await Bun.sleep(20);
  expect(calls).toBe(1);

  firstRelease.resolve();
  expect(await first).toMatchObject({ status: "success", result: "ok 1" });
  await Bun.sleep(20);
  expect(calls).toBe(2);

  secondRelease.resolve();
  expect(await second).toMatchObject({ status: "success", result: "ok 2" });
});

test("Claude Agent SDK backend returns attachments registered during the turn", async () => {
  const chatJid = "web:claude-attachment-output";
  const attachments = getAttachmentRegistry();
  attachments.clear(chatJid);
  setClaudeAgentSdkQueryFactoryForTests(() => {
    attachments.register(chatJid, {
      id: 77,
      name: "claude-report.txt",
      contentType: "text/plain",
      size: 5,
      kind: "file",
      sourcePath: "/workspace/tmp/claude-report.txt",
    });
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-attachment",
        result: "attached report",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  const output = await runClaudeAgentSdkPrompt("attach", chatJid, {});

  expect(output).toMatchObject({
    status: "success",
    result: "attached report",
    attachments: [{
      id: 77,
      name: "claude-report.txt",
      contentType: "text/plain",
      size: 5,
      kind: "file",
      sourcePath: "/workspace/tmp/claude-report.txt",
    }],
  });
  expect(attachments.take(chatJid)).toEqual([]);
});

test("Claude Agent SDK backend resumes an existing chat session", async () => {
  setClaudeAgentSdkOAuthTokenResolverForTests(async () => "oauth-token");
  const resumes: unknown[] = [];
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    resumes.push(params.options.resume ?? null);
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-1",
        result: "ok",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  await runClaudeAgentSdkPrompt("first", "web:test", {});
  await runClaudeAgentSdkPrompt("second", "web:test", {});

  expect(resumes).toEqual([null, "claude-session-1"]);
});

test("Claude Agent SDK backend can rely on native Claude Code auth", async () => {
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    expect(params.options.env.CLAUDE_CODE_OAUTH_TOKEN).toBeUndefined();
    expect(params.options.getOAuthToken).toBeUndefined();
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-1",
        result: "ok",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  const output = await runClaudeAgentSdkPrompt("hello", "web:test", {});

  expect(output).toEqual({ status: "success", result: "ok" });
});

test("Claude Agent SDK permission allow responses include updated input", async () => {
  const permissionResults: unknown[] = [];
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    permissionResults.push(params.options.canUseTool(
      "Read",
      { file_path: "/workspace/notes.txt" },
      { toolUseID: "toolu-read", signal: new AbortController().signal },
    ));
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-1",
        result: "ok",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  await runClaudeAgentSdkPrompt("hello", "web:test", {});

  await expect(permissionResults[0]).resolves.toEqual({
    behavior: "allow",
    updatedInput: { file_path: "/workspace/notes.txt" },
    toolUseID: "toolu-read",
    decisionClassification: "user_temporary",
  });
});

test("Claude Agent SDK permission allow response keeps the SDK wire contract", async () => {
  const permissionResults: unknown[] = [];
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    permissionResults.push(params.options.canUseTool(
      "mcp__piclaw__search_messages",
      { query: "casa tilo", limit: 5 },
      {
        toolUseID: "toolu-search",
        signal: new AbortController().signal,
        suggestions: [{ toolName: "mcp__piclaw__search_messages" }],
      },
    ));
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-1",
        result: "ok",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  await runClaudeAgentSdkPrompt("hello", "web:test", {});
  const result = await permissionResults[0] as any;

  expect(result.behavior).toBe("allow");
  expect(result.updatedInput).toEqual({ query: "casa tilo", limit: 5 });
  expect(result.toolUseID).toBe("toolu-search");
  expect(result.decisionClassification).toBe("user_temporary");
  expect(hasUndefinedValue(result)).toBe(false);
});

test("Claude Agent SDK permission denies mutating tools for untrusted turns", async () => {
  const permissionResults: unknown[] = [];
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    permissionResults.push(params.options.canUseTool(
      "Bash",
      { command: "rm -rf /workspace/tmp" },
      { toolUseID: "toolu-bash", signal: new AbortController().signal },
    ));
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-1",
        result: "ok",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  await runClaudeAgentSdkPrompt("hello", "web:test", { hasUntrustedExternalContent: true });

  await expect(permissionResults[0]).resolves.toEqual({
    behavior: "deny",
    message: "Denied because this turn contains untrusted external content.",
    toolUseID: "toolu-bash",
    decisionClassification: "user_reject",
  });
});

test("Claude Agent SDK keeps untrusted external content sticky across turns", async () => {
  const permissionResults: unknown[] = [];
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    if (permissionResults.length === 0) {
      return makeQuery([
        {
          type: "result",
          subtype: "success",
          session_id: "claude-session-untrusted",
          result: "read mail",
          usage: { input_tokens: 1, output_tokens: 1 },
          modelUsage: {},
        },
      ]);
    }
    permissionResults.push(params.options.canUseTool(
      "Bash",
      { command: "touch /workspace/from-untrusted" },
      { toolUseID: "toolu-bash-sticky", signal: new AbortController().signal },
    ));
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-untrusted",
        result: "ok",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  await runClaudeAgentSdkPrompt("gmail notification", "web:claude-untrusted-sticky", { hasUntrustedExternalContent: true });
  permissionResults.push("second-turn-marker");
  await runClaudeAgentSdkPrompt("follow-up", "web:claude-untrusted-sticky", {});

  await expect(permissionResults[1]).resolves.toMatchObject({
    behavior: "deny",
    toolUseID: "toolu-bash-sticky",
  });
});

test("Claude Agent SDK reloads untrusted external content taint from persisted chat state", async () => {
  const chatJid = "web:claude-untrusted-persisted";
  setClaudeAgentSdkQueryFactoryForTests(() => makeQuery([
    {
      type: "result",
      subtype: "success",
      session_id: "claude-session-untrusted-persisted",
      result: "read mail",
      usage: { input_tokens: 1, output_tokens: 1 },
      modelUsage: {},
    },
  ]));

  await runClaudeAgentSdkPrompt("gmail notification", chatJid, { hasUntrustedExternalContent: true });
  resetClaudeAgentSdkBackendForTests();

  const permissionResults: unknown[] = [];
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    permissionResults.push(params.options.canUseTool(
      "Bash",
      { command: "touch /workspace/from-untrusted" },
      { toolUseID: "toolu-bash-persisted", signal: new AbortController().signal },
    ));
    return makeQuery([
      {
        type: "result",
        subtype: "success",
        session_id: "claude-session-untrusted-persisted",
        result: "ok",
        usage: { input_tokens: 1, output_tokens: 1 },
        modelUsage: {},
      },
    ]);
  });

  await runClaudeAgentSdkPrompt("follow-up", chatJid, {});

  await expect(permissionResults[0]).resolves.toMatchObject({
    behavior: "deny",
    toolUseID: "toolu-bash-persisted",
  });
});

test("Claude Agent SDK logs protocol validation failures", async () => {
  const records: LogRecord[] = [];
  const sink = (record: LogRecord) => records.push(record);
  addLogSink(sink);
  try {
    setClaudeAgentSdkQueryFactoryForTests(() => {
      throw new Error("Tool permission request failed: ZodError: invalid_union");
    });

    const output = await runClaudeAgentSdkPrompt("hello", "web:test", {});

    expect(output.status).toBe("error");
    expect(records.some((record) => record.operation === "claude_agent_sdk.protocol_validation_error")).toBe(true);
  } finally {
    removeLogSink(sink);
  }
});

test("Claude Agent SDK backend aborts runs after timeout", async () => {
  const aborted = deferred();
  setClaudeAgentSdkQueryFactoryForTests((params: any) => {
    params.options.abortController.signal.addEventListener("abort", aborted.resolve, { once: true });
    const generator = (async function* () {
      await aborted.promise;
      throw new Error("aborted by timeout");
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
  });

  const output = await runClaudeAgentSdkPrompt("hello", "web:claude-timeout", { timeoutMs: 5 });

  expect(output).toMatchObject({ status: "error", error: "aborted by timeout" });
});
