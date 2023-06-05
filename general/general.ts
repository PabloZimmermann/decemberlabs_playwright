import { Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.BASE_URL;

export async function navigateToPage(page: Page, path: string, expectedTitle?: string) {
    await page.goto(`${URL}${path}`);
    const title = await page.title();
    if (expectedTitle && title !== expectedTitle) {
        throw new Error(`The expected title was not found. Expected: ${expectedTitle} - Actual: ${title}`);
    }
}

export async function getTitleAndURL(page: Page) {
    const title = await page.title();
    const url = page.url();
    return { title, url };
}

