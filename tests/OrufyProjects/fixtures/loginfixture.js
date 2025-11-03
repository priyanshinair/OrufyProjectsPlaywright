import { test as base, chromium } from '@playwright/test';
import { LoginPage } from '../../../Orufy Projects Pages/login';
export const test = base.extend({
  loggedInPage: async ({}, use) => {
    // Launch browser and create a new context
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Use your Page Object for login
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('priyanshi+premium3@orufy.com', 'Orufy@123');
    await page.waitForURL("")
    // Pass the logged-in page to the test
    await use(page);

    
  },
});

export const expect = base.expect;
