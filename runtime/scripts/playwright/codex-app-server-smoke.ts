#!/usr/bin/env bun

import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { once } from "node:events";
import net from "node:net";

import { bootstrapE2EStorageState } from "./web-auth-bootstrap.ts";

const RUNTIME = resolve(import.meta.dir, "../..");
const REPO = resolve(RUNTIME, "..");
const CHAT_JID = "web:default";
const INTERNAL_SECRET = "codex-app-server-smoke-secret";

function log(message: string): void {
  console.log(`[codex-app-server-smoke] ${message}`);
}

async function freePort(): Promise<number> {
  const server = net.createServer();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  server.close();
  await once(server, "close");
  return port;
}

async function waitForHttp(baseUrl: string, timeoutMs = 15000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let lastError: unknown = null;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/manifest.json`);
      if (response.ok) return;
    } catch (error) {
      lastError = error;
    }
    await Bun.sleep(100);
  }
  throw new Error(`Piclaw smoke server did not become ready: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
}

function quoteForPiclawCommand(value: string): string {
  return `"${value.replace(/["\\]/g, (match) => `\\${match}`)}"`;
}

function cookieHeader(storageState: { cookies?: Array<{ name: string; value: string }> }): string {
  return (storageState.cookies ?? []).map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
}

async function fetchJson(baseUrl: string, path: string, cookie: string, init: RequestInit = {}): Promise<{ status: number; body: unknown }> {
  const headers = new Headers(init.headers);
  if (cookie) headers.set("Cookie", cookie);
  const response = await fetch(`${baseUrl}${path}`, { ...init, headers });
  const text = await response.text();
  let body: unknown = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  return { status: response.status, body };
}

async function poll<T>(description: string, fn: () => Promise<T | null>, timeoutMs = 20000): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const value = await fn();
    if (value) return value;
    await Bun.sleep(150);
  }
  throw new Error(`Timed out waiting for ${description}`);
}

function requireStatus(actual: number, expected: number, label: string, body: unknown): void {
  if (actual !== expected) {
    throw new Error(`${label} returned HTTP ${actual}, expected ${expected}: ${JSON.stringify(body)}`);
  }
}

const temp = mkdtempSync(join(tmpdir(), "piclaw-codex-smoke-"));
const workspace = join(temp, "workspace");
const data = join(temp, "data");
const store = join(temp, "store");
mkdirSync(workspace, { recursive: true });
mkdirSync(data, { recursive: true });
mkdirSync(store, { recursive: true });

const port = await freePort();
const baseUrl = `http://127.0.0.1:${port}`;
function readRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

function readPosts(body: unknown): Array<Record<string, unknown>> {
  const root = readRecord(body);
  return Array.isArray(root.posts) ? root.posts.filter((post): post is Record<string, unknown> => Boolean(post && typeof post === "object")) : [];
}

function isNoSuchProcessError(error: unknown): boolean {
  return Boolean(error && typeof error === "object" && "code" in error && (error as { code?: unknown }).code === "ESRCH");
}

function killProcessTree(childProcess: ChildProcessWithoutNullStreams, signal: NodeJS.Signals): void {
  if (!childProcess.pid || childProcess.exitCode !== null) return;
  try {
    process.kill(-childProcess.pid, signal);
  } catch (error) {
    if (isNoSuchProcessError(error)) return;
    try {
      childProcess.kill(signal);
    } catch (fallbackError) {
      if (!isNoSuchProcessError(fallbackError)) {
        console.warn("[codex-app-server-smoke] failed to signal smoke server", fallbackError);
      }
    }
  }
}

const mockCommand = [
  quoteForPiclawCommand(process.execPath),
  quoteForPiclawCommand(resolve(RUNTIME, "scripts/codex-app-server-mock.ts")),
].join(" ");
const child = spawn(process.execPath, [resolve(RUNTIME, "src/index.ts")], {
  cwd: REPO,
  env: {
    ...process.env,
    PICLAW_WORKSPACE: workspace,
    PICLAW_DATA: data,
    PICLAW_STORE: store,
    PICLAW_WEB_HOST: "127.0.0.1",
    PICLAW_WEB_PORT: String(port),
    PICLAW_WEB_INTERNAL_SECRET: INTERNAL_SECRET,
    PICLAW_AGENT_BACKEND: "codex-app-server",
    PICLAW_CODEX_APP_SERVER_COMMAND: mockCommand,
    PICLAW_AGENT_TIMEOUT: "15000",
    PICLAW_PROVIDER_USAGE_TTL_MS: "1000",
    PICLAW_ENABLE_WORKSPACE_WATCHER: "0",
  },
  detached: true,
  stdio: ["ignore", "pipe", "pipe"],
});

let stderr = "";
child.stderr.on("data", (chunk) => {
  stderr += String(chunk);
  if (stderr.length > 12000) stderr = stderr.slice(-12000);
});

try {
  await waitForHttp(baseUrl);
  const storageState = await bootstrapE2EStorageState({ baseUrl, internalSecret: INTERNAL_SECRET });
  const cookie = cookieHeader(storageState);

  const status = await fetchJson(baseUrl, `/agent/status?chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie);
  requireStatus(status.status, 200, "agent status", status.body);
  if (readRecord(status.body).status !== "idle") throw new Error(`Expected idle agent status, got ${JSON.stringify(status.body)}`);

  const models = await fetchJson(baseUrl, `/agent/models?chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie);
  requireStatus(models.status, 200, "agent models", models.body);
  if (!String(readRecord(models.body).current || "").includes("gpt-5.5")) {
    throw new Error(`Expected Codex model list to expose gpt-5.5, got ${JSON.stringify(models.body)}`);
  }

  const contextBefore = await fetchJson(baseUrl, `/agent/context?chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie);
  requireStatus(contextBefore.status, 200, "context before turn", contextBefore.body);
  const contextBeforeBody = readRecord(contextBefore.body);
  if (contextBeforeBody.tokens !== null || contextBeforeBody.contextWindow !== null) {
    throw new Error(`Expected empty context before first Codex turn, got ${JSON.stringify(contextBefore.body)}`);
  }

  const message = await fetchJson(baseUrl, `/agent/default/message?chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: "smoke codex app-server", thread_id: null, media_ids: [] }),
  });
  requireStatus(message.status, 201, "agent message", message.body);

  await poll("Codex smoke response in timeline", async () => {
    const timeline = await fetchJson(baseUrl, `/timeline?limit=20&chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie);
    requireStatus(timeline.status, 200, "timeline", timeline.body);
    const posts = readPosts(timeline.body);
    return posts.some((post) => String(readRecord(post.data).content || "").includes("codex smoke ok")) ? posts : null;
  });

  const contextAfter = await poll("Codex context usage update", async () => {
    const context = await fetchJson(baseUrl, `/agent/context?chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie);
    requireStatus(context.status, 200, "context after turn", context.body);
    const body = readRecord(context.body);
    return body.tokens === 1234 && body.contextWindow === 128000 ? body : null;
  });

  const compact = await fetchJson(baseUrl, `/agent/default/message?chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: "/compact", thread_id: null, media_ids: [] }),
  });
  requireStatus(compact.status, 201, "compact command", compact.body);

  const contextAfterCompact = await poll("Codex context usage update after compaction", async () => {
    const context = await fetchJson(baseUrl, `/agent/context?chat_jid=${encodeURIComponent(CHAT_JID)}`, cookie);
    requireStatus(context.status, 200, "context after compaction", context.body);
    const body = readRecord(context.body);
    return body.tokens === 321 && body.contextWindow === 128000 ? body : null;
  });

  log(`ok: timeline response stored, context=${contextAfter.tokens}/${contextAfter.contextWindow}, compacted=${contextAfterCompact.tokens}/${contextAfterCompact.contextWindow}`);
} finally {
  killProcessTree(child, "SIGTERM");
  await Promise.race([
    once(child, "exit"),
    Bun.sleep(2000).then(() => killProcessTree(child, "SIGKILL")),
  ]).catch((error) => {
    if (isNoSuchProcessError(error)) return;
    console.warn("[codex-app-server-smoke] failed while waiting for smoke server shutdown", error);
  });
  rmSync(temp, { recursive: true, force: true });
  if (child.exitCode !== 0 && child.exitCode !== null && stderr.trim()) {
    console.error(stderr.trim());
  }
}
