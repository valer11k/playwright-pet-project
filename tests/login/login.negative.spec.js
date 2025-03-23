import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Should not login with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(process.env.USERNAME, 'wrong_password');

  const error = await loginPage.getErrorMessage();
  await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Should not log in with empty username and password', async ({page})=> {
  const loginPage = new LoginPage(page)
  await loginPage.goto();

  await loginPage.login('', '');

  const error = await loginPage.getErrorMessage();
  await expect(error).toHaveText('Epic sadface: Username is required');
});