/*
Fixtures - resusable setup/teardown:
used to share data, browser, page, login, etc..
*/

import { test as base } from '@playwright/test'

let test = base.extend({

    login: async ({ page }, use) => {

        // setup login
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.fill("[name='username']", 'Admin')
        await page.fill("[name='password']", 'admin123')
        await page.click("[type='submit']")

        await use(page)     // test
        console.log("Login Done")   // teardown
    }
})

test('Dashboard', async ({ login }) => {

    console.log("Already login")

})