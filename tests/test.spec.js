import { test, expect } from '@playwright/test'
import { LoginPage } from './login'

test('Login', async ({ page }) => {

    const a = new LoginPage(page)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await a.login('Admin', 'admin123')
    console.log("Login successful")


})