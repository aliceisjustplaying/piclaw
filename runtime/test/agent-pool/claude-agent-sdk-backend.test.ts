import { afterEach, expect, test } from "bun:test";

import {
  getClaudeAgentSdkContextUsage,
  hasClaudeAgentSdkSession,
  resetClaudeAgentSdkBackendForTests,
  runClaudeAgentSdkPrompt,
  setClaudeAgentSdkOAuthTokenResolverForTests,
  setClaudeAgentSdkQueryFactoryForTests,
} from "../../src/agent-pool/claude-agent-sdk-backend.js";

afterEach(() => {
  resetClaudeAgentSdkBackendForTests();
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
    expect(params.prompt).toBe("hello");
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
