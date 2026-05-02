import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { createInterface } from "node:readline";

import { buildAgentChildEnv } from "../child-env.js";
import { registerPreShutdownHook } from "../../runtime/shutdown-registry.js";
import { handleDynamicToolCall } from "./bridge-tools.js";
import { resolveApprovalResponse, isUntrustedThread } from "./notifications.js";
import {
  client,
  resetCodexAppServerState,
  setClient,
  setTestClientFactory,
  testClientFactory,
} from "./state.js";
import { log } from "./telemetry.js";
import type { CodexAppServerClientLike, JsonObject, JsonRpcId, NotificationHandler, PendingRequest } from "./types.js";
import { appServerCommand, asError, contentItemsFrom, readString, workspaceCwd } from "./utils.js";

let shutdownHookRegistered = false;

class CodexAppServerClient implements CodexAppServerClientLike {
  private child: ChildProcessWithoutNullStreams;
  private nextId = 1;
  private pending = new Map<JsonRpcId, PendingRequest>();
  private notificationHandlers = new Set<NotificationHandler>();
  private initialized: Promise<void>;
  private stopKillTimer: ReturnType<typeof setTimeout> | null = null;
  private exited = false;

  constructor() {
    if (!shutdownHookRegistered) {
      shutdownHookRegistered = true;
      registerPreShutdownHook(() => stopCodexAppServerBackend());
    }
    const { command, args } = appServerCommand();
    this.child = spawn(command, args, {
      cwd: workspaceCwd(),
      env: buildAgentChildEnv("codex"),
      stdio: ["pipe", "pipe", "pipe"],
    });

    const stdout = createInterface({ input: this.child.stdout });
    stdout.on("line", (line) => this.handleLine(line));
    this.child.stderr.on("data", (chunk) => {
      const text = String(chunk).trim();
      if (text) log.warn("Codex app-server stderr", { operation: "codex_app_server.stderr", text });
    });
    this.child.on("error", (error) => {
      this.failAll(error);
      resetCodexAppServerState();
      if (client === this) setClient(null);
      log.warn("Codex app-server process error", { operation: "codex_app_server.process_error", error });
    });
    this.child.on("exit", (code, signal) => {
      this.exited = true;
      const error = new Error(`codex app-server exited (${code ?? signal ?? "unknown"})`);
      this.failAll(error);
      if (this.stopKillTimer) {
        clearTimeout(this.stopKillTimer);
        this.stopKillTimer = null;
      }
      resetCodexAppServerState();
      if (client === this) setClient(null);
      log.warn("Codex app-server exited", { operation: "codex_app_server.exit", code, signal });
    });

    this.initialized = this.request("initialize", {
      clientInfo: { name: "piclaw", title: "Piclaw", version: "app-server-spike" },
      capabilities: { experimentalApi: true },
    }).then(() => {
      this.notify("initialized", {});
    });
  }

  async ready(): Promise<void> {
    await this.initialized;
  }

  onNotification(handler: NotificationHandler): () => void {
    this.notificationHandlers.add(handler);
    return () => this.notificationHandlers.delete(handler);
  }

  request(method: string, params: unknown): Promise<unknown> {
    const id = this.nextId++;
    const payload = { jsonrpc: "2.0", id, method, params };
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.child.stdin.write(`${JSON.stringify(payload)}\n`, (err) => {
        if (!err) return;
        this.pending.delete(id);
        reject(err);
      });
    });
  }

  stop(): void {
    this.failAll(new Error("codex app-server stopped"));
    if (!this.exited) this.child.kill("SIGTERM");
    this.stopKillTimer = setTimeout(() => {
      if (!this.exited) this.child.kill("SIGKILL");
    }, 2000);
    this.stopKillTimer.unref?.();
  }

  private respond(id: JsonRpcId, result: unknown): void {
    this.writeJson({ jsonrpc: "2.0", id, result }, "respond");
  }

  private notify(method: string, params: unknown): void {
    this.writeJson({ jsonrpc: "2.0", method, params }, "notify");
  }

  private writeJson(payload: unknown, operation: string): void {
    this.child.stdin.write(`${JSON.stringify(payload)}\n`, (err) => {
      if (err) log.warn("Codex app-server stdin write failed", { operation: `codex_app_server.${operation}_write_failed`, err });
    });
  }

  private failAll(error: Error): void {
    for (const pending of this.pending.values()) pending.reject(error);
    this.pending.clear();
  }

  private handleLine(line: string): void {
    let message: JsonObject;
    try {
      message = JSON.parse(line) as JsonObject;
    } catch (err) {
      log.warn("Failed to parse Codex app-server line", { operation: "codex_app_server.parse_line", line, err });
      return;
    }

    if ("id" in message && ("result" in message || "error" in message) && !("method" in message)) {
      const id = message.id as JsonRpcId;
      const pending = this.pending.get(id);
      if (!pending) return;
      this.pending.delete(id);
      if ("error" in message && message.error) pending.reject(asError(message.error));
      else pending.resolve(message.result);
      return;
    }

    if ("id" in message && typeof message.method === "string") {
      this.handleServerRequest(message);
      return;
    }

    for (const handler of this.notificationHandlers) {
      try {
        handler(message);
      } catch (err) {
        log.warn("Codex app-server notification handler failed", {
          operation: "codex_app_server.notification_handler",
          method: message.method,
          err,
        });
      }
    }
  }

  private handleServerRequest(message: JsonObject): void {
    const id = message.id as JsonRpcId;
    const method = String(message.method);
    const requestParams = message.params && typeof message.params === "object" ? message.params as JsonObject : {};
    const threadId = method === "execCommandApproval" || method === "applyPatchApproval"
      ? readString(requestParams.conversationId)
      : readString(requestParams.threadId);
    const approvalResponse = resolveApprovalResponse(method, requestParams, isUntrustedThread(threadId));
    if (approvalResponse !== null) {
      this.respond(id, approvalResponse);
      return;
    }
    if (method === "mcpServer/elicitation/request") {
      this.respond(id, { action: "cancel", content: null, _meta: null });
      return;
    }
    if (method === "item/tool/requestUserInput") {
      this.respond(id, { answers: {} });
      return;
    }
    if (method === "item/tool/call") {
      void handleDynamicToolCall(requestParams)
        .then((result) => this.respond(id, result))
        .catch((error) => this.respond(id, contentItemsFrom(`Piclaw dynamic tool failed: ${error instanceof Error ? error.message : String(error)}`, false)));
      return;
    }
    this.respond(id, null);
  }
}

export async function getClient(): Promise<CodexAppServerClientLike> {
  if (!client) setClient(testClientFactory ? testClientFactory() : new CodexAppServerClient());
  const current = client!;
  try {
    await current.ready();
    return current;
  } catch (error) {
    if (client === current) setClient(null);
    current.stop();
    throw error;
  }
}

export function setCodexAppServerClientFactoryForTests(factory: (() => CodexAppServerClientLike) | null): void {
  stopCodexAppServerBackend();
  setTestClientFactory(factory);
}

export function stopCodexAppServerBackend(): void {
  client?.stop();
  setClient(null);
  resetCodexAppServerState();
}
