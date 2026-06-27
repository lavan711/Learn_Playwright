import { test, expect } from '@playwright/test';

test('Login with invalid credentials', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('asdfgh');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('Welcome@123');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  await expect(page.locator('[data-test="error"]')).toMatchAriaSnapshot(`- alert: "Epic sadface: Username and password do not match any user in this service"`);
});


