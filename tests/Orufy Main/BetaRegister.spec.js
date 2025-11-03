

/*

import { test, expect } from '@playwright/test';

function generateUniqueEmail() {
    const random = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
    return `priyanshi+${random}@orufy.com`;
  }

test('create account on orufy', async ({ page }) => {

  const email = generateUniqueEmail();

  await page.goto('https://beta.orufy.in/register');
 

  await page.fill('input[name="firstName"]','test');
 
  await page.fill('input[name="lastName"]','test');
  
  await page.fill('input[name="emailId"]',email);
 
  await page.fill('input[name="password"]','Orufy@123');
 
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('1234567890');

  await page.getByRole('button', { name: 'register' }).click();
});



test('create account on orufy bookings', async ({ page }) => {

  const email = generateUniqueEmail();

  await page.goto('https://beta.orufy.in/register?redirect=BOOKINGS');
 

  await page.fill('input[name="firstName"]','test');
 
  await page.fill('input[name="lastName"]','test');
  
  await page.fill('input[name="emailId"]',email);
 
  await page.fill('input[name="password"]','Orufy@123');
 
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('1234567890');

  await page.getByRole('button', { name: 'register' }).click();
});

*/