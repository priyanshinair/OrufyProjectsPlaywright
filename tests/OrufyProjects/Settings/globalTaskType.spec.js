import { test, expect } from '../fixtures/loginfixture';
import { GlobalTaskType } from '../../../Orufy Projects Pages/globalTaskTYpe';

test.describe('Global Task Type test cases', () => {
    let gtt;
    test.beforeEach(async({loggedInPage, page}) => {
        await page.waitForTimeout(7000)
        gtt = new GlobalTaskType(loggedInPage)
        await gtt.openGlobalTaskType()
    })

    test.skip('create global task type', async()=> {
        await gtt.createTaskType('playwright created')
    })

    test('delete task type', async() => {
        await gtt.deleteTaskType()
    })
})