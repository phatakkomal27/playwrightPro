// tests/seed.spec.ts
import { test, expect } from './fixtures';

test('seed', async ({ page }) => {
  // 1. Perform login
  await page.goto('/login');
  await page.getByLabel('Username').fill('test_user');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // 2. Navigate to the starting point for AI exploration
  await expect(page).toHaveURL('/dashboard');
  
  // The agent will now take over from this dashboard state
});
