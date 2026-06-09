# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: filehandling.spec.js >> File handling
- Location: tests\filehandling.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "File Downloader" [level=3] [ref=e8]
      - link "PRD 32 - Hotel listing booking.com.pdf" [ref=e9] [cursor=pointer]:
        - /url: download/PRD 32 - Hotel listing booking.com.pdf
      - link "grabrielmagalhaes.jpg" [ref=e10] [cursor=pointer]:
        - /url: download/grabrielmagalhaes.jpg
      - link "app_liveBug.jpg" [ref=e11] [cursor=pointer]:
        - /url: download/app_liveBug.jpg
      - link "samplefile2.txt" [ref=e12] [cursor=pointer]:
        - /url: download/samplefile2.txt
      - link "chromedriver.exe" [ref=e13] [cursor=pointer]:
        - /url: download/chromedriver.exe
      - link "bb.txt" [ref=e14] [cursor=pointer]:
        - /url: download/bb.txt
      - link "Fee Receipt.pdf" [ref=e15] [cursor=pointer]:
        - /url: download/Fee Receipt.pdf
      - link "random_data.txt" [ref=e16] [cursor=pointer]:
        - /url: download/random_data.txt
      - link "some-file.txt" [ref=e17] [cursor=pointer]:
        - /url: download/some-file.txt
      - link "samplefile.txt" [ref=e18] [cursor=pointer]:
        - /url: download/samplefile.txt
  - generic [ref=e20]:
    - separator [ref=e21]
    - generic [ref=e22]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e23] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import{ test, expect } from '@playwright/test';
  2  | test('File handling', async({page}) => {
  3  | 
  4  |     const filepath = "C:/Users/sound/Downloads/Resume 1.pdf";
  5  |    /* await page.goto('https://demo.automationtesting.in/FileUpload.html');
  6  |     //file uploading
  7  | 
  8  |     await page.setInputFiles('#input-4', filepath) // to upload single file
  9  |     await page.waitForTimeout(2000);
  10 |     await page.getByRole('button', { name: 'Upload' }).click()
  11 |     await page.waitForTimeout(2000);
  12 |     */
  13 | 
  14 |     /*
  15 |     await page.goto('https://the-internet.herokuapp.com/upload');
  16 |     await page.setInputFiles('#file-upload', filepath)
  17 |     await page.waitForTimeout(2000);
  18 |     await page.locator('#file-submit').click()
  19 |     await page.waitForTimeout(2000);
  20 | 
  21 |     await expect(page.getByText("File Uploaded!")).toBeVisible();
  22 | 
  23 | 
  24 |     // await page.setInputFiles('input[type="file"]', ['','']) -> to upload multiple files
  25 |     // await page.setInputFiles('input[type="file"]', []) -> to clear file input
  26 |     */
  27 | 
  28 | 
  29 |     // file downloading
  30 | 
  31 |     await page.goto('https://the-internet.herokuapp.com/download'); 
  32 |     const[download] = await Promise.all([
> 33 |         page.waitForEvent("download"),
     |              ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  34 |         page.click("a[href='download/Resume 1.pdf']")
  35 |     ]);
  36 | 
  37 |     await download.saveAs("Downloads/myfile.pdf")
  38 | 
  39 | 
  40 | await page.waitForTimeout(2000);    
  41 | })
```