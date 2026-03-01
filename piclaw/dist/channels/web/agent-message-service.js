import { normalizeMediaIds } from "./posts-service.js";
export async function parseAgentMessageRequest(req) {
    try {
        const data = (await req.json());
        return { payload: data };
    }
    catch {
        return { error: "Invalid JSON" };
    }
}
export function normalizeAgentMessagePayload(payload) {
    return {
        content: payload.content,
        threadId: payload.thread_id ?? null,
        mediaIds: normalizeMediaIds(payload.media_ids),
        contentBlocks: Array.isArray(payload.content_blocks) ? payload.content_blocks : undefined,
        linkPreviews: Array.isArray(payload.link_previews) ? payload.link_previews : undefined,
    };
}
export function storeAgentUserMessage(channel, chatJid, payload) {
    return channel.storeMessage(chatJid, payload.content, false, payload.mediaIds, {
        contentBlocks: payload.contentBlocks,
        linkPreviews: payload.linkPreviews,
    });
}
