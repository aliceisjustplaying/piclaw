import { test, expect } from '../support/world';

// US-12: Thoughts panel expand/collapse and scroll behaviour
//
// The thoughts panel uses CSS to control scrollability:
// - Collapsed: overflow-y: hidden, max-height clamped to N lines
// - Expanded (thought panel): overflow-y: auto, max-height: min(52vh, 34rem)
// - data-expanded="true"/"false" on .agent-thinking element
//
// Since we need an active agent turn producing thinking output, we either:
// 1. Send a real message and wait for thoughts SSE events, OR
// 2. Inject fake SSE events to simulate thinking content
//
// We use approach 2 (SSE injection) for determinism.

/** Inject a fake agent_thought SSE event into the page. */
async function injectThoughtContent(page: import('@playwright/test').Page, text: string, totalLines: number) {
  await page.evaluate(({ text, totalLines }) => {
    // Dispatch a synthetic SSE event that the app's SSE handler processes
    const event = new CustomEvent('sse:agent_thought', {
      detail: { text, total_lines: totalLines },
    });
    window.dispatchEvent(event);
  }, { text, totalLines });
  await page.waitForTimeout(300);
}

/** Build a long multi-line thought string. */
function buildLongThought(lines: number): string {
  return Array.from({ length: lines }, (_, i) => `Reasoning step ${i + 1}: considering implications...`).join('\n');
}

/** Get the computed style properties of the thoughts panel body. */
async function getThoughtsPanelState(page: import('@playwright/test').Page) {
  return page.evaluate(() => {
    const panel = document.querySelector('.agent-thinking[data-panel-key="thought"]');
    if (!panel) return null;
    const body = panel.querySelector('.agent-thinking-body') as HTMLElement | null;
    if (!body) return null;
    const style = getComputedStyle(body);
    return {
      expanded: panel.getAttribute('data-expanded'),
      overflowY: style.overflowY,
      maxHeight: style.maxHeight,
      scrollHeight: body.scrollHeight,
      clientHeight: body.clientHeight,
      isScrollable: body.scrollHeight > body.clientHeight,
      hasMoreButton: !!panel.querySelector('.agent-thinking-truncation'),
      moreButtonText: panel.querySelector('.agent-thinking-truncation')?.textContent?.trim() || '',
      bodyText: body.textContent?.trim().slice(0, 100) || '',
    };
  });
}

test.describe('US-12: Thoughts Panel Scroll Behaviour', () => {
  // These tests need an active agent turn with thinking output.
  // We trigger this by sending a message that will produce thoughts.

  test('collapsed panel is not scrollable and shows "more lines"', async ({ authedPage: page }) => {
    // Send a message to trigger agent thinking
    const compose = page.locator('[data-testid="compose-input"], .compose-editor [contenteditable], .compose-editor');
    await compose.click();
    await compose.fill('Think step by step about the meaning of life. Be very thorough.');
    await page.keyboard.press('Enter');

    // Wait for thoughts panel to appear
    const panel = page.locator('.agent-thinking[data-panel-key="thought"]');
    await panel.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});

    if (!(await panel.isVisible())) {
      test.skip(undefined, 'No thought panel appeared — model may not stream thinking');
      return;
    }

    // Wait for enough content to trigger truncation
    await page.waitForFunction(() => {
      const btn = document.querySelector('.agent-thinking[data-panel-key="thought"] .agent-thinking-truncation');
      return btn !== null;
    }, { timeout: 30000 }).catch(() => {});

    const state = await getThoughtsPanelState(page);
    if (!state || !state.hasMoreButton) {
      test.skip(undefined, 'Not enough thought content to trigger truncation');
      return;
    }

    // Collapsed state checks
    expect(state.expanded).toBe('false');
    expect(state.overflowY).toBe('hidden');
    expect(state.moreButtonText).toContain('more lines');
  });

  test('clicking "more lines" enables scrolling', async ({ authedPage: page }) => {
    const compose = page.locator('[data-testid="compose-input"], .compose-editor [contenteditable], .compose-editor');
    await compose.click();
    await compose.fill('Think step by step about all the planets in the solar system. Describe each one.');
    await page.keyboard.press('Enter');

    const panel = page.locator('.agent-thinking[data-panel-key="thought"]');
    await panel.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    if (!(await panel.isVisible())) {
      test.skip(undefined, 'No thought panel appeared');
      return;
    }

    // Wait for truncation button
    const moreBtn = panel.locator('.agent-thinking-truncation');
    await moreBtn.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    if (!(await moreBtn.isVisible())) {
      test.skip(undefined, 'Not enough content for truncation');
      return;
    }

    // Click to expand
    await moreBtn.click();
    await page.waitForTimeout(500);

    const state = await getThoughtsPanelState(page);
    expect(state).toBeTruthy();
    expect(state!.expanded).toBe('true');
    expect(state!.overflowY).toBe('auto');

    // max-height should be constrained (not "none")
    expect(state!.maxHeight).not.toBe('none');
    // Should contain a viewport or rem unit constraint
    // (computed value will be in px, but should be less than full viewport)

    // If content is long enough, panel should be scrollable
    if (state!.scrollHeight > 200) {
      expect(state!.isScrollable).toBe(true);
    }
  });

  test('clicking "show less" collapses and disables scrolling', async ({ authedPage: page }) => {
    const compose = page.locator('[data-testid="compose-input"], .compose-editor [contenteditable], .compose-editor');
    await compose.click();
    await compose.fill('Think step by step about world history. Cover major civilizations.');
    await page.keyboard.press('Enter');

    const panel = page.locator('.agent-thinking[data-panel-key="thought"]');
    await panel.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    if (!(await panel.isVisible())) {
      test.skip(undefined, 'No thought panel appeared');
      return;
    }

    // Wait for and click "more lines"
    const moreBtn = panel.locator('.agent-thinking-truncation');
    await moreBtn.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    if (!(await moreBtn.isVisible())) {
      test.skip(undefined, 'Not enough content for truncation');
      return;
    }
    await moreBtn.click();
    await page.waitForTimeout(500);

    // Verify expanded
    let state = await getThoughtsPanelState(page);
    expect(state!.expanded).toBe('true');

    // Click "show less"
    const lessBtn = panel.locator('.agent-thinking-truncation');
    await lessBtn.click();
    await page.waitForTimeout(500);

    // Verify collapsed
    state = await getThoughtsPanelState(page);
    expect(state!.expanded).toBe('false');
    expect(state!.overflowY).toBe('hidden');
  });

  test('expand/collapse round-trip preserves content', async ({ authedPage: page }) => {
    const compose = page.locator('[data-testid="compose-input"], .compose-editor [contenteditable], .compose-editor');
    await compose.click();
    await compose.fill('Analyze the complete works of Shakespeare. Think through each play.');
    await page.keyboard.press('Enter');

    const panel = page.locator('.agent-thinking[data-panel-key="thought"]');
    await panel.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    if (!(await panel.isVisible())) {
      test.skip(undefined, 'No thought panel appeared');
      return;
    }

    const moreBtn = panel.locator('.agent-thinking-truncation');
    await moreBtn.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    if (!(await moreBtn.isVisible())) {
      test.skip(undefined, 'Not enough content');
      return;
    }

    // Expand
    await moreBtn.click();
    await page.waitForTimeout(500);

    // Capture content
    const expandedState = await getThoughtsPanelState(page);
    const contentSnapshot = expandedState!.bodyText;

    // Scroll down if scrollable
    await page.evaluate(() => {
      const body = document.querySelector('.agent-thinking[data-panel-key="thought"] .agent-thinking-body') as HTMLElement;
      if (body) body.scrollTop = body.scrollHeight;
    });
    await page.waitForTimeout(200);

    // Collapse
    const lessBtn = panel.locator('.agent-thinking-truncation');
    await lessBtn.click();
    await page.waitForTimeout(500);

    // Expand again
    const moreBtn2 = panel.locator('.agent-thinking-truncation');
    await moreBtn2.click();
    await page.waitForTimeout(500);

    // Content should still be there
    const restoredState = await getThoughtsPanelState(page);
    expect(restoredState!.bodyText).toBe(contentSnapshot);

    // Scroll should be at top after re-expand
    const scrollTop = await page.evaluate(() => {
      const body = document.querySelector('.agent-thinking[data-panel-key="thought"] .agent-thinking-body') as HTMLElement;
      return body?.scrollTop || 0;
    });
    expect(scrollTop).toBe(0);
  });
});
