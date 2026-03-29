import { expect, test } from "bun:test";

import { findProjectPackageDir } from "../../scripts/vendor-workflow.js";

test("findProjectPackageDir resolves the repo root from runtime scripts", () => {
  expect(findProjectPackageDir("/workspace/piclaw/runtime")).toBe("/workspace/piclaw");
});

test("findProjectPackageDir returns the package dir when already at repo root", () => {
  expect(findProjectPackageDir("/workspace/piclaw")).toBe("/workspace/piclaw");
});
