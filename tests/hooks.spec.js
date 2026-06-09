/*
Hooks - Hooks in playwright are special methods used to run setup and clean up code before or after testers

Types:
beforeAll - runs once before all testers
afterAll - runs once after all testers
beforeEach - runs before every testers
afterEach - runs after every testers

*/

import{test,expect} from '@playwright/test'
let page
test.beforeAll(async({browser}) => {

  page = await browser.newPage()    // Browser open
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  //waitForPageLoad
  await page.waitForLoadState('domcontentloaded')


  // Login
//   const username = await page.locator("[name='username']")
//   username.fill('Admin')

//   const password = await page.locator("[name='password']")
//   password.fill("admin123")

//   const login = await page.locator("[type='submit']")
//   await login.click()

  await page.fill("input[name='username']", 'Admin')
  await page.fill("input[name='password']", 'admin123')
  await page.click("button[type='submit']")


  // Verify login success
  await expect(page).toHaveURL(/dashboard/)
  console.log("Login successful")

})

//beforeEach Test
test.beforeEach(async() => {
    console.log("Starting Test")

})

//Check Test1
test('check Dashboard', async() => {
    await expect(page.locator('h6')).toHaveText('Dashboard')
})

//Click AdminMenu Test2
test('click Admin', async() => {
    await page.click("//span[text()='Admin']")
    await expect(page).toHaveURL(/admin/)
})

//afterEach Test
test.afterEach(async() => {
    console.log("Test completed")
})


test.afterAll(async() => {
    await page.close()       // Browser close
    console.log("Browser closed")

})