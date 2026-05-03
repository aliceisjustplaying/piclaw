import {
  getBridgeSessionForThread,
  getChatForThread,
  getContextUsageForChat,
  getToolAbortControllerForThread,
} from "./state.js";
import type { JsonObject } from "./types.js";
import { contentItemsFrom, parseArgs, readString, workspaceCwd } from "./utils.js";
import { markThreadUntrusted } from "./notifications.js";
import { log } from "./telemetry.js";
import {
  bridgeResultToText,
  bridgeToolDescription,
  bridgeToolName,
  buildPiclawBridgeToolPrefix,
  buildBridgeAttachmentNotesFromMaterialized,
  executePiclawBuiltinTool,
  getPiclawBridgeTools,
  isExternalPiclawBridgeTool,
  isPiclawBridgeToolAllowed,
  materializeBridgeMediaList,
  PICLAW_BRIDGE_ATTACHMENT_TEXT_PREVIEW_TOTAL_CHARS,
  PICLAW_BRIDGE_BUILTIN_TOOLS,
  type PiclawBridgeSession,
  type PiclawBridgeTool,
} from "../piclaw-bridge-builtins.js";

export function isCodexBridgeToolAllowed(name: string): boolean {
  return isPiclawBridgeToolAllowed(name);
}

export function dynamicToolSchemaFromPiclawTool(tool: PiclawBridgeTool): JsonObject {
  const name = bridgeToolName(tool);
  const description = bridgeToolDescription(tool);
  const inputSchema = tool.parameters && typeof tool.parameters === "object"
    ? tool.parameters as JsonObject
    : { type: "object", properties: {}, additionalProperties: true };
  return { namespace: "piclaw_tool", name, description, inputSchema };
}

export function listCodexBridgeDynamicToolsForTests(session: PiclawBridgeSession | null | undefined): JsonObject[] {
  return getPiclawBridgeTools(session).map(dynamicToolSchemaFromPiclawTool);
}

export function dynamicToolsConfig(session?: PiclawBridgeSession | null, toolFilter?: (toolName: string) => boolean): JsonObject {
  const builtins = PICLAW_BRIDGE_BUILTIN_TOOLS.filter((tool) => {
    const name = typeof tool.name === "string" ? tool.name : "";
    return !toolFilter || toolFilter(name);
  });
  return { dynamicTools: [...builtins, ...getPiclawBridgeTools(session, toolFilter).map(dynamicToolSchemaFromPiclawTool)] };
}

export function summarizeDynamicToolNames(config: JsonObject): string[] {
  const tools = Array.isArray(config.dynamicTools) ? config.dynamicTools : [];
  return tools
    .map((tool) => tool && typeof tool === "object" ? readString((tool as JsonObject).name) : null)
    .filter((name): name is string => Boolean(name));
}

export function dynamicToolSignature(config: JsonObject): string {
  return summarizeDynamicToolNames(config).sort((a, b) => a.localeCompare(b)).join("\0");
}

function makeBridgeContext(chatJid: string): JsonObject {
  return {
    hasUI: false,
    cwd: workspaceCwd(),
    chatJid,
    ui: {
      notify: () => undefined,
      setStatus: () => undefined,
      setWorkingIndicator: () => undefined,
      setWorkingMessage: () => undefined,
    },
  };
}

export function buildUserInput(chatJid: string, prompt: string, mediaIds: number[] | undefined, toolNames: string[] = []): JsonObject[] {
  const inputs: JsonObject[] = [];
  const materializedMedia = materializeBridgeMediaList(chatJid, mediaIds);
  const attachmentNotes = buildBridgeAttachmentNotesFromMaterialized(materializedMedia, PICLAW_BRIDGE_ATTACHMENT_TEXT_PREVIEW_TOTAL_CHARS);
  for (const { media: materialized } of materializedMedia) {
    if (!materialized) continue;
    if (materialized.contentType.startsWith("image/") && materialized.contentType !== "image/svg+xml") {
      inputs.push({ type: "localImage", path: materialized.path });
    }
  }
  const text = attachmentNotes.length > 0
    ? `${prompt}\n\nAttached files:\n${attachmentNotes.join("\n")}`
    : prompt;
  const bridgeTools = toolNames
    .filter((name) => name !== "search_messages" && name !== "read_media" && name !== "context_usage")
    .sort((a, b) => a.localeCompare(b));
  const toolPrefix = buildPiclawBridgeToolPrefix("bridge", bridgeTools);
  return [{ type: "text", text: `${toolPrefix}${text}`, text_elements: [] }, ...inputs];
}

export function isCodexExternalDataToolForTests(toolName: string): boolean {
  return isExternalPiclawBridgeTool(toolName);
}

export async function handleDynamicToolCall(params: JsonObject): Promise<{ contentItems: Array<{ type: "inputText"; text: string }>; success: boolean }> {
  const threadId = readString(params.threadId);
  const chatJid = threadId ? getChatForThread(threadId) : null;
  const tool = readString(params.tool);
  const namespace = readString(params.namespace);
  const args = parseArgs(params.arguments);

  if (namespace !== "piclaw" && namespace !== "piclaw_tool") return contentItemsFrom(`Unknown dynamic tool namespace: ${namespace}`, false);
  if (!chatJid) return contentItemsFrom("Unknown Piclaw chat for this Codex thread.", false);
  if (!tool) return contentItemsFrom("Missing Piclaw dynamic tool name.", false);

  if (namespace === "piclaw_tool") {
    const session = threadId ? getBridgeSessionForThread(threadId) : null;
    const bridgeTool = getPiclawBridgeTools(session).find((candidate) => bridgeToolName(candidate) === tool);
    if (!bridgeTool || typeof bridgeTool.execute !== "function") {
      return contentItemsFrom(`Piclaw tool is not available to Codex: ${tool || "(missing)"}`, false);
    }
    try {
      if (isExternalPiclawBridgeTool(tool)) markThreadUntrusted(threadId);
      const signal = threadId ? getToolAbortControllerForThread(threadId)?.signal : undefined;
      const result = await bridgeTool.execute(`codex-bridge-${Date.now().toString(36)}`, args, signal, () => undefined, makeBridgeContext(chatJid));
      const text = bridgeResultToText(result);
      if (!text.trim()) {
        log.debug("Piclaw dynamic bridge tool returned empty output", {
          operation: "codex_app_server.dynamic_tool_empty_result",
          tool,
          chatJid,
          threadId,
        });
      }
      return contentItemsFrom(text);
    } catch (error) {
      log.warn("Piclaw dynamic bridge tool failed", {
        operation: "codex_app_server.dynamic_tool_failed",
        tool,
        chatJid,
        threadId,
        err: error,
      });
      return contentItemsFrom(`${tool || "Piclaw tool"} failed: ${error instanceof Error ? error.message : String(error)}`, false);
    }
  }

  const result = executePiclawBuiltinTool(chatJid, tool, args, () => getContextUsageForChat(chatJid));
  return contentItemsFrom(result.value, result.isError !== true);
}
