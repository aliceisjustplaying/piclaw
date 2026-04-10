import { describe, expect, test } from "bun:test";
import { strToU8, zipSync } from "fflate";

import { formatCompressionRatio, getCompressionMethodLabel, parseZipPreview } from "../../web/src/ui/zip-preview.js";

describe("zip preview helpers", () => {
  test("parses central directory entries and summary metadata", () => {
    const bytes = zipSync({
      "avatars/readme.txt": strToU8("hello"),
      "avatars/nested/profile.json": strToU8('{"ok":true}'),
    });

    const preview = parseZipPreview(bytes);
    expect(preview.entries.map((entry) => entry.path)).toEqual([
      "avatars/nested/profile.json",
      "avatars/readme.txt",
    ]);
    expect(preview.summary.fileCount).toBe(2);
    expect(preview.summary.directoryCount).toBe(2);
    expect(preview.summary.totalEntries).toBe(2);
    expect(preview.summary.uncompressedBytes).toBeGreaterThan(0);
    expect(preview.summary.compressedBytes).toBeGreaterThan(0);
  });

  test("formats compression labels for known methods", () => {
    expect(getCompressionMethodLabel(0)).toBe("Stored");
    expect(getCompressionMethodLabel(8)).toBe("Deflate");
    expect(getCompressionMethodLabel(93)).toBe("Zstandard");
  });

  test("formats summary savings percentages", () => {
    expect(formatCompressionRatio({
      fileCount: 1,
      directoryCount: 0,
      totalEntries: 1,
      compressedBytes: 25,
      uncompressedBytes: 100,
    })).toBe("75% smaller");
  });

  test("rejects invalid ZIP payloads", () => {
    expect(() => parseZipPreview(new Uint8Array([1, 2, 3, 4]))).toThrow("ZIP archive is too small");
  });
});
