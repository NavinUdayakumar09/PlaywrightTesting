import test from '@playwright/test'

test('iframe', async({page}) => {
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
    const frame = await page.frameLocator('[name="globalSqa"]')
    await frame.getByText('Selenium 3.0 Training').click()

    await page.waitForTimeout(3000)

}) 

test('iframe 2', async({page}) => {
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
    const frame = await page.frameLocator('[name="globalSqa"]')
    await page.waitForTimeout(3000)
    await frame.getByText('JMeter Training').click()
    await page.waitForTimeout(3000)
    await frame.getByText('Mobile Application Testing Training').click()

    await page.waitForTimeout(3000)

}) 

test('Nested frames', async({page}) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php')
    
    //Syntax for simple xpath
    // (//tagname=[@atr="value"])[index]

    const frame1 = await page.frameLocator('(//iframe[@src="new-tab-sample.php"])[1]')
    await frame1.locator('[href="https://www.tutorialspoint.com"]').click()
    await page.waitForTimeout(3000)
    //await frame1.frameLocator()
    const frame2 = await page.frameLocator('(//iframe[@src="new-tab-sample.php"])[2]')
    await frame2.locator('[href="https://www.tutorialspoint.com"]').click()
    await page.waitForTimeout(3000)


})