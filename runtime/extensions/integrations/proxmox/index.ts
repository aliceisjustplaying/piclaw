export {
  setProxmoxToolHandlers,
  type ProxmoxRequestResult,
  type ProxmoxToolHandlers,
} from "../../../src/extensions/proxmox.ts";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

import { proxmoxTool } from "../../../src/extensions/proxmox.ts";

const baseDir = dirname(fileURLToPath(import.meta.url));

export default function proxmoxPackagedExtension(pi: ExtensionAPI) {
  pi.on("resources_discover", () => ({
    skillPaths: [
      join(baseDir, "skills", "proxmox-guest-compare-chart", "SKILL.md"),
    ],
  }));

  return proxmoxTool(pi);
}
