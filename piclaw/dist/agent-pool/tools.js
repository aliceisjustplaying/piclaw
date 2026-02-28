import { createBashTool, createEditTool, createReadTool, createWriteTool, } from "@mariozechner/pi-coding-agent";
import { createAttachmentTool } from "./attachments.js";
import { createMessageSearchTool } from "./message-search.js";
import { createModelSwitchTool } from "./model-switch.js";
import { createThinkingSwitchTool } from "./thinking-switch.js";
export function createSessionTools(workspaceDir, bashOperations, chatJid, attachments, modelRegistry, getSession) {
    const tools = [
        createReadTool(workspaceDir),
        createBashTool(workspaceDir, { operations: bashOperations }),
        createEditTool(workspaceDir),
        createWriteTool(workspaceDir),
    ];
    const customTools = [
        createAttachmentTool(chatJid, attachments),
        createMessageSearchTool(chatJid),
        createModelSwitchTool(getSession, modelRegistry),
        createThinkingSwitchTool(getSession),
    ];
    return { tools, customTools };
}
