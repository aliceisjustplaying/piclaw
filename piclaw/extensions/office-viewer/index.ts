/**
 * office-viewer/index.ts — ZetaOffice WASM document viewer extension.
 *
 * Registers an HTTP route at /office-viewer/* that serves the WASM build
 * with COOP/COEP headers (required for SharedArrayBuffer/pthreads).
 *
 * Also registers a tool so the LLM can tell the user to open the viewer.
 *
 * Architecture:
 *   - Uses piclaw's registerRoute() (via globalThis.__piclaw_registerRoute)
 *     to serve files from the wasm/ directory within the same process.
 *   - The viewer page embeds ZetaOffice in a canvas and loads documents
 *     via the workspace raw API.
 *   - CSP-safe build: no eval() or new Function() — built with
 *     -sDYNAMIC_EXECUTION=0 on Emscripten 4.0.10.
 */

import { resolve, extname, dirname } from "node:path";
import { existsSync, realpathSync, statSync } from "node:fs";

// ── Constants ───────────────────────────────────────────────────

// Use dirname of this file to find the wasm/ directory
const EXT_DIR = typeof import.meta.dir === "string" ? import.meta.dir : dirname(new URL(import.meta.url).pathname);
const WASM_DIR = resolve(EXT_DIR, "vendor");
const ROUTE_PREFIX = "/office-viewer";

const OFFICE_EXTENSIONS = [
  ".docx", ".doc", ".odt", ".rtf",
  ".xlsx", ".xls", ".ods", ".csv",
  ".pptx", ".ppt", ".odp",
];

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".wasm": "application/wasm",
  ".data": "application/octet-stream",
  ".metadata": "application/json; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon",
};

/** COOP/COEP headers for SharedArrayBuffer (Emscripten pthreads). */
const ISOLATION_HEADERS: Record<string, string> = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "require-corp",
  "Cross-Origin-Resource-Policy": "same-origin",
  // Override piclaw's default X-Frame-Options: DENY so the iframe works
  "X-Frame-Options": "SAMEORIGIN",
  // Scoped CSP: allow blob: workers + wasm, frame-ancestors self
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob:",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "worker-src 'self' blob:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
  ].join("; "),
};

// ── Route handler ───────────────────────────────────────────────

function getMimeType(path: string): string {
  return MIME_TYPES[extname(path).toLowerCase()] || "application/octet-stream";
}

/**
 * Serve files from wasm/ with COOP/COEP headers.
 * Symlinks are resolved and verified to stay within WASM_DIR or their real targets.
 */
function handleRoute(req: Request, pathname: string): Response | null {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return new Response("Method Not Allowed", { status: 405, headers: ISOLATION_HEADERS });
  }

  // Strip prefix, default to viewer.html
  let relative = pathname.replace(/^\/office-viewer\/?/, "") || "viewer.html";
  // Strip query string if present
  const qIdx = relative.indexOf("?");
  if (qIdx >= 0) relative = relative.substring(0, qIdx);

  if (relative.includes("..") || relative.startsWith("/")) {
    return new Response("Forbidden", { status: 403, headers: ISOLATION_HEADERS });
  }

  const filePath = resolve(WASM_DIR, relative);

  let realPath: string;
  try {
    realPath = realpathSync(filePath);
  } catch {
    return new Response("Not Found", { status: 404, headers: ISOLATION_HEADERS });
  }

  if (!existsSync(realPath)) {
    return new Response("Not Found", { status: 404, headers: ISOLATION_HEADERS });
  }

  const st = statSync(realPath);
  if (!st.isFile()) {
    return new Response("Not Found", { status: 404, headers: ISOLATION_HEADERS });
  }

  const contentType = getMimeType(realPath);
  const isImmutable = false; // Disable aggressive caching during development

  return new Response(Bun.file(realPath), {
    headers: {
      ...ISOLATION_HEADERS,
      "Content-Type": contentType,
      "Content-Length": String(st.size),
      "Cache-Control": isImmutable ? "public, max-age=86400, immutable" : "no-cache",
    },
  });
}

// ── Extension entry point ───────────────────────────────────────

export default function officeViewer(pi: any) {
  // Register the HTTP route via piclaw's route registry
  const registerRoute = (globalThis as any).__piclaw_registerRoute;
  if (typeof registerRoute === "function") {
    registerRoute(ROUTE_PREFIX, handleRoute, EXT_DIR);
    console.log("[office-viewer] Route registered: /office-viewer/* → " + WASM_DIR);
  } else {
    console.warn("[office-viewer] WARNING: __piclaw_registerRoute not available. Route NOT registered.");
  }

  // Register a tool the LLM can use to generate viewer links
  pi.registerTool({
    name: "open_office_viewer",
    label: "Open Office Viewer",
    description:
      "Open an Office document (.docx, .xlsx, .pptx, .odt, .ods, .odp) in the ZetaOffice WASM viewer. " +
      "Returns a URL the user can open in their browser.",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string", description: "Workspace path to the Office document." },
      },
      required: ["path"],
    },
    async execute(_toolCallId: string, params: { path: string }) {
      const filePath = params.path.replace(/^@/, "");
      const ext = extname(filePath).toLowerCase();

      if (!OFFICE_EXTENSIONS.includes(ext)) {
        throw new Error(
          `Unsupported file type: ${ext}. Supported: ${OFFICE_EXTENSIONS.join(", ")}`
        );
      }

      const fullPath = resolve(process.cwd(), filePath);
      if (!existsSync(fullPath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Check if TLS is available (required for SharedArrayBuffer)
      const certsDir = resolve(process.env.PICLAW_WORKSPACE || process.cwd(), ".piclaw/certs");
      const hasTls = existsSync(resolve(certsDir, "sandbox.local.crt")) && existsSync(resolve(certsDir, "sandbox.local.key"));
      if (!hasTls) {
        throw new Error(
          "Office viewer requires HTTPS (for SharedArrayBuffer). " +
          "No TLS certificates found in .piclaw/certs/. " +
          "Generate certs first: openssl req -x509 -newkey rsa:2048 -nodes " +
          "-keyout .piclaw/certs/sandbox.local.key -out .piclaw/certs/sandbox.local.crt -days 3650"
        );
      }

      const rawUrl = `/workspace/raw?path=${encodeURIComponent(filePath)}`;
      const name = filePath.split("/").pop() || "document";
      const viewerUrl = `${ROUTE_PREFIX}/?url=${encodeURIComponent(rawUrl)}&name=${encodeURIComponent(name)}`;

      return {
        content: [
          {
            type: "text" as const,
            text: `Office viewer URL: ${viewerUrl}\n\nThe user can open this in their browser. The document will be rendered by ZetaOffice (LibreOffice WASM).`,
          },
        ],
        details: { viewerUrl, path: filePath, format: ext },
      };
    },
  });
}
