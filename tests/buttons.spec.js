import{test, expect} from '@playwright/test'

test('task', async({page}) => {

    await page.goto("https://letcode.in/button")

    const home = await page.locator("#home")
    await home.click()
    await page.goBack()

    const location = await page.locator("#position")
    const position = await location.boundingBox()
    console.log(position.x)
    console.log(position.y)

    const height = await page.locator("#property")
    const hw = await height.boundingBox()
    console.log(hw.height, hw.width)

    const color = await page.locator("#color")
    const bg = await color.evaluate(evl => getComputedStyle(evl).backgroundColor)
    console.log(bg)

    const disabled = await page.locator("[title='Disabled button']")
    const enabled = await disabled.isEnabled()
    console.log(enabled)


})