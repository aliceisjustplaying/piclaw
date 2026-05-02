#!/usr/bin/env bun

import { runClaudeAgentSdkPrompt } from "../src/agent-pool/claude-agent-sdk-backend.js";

const output = await runClaudeAgentSdkPrompt(
  "Use the Piclaw search_messages tool to search this chat for claude, then reply with exactly: claude-agent-sdk-smoke-ok",
  "web:default",
  { timeoutMs: 120_000 },
);

if (output.status !== "success" || !String(output.result || "").includes("claude-agent-sdk-smoke-ok")) {
  throw new Error(`Claude Agent SDK smoke failed: ${JSON.stringify(output)}`);
}

console.log("claude-agent-sdk-smoke-ok");
