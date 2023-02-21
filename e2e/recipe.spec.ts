import { test, devices, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlRecipe = "http://localhost:3000/recipe";

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
  })  

test.describe('test mobile to check for navigation and footer bars', () => {
    test('Nav Bar', async({ page }) => {
        await page.goto(urlRecipe)

        await expect(page.locator('div > div > a')).toHaveCount(1);
    })

    test('Footer', async({ page }) => {
        await page.goto(urlRecipe)

        await expect(page.locator('div > a > span > img')).toHaveCount(1);
    })
})


test.describe('checking number of divs in main', () => {
    test('count divs', async({ page }) => {
        await page.goto(urlRecipe)

        await expect(page.locator('div')).toHaveCount(13);
    })

})

test('button styling', async({ page }) => {
    await page.goto(urlRecipe)

    const button = page.locator('#mainButton');

    const grabbedAlignment = await button.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("text-align")
    })
    console.log(grabbedAlignment);
    expect(grabbedAlignment).toBe("center");

})

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport:{width: 1120, height: 1180}
  })



test.describe("testing for home tablet", ()=> {
  test('generate new recipe button', async({ page }) => { 
    await page.goto(urlRecipe)
  
    await page.getByRole('button', { name: 'New Recipe' }).click();
  })
  test('main recipe styling for home tablet', async({ page }) => {
    await page.goto(urlRecipe)

    const button = page.locator('#mainRecipe');

    const grabbedDisplay = await button.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("display")
    })
    console.log(grabbedDisplay);
    expect(grabbedDisplay).toBe("flex");

    const grabbedDirection = await button.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("flex-direction")
    })
    console.log(grabbedDirection);
    expect(grabbedDirection).toBe("column");

})
})
