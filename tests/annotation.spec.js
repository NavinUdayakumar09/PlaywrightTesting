/*
Annotations - Annotations are special tags used to control test behaviour (skip, fail, slow, fixme) are 
added extra information to test

skip - skip the test
fail - expected to fail
slow - increased timeout
fixme - mark as not ready
*/

import {test, expect} from '@playwright/test'

test('skip', async({page}) => {

    test.skip()   // test will not run
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})

test('fail', async({page}) => {

    test.fail()  // expected to fail
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    expect(1).toBe(2)
    
})

test('slow', async({page}) => {
    test.slow()  // increase timeout
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
})

test('fixme', async({page}) => {
    test.fixme()  // not ready to test
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
})