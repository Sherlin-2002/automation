import DemoQa from "./demoqa.js"
import { faker } from "@faker-js/faker";
class Webtable extends DemoQa{
    constructor(){
        super();
        this.$Add=()=>$(`// button[text()='Add']`)
        this.$firstname=()=>$(`// input[@id='firstName']`)
        this.$lastname=()=>$(`// input[@id='lastName']`)
        this.$email=()=>$(`// input[@id='userEmail']`)
        this.$age=()=>$(`// input[@id='age']`)
        this.$salary=()=>$(`// input[@id='salary']`)
        this.$department=()=>$(`// input[@id='department']`)
        this.$button=()=>$(`// button[@id='submit']`)
        this.$registartionform=()=>$(`//div[text()='Registration Form']`)
        this.$first_name=(firstname)=>$(`//div[text()="${firstname}"]`)
        this.$last_name=(l_name)=>$(`//div[text()='${l_name}']`)
        this.$age_=(age_)=>$(`//div[text()='${age_}']`)
        this.$email_=(email_)=>$(`//div[text()='${email_}']`)
        this.$salary_=(salary_)=>$(`//div[text()='${salary_}']`)
        this.$department_=(department_)=>$(`//div[text()='${department_}']`)
        this.$editButton = () => $(`//span[@id="edit-record-1"]`);
        this.$dataloc=(cont)=>$(`//div[text()="${cont}"]`);
        this.$editbut=(nm)=>$(`//div[text()="${nm}"]/following-sibling::div[6]/div/span[@title="Edit"]`)
        this.$deletebut=(nm)=>$(`//div[text()="${nm}"]/following-sibling::div[6]/div/span[@title="Delete"]`);
        this.$dataloc=(cont)=>$(`//div[text()="${cont}"]`);


    }
        edit =async()=>{
        let randomName = faker.person.firstName();
        await this.$firstname().setValue(randomName);
        await this.$button().click();
        return randomName;
        }
}
export default new Webtable();