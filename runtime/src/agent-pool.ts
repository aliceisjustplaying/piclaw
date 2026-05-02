/**
 * agent-pool.ts – Manages per-chat pi-agent sessions and orchestrates agent runs.
 *
 * The AgentPool is the central coordinator between inbound messages and the
 * pi-coding-agent SDK. It:
 *   - Maintains a map of chat JID → AgentSession (lazy-initialised).
 *   - Provides runAgent() which prompts the agent, streams events, records
 *     token usage, detects auto-compaction needs, and returns the result.
 *   - Handles slash commands by delegating to agent-pool/slash-command.ts.
 *   - Forwards agent-control commands (model switch, session management, etc.)
 *     to the agent-control module.
 *   - Manages session lifecycle: save/restore position (for scheduled tasks),
 *     clear sessions, reload resources.
 *   - Integrates the attachment registry for file-delivery tools.
 *
 * Consumers:
 *   - runtime.ts / runtime/message-loop.ts creates the AgentPool at startup
 *     and calls runAgent() for each inbound message.
 *   - task-scheduler.ts calls runAgent() for scheduled task execution.
 *   - channels/web.ts uses applyControlCommand() and agent status queries.
 *   - agent-control handlers call methods on AgentPool for session/model ops.
 */

import { mkdirSync } from "fs";
import { join } from "path";
import {
  type AgentSession,
  type AgentSessionRuntime,
  AuthStorage,
  ModelRegistry,
  SettingsManager,
  getAgentDir,
} from "@mariozechner/pi-coding-agent";

import { type AgentControlCommand, type AgentControlResult } from "./agent-control/index.js";
import { SESSIONS_DIR, WORKSPACE_DIR, getAgentBackendConfig, type AgentBackend } from "./core/config.js";
import { getChatChannel, getChatJid } from "./core/chat-context.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import { type ActiveChatAgent } from "./agent-pool/branch-manager.js";
import {
  type AgentOutput,
  type AgentPoolOptions,
  type RunAgentOptions,
  type SidePromptOptions,
  type SidePromptResult,
} from "./agent-pool/contracts.js";
import { runSidePrompt as runSidePromptInternal } from "./agent-pool/side-prompt-runner.js";
import { runAgentPrompt } from "./agent-pool/run-agent-orchestrator.js";
import {
  abortCodexAppServerChat,
  compactCodexAppServerChat,
  cycleCodexAppServerThinkingLevel,
  getCodexAppServerContextUsage,
  getCodexAppServerFastMode,
  getCodexAppServerDisplayModelLabel,
  getCodexAppServerThinkingLevel,
  hasCodexAppServerThread,
  listCodexAppServerModels,
  peekCodexAppServerProviderUsage,
  setCodexAppServerFastMode,
  setCodexAppServerModel,
  setCodexAppServerThinkingLevel,
  warmCodexAppServerProviderUsage,
} from "./agent-pool/codex-app-server-backend.js";
import {
  abortClaudeAgentSdkChat,
  compactClaudeAgentSdkChat,
  cycleClaudeAgentSdkThinkingLevel,
  getClaudeAgentSdkContextUsage,
  getClaudeAgentSdkModelLabel,
  getClaudeAgentSdkProviderUsage,
  getClaudeAgentSdkThinkingLevel,
  listClaudeAgentSdkModels,
  setClaudeAgentSdkModel,
  setClaudeAgentSdkThinkingLevel,
} from "./agent-pool/claude-agent-sdk-backend.js";
import { type AvailableModelsResult } from "./agent-pool/runtime-facade.js";
import { createAgentPoolServices, type AgentPoolServices } from "./agent-pool/service-factory.js";
import { type AgentSessionManagerInstrumentationSnapshot, type PoolEntry } from "./agent-pool/session-manager.js";
import {
  formatBackendLabel,
  getChatAgentBackend,
  getPendingBackendHandoff,
  markBackendHandoffUsed,
  setBackendHandoff,
  setChatAgentBackend,
} from "./agent-pool/backend-state.js";
import {
  type ChatBranchRecord,
  type MergeChatBranchIntoParentResult,
  type SshConfig,
  type SshConfigApplyTiming,
  type SshConfigClearResult,
  type SshConfigSetResult,
  createTask,
  deleteSshConfig,
  getSshConfig,
  getTaskById,
  listRecentChatJids,
  updateTask,
  upsertSshConfig,
} from "./db.js";
import {
  extensionKvGet,
  extensionKvSet,
  extensionKvDelete,
  extensionKvList,
  extensionKvQuery,
  extensionKvClear,
  migrateProxmoxPortainerToKv,
} from "./db.js";
import { registerExtensionKvStore } from "./extension-kv-registry.js";
import { setSshToolHandlers } from "./extensions/ssh.js";
import { applyLiveSshConfig, clearLiveSshConfig, hasLiveChatSshSession, resolveSshCoreConfigFromChatConfig } from "./extensions/ssh-core.js";
import { getKeychainEntry } from "./secure/keychain.js";
import { createUuid } from "./utils/ids.js";
import { addLogSink, createLogger, removeLogSink } from "./utils/logger.js";

const log = createLogger("agent-pool");
const PROACTIVE_EXTENSION_ID = "proactive-agent";
const PROACTIVE_TASK_KEY = "task";
const PROACTIVE_INTERVAL_MS = 15 * 60 * 1000;
const PROACTIVE_PROMPT = [
  "Proactive check-in task.",
  "Use available Gmail and Google Calendar tools to inspect recent unread or important email and upcoming calendar events.",
  "Use personal_memory when useful.",
  "Do not send email, create/delete/update calendar events, or modify external state without explicit user confirmation.",
  "Reply with a concise digest and suggested next actions only when there is something worth surfacing.",
].join("\n");
const BACKEND_HANDOFF_PROMPT = [
  "Create a concise backend handoff state for continuing this Piclaw chat in another native agent backend.",
  "Include: current goals, latest user intent, important decisions, files/commands touched, open tasks, constraints, tool/data caveats, and anything the next backend must preserve.",
  "Do not include secrets. Keep it under 1200 words. Return only the handoff state.",
].join("\n");

export type {
  AgentOutput,
  AgentPoolOptions,
  RunAgentOptions,
  SidePromptOptions,
  SidePromptResult,
  TurnOutput,
} from "./agent-pool/contracts.js";

export interface AgentPoolRecoveryInstrumentationSnapshot {
  attemptsTotal: number;
  recoveredRuns: number;
  exhaustedRuns: number;
}

interface RuntimeInteropBridge {
  getChatJid?: (defaultValue?: string) => string;
  getChatChannel?: (defaultValue?: string) => string;
  getExtensionKvStore?: () => {
    get<T = unknown>(extensionId: string, key: string, scope?: string, scopeKey?: string): T | null;
    set(extensionId: string, key: string, value: unknown, scope?: string, scopeKey?: string): void;
    delete(extensionId: string, key: string, scope?: string, scopeKey?: string): boolean;
    list(extensionId: string, prefix?: string, scope?: string, scopeKey?: string): string[];
    clear(extensionId: string, scope?: string, scopeKey?: string): number;
  };
  addLogSink?: typeof addLogSink;
  removeLogSink?: typeof removeLogSink;
  getKeychainEntry?: typeof getKeychainEntry;
}

export interface AgentPoolMemoryInstrumentationSnapshot {
  cachedMainSessions: number;
  cachedSideSessions: number;
  activeForkBaseLeaves: number;
  activeChats: number;
  sessionManager: AgentSessionManagerInstrumentationSnapshot;
  recovery: AgentPoolRecoveryInstrumentationSnapshot;
}

/** How long (ms) an idle main session stays cached before being disposed. */
const DEFAULT_MAIN_IDLE_TTL = 3 * 60 * 1000; // 3 minutes
/** How long (ms) an idle side session stays cached before being disposed. */
const DEFAULT_SIDE_IDLE_TTL = 60 * 1000; // 1 minute
const DEFAULT_CLEANUP_INTERVAL = 30 * 1000; // check every 30 seconds
const DEFAULT_MAIN_SESSION_POOL_MAX_SIZE = 2;
// 512 MB: observed normal multi-session RSS peaks at 388–428 MB so 384 MB
// triggered pressure during ordinary work. 512 MB gives headroom above those
// peaks while still protecting against genuine memory stress.
const DEFAULT_MEMORY_PRESSURE_RSS_BYTES = 512 * 1024 * 1024;
// 60 s under genuine pressure: 30 s was too short — sessions were killed and
// immediately recreated, causing high churn with no net memory benefit.
const DEFAULT_MEMORY_PRESSURE_MAIN_IDLE_TTL = 60 * 1000;
const DEFAULT_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE = 1;

function parsePositiveMs(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseNonNegativeInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function loadAgentPoolConfig() {
  const mainIdleTtlMs = parsePositiveMs(
    process.env.PICLAW_MAIN_SESSION_IDLE_TTL_MS ?? process.env.PICLAW_SESSION_IDLE_TTL_MS,
    DEFAULT_MAIN_IDLE_TTL,
  );
  const sideIdleTtlMs = parsePositiveMs(
    process.env.PICLAW_SIDE_SESSION_IDLE_TTL_MS ?? process.env.PICLAW_SESSION_IDLE_TTL_MS,
    DEFAULT_SIDE_IDLE_TTL,
  );
  const cleanupIntervalMs = parsePositiveMs(process.env.PICLAW_SESSION_CLEANUP_INTERVAL_MS, DEFAULT_CLEANUP_INTERVAL);
  const mainSessionPoolMaxSize = parseNonNegativeInt(
    process.env.PICLAW_MAIN_SESSION_POOL_MAX_SIZE ?? process.env.PICLAW_SESSION_POOL_MAX_SIZE,
    DEFAULT_MAIN_SESSION_POOL_MAX_SIZE,
  );
  const memoryPressureRssBytes = parseNonNegativeInt(
    process.env.PICLAW_MAIN_SESSION_PRESSURE_RSS_BYTES,
    DEFAULT_MEMORY_PRESSURE_RSS_BYTES,
  );
  const memoryPressureMainIdleTtlMs = parsePositiveMs(
    process.env.PICLAW_MAIN_SESSION_PRESSURE_IDLE_TTL_MS,
    DEFAULT_MEMORY_PRESSURE_MAIN_IDLE_TTL,
  );
  const memoryPressureMainSessionPoolMaxSize = parseNonNegativeInt(
    process.env.PICLAW_MAIN_SESSION_PRESSURE_POOL_MAX_SIZE,
    DEFAULT_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE,
  );

  return {
    mainIdleTtlMs,
    sideIdleTtlMs,
    cleanupIntervalMs,
    mainSessionPoolMaxSize,
    memoryPressureRssBytes,
    memoryPressureMainIdleTtlMs,
    memoryPressureMainSessionPoolMaxSize,
  };
}
const DEFAULT_PROVIDER_RATE_LIMIT_MAX_RETRIES = 5;
const DEFAULT_PROVIDER_RATE_LIMIT_BASE_DELAY_MS = 5000;

/**
 * Manages a pool of persistent AgentSession instances keyed by chat JID.
 *
 * First invocation for a JID pays the warm-up cost (resource discovery,
 * model initialisation). Subsequent calls reuse the live session – no
 * process-spawn overhead, conversation context already loaded.
 */
export class AgentPool {
  private pool = new Map<string, PoolEntry>();
  private sidePool = new Map<string, PoolEntry>();
  private activeForkBaseLeafByChat = new Map<string, string | null>();
  private cleanupTimer: ReturnType<typeof setInterval> | null = null;
  private shuttingDown = false;
  private memoryPressureActive = false;
  private recoveryStats: AgentPoolRecoveryInstrumentationSnapshot = {
    attemptsTotal: 0,
    recoveredRuns: 0,
    exhaustedRuns: 0,
  };

  // Shared across all sessions (expensive to create, safe to reuse)
  private authStorage: AuthStorage;
  private modelRegistry: ModelRegistry;
  private settingsManager = SettingsManager.create(WORKSPACE_DIR, getAgentDir());
  private logsDir = join(WORKSPACE_DIR, "logs");
  private createSession?: AgentPoolOptions["createSession"];
  private createSideSession?: AgentPoolOptions["createSideSession"];
  private bashOperations = createTrackedBashOperations();
  private attachments: AgentPoolServices["attachments"];
  private sessionBinder: AgentPoolServices["sessionBinder"];
  private toolFactory: AgentPoolServices["toolFactory"];
  private turnCoordinator: AgentPoolServices["turnCoordinator"];
  private sessionManager: AgentPoolServices["sessionManager"];
  private branchManager: AgentPoolServices["branchManager"];
  private runtimeFacade: AgentPoolServices["runtimeFacade"];
  private sideStreamSimple?: NonNullable<AgentPoolOptions["sideStreamSimple"]>;
  private readonly config = loadAgentPoolConfig();

  constructor(options: AgentPoolOptions = {}) {
    this.createSession = options.createSession;
    this.createSideSession = options.createSideSession;
    this.authStorage = AuthStorage.create();
    this.modelRegistry = options.modelRegistry ?? ModelRegistry.create(this.authStorage);
    this.applyRateLimitRetryDefaults();
    ({
      attachments: this.attachments,
      sessionBinder: this.sessionBinder,
      toolFactory: this.toolFactory,
      turnCoordinator: this.turnCoordinator,
      sessionManager: this.sessionManager,
      runtimeFacade: this.runtimeFacade,
      branchManager: this.branchManager,
    } = createAgentPoolServices({
      pool: this.pool,
      sidePool: this.sidePool,
      activeForkBaseLeafByChat: this.activeForkBaseLeafByChat,
      authStorage: this.authStorage,
      modelRegistry: this.modelRegistry,
      settingsManager: this.settingsManager,
      workspaceDir: WORKSPACE_DIR,
      mainSessionMaxSize: this.config.mainSessionPoolMaxSize,
      bashOperations: this.bashOperations,
      createSession: this.createSession,
      createSideSession: this.createSideSession,
      onInfo: (message, details) => log.info(message, details),
      onWarn: (message, details) => log.warn(message, details),
      onError: (message, details) => log.error(message, details),
    }));
    this.sideStreamSimple = options.sideStreamSimple;
    setSshToolHandlers({
      get: (chatJid) => this.getSshConfig(chatJid),
      set: (chatJid, config) => this.setSshConfig(chatJid, config),
      clear: (chatJid) => this.clearSshConfig(chatJid),
    });
    registerExtensionKvStore({
      get: extensionKvGet,
      set: extensionKvSet,
      delete: extensionKvDelete,
      list: extensionKvList,
      query: extensionKvQuery,
      clear: extensionKvClear,
    });
    const runtimeInterop = ((globalThis as { __piclawRuntimeInterop?: RuntimeInteropBridge }).__piclawRuntimeInterop ||= {});
    runtimeInterop.getChatJid = getChatJid;
    runtimeInterop.getChatChannel = getChatChannel;
    runtimeInterop.getExtensionKvStore = () => ({
      get: extensionKvGet,
      set: extensionKvSet,
      delete: extensionKvDelete,
      list: extensionKvList,
      clear: extensionKvClear,
    });
    runtimeInterop.addLogSink = addLogSink;
    runtimeInterop.removeLogSink = removeLogSink;
    runtimeInterop.getKeychainEntry = getKeychainEntry;
    try { migrateProxmoxPortainerToKv(); } catch (e) { void e; /* migration is best-effort */ }
    mkdirSync(SESSIONS_DIR, { recursive: true });
    mkdirSync(this.logsDir, { recursive: true });
    this.cleanupTimer = setInterval(
      () => this.evictIdle(),
      this.config.cleanupIntervalMs,
    );
  }

  private applyRateLimitRetryDefaults(): void {
    const settingsManager = this.settingsManager as SettingsManager & {
      getRetrySettings?: () => { enabled: boolean; maxRetries: number; baseDelayMs: number };
    };
    if (typeof settingsManager.getRetrySettings !== "function") return;
    const originalGetRetrySettings = settingsManager.getRetrySettings.bind(settingsManager);
    settingsManager.getRetrySettings = () => {
      const settings = originalGetRetrySettings();
      return {
        ...settings,
        maxRetries: Math.max(settings.maxRetries ?? 0, DEFAULT_PROVIDER_RATE_LIMIT_MAX_RETRIES),
        baseDelayMs: Math.max(settings.baseDelayMs ?? 0, DEFAULT_PROVIDER_RATE_LIMIT_BASE_DELAY_MS),
      };
    };
  }

  setSessionBinder(binder?: (runtime: AgentSessionRuntime, chatJid: string) => Promise<void> | void): void {
    this.sessionBinder.setBinder(binder);
  }

  /** Run a prompt against the persistent session for `chatJid`. */
  async runAgent(prompt: string, chatJid: string, options: RunAgentOptions = {}): Promise<AgentOutput> {
    const backend = getChatAgentBackend(chatJid);
    const pendingHandoff = options.skipBackendHandoff ? null : getPendingBackendHandoff(chatJid, backend);
    const handoffPrompt = pendingHandoff
      ? [
        "Backend handoff state from the previous native agent backend.",
        `From: ${formatBackendLabel(pendingHandoff.from)}. To: ${formatBackendLabel(pendingHandoff.to)}. Created: ${pendingHandoff.createdAt}.`,
        "Use this as working continuity for the current turn. Piclaw transcript/search tools remain available if details are missing.",
        "",
        pendingHandoff.summary,
      ].join("\n")
      : null;
    const effectivePrompt = handoffPrompt ? `${handoffPrompt}\n\n${prompt}` : prompt;
    const runOptions = handoffPrompt
      ? {
        ...options,
        codexReplayPrompt: options.codexReplayPrompt ? `${handoffPrompt}\n\n${options.codexReplayPrompt}` : undefined,
      }
      : options;
    const output = await runAgentPrompt(effectivePrompt, chatJid, runOptions, {
      getOrCreateRuntime: (nextChatJid) => this.getOrCreateRuntime(nextChatJid),
      turnCoordinator: this.turnCoordinator,
      clearAttachments: (nextChatJid) => this.attachments.clear(nextChatJid),
      takeAttachments: (nextChatJid) => this.attachments.take(nextChatJid),
      logsDir: this.logsDir,
      setActiveForkBaseLeaf: (nextChatJid, leafId) => this.activeForkBaseLeafByChat.set(nextChatJid, leafId),
      clearActiveForkBaseLeaf: (nextChatJid) => {
        this.activeForkBaseLeafByChat.delete(nextChatJid);
      },
      onInfo: (message, details) => log.info(message, details),
      onWarn: (message, details) => log.warn(message, details),
      onError: (message, details) => log.error(message, details),
    });

    const recovery = output.recovery;
    if (recovery) {
      this.recoveryStats.attemptsTotal += Math.max(0, recovery.attemptsUsed || 0);
      if (recovery.recovered) this.recoveryStats.recoveredRuns += 1;
      if (recovery.exhausted) this.recoveryStats.exhaustedRuns += 1;
    }
    if (pendingHandoff) markBackendHandoffUsed(chatJid);

    return output;
  }

  hasActiveCodexThread(chatJid: string): boolean {
    return hasCodexAppServerThread(chatJid);
  }

  private async applyProactiveCommand(chatJid: string, command: Extract<AgentControlCommand, { type: "proactive" }>): Promise<AgentControlResult> {
    const taskRef = extensionKvGet<{ id: string }>(PROACTIVE_EXTENSION_ID, PROACTIVE_TASK_KEY, "chat", chatJid);
    const existing = taskRef?.id ? getTaskById(taskRef.id) : undefined;
    if (command.action === "status") {
      return {
        status: "success",
        message: existing
          ? `Proactive checks are ${existing.status} for ${chatJid}. Task: ${existing.id}.`
          : `Proactive checks are off for ${chatJid}.`,
      };
    }
    if (command.action === "off") {
      if (existing) updateTask(existing.id, { status: "paused" });
      return { status: "success", message: existing ? `Paused proactive checks for ${chatJid}.` : `Proactive checks were not enabled for ${chatJid}.` };
    }

    const nextRun = new Date(Date.now() + PROACTIVE_INTERVAL_MS).toISOString();
    const model = await this.getCurrentModelLabel(chatJid) ?? getClaudeAgentSdkModelLabel(chatJid);
    if (existing) {
      updateTask(existing.id, {
        prompt: PROACTIVE_PROMPT,
        model,
        schedule_type: "interval",
        schedule_value: String(PROACTIVE_INTERVAL_MS),
        next_run: nextRun,
        status: "active",
      });
      return { status: "success", message: `Proactive checks enabled for ${chatJid}. Task: ${existing.id}.` };
    }

    const id = createUuid("task");
    createTask({
      id,
      chat_jid: chatJid,
      prompt: PROACTIVE_PROMPT,
      model,
      task_kind: "agent",
      command: null,
      cwd: null,
      timeout_sec: null,
      schedule_type: "interval",
      schedule_value: String(PROACTIVE_INTERVAL_MS),
      next_run: nextRun,
      status: "active",
      created_at: new Date().toISOString(),
    });
    extensionKvSet(PROACTIVE_EXTENSION_ID, PROACTIVE_TASK_KEY, { id }, "chat", chatJid);
    return { status: "success", message: `Proactive checks enabled for ${chatJid}. Task: ${id}.` };
  }

  async applyControlCommand(chatJid: string, command: AgentControlCommand): Promise<AgentControlResult> {
    if (command.type === "rollup") {
      try {
        const result = await this.mergeChatBranchIntoParent(chatJid);
        const counts = result.counts;
        return {
          status: "success",
          message: [
            `Rolled up ${result.source.chat_jid} into parent ${result.parent.chat_jid}.`,
            `Moved: ${counts.messages} message(s), ${counts.token_usage} token-usage row(s), ${counts.scheduled_tasks} scheduled task(s).`,
            "Note: Pi JSONL session files were not merged.",
          ].join("\n"),
          rolled_up_to: result.parent.chat_jid,
          source_chat_jid: result.source.chat_jid,
        };
      } catch (error) {
        return {
          status: "error",
          message: error instanceof Error ? error.message : String(error || "Failed to roll up branch."),
        };
      }
    }

    const backend = getChatAgentBackend(chatJid);
    if (command.type === "backend") {
      if (!command.backend) {
        return { status: "success", message: `Current backend: ${formatBackendLabel(backend)}.` };
      }
      const previous = backend;
      const normalizedTarget = (() => {
        const raw = command.backend.trim().toLowerCase();
        if (raw === "pi") return "pi";
        if (raw === "codex" || raw === "codex-app-server") return "codex-app-server";
        if (raw === "claude" || raw === "claude-sdk" || raw === "claude-agent-sdk") return "claude-agent-sdk";
        return null;
      })();
      if (!normalizedTarget) {
        setChatAgentBackend(chatJid, command.backend);
      }
      const handoff = normalizedTarget && normalizedTarget !== previous
        ? await this.captureBackendHandoff(chatJid, previous, normalizedTarget)
        : false;
      const next = setChatAgentBackend(chatJid, command.backend);
      if (next !== previous) {
        const handoffNote = handoff ? " Handoff state captured for the next turn." : " Handoff state capture was unavailable; recent transcript replay will still be used.";
        return { status: "success", message: `Backend set to ${formatBackendLabel(next)} for ${chatJid}.${handoffNote}` };
      }
      return { status: "success", message: `Backend set to ${formatBackendLabel(next)} for ${chatJid}.` };
    }
    if (command.type === "proactive") return this.applyProactiveCommand(chatJid, command);
    if (command.type === "model") {
      const provider = command.provider || (command.modelId?.startsWith("claude-") ? "claude" : undefined);
      if (provider === "claude") {
        const target: AgentBackend = "claude-agent-sdk";
        if (target !== backend) await this.captureBackendHandoff(chatJid, backend, target);
        setChatAgentBackend(chatJid, "claude");
        const modelLabel = await setClaudeAgentSdkModel(chatJid, command.modelId || "default");
        const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
        return {
          status: "success",
          message: `Backend set to claude. Model set to ${modelLabel}. Thinking level: ${thinking}.`,
          model_label: modelLabel,
          thinking_level: thinking,
          thinking_level_label: thinking,
          supports_thinking: true,
        };
      }
      if (provider === "codex") {
        const target: AgentBackend = "codex-app-server";
        if (target !== backend) await this.captureBackendHandoff(chatJid, backend, target);
        setChatAgentBackend(chatJid, "codex");
        const modelLabel = await setCodexAppServerModel(chatJid, command.modelId || "default");
        const thinking = getCodexAppServerThinkingLevel(chatJid);
        return {
          status: "success",
          message: `Backend set to codex. Model set to ${modelLabel}. Thinking level: ${thinking}.`,
          model_label: modelLabel,
          thinking_level: thinking,
          thinking_level_label: thinking,
          fast_mode: getCodexAppServerFastMode(chatJid),
          supports_thinking: true,
        };
      }
    }

    if (backend === "codex-app-server") {
      const getDisplayModel = async () => getCodexAppServerDisplayModelLabel(chatJid, await listCodexAppServerModels());
      if (command.type === "model") {
        if (!command.modelId && !command.provider) {
          const models = await listCodexAppServerModels();
          const current = getCodexAppServerDisplayModelLabel(chatJid, models);
          const rows = models.map((model) => `| ${model.label} | ${model.label === current ? "current" : ""} |`);
          const thinking = getCodexAppServerThinkingLevel(chatJid);
          return {
            status: "success",
            message: ["**Available Codex models**", "", "| Model | Status |", "|---|---|", ...rows, "", "Use `/model codex/<model>` to switch."].join("\n"),
            model_label: current,
            thinking_level: thinking,
            thinking_level_label: thinking,
            fast_mode: getCodexAppServerFastMode(chatJid),
            supports_thinking: true,
          };
        }
        const requested = command.provider ? `${command.provider}/${command.modelId || "default"}` : command.modelId;
        try {
          const modelLabel = await setCodexAppServerModel(chatJid, requested);
          const thinking = getCodexAppServerThinkingLevel(chatJid);
          return {
            status: "success",
            message: `Model set to ${modelLabel}. Thinking level: ${thinking}.`,
            model_label: modelLabel,
            thinking_level: thinking,
            thinking_level_label: thinking,
            fast_mode: getCodexAppServerFastMode(chatJid),
            supports_thinking: true,
          };
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return { status: "error", message };
        }
      }
      if (command.type === "thinking") {
        if (!command.level) {
          const thinking = getCodexAppServerThinkingLevel(chatJid);
          return {
            status: "success",
            message: `Current model: ${await getDisplayModel()}.\nCurrent thinking level: ${thinking}.\nAvailable levels: off, minimal, low, medium, high, xhigh.`,
            model_label: await getDisplayModel(),
            thinking_level: thinking,
            thinking_level_label: thinking,
            fast_mode: getCodexAppServerFastMode(chatJid),
            supports_thinking: true,
            available_thinking_levels: ["off", "minimal", "low", "medium", "high", "xhigh"],
          };
        }
        const thinking = setCodexAppServerThinkingLevel(chatJid, command.level);
        if (!thinking) return { status: "error", message: "Unknown thinking level. Available: off, minimal, low, medium, high, xhigh." };
        return {
          status: "success",
          message: `Thinking level set to ${thinking}.`,
          model_label: await getDisplayModel(),
          thinking_level: thinking,
          thinking_level_label: thinking,
          fast_mode: getCodexAppServerFastMode(chatJid),
          supports_thinking: true,
        };
      }
      if (command.type === "cycle_thinking") {
        const thinking = cycleCodexAppServerThinkingLevel(chatJid);
        return {
          status: "success",
          message: `Thinking level set to ${thinking}.`,
          model_label: await getDisplayModel(),
          thinking_level: thinking,
          thinking_level_label: thinking,
          fast_mode: getCodexAppServerFastMode(chatJid),
          supports_thinking: true,
        };
      }
      if (command.type === "fast") {
        const current = getCodexAppServerFastMode(chatJid);
        const next = command.action === "status" && command.enabled === undefined
          ? current
          : command.enabled ?? !current;
        if (!(command.action === "status" && command.enabled === undefined)) {
          setCodexAppServerFastMode(chatJid, next);
        }
        const thinking = getCodexAppServerThinkingLevel(chatJid);
        return {
          status: "success",
          message: `Codex Fast mode ${next ? "on" : "off"} for ${await getDisplayModel()}. Thinking level: ${thinking}.`,
          model_label: await getDisplayModel(),
          thinking_level: thinking,
          thinking_level_label: thinking,
          fast_mode: next,
          supports_thinking: true,
        };
      }
      if (command.type === "compact") {
        await compactCodexAppServerChat(chatJid);
        return { status: "success", message: "Codex app-server compaction complete. Context usage updated if the app-server reported token usage." };
      }
      if (command.type === "abort") {
        const aborted = await abortCodexAppServerChat(chatJid);
        return { status: "success", message: aborted ? "Aborted current Codex response." : "No active Codex response to abort." };
      }
      if (command.type === "context") {
        const usage = await this.getContextUsageForChat(chatJid);
        if (!usage) return { status: "error", message: "Context usage unavailable for Codex app-server until the first token-usage update." };
        const used = usage.tokens == null ? "?" : Math.round(usage.tokens).toLocaleString();
        const total = Math.round(usage.contextWindow).toLocaleString();
        const percent = usage.percent == null ? "?" : `${usage.percent.toFixed(1)}%`;
        return { status: "success", message: `**Context usage**\n\n| Metric | Value |\n|---|---:|\n| Used | ${used} / ${total} tokens |\n| Percent | ${percent} |` };
      }
    }
    if (backend === "claude-agent-sdk") {
      if (command.type === "model") {
        const current = getClaudeAgentSdkModelLabel(chatJid);
        const models = listClaudeAgentSdkModels();
        if (command.modelId || command.provider) {
          try {
            const modelLabel = await setClaudeAgentSdkModel(chatJid, command.provider ? `${command.provider}/${command.modelId || "default"}` : command.modelId);
            const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
            return {
              status: "success",
              message: `Model set to ${modelLabel}. Thinking level: ${thinking}.`,
              model_label: modelLabel,
              thinking_level: thinking,
              thinking_level_label: thinking,
              supports_thinking: true,
            };
          } catch (err) {
            return { status: "error", message: err instanceof Error ? err.message : String(err) };
          }
        }
        const rows = models.map((model) => `| ${model.label} | ${model.label === current ? "current" : ""} |`);
        return {
          status: "success",
          message: ["**Available Claude models**", "", "| Model | Status |", "|---|---|", ...rows].join("\n"),
          model_label: current,
          thinking_level: getClaudeAgentSdkThinkingLevel(chatJid),
          thinking_level_label: getClaudeAgentSdkThinkingLevel(chatJid),
          supports_thinking: true,
        };
      }
      if (command.type === "thinking") {
        if (!command.level) {
          const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
          return {
            status: "success",
            message: `Current model: ${getClaudeAgentSdkModelLabel(chatJid)}.\nCurrent thinking level: ${thinking}.\nAvailable levels: off, low, medium, high, xhigh, max.`,
            model_label: getClaudeAgentSdkModelLabel(chatJid),
            thinking_level: thinking,
            thinking_level_label: thinking,
            supports_thinking: true,
            available_thinking_levels: ["off", "low", "medium", "high", "xhigh", "max"],
          };
        }
        const thinking = setClaudeAgentSdkThinkingLevel(chatJid, command.level);
        if (!thinking) return { status: "error", message: "Unknown thinking level. Available: off, low, medium, high, xhigh, max." };
        return {
          status: "success",
          message: `Thinking level set to ${thinking}.`,
          model_label: getClaudeAgentSdkModelLabel(chatJid),
          thinking_level: thinking,
          thinking_level_label: thinking,
          supports_thinking: true,
        };
      }
      if (command.type === "cycle_thinking") {
        const thinking = cycleClaudeAgentSdkThinkingLevel(chatJid);
        return {
          status: "success",
          message: `Thinking level set to ${thinking}.`,
          model_label: getClaudeAgentSdkModelLabel(chatJid),
          thinking_level: thinking,
          thinking_level_label: thinking,
          supports_thinking: true,
        };
      }
      if (command.type === "fast") {
        return {
          status: "success",
          message: "Claude Agent SDK does not expose Codex Fast mode. Use `/thinking off` or `/thinking low` for faster Claude turns.",
          model_label: getClaudeAgentSdkModelLabel(chatJid),
          thinking_level: getClaudeAgentSdkThinkingLevel(chatJid),
          thinking_level_label: getClaudeAgentSdkThinkingLevel(chatJid),
          fast_mode: null,
          supports_thinking: true,
        };
      }
      if (command.type === "compact") {
        const compacted = await compactClaudeAgentSdkChat(chatJid);
        return { status: compacted ? "success" : "error", message: compacted ? "Claude native compaction complete." : "No active Claude session to compact yet." };
      }
      if (command.type === "abort") {
        const aborted = await abortClaudeAgentSdkChat(chatJid);
        return { status: "success", message: aborted ? "Aborted current Claude response." : "No active Claude response to abort." };
      }
      if (command.type === "context") {
        const usage = await this.getContextUsageForChat(chatJid);
        if (!usage) return { status: "error", message: "Context usage unavailable for Claude Agent SDK until the first result usage update." };
        const used = usage.tokens == null ? "?" : Math.round(usage.tokens).toLocaleString();
        const total = Math.round(usage.contextWindow).toLocaleString();
        const percent = usage.percent == null ? "?" : `${usage.percent.toFixed(1)}%`;
        return { status: "success", message: `**Context usage**\n\n| Metric | Value |\n|---|---:|\n| Used | ${used} / ${total} tokens |\n| Percent | ${percent} |` };
      }
    }
    return this.runtimeFacade.applyControlCommand(chatJid, command);
  }

  private async captureBackendHandoff(chatJid: string, from: AgentBackend, to: AgentBackend): Promise<boolean> {
    if (from === to) return false;
    try {
      const output = await this.runAgent(BACKEND_HANDOFF_PROMPT, chatJid, {
        timeoutMs: 120_000,
        skipPrePromptCompaction: true,
        skipBackendHandoff: true,
        scheduleIdleAutoCompaction: false,
      });
      const summary = output.status === "success" ? output.result?.trim() : "";
      if (!summary) return false;
      setBackendHandoff(chatJid, { from, to, summary });
      return true;
    } catch (error) {
      log.warn("Failed to capture backend handoff", {
        operation: "agent_backend.capture_handoff_failed",
        chatJid,
        from,
        to,
        err: error,
      });
      return false;
    }
  }

  async getCurrentModelLabel(chatJid: string): Promise<string | null> {
    const backend = getChatAgentBackend(chatJid);
    if (backend === "codex-app-server") return getCodexAppServerDisplayModelLabel(chatJid, await listCodexAppServerModels());
    if (backend === "claude-agent-sdk") return getClaudeAgentSdkModelLabel(chatJid);
    return this.runtimeFacade.getCurrentModelLabel(chatJid);
  }

  async runSidePrompt(chatJid: string, prompt: string, options: SidePromptOptions = {}): Promise<SidePromptResult> {
    return runSidePromptInternal(chatJid, prompt, options, {
      getOrCreate: (nextChatJid) => this.getOrCreate(nextChatJid),
      getOrCreateSideRuntime: (nextChatJid) => this.getOrCreateSideRuntime(nextChatJid),
      syncSideSessionFromMain: (mainSession, sideRuntime) => this.syncSideSessionFromMain(mainSession, sideRuntime),
      modelRegistry: this.modelRegistry,
      sideStreamSimple: this.sideStreamSimple,
      onWarn: (message, details) => log.warn(message, details),
    });
  }

  /** Return available model labels and current model for a chat session. */
  async getAvailableModels(chatJid: string): Promise<AvailableModelsResult> {
    const backend = getChatAgentBackend(chatJid);
    if (backend === "codex-app-server") {
      const models = await listCodexAppServerModels();
      const claudeModels = listClaudeAgentSdkModels();
      const current = getCodexAppServerDisplayModelLabel(chatJid, models);
      const thinking = getCodexAppServerThinkingLevel(chatJid);
      const providerUsage = peekCodexAppServerProviderUsage();
      void warmCodexAppServerProviderUsage();
      return {
        current,
        models: [...models.map((model) => model.label), ...claudeModels.map((model) => model.label)],
        model_options: [
          ...models.map((model) => ({
          label: model.label,
          provider: "codex",
          id: model.id,
          name: model.name,
          context_window: model.contextWindow ?? getCodexAppServerContextUsage(chatJid)?.contextWindow ?? null,
          reasoning: true,
          })),
          ...claudeModels.map((model) => ({
            label: model.label,
            provider: "claude",
            id: model.id,
            name: model.name,
            context_window: model.contextWindow,
            reasoning: true,
          })),
        ],
        thinking_level: thinking,
        thinking_level_label: thinking,
        fast_mode: getCodexAppServerFastMode(chatJid),
        supports_thinking: true,
        available_thinking_levels: ["off", "minimal", "low", "medium", "high", "xhigh"],
        provider_usage: providerUsage,
      };
    }
    if (backend === "claude-agent-sdk") {
      const current = getClaudeAgentSdkModelLabel(chatJid);
      const usage = getClaudeAgentSdkContextUsage(chatJid);
      const models = listClaudeAgentSdkModels();
      const codexModels = await listCodexAppServerModels();
      const thinking = getClaudeAgentSdkThinkingLevel(chatJid);
      return {
        current,
        models: [...models.map((model) => model.label), ...codexModels.map((model) => model.label)],
        model_options: [
          ...models.map((model) => ({
            label: model.label,
            provider: "claude",
            id: model.id,
            name: model.name,
            context_window: model.contextWindow ?? usage?.contextWindow ?? null,
            reasoning: true,
          })),
          ...codexModels.map((model) => ({
            label: model.label,
            provider: "codex",
            id: model.id,
            name: model.name,
            context_window: model.contextWindow ?? null,
            reasoning: true,
          })),
        ],
        thinking_level: thinking,
        thinking_level_label: thinking,
        fast_mode: null,
        supports_thinking: true,
        available_thinking_levels: ["off", "low", "medium", "high", "xhigh", "max"],
        provider_usage: getClaudeAgentSdkProviderUsage(chatJid) as any,
      };
    }
    return this.runtimeFacade.getAvailableModels(chatJid);
  }

  /** Return the current context token usage for a chat session, or null if unknown. */
  async getContextUsageForChat(chatJid: string): Promise<{
    tokens: number | null;
    contextWindow: number;
    percent: number | null;
  } | null> {
    if (getChatAgentBackend(chatJid) === "claude-agent-sdk") return getClaudeAgentSdkContextUsage(chatJid);
    return this.runtimeFacade.getContextUsageForChat(chatJid);
  }

  scheduleRecentChatWarmup(options: { limit?: number; excludeChatJids?: string[] } = {}): string[] {
    if (this.shuttingDown) return [];
    const targetCount = Math.max(1, Math.min(8, Math.trunc(options.limit ?? 3) || 3));
    const excluded = new Set(
      Array.isArray(options.excludeChatJids)
        ? options.excludeChatJids.map((jid) => String(jid || "").trim()).filter(Boolean)
        : [],
    );
    const cooldownByChat = ((this as any).__piclawRecentWarmupCooldownByChat ||= new Map<string, number>()) as Map<string, number>;
    const now = Date.now();
    for (const [chatJid, lastQueuedAt] of cooldownByChat) {
      if (now - lastQueuedAt >= 30_000) {
        cooldownByChat.delete(chatJid);
      }
    }

    const scheduled: string[] = [];
    const seen = new Set<string>();
    let fetchLimit = Math.min(100, Math.max(targetCount * 4, targetCount));

    while (scheduled.length < targetCount) {
      const candidates = listRecentChatJids(fetchLimit, {
        excludeChatJids: [...excluded, ...seen],
      });
      for (const chatJid of candidates) {
        if (seen.has(chatJid)) continue;
        seen.add(chatJid);
        if (excluded.has(chatJid)) continue;
        if (this.pool.has(chatJid)) continue;
        if (now - (cooldownByChat.get(chatJid) ?? 0) < 30_000) continue;
        scheduled.push(chatJid);
        if (scheduled.length >= targetCount) break;
      }

      if (scheduled.length >= targetCount || fetchLimit >= 100 || candidates.length < fetchLimit) {
        break;
      }

      const nextFetchLimit = Math.min(100, fetchLimit * 2);
      if (nextFetchLimit === fetchLimit) {
        break;
      }
      fetchLimit = nextFetchLimit;
    }

    // Only record a cooldown / return chats that actually entered the prewarm
    // queue. prewarm() may reject a candidate (already queued, in flight, or
    // within its per-chat cooldown) and we must not consume a slot or suppress
    // backfill for those.
    const actuallyScheduled: string[] = [];
    for (const chatJid of scheduled) {
      if (this.sessionManager.prewarm(chatJid, { mode: "lightweight" })) {
        cooldownByChat.set(chatJid, now);
        actuallyScheduled.push(chatJid);
      }
    }

    return actuallyScheduled;
  }

  scheduleChatWarmup(chatJid: string, options: { priority?: boolean } = {}): boolean {
    return this.sessionManager.prewarm(chatJid, options);
  }

  getSessionTreeForChat(chatJid: string): { leafId: string | null; nodes: unknown[]; flat?: boolean; total?: number; capped?: boolean } | null {
    return this.runtimeFacade.getSessionTreeForChat(chatJid);
  }

  /**
   * Save the current session tree position so it can be restored later.
   * Used by the scheduler to isolate task execution in a side branch.
   */
  async saveSessionPosition(chatJid: string): Promise<string | null> {
    return this.runtimeFacade.saveSessionPosition(chatJid);
  }

  /**
   * Restore the session tree to a previously saved position.
   * Navigates back to the saved leaf, leaving the task's output in a side branch.
   */
  async restoreSessionPosition(chatJid: string, leafId: string | null): Promise<void> {
    return this.runtimeFacade.restoreSessionPosition(chatJid, leafId);
  }

  async disposeChatSession(chatJid: string): Promise<void> {
    await this.sessionManager.recreate(chatJid);
  }

  hasProviderModels(provider: string): boolean {
    return this.runtimeFacade.hasProviderModels(provider);
  }

  registerModelProvider(
    providerName: string,
    config: Parameters<ModelRegistry["registerProvider"]>[1]
  ): void {
    this.runtimeFacade.registerModelProvider(providerName, config);
  }

  resolveModelInput(input: string): { model?: string; error?: string } {
    return this.runtimeFacade.resolveModelInput(input);
  }

  isStreaming(chatJid: string): boolean {
    return this.runtimeFacade.isStreaming(chatJid);
  }

  isActive(chatJid: string): boolean {
    return this.runtimeFacade.isActive(chatJid);
  }

  private ensureBranchRegistration(chatJid: string, session?: AgentSession | null): ChatBranchRecord {
    return this.branchManager.ensureBranchRegistration(chatJid, session);
  }

  async renameChatBranch(
    chatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    return this.branchManager.renameChatBranch(chatJid, options);
  }

  async pruneChatBranch(chatJid: string): Promise<ChatBranchRecord> {
    return this.branchManager.pruneChatBranch(chatJid);
  }

  async mergeChatBranchIntoParent(chatJid: string): Promise<MergeChatBranchIntoParentResult> {
    return this.branchManager.mergeChatBranchIntoParent(chatJid);
  }

  async renameChatJid(
    oldJid: string,
    newJid: string,
  ): Promise<{ oldJid: string; newJid: string; branch: ChatBranchRecord }> {
    return this.branchManager.renameChatJid(oldJid, newJid);
  }

  async restoreChatBranch(
    chatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    return this.branchManager.restoreChatBranch(chatJid, options);
  }

  async permanentPurgeChatBranch(
    chatJid: string,
  ): Promise<{ branch: ChatBranchRecord; removedSessionArtifacts: string[] }> {
    return this.branchManager.permanentPurgeChatBranch(chatJid);
  }

  async createForkedChatBranch(
    sourceChatJid: string,
    options: { agentName?: string | null } = {},
  ): Promise<ChatBranchRecord> {
    return this.branchManager.createForkedChatBranch(sourceChatJid, options);
  }

  async createRootChatSession(agentName: string): Promise<ChatBranchRecord> {
    return this.branchManager.createRootChatSession(agentName);
  }

  listActiveChats(): ActiveChatAgent[] {
    return this.branchManager.listActiveChats();
  }

  listKnownChats(
    rootChatJid?: string | null,
    options?: { includeArchived?: boolean }
  ): ActiveChatAgent[] {
    return this.branchManager.listKnownChats(rootChatJid, options);
  }

  getMemoryInstrumentationSnapshot(): AgentPoolMemoryInstrumentationSnapshot {
    return {
      cachedMainSessions: this.pool.size,
      cachedSideSessions: this.sidePool.size,
      activeForkBaseLeaves: this.activeForkBaseLeafByChat.size,
      activeChats: this.branchManager.listActiveChats().length,
      sessionManager: this.sessionManager.getInstrumentationSnapshot(),
      recovery: { ...this.recoveryStats },
    };
  }

  findActiveChatByAgentName(agentName: string): ActiveChatAgent | null {
    return this.branchManager.findActiveChatByAgentName(agentName);
  }

  findChatByAgentName(agentName: string): { chat_jid: string; agent_name: string } | null {
    return this.branchManager.findChatByAgentName(agentName);
  }

  getAgentHandleForChat(chatJid: string): string {
    return this.branchManager.getAgentHandleForChat(chatJid);
  }

  async queueStreamingMessage(
    chatJid: string,
    text: string,
    behavior: "steer" | "followUp"
  ): Promise<{ queued: boolean; error?: string }> {
    return this.runtimeFacade.queueStreamingMessage(chatJid, text, behavior);
  }

  /** Remove one queued follow-up message (first content match) from an active session queue. */
  async removeQueuedFollowupMessage(chatJid: string, queuedContent?: string): Promise<boolean> {
    return this.runtimeFacade.removeQueuedFollowupMessage(chatJid, queuedContent);
  }

  /** Execute a raw slash command in the AgentSession (extension commands). */
  async applySlashCommand(chatJid: string, rawText: string): Promise<AgentControlResult> {
    return this.runtimeFacade.applySlashCommand(chatJid, rawText);
  }

  getSshConfig(chatJid: string): SshConfig | null {
    return getSshConfig(chatJid);
  }

  async setSshConfig(
    chatJid: string,
    config: Omit<SshConfig, "chat_jid" | "created_at" | "updated_at" | "last_used_at">,
  ): Promise<SshConfigSetResult> {
    const apply_timing: SshConfigApplyTiming = hasLiveChatSshSession(chatJid) ? "immediate" : "next_session";
    if (apply_timing === "immediate") {
      await applyLiveSshConfig(chatJid, resolveSshCoreConfigFromChatConfig(config));
    }
    const next = upsertSshConfig({ chat_jid: chatJid, ...config });
    return { config: next, apply_timing };
  }

  async clearSshConfig(chatJid: string): Promise<SshConfigClearResult> {
    const apply_timing: SshConfigApplyTiming = hasLiveChatSshSession(chatJid) ? "immediate" : "next_session";
    const deleted = deleteSshConfig(chatJid);
    if (apply_timing === "immediate") {
      await clearLiveSshConfig(chatJid);
    }
    return { deleted, apply_timing };
  }

  /** Gracefully shut down all sessions. */
  async shutdown(): Promise<void> {
    this.shuttingDown = true;
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    await this.sessionManager.shutdown();
  }

  /** Return an existing session for read-only introspection, or create one if needed. */
  async getSessionForIntrospection(chatJid: string): Promise<AgentSession> {
    return this.getOrCreate(chatJid);
  }

  // ── internal ────────────────────────────────────────────

  private async getOrCreateRuntime(chatJid: string): Promise<AgentSessionRuntime> {
    const runtime = await this.sessionManager.getOrCreate(chatJid);
    const pressure = this.getMemoryPressureMode();
    if (pressure.active && !this.shuttingDown) {
      this.sessionManager.evictIdle({
        mainIdleTtlMs: pressure.mainIdleTtlMs,
        sideIdleTtlMs: this.config.sideIdleTtlMs,
        mainSessionMaxSizeOverride: pressure.mainSessionMaxSizeOverride,
        protectedChatJids: [chatJid],
      });
    }
    return runtime;
  }

  private async getOrCreate(chatJid: string): Promise<AgentSession> {
    return (await this.getOrCreateRuntime(chatJid)).session;
  }

  private async getOrCreateSideRuntime(chatJid: string): Promise<AgentSessionRuntime> {
    return this.sessionManager.getOrCreateSide(chatJid);
  }

  private async syncSideSessionFromMain(mainSession: AgentSession, sideRuntime: AgentSessionRuntime): Promise<void> {
    return this.sessionManager.syncSideSessionFromMain(mainSession, sideRuntime);
  }

  private getMemoryPressureMode(): { active: boolean; mainIdleTtlMs: number; mainSessionMaxSizeOverride: number | undefined } {
    const rssBytes = process.memoryUsage.rss();
    const active = this.config.memoryPressureRssBytes > 0 && rssBytes >= this.config.memoryPressureRssBytes;
    if (this.memoryPressureActive !== active) {
      this.memoryPressureActive = active;
      log.info(active ? "Memory pressure mode enabled" : "Memory pressure mode cleared", {
        operation: "memory_pressure.mode_change",
        rssBytes,
        thresholdBytes: this.config.memoryPressureRssBytes,
        mainIdleTtlMs: active ? this.config.memoryPressureMainIdleTtlMs : this.config.mainIdleTtlMs,
        mainSessionPoolMaxSize: active ? this.config.memoryPressureMainSessionPoolMaxSize : this.config.mainSessionPoolMaxSize,
      });
    }

    return {
      active,
      mainIdleTtlMs: active ? Math.min(this.config.mainIdleTtlMs, this.config.memoryPressureMainIdleTtlMs) : this.config.mainIdleTtlMs,
      mainSessionMaxSizeOverride: active ? this.config.memoryPressureMainSessionPoolMaxSize : undefined,
    };
  }

  private evictIdle(): void {
    const pressure = this.getMemoryPressureMode();
    this.sessionManager.evictIdle({
      mainIdleTtlMs: pressure.mainIdleTtlMs,
      sideIdleTtlMs: this.config.sideIdleTtlMs,
      mainSessionMaxSizeOverride: pressure.mainSessionMaxSizeOverride,
    });
  }
}
