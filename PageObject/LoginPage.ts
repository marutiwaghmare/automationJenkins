import { Page, Locator } from "@playwright/test";


export class LoginPageLocate {
    public page: Page;
    //Login Fields
    txtEmail: Locator;
    btnNextPwd: Locator;
    txtPassword: Locator;
    btnLogin: Locator;

   
   
    tabClient: Locator;

    constructor(page: Page) {
        this.page = page;

        //Login Fields
        this.txtEmail = page.locator("//input[contains(@type,'email')]")
        this.btnNextPwd = page.locator('text=Next');
        this.txtPassword = page.locator("//input[contains(@type,'password')]")
        this.btnLogin =  page.locator("//span[contains(text(),'Login')]");

        //Validations
       
        this.tabClient = page.locator("//button[text()=' Client Collection ']");
    }

   



}