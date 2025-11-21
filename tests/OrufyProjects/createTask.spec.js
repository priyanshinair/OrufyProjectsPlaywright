import {test, expect} from '../OrufyProjects/fixtures/loginfixture'
import { CreateGlobalTask } from '../../Orufy Projects Pages/createGlobalTask'

test.describe('Create Task From Global test cases', () =>{
    let ct
    test.beforeEach(async({loggedInPage, page}) => {
        await page.waitForTimeout(5000)
        ct = new CreateGlobalTask(loggedInPage)
        await page.waitForTimeout(5000)
    })

    test('create task ', async()=>{
        ct.createTask('playwright generated task title','playwright generated task description')
    })

})