class Cart{
    constructor(){
        this.$cartValidation =() =>$(`//span[text()='Your Cart']`)
        this.$productValidation =(cartProductName) =>$(`//div[text()='${cartProductName}']`)
        this.$checkOutButton = () => $(`//button[text()='Checkout']`)
    }
}

export default new Cart();