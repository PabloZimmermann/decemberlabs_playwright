import { Page } from "@playwright/test";

class Austin {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    public async clickOnScheduleFreeConsultation() {
        try {
            await this.page.click(`a:text("Schedule free consultation")`);
        } catch (error) {
            throw new Error(`Schedule free consultation button was not found`);
        }
    }

    public async isScheduleCalendarModalVisible() {
        const modal = await this.page.$('.dl-modal.calendar-modal.open');
        return modal !== null;
    }

    public async closeCalendarModal() {
        const modalContainer = await this.page.waitForSelector('.dl-modal');
        if (modalContainer) {
            const closeButton = await this.page.$('.btn-close-modal');
            if (closeButton) {
                await closeButton.click();
                return true;
            }
        }
        return false;
    }

}


export default Austin