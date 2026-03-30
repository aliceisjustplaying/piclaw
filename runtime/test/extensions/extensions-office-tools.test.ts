import { afterEach, describe, expect, test } from "bun:test";
import "../helpers.js";
import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

import { WORKSPACE_DIR } from "../../src/core/config.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";
import officeToolsExtension from "../../extensions/integrations/office-tools/index.ts";

const cleanupPaths: string[] = [];

function makeTempDir(): { prefix: string; base: string } {
  const prefix = `office-tools-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const base = join(WORKSPACE_DIR, prefix);
  mkdirSync(base, { recursive: true });
  cleanupPaths.push(base);
  return { prefix, base };
}

afterEach(() => {
  while (cleanupPaths.length > 0) {
    const next = cleanupPaths.pop();
    if (next) rmSync(next, { recursive: true, force: true });
  }
});

describe("office-tools extension", () => {
  test("registers office_read and office_write", () => {
    const fake = createFakeExtensionApi();
    officeToolsExtension(fake.api);
    expect(fake.tools.has("office_read")).toBe(true);
    expect(fake.tools.has("office_write")).toBe(true);
  });

  test("round-trips DOCX through office_write and office_read", async () => {
    const fake = createFakeExtensionApi();
    officeToolsExtension(fake.api);
    const writer = fake.tools.get("office_write");
    const reader = fake.tools.get("office_read");
    if (!writer || !reader) throw new Error("office tools not registered");

    const { prefix, base } = makeTempDir();
    const relPath = `${prefix}/report.docx`;
    const markdown = [
      "# Quarterly Report",
      "",
      "**Owner:** Smith",
      "**Status:** Green",
      "",
      "- Alpha",
      "- Beta",
      "",
      "| Metric | Value |",
      "| --- | --- |",
      "| Revenue | 42 |",
      "| Margin | 15 |",
    ].join("\n");

    const writeResult = await writer.execute("docx-write", { path: relPath, markdown }, undefined, undefined, { cwd: WORKSPACE_DIR });
    expect(writeResult.details.ok).toBe(true);
    expect(existsSync(join(base, "report.docx"))).toBe(true);
    expect(readFileSync(join(base, "report.docx")).length).toBeGreaterThan(1024);

    const readResult = await reader.execute("docx-read", { path: relPath }, undefined, undefined, { cwd: WORKSPACE_DIR });
    const text = readResult.content[0].text;
    expect(readResult.details.ok).toBe(true);
    expect(text).toContain("# Quarterly Report");
    expect(text).toContain("**Owner:** Smith");
    expect(text).toContain("- Alpha");
    expect(text).toContain("| **Metric** | **Value** |");
    expect(text).toContain("| Revenue | 42 |");
  });

  test("round-trips XLSX through office_write and office_read", async () => {
    const fake = createFakeExtensionApi();
    officeToolsExtension(fake.api);
    const writer = fake.tools.get("office_write");
    const reader = fake.tools.get("office_read");
    if (!writer || !reader) throw new Error("office tools not registered");

    const { prefix, base } = makeTempDir();
    const relPath = `${prefix}/metrics.xlsx`;
    const markdown = [
      "## Metrics",
      "",
      "| Name | Count |",
      "| --- | --- |",
      "| Alpha | 7 |",
      "| Beta | 11 |",
    ].join("\n");

    const writeResult = await writer.execute("xlsx-write", { path: relPath, markdown }, undefined, undefined, { cwd: WORKSPACE_DIR });
    expect(writeResult.details.ok).toBe(true);
    expect(existsSync(join(base, "metrics.xlsx"))).toBe(true);

    const readResult = await reader.execute("xlsx-read", { path: relPath }, undefined, undefined, { cwd: WORKSPACE_DIR });
    const text = readResult.content[0].text;
    expect(readResult.details.ok).toBe(true);
    expect(text).toContain("## Metrics");
    expect(text).toContain("| Name | Count |");
    expect(text).toContain("| Alpha | 7 |");
    expect(text).toContain("| Beta | 11 |");
  });

  test("round-trips PPTX through office_write and office_read", async () => {
    const fake = createFakeExtensionApi();
    officeToolsExtension(fake.api);
    const writer = fake.tools.get("office_write");
    const reader = fake.tools.get("office_read");
    if (!writer || !reader) throw new Error("office tools not registered");

    const { prefix, base } = makeTempDir();
    const relPath = `${prefix}/deck.pptx`;
    const markdown = [
      "# Launch Review",
      "",
      "- Goal alignment",
      "- Risks tracked",
      "",
      "---",
      "",
      "## KPIs",
      "",
      "| Metric | Value |",
      "| --- | --- |",
      "| Users | 120 |",
      "| NPS | 63 |",
    ].join("\n");

    const writeResult = await writer.execute("pptx-write", { path: relPath, markdown }, undefined, undefined, { cwd: WORKSPACE_DIR });
    expect(writeResult.details.ok).toBe(true);
    expect(existsSync(join(base, "deck.pptx"))).toBe(true);

    const readResult = await reader.execute("pptx-read", { path: relPath }, undefined, undefined, { cwd: WORKSPACE_DIR });
    const text = readResult.content[0].text;
    expect(readResult.details.ok).toBe(true);
    expect(text).toContain("## Slide 1: Launch Review");
    expect(text).toContain("- Goal alignment");
    expect(text).toContain("## Slide 2: KPIs");
    expect(text).toContain("| Metric | Value |");
    expect(text).toContain("| Users | 120 |");
  });
});
