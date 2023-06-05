import { Page } from "@playwright/test";

class Header {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    headerMenu = "#menu-header-main-menu"

    public async isMainHeaderMenuVisible() {
        const headerMenu = await this.page.$(this.headerMenu);
        if (!headerMenu) {
            throw new Error("Header did not load correctly");
        }
    }


}

export default Header