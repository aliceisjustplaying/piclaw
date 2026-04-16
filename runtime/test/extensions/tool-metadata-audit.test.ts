import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { globSync } from "glob";

function extractRegisterToolBlocks(text: string): Array<{ name: string; block: string }> {
  const startPattern = /registerTool\s*\(\s*\{/g;
  const namePattern = /name:\s*"([^"]+)"/;
  const blocks: Array<{ name: string; block: string }> = [];
  let match: RegExpExecArray | null;

  while ((match = startPattern.exec(text))) {
    const start = match.index + match[0].length - 1;
    let depth = 0;
    let inString: string | null = null;
    let escaped = false;

    for (let index = start; index < text.length; index += 1) {
      const ch = text[index];
      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (ch === "\\") {
          escaped = true;
        } else if (ch === inString) {
          inString = null;
        }
        continue;
      }

      if (ch === '"' || ch === "'" || ch === "`") {
        inString = ch;
        continue;
      }
      if (ch === "{") {
        depth += 1;
        continue;
      }
      if (ch === "}") {
        depth -= 1;
        if (depth === 0) {
          const block = text.slice(start, index + 1);
          const nameMatch = namePattern.exec(block);
          if (nameMatch) {
            blocks.push({ name: nameMatch[1], block });
          }
          startPattern.lastIndex = index + 1;
          break;
        }
      }
    }
  }

  return blocks;
}

describe("extension tool metadata audit", () => {
  test("every registered extension tool provides description and promptSnippet", () => {
    const files = [
      ...globSync("runtime/src/extensions/**/*.ts", { cwd: process.cwd() }),
      ...globSync("runtime/extensions/**/*.ts", { cwd: process.cwd() }),
    ].filter((file) => !file.includes("runtime/generated/"));

    const missing: Array<{ file: string; name: string; missing: string[] }> = [];

    for (const file of files) {
      const text = readFileSync(join(process.cwd(), file), "utf8");
      for (const { name, block } of extractRegisterToolBlocks(text)) {
        const missingFields: string[] = [];
        if (!block.includes("description:")) missingFields.push("description");
        if (!block.includes("promptSnippet:")) missingFields.push("promptSnippet");
        if (missingFields.length > 0) {
          missing.push({ file, name, missing: missingFields });
        }
      }
    }

    expect(missing).toEqual([]);
  });
});
