export class RolesPermission {

    constructor(page){
        this.page = page
        this.settings = page.getByRole('img').nth(4);
        this.rolesPermission = page.getByRole('menuitem', { name: 'Roles & permissions' })
        this.createRole = page.getByRole('button', { name: 'Add New Role' })
        this.nameField = page.getByRole('textbox', { name: 'Enter Role Name' })
        this.createProject = page.getByRole('switch').first()
        this.branding = page.getByRole('switch').nth(1)
        this.globalCustomField = page.getByRole('switch').nth(2)
        this.globalTaskType = page.getByRole('switch').nth(3)
        this.roles = page.getByRole('switch').nth(4)
        this.import = page.getByRole('switch').nth(5)
        this.createBtn = page.getByRole('button', {name: 'Create'})
        this.threeDot = page.getByRole('button').filter({ hasText: /^$/ }).nth(2)
        this.delete = page.getByRole('menuitem', { name: 'Delete' })
        this.deleteBtn = page.getByRole('button', { name: 'Delete' })
    }

    async openRoles(){
        await this.settings.click()
        await this.rolesPermission.click()
    }

    async createRoles(name){
        await this.createRole.click()
        await this.nameField.fill(name)
        await this.createProject.click()
        await this.createBtn.click()
    }

    async deleteRole(){
        await this.threeDot.click()
        await this.delete.click()
        await this.deleteBtn.click()
    }

}