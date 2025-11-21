export class CreateProject {

    constructor(page) {
        this.page = page;
        this.createProjectBtn = page.getByRole('button').nth(3);
        this.projectName = page.getByRole('textbox', { name: 'Project Name' });
        //this.scrumProject = page.locator('.flex.h-\\[60px\\].w-\\[422px\\].max-w-\\[422px\\].cursor-pointer.items-center.gap-3.rounded-lg.border.p-3.border-outline').first();
        //this.bugProject = page.locator('div').filter({ hasText: /^BugGet default boards to track bugs\.$/ }).first();
        //this.createownProject = page.locator('div').filter({ hasText: /^Create your ownCreate your own status list\.$/ }).first();
        this.addStatusBtn = page.getByRole('button', { name: 'Add Status' }).first();
        this.doneStatusBtn = page.getByRole('button', { name: 'Add Status' }).nth(1);
        this.createBtn = page.getByRole('button', { name: 'Create Project' });
    }

    async createProject(projectname, statusname, donestatusname) {
        await this.createProjectBtn.click();
        await this.projectName.fill(projectname);

        // Add status
        await this.addStatusBtn.click();
        await this.page.keyboard.type(statusname);
        await this.page.keyboard.press('Enter');

        // Done status
        await this.doneStatusBtn.click();
        await this.page.keyboard.type(donestatusname);
        await this.page.keyboard.press('Enter');

        //Scrum Project
        //await this.scrumProject.click()

        await this.createBtn.click();
    }
}
