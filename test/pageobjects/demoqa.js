class DemoQa  {
    constructor() {
        this.$elements = () => $(`//h5[text()='Elements']`)
        this.$elementmenu=()=>$(`//div[text()='Elements']`)
        this.$forms=()=>$(`//h5[text()='Forms']`)
        this.$formsmenu=()=>(`//div[text()='Forms']`)
        this.$checkboxmenu = () => $(`//span[text()='Check Box']`)
        this.$formsmenu =()=>$(`//div[text()='Forms']`)
        this.$practiseformmenu=()=>$(`//span[text()='Practice Form']`)
        this.$webtable=()=>$(`//span[text()='Web Tables']`)
              
        
        
    }
    
   
}
export default DemoQa;