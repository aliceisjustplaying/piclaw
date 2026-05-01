import { expect, test } from "bun:test";
import { resolveMemoryFileForTests } from "../../extensions/integrations/personal-memory/index.ts";

test("personal_memory only resolves markdown files under the memory root", () => {
  expect(resolveMemoryFileForTests("identity.md", "/tmp/newmem/memory")).toBe("/tmp/newmem/memory/identity.md");
  expect(resolveMemoryFileForTests("../therapy-sessions/session.md", "/tmp/newmem/memory")).toBe("/tmp/newmem/memory/session.md");
  expect(() => resolveMemoryFileForTests("identity.txt", "/tmp/newmem/memory")).toThrow(".md");
});
