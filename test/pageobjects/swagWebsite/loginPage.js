class Login{
    constructor(){
        this.$username = () => $(`//input[@id='user-name']`)
        this.$password = () => $(`//input[@id='password']`)
        this.$loginButton=() => $(`//input[@id='login-button']`)
        this.$productsValidation=() =>$(`//span[text()='Products']`)
        
    }

    /**
     * User logging to the website
     */

    loginPage = async()=>{
        await this.$username().click();
        await browser.keys('standard_user')
        await this.$password().click();
        await browser.keys('secret_sauce')
        await this.$loginButton().click();

    }
}
export default new Login();