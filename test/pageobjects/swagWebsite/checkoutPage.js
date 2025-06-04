import { faker } from "@faker-js/faker" 
class Checkout{
    constructor(){
        this.$checkOutValidation = () =>$(`//span[text()='Checkout: Your Information']`)
        this.$firstName =() =>$(`//input[@id='first-name']`)
        this.$lastName =() =>$(`//input[@id='last-name']`)
        this.$postalCode =() =>$(`//input[@id='postal-code']`)
        this.$continueButton =() =>$(`//input[@id='continue']`)
        }

        checkOutForm = async() =>{
            await this.$firstName().click();
            let fName = faker.person.firstName(); 
            await this.$firstName().setValue(fName);
            await this.$lastName().click();
            let lName = faker.person.lastName(); 
            await this.$lastName().setValue(lName);
            await this.$postalCode().click();
            let pCode = faker.location.zipCode(); 
            await this.$postalCode().setValue(pCode);
            
        }

}

export default new Checkout();