import{ test, expect } from '@playwright/test';

test('Popup handling', async({page}) => {

    // simple alert -> 'ok'
    // confirm alert -> 'ok' and 'cancel'
    // prompt alert -> 'textbox'

    // message() -> to get the text in the dialog box
    // type() -> to find out the type of the alert
    // accept() -> to press 'ok'
    // dismiss() -> to press 'cancel'

    //page.once -> handles only one alert
    //page.on   -> handles all alerts

// page.on('dialog', (dialog) =>{
//     console.log("message is", dialog.message());
//     console.log(dialog.type());
//     dialog.accept();
// })
// await page.goto('https://demoqa.com/alerts');
// await page.click('[id="alertButton"]');
// await page.waitForTimeout(2000);
// await page.click('[id="confirmButton"]');
// await page.waitForTimeout(2000);

// await page.waitForTimeout(6000);

// try{
//     const btnclose = await page.locator('[class="b3wTlE"]')
//     btnclose.waitFor({state:'visible'});
//     btnclose.click();
// }
// catch(e){
//     console.error('button is not visible');
// }

await page.goto('https://www.flipkart.com/');
await page.locator('form[action="/search"] input[placeholder="Search for Products, Brands and More"]').fill('laptops');
await page.waitForTimeout(2000);
})