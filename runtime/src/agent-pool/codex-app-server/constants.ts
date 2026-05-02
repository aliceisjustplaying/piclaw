import { parsePositiveNumber } from "../../utils/numbers.js";
import type { CodexThinkingLevel } from "./types.js";

export const THINKING_LEVELS: readonly CodexThinkingLevel[] = ["off", "minimal", "low", "medium", "high", "xhigh"];
export const DEFAULT_CODEX_THINKING_LEVEL: CodexThinkingLevel = "medium";
export const PROVIDER_USAGE_TTL_MS = parsePositiveNumber(process.env.PICLAW_PROVIDER_USAGE_TTL_MS, 60_000);
export const ATTACHMENT_TEXT_PREVIEW_TOTAL_CHARS = parsePositiveNumber(process.env.PICLAW_CODEX_ATTACHMENT_TEXT_PREVIEW_CHARS, 200_000);
export const TOKEN_USAGE_TRAILING_GRACE_MS = parsePositiveNumber(process.env.PICLAW_CODEX_TOKEN_USAGE_GRACE_MS, 250);

export const PICLAW_DYNAMIC_TOOLS = [
  {
    namespace: "piclaw",
    name: "search_messages",
    description: "Search this Piclaw chat timeline. Returns recent matching messages with row ids, timestamps, senders, text, and media ids.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        limit: { type: "number", minimum: 1, maximum: 20 },
        offset: { type: "number", minimum: 0 },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    namespace: "piclaw",
    name: "read_media",
    description: "Read metadata and text content for a Piclaw media attachment by media id. Binary/image files are saved to a local path and returned with metadata.",
    inputSchema: {
      type: "object",
      properties: {
        media_id: { type: "number" },
        max_chars: { type: "number", minimum: 1, maximum: 50000 },
      },
      required: ["media_id"],
      additionalProperties: false,
    },
  },
  {
    namespace: "piclaw",
    name: "context_usage",
    description: "Return the latest Codex app-server context token usage for this Piclaw chat.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
];

export const CODEX_BRIDGE_EXCLUDED_TOOLS = new Set([
  "read",
  "write",
  "edit",
  "bash",
  "powershell",
  "list_tools",
  "list_internal_tools",
  "activate_tools",
  "reset_active_tools",
  "get_model_state",
  "list_models",
  "switch_model",
  "switch_thinking",
  "mcp",
  "delegate_codex",
  "exit_process",
  "session_status",
  "smart_compact",
]);
