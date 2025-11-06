export class ManageUser {
    constructor(page){
        this.page = page
        this.settings = 
        this.manageUser = page.getByText('Manage Users')
        this.invite = page.getByRole('button', { name: 'Invite Users' })
        this.emailField = page.getByPlaceholder('Enter email')
        this.roleBtn =  page.getByRole('combobox').filter({ hasText: 'User' })
        this.role = page.getByLabel('Super Admin').getByText('Super Admin')
        this.inviteBtn = page.getByRole('button', { name: 'Send' })
        this.remove = page.getByRole('button', { name: 'Remove' })
        this.delete = page.getByRole('button', { name: 'Delete' })
    }

    async openManageUser (){
        await this.settings.click()
        await this.manageUser.click()
    }

    async inviteUser(email){
        await this.invite.click()
        await this.emailField.fill(email)
        await this.roleBtn.click()
        await this.role.click()
        await this.inviteBtn.click()
    }

    async removeUser(){
        await this.remove.click()
        await this.delete.click()
    }
}