import { getAgentBackendConfig, WORKSPACE_DIR } from "../../core/config.js";
import type { JsonObject } from "./types.js";

export function splitCommand(value: string): string[] {
  const parts: string[] = [];
  const pattern = /"([^"]*)"|'([^']*)'|[^\s]+/g;
  for (const match of value.matchAll(pattern)) {
    parts.push(match[1] ?? match[2] ?? match[0]);
  }
  return parts;
}

export function appServerCommand(): { command: string; args: string[] } {
  const configured = getAgentBackendConfig().codexAppServerCommand || "codex";
  const parts = splitCommand(configured);
  const [command = "codex", ...args] = parts;
  return { command, args: [...args, "app-server", "--listen", "stdio://"] };
}

export function workspaceCwd(): string {
  return process.env.PICLAW_WORKSPACE || WORKSPACE_DIR;
}

export function asError(value: unknown): Error {
  if (value instanceof Error) return value;
  if (typeof value === "object" && value && "message" in value) {
    return new Error(String((value as { message?: unknown }).message));
  }
  return new Error(String(value));
}

export function readString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

export function parseArgs(value: unknown): JsonObject {
  if (value && typeof value === "object" && !Array.isArray(value)) return value as JsonObject;
  return {};
}

export function contentItemsFrom(value: unknown, success = true): { contentItems: Array<{ type: "inputText"; text: string }>; success: boolean } {
  const text = typeof value === "string" ? value : JSON.stringify(value, null, 2) ?? String(value);
  return { contentItems: [{ type: "inputText", text }], success };
}
