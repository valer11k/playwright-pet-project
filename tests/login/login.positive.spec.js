import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USERNAME || '', process.env.PASSWORD || '');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});