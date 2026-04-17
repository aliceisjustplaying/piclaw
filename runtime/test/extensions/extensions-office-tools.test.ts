import { afterEach, describe, expect, test } from "bun:test";
import "../helpers.js";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
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

function crc32(buf: Buffer): number {
  let crc = 0xffffffff;
  for (const byte of buf) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      const mask = -(crc & 1);
      crc = (crc >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createStoredDataDescriptorZip(name: string, text: string): Buffer {
  const nameBuf = Buffer.from(name, "utf-8");
  const dataBuf = Buffer.from(text, "utf-8");
  const checksum = crc32(dataBuf);

  const localHeader = Buffer.alloc(30);
  localHeader.writeUInt32LE(0x04034b50, 0);
  localHeader.writeUInt16LE(20, 4);
  localHeader.writeUInt16LE(0x0008, 6);
  localHeader.writeUInt16LE(0, 8);
  localHeader.writeUInt16LE(0, 10);
  localHeader.writeUInt16LE(0, 12);
  localHeader.writeUInt32LE(0, 14);
  localHeader.writeUInt32LE(0, 18);
  localHeader.writeUInt32LE(0, 22);
  localHeader.writeUInt16LE(nameBuf.length, 26);
  localHeader.writeUInt16LE(0, 28);

  const descriptor = Buffer.alloc(16);
  descriptor.writeUInt32LE(0x08074b50, 0);
  descriptor.writeUInt32LE(checksum, 4);
  descriptor.writeUInt32LE(dataBuf.length, 8);
  descriptor.writeUInt32LE(dataBuf.length, 12);

  const centralHeader = Buffer.alloc(46);
  centralHeader.writeUInt32LE(0x02014b50, 0);
  centralHeader.writeUInt16LE(20, 4);
  centralHeader.writeUInt16LE(20, 6);
  centralHeader.writeUInt16LE(0x0008, 8);
  centralHeader.writeUInt16LE(0, 10);
  centralHeader.writeUInt16LE(0, 12);
  centralHeader.writeUInt16LE(0, 14);
  centralHeader.writeUInt32LE(checksum, 16);
  centralHeader.writeUInt32LE(dataBuf.length, 20);
  centralHeader.writeUInt32LE(dataBuf.length, 24);
  centralHeader.writeUInt16LE(nameBuf.length, 28);
  centralHeader.writeUInt16LE(0, 30);
  centralHeader.writeUInt16LE(0, 32);
  centralHeader.writeUInt16LE(0, 34);
  centralHeader.writeUInt16LE(0, 36);
  centralHeader.writeUInt32LE(0, 38);
  centralHeader.writeUInt32LE(0, 42);

  const localRecord = Buffer.concat([localHeader, nameBuf, dataBuf, descriptor]);
  const centralRecord = Buffer.concat([centralHeader, nameBuf]);

  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(1, 8);
  eocd.writeUInt16LE(1, 10);
  eocd.writeUInt32LE(centralRecord.length, 12);
  eocd.writeUInt32LE(localRecord.length, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([localRecord, centralRecord, eocd]);
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

  test("office_read handles DOCX archives that use ZIP data descriptors", async () => {
    const fake = createFakeExtensionApi();
    officeToolsExtension(fake.api);
    const reader = fake.tools.get("office_read");
    if (!reader) throw new Error("office_read not registered");

    const { prefix, base } = makeTempDir();
    const relPath = `${prefix}/descriptor.docx`;
    const xml = '<w:document><w:body><w:p><w:r><w:t>Descriptor-backed DOCX</w:t></w:r></w:p></w:body></w:document>';
    writeFileSync(join(base, "descriptor.docx"), createStoredDataDescriptorZip("word/document.xml", xml));

    const readResult = await reader.execute("docx-read", { path: relPath }, undefined, undefined, { cwd: WORKSPACE_DIR });
    const text = readResult.content[0].text;

    expect(readResult.details.ok).toBe(true);
    expect(text).toContain("Descriptor-backed DOCX");
  });
});
