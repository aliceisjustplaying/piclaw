import { expect, test } from 'bun:test';

import {
  appendUniqueStringRef,
  normalizeComposeRefs,
  removeStringRef,
} from '../../web/src/ui/app-shell-ref-utils.js';

test('appendUniqueStringRef trims values and preserves identity for duplicates/invalid inputs', () => {
  const initial = ['a.md'];

  const appended = appendUniqueStringRef(initial, ' b.md ');
  expect(appended).toEqual(['a.md', 'b.md']);

  const numeric = appendUniqueStringRef(appended, 42);
  expect(numeric).toEqual(['a.md', 'b.md', '42']);

  const duplicate = appendUniqueStringRef(numeric, '42');
  expect(duplicate).toBe(numeric);

  const invalid = appendUniqueStringRef(numeric, '   ');
  expect(invalid).toBe(numeric);
});

test('removeStringRef removes existing refs and keeps identity on misses', () => {
  const initial = ['a.md', 'b.md', '42'];

  const removed = removeStringRef(initial, ' b.md ');
  expect(removed).toEqual(['a.md', '42']);

  const removedNumeric = removeStringRef(initial, 42);
  expect(removedNumeric).toEqual(['a.md', 'b.md']);

  const miss = removeStringRef(initial, 'missing.md');
  expect(miss).toBe(initial);
});

test('normalizeComposeRefs returns trimmed unique refs in insertion order', () => {
  expect(normalizeComposeRefs([' /a ', '/a', '', ' /b ', null, '/c', 7, 7n])).toEqual(['/a', '/b', '/c', '7']);
  expect(normalizeComposeRefs(null)).toEqual([]);
});
