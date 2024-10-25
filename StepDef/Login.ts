import { Given, When, Then, AfterAll } from "@cucumber/cucumber";
import { LoginPageLocate } from "../PageObject/LoginPage";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let page: Page;
export let context: BrowserContext;
export let browser: Browser;

const { setDefaultTimeout } = require('@cucumber/cucumber');


setDefaultTimeout(100000);

Given('User Logs in as admin user',async () => {
    console.log("Launching browser...");
    browser = await chromium.launch({ headless: false, args: ['--start-maximized', '--window-size=1920,1080'], slowMo: 2000 });
    page = await browser.newPage();

    console.log("Navigating to the login page...");
    await page.goto("https://automationexercise.com/");
    await page.waitForTimeout(3000);
    let txt = await page.title();
    console.log("Automation side--------",txt);
    // let txt2 = await page.locator("//h1//span[contains(text(),'Automation')]").innerText();
    // console.log(txt2);
    await page.locator("//a[contains(text(),'Signup / Login')]").click();
    await page.waitForTimeout(3000);

    
});



AfterAll(async function () {
    if (context) {
        await context.close();
    }
    if (page) {
        await page.close();
    }
    if (browser) {
        await browser.close();
    }
});
