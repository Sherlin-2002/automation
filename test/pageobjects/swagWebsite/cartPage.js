class Cart{
    constructor(){
        this.$cartValidation =() =>$(`//span[text()='Your Cart']`)
        this.$productValidation =(cartProductName) => $(`//div[text()='${cartProductName}']`)
        this.$priceValidation = (productName) => $(`//div[text()='${productName}']/parent::a/following-sibling::div[@class='item_pricebar']/div`)
        this.$checkOutButton = () => $(`//button[text()='Checkout']`)
    }

    priceValidation1 = async() =>{
        let cartPrice = await this.$priceValidation('Sauce Labs Backpack').getText();
        return cartPrice

    }
    priceValidation2 = async() =>{
        let cartPrice = await this.$priceValidation('Sauce Labs Bolt T-Shirt').getText();
        return cartPrice

    }
}

export default new Cart();