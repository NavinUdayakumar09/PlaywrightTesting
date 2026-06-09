import{ test, expect } from '@playwright/test';
test('File handling', async({page}) => {

    const filepath = "C:/Users/sound/Downloads/Resume 1.pdf";
   /* await page.goto('https://demo.automationtesting.in/FileUpload.html');
    //file uploading

    await page.setInputFiles('#input-4', filepath) // to upload single file
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload' }).click()
    await page.waitForTimeout(2000);
    */

    /*
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles('#file-upload', filepath)
    await page.waitForTimeout(2000);
    await page.locator('#file-submit').click()
    await page.waitForTimeout(2000);

    await expect(page.getByText("File Uploaded!")).toBeVisible();


    // await page.setInputFiles('input[type="file"]', ['','']) -> to upload multiple files
    // await page.setInputFiles('input[type="file"]', []) -> to clear file input
    */


    // file downloading

    await page.goto('https://the-internet.herokuapp.com/download'); 
    const[download] = await Promise.all([
        page.waitForEvent("download"),
        page.click("a[href='download/Resume 1.pdf']")
    ]);

    await download.saveAs("Downloads/myfile.pdf")


await page.waitForTimeout(2000);    
})