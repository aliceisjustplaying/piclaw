import { getEagerWarmupConfig } from "../core/config.js";

const DEFAULT_MAIN_IDLE_TTL = 3 * 60 * 1000;
const DEFAULT_SIDE_IDLE_TTL = 60 * 1000;
const DEFAULT_CLEANUP_INTERVAL = 30 * 1000;
const DEFAULT_MAIN_SESSION_POOL_MAX_SIZE = 2;
const DEFAULT_MEMORY_PRESSURE_RSS_BYTES = 512 * 1024 * 1024;
const DEFAULT_MEMORY_PRESSURE_MAIN_IDLE_TTL = 60 * 1000;
const DEFAULT_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE = 1;
const EAGER_MAIN_IDLE_TTL = 60 * 60 * 1000;
const EAGER_SIDE_IDLE_TTL = 30 * 60 * 1000;
const EAGER_MAIN_SESSION_POOL_MAX_SIZE = 16;
const EAGER_MEMORY_PRESSURE_RSS_BYTES = 4 * 1024 * 1024 * 1024;
const EAGER_MEMORY_PRESSURE_MAIN_IDLE_TTL = 15 * 60 * 1000;
const EAGER_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE = 8;

function parsePositiveMs(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseNonNegativeInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export function loadAgentPoolConfig() {
  const eagerWarmup = getEagerWarmupConfig().enabled;
  return {
    mainIdleTtlMs: parsePositiveMs(
      process.env.PICLAW_MAIN_SESSION_IDLE_TTL_MS ?? process.env.PICLAW_SESSION_IDLE_TTL_MS,
      eagerWarmup ? EAGER_MAIN_IDLE_TTL : DEFAULT_MAIN_IDLE_TTL,
    ),
    sideIdleTtlMs: parsePositiveMs(
      process.env.PICLAW_SIDE_SESSION_IDLE_TTL_MS ?? process.env.PICLAW_SESSION_IDLE_TTL_MS,
      eagerWarmup ? EAGER_SIDE_IDLE_TTL : DEFAULT_SIDE_IDLE_TTL,
    ),
    cleanupIntervalMs: parsePositiveMs(process.env.PICLAW_SESSION_CLEANUP_INTERVAL_MS, DEFAULT_CLEANUP_INTERVAL),
    mainSessionPoolMaxSize: parseNonNegativeInt(
      process.env.PICLAW_MAIN_SESSION_POOL_MAX_SIZE ?? process.env.PICLAW_SESSION_POOL_MAX_SIZE,
      eagerWarmup ? EAGER_MAIN_SESSION_POOL_MAX_SIZE : DEFAULT_MAIN_SESSION_POOL_MAX_SIZE,
    ),
    memoryPressureRssBytes: parseNonNegativeInt(
      process.env.PICLAW_MAIN_SESSION_PRESSURE_RSS_BYTES,
      eagerWarmup ? EAGER_MEMORY_PRESSURE_RSS_BYTES : DEFAULT_MEMORY_PRESSURE_RSS_BYTES,
    ),
    memoryPressureMainIdleTtlMs: parsePositiveMs(
      process.env.PICLAW_MAIN_SESSION_PRESSURE_IDLE_TTL_MS,
      eagerWarmup ? EAGER_MEMORY_PRESSURE_MAIN_IDLE_TTL : DEFAULT_MEMORY_PRESSURE_MAIN_IDLE_TTL,
    ),
    memoryPressureMainSessionPoolMaxSize: parseNonNegativeInt(
      process.env.PICLAW_MAIN_SESSION_PRESSURE_POOL_MAX_SIZE,
      eagerWarmup ? EAGER_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE : DEFAULT_MEMORY_PRESSURE_MAIN_SESSION_POOL_MAX_SIZE,
    ),
    eagerWarmup,
  };
}

export async function withWarmupTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T | null> {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return await promise;
  let timer: ReturnType<typeof setTimeout> | null = null;
  try {
    return await Promise.race([
      promise,
      new Promise<null>((resolve) => {
        timer = setTimeout(() => resolve(null), timeoutMs);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}
