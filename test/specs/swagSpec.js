import login from "../pageobjects/swagWebsite/loginPage.js"
import testdata from "../testdata/testdata.json" with {type: "json"}
import productPage from "../pageobjects/swagWebsite/productPage.js"
import cartPage from "../pageobjects/swagWebsite/cartPage.js"
import checkoutPage from "../pageobjects/swagWebsite/checkoutPage.js"
import paymentPage from "../pageobjects/swagWebsite/paymentPage.js"
import lastPage from "../pageobjects/swagWebsite/lastPage.js"


describe('Automating swag website', () => {
    it('opening the website', async () => {
        await browser.url(testdata.swagURL)


    })
    it('User log in to the website', async () => {
        login.loginPage();
        expect(login.$productsValidation()).toBeDisplayed();

    })
    it('user adding 1 item to cart', async () => {
        await productPage.$addToCart('Sauce Labs Backpack').click();
        expect(productPage.$remove('Sauce Labs Backpack')).toBeDisplayed();
        expect(productPage.$cartNumber('1')).toBeDisplayed();

    })
    it('user adding 2 item to cart', async () => {
        await productPage.$addToCart('Sauce Labs Bolt T-Shirt').click();
        expect(productPage.$remove('Sauce Labs Bolt T-Shirt')).toBeDisplayed();
        await productPage.$addToCart('Sauce Labs Fleece Jacket').click();
        expect(productPage.$remove('Sauce Labs Fleece Jacket')).toBeDisplayed();
        expect(productPage.$cartNumber('3')).toBeDisplayed();

    })
    it('user removing an item from cart', async () => {
        await productPage.$remove('Sauce Labs Fleece Jacket').click();
        expect(productPage.$addToCart('Sauce Labs Fleece Jacket')).toBeDisplayed();
        expect(productPage.$cartNumber('2')).toBeDisplayed();

    })
    it('user naviagting to cart page and validating the items', async () => {
        let price1Product1 = await productPage.priceValidation1();
        let price1Product2 = await productPage.priceValidation2();
        await productPage.$cartButton().click();
        let price2Product1 = await cartPage.priceValidation1();
        let price2Product2 = await cartPage.priceValidation2();
        expect(price1Product1).toBe(price2Product1);
        expect(price1Product2).toBe(price2Product2);
        await expect(cartPage.$cartValidation()).toBeDisplayed();
        await expect(cartPage.$productValidation('Sauce Labs Backpack')).toBeDisplayed();
        await expect(cartPage.$productValidation('Sauce Labs Bolt T-Shirt')).toBeDisplayed();
    })
    it('user navigating to checkout page', async () => {
        await cartPage.$checkOutButton().click();
        expect(checkoutPage.$checkOutValidation()).toBeDisplayed();
        await checkoutPage.checkOutForm();
        await checkoutPage.$continueButton().click();
        expect(paymentPage.$paymentValidation()).toBeDisplayed()

    })
    it('validating the total price', async () => {
        let totalAmount1 = await paymentPage.priceValidation();
        let totalAmount2 = await paymentPage.totalPrice();
        expect(totalAmount1).toEqual(totalAmount2);
        await paymentPage.$finishButton().click();
        expect(lastPage.$lastPagrValidation()).toBeDisplayed();

    })
    it('last page validation', async () => {
        await expect(lastPage.$thankMessage()).toBeDisplayed();
        await lastPage.$backButton().click();
        expect(login.$productsValidation()).toBeDisplayed();
    })





})