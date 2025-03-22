// @ts-check
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Playwright Test Configuration
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests', 
  timeout: 30 * 1000, 

  expect: {
    timeout: 5000, 
  },

  reporter: 'html', 

  use: {
    browserName: 'chromium', 
    headless: true,         
  },
});

