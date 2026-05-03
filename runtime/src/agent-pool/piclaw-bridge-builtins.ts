import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { DATA_DIR } from "../core/config.js";
import { getMediaByIdForChat, getMediaInfoByIdForChat, searchMessages } from "../db.js";
import { PICLAW_DYNAMIC_TOOLS } from "./codex-app-server/constants.js";

export type PiclawBuiltinToolResult = { value: unknown; isError?: boolean };
export type MaterializedBridgeMedia = {
  mediaId: number;
  media: { path: string; name: string; contentType: string; size: number; text: string | null } | null;
};

function isTextLike(contentType: string): boolean {
  return contentType.startsWith("text/") ||
    contentType === "application/json" ||
    contentType === "application/xml" ||
    contentType === "image/svg+xml" ||
    contentType.endsWith("+json") ||
    contentType.endsWith("+xml");
}

function safeFileName(id: number, name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9._-]+/g, "_").replace(/^_+|_+$/g, "") || `attachment-${id}`;
  return `${id}-${cleaned}`;
}

export function materializeBridgeMedia(chatJid: string, mediaId: number): { path: string; name: string; contentType: string; size: number; text: string | null } | null {
  const media = getMediaByIdForChat(chatJid, mediaId);
  if (!media) return null;
  const dir = join(DATA_DIR, "agent-input-attachments");
  mkdirSync(dir, { recursive: true });
  const path = join(dir, safeFileName(media.id, media.filename));
  writeFileSync(path, media.data);
  const text = isTextLike(media.content_type)
    ? new TextDecoder().decode(media.data).slice(0, 200_000)
    : null;
  return { path, name: media.filename, contentType: media.content_type, size: media.data.byteLength, text };
}

export function materializeBridgeMediaList(chatJid: string, mediaIds: number[] | undefined): MaterializedBridgeMedia[] {
  return (mediaIds ?? []).map((mediaId) => ({ mediaId, media: materializeBridgeMedia(chatJid, mediaId) }));
}

export function builtInPiclawToolNames(): string[] {
  return PICLAW_DYNAMIC_TOOLS.map((entry) => String(entry.name)).filter(Boolean);
}

export function listBridgeMessages(chatJid: string, query: string, limitInput?: unknown, offsetInput?: unknown): unknown {
  const limit = Math.max(1, Math.min(20, Number(limitInput) || 8));
  const offset = Math.max(0, Number(offsetInput) || 0);
  const rows = searchMessages(chatJid, query, limit, offset).map((row) => ({
    rowid: row.id,
    timestamp: row.timestamp,
    type: row.data?.type,
    content: row.data?.content,
    media_ids: row.data?.media_ids ?? [],
    thread_id: row.data?.thread_id ?? null,
  }));
  return { chat_jid: chatJid, query, rows };
}

export function readBridgeMedia(chatJid: string, mediaIdInput: unknown, maxCharsInput?: unknown): PiclawBuiltinToolResult {
  const mediaId = Number(mediaIdInput);
  if (!Number.isFinite(mediaId) || mediaId <= 0) return { value: "Missing media_id.", isError: true };
  const materialized = materializeBridgeMedia(chatJid, mediaId);
  const info = getMediaInfoByIdForChat(chatJid, mediaId);
  if (!materialized || !info) return { value: `Media ${mediaId} not found.`, isError: true };
  const maxChars = Math.max(1, Math.min(50_000, Number(maxCharsInput) || 12_000));
  return {
    value: {
      id: mediaId,
      filename: materialized.name,
      content_type: materialized.contentType,
      size: materialized.size,
      path: materialized.path,
      text: materialized.text ? materialized.text.slice(0, maxChars) : null,
      metadata: info.metadata ?? null,
    },
  };
}

export function executePiclawBuiltinTool(
  chatJid: string,
  tool: string,
  args: Record<string, unknown>,
  getContextUsage: () => unknown,
): PiclawBuiltinToolResult {
  if (tool === "search_messages") {
    const query = typeof args.query === "string" ? args.query : "";
    if (!query) return { value: "Missing query.", isError: true };
    return { value: listBridgeMessages(chatJid, query, args.limit, args.offset) };
  }
  if (tool === "read_media") return readBridgeMedia(chatJid, args.media_id, args.max_chars);
  if (tool === "context_usage") return { value: getContextUsage() ?? { tokens: null, contextWindow: null, percent: null } };
  return { value: `Unknown Piclaw dynamic tool: ${tool}`, isError: true };
}

export function buildBridgeAttachmentNotes(chatJid: string, mediaIds: number[] | undefined, totalPreviewChars = 200_000): string[] {
  return buildBridgeAttachmentNotesFromMaterialized(materializeBridgeMediaList(chatJid, mediaIds), totalPreviewChars);
}

export function buildBridgeAttachmentNotesFromMaterialized(materializedMedia: MaterializedBridgeMedia[], totalPreviewChars = 200_000): string[] {
  const attachmentNotes: string[] = [];
  let remainingPreviewChars = totalPreviewChars;
  for (const { mediaId, media: materialized } of materializedMedia) {
    if (!materialized) {
      attachmentNotes.push(`- media ${mediaId}: not found`);
      continue;
    }
    attachmentNotes.push(`- media ${mediaId}: ${materialized.name} (${materialized.contentType}, ${materialized.size} bytes) saved at ${materialized.path}`);
    if (materialized.text && remainingPreviewChars > 0) {
      const preview = materialized.text.slice(0, remainingPreviewChars);
      remainingPreviewChars -= preview.length;
      attachmentNotes.push(`  text preview:\n${preview}${preview.length < materialized.text.length ? "\n...[attachment text preview truncated]" : ""}`);
    }
  }
  return attachmentNotes;
}
