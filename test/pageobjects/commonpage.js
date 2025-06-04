export default class CommonClass {
    async open(){
            await browser.url("https://demoblaze.com/#")
        }
    constructor(){
        this.$navBar = (content) =>  $(`//a[text()='${content}']`);
        //this.$navBar = (content) =>  $(`//a[text()='${content}']`);
        }
    }

