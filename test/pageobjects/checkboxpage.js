class Checkboxpage {

    constructor() {
        this.$homecheckbox = () => $(`//input[@id='tree-node-home']//parent::label//child::span[@class='rct-checkbox']`)
        this.$message = (hmsg) => $(`//span[text()='${hmsg}']`)
        this.$hometoggle = () => $(`//label[@for='tree-node-home']/preceding-sibling::button`)
        this.$desktopcheckbox = () => $(`//input[@id='tree-node-desktop']/parent::label/span[@class='rct-checkbox']`)
        this.$desktoptoggle = () => $(`//label[@for='tree-node-desktop']/preceding-sibling::button`)
        this.$documentscheckbox = () => $(`//input[@id='tree-node-documents']/parent::label/span[@class='rct-checkbox']`)
        this.$documentstoggle = () => $(`//label[@for='tree-node-documents']/preceding-sibling::button`)
        this.$downloadscheckbox = () => $(`//input[@id='tree-node-downloads']/parent::label/span[@class='rct-checkbox']`)
        this.$downloadstoggle = () => $(`//label[@for='tree-node-downloads']/preceding-sibling::button`)




    }


}
export default new Checkboxpage();











