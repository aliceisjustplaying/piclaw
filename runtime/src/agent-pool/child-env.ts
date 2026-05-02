const INTERNAL_SECRET_ENV_KEYS = new Set([
  "PICLAW_KEYCHAIN_KEY",
  "PICLAW_KEYCHAIN_KEY_FILE",
  "PICLAW_WEB_TOTP_SECRET",
  "PICLAW_TOTP_SECRET",
  "PICLAW_INTERNAL_SECRET",
  "PICLAW_WEB_INTERNAL_SECRET",
  "WEB_INTERNAL_SECRET",
]);

const PROVIDER_SECRET_ENV_KEYS: Record<"codex" | "claude", string[]> = {
  codex: [
    "ANTHROPIC_API_KEY",
    "CLAUDE_CODE_OAUTH_TOKEN",
    "PICLAW_CLAUDE_AGENT_SDK_OAUTH_TOKEN",
  ],
  claude: [
    "OPENAI_API_KEY",
    "OPENAI_API_BASE",
    "OPENAI_BASE_URL",
    "PICLAW_CODEX_APP_SERVER_COMMAND",
    "PICLAW_CODEX_APP_SERVER_MODEL",
  ],
};

export function buildAgentChildEnv(
  provider: "codex" | "claude",
  extra: Record<string, string | undefined> = {},
): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = { ...process.env };
  for (const key of INTERNAL_SECRET_ENV_KEYS) delete env[key];
  for (const key of PROVIDER_SECRET_ENV_KEYS[provider]) delete env[key];
  for (const [key, value] of Object.entries(extra)) {
    if (value === undefined) delete env[key];
    else env[key] = value;
  }
  return env;
}

export function scrubbedAgentEnvKeysForTests(provider: "codex" | "claude"): string[] {
  return [
    ...INTERNAL_SECRET_ENV_KEYS,
    ...PROVIDER_SECRET_ENV_KEYS[provider],
  ].sort();
}
