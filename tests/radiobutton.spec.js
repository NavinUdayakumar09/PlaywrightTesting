import{test, expect} from '@playwright/test'

test('radio button', async({page}) => {

    await page.goto("https://demo.automationtesting.in/Register.html")

    const radiobutton = await page.locator("[value='Male']")
    await radiobutton.click()
    const male = await radiobutton.isChecked()
    console.log(male)

    const radiobutton1 = await page.locator("[value='FeMale']")
    //await radiobutton1.click()
    const female = await radiobutton1.isChecked()
    console.log(female)


    // Checkbox
    const checkbox = await page.locator("[value='Cricket']")
    await checkbox.click()
    const cricket = await checkbox.isChecked()
    console.log(cricket)

    const checkbox1 = await page.locator("[value='Movies']")
    await checkbox1.click()
    const movies = await checkbox1.isChecked()
    console.log(movies)

    const checkbox2 = await page.locator("[value='Hockey']")
    await checkbox2.click()
    const hockey = await checkbox2.isChecked()
    console.log(hockey)
    

})