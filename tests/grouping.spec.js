/*
Test Grouping - Organizing multiple test cases into one group

Using test.describe()
*/

import{test, expect} from '@playwright/test'

test.describe('orange hrm', () => {

test('Valid login', async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.fill("input[name='username']", 'Admin')
    await page.fill("input[name='password']", 'admin123')
    await page.click("button[type='submit']")

    await expect(page).toHaveURL(/dashboard/)

})

test('Invalid login', async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.fill("input[name='username']", 'Admin')
    await page.fill("input[name='password']", 'Admin1234')
    await page.click("button[type='submit']")

    await expect(page.locator(".oxd-alert-content-text")).toContainText('Invalid credentials')
})

})