export class CreateGlobalTask {

    constructor(page){
        this.page = page
        this.createTaskBtn = page.locator('div').filter({ hasText: /^Create Task$/ }).nth(3)
        this.taskTypeDD = page.getByRole('combobox').filter({ hasText: 'Task' })
        this.selectTaskTypeOption = page.getByRole('option', { name: 'Feature' })
        this.statusDD = page.getByRole('combobox').filter({ hasText: 'TO DO' })
        this.selectStatusOption =  page.getByRole('option', { name: 'IN PROGRESS' })
        this.taskTitle = page.getByRole('textbox', { name: 'Task Title' })
        this.taskDescription =  page.getByRole('paragraph').filter({ hasText: /^$/ })
        this.assigneeDD =  page.locator('div').filter({ hasText: 'Select Assignee' }).nth(5)
        this.selectAssigneeOption = page.locator('div').filter({ hasText: 'Select Assignee' }).nth(5)
        this.priorityDD = page.getByRole('combobox').filter({ hasText: 'Select Priority' })
        this.selectPriorityOption = page.getByRole('option', { name: 'High High' })
        this.createBtn = page.getByRole('button', { name: 'Create' })


    }

    async createTask(title, description){
        await this.createTaskBtn.click()
        await this.taskTypeDD.click()
        await this.selectTaskTypeOption.click()
        await this.statusDD.click()
        await this.selectStatusOption.click()
        await this.taskTitle.fill(title)
        await this.taskDescription.fill(description)
        await this.assigneeDD.click()
        await this.selectAssigneeOption.click()
        await this.priorityDD.click()
        await this.selectPriorityOption.click()
        await this.createBtn.click()
    }
}