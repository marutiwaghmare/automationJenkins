import { Page, Locator } from "@playwright/test";


export class LoginPageLocate {
    public page: Page;
    //Login Fields
    inputName:Locator;
    inputEmail:Locator;
    btnSignUp:Locator;
    btnLogin:Locator;

   
   
    tabClient: Locator;

    constructor(page: Page) {
        this.page = page;

        //Login Fields
        this.inputName = page.locator("input[name*=name]")
        this.inputEmail = page.locator('input[data-qa=signup-email]');
        this.btnSignUp = page.locator("button[data-qa=signup-button]")
        this.btnLogin =  page.locator("button[data-qa*=login]");

        //Validations
       
        this.tabClient = page.locator("//button[text()=' Client Collection ']");
    }

   



}