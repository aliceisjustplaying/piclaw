/**
 * web/push/web-push-routes.ts – HTTP handlers for VAPID key discovery and subscription persistence.
 */
import { getStoredVapidPublicKey, removeStoredWebPushSubscription, upsertStoredWebPushSubscription, } from "./web-push-store.js";
import { webNotificationPresenceService, } from "./web-notification-presence-service.js";
function resolveUserAgent(req) {
    const value = req.headers.get("user-agent");
    return value && value.trim() ? value.trim() : null;
}
function resolveDeviceId(value) {
    const normalized = typeof value === "string" ? value.trim() : "";
    return normalized || null;
}
export async function handleWebPushVapidPublicKey(options = {}) {
    return Response.json({ publicKey: getStoredVapidPublicKey(options.baseDir) });
}
export async function handleWebPushSubscriptionUpsert(req, options = {}) {
    try {
        const body = await req.json().catch(() => null);
        const subscription = body && typeof body === "object" && body.subscription ? body.subscription : body;
        const stored = upsertStoredWebPushSubscription(subscription, {
            baseDir: options.baseDir,
            userAgent: resolveUserAgent(req),
            deviceId: resolveDeviceId(body?.device_id ?? body?.deviceId),
        });
        return Response.json({ ok: true, device_id: stored.deviceId });
    }
    catch (error) {
        return Response.json({ error: error instanceof Error ? error.message : "Invalid push subscription." }, { status: 400 });
    }
}
export async function handleWebPushSubscriptionDelete(req, options = {}) {
    const body = await req.json().catch(() => null);
    const subscription = body && typeof body === "object" && body.subscription ? body.subscription : body;
    const endpoint = typeof subscription?.endpoint === "string"
        ? subscription.endpoint.trim()
        : typeof body?.endpoint === "string"
            ? body.endpoint.trim()
            : "";
    if (!endpoint) {
        return Response.json({ error: "Missing push subscription endpoint." }, { status: 400 });
    }
    const removed = removeStoredWebPushSubscription(endpoint, options.baseDir);
    return Response.json({ ok: true, removed });
}
export async function handleWebPushPresence(req, options = {}) {
    try {
        const body = await req.json().catch(() => null);
        const payload = body && typeof body === "object" ? body : null;
        if (!payload) {
            return Response.json({ error: "Invalid web notification presence payload." }, { status: 400 });
        }
        const presenceService = options.presenceService || webNotificationPresenceService;
        if (payload.active === false) {
            const removed = presenceService.remove(payload);
            return Response.json({ ok: true, active: false, removed });
        }
        const stored = presenceService.upsert(payload, { userAgent: resolveUserAgent(req) });
        return Response.json({
            ok: true,
            active: true,
            device_id: stored.deviceId,
            client_id: stored.clientId,
            chat_jid: stored.chatJid,
            visibility_state: stored.visibilityState,
        });
    }
    catch (error) {
        return Response.json({ error: error instanceof Error ? error.message : "Invalid web notification presence payload." }, { status: 400 });
    }
}
