import test, { chromium } from '@playwright/test'

test('Browser handling', async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    // const page2 = await context.newPage();

    await page1.goto('https://www.flipkart.com/')
    // await page2.goto('https://www.amazon.in/')
    
    await page1.locator("'(//input[@class='nw1UBF v1zwn25'])[2]'").fill('laptop');
    await page1.keyboard.press('Enter')

    const [newtab] = await Promise.all([
    await page1.locator("//div[contains(text(), 'MT8781')").click()
    ])

    await newtab.waitForLoadState();
    console.log(await newtab.title())
})