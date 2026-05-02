import { contextUsageByChat, untrustedExternalContentByThread } from "./state.js";
import type { CodexContextUsage, JsonObject } from "./types.js";
import { readString } from "./utils.js";

export function isUntrustedThread(threadId: string | null): boolean {
  return Boolean(threadId && untrustedExternalContentByThread.get(threadId));
}

export function markThreadUntrusted(threadId: string | null): void {
  if (threadId) untrustedExternalContentByThread.set(threadId, true);
}

export function resolveApprovalResponse(method: string, params: JsonObject, threadIsUntrusted: boolean): unknown | null {
  if (method === "item/commandExecution/requestApproval" || method === "item/fileChange/requestApproval") {
    return { decision: threadIsUntrusted ? "reject" : "accept" };
  }
  if (method === "execCommandApproval" || method === "applyPatchApproval") {
    return { decision: threadIsUntrusted ? "denied" : "approved" };
  }
  if (method === "item/permissions/requestApproval") {
    return { permissions: threadIsUntrusted ? {} : params.permissions || {}, scope: "turn" };
  }
  if (/approval/i.test(method) || /requestApproval/i.test(method)) {
    return { decision: "denied" };
  }
  return null;
}

export function normalizeContextUsage(tokenUsage: JsonObject): CodexContextUsage | null {
  const last = tokenUsage.last && typeof tokenUsage.last === "object" ? tokenUsage.last as JsonObject : null;
  const contextWindow = Number(tokenUsage.modelContextWindow);
  if (!last || !Number.isFinite(contextWindow) || contextWindow <= 0) return null;
  const tokens = Number(last.totalTokens);
  const nextTokens = Number.isFinite(tokens) ? tokens : null;
  return {
    tokens: nextTokens,
    contextWindow,
    percent: nextTokens == null ? null : (nextTokens / contextWindow) * 100,
  };
}

export function itemToolName(item: JsonObject): string | null {
  if (item.type === "commandExecution") return "shell";
  if (item.type === "fileChange") return "file_change";
  if (item.type === "mcpToolCall") {
    const server = readString(item.server);
    const tool = readString(item.tool);
    return server && tool ? `mcp:${server}/${tool}` : tool;
  }
  if (item.type === "dynamicToolCall") {
    const namespace = readString(item.namespace);
    const tool = readString(item.tool);
    return namespace && tool ? `${namespace}.${tool}` : tool;
  }
  if (item.type === "webSearch") return "web_search";
  return null;
}

export function itemArgs(item: JsonObject): unknown {
  if (item.type === "commandExecution") return { command: item.command, cwd: item.cwd };
  if (item.type === "fileChange") return { changes: item.changes };
  if (item.type === "mcpToolCall" || item.type === "dynamicToolCall") return item.arguments;
  if (item.type === "webSearch") return { query: item.query };
  return {};
}

export function isToolItem(item: JsonObject): boolean {
  return Boolean(itemToolName(item));
}

export function updateContextUsageFromTokenUsage(chatJid: string, tokenUsage: unknown): CodexContextUsage | null {
  const usage = tokenUsage && typeof tokenUsage === "object" ? normalizeContextUsage(tokenUsage as JsonObject) : null;
  if (usage) contextUsageByChat.set(chatJid, usage);
  return usage;
}
