/**
 * agent-pool/branch-manager.ts – Branch identity, listing, and fork lifecycle helpers.
 *
 * Keeps chat-branch registration and branch/session coordination out of the
 * top-level AgentPool coordinator while preserving the existing branch semantics.
 */
import { getIdentityConfig } from "../core/config.js";
import { archiveChatBranch, ensureChatBranch, getChatBranchByAgentName, getChatBranchByChatJid, listChatBranches, renameChatBranchIdentity, restoreChatBranchIdentity, storeChatMetadata, } from "../db.js";
import { createUuid } from "../utils/ids.js";
import { createDeferredBranchSeed, writeDeferredBranchSeed } from "./branch-seeding.js";
function normalizeAgentHandlePart(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
}
function deriveAgentHandle(chatJid, sessionName) {
    const sessionHandle = sessionName ? normalizeAgentHandlePart(sessionName) : "";
    if (sessionHandle)
        return sessionHandle;
    const jidTail = chatJid.split(/[:/]/).filter(Boolean).pop() || chatJid;
    if (jidTail === "default") {
        const configHandle = normalizeAgentHandlePart(getIdentityConfig().assistantName || "");
        if (configHandle)
            return configHandle;
    }
    const jidHandle = normalizeAgentHandlePart(jidTail);
    if (jidHandle)
        return jidHandle;
    return "agent";
}
function buildForkedChatJid(sourceChatJid) {
    const root = sourceChatJid.startsWith("web:") ? sourceChatJid : `web:${sourceChatJid}`;
    return `${root}:branch:${createUuid("chat").split("-").pop()}`;
}
function createVolatileBranchRecord(chatJid, session) {
    return {
        branch_id: `volatile:${chatJid}`,
        chat_jid: chatJid,
        root_chat_jid: chatJid,
        parent_branch_id: null,
        agent_name: deriveAgentHandle(chatJid, session?.sessionName?.trim() || null),
        display_name: null,
        created_at: new Date(0).toISOString(),
        updated_at: new Date(0).toISOString(),
        archived_at: null,
    };
}
function isSessionActive(session) {
    return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
}
/**
 * Coordinates chat-branch registration, branch lookup, and fork/prune behavior.
 */
export class AgentBranchManager {
    options;
    constructor(options) {
        this.options = options;
    }
    ensureBranchRegistration(chatJid, session) {
        try {
            const existing = getChatBranchByChatJid(chatJid);
            if (existing)
                return existing;
            const created = ensureChatBranch({
                chat_jid: chatJid,
                agent_name: deriveAgentHandle(chatJid, session?.sessionName?.trim() || null),
            });
            storeChatMetadata(chatJid, new Date().toISOString(), created.agent_name || chatJid);
            return created;
        }
        catch (err) {
            this.options.onWarn?.("Falling back to volatile branch record", {
                operation: "ensure_branch_registration",
                chatJid,
                err,
            });
            return createVolatileBranchRecord(chatJid, session);
        }
    }
    async renameChatBranch(chatJid, options = {}) {
        const session = this.options.pool.get(chatJid)?.runtime.session ?? null;
        this.ensureBranchRegistration(chatJid, session);
        const nextAgentName = options.agentName !== undefined ? options.agentName : undefined;
        const renamed = renameChatBranchIdentity({
            chat_jid: chatJid,
            agent_name: nextAgentName,
        });
        if (session) {
            try {
                session.setSessionName(renamed.agent_name);
            }
            catch (err) {
                this.options.onWarn?.("Failed to sync renamed branch session name", {
                    operation: "rename_chat_branch.sync_session_name",
                    chatJid,
                    err,
                });
            }
        }
        return renamed;
    }
    async pruneChatBranch(chatJid) {
        const session = this.options.pool.get(chatJid)?.runtime.session ?? null;
        const existing = this.ensureBranchRegistration(chatJid, session);
        if (existing.chat_jid === existing.root_chat_jid) {
            throw new Error("Cannot prune the root chat branch.");
        }
        if (this.options.isActive(chatJid)) {
            throw new Error("Cannot prune a branch while it is active.");
        }
        const archived = archiveChatBranch(chatJid);
        const mainEntry = this.options.pool.get(chatJid);
        if (mainEntry) {
            try {
                await mainEntry.runtime.dispose();
            }
            catch (err) {
                this.options.onWarn?.("Failed to dispose pruned session", {
                    operation: "prune_chat_branch.dispose_main",
                    chatJid,
                    err,
                });
            }
            this.options.pool.delete(chatJid);
        }
        const sideEntry = this.options.sidePool.get(chatJid);
        if (sideEntry) {
            try {
                await sideEntry.runtime.dispose();
            }
            catch (err) {
                this.options.onWarn?.("Failed to dispose pruned side session", {
                    operation: "prune_chat_branch.dispose_side",
                    chatJid,
                    err,
                });
            }
            this.options.sidePool.delete(chatJid);
        }
        this.options.activeForkBaseLeafByChat.delete(chatJid);
        // Cancel any queued prewarm so a background realization does not
        // materialize a blank runtime (or realize the deferred seed) for an
        // archived chat between prune and restore.
        this.options.cancelSessionWarmup?.(chatJid);
        // NOTE: do not clearDeferredBranchSeed here — .branch-seed.json is the
        // only persisted copy of the forked context until the session is realized,
        // and a subsequent restoreChatBranch() must be able to pick it back up.
        return archived;
    }
    async restoreChatBranch(chatJid, options = {}) {
        const restored = restoreChatBranchIdentity({
            chat_jid: chatJid,
            ...(options.agentName !== undefined ? { agent_name: options.agentName } : {}),
        });
        try {
            await this.options.getOrCreateRuntime(chatJid);
        }
        catch (err) {
            this.options.onWarn?.("Restored branch but failed to warm its session", {
                operation: "restore_chat_branch.warm_session",
                chatJid,
                err,
            });
        }
        return restored;
    }
    async createForkedChatBranch(sourceChatJid, options = {}) {
        const sourceSession = (await this.options.getOrCreateRuntime(sourceChatJid)).session;
        const sourceIsActive = isSessionActive(sourceSession);
        const stableForkLeafId = this.options.activeForkBaseLeafByChat.has(sourceChatJid)
            ? this.options.activeForkBaseLeafByChat.get(sourceChatJid) ?? null
            : null;
        if (sourceIsActive && !this.options.activeForkBaseLeafByChat.has(sourceChatJid)) {
            throw new Error("Cannot fork this branch yet because no stable turn boundary is available.");
        }
        const sourceBranch = this.ensureBranchRegistration(sourceChatJid, sourceSession);
        const nextChatJid = buildForkedChatJid(sourceChatJid);
        const requestedAgentName = typeof options.agentName === "string" && options.agentName.trim()
            ? options.agentName.trim()
            : sourceBranch.agent_name;
        storeChatMetadata(nextChatJid, new Date().toISOString(), requestedAgentName || nextChatJid);
        const nextBranch = ensureChatBranch({
            chat_jid: nextChatJid,
            root_chat_jid: sourceBranch.root_chat_jid || sourceBranch.chat_jid,
            parent_branch_id: sourceBranch.branch_id,
            agent_name: requestedAgentName,
        });
        writeDeferredBranchSeed(nextChatJid, createDeferredBranchSeed(sourceSession, {
            stableLeafId: stableForkLeafId,
            sessionName: nextBranch.agent_name,
            sourceIsActive,
        }));
        this.options.scheduleSessionWarmup?.(nextChatJid);
        return ensureChatBranch({
            chat_jid: nextChatJid,
            root_chat_jid: nextBranch.root_chat_jid,
            parent_branch_id: nextBranch.parent_branch_id,
            agent_name: nextBranch.agent_name,
        });
    }
    listActiveChats() {
        const chats = [...this.options.pool.entries()]
            .flatMap(([chatJid, entry]) => {
            const session = entry.runtime.session;
            const branch = this.ensureBranchRegistration(chatJid, session);
            if (branch.archived_at)
                return [];
            return [{
                    branch_id: branch.branch_id,
                    chat_jid: chatJid,
                    root_chat_jid: branch.root_chat_jid,
                    parent_branch_id: branch.parent_branch_id,
                    agent_name: branch.agent_name,
                    archived_at: branch.archived_at ?? null,
                    session_id: session.sessionId,
                    session_name: session.sessionName?.trim() || null,
                    model: session.model ? `${session.model.provider}/${session.model.id}` : null,
                    is_active: isSessionActive(session),
                    has_side_session: this.options.sidePool.has(chatJid),
                }];
        })
            .sort((a, b) => {
            if (a.is_active !== b.is_active)
                return a.is_active ? -1 : 1;
            return a.chat_jid.localeCompare(b.chat_jid);
        });
        return chats;
    }
    listKnownChats(rootChatJid, options) {
        const activeChats = this.listActiveChats();
        const activeByChat = new Map(activeChats.map((chat) => [chat.chat_jid, chat]));
        try {
            return listChatBranches(rootChatJid || null, { includeArchived: Boolean(options?.includeArchived) })
                .map((branch) => {
                const active = activeByChat.get(branch.chat_jid);
                return {
                    branch_id: branch.branch_id,
                    chat_jid: branch.chat_jid,
                    root_chat_jid: branch.root_chat_jid,
                    parent_branch_id: branch.parent_branch_id,
                    agent_name: branch.agent_name,
                    archived_at: branch.archived_at ?? null,
                    session_id: active?.session_id ?? null,
                    session_name: active?.session_name ?? null,
                    model: active?.model ?? null,
                    is_active: active?.is_active ?? false,
                    has_side_session: active?.has_side_session ?? false,
                };
            })
                .sort((a, b) => {
                if (a.chat_jid === rootChatJid && b.chat_jid !== rootChatJid)
                    return -1;
                if (b.chat_jid === rootChatJid && a.chat_jid !== rootChatJid)
                    return 1;
                if (Boolean(a.archived_at) !== Boolean(b.archived_at))
                    return a.archived_at ? 1 : -1;
                if (a.is_active !== b.is_active)
                    return a.is_active ? -1 : 1;
                return a.chat_jid.localeCompare(b.chat_jid);
            });
        }
        catch (err) {
            this.options.onWarn?.("Failed to list known chats; falling back to active sessions only", {
                operation: "list_known_chats",
                rootChatJid: rootChatJid || null,
                err,
            });
            return activeChats;
        }
    }
    findActiveChatByAgentName(agentName) {
        const normalized = normalizeAgentHandlePart(agentName);
        if (!normalized)
            return null;
        return this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
    }
    findChatByAgentName(agentName) {
        const normalized = normalizeAgentHandlePart(agentName);
        if (!normalized)
            return null;
        try {
            const branch = getChatBranchByAgentName(normalized);
            if (branch)
                return { chat_jid: branch.chat_jid, agent_name: branch.agent_name };
        }
        catch (err) {
            this.options.onWarn?.("Failed to look up agent handle; falling back to active sessions", {
                operation: "find_chat_by_agent_name",
                agentHandle: normalized,
                err,
            });
        }
        const active = this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
        return active ? { chat_jid: active.chat_jid, agent_name: active.agent_name } : null;
    }
    getAgentHandleForChat(chatJid) {
        try {
            return getChatBranchByChatJid(chatJid)?.agent_name ?? deriveAgentHandle(chatJid);
        }
        catch (err) {
            this.options.onWarn?.("Failed to read stored handle; deriving one from chat id instead", {
                operation: "get_agent_handle_for_chat",
                chatJid,
                err,
            });
            return deriveAgentHandle(chatJid);
        }
    }
}
