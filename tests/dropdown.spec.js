/*
Dropdown is a UI element (HTML<select>) that always used to select one or more options from a list
Types - Single, Multiple
    Single Dropdown - User to select only one option at a time
    Multiple Dropdown - User to select more than one option at a same time
*/

import { test, expect } from '@playwright/test'

test('table', async ({ page }) => {

    await page.goto("https://letcode.in/dropdowns")

    const singledropdown = await page.locator("#fruits")
    await singledropdown.selectOption({index:1})        // using index value

    await page.waitForTimeout(3000)

    await singledropdown.selectOption({value:"2"})      // using value

    await page.waitForTimeout(3000)

    await singledropdown.selectOption({label:"Pine Apple"})      // using label value

    const alloptions = await singledropdown.locator("option").allTextContents()
    console.log(alloptions)

    const checksingle = await singledropdown.evaluate(el => el.multiple)
    console.log(checksingle)

})