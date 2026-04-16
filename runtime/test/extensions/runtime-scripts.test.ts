import fs from "node:fs";
import path from "node:path";
import { describe, expect, test } from "bun:test";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("runtime-scripts extension", () => {
  test("parses SCRIPT_JDOC JSON blocks from source", async () => {
    const { parseScriptJDocFromSource } = await import("../../src/extensions/runtime-scripts.js");
    const source = `#!/usr/bin/env bun
/**
 * SCRIPT_JDOC:
 * {
 *   "summary": "Check stale dist artifacts.",
 *   "aliases": ["repo audit"],
 *   "domains": ["repo", "runtime"],
 *   "verbs": ["check"],
 *   "nouns": ["dist"],
 *   "keywords": ["stale dist"],
 *   "examples": ["check stale dist in the repo"],
 *   "kind": "read-only",
 *   "weight": "standard",
 *   "role": "entrypoint"
 * }
 */
console.log("ok");\n`;
    const metadata = parseScriptJDocFromSource(source);
    expect(metadata?.summary).toBe("Check stale dist artifacts.");
    expect(metadata?.aliases).toContain("repo audit");
    expect(metadata?.kind).toBe("read-only");
    expect(metadata?.role).toBe("entrypoint");
  });

  test("loads packaged skill and workspace script catalogs from the repo", async () => {
    const { loadScriptCatalogEntries } = await import("../../src/extensions/runtime-scripts.js");
    const entries = loadScriptCatalogEntries({ scope: "packaged", role: "all" });
    expect(entries.length).toBeGreaterThan(10);
    expect(entries.some((entry) => entry.displayPath.endsWith("runtime/skills/operator/token-chart/token-chart.ts"))).toBe(true);
    expect(entries.some((entry) => entry.displayPath.includes("runtime/scripts/check-stale-dist.ts"))).toBe(false);
    expect(entries.some((entry) => entry.displayPath.endsWith("render-proxmox-guest-compare.ts"))).toBe(true);
  });

  test("registers list_scripts and supports query + intent", async () => {
    const { runtimeScripts } = await import("../../src/extensions/runtime-scripts.js");
    const fake = createFakeExtensionApi({ allTools: [] });
    runtimeScripts(fake.api);

    const tool = fake.tools.get("list_scripts");
    expect(tool).toBeDefined();

    const filtered = await tool.execute("s1", { query: "token chart", scope: "packaged" });
    expect(filtered.content[0].text).toContain("Available scripts");
    expect(filtered.content[0].text).toContain("token-chart");

    const recommended = await tool.execute("s2", { intent: "generate token usage chart", scope: "packaged" });
    expect(recommended.content[0].text).toContain("Recommended scripts");
    expect(recommended.details.scripts[0].path).toContain("token-chart");
  });

  test("packaged script files all carry parseable SCRIPT_JDOC metadata", async () => {
    const { getScriptRoots, parseScriptJDocFromSource } = await import("../../src/extensions/runtime-scripts.js");
    const missing: string[] = [];
    const packagedRoots = getScriptRoots().filter((root) => root.scope === "packaged");

    for (const root of packagedRoots) {
      if (!fs.existsSync(root.root)) continue;
      const stack = [root.root];
      while (stack.length > 0) {
        const current = stack.pop()!;
        for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
          const absolutePath = path.join(current, entry.name);
          if (entry.isDirectory()) {
            stack.push(absolutePath);
            continue;
          }
          if (!entry.isFile()) continue;
          if (!absolutePath.endsWith(".ts") || absolutePath.endsWith(".d.ts")) continue;
          if (!root.include(absolutePath)) continue;
          const metadata = parseScriptJDocFromSource(fs.readFileSync(absolutePath, "utf8"));
          if (!metadata) missing.push(absolutePath);
        }
      }
    }

    expect(missing).toEqual([]);
  });
});
