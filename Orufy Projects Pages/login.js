import {expect} from '@playwright/test'

export class LoginPage{

    constructor(page){
        this.page = page
        this.email = page.locator('input[name="emailId"]')
        this.password = page.locator('input[name="password"]')
        this.button = page.locator('//html/body/div[1]/div[1]/div/form/div[3]/button')
    }

    async goto(){
        await this.page.goto('https://orufy.com/login?redirect=PROJECTS')

    }

    async login(email, password){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.button.click()
    }
}