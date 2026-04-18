/**
 * web/push/web-push-service.ts – outbound Web Push delivery helpers.
 */
import { createPrivateKey } from "node:crypto";
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { ensureStoredVapidKeys, listStoredWebPushSubscriptions, removeStoredWebPushSubscription, } from "./web-push-store.js";
import { webNotificationPresenceService, } from "./web-notification-presence-service.js";
const log = createLogger("web.push.service");
const DEFAULT_VAPID_SUBJECT = typeof process.env.PICLAW_WEB_PUSH_VAPID_SUBJECT === "string" && process.env.PICLAW_WEB_PUSH_VAPID_SUBJECT.trim()
    ? process.env.PICLAW_WEB_PUSH_VAPID_SUBJECT.trim()
    : "mailto:notifications@localhost.invalid";
const DEFAULT_WEB_PUSH_REQUEST_TIMEOUT_MS = 15_000;
const AUTH_FAILURE_PRUNE_THRESHOLD = 3;
const SETUP_BREAKER_COOLDOWN_MS = 5 * 60 * 1000;
const DELIVERY_BREAKER_COOLDOWN_MS = 2 * 60 * 1000;
let disabledStoredWebPushSetupState = null;
const disabledStoredWebPushDeliveryStateByEndpoint = new Map();
const authFailureCountsByEndpoint = new Map();
function resolvePushPath(url) {
    const value = typeof url === "string" ? url.trim() : "";
    if (!value)
        return "/";
    if (value.startsWith("/"))
        return value;
    return `/${value}`;
}
function normalizePayload(payload) {
    const title = typeof payload?.title === "string" && payload.title.trim()
        ? payload.title.trim()
        : "PiClaw";
    const body = typeof payload?.body === "string" && payload.body.trim()
        ? payload.body.trim()
        : "You have a new update.";
    const tag = typeof payload?.tag === "string" && payload.tag.trim()
        ? payload.tag.trim()
        : "piclaw";
    const sourceLabel = typeof payload?.sourceLabel === "string" && payload.sourceLabel.trim()
        ? payload.sourceLabel.trim()
        : undefined;
    return {
        title,
        body,
        tag,
        url: resolvePushPath(payload?.url),
        ...(sourceLabel ? { sourceLabel } : {}),
    };
}
function getStoredVapidDetails(baseDir, vapidSubject) {
    const keys = ensureStoredVapidKeys(baseDir);
    const privateJwk = createPrivateKey(keys.privateKeyPem).export({ format: "jwk" });
    const privateKey = typeof privateJwk.d === "string" ? privateJwk.d : "";
    if (!privateKey) {
        throw new Error("Stored VAPID key is missing the private key scalar.");
    }
    return {
        subject: typeof vapidSubject === "string" && vapidSubject.trim() ? vapidSubject.trim() : DEFAULT_VAPID_SUBJECT,
        publicKey: keys.publicKey,
        privateKey,
    };
}
function getActiveBreaker(state) {
    if (!state)
        return null;
    if (Date.now() < state.untilMs)
        return state;
    return null;
}
function getActiveDeliveryBreaker(endpoint) {
    const state = disabledStoredWebPushDeliveryStateByEndpoint.get(endpoint) || null;
    const active = getActiveBreaker(state);
    if (!active && state) {
        disabledStoredWebPushDeliveryStateByEndpoint.delete(endpoint);
    }
    return active;
}
function tripStoredWebPushSetupBreaker(error) {
    const reason = error instanceof Error ? error : new Error(String(error || "Unknown web push setup failure"));
    if (getActiveBreaker(disabledStoredWebPushSetupState))
        return;
    disabledStoredWebPushSetupState = {
        reason,
        untilMs: Date.now() + SETUP_BREAKER_COOLDOWN_MS,
    };
    log.warn("Disabled stored web push delivery after a fatal setup failure.", {
        errorMessage: reason.message,
        err: reason,
        cooldownMs: SETUP_BREAKER_COOLDOWN_MS,
    });
}
function tripStoredWebPushDeliveryBreaker(subscription, error) {
    const reason = error instanceof Error ? error : new Error(String(error || "Unknown web push delivery failure"));
    if (getActiveDeliveryBreaker(subscription.endpoint))
        return;
    disabledStoredWebPushDeliveryStateByEndpoint.set(subscription.endpoint, {
        reason,
        untilMs: Date.now() + DELIVERY_BREAKER_COOLDOWN_MS,
    });
    log.warn("Temporarily disabled stored web push delivery after repeated delivery failures.", {
        errorMessage: reason.message,
        err: reason,
        cooldownMs: DELIVERY_BREAKER_COOLDOWN_MS,
        endpoint: subscription.endpoint,
    });
}
async function loadGenerateRequestDetailsImpl() {
    const mod = await import("web-push");
    const api = mod.default && typeof mod.default === "object"
        ? mod.default
        : mod;
    const generateRequestDetails = api?.generateRequestDetails;
    if (typeof generateRequestDetails !== "function") {
        throw new Error("web-push generateRequestDetails is unavailable.");
    }
    return generateRequestDetails.bind(api);
}
function normalizeRequestHeaders(headers) {
    const normalized = {};
    for (const [key, value] of Object.entries(headers || {})) {
        const normalizedKey = String(key || "").trim();
        if (!normalizedKey)
            continue;
        if (normalizedKey.toLowerCase() === "content-length")
            continue;
        normalized[normalizedKey] = String(value);
    }
    return normalized;
}
async function dispatchGeneratedWebPushRequest(requestDetails, fetchImpl = fetch) {
    const controller = typeof AbortController !== "undefined" && Number.isFinite(requestDetails.timeout) && Number(requestDetails.timeout) > 0
        ? new AbortController()
        : null;
    const timeoutMs = Number.isFinite(requestDetails.timeout) && Number(requestDetails.timeout) > 0
        ? Number(requestDetails.timeout)
        : DEFAULT_WEB_PUSH_REQUEST_TIMEOUT_MS;
    const timeoutId = controller
        ? setTimeout(() => controller.abort(), timeoutMs)
        : null;
    try {
        const response = await fetchImpl(requestDetails.endpoint, {
            method: requestDetails.method || "POST",
            headers: normalizeRequestHeaders(requestDetails.headers),
            body: requestDetails.body ?? undefined,
            ...(controller ? { signal: controller.signal } : {}),
        });
        if (response.ok)
            return;
        const body = await response.text().catch(() => "");
        const error = new Error(`Received unexpected response code: ${response.status}`);
        error.statusCode = response.status;
        error.headers = Object.fromEntries(response.headers.entries());
        error.body = body;
        error.endpoint = requestDetails.endpoint;
        throw error;
    }
    finally {
        if (timeoutId)
            clearTimeout(timeoutId);
    }
}
function isExpiredSubscriptionError(error) {
    const statusCode = Number(error?.statusCode);
    return statusCode === 404 || statusCode === 410;
}
function isAuthRejectedSubscriptionError(error) {
    const statusCode = Number(error?.statusCode);
    return statusCode === 401 || statusCode === 403;
}
function isPotentialSystemicDeliveryError(error) {
    return !isExpiredSubscriptionError(error) && !isAuthRejectedSubscriptionError(error);
}
function clearSubscriptionFailureState(subscription) {
    authFailureCountsByEndpoint.delete(subscription.endpoint);
}
function shouldPruneSubscriptionAfterAuthFailure(subscription) {
    const nextCount = (authFailureCountsByEndpoint.get(subscription.endpoint) ?? 0) + 1;
    authFailureCountsByEndpoint.set(subscription.endpoint, nextCount);
    return nextCount >= AUTH_FAILURE_PRUNE_THRESHOLD;
}
function buildReplyNotificationBody(interaction) {
    const content = String(interaction?.data?.content || "").trim();
    if (content) {
        return content.replace(/\s+/g, " ").slice(0, 200);
    }
    const contentBlocks = Array.isArray(interaction?.data?.content_blocks)
        ? interaction.data.content_blocks
        : [];
    if (contentBlocks.length > 0) {
        return "Sent an attachment.";
    }
    return "You have a new reply.";
}
export function buildStoredAgentReplyWebPushNotification(interaction) {
    if (!interaction || typeof interaction !== "object")
        return null;
    const chatJid = typeof interaction.chat_jid === "string" ? interaction.chat_jid.trim() : "";
    if (!chatJid)
        return null;
    const rowId = Number(interaction.id);
    const suffix = rowId > 0 ? `#msg-${rowId}` : "";
    return {
        title: "PiClaw reply",
        body: buildReplyNotificationBody(interaction),
        url: `/?chat_jid=${encodeURIComponent(chatJid)}${suffix}`,
        tag: `piclaw:reply:${encodeURIComponent(chatJid)}`,
        sourceLabel: "Web Push",
    };
}
export async function sendStoredAgentReplyWebPushNotification(interaction, options = {}) {
    const payload = buildStoredAgentReplyWebPushNotification(interaction);
    if (!payload) {
        return { attempted: 0, sent: 0, removed: 0, failed: 0 };
    }
    return await sendStoredWebPushNotification(payload, {
        ...options,
        chatJid: typeof interaction.chat_jid === "string" ? interaction.chat_jid.trim() : options.chatJid,
    });
}
export async function sendStoredWebPushNotification(payload, options = {}) {
    const subscriptions = listStoredWebPushSubscriptions(options.baseDir);
    if (subscriptions.length === 0) {
        return { attempted: 0, sent: 0, removed: 0, failed: 0 };
    }
    if (getActiveBreaker(disabledStoredWebPushSetupState)) {
        return { attempted: 0, sent: 0, removed: 0, failed: 0 };
    }
    const normalizedPayload = normalizePayload(payload);
    const serializedPayload = JSON.stringify(normalizedPayload);
    let requestOptions;
    let generateRequestDetails;
    try {
        const vapidDetails = getStoredVapidDetails(options.baseDir, options.vapidSubject);
        requestOptions = {
            TTL: Number.isFinite(options.ttl) ? Number(options.ttl) : 60,
            urgency: options.urgency || "normal",
            vapidDetails,
        };
        generateRequestDetails = options.sendNotification
            ? null
            : (options.generateRequestDetails || await loadGenerateRequestDetailsImpl());
    }
    catch (error) {
        tripStoredWebPushSetupBreaker(error);
        return { attempted: 0, sent: 0, removed: 0, failed: 0 };
    }
    const presenceService = options.presenceService || webNotificationPresenceService;
    const eligibleSubscriptions = subscriptions.filter((subscription) => {
        if (typeof options.targetDeviceId === "string" && options.targetDeviceId.trim() && subscription.deviceId !== options.targetDeviceId.trim()) {
            return false;
        }
        if (getActiveDeliveryBreaker(subscription.endpoint)) {
            return false;
        }
        return presenceService.shouldSendWebPush(subscription.deviceId, options.chatJid);
    });
    const outcomes = await Promise.all(eligibleSubscriptions.map(async (subscription) => {
        try {
            if (options.sendNotification) {
                await options.sendNotification(subscription, serializedPayload, requestOptions);
            }
            else if (generateRequestDetails) {
                const requestDetails = generateRequestDetails(subscription, serializedPayload, requestOptions);
                await dispatchGeneratedWebPushRequest(requestDetails, options.fetchImpl || fetch);
            }
            clearSubscriptionFailureState(subscription);
            return { attempted: 1, sent: 1, removed: 0, failed: 0, systemicError: null };
        }
        catch (error) {
            if (isExpiredSubscriptionError(error)) {
                clearSubscriptionFailureState(subscription);
                if (removeStoredWebPushSubscription(subscription.endpoint, options.baseDir)) {
                    log.info("Removed expired web push subscription after delivery failure.", {
                        endpoint: subscription.endpoint,
                        statusCode: error?.statusCode,
                    });
                    return { attempted: 1, sent: 0, removed: 1, failed: 0, systemicError: null };
                }
            }
            else if (isAuthRejectedSubscriptionError(error) && shouldPruneSubscriptionAfterAuthFailure(subscription)) {
                if (removeStoredWebPushSubscription(subscription.endpoint, options.baseDir)) {
                    log.info("Removed rejected web push subscription after repeated auth failures.", {
                        endpoint: subscription.endpoint,
                        statusCode: error?.statusCode,
                        threshold: AUTH_FAILURE_PRUNE_THRESHOLD,
                    });
                    authFailureCountsByEndpoint.delete(subscription.endpoint);
                    return { attempted: 1, sent: 0, removed: 1, failed: 0, systemicError: null };
                }
            }
            const normalizedError = error instanceof Error
                ? error
                : new Error(typeof error?.message === "string"
                    ? String(error.message)
                    : "Web push delivery failed.");
            debugSuppressedError(log, "Web push delivery failed for a stored subscription.", error, {
                endpoint: subscription.endpoint,
            });
            return {
                attempted: 1,
                sent: 0,
                removed: 0,
                failed: 1,
                systemicError: isPotentialSystemicDeliveryError(error) ? normalizedError : null,
            };
        }
    }));
    const attempted = outcomes.reduce((total, entry) => total + entry.attempted, 0);
    const sent = outcomes.reduce((total, entry) => total + entry.sent, 0);
    const removed = outcomes.reduce((total, entry) => total + entry.removed, 0);
    const failed = outcomes.reduce((total, entry) => total + entry.failed, 0);
    const systemicFailures = outcomes
        .map((entry) => entry.systemicError)
        .filter(Boolean);
    if (attempted > 0 && sent === 0 && removed === 0 && failed === attempted && systemicFailures.length === eligibleSubscriptions.length) {
        for (let index = 0; index < eligibleSubscriptions.length; index += 1) {
            const subscription = eligibleSubscriptions[index];
            const error = systemicFailures[index];
            if (subscription && error) {
                tripStoredWebPushDeliveryBreaker(subscription, error);
            }
        }
    }
    return {
        attempted,
        sent,
        removed,
        failed,
    };
}
export async function sendStoredWebPushTestNotification(options = {}) {
    return await sendStoredWebPushNotification({
        title: options.title || "PiClaw notifications enabled",
        body: options.body || "Web Push is configured for this device.",
        url: options.url || "/",
        tag: options.tag || "piclaw:test",
        sourceLabel: options.sourceLabel || "Web Push",
    }, options);
}
