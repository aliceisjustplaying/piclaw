import { afterEach, expect, test } from "bun:test";

import { buildAgentChildEnv, scrubbedAgentEnvKeysForTests } from "../../src/agent-pool/child-env.js";

const oldEnv = { ...process.env };

afterEach(() => {
  for (const key of Object.keys(process.env)) delete process.env[key];
  Object.assign(process.env, oldEnv);
});

test("agent child env scrubs Piclaw internal secrets and opposite-provider credentials", () => {
  for (const key of scrubbedAgentEnvKeysForTests("codex")) process.env[key] = `secret-${key}`;
  process.env.OPENAI_API_KEY = "openai-key";

  const env = buildAgentChildEnv("codex");

  for (const key of scrubbedAgentEnvKeysForTests("codex")) expect(env[key]).toBeUndefined();
  expect(env.OPENAI_API_KEY).toBe("openai-key");
});

test("agent child env applies explicit extra values after scrubbing", () => {
  process.env.CLAUDE_CODE_OAUTH_TOKEN = "old-token";

  const env = buildAgentChildEnv("claude", { CLAUDE_CODE_OAUTH_TOKEN: "new-token" });

  expect(env.CLAUDE_CODE_OAUTH_TOKEN).toBe("new-token");
});
