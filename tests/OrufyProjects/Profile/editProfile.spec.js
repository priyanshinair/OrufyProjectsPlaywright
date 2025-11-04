import { test, expect } from '../fixtures/loginfixture';
import { EditProfile } from '../../../Orufy Projects Pages/editProfile'

test.describe.serial('Profile Test Cases', () => {

    let editProf;

    test.beforeEach(async({loggedInPage, page}) => {
        editProf = new EditProfile(loggedInPage)
        await page.waitForTimeout(7000)
        await editProf.openProfile();
    })


    test('Update profile name', async({}) => {
        await editProf.editNames("playwright", "generated")
        await editProf.saveProfile()

    })

    test.skip('Update profile names with empty values', async({page})=> {
        const firstNameError = page.getByText('Please enter your first name' )
        const lastNameError =  page.getByText('Please enter your last name')
        await editProf.editNames("","")
        await editProf.saveProfile()
        await page.waitForTimeout(5000)
        await expect(firstNameError).toBeVisible();
        await expect(lastNameError).toBeVisible();
    })

    test.skip('Update avatar color' ,async({}) => {
        await editProf.updateColor();
        await editProf.saveProfile()
    })

    test.skip('Update profile photo', async()=>{
        await editProf.uploadFile("/home/om/Videos/Priyanshi P/Orufy Playwright/tests/SampleFiles/1024x500.jpg")
        await editProf.saveProfile()

    })
})

 