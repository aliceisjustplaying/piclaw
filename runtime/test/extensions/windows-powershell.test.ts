/**
 * test/extensions/windows-powershell.test.ts – Tests for the Windows PowerShell extension helpers.
 */

import { describe, expect, test } from "bun:test";
import "../helpers.js";

import {
  buildPowerShellHint,
  buildPowerShellPromptSnippet,
  replaceBashWithPowerShell,
} from "../../extensions/platform/windows/powershell/index.js";

describe("windows powershell extension", () => {
  test("replaces bash with powershell and guarantees an active shell tool", () => {
    expect(replaceBashWithPowerShell(["read", "bash", "edit", "write"])).toEqual([
      "read",
      "powershell",
      "edit",
      "write",
    ]);

    expect(replaceBashWithPowerShell(["read", "edit", "write"])).toEqual([
      "read",
      "edit",
      "write",
      "powershell",
    ]);
  });

  test("builds platform-aware PowerShell prompt guidance", () => {
    expect(buildPowerShellHint("win32")).toContain("prefer the powershell tool over bash");
    expect(buildPowerShellHint("win32")).toContain("detached=false");
    expect(buildPowerShellPromptSnippet("win32")).toContain("stdout/stderr remain capturable");
  });
});
