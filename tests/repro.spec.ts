import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://starpets.gg/', {waitUntil: 'networkidle'});

  var res = await page.evaluate('41 + 1')
  await expect(res).toBe(42);
});
