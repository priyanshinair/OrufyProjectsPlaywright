// globalCustomField.page.js

export class GlobalCustomField {
    constructor(page) {
      this.page = page;
  
      // General UI elements
      this.settings = page.getByRole('img').nth(4);
      this.globalCustomFieldOption = page.getByRole('menuitem', { name: 'Global Custom Fields' });
      this.createBtn = page.getByRole('button', { name: 'Create Custom Field'});
      this.nameField = page.getByRole('textbox', { name: 'Field Name' });
      this.typeOption = page.getByRole('combobox');
  
      // Field type options
      this.paragraphType = page.getByRole('option', { name: 'Paragraph' });
      this.dropdownType = page.getByRole('option', { name: 'Dropdown' });
      this.labelsType = page.getByRole('option', { name: 'Labels' });
      this.shortTextType = page.getByRole('option', { name: 'Short Text' });
      this.urlType = page.getByRole('option', { name: 'Url' });
      this.numbersType = page.getByRole('option', { name: 'Numbers' });
      this.dateType = page.getByRole('option', { name: 'Date' });
      this.emailType = page.getByRole('option', { name: 'Email' });
  
      // Dropdown-specific elements
      this.addDropdownOption = page.getByRole('textbox', { name: 'Enter option...' });
      this.addMoreDropdownOption = page.getByRole('button', { name: 'Add More' });
  
      this.createFieldBtn = page.getByRole('button', { name: 'Create', exact:true })
      this.createAnotherBtn = page.getByRole('button', { name: 'Create another' });
    }
  
    async openGlobalCustomFields() {
      await this.settings.click();
      await this.globalCustomFieldOption.click();
    }
  
    async createCustomField(name){
        
        await this.createBtn.click()
        await this.nameField.fill(name)
        await this.typeOption.click()
        await this.paragraphType.click()
        await this.createFieldBtn.click();
    }
}