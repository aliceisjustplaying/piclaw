import { expect, test } from 'bun:test';
import { buildPostMarkdownCopyPayload } from '../../web/src/utils/post-copy-markdown.ts';

test('buildPostMarkdownCopyPayload preserves original markdown text when present', () => {
  const payload = buildPostMarkdownCopyPayload({
    data: {
      content: 'Hello\n\n```js\nconst answer = 42;\n```\n\n- item',
      content_blocks: [],
      media_ids: [],
    },
  });

  expect(payload).toBe('Hello\n\n```js\nconst answer = 42;\n```\n\n- item');
});

test('buildPostMarkdownCopyPayload falls back to structured blocks when raw text is absent', () => {
  const payload = buildPostMarkdownCopyPayload({
    data: {
      content: '',
      media_ids: [11, 12],
      content_blocks: [
        { type: 'text', text: 'Primary text' },
        { type: 'resource_link', title: 'Docs', uri: 'https://example.com/docs' },
        { type: 'file', name: 'report.csv' },
        { type: 'image', title: 'chart.png' },
      ],
    },
  });

  expect(payload).toContain('Primary text');
  expect(payload).toContain('[Docs](https://example.com/docs)');
  expect(payload).toContain('Attachments:\n- report.csv');
  expect(payload).toContain('Images:\n- chart.png');
});

test('buildPostMarkdownCopyPayload formats embedded resources as fenced code blocks', () => {
  const payload = buildPostMarkdownCopyPayload({
    data: {
      content: null,
      media_ids: [],
      content_blocks: [
        { type: 'resource', uri: 'notes/debug.txt', text: 'line one\nline two' },
      ],
    },
  });

  expect(payload).toContain('### notes/debug.txt');
  expect(payload).toContain('```\nline one\nline two\n```');
});
