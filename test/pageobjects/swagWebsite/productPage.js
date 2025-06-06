class Products{
    constructor(){
        this.$addToCart = (productName) => $(`//div[text()='${productName}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Add to cart']`)
        this.$remove = (productName) => $(`//div[text()='${productName}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Remove']`)
        this.$cartNumber =(number) => $(`//span[text()='${number}']`)
        this.$productPrice = (productName) => $(`//div[text()='${productName}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/div`)
        this.$cartButton =()=>$(`//a[@class='shopping_cart_link']`);

    }
    priceValidation1 = async() =>{
        let Price1 = await this.$productPrice('Sauce Labs Backpack').getText();
        return Price1;
    }
    priceValidation2 = async() =>{
        let Price2 = await this.$productPrice('Sauce Labs Bolt T-Shirt').getText();
        return Price2;
    }

    
}

export default new Products();