class Payment {
    constructor(){
        this.$paymentValidation = () =>$(`//span[text()='Checkout: Overview']`)
        this.$price =(productName) =>$(`//div[text()='${productName}']/parent::a/following-sibling::div[@class='item_pricebar']/div`)
        this.$totalPrice = () => $(`//div[@class='summary_subtotal_label']`)
        this.$finishButton =() => $(`//button[@id='finish']`)
    }

    priceValidation = async () => {
    let priceString1 = await this.$price('Sauce Labs Bolt T-Shirt').getText();
    let price1 = parseFloat(priceString1.match(/\d+\.\d+/)[0]);

    let priceString2 = await this.$price('Sauce Labs Backpack').getText();
    let price2 = parseFloat(priceString2.match(/\d+\.\d+/)[0]);

    let sumAmount = price1 + price2;
    return sumAmount.toFixed(2); 
    }


    totalPrice = async() =>{
        let amountString = await this.$totalPrice().getText();
        let amount = amountString.match(/\d+\.\d+/)[0];
        return amount;
    }
}
export default new Payment();