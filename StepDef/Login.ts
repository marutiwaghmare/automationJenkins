import { Given, When, Then, AfterAll } from "@cucumber/cucumber";
import { LoginPageLocate } from "../PageObject/LoginPage";
import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";

let page: Page;
export let context: BrowserContext;
export let browser: Browser;

const { setDefaultTimeout } = require('@cucumber/cucumber');


setDefaultTimeout(100000);

Given('Launch URL and verify',async () => {
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
    

    
});
When ('User should click sign up login button',async () => {
    await page.locator("//a[contains(text(),'Signup / Login')]").click();
    await page.waitForTimeout(3000);
})

When ('User should enter name as {string} and email as {string} and click on sign up button',async (name,email) => {
    let loginpage = new LoginPageLocate(page);
    await loginpage.inputName.fill(name);
    
    await loginpage.inputEmail.fill(email);
    await loginpage.btnSignUp.click();
    await page.waitForTimeout(3000);
})
When ('User should register form',async () => {
    await page.click('input[name="title"][value="Mr"]'); // Selecting title
    await page.fill('input[name="password"]', 'SecurePassword123');
    
    // Fill in the date of birth
    await page.selectOption('select[name="days"]', '1');
    await page.selectOption('select[name="months"]', '1');
    await page.selectOption('select[name="years"]', '1990');
  
    // Subscribe to newsletters
    await page.check('input#newsletter');
    await page.check('input#optin');
  
    // Fill address information
    await page.fill('input[name="first_name"]', 'John');
    await page.fill('input[name="last_name"]', 'Doe');
    await page.fill('input[name="address1"]', '123 Main St');
    await page.fill('input[name="address2"]', 'Apt 4B');
    await page.selectOption('select[name="country"]', 'United States');
    await page.fill('input[name="state"]', 'California');
    await page.fill('input[name="city"]', 'Los Angeles');
    await page.fill('input[name="zipcode"]', '90001');
    await page.fill('input[name="mobile_number"]', '1234567890');
  
    // Submit the form
    await page.click('button[data-qa="create-account"]');  
})
Then('I should see a success message', async () => {
    await page.waitForTimeout(3000);
    const successMessage = await page.locator('h2[data-qa="account-created"]').innerText();
    console.log("Messageeeeeeeee",successMessage);
    expect(successMessage).toContain('ACCOUNT CREATED!');
    console.log(successMessage);
//   if (!successMessage.includes('Account Created!')) {
//     throw new Error('Account creation was not successful');
//   }

  // Click on the continue button
  await page.click('a[data-qa="continue-button"]');
    
  });

  When ('user should scroll down the page and last third product add to cart and verify message and continue',async () => {
    await page.locator("//div[contains(@class,'productinfo text-center')]//p[contains(text(),'Cotton Silk Hand Block Print Saree')]").scrollIntoViewIfNeeded();
    await page.locator("//div[contains(@class,'productinfo text-center')]//p[contains(text(),'Cotton Silk Hand Block Print Saree')]").hover();
    await page.locator("//div[contains(@class,'product-overlay')]//p[contains(text(),'Cotton Silk Hand Block Print Saree')]/following-sibling::a").click()  

    // expect(page.locator("//p[contains(text(),'Your product has been added to cart.')]").innerText()).toContain('Your product has been added to cart.');
    await page.locator("//button[contains(text(),'Continue Shopping')]").click();
})

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
