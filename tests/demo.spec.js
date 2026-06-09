//const{test,expect} = require('@playwright/test');   // Common JS module
/*import{test,expect} from '@playwright/test';          // ES module
test('launch url', async({page}) => {
    await page.goto("https://www.facebook.com");
    await page.waitForTimeout(3000);
    await page.goto("https://www.instagram.com");
    await page.waitForTimeout(3000);
    await page.goBack("https://www.instagaram.com");
    await page.goForward("https://www.instagaram.com");
})

*/

// Locators
// in general locators - id, class, xpath, css
// in built locators
// 1. getByTestId()
// 2. getbyText()
// 3. getByPlaceholder()
// 4. getByAltText()
// 5. getByLabel()
// 6. getByTitle()
// 7. getByRole()

// DOM - Document object model (Ctrl+Shift+I)
// 1. pink      -> tagname
// 2. orange    -> attribute
// 3. blue      -> value
// 4. black     -> text

// id -> #
/*
import{test,expect} from '@playwright/test';
test('Locating the elements', async({page}) => {
await page.goto("https://www.amazon.com");
await page.waitForTimeout(3000);
const searchBar = await page.locator('input#twotabsearchtextbox');
await searchBar.fill('laptops')
await page.waitForTimeout(3000);

})
*/
/*
import{chromium, test} from '@playwright/test';
test('handling dropdown and record video', async({}) => {

// in built fixtures
// browser
// context
// page

const browser = await chromium.launch();
const context = await browser.newContext({
    recordVideo:{
        dir: 'recorder/'
    }
});
const page = await context.newPage()
// selectOption() -> to handle drop down
await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
await page.selectOption('#course', 'Python');
await page.waitForTimeout(2000);
await page.selectOption('#course', {value : 'net'});
await page.waitForTimeout(2000);
await page.selectOption('#course', {label : 'Javascript'} );
await page.waitForTimeout(2000);
await page.selectOption('#course', {index:1} );
await page.waitForTimeout(2000);
await page.selectOption('#ide', ['ec','ij','vs']);
await page.waitForTimeout(2000);

})

*/

import{ test} from '@playwright/test';
test('File handling', async({page}) => {
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
    //file uploading
    const filepath = "C:/Users/sound/Downloads/Resume 1.pdf";
   
    await page.setInputFiles('#input-4', filepath) // to upload single file
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload' }).click()
    await page.waitForTimeout(2000);
    // await page.setInputFiles('input[type="file"]', ['','']) -> to upload multiple files
    // await page.setInputFiles('input[type="file"]', []) -> to clear file input


// downloading a file(waitForEvent('download'))
// const download = await Promise.all([
//      page.waitForEvent('download'),
//      page.click('locator')
//]);


})