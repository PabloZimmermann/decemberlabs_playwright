import { Page } from "@playwright/test";

class Footer {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnLinkByText(text: string) {
        try {
            await this.page.click(`a:text("${text}")`);
        } catch (error) {
            throw new Error(`The Link with text ${text} was not found`);
        }
    }
}


export default Footer