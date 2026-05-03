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
import { SESSIONS_DIR, WORKSPACE_DIR, getAgentBackendConfig, getEagerWarmupConfig, type AgentBackend } from "./core/config.js";
import { getChatChannel, getChatJid } from "./core/chat-context.js";
import { createTrackedBashOperations } from "./tools/tracked-bash.js";
import {
  type AgentOutput,
  type AgentPoolOptions,
  type RunAgentOptions,
  type SidePromptOptions,
  type SidePromptResult,
} from "./agent-pool/contracts.js";
import { runSidePrompt as runSidePromptInternal } from "./agent-pool/side-prompt-runner.js";
import { runAgentPrompt } from "./agent-pool/run-agent-orchestrator.js";
import { withAgentChatRunLock } from "./agent-pool/chat-run-lock.js";
import { applyNativeBackendControlCommand } from "./agent-pool/native-backend-control.js";
import { applyProactiveControlCommand } from "./agent-pool/proactive-control.js";
import {
  abortCodexAppServerChat,
  hasCodexAppServerThread,
} from "./agent-pool/codex-app-server-backend.js";
import {
  abortClaudeAgentSdkChat,
} from "./agent-pool/claude-agent-sdk-backend.js";
import { type AvailableModelsResult } from "./agent-pool/runtime-facade.js";
import { createAgentPoolServices, type AgentPoolServices } from "./agent-pool/service-factory.js";
import { type AgentSessionManagerInstrumentationSnapshot, type PoolEntry } from "./agent-pool/session-manager.js";
import { loadAgentPoolConfig } from "./agent-pool/config.js";
import { applyPendingBackendHandoff, captureBackendHandoffSummary } from "./agent-pool/backend-handoff-control.js";
import {
  bindAgentPoolFacadeMethods,
  type AgentPoolBoundBranchFacade,
  type AgentPoolBoundRuntimeFacade,
} from "./agent-pool/facade-bindings.js";
import { getNativeAvailableModels, getNativeContextUsageForChat, getNativeCurrentModelLabel } from "./agent-pool/native-model-status.js";
import { clearPoolSshConfig, getPoolSshConfig, setPoolSshConfig } from "./agent-pool/ssh-config-control.js";
import { scheduleRecentChatWarmup as scheduleRecentChatWarmupInternal } from "./agent-pool/warmup-scheduler.js";
import {
  getChatAgentBackend,
  getPendingBackendHandoff,
  markBackendHandoffUsed,
} from "./agent-pool/backend-state.js";
import {
  type ChatBranchRecord,
  type MergeChatBranchIntoParentResult,
  type SshConfig,
  type SshConfigClearResult,
  type SshConfigSetResult,
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
import { getKeychainEntry } from "./secure/keychain.js";
import { addLogSink, createLogger, removeLogSink } from "./utils/logger.js";

const log = createLogger("agent-pool");
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

export interface AgentPool extends AgentPoolBoundBranchFacade, AgentPoolBoundRuntimeFacade {}

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
  private recentWarmupCooldownByChat = new Map<string, number>();
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
    bindAgentPoolFacadeMethods(this, this.branchManager, this.runtimeFacade);
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
    const output = await withAgentChatRunLock(chatJid, async () => {
      const backend = getChatAgentBackend(chatJid);
      const pendingHandoff = options.skipBackendHandoff ? null : getPendingBackendHandoff(chatJid, backend);
      const { effectivePrompt, runOptions } = applyPendingBackendHandoff(prompt, options, pendingHandoff);
      const nextOutput = await runAgentPrompt(effectivePrompt, chatJid, runOptions, {
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
      if (pendingHandoff && nextOutput.status === "success") markBackendHandoffUsed(chatJid);
      return nextOutput;
    });

    const recovery = output.recovery;
    if (recovery) {
      this.recoveryStats.attemptsTotal += Math.max(0, recovery.attemptsUsed || 0);
      if (recovery.recovered) this.recoveryStats.recoveredRuns += 1;
      if (recovery.exhausted) this.recoveryStats.exhaustedRuns += 1;
    }
    return output;
  }

  hasActiveCodexThread(chatJid: string): boolean {
    return hasCodexAppServerThread(chatJid);
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

    if (command.type === "proactive") return withAgentChatRunLock(chatJid, () => applyProactiveControlCommand(chatJid, command));
    const nativeResult = await applyNativeBackendControlCommand(chatJid, command, {
      getContextUsageForChat: (nextChatJid) => this.getContextUsageForChat(nextChatJid),
      abortBackendTurnForSwitch: (nextChatJid, backend) => this.abortBackendTurnForSwitch(nextChatJid, backend),
      captureBackendHandoff: (nextChatJid, from, to) => this.captureBackendHandoff(nextChatJid, from, to),
    });
    if (nativeResult) return nativeResult;
    return this.runtimeFacade.applyControlCommand(chatJid, command);
  }

  private async captureBackendHandoff(chatJid: string, from: AgentBackend, to: AgentBackend): Promise<boolean> {
    return captureBackendHandoffSummary(
      chatJid,
      from,
      to,
      (handoffPrompt, nextChatJid, options) => this.runAgent(handoffPrompt, nextChatJid, options),
      (message, details) => log.warn(message, details),
    );
  }

  private async abortBackendTurnForSwitch(chatJid: string, backend: AgentBackend): Promise<void> {
    try {
      if (backend === "codex-app-server") {
        await abortCodexAppServerChat(chatJid);
        return;
      }
      if (backend === "claude-agent-sdk") {
        await abortClaudeAgentSdkChat(chatJid);
        return;
      }
      const runtime = this.pool.get(chatJid)?.runtime;
      await runtime?.session.abort?.();
    } catch (error) {
      log.warn("Failed to abort active backend turn before switch", {
        operation: "agent_backend.abort_before_switch_failed",
        chatJid,
        backend,
        err: error,
      });
    }
  }

  async getCurrentModelLabel(chatJid: string): Promise<string | null> {
    return getNativeCurrentModelLabel(chatJid, this.runtimeFacade);
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
    return getNativeAvailableModels(chatJid, this.authStorage, this.runtimeFacade);
  }

  /** Return the current context token usage for a chat session, or null if unknown. */
  async getContextUsageForChat(chatJid: string): Promise<{
    tokens: number | null;
    contextWindow: number;
    percent: number | null;
  } | null> {
    return await getNativeContextUsageForChat(chatJid, this.runtimeFacade);
  }

  scheduleRecentChatWarmup(options: { limit?: number; excludeChatJids?: string[] } = {}): string[] {
    return scheduleRecentChatWarmupInternal(options, {
      pool: this.pool,
      sessionManager: this.sessionManager,
      shuttingDown: this.shuttingDown,
      eagerWarmup: this.config.eagerWarmup,
      cooldownByChat: this.recentWarmupCooldownByChat,
    });
  }

  scheduleChatWarmup(chatJid: string, options: { priority?: boolean } = {}): boolean {
    return this.sessionManager.prewarm(chatJid, options);
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

  getSshConfig(chatJid: string): SshConfig | null {
    return getPoolSshConfig(chatJid);
  }

  async setSshConfig(
    chatJid: string,
    config: Omit<SshConfig, "chat_jid" | "created_at" | "updated_at" | "last_used_at">,
  ): Promise<SshConfigSetResult> {
    return setPoolSshConfig(chatJid, config);
  }

  async clearSshConfig(chatJid: string): Promise<SshConfigClearResult> {
    return clearPoolSshConfig(chatJid);
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
