import { test, expect } from '@playwright/test';
import { navigateToPage } from '../general/general';
import Header from '../pages/header';
import Austin from '../pages/austin';


const testData = {
    home_title: 'Austin Web & App Developers | December Labs',
}


test.describe('SUITE: austin office', () => {

    test.beforeEach(async ({ page }) => {
        const header = new Header(page);
        await navigateToPage(page, '/locations/austin/', testData.home_title);
    });

    test('should open and close schedule free consultation modal', async ({ page }) => {
        const austin = new Austin(page);
        await austin.clickOnScheduleFreeConsultation();
        let modalIsVisible = await austin.isScheduleCalendarModalVisible();
        expect(modalIsVisible).toBeTruthy();
        await austin.closeCalendarModal();
        modalIsVisible = await austin.isScheduleCalendarModalVisible();
        expect(modalIsVisible).toBeFalsy();
    });

});