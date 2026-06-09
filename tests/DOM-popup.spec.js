import test from '@playwright/test'

test('Checking DOM based popup', async({page}) => {

    await page.goto('https://www.flipkart.com/');

    try{
        await page.waitForSelector('.b3wTlE', {timeout:5000});
        await page.locator('.b3wTlE').click();
        console.log('Popup closed')
    }
    catch{
        console.log('Popup not appeared')
    }

    await page.locator('//span[text()="Login"]').hover();
    await page.mouse.wheel(0, 2000);

    // await page.locator('//span[text()="Login"]').dblclick();

    await page.locator("//div[text()='Electronics']").click({button:'right'});
    await page.waitForTimeout(5000);
    await page.locator("//span[text()='Login']").click();
    await page.waitForTimeout(5000);

})

test("Mouse actions", async({page}) => {

    await page.goto('https://jqueryui.com/droppable/');
    const frame = await page.frameLocator('.demo-frame');
    await page.waitForTimeout(3000);
    await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
    await page.waitForTimeout(3000);

})

test("Keyboard actions", async({page}) =>{

    await page.goto('https://amazon.com/')
    // await page.locator('#twotabsearchtextbox').fill('Laptops')
    // await page.waitForTimeout(3000);
    // await page.locator('#twotabsearchtextbox').fill('Mobile')
    // await page.waitForTimeout(3000);

    await page.locator('#twotabsearchtextbox').type('Laptops')
    await page.waitForTimeout(3000);
    await page.locator('#twotabsearchtextbox').type('Mobile')
    await page.keyboard.press('Control+A')
    await page.waitForTimeout(3000);
    await page.keyboard.press('Control+X')
    //await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);

})