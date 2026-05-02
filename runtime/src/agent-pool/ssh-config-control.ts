import {
  type SshConfig,
  type SshConfigApplyTiming,
  type SshConfigClearResult,
  type SshConfigSetResult,
  deleteSshConfig,
  getSshConfig,
  upsertSshConfig,
} from "../db.js";
import { applyLiveSshConfig, clearLiveSshConfig, hasLiveChatSshSession, resolveSshCoreConfigFromChatConfig } from "../extensions/ssh-core.js";

export function getPoolSshConfig(chatJid: string): SshConfig | null {
  return getSshConfig(chatJid);
}

export async function setPoolSshConfig(
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

export async function clearPoolSshConfig(chatJid: string): Promise<SshConfigClearResult> {
  const apply_timing: SshConfigApplyTiming = hasLiveChatSshSession(chatJid) ? "immediate" : "next_session";
  const deleted = deleteSshConfig(chatJid);
  if (apply_timing === "immediate") {
    await clearLiveSshConfig(chatJid);
  }
  return { deleted, apply_timing };
}
