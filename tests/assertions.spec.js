import {test,expect} from '@playwright/test'


test('Handling table', async({page}) => {

    await page.goto('https://demoqa.com/webtables')
    
    await page.waitForTimeout(3000)

    await expect(page).toHaveURL('https://demoqa.com/webtables')
    await expect(page).toHaveTitle('demosite')

})