import { createSdkMcpServer, tool } from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod";

import { WORKSPACE_DIR } from "../../core/config.js";
import {
  bridgeResultToText,
  bridgeToolDescription,
  bridgeToolName,
  buildBridgeAttachmentNotes,
  buildPiclawBridgeToolPrefix,
  builtInPiclawToolNames,
  executePiclawBuiltinTool,
  getPiclawBridgeTools,
  isExternalPiclawBridgeTool,
  isMutatingPiclawBridgeTool,
  PICLAW_BRIDGE_BUILTIN_TOOLS,
  type PiclawBridgeSession,
} from "../piclaw-bridge-builtins.js";
import { createLogger } from "../../utils/logger.js";

const GENERIC_TOOL_SHAPE = { input: z.record(z.string(), z.unknown()).optional() };
const log = createLogger("agent-pool.claude-agent-sdk.bridge");

export type ClaudeBridgeTrustState = {
  hasUntrustedExternalContent: boolean;
};

function bridgeContext(chatJid: string): Record<string, unknown> {
  return {
    hasUI: false,
    cwd: WORKSPACE_DIR,
    chatJid,
    ui: {
      notify: () => undefined,
      setStatus: () => undefined,
      setWorkingIndicator: () => undefined,
      setWorkingMessage: () => undefined,
    },
  };
}

function mcpText(value: unknown, isError = false): { content: Array<{ type: "text"; text: string }>; isError?: boolean } {
  const text = typeof value === "string" ? value : JSON.stringify(value, null, 2) ?? String(value);
  return { content: [{ type: "text", text }], ...(isError ? { isError: true } : {}) };
}

function zodForJsonSchema(schema: unknown): z.ZodType {
  const record = schema && typeof schema === "object" ? schema as Record<string, unknown> : {};
  const type = record.type;
  if (type === "string") return z.string();
  if (type === "number" || type === "integer") return z.number();
  if (type === "boolean") return z.boolean();
  if (type === "array") return z.array(z.unknown());
  if (Array.isArray(record.enum) && record.enum.every((value) => typeof value === "string") && record.enum.length > 0) {
    return z.enum(record.enum as [string, ...string[]]);
  }
  return z.unknown();
}

function toolShapeFromJsonSchema(schema: unknown): Record<string, z.ZodType> {
  const record = schema && typeof schema === "object" ? schema as Record<string, unknown> : null;
  const properties = record?.properties && typeof record.properties === "object" ? record.properties as Record<string, unknown> : null;
  if (!properties) return GENERIC_TOOL_SHAPE;
  if (Object.keys(properties).length === 0 && record?.additionalProperties === false) return {};
  const required = new Set(Array.isArray(record?.required) ? record.required.filter((value): value is string => typeof value === "string") : []);
  const shape: Record<string, z.ZodType> = {};
  for (const [key, value] of Object.entries(properties)) {
    const zod = zodForJsonSchema(value);
    shape[key] = required.has(key) ? zod : zod.optional();
  }
  return Object.keys(shape).length > 0 ? shape : GENERIC_TOOL_SHAPE;
}

export function createPiclawMcpServer(
  chatJid: string,
  bridgeSession: PiclawBridgeSession | null | undefined,
  getContextUsage: () => unknown,
  trustState: ClaudeBridgeTrustState = { hasUntrustedExternalContent: false },
  toolFilter?: (toolName: string) => boolean,
) {
  const tools = [];
  for (const builtin of PICLAW_BRIDGE_BUILTIN_TOOLS) {
    const name = String(builtin.name || "");
    if (!name || (toolFilter && !toolFilter(name))) continue;
    tools.push(tool(name, builtin.description, toolShapeFromJsonSchema(builtin.inputSchema), async (args) => {
      const result = executePiclawBuiltinTool(chatJid, name, args, getContextUsage);
      return mcpText(result.value, result.isError);
    }));
  }

  for (const bridgeTool of getPiclawBridgeTools(bridgeSession, toolFilter)) {
    const name = bridgeToolName(bridgeTool);
    const description = bridgeToolDescription(bridgeTool);
    tools.push(tool(name, description, toolShapeFromJsonSchema(bridgeTool.parameters), async (args, extra) => {
      try {
        const signal = (extra as { signal?: AbortSignal } | undefined)?.signal;
        const toolArgs = "input" in args && args.input && typeof args.input === "object" ? args.input : args;
        if (trustState.hasUntrustedExternalContent && (isMutatingPiclawBridgeTool(name, args) || isMutatingPiclawBridgeTool(name, toolArgs))) {
          log.warn("Denied mutating Piclaw MCP tool after untrusted external content", {
            operation: "claude_agent_sdk.bridge_tool_denied_untrusted",
            tool: name,
          });
          return mcpText("Denied because this session has untrusted external content.", true);
        }
        const result = await (bridgeTool.execute as Function)(`claude-bridge-${Date.now().toString(36)}`, toolArgs, signal, () => undefined, bridgeContext(chatJid));
        if (isExternalPiclawBridgeTool(name)) trustState.hasUntrustedExternalContent = true;
        const text = bridgeResultToText(result);
        if (!text.trim()) {
          log.debug("Piclaw MCP bridge tool returned empty output", {
            operation: "claude_agent_sdk.bridge_tool_empty_result",
            tool: name,
            chatJid,
          });
        }
        return mcpText(text);
      } catch (error) {
        log.warn("Piclaw MCP bridge tool failed", {
          operation: "claude_agent_sdk.bridge_tool_failed",
          tool: name,
          chatJid,
          err: error,
        });
        return mcpText(`${name} failed: ${error instanceof Error ? error.message : String(error)}`, true);
      }
    }));
  }

  return createSdkMcpServer({ name: "piclaw", version: "0.1.0", tools, alwaysLoad: true });
}

export function isMutatingClaudeBridgeToolForTests(name: string, input: unknown): boolean {
  return isMutatingPiclawBridgeTool(name, input);
}

export function isExternalClaudeBridgeToolForTests(name: string): boolean {
  return isExternalPiclawBridgeTool(name);
}

export function buildClaudePrompt(chatJid: string, prompt: string, mediaIds: number[] | undefined, bridgeSession?: PiclawBridgeSession | null, toolFilter?: (toolName: string) => boolean): string {
  const attachmentNotes = buildBridgeAttachmentNotes(chatJid, mediaIds);
  const toolNames = [...builtInPiclawToolNames(), ...getPiclawBridgeTools(bridgeSession, toolFilter).map(bridgeToolName)]
    .filter(Boolean)
    .filter((name) => !toolFilter || toolFilter(name));
  const toolPrefix = buildPiclawBridgeToolPrefix("MCP", toolNames);
  const attachmentText = attachmentNotes.length > 0 ? `\n\nAttached files:\n${attachmentNotes.join("\n")}` : "";
  return `${toolPrefix}${prompt}${attachmentText}`;
}
