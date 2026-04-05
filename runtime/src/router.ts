/**
 * router.ts – Message routing and formatting for the agent pipeline.
 *
 * Responsible for:
 *   - Detecting the channel type (web, whatsapp) from a chat JID.
 *   - Formatting arrays of NewMessage objects into XML for the agent prompt.
 *   - Stripping `<internal>…</internal>` tags from agent output before delivery.
 *   - Applying channel-specific output escaping (HTML entities for web).
 *
 * Consumers:
 *   - runtime/message-loop.ts calls formatMessages() to build the user-turn
 *     content for the agent.
 *   - agent-pool.ts calls formatOutbound() / stripInternalTags() when
 *     delivering the agent's response to channels.
 *   - channels/web.ts and channels/whatsapp.ts use detectChannel() to
 *     determine formatting rules.
 *   - agent-control uses detectChannel() to scope command execution.
 */

import type { NewMessage } from "./types.js";
import { getChannelFormattingInstructions } from "./channels/formatting.js";

/** Recognised channel types. */
export type ChatChannel = "web" | "whatsapp" | "unknown";

/** Infer the channel from a chat JID string (web: prefix → web, else whatsapp). */
export function detectChannel(chatJid: string | null | undefined): ChatChannel {
  if (!chatJid) return "unknown";
  if (chatJid.startsWith("web:")) return "web";
  if (chatJid.includes("@s.whatsapp.net") || chatJid.endsWith("@g.us")) return "whatsapp";
  return "unknown";
}

/** Escape special XML characters in a string for safe embedding in XML tags. */
export function escapeXml(s: string): string {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * Serialise an array of NewMessage objects into an XML `<messages>` block
 * that becomes part of the agent's prompt. Includes channel metadata and
 * formatting instructions when the channel is known.
 */
export function formatMessages(messages: NewMessage[], channel?: ChatChannel): string {
  const lines = messages.map(
    (m) => `<message sender=\"${escapeXml(m.sender_name)}\" time=\"${m.timestamp}\">${escapeXml(m.content)}</message>`
  );
  const knownChannel = channel && channel !== "unknown" ? channel : undefined;
  const channelAttr = knownChannel ? ` channel=\"${knownChannel}\"` : "";
  const metaLines: string[] = [];
  if (knownChannel) metaLines.push(`<channel>${knownChannel}</channel>`);
  const formatting = getChannelFormattingInstructions(knownChannel);
  if (formatting) metaLines.push(`<formatting>${formatting}</formatting>`);
  const meta = metaLines.length > 0 ? `${metaLines.join("\n")}\n` : "";
  return `<messages${channelAttr}>\n${meta}${lines.join("\n")}\n</messages>`;
}

const INTERNAL_OPEN_PLACEHOLDER = "\u0000PICLAW_INTERNAL_OPEN\u0000";
const INTERNAL_CLOSE_PLACEHOLDER = "\u0000PICLAW_INTERNAL_CLOSE\u0000";

function protectInternalTagsInsideMarkdownCode(text: string): string {
  let result = "";
  let i = 0;

  while (i < text.length) {
    if (text[i] !== "`") {
      result += text[i];
      i += 1;
      continue;
    }

    let tickCount = 1;
    while (i + tickCount < text.length && text[i + tickCount] === "`") tickCount += 1;
    const delimiter = "`".repeat(tickCount);
    const closeIndex = text.indexOf(delimiter, i + tickCount);

    if (closeIndex < 0) {
      result += text.slice(i);
      break;
    }

    const segment = text.slice(i, closeIndex + tickCount)
      .replaceAll("<internal>", INTERNAL_OPEN_PLACEHOLDER)
      .replaceAll("</internal>", INTERNAL_CLOSE_PLACEHOLDER);
    result += segment;
    i = closeIndex + tickCount;
  }

  return result;
}

function restoreProtectedInternalTagPlaceholders(text: string): string {
  return text
    .replaceAll(INTERNAL_OPEN_PLACEHOLDER, "<internal>")
    .replaceAll(INTERNAL_CLOSE_PLACEHOLDER, "</internal>");
}

/**
 * Remove `<internal>…</internal>` blocks from agent output.
 * Content inside these tags is logged but not sent to the user.
 *
 * Handles nested tags and malformed blocks by treating <internal> as a
 * depth counter and discarding anything inside. Unclosed tags discard the
 * remainder of the string (safer than leaking hidden content).
 *
 * Literal tag examples inside Markdown code spans/fences are preserved so the
 * agent can explain the control markup without the explanation disappearing.
 */
export function stripInternalTags(text: string): string {
  if (!text) return "";
  const protectedText = protectInternalTagsInsideMarkdownCode(text);
  let result = "";
  let depth = 0;
  let i = 0;
  while (i < protectedText.length) {
    if (protectedText.startsWith("<internal>", i)) {
      depth += 1;
      i += "<internal>".length;
      continue;
    }
    if (protectedText.startsWith("</internal>", i)) {
      if (depth > 0) depth -= 1;
      i += "</internal>".length;
      continue;
    }
    if (depth === 0) {
      result += protectedText[i];
    }
    i += 1;
  }
  return restoreProtectedInternalTagPlaceholders(result).trim();
}

/**
 * Prepare agent output text for delivery on the given channel.
 * Strips internal tags and applies HTML-entity escaping for the web channel.
 */
export function formatOutbound(rawText: string, channel?: ChatChannel): string {
  const text = stripInternalTags(rawText);
  if (!text) return "";
  if (channel === "web") {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return text;
}
