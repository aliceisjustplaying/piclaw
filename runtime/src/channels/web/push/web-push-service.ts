/**
 * web/push/web-push-service.ts – outbound Web Push delivery helpers.
 */

import { createPrivateKey } from "node:crypto";

import type { InteractionRow } from "../../../db.js";
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import {
  ensureStoredVapidKeys,
  listStoredWebPushSubscriptions,
  removeStoredWebPushSubscription,
  type StoredWebPushSubscription,
} from "./web-push-store.js";
import {
  webNotificationPresenceService,
  type WebNotificationPresenceService,
} from "./web-notification-presence-service.js";

const log = createLogger("web.push.service");
const DEFAULT_VAPID_SUBJECT = typeof process.env.PICLAW_WEB_PUSH_VAPID_SUBJECT === "string" && process.env.PICLAW_WEB_PUSH_VAPID_SUBJECT.trim()
  ? process.env.PICLAW_WEB_PUSH_VAPID_SUBJECT.trim()
  : "https://pix.mosphere.at";

export interface WebPushNotificationPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
  sourceLabel?: string;
}

export interface StoredWebPushSendResult {
  attempted: number;
  sent: number;
  removed: number;
  failed: number;
}

export interface SendStoredWebPushNotificationOptions {
  baseDir?: string;
  vapidSubject?: string;
  chatJid?: string;
  ttl?: number;
  urgency?: "very-low" | "low" | "normal" | "high";
  sendNotification?: (
    subscription: StoredWebPushSubscription,
    payload: string,
    options: {
      TTL: number;
      urgency: "very-low" | "low" | "normal" | "high";
      vapidDetails: {
        subject: string;
        publicKey: string;
        privateKey: string;
      };
    },
  ) => Promise<unknown>;
  generateRequestDetails?: (
    subscription: StoredWebPushSubscription,
    payload: string,
    options: {
      TTL: number;
      urgency: "very-low" | "low" | "normal" | "high";
      vapidDetails: {
        subject: string;
        publicKey: string;
        privateKey: string;
      };
    },
  ) => GeneratedWebPushRequestDetails;
  fetchImpl?: typeof fetch;
  presenceService?: WebNotificationPresenceService;
}

export interface GeneratedWebPushRequestDetails {
  endpoint: string;
  method?: string;
  headers?: Record<string, string | number>;
  body?: BodyInit | null;
  timeout?: number;
}

function resolvePushPath(url: string | undefined): string {
  const value = typeof url === "string" ? url.trim() : "";
  if (!value) return "/";
  if (value.startsWith("/")) return value;
  return `/${value}`;
}

function normalizePayload(payload: WebPushNotificationPayload): WebPushNotificationPayload {
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

function getStoredVapidDetails(baseDir?: string, vapidSubject?: string): {
  subject: string;
  publicKey: string;
  privateKey: string;
} {
  const keys = ensureStoredVapidKeys(baseDir);
  const privateJwk = createPrivateKey(keys.privateKeyPem).export({ format: "jwk" }) as JsonWebKey;
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

async function loadGenerateRequestDetailsImpl(): Promise<NonNullable<SendStoredWebPushNotificationOptions["generateRequestDetails"]>> {
  const mod = await import("web-push");
  const api = (mod as Record<string, any>).default && typeof (mod as Record<string, any>).default === "object"
    ? (mod as Record<string, any>).default
    : mod;
  const generateRequestDetails = api?.generateRequestDetails;
  if (typeof generateRequestDetails !== "function") {
    throw new Error("web-push generateRequestDetails is unavailable.");
  }
  return generateRequestDetails.bind(api);
}

function normalizeRequestHeaders(headers: GeneratedWebPushRequestDetails["headers"]): Record<string, string> {
  const normalized: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers || {})) {
    const normalizedKey = String(key || "").trim();
    if (!normalizedKey) continue;
    if (normalizedKey.toLowerCase() === "content-length") continue;
    normalized[normalizedKey] = String(value);
  }
  return normalized;
}

async function dispatchGeneratedWebPushRequest(
  requestDetails: GeneratedWebPushRequestDetails,
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  const controller = typeof AbortController !== "undefined" && Number.isFinite(requestDetails.timeout) && Number(requestDetails.timeout) > 0
    ? new AbortController()
    : null;
  const timeoutId = controller
    ? setTimeout(() => controller.abort(), Number(requestDetails.timeout))
    : null;

  try {
    const response = await fetchImpl(requestDetails.endpoint, {
      method: requestDetails.method || "POST",
      headers: normalizeRequestHeaders(requestDetails.headers),
      body: requestDetails.body ?? undefined,
      ...(controller ? { signal: controller.signal } : {}),
    });
    if (response.ok) return;

    const body = await response.text().catch(() => "");
    throw {
      message: "Received unexpected response code",
      statusCode: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      body,
      endpoint: requestDetails.endpoint,
    };
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

function isExpiredSubscriptionError(error: unknown): boolean {
  const statusCode = Number((error as { statusCode?: unknown } | null)?.statusCode);
  return statusCode === 404 || statusCode === 410;
}

function buildReplyNotificationBody(interaction: InteractionRow): string {
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

export function buildStoredAgentReplyWebPushNotification(interaction: InteractionRow): WebPushNotificationPayload | null {
  if (!interaction || typeof interaction !== "object") return null;
  const chatJid = typeof interaction.chat_jid === "string" ? interaction.chat_jid.trim() : "";
  if (!chatJid) return null;
  const rowId = Number(interaction.id);
  const suffix = rowId > 0 ? `#msg-${rowId}` : "";
  return {
    title: "PiClaw reply",
    body: buildReplyNotificationBody(interaction),
    url: `/?chat_jid=${encodeURIComponent(chatJid)}${suffix}`,
    tag: `piclaw:reply:${chatJid}`,
    sourceLabel: "Web Push",
  };
}

export async function sendStoredAgentReplyWebPushNotification(
  interaction: InteractionRow,
  options: SendStoredWebPushNotificationOptions = {},
): Promise<StoredWebPushSendResult> {
  const payload = buildStoredAgentReplyWebPushNotification(interaction);
  if (!payload) {
    return { attempted: 0, sent: 0, removed: 0, failed: 0 };
  }
  return await sendStoredWebPushNotification(payload, {
    ...options,
    chatJid: typeof interaction.chat_jid === "string" ? interaction.chat_jid.trim() : options.chatJid,
  });
}

export async function sendStoredWebPushNotification(
  payload: WebPushNotificationPayload,
  options: SendStoredWebPushNotificationOptions = {},
): Promise<StoredWebPushSendResult> {
  const subscriptions = listStoredWebPushSubscriptions(options.baseDir);
  if (subscriptions.length === 0) {
    return { attempted: 0, sent: 0, removed: 0, failed: 0 };
  }

  const normalizedPayload = normalizePayload(payload);
  const serializedPayload = JSON.stringify(normalizedPayload);
  const vapidDetails = getStoredVapidDetails(options.baseDir, options.vapidSubject);
  const requestOptions = {
    TTL: Number.isFinite(options.ttl) ? Number(options.ttl) : 60,
    urgency: options.urgency || "normal",
    vapidDetails,
  } as const;
  const generateRequestDetails = options.sendNotification
    ? null
    : (options.generateRequestDetails || await loadGenerateRequestDetailsImpl());
  const presenceService = options.presenceService || webNotificationPresenceService;

  let attempted = 0;
  let sent = 0;
  let removed = 0;
  let failed = 0;

  for (const subscription of subscriptions) {
    if (!presenceService.shouldSendWebPush(subscription.deviceId, options.chatJid)) {
      continue;
    }

    attempted += 1;
    try {
      if (options.sendNotification) {
        await options.sendNotification(subscription, serializedPayload, requestOptions);
      } else if (generateRequestDetails) {
        const requestDetails = generateRequestDetails(subscription, serializedPayload, requestOptions);
        await dispatchGeneratedWebPushRequest(requestDetails, options.fetchImpl || fetch);
      }
      sent += 1;
    } catch (error) {
      if (isExpiredSubscriptionError(error)) {
        if (removeStoredWebPushSubscription(subscription.endpoint, options.baseDir)) {
          removed += 1;
        }
        log.info("Removed expired web push subscription after delivery failure.", {
          endpoint: subscription.endpoint,
          statusCode: (error as { statusCode?: unknown } | null)?.statusCode,
        });
        continue;
      }

      failed += 1;
      debugSuppressedError(log, "Web push delivery failed for a stored subscription.", error, {
        endpoint: subscription.endpoint,
      });
    }
  }

  return {
    attempted,
    sent,
    removed,
    failed,
  };
}
