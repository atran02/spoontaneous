import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'recipe' and click on it
  await page.click('Button=Recipe')
  // The new URL should be "/recipe" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/recipe')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('div')).toContainText('')
})