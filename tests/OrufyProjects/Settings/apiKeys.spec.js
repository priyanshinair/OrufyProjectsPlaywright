import {test, expect} from '../fixtures/loginfixture'
import { ApiKeys } from '../../../Orufy Projects Pages/apiKeys'

test.describe('api keys test cases',()=>{
    let ak
    test.beforeEach(async({loggedInPage, page})=>{
        await page.waitForTimeout(5000)
        ak = new ApiKeys(loggedInPage)
        ak.openApikey()
        await page.waitForTimeout(5000)
    })

    test('create api key', async() =>{
        await ak.createApikey("playwright generated")
    })

    test('delete api key', async() =>{
        await ak.deleteApikey()
    })
})