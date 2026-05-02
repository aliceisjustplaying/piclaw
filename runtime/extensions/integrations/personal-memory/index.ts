import fs from "node:fs/promises";
import path from "node:path";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

type MemoryAction = "index" | "search" | "read";

type MemoryParams = {
  action?: MemoryAction;
  query?: string;
  file?: string;
  limit?: number;
};

const MEMORY_DIR = process.env.PICLAW_PERSONAL_MEMORY_DIR
  || path.join(process.env.HOME || "/home/agent", "newmem", "memory");

function readString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function truncate(value: string, max = 12000): string {
  return value.length <= max ? value : `${value.slice(0, max)}\n...[truncated ${value.length - max} chars]`;
}

export function resolveMemoryFileForTests(file: string, root = MEMORY_DIR): string {
  if (file.includes("/") || file.includes("\\") || file.includes("..")) {
    throw new Error("memory file must be a filename inside the memory directory");
  }
  if (!file.endsWith(".md")) throw new Error("memory file must be a .md file");
  const name = file;
  const resolved = path.resolve(root, name);
  const rootResolved = path.resolve(root);
  if (!resolved.startsWith(`${rootResolved}${path.sep}`)) throw new Error("memory file must be inside the memory directory");
  return resolved;
}

async function listMemoryFiles(): Promise<string[]> {
  const entries = await fs.readdir(MEMORY_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

async function resolveExistingMemoryFile(file: string, root = MEMORY_DIR): Promise<string> {
  const resolved = resolveMemoryFileForTests(file, root);
  const [realRoot, realFile] = await Promise.all([
    fs.realpath(root),
    fs.realpath(resolved),
  ]);
  if (realFile !== realRoot && !realFile.startsWith(`${realRoot}${path.sep}`)) {
    throw new Error("memory file must be inside the memory directory");
  }
  return realFile;
}

async function readMemoryFile(file: string): Promise<string> {
  return await fs.readFile(await resolveExistingMemoryFile(file), "utf8");
}

/** Read a memory file with realpath containment checks; exported for tests. */
export async function readMemoryFileForTests(file: string, root = MEMORY_DIR): Promise<string> {
  return await fs.readFile(await resolveExistingMemoryFile(file, root), "utf8");
}

async function runPersonalMemory(params: MemoryParams): Promise<Record<string, unknown>> {
  const action = readString(params.action) as MemoryAction | null;
  if (action !== "index" && action !== "search" && action !== "read") {
    throw new Error("action must be one of: index, search, read");
  }

  if (action === "index") {
    const files = await listMemoryFiles();
    const index = files.includes("MEMORY.md") ? await readMemoryFile("MEMORY.md") : "";
    return { files, index: truncate(index) };
  }

  if (action === "read") {
    const file = readString(params.file);
    if (!file) throw new Error("file is required for read");
    return { file: path.basename(file), text: truncate(await readMemoryFile(file), 20000) };
  }

  const query = readString(params.query)?.toLowerCase();
  if (!query) throw new Error("query is required for search");
  const limit = Math.max(1, Math.min(20, Number(params.limit) || 8));
  const results: Array<{ file: string; line: number; text: string }> = [];
  for (const file of await listMemoryFiles()) {
    const text = await readMemoryFile(file);
    const lines = text.split(/\r?\n/);
    for (let i = 0; i < lines.length; i += 1) {
      if (!lines[i].toLowerCase().includes(query)) continue;
      results.push({ file, line: i + 1, text: truncate(lines[i], 500) });
      if (results.length >= limit) return { query, results };
    }
  }
  return { query, results };
}

export default function register(pi: ExtensionAPI) {
  pi.registerTool({
    name: "personal_memory",
    label: "Personal Memory",
    description:
      "Read the curated personal memory index at ~/newmem/memory. " +
      "Actions: index, search, read. Reads only markdown filenames directly inside the configured memory directory.",
    promptSnippet: "personal_memory: index/search/read curated personal memory files.",
    parameters: {
      type: "object",
      properties: {
        action: { type: "string", description: "One of: index, search, read" },
        query: { type: "string", description: "Search query for action=search" },
        file: { type: "string", description: "Memory markdown filename for action=read" },
        limit: { type: "number", description: "Max search hits, default 8" },
      },
      required: ["action"],
    },
    async execute(_id, params) {
      const result = await runPersonalMemory(params as MemoryParams);
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    },
  });
}
