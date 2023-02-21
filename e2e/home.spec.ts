import { test, devices, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";

test('The meta tag', async ({ page }) => { 
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto(urlHome)
  
  const metaDescriptionOne = page.locator('meta[name="description"]')
  await expect(metaDescriptionOne).toHaveAttribute("content", "make each meal a surprise")

  const metaDescriptionTwo = page.locator('meta[name="viewport"]');
  await expect(metaDescriptionTwo).toHaveAttribute('content', 'width=device-width, initial-scale=1')

})

test('The link tag', async ({ page }) => {
  await page.goto(urlHome)

  const linkTag = page.locator('link[rel="icon"]');
  await expect(linkTag).toHaveAttribute('href', '/assets/sLogo.svg')
})

test.use({
  browserName: 'chromium',
  ...devices['iPhone XR'],
})

test.describe("testing mobile view for iphone xr", ()=> {
  test('Span Tag', async({ page }) => {
    await page.goto(urlHome)
  
    await expect(page.locator('p > span')).toContainText('Make every meal a surprise.');
  })
  
  test('Paragraph Tag', async({ page }) => { 
    await page.goto(urlHome)
  
    const paragraphText = page.getByRole('paragraph');
    await expect(paragraphText).toContainText('Get started by clicking the button below to generate a random recipe from Epicurious!')
  })
})


test.use({
  browserName: 'chromium',
  ...devices['iPad Air'],
  viewport:{width: 1120, height: 1180}
})

test.describe("testing for home tablet", ()=> {
  test('Get recipe Button', async({ page }) => { 
    await page.goto(urlHome)
  
    await page.getByRole('button', { name: 'Give Me A Recipe' }).click();
  })
  
  test('Check to see if button is in main', async({ page }) => { 
    await page.goto(urlHome)
    await expect(page.locator(' a > button')).toHaveCount(1);
  })
})