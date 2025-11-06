import {test, expect} from '../fixtures/loginfixture'
import { RolesPermission } from '../../../Orufy Projects Pages/GlobalRolesPermissions'


//generate random role name 
function generateRandomName() {
    return 'playwright created' + Math.floor(Math.random() * 1000);
  }

  

test.describe('roles & permissions test cases', () => {
    let rp
    test.beforeEach(async({loggedInPage, page}) => {
        await page.waitForTimeout(5000)
        rp = new RolesPermission(loggedInPage)
        await rp.openRoles()
        await page.waitForTimeout(5000)
    })

    test.skip('create role', async() => {
        const rolename = generateRandomName()
        await rp.createRoles(rolename)
    })

    test('delete role', async() => {
        await rp.deleteRole()
    })
})