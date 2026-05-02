import { expect, test } from "bun:test";
import { mkdtemp, symlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { resolveMemoryFileForTests, readMemoryFileForTests } from "../../extensions/integrations/personal-memory/index.ts";

test("personal_memory only resolves markdown files under the memory root", () => {
  expect(resolveMemoryFileForTests("identity.md", "/tmp/newmem/memory")).toBe("/tmp/newmem/memory/identity.md");
  expect(() => resolveMemoryFileForTests("../therapy-sessions/session.md", "/tmp/newmem/memory")).toThrow("filename");
  expect(() => resolveMemoryFileForTests("identity.txt", "/tmp/newmem/memory")).toThrow(".md");
});

test("personal_memory rejects symlinks that leave the memory root", async () => {
  const root = await mkdtemp(join(tmpdir(), "piclaw-memory-"));
  const outside = join(root, "..", `outside-${Date.now()}.md`);
  await writeFile(outside, "secret", "utf8");
  await symlink(outside, join(root, "evil.md"));

  await expect(readMemoryFileForTests("evil.md", root)).rejects.toThrow("inside the memory directory");
});
