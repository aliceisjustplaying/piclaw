import { parsePositiveNumber } from "../../utils/numbers.js";
import type { CodexThinkingLevel } from "./types.js";

export const THINKING_LEVELS: readonly CodexThinkingLevel[] = ["off", "minimal", "low", "medium", "high", "xhigh"];
export const DEFAULT_CODEX_THINKING_LEVEL: CodexThinkingLevel = "medium";
export const PROVIDER_USAGE_TTL_MS = parsePositiveNumber(process.env.PICLAW_PROVIDER_USAGE_TTL_MS, 60_000);
export const TOKEN_USAGE_TRAILING_GRACE_MS = parsePositiveNumber(process.env.PICLAW_CODEX_TOKEN_USAGE_GRACE_MS, 250);
