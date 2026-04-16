/**
 * discovery-jdoc.ts – shared structured discovery metadata types for tools and scripts.
 */
function uniqueStrings(values) {
    return [...new Set(Array.from(values)
            .map((value) => typeof value === "string" ? value.trim() : "")
            .filter(Boolean))];
}
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function normalizeExampleRecord(value) {
    if (!isRecord(value))
        return undefined;
    const record = {};
    for (const key of ["text", "description", "summary", "title", "name", "input", "prompt", "intent", "query"]) {
        if (typeof value[key] === "string" && value[key].trim())
            record[key] = value[key].trim();
    }
    return Object.keys(record).length > 0 ? record : undefined;
}
/** Normalize arbitrary input into ToolJDoc-compatible data. */
export function normalizeToolJDoc(value) {
    if (!isRecord(value))
        return undefined;
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
            if (typeof entry === "string" && entry.trim())
                return entry.trim();
            return normalizeExampleRecord(entry);
        })
            .filter((entry) => Boolean(entry))
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
export function normalizeScriptJDoc(value) {
    const base = normalizeToolJDoc(value);
    if (!base || !isRecord(value))
        return base;
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
