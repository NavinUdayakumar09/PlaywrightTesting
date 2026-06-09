import {test, expect} from '@playwright/test'

test('video record', async({browser}) => {

    const context = await browser.newContext({
        recordVideo:{dir:'videorecord/'}
    })

    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const username = await page.locator("[name='username']")
    await username.fill("Admin")

    const password = await page.locator("[name='password']")
    await password.fill("admin123")
   
    const login = await page.locator("[type='submit']")
    await login.click()

    await page.click("//span[text()='My Info']")

    await page.waitForTimeout(3000);
    await page.screenshot({path:"myinfo.png", fullPage:true}) // saving full page screenshot

    await context.close()

})