export {
  setPortainerToolHandlers,
  type PortainerRequestResult,
  type PortainerToolHandlers,
} from "../../../src/extensions/portainer.ts";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

import { portainerTool } from "../../../src/extensions/portainer.ts";

const baseDir = dirname(fileURLToPath(import.meta.url));

export default function portainerPackagedExtension(pi: ExtensionAPI) {
  pi.on("resources_discover", () => ({
    skillPaths: [
      join(baseDir, "skills", "portainer-container-compare-chart", "SKILL.md"),
    ],
  }));

  return portainerTool(pi);
}
