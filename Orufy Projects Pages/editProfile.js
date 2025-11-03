
import {test} from '@playwright/test'

export class EditProfile{

    constructor(page){
        this.page = page
        this.firstName = page.getByRole('textbox', { name: 'First Name' })
        this.lastName = page.getByRole('textbox', { name: 'Last Name' })
        this.colorBucket = page.locator('.text-text-400.group-hover\\:text-primary')
        this.uploadButton = page.getByRole('tab', { name: 'Upload Image' })
        this.uploadText = page.getByRole('button', { name: 'PNG,JPEG,GIF,JPG Max size 5' })
        this.uploadInput = page.locator('input[type="file"][accept="image/*"]')
        this.save = page.getByRole('button',{name:'Save'})
    }

    async openProfile(){
        await this.page.goto('https://projects.orufy.com/user-settings/profile')
    }

    async editNames(fname, lname){

        await this.firstName.dblclick();
        await this.firstName.fill(fname)
        await this.lastName.dblclick()
        await this.lastName.fill(lname)
    }

    async updateColor(){
        await this.colorBucket.click()
        const colorPicker = this.page.locator('.w-color-alpha > .w-color-interactive')
        await colorPicker.click()
        await this.page.locator('.w-color-interactive').first().click();
        await this.page.locator('html').click();

    }

    async uploadFile(filePath){
        await this.uploadButton.click()
        await this.uploadText.click()
        await this.uploadInput.setInputFiles(filePath)

    }

    async saveProfile(){
        await this.save.click();
    }
}