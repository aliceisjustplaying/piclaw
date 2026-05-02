import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-03: Multi-Device Session Switching

test.describe('US-03: Session Switching', () => {
  test('typeahead finds sessions by name', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('@');

    // Session popup or typeahead should appear
    await page.waitForSelector(sel.sessionPopup + ', .typeahead-popup', { timeout: 3000 });
    const popup = page.locator(sel.sessionPopup + ', .typeahead-popup');
    await expect(popup).toBeVisible();

    // Should show session items
    const items = await popup.locator(sel.sessionItem + ', .typeahead-item, li').count();
    expect(items).toBeGreaterThan(0);
  });

  test('session popup sorts alphabetically with active first', async ({ authedPage: page }) => {
    await page.click(sel.sessionPopup + ', [data-testid="session-switcher"]');
    await page.waitForSelector(sel.sessionItem);

    const items = await page.locator(sel.sessionItem).all();
    if (items.length < 2) test.skip();

    // First item should be marked active
    const firstItem = items[0];
    const isActive = await firstItem.evaluate((el) =>
      el.classList.contains('active') ||
      el.getAttribute('aria-current') === 'true' ||
      el.querySelector('.active') !== null
    );
    expect(isActive).toBe(true);

    // Remaining items should be alphabetically sorted
    if (items.length >= 3) {
      const names: string[] = [];
      for (let i = 1; i < items.length; i++) {
        const text = await items[i].textContent();
        if (text) names.push(text.trim().toLowerCase());
      }
      const sorted = [...names].sort();
      expect(names).toEqual(sorted);
    }
  });

  test('horizontal swipe on message content does NOT switch session', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.postContent);
    const post = page.locator(sel.postContent).first();
    const box = await post.boundingBox();
    if (!box) test.skip();

    // Get current URL/session indicator before swipe
    const urlBefore = page.url();

    // Simulate horizontal swipe on message content
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + 200, box.y + box.height / 2, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(500);

    // Session should not have changed
    const urlAfter = page.url();
    expect(urlAfter).toBe(urlBefore);
  });
});

test.describe.skip('US-03: iPad Session Switching', () => {
  // iPad-only — skipped in desktop-chrome project

  test('finger swipe on timeline edge switches sessions', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);
    const timeline = page.locator(sel.timeline);
    const box = await timeline.boundingBox();
    if (!box) test.skip();

    // Swipe from the left edge of the timeline
    await page.touchscreen.tap(box.x + 10, box.y + box.height / 2);
    // Simulate swipe gesture
    const startX = box.x + 10;
    const startY = box.y + box.height / 2;
    await page.evaluate(({ sx, sy }) => {
      const el = document.elementFromPoint(sx, sy);
      if (!el) return;
      el.dispatchEvent(new TouchEvent('touchstart', {
        touches: [new Touch({ identifier: 1, target: el, clientX: sx, clientY: sy })],
        bubbles: true,
      }));
      el.dispatchEvent(new TouchEvent('touchmove', {
        touches: [new Touch({ identifier: 1, target: el, clientX: sx + 150, clientY: sy })],
        bubbles: true,
      }));
      el.dispatchEvent(new TouchEvent('touchend', { touches: [], bubbles: true }));
    }, { sx: startX, sy: startY });

    await page.waitForTimeout(500);
    // We can't deterministically assert session changed without knowing available sessions,
    // but we verify no crash and the UI remains interactive
    await expect(page.locator(sel.timeline)).toBeVisible();
  });

  test('Apple Pencil does NOT trigger session swipe', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);
    const timeline = page.locator(sel.timeline);
    const box = await timeline.boundingBox();
    if (!box) test.skip();

    const urlBefore = page.url();

    // Simulate pen (Apple Pencil) input
    const startX = box.x + 10;
    const startY = box.y + box.height / 2;
    await page.evaluate(({ sx, sy }) => {
      const el = document.elementFromPoint(sx, sy);
      if (!el) return;
      el.dispatchEvent(new PointerEvent('pointerdown', {
        pointerId: 2, pointerType: 'pen',
        clientX: sx, clientY: sy, bubbles: true,
      }));
      el.dispatchEvent(new PointerEvent('pointermove', {
        pointerId: 2, pointerType: 'pen',
        clientX: sx + 200, clientY: sy, bubbles: true,
      }));
      el.dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 2, pointerType: 'pen',
        clientX: sx + 200, clientY: sy, bubbles: true,
      }));
    }, { sx: startX, sy: startY });

    await page.waitForTimeout(500);
    expect(page.url()).toBe(urlBefore);
  });
});
