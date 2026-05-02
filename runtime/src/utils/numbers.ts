/**
 * numbers.ts – small numeric parsing helpers.
 */

/** Parse a positive finite number, falling back when the value is absent or invalid. */
export function parsePositiveNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
