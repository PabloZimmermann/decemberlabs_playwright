import { test, expect } from '@playwright/test';
import { navigateToPage, getTitleAndURL } from '../general/general';
import Footer from '../pages/footer';
import Header from '../pages/header';


const testData = {
  home_title: 'December Labs: UX/UI Design and Mobile App & Web Development',
  austin_title: 'Austin Web & App Developers | December Labs',
  austion_url: 'https://inhouse.decemberlabs.com/locations/austin/',
}


test.describe('SUITE: Footer links redirections', () => {


  test.beforeEach(async ({ page }) => {
    const header = new Header(page);
    await navigateToPage(page, '/', testData.home_title);
    await header.isMainHeaderMenuVisible();
  });


  test('should have footers links redirecting correctly', async ({ page }) => {
    // i would have map other links in this test 
    const footer = new Footer(page);
    await footer.clickOnLinkByText('Austin');
    const { title, url } = await getTitleAndURL(page);
    expect(title).toBe(testData.austin_title);
    expect(url).toBe(testData.austion_url);
  });

});


