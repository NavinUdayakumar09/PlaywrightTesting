/*
<html>
    <table>
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Roll No</th>
                <th>Marks</th>
                <th>Grade</th>
                </tr>
        </thead>
        
        <tbody>
            <tr>
                <td>Navin</td>
                <td>101</td>
                <td>89</td>
                <td>A</td>
            </tr>

            <tr>
                <td>Nisanth</td>
                <td>102</td>
                <td>95</td>
                <td>A+</td>
            </tr>
            
            <tr>
                <td>Bharath</td>
                <td>103</td>
                <td>78</td>
                <td>B</td>
            </tr>
        </tbody>
</table>
</html>


1. All data - //table/tbody/tr/td or table tbody td
2. row data - //table/tbody/tr[index]/td or table tbody tr:nth-child(2) td     
3. column data - //table/tbody/tr/td[index] or table tbody tr td:nth-child(2)
4. particular data - //table/tbody/tr[index]/td[index] or table tbody tr:nth-child(2) td:nth-child(2)
5. header - //table/thead/tr/th or table thead th
*/


/* A table is an HTML <table> element that display data in a strcutured format of rows <tr> and column <td> / <th> 
which can automatically interact with the data
*/

/*import { test, expect } from '@playwright/test'

test('table', async ({ page }) => {

    await page.goto("https://letcode.in/table")

    const alldata = await page.locator("//table/tbody/tr/td").allTextContents()
    console.log("alldata:", alldata)
    console.log("alldata length:",alldata.length)

    const rowdata = await page.locator("//table/tbody/tr[4]/td").allTextContents()
    console.log("rowdata:", rowdata)
    console.log("rowdata length:",rowdata.length)

    const columndata = await page.locator("//table/tbody/tr/td[3]").allTextContents()
    console.log("columndata:", columndata)
    console.log("columndata length:",columndata.length)

    const particulardata = await page.locator("//table/tbody/tr[3]/td[1]").allTextContents()
    console.log("particulardata:", particulardata)
    console.log("particulardata length:",particulardata.length)

    const header = await page.locator("//table/thead/tr/th").allTextContents()
    console.log("header:", header)
    console.log("header length:",header.length)

})

*/

import { test, expect } from '@playwright/test'

test('table', async ({ page }) => {

    await page.goto("https://leafground.com/table.xhtml;jsessionid=node05so0scn8fzc21nb3qyna5vnni15791290.node0")

    const alldata = await page.locator("table tbody td").allTextContents()
    console.log("alldata:", alldata)
    console.log("alldata length:",alldata.length)

    const rowdata = await page.locator("table tbody tr:nth-child(2) td").allTextContents()
    console.log("rowdata:", rowdata)
    console.log("rowdata length:",rowdata.length)

    const columndata = await page.locator("table tbody tr td:nth-child(2)").allTextContents()
    console.log("columndata:", columndata)
    console.log("columndata length:",columndata.length)

    const particulardata = await page.locator("table tbody tr:nth-child(2) td:nth-child(2)").allTextContents()
    console.log("particulardata:", particulardata)
    console.log("particulardata length:",particulardata.length)

    const header = await page.locator("table thead th").allTextContents()
    console.log("header:", header)
    console.log("header length:",header.length)

})