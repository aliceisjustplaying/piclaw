/**
 * discovery-jdoc.ts – shared structured discovery metadata types for tools and scripts.
 */

export type DiscoveryKind = "read-only" | "mutating" | "mixed";
export type DiscoveryWeight = "lightweight" | "standard" | "heavy";
export type ScriptDiscoveryRole = "entrypoint" | "module";

export interface ToolJDocExampleRecord {
  text?: string;
  description?: string;
  summary?: string;
  title?: string;
  name?: string;
  input?: string;
  prompt?: string;
  intent?: string;
  query?: string;
}

/** Supplemental discovery metadata for tools. */
export interface ToolJDoc {
  summary?: string;
  aliases?: string[];
  domains?: string[];
  verbs?: string[];
  nouns?: string[];
  keywords?: string[];
  guidance?: string[];
  examples?: Array<string | ToolJDocExampleRecord>;
}

/** Supplemental discovery metadata for scripts. */
export interface ScriptJDoc extends ToolJDoc {
  kind?: DiscoveryKind;
  weight?: DiscoveryWeight;
  role?: ScriptDiscoveryRole;
}

function uniqueStrings(values: Iterable<unknown>): string[] {
  return [...new Set(
    Array.from(values)
      .map((value) => typeof value === "string" ? value.trim() : "")
      .filter(Boolean),
  )];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeExampleRecord(value: unknown): ToolJDocExampleRecord | undefined {
  if (!isRecord(value)) return undefined;
  const record: ToolJDocExampleRecord = {};
  for (const key of ["text", "description", "summary", "title", "name", "input", "prompt", "intent", "query"] as const) {
    if (typeof value[key] === "string" && value[key].trim()) record[key] = value[key].trim();
  }
  return Object.keys(record).length > 0 ? record : undefined;
}

/** Normalize arbitrary input into ToolJDoc-compatible data. */
export function normalizeToolJDoc(value: unknown): ToolJDoc | undefined {
  if (!isRecord(value)) return undefined;
  const summary = typeof value.summary === "string" && value.summary.trim() ? value.summary.trim() : undefined;
  const aliases = uniqueStrings(Array.isArray(value.aliases) ? value.aliases : []);
  const domains = uniqueStrings(Array.isArray(value.domains) ? value.domains : []);
  const verbs = uniqueStrings(Array.isArray(value.verbs) ? value.verbs : []);
  const nouns = uniqueStrings(Array.isArray(value.nouns) ? value.nouns : []);
  const keywords = uniqueStrings(Array.isArray(value.keywords) ? value.keywords : []);
  const guidance = uniqueStrings(Array.isArray(value.guidance) ? value.guidance : []);
  const examples = Array.isArray(value.examples)
    ? value.examples
      .map((entry) => {
        if (typeof entry === "string" && entry.trim()) return entry.trim();
        return normalizeExampleRecord(entry);
      })
      .filter((entry): entry is string | ToolJDocExampleRecord => Boolean(entry))
    : [];

  if (!summary && !aliases.length && !domains.length && !verbs.length && !nouns.length && !keywords.length && !guidance.length && !examples.length) {
    return undefined;
  }

  return {
    ...(summary ? { summary } : {}),
    ...(aliases.length ? { aliases } : {}),
    ...(domains.length ? { domains } : {}),
    ...(verbs.length ? { verbs } : {}),
    ...(nouns.length ? { nouns } : {}),
    ...(keywords.length ? { keywords } : {}),
    ...(guidance.length ? { guidance } : {}),
    ...(examples.length ? { examples } : {}),
  };
}

/** Normalize arbitrary input into ScriptJDoc-compatible data. */
export function normalizeScriptJDoc(value: unknown): ScriptJDoc | undefined {
  const base = normalizeToolJDoc(value);
  if (!base || !isRecord(value)) return base as ScriptJDoc | undefined;

  const kind = value.kind === "read-only" || value.kind === "mutating" || value.kind === "mixed"
    ? value.kind
    : undefined;
  const weight = value.weight === "lightweight" || value.weight === "standard" || value.weight === "heavy"
    ? value.weight
    : undefined;
  const role = value.role === "entrypoint" || value.role === "module"
    ? value.role
    : undefined;

  return {
    ...base,
    ...(kind ? { kind } : {}),
    ...(weight ? { weight } : {}),
    ...(role ? { role } : {}),
  };
}
