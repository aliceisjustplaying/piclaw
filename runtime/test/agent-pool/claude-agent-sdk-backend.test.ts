import { afterEach, expect, test } from "bun:test";

import {
  getClaudeAgentSdkContextUsage,
  getClaudeAgentSdkProviderUsage,
  hasClaudeAgentSdkSession,
  resetClaudeAgentSdkBackendForTests,
  runClaudeAgentSdkPrompt,
  setClaudeAgentSdkOAuthTokenResolverForTests,
  setClaudeAgentSdkQueryFactoryForTests,
} from "../../src/agent-pool/claude-agent-sdk-backend.js";

afterEach(() => {
  resetClaudeAgentSdkBackendForTests();
});

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
});

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
  const output = await runClaudeAgentSdkPrompt("hello", "web:test", { onEvent: (event) => events.push(event) });

  expect(output).toEqual({ status: "success", result: "hi there" });
  expect(hasClaudeAgentSdkSession("web:test")).toBe(true);
  expect(getClaudeAgentSdkContextUsage("web:test")).toEqual({ tokens: 21, contextWindow: 200000, percent: 0.0105 });
  expect(events.some((event: any) => event.type === "message_end" && event.message?.content?.[0]?.text === "hi there")).toBe(true);
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
