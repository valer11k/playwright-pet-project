import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login fails with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(process.env.USERNAME, 'wrong_password');

  await expect(loginPage.getErrorLocator()).toContainText('Epic sadface: Username and password do not match any user');
});