import { test, expect } from '@playwright/test';

test('Get by Role practice - heading', async ({ page }) => {
    await page.goto('')

    const servicesHeading = page.getByRole('heading', {
        name: 'our services'
    })

    await expect(servicesHeading).toBeVisible()
})

test('Get by Role - list', async ({ page }) =>{
    await page.goto('')

    const servicesList = page.getByRole('list')
    await expect(servicesList).toBeVisible()

    const serviceItems = await servicesList.getByRole('listitem').all()

    for(const item of serviceItems) {
        const itemText = await item.textContent()
        expect(itemText).toBeTruthy()
    }

})
