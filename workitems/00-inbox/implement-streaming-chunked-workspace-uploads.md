---
id: implement-streaming-chunked-workspace-uploads
title: Implement streaming chunked uploads for large workspace files
status: inbox
priority: medium
created: 2026-04-10
tags:
  - work-item
  - kanban
  - backend
  - workspace
  - feature
estimate: L
risk: medium
owner: pi
---

# Implement streaming chunked uploads for large workspace files

## Summary

The current workspace upload path buffers the entire file in memory on both
client (`FormData` + `fetch`/`XMLHttpRequest`) and server (`req.formData()`).
This works for files up to ~256 MB (the current client-side guard) but will
OOM or timeout for larger payloads.

Replace the single-request upload with a chunked protocol:

1. Client splits the file into fixed-size chunks (e.g. 4–8 MB).
2. Each chunk is uploaded as a separate request with offset/sequence metadata.
3. Server streams chunks to disk and assembles the final file.
4. Client reports per-chunk progress through the existing `onProgress` callback.

## Motivation

- `workspace-upload-progress-ui` added a 256 MB client-side guard. Files above
  that limit are rejected with a clear error, but users may need to upload
  larger assets (models, datasets, archives).
- Bun's `req.formData()` buffers the whole body in RAM — streaming body parsing
  is not yet reliable for multipart in Bun as of 1.3.x.
- Chunked upload sidesteps both the browser memory limit and the server memory
  limit by sending small pieces.

## Acceptance Criteria

- [ ] Files above 256 MB can be uploaded successfully end-to-end.
- [ ] Upload uses fixed-size chunks (configurable, default 4–8 MB).
- [ ] Server-side handler streams each chunk directly to a temp file.
- [ ] Final assembly (concat or rename) is atomic.
- [ ] Client reports per-chunk progress via the existing `onProgress` API.
- [ ] Interrupted uploads can be resumed (nice-to-have, not required for v1).
- [ ] The client-side 256 MB guard in `uploadWorkspaceFile()` is removed or
      raised once chunked upload lands.
- [ ] Existing small-file uploads (<256 MB) continue to use the simple path
      without regression.

## Implementation Notes

### Client (`api.ts`)

- Add a `uploadWorkspaceFileChunked(file, targetPath, options)` function.
- Use `file.slice(start, end)` to produce chunk blobs.
- POST each chunk to `/workspace/upload-chunk` with headers/params:
  `X-Upload-Id`, `X-Chunk-Index`, `X-Chunk-Total`, `X-File-Name`, `X-File-Size`.
- Final chunk triggers server-side assembly.
- `uploadWorkspaceFile()` should auto-select chunked path for files above the
  threshold.

### Server (`handlers/workspace.ts`)

- Add `handleWorkspaceUploadChunk(req)` handler.
- Write each chunk to a temp directory keyed by upload ID.
- On final chunk: concatenate or rename into the target workspace path.
- Clean up temp chunks after assembly or on timeout.

### Progress

- Per-chunk progress: `(completedChunks / totalChunks) * 100`.
- Per-byte progress within a chunk: use `XMLHttpRequest.upload.onprogress`
  on the chunk request, combine with completed-chunk count.

## Links

- `runtime/web/src/api.ts` — `uploadWorkspaceFile()`, `MAX_UPLOAD_SIZE`
- `runtime/src/channels/web/handlers/workspace.ts` — `handleWorkspaceUpload()`
- `runtime/web/src/components/workspace-explorer.ts` — `uploadFilesToTarget()`
- Parent ticket: `workspace-upload-progress-ui`
