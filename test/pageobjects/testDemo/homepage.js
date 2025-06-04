import CommonClass from "./commonpage.js";

class HomePage extends CommonClass {
    constructor() {
        super(); 

        this.$productPrice = (productName) =>$(`//a[text()='${productName}']/ancestor::div[@class='card-block']//h5`);
        this.$navmenu = (navigationmenu) =>$(`//a[text()="${navigationmenu}"]`)
        this.$phonesCategory = () => $(`//a[text()='Phones']`);
        this.$laptopsCategory = () => $(`//a[text()='Laptops']`);
        this.$monitorsCategory = () => $(`//a[text()='Monitors']`);
        this.$prodCategory = (category) => $(`//a[text()='${category}']`);
        this.$productname =(productlabel) =>$(`//a[text()="${productlabel}"]`)
        this.$addtocart =()=>$(`//a[text()="Add to cart"]`)
    }
  
}

export default new HomePage();

