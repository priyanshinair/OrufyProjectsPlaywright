
export class GlobalTaskType {

    constructor(page){
        this.page = page
        this.settings = page.getByRole('img').nth(4);
        this.globalTaskType = page.getByRole('menuitem', { name: 'Global Task Types' })
        this.createBtn = page.getByRole('button', { name: 'Add New Task Type' })
        this.nameField = page.getByRole('textbox', { name: 'Enter New Task Name' })
        this.threedotBtn = page.locator('tr:nth-child(7) > .align-middle.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\].text-text-100.h-10.p-0')
        this.delete = page.getByRole('menuitem', { name: 'Delete' })
        this.deleteBtn = page.getByRole('button', { name: 'Delete' })
    }

    async openGlobalTaskType(){
        await this.settings.click()
        await this.globalTaskType.click()
    }

    async createTaskType(name){
        await this.createBtn.click()
        await this.nameField.fill(name)
        await this.nameField.press('Enter')
    }

    async deleteTaskType(){
        await this.threedotBtn.click()
        await this.delete.click()
        await this.deleteBtn.click()
    }
}