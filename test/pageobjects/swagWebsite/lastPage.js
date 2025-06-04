class Lastpage{
    constructor(){
        this.$lastPagrValidation = () => $(`//span[text()='Checkout: Complete!']`)
        this.$thankMessage = () => $(`//h2[text()='Thank you for your order!']`)
        this.$backButton =() => $(`//button[@id='back-to-products']`)
    }
}
export default new Lastpage();