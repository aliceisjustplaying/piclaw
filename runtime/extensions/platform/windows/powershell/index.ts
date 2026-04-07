/**
 * Windows PowerShell extension.
 *
 * Registers a PowerShell-native shell tool on Windows and ensures it is the
 * active shell tool instead of the generic bash label.
 */
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { createBashToolDefinition } from "@mariozechner/pi-coding-agent";
import { createTrackedPowerShellOperations } from "../../../../src/tools/tracked-bash.js";
import { buildSubprocessExecutionHint } from "../../../../src/utils/process-spawn.js";

function replaceBashWithPowerShell(activeToolNames: string[]): string[] {
  const next = new Set<string>();
  let hadShellTool = false;

  for (const toolName of activeToolNames) {
    if (toolName === "bash") {
      next.add("powershell");
      hadShellTool = true;
      continue;
    }
    if (toolName === "powershell") {
      hadShellTool = true;
    }
    next.add(toolName);
  }

  if (!hadShellTool) {
    next.add("powershell");
  }

  next.delete("bash");
  return [...next];
}

export function buildPowerShellToolDescription(platform: NodeJS.Platform = process.platform): string {
  return `Execute a PowerShell command in the current working directory. Returns stdout and stderr. Output is truncated to the same limits as bash. Optionally provide a timeout in seconds. ${buildSubprocessExecutionHint(platform)}`;
}

export function buildPowerShellPromptSnippet(platform: NodeJS.Platform = process.platform): string {
  return `Execute PowerShell commands on Windows (pwsh.exe / powershell.exe) in the current working directory. ${buildSubprocessExecutionHint(platform)}`;
}

export function buildPowerShellHint(platform: NodeJS.Platform = process.platform): string {
  return [
    "## Windows shell execution",
    "On Windows, prefer the powershell tool over bash.",
    buildSubprocessExecutionHint(platform),
  ].join("\n");
}

export default function register(pi: ExtensionAPI) {
  if (process.platform !== "win32") return;

  const baseDefinition = createBashToolDefinition(process.cwd(), {
    operations: createTrackedPowerShellOperations(),
  });

  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${buildPowerShellHint()}`,
  }));

  pi.registerTool({
    ...baseDefinition,
    name: "powershell",
    label: "powershell",
    description: buildPowerShellToolDescription(),
    promptSnippet: buildPowerShellPromptSnippet(),
  });

  pi.on("session_start", async () => {
    pi.setActiveTools(replaceBashWithPowerShell(pi.getActiveTools()));
  });
}

export { replaceBashWithPowerShell };
