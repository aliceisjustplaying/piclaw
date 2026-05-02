import { type AgentPoolServices } from "./service-factory.js";

type BranchManager = AgentPoolServices["branchManager"];
type RuntimeFacade = AgentPoolServices["runtimeFacade"];

type BranchFacadeTarget = Pick<
  BranchManager,
  | "renameChatBranch"
  | "pruneChatBranch"
  | "renameChatJid"
  | "restoreChatBranch"
  | "permanentPurgeChatBranch"
  | "createForkedChatBranch"
  | "listActiveChats"
  | "listKnownChats"
  | "findActiveChatByAgentName"
  | "findChatByAgentName"
  | "getAgentHandleForChat"
>;

type RuntimeFacadeTarget = Pick<
  RuntimeFacade,
  | "getSessionTreeForChat"
  | "saveSessionPosition"
  | "restoreSessionPosition"
  | "hasProviderModels"
  | "registerModelProvider"
  | "resolveModelInput"
  | "isStreaming"
  | "isActive"
  | "queueStreamingMessage"
  | "removeQueuedFollowupMessage"
  | "applySlashCommand"
>;

export function bindAgentPoolFacadeMethods(
  target: BranchFacadeTarget & RuntimeFacadeTarget,
  branchManager: BranchManager,
  runtimeFacade: RuntimeFacade,
): void {
  target.renameChatBranch = branchManager.renameChatBranch.bind(branchManager);
  target.pruneChatBranch = branchManager.pruneChatBranch.bind(branchManager);
  target.renameChatJid = branchManager.renameChatJid.bind(branchManager);
  target.restoreChatBranch = branchManager.restoreChatBranch.bind(branchManager);
  target.permanentPurgeChatBranch = branchManager.permanentPurgeChatBranch.bind(branchManager);
  target.createForkedChatBranch = branchManager.createForkedChatBranch.bind(branchManager);
  target.listActiveChats = branchManager.listActiveChats.bind(branchManager);
  target.listKnownChats = branchManager.listKnownChats.bind(branchManager);
  target.findActiveChatByAgentName = branchManager.findActiveChatByAgentName.bind(branchManager);
  target.findChatByAgentName = branchManager.findChatByAgentName.bind(branchManager);
  target.getAgentHandleForChat = branchManager.getAgentHandleForChat.bind(branchManager);
  target.getSessionTreeForChat = runtimeFacade.getSessionTreeForChat.bind(runtimeFacade);
  target.saveSessionPosition = runtimeFacade.saveSessionPosition.bind(runtimeFacade);
  target.restoreSessionPosition = runtimeFacade.restoreSessionPosition.bind(runtimeFacade);
  target.hasProviderModels = runtimeFacade.hasProviderModels.bind(runtimeFacade);
  target.registerModelProvider = runtimeFacade.registerModelProvider.bind(runtimeFacade);
  target.resolveModelInput = runtimeFacade.resolveModelInput.bind(runtimeFacade);
  target.isStreaming = runtimeFacade.isStreaming.bind(runtimeFacade);
  target.isActive = runtimeFacade.isActive.bind(runtimeFacade);
  target.queueStreamingMessage = runtimeFacade.queueStreamingMessage.bind(runtimeFacade);
  target.removeQueuedFollowupMessage = runtimeFacade.removeQueuedFollowupMessage.bind(runtimeFacade);
  target.applySlashCommand = runtimeFacade.applySlashCommand.bind(runtimeFacade);
}

export type AgentPoolBoundBranchFacade = BranchFacadeTarget;
export type AgentPoolBoundRuntimeFacade = RuntimeFacadeTarget;
