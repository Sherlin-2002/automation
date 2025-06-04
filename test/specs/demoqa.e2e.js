import DemoQa from "../pageobjects/demoqa.js"
import Checkboxpage from "../pageobjects/checkboxpage.js"
import Practiseform from "../pageobjects/practiseform.js";
import { faker } from '@faker-js/faker';
import testdata from "../testdata/testdata.json" with {type:"json"}

describe('automation in demoqa website in elements menu', () => {
    it('website open', async () => {
        await browser.url(testdata.url);
    })


    it('open elements page', async () => {
        await DemoQa.$elements().click();
    })

    it('click on checkbox menu', async () => {
        await DemoQa.$checkboxmenu().click();
    })

    it('click on home checkbox', async () => {
        const msg = ['home', 'desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private', 'classified', 'general', 'downloads', 'wordFile', 'excelFile'];
        await Checkboxpage.$homecheckbox().click();
        for (const item of msg) {
            await expect(Checkboxpage.$message(item).toBePresent)

        }
        await Checkboxpage.$homecheckbox().click();
        for (const item of msg) {
            expect(await (Checkboxpage.$message(item).isExisting())).toBe(false);
        }

    })

    it('click on desktop checkbox', async () => {
        await Checkboxpage.$hometoggle().click();
        await Checkboxpage.$desktoptoggle().click();
        await Checkboxpage.$desktopcheckbox().click();
        const msg = ['desktop', 'notes', 'commands'];
        for (const item of msg) {
            await expect(Checkboxpage.$message(item).toBePresent)

        }
        await Checkboxpage.$desktopcheckbox().click();
        for (const item of msg) {
            expect(await (Checkboxpage.$message(item).isExisting())).toBe(false);
        }
    });
    it('click on document checkbox', async () => {

        await Checkboxpage.$documentstoggle().click();
        await Checkboxpage.$documentscheckbox().click();
        const msg = ['documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private', 'classified', 'general'];
        for (const item of msg) {
            await expect(Checkboxpage.$message(item).toBePresent)

        }
        await Checkboxpage.$documentscheckbox().click();
        for (const item of msg) {

            expect(await (Checkboxpage.$message(item).isExisting())).toBe(false);
        }
    });
    it('click on download checkbox', async () => {

        await Checkboxpage.$downloadstoggle().click();
        await Checkboxpage.$downloadscheckbox().click();
        const msg = ['downloads', 'wordFile', 'excelFile'];
        for (const item of msg) {
            await expect(Checkboxpage.$message(item).toBePresent)

        }
        await Checkboxpage.$downloadscheckbox().click();
        for (const item of msg) {
            expect(await (Checkboxpage.$message(item).isExisting())).toBe(false);
        }
    });
})

describe('automation in practise form',()=>{
    it('first name and last name',async()=>{
        await DemoQa.$elementmenu().click();
        await DemoQa.$formsmenu().click();
        await DemoQa.$practiseformmenu().click();
        await Practiseform.$firstname().click();
        await Practiseform.$firstname().setValue(faker.person.firstName());
        await Practiseform.$lastname().click();
        await Practiseform.$lastname().setValue(faker.person.lastName());

    })
    it('email generation',async()=>{
        await Practiseform.$useremail().click();
        await Practiseform.$useremail().setValue(faker.internet.email());
        
    })
    it('gender generation',async()=>{
        await Practiseform.$gender().click();
        
    })
    // it('mobile number generation',async()=>{
    //     await Practiseform.$number().click();
    //     await Practiseform.$number().setValue(faker.person.)
    // })
    it('date of birth generation',async()=>{
        await Practiseform.$datepicker().click();
        await browser.keys(['Control', 'a']);
        await browser.keys('18-02-2002');
        await browser.keys('Enter');
       
    })
    it('subjects text  biox',async()=>{
        await Practiseform.$subjects().click();
        await browser.keys('Computer science, C,R,Java,Python');
        await browser.keys('Enter');
       
    })


})