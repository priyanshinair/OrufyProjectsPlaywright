import {test, expect} from '../OrufyProjects/fixtures/loginfixture'
import { CreateProject } from '../../Orufy Projects Pages/createProject'

test.describe('create project test cases', () =>{
    let cp 
    test.beforeEach(async({loggedInPage, page})=>{
        await page.waitForTimeout(4000)
        cp = new CreateProject(loggedInPage)
        await page.waitForTimeout(4000)

    })

    test('create project', async() => {
        cp.createProject('playwright generated project1','playwright generated status', 'playwright done status')
    })

    test('delete project', async() =>{
        await cp.deleteProject('playwright generated project1')
    })
})


