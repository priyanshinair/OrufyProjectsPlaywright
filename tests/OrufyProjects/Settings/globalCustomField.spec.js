import {test, expect} from '/home/om/Videos/Priyanshi P/Orufy Playwright/tests/OrufyProjects/fixtures/loginfixture.js'
import { GlobalCustomField } from '../../../Orufy Projects Pages/globalCustomField'


test.describe('Global Custom Field Tests', () => {
    let gcf;
  
    test.beforeEach(async ({ loggedInPage, page }) => {
      await page.waitForTimeout(7000)   
      gcf = new GlobalCustomField(loggedInPage);
      await gcf.openGlobalCustomFields();
    });
  /*
    test('Create Paragraph Custom Field', async () => {
      await gcf.createCustomField('Description Field');
    });
*/
    //create 10 custom fields
    test('Limit check: only 10 custom fields can be created', async () => {
      for (let i = 1; i <= 10; i++) {
        const fieldName = `Paragraph Field ${i}`;
        await gcf.createCustomField(fieldName);
       
    }})
        
 /* 
    test('Create Dropdown Custom Field', async () => {
        console.log('Calling createCustomField with:', 'Status Field', 'Dropdown', ['Open', 'Closed', 'Pending']);

      await gcf.createCustomField('Status Field', 'Dropdown', ['Open', 'Closed', 'Pending']);
    });*/
  });