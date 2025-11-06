export class ApiKeys{
    constructor(page){
        this.page = page
        this.settings = page.getByRole('img').nth(4)
        this.apikey = page.getByText('API Keys')
        this.create = page.getByRole('button', { name: 'Create New API Key' })
        this.keyname = page.getByRole('textbox', { name: 'Key Name' })
        this.generate = page.getByRole('button', { name: 'Generate' })
        this.close = page.getByRole('button', { name: 'Okay! Got it' })
        this.threedot = page.getByRole('button').filter({ hasText: /^$/ }).first()
        this.delete = page.getByRole('menuitem', { name: 'Delete' })
        this.deleteBtn = page.getByRole('button', { name: 'Delete' })
    }

    async openApikey(){
        await this.settings.click()
        await this.apikey.click()
    }

    async createApikey(name){
        await this.create.click()
        await this.keyname.fill(name)
        await this.generate.click()
        await this.close.click()
    }

    async deleteApikey(){
        await this.threedot.click()
        await this.delete.click()
        await this.deleteBtn.click()
    }
}