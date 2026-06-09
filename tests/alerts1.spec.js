import test from '@playwright/test'

test('Handling JS alerts',async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog',async(di)=>{
        //di.accept();
        // di.dismiss();
        if(di.type()=='alert'){
            di.accept();
        }
        else if (di.type()=='confirm'){
            di.accept();
            console.log('accepted');
        }
        else if(di.type()=='prompt'){
            
            di.accept('Ganesh');
            
            console.log('Prompt Accepted');
        }
        else{
            di.dismiss();
            console.log('Dismissed');
        }
        console.log(di.type());
        const message = di.message();
        console.log(message)
        });
    //await page.locator('#alertButton').click();

    //await page.locator('#confirmButton').click();

    await page.locator('#promtButton').click();
    await page.waitForTimeout(3000)

})