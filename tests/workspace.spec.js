import test from '@playwright/test'

test('Task', async({page}) => {

    await page.goto('https://www.amazon.com')
    const search = await page.locator("[id='twotabsearchtextbox']")
    search.fill('laptops')
    await page.waitForTimeout(3000);

    await page.locator("[data-action-type='DISMISS']").click();
    await page.locator("[id='nav-search-submit-button']").click();
    await page.waitForTimeout(5000);

    await page.getByText('Sort by:Featured').click();
    await page.getByRole('option', { name: 'Newest Arrivals' }).click();
    await page.waitForTimeout(3000);
})