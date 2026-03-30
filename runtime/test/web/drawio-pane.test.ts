import { expect, test } from 'bun:test';

import { buildDrawioEditorUrl } from '../../web/src/panes/drawio-pane.js';

test('buildDrawioEditorUrl targets the wrapper route instead of a missing vendor index page', () => {
  expect(buildDrawioEditorUrl(false)).toBe('/drawio/edit.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=0');
  expect(buildDrawioEditorUrl(true)).toBe('/drawio/edit.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=1');
  expect(buildDrawioEditorUrl(true)).not.toContain('/drawio/index.html');
});
