import type { RunAgentOptions } from "./contracts.js";

export type NativeAbortHandle = {
  controller: AbortController;
  dispose: () => void;
};

export function createNativeAbortHandle(
  runOptions: RunAgentOptions,
  onAbort?: () => void,
): NativeAbortHandle | null {
  if (runOptions.signal?.aborted) return null;
  const controller = new AbortController();
  const abortFromCaller = () => {
    controller.abort();
    onAbort?.();
  };
  runOptions.signal?.addEventListener("abort", abortFromCaller, { once: true });
  if (runOptions.signal?.aborted) abortFromCaller();
  const timeoutMs = typeof runOptions.timeoutMs === "number" ? runOptions.timeoutMs : 0;
  const timeout = timeoutMs > 0 ? setTimeout(abortFromCaller, timeoutMs) : null;
  return {
    controller,
    dispose: () => {
      if (timeout) clearTimeout(timeout);
      runOptions.signal?.removeEventListener("abort", abortFromCaller);
    },
  };
}
