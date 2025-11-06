import {test, expect} from '../fixtures/loginfixture'
import { ManageUser } from '../../../Orufy Projects Pages/manageUsers'

test.describe('manage user test cases', () =>{
    let mg
    test.beforeEach(async({loggedInPage, page}) =>{
        await page.waitForTimeout(5000)
        mg = new ManageUser(loggedInPage)
        mg.openManageUser()
        await page.waitForTimeout(5000)

    })

    test('invite user', async()=>{
        mg.inviteUser("priyannshi+1@orufy.com")
    })

    test('remove user', async() => {
        mg.removeUser()
    })
})