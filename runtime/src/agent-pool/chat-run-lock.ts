const runLocksByChat = new Map<string, Promise<unknown>>();

export async function withScopedChatRunLock<T>(scope: string, chatJid: string, fn: () => Promise<T>): Promise<T> {
  const key = `${scope}:${chatJid}`;
  const previous = runLocksByChat.get(key) ?? Promise.resolve();
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  const current = previous.catch(() => undefined).then(() => gate);
  runLocksByChat.set(key, current);
  await previous.catch(() => undefined);
  try {
    return await fn();
  } finally {
    release();
    if (runLocksByChat.get(key) === current) runLocksByChat.delete(key);
  }
}

export async function withAgentChatRunLock<T>(chatJid: string, fn: () => Promise<T>): Promise<T> {
  return withScopedChatRunLock("agent", chatJid, fn);
}

export function resetAgentChatRunLocksForTests(): void {
  runLocksByChat.clear();
}
