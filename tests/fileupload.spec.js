import test from '@playwright/test'

test('File upload', async({page}) => {
    await page.goto("https://demoqa.com/upload-download")

    //Single file upload
    await page.setInputFiles('#uploadFile','C:/Users/sound/OneDrive/Desktop/Playwright/fullpage.png')
    await page.waitForTimeout(3000)   

    //Multiple files upload
    // await page.goto("https://www.file.io/")
    // await page.setInputFiles('#select-files-input',['C:/Users/sound/OneDrive/Desktop/Playwright/fullpage.png','C:/Users/sound/OneDrive/Desktop/Playwright/username.png'])
    // await page.waitForTimeout(4000)  

    //Delete files
    await page.setInputFiles('#uploadFile',[]) 
    await page.waitForTimeout(4000) 

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
    await download.saveAs('C:/Users/sound/OneDrive/Desktop/Playwright/videorecord/DownloadImage.png')
    await page.waitForTimeout(4000)
}) 