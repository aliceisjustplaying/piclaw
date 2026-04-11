import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const overlaysCss = readFileSync(path.join(import.meta.dir, '../../web/static/css/overlays.css'), 'utf8');

test('floating widget overlay includes a narrow-layout breakpoint', () => {
  expect(overlaysCss).toContain('@media (max-width: 820px)');
  expect(overlaysCss).toContain('.floating-widget-backdrop');
  expect(overlaysCss).toContain('.floating-widget-pane');
  expect(overlaysCss).toContain('.floating-widget-header');
  expect(overlaysCss).toContain('.floating-widget-close');
});
