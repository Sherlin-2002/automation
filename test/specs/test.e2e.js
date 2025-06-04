import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'
import Homepage from '../pageobjects/testDemo/homepage.js'
import CommonClass from "../pageobjects/testDemo/commonpage.js"


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

describe('home page is displayed of demoblaze', () => {
    it('url must open', async () => {
        const common = new CommonClass();
        await common.open();
        //await Homepage.$prodCategory('Laptops').click();
    })
    it('buttons need to be present', async () => {
        const menu = ['Home ', 'Contact', 'About us', 'Cart', 'Log in', 'Sign up']
        for (const item of menu) {
            await expect(Homepage.$navmenu(item)).toBeExisting();
        }

    })
    it('navigate to product page', async () => {
        //const nav = ;
        if (await Homepage.$productname('Samsung galaxy s6').isExisting()) {
            await Homepage.$productname('Samsung galaxy s6').click();
        }


    })
    it('add to cart is present', async () => {
        await Homepage.$addtocart().waitForDisplayed({ timeout: 10000, timeoutMsg: "failed" });
        await expect(Homepage.$addtocart()).toBeExisting();

    });
    

})

