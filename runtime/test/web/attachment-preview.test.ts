import { describe, expect, test } from "bun:test";

import { getAttachmentPreviewKind, getAttachmentPreviewLabel } from "../../web/src/ui/attachment-preview.js";

describe("attachment preview kind", () => {
  test("classifies ZIP files as archive previews", () => {
    expect(getAttachmentPreviewKind("application/zip", "bundle.zip")).toBe("archive");
    expect(getAttachmentPreviewKind("application/x-zip-compressed", "bundle.zip")).toBe("archive");
    expect(getAttachmentPreviewKind("application/octet-stream", "bundle.zip")).toBe("archive");
  });

  test("returns the ZIP archive preview label", () => {
    expect(getAttachmentPreviewLabel("archive")).toBe("ZIP archive preview");
  });
});
