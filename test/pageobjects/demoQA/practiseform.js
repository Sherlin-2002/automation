class Practiseform{
    constructor(){
        this.$firstname=()=>$(`//input[@id='firstName']`)
        this.$lastname=()=>$(`//input[@id='lastName']`)
        this.$useremail=()=>$(`//input[@id='userEmail']`)
        this.$gender=()=>$(`//label[text()='Male']`)
        this.$number=()=>$(`//div[@class='col-md-9 col-sm-12']/input[@id='userNumber']`)
        this.$datepicker=()=>$(`//div[@class='react-datepicker__input-container']`)
        this.$subjects=()=>$(`//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']`)
        this.$hobbies=()=>$(`//label[text()='Music']`)
        this.$uploadpicture=()=>(`//input[@id='uploadPicture']`)
        this.$currentaddrress=()=>(`//textarea[@id='currentAddress']`)
        this.$state=()=>$(`//div[text()='NCR']`)
        this.$city=()=>$(`//div[text()='Delhi']`)
        this.$submit=()=>$(`//div[@class='text-right col-md-2 col-sm-12']`)
    }
}

export default new Practiseform();