class Products{
    constructor(){
        this.$addToCart = (productName) => $(`//div[text()='${productName}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Add to cart']`)
        this.$remove = (productName) => $(`//div[text()='${productName}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Remove']`)
        this.$cartNumber =(number) => $(`//span[text()='${number}']`)
        this.$cartButton =()=>$(`//a[@class='shopping_cart_link']`);

    }

    // addToCart =async() =>{
    //     await $addToCart('Sauce Labs Backpack').click();
    // } 
}

export default new Products();