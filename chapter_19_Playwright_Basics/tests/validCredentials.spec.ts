import {test,expect} from '@playwright/test'

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="title"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toMatchAriaSnapshot(`- text: Products`);
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
});

