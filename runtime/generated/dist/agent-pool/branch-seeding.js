/**
 * agent-pool/branch-seeding.ts – Deferred branch seed persistence and replay.
 *
 * Lets branch creation stay lightweight by persisting enough fork context to
 * seed the target session later, either on first use or during background
 * prewarm.
 */
import { existsSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from "fs";
import { join } from "path";
import { seedRotatedSession } from "../session-rotation.js";
import { ensureSessionDir } from "./session.js";
const DEFERRED_BRANCH_SEED_FILE = ".branch-seed.json";
const CLAIMED_DEFERRED_BRANCH_SEED_FILE = ".branch-seed.claimed.json";
function createInvalidDeferredBranchSeedError(chatJid, reason, cause) {
    return new Error(`Invalid deferred branch seed for ${chatJid}: ${reason}`, cause ? { cause } : undefined);
}
export function normalizeThinkingLevel(value) {
    return value === "off" || value === "minimal" || value === "low" || value === "medium" || value === "high" || value === "xhigh"
        ? value
        : null;
}
function isAppendableAgentMessage(message) {
    if (!message || typeof message !== "object")
        return false;
    const role = message.role;
    return role === "user"
        || role === "assistant"
        || role === "system"
        || role === "tool"
        || role === "bashExecution"
        || role === "custom";
}
function getStableForkSeed(sourceSession, stableLeafId) {
    const branchEntries = stableLeafId === null
        ? []
        : (typeof sourceSession.sessionManager?.getBranch === "function"
            ? sourceSession.sessionManager.getBranch(stableLeafId)
            : []);
    let model = null;
    let thinkingLevel = null;
    for (const entry of branchEntries) {
        if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
            model = { provider: entry.provider, modelId: entry.modelId };
        }
        else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
            thinkingLevel = normalizeThinkingLevel(entry.thinkingLevel);
        }
        else if (entry?.type === "message" && entry.message?.role === "assistant" && typeof entry.message?.provider === "string" && typeof entry.message?.model === "string") {
            model = { provider: entry.message.provider, modelId: entry.message.model };
        }
    }
    return { branchEntries, model, thinkingLevel };
}
function cloneSeedValue(value) {
    if (value === null || value === undefined)
        return value;
    return JSON.parse(JSON.stringify(value));
}
export function createDeferredBranchSeed(sourceSession, options) {
    const stableSeed = options.sourceIsActive
        ? getStableForkSeed(sourceSession, options.stableLeafId)
        : null;
    const sourceContext = stableSeed
        ? null
        : sourceSession.sessionManager.buildSessionContext();
    const model = stableSeed?.model || sourceContext?.model || (sourceSession.model
        ? { provider: sourceSession.model.provider, modelId: sourceSession.model.id }
        : null);
    const thinkingLevel = normalizeThinkingLevel(stableSeed?.thinkingLevel || sourceContext?.thinkingLevel || sourceSession.thinkingLevel);
    return {
        version: 1,
        parentSession: sourceSession.sessionFile?.trim() || null,
        sessionName: options.sessionName?.trim() || null,
        model,
        thinkingLevel,
        mode: stableSeed ? "stable_branch" : "rotated_context",
        ...(stableSeed ? { branchEntries: cloneSeedValue(stableSeed.branchEntries) } : { context: cloneSeedValue(sourceContext ?? undefined) }),
    };
}
function seedSessionManagerFromBranchEntries(sessionManager, branchEntries, fallback) {
    if (!Array.isArray(branchEntries) || branchEntries.length === 0) {
        if (fallback.sessionName?.trim()) {
            sessionManager.appendSessionInfo(fallback.sessionName.trim());
        }
        if (fallback.model) {
            sessionManager.appendModelChange(fallback.model.provider, fallback.model.modelId);
        }
        return;
    }
    const sourceToNewId = new Map();
    for (const entry of branchEntries) {
        let newId = null;
        if (entry?.type === "message" && isAppendableAgentMessage(entry.message)) {
            newId = sessionManager.appendMessage(entry.message);
        }
        else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
            newId = sessionManager.appendThinkingLevelChange(entry.thinkingLevel);
        }
        else if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
            newId = sessionManager.appendModelChange(entry.provider, entry.modelId);
        }
        else if (entry?.type === "compaction" && typeof entry.summary === "string") {
            const firstKeptEntryId = sourceToNewId.get(entry.firstKeptEntryId)
                ?? sourceToNewId.get(branchEntries[0]?.id ?? "")
                ?? "rotated-context";
            newId = sessionManager.appendCompaction(entry.summary, firstKeptEntryId, entry.tokensBefore ?? 0, entry.details, entry.fromHook);
        }
        else if (entry?.type === "session_info" && typeof entry.name === "string" && entry.name.trim()) {
            newId = sessionManager.appendSessionInfo(entry.name.trim());
        }
        else if (entry?.type === "custom_message" && typeof entry.customType === "string") {
            newId = sessionManager.appendCustomMessageEntry(entry.customType, entry.content, entry.display, entry.details);
        }
        else if (entry?.type === "custom_entry" && typeof entry.customType === "string") {
            newId = sessionManager.appendCustomEntry(entry.customType, entry.data);
        }
        if (entry?.id && newId) {
            sourceToNewId.set(entry.id, newId);
        }
    }
}
export function seedSessionManagerFromDeferredBranchSeed(sessionManager, seed) {
    if (seed.mode === "stable_branch") {
        seedSessionManagerFromBranchEntries(sessionManager, seed.branchEntries ?? [], {
            sessionName: seed.sessionName,
            model: seed.model,
        });
        return;
    }
    if (seed.context) {
        seedRotatedSession(sessionManager, seed.context, {
            sessionName: seed.sessionName || undefined,
            model: seed.model,
        });
        return;
    }
    if (seed.sessionName?.trim()) {
        sessionManager.appendSessionInfo(seed.sessionName.trim());
    }
    if (seed.model) {
        sessionManager.appendModelChange(seed.model.provider, seed.model.modelId);
    }
}
function getDeferredBranchSeedPath(chatJid) {
    return join(ensureSessionDir(chatJid), DEFERRED_BRANCH_SEED_FILE);
}
function getClaimedDeferredBranchSeedPath(chatJid) {
    return join(ensureSessionDir(chatJid), CLAIMED_DEFERRED_BRANCH_SEED_FILE);
}
function readDeferredBranchSeedFromPath(chatJid, path) {
    if (!existsSync(path))
        return null;
    let parsed;
    try {
        parsed = JSON.parse(readFileSync(path, "utf8"));
    }
    catch (error) {
        throw createInvalidDeferredBranchSeedError(chatJid, "malformed JSON", error);
    }
    if (!parsed || typeof parsed !== "object") {
        throw createInvalidDeferredBranchSeedError(chatJid, "seed payload must be an object");
    }
    const seed = parsed;
    if (seed.version !== 1) {
        throw createInvalidDeferredBranchSeedError(chatJid, "unsupported version");
    }
    if (seed.mode !== "stable_branch" && seed.mode !== "rotated_context") {
        throw createInvalidDeferredBranchSeedError(chatJid, "unsupported seed mode");
    }
    return seed;
}
function getExistingDeferredBranchSeedPath(chatJid) {
    const primaryPath = getDeferredBranchSeedPath(chatJid);
    if (existsSync(primaryPath))
        return primaryPath;
    const claimedPath = getClaimedDeferredBranchSeedPath(chatJid);
    return existsSync(claimedPath) ? claimedPath : null;
}
export function hasDeferredBranchSeed(chatJid) {
    return getExistingDeferredBranchSeedPath(chatJid) !== null;
}
export function getDeferredBranchSeedFingerprint(chatJid) {
    const path = getExistingDeferredBranchSeedPath(chatJid);
    if (!path)
        return null;
    try {
        const stat = statSync(path);
        return `${path}:${stat.size}:${stat.mtimeMs}`;
    }
    catch {
        return null;
    }
}
export function writeDeferredBranchSeed(chatJid, seed) {
    const targetPath = getDeferredBranchSeedPath(chatJid);
    const tempPath = `${targetPath}.tmp-${process.pid}-${Date.now()}`;
    try {
        writeFileSync(tempPath, JSON.stringify(seed), "utf8");
        renameSync(tempPath, targetPath);
        rmSync(getClaimedDeferredBranchSeedPath(chatJid), { force: true });
    }
    catch (error) {
        rmSync(tempPath, { force: true });
        throw error;
    }
}
export function readDeferredBranchSeed(chatJid) {
    const path = getExistingDeferredBranchSeedPath(chatJid);
    if (!path)
        return null;
    return readDeferredBranchSeedFromPath(chatJid, path);
}
export function claimDeferredBranchSeed(chatJid) {
    const primaryPath = getDeferredBranchSeedPath(chatJid);
    const claimedPath = getClaimedDeferredBranchSeedPath(chatJid);
    if (existsSync(primaryPath)) {
        renameSync(primaryPath, claimedPath);
    }
    if (!existsSync(claimedPath))
        return null;
    return readDeferredBranchSeedFromPath(chatJid, claimedPath);
}
export function restoreClaimedDeferredBranchSeed(chatJid) {
    const primaryPath = getDeferredBranchSeedPath(chatJid);
    const claimedPath = getClaimedDeferredBranchSeedPath(chatJid);
    if (!existsSync(claimedPath))
        return;
    if (existsSync(primaryPath)) {
        rmSync(claimedPath, { force: true });
        return;
    }
    renameSync(claimedPath, primaryPath);
}
export function finalizeClaimedDeferredBranchSeed(chatJid) {
    rmSync(getClaimedDeferredBranchSeedPath(chatJid), { force: true });
}
export function clearDeferredBranchSeed(chatJid) {
    rmSync(getDeferredBranchSeedPath(chatJid), { force: true });
    rmSync(getClaimedDeferredBranchSeedPath(chatJid), { force: true });
}
