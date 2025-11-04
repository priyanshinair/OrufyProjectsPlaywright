import { test, expect } from '../fixtures/loginfixture';
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
    test.skip('Limit check: only 10 custom fields can be created', async () => {
      for (let i = 1; i <= 10; i++) {
        const fieldName = `Paragraph Field ${i}`;
        await gcf.createCustomField(fieldName);
       
    }})
        
    //edit custom field
    test('edit custom field', async() => {
      await gcf.editCustomField('editted name')
    })
    //delete custom field
    test('delete custom field', async() => {
      await gcf.deleteCustomFields()
    })
 /* 
    test('Create Dropdown Custom Field', async () => {
        console.log('Calling createCustomField with:', 'Status Field', 'Dropdown', ['Open', 'Closed', 'Pending']);

      await gcf.createCustomField('Status Field', 'Dropdown', ['Open', 'Closed', 'Pending']);
    });*/
  });