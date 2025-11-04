/*
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://projects.beta.orufy.in/')
});
*/

import { test, expect } from '../fixtures/loginfixture';


test('verify dashboard after login', async ({ loggedInPage ,page }) => {
  // You already have a logged-in page
  await page.waitForTimeout(5000)

  await loggedInPage.goto('https://projects.beta.orufy.in/my-tasks')

  
});
