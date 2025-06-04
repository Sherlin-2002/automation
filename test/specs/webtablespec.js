import { faker } from "@faker-js/faker"
import webtable from "../pageobjects/demoQA/webtable.js"
import testdata from "../testdata/testdata.json" with {type:"json"}

describe('web table data entry',()=>{
    let f_name,ename;
    it('opening the wesite',async()=>{
        await browser.url(testdata.url)
    })
    it('clicking web table menu',async()=>{
        await webtable.$elements().click();
        expect()

        await webtable.$webtable().click();

    });
    it('clicking on add button to add new person',async()=>{
        await webtable.$Add().click();
        //expect(webtable.$registartionform().toBePresent())
    })
    it('filling registration form',async()=>{
       f_name=faker.person.firstName();
        await webtable.$firstname().setValue(f_name);
        let l_name =faker.person.lastName();
        await webtable.$lastname().setValue(l_name);
        let mail =faker.internet.email()
        await webtable.$email().setValue(mail)
        let age =faker.number.int()
        await webtable.$age().setValue(age);
        let sal=faker.number.int();
        await webtable.$salary().setValue(sal);
        let dept=faker.commerce.department();
        await webtable.$department().setValue(dept)
        await webtable.$button().click()
        
        await expect(webtable.$first_name(f_name)).toBeDisplayed();
        await expect(webtable.$last_name(l_name)).toBeDisplayed();
        await expect(webtable.$email_(mail)).toBeDisplayed();
        await expect(webtable.$department_(dept)).toBeDisplayed();
        

    })
    it('edit the form and validate it is displayed', async () => {
        await webtable.$editbut(f_name).click();
        ename=await webtable.edit(f_name);  
        await expect(webtable.$dataloc(ename)).toBeDisplayed();    
    });
    it('delete the data and validate it is deleted', async () => {
    
       await webtable.$deletebut(ename).click();
       await expect(webtable.$dataloc(ename)).not.toBeDisplayed();
    });
    

})