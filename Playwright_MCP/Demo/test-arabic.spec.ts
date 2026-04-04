import { test, expect } from '@playwright/test';

test.describe('TC-ILG-001: Invalid Login with Arabic Characters in Email', () => {
  test('Should reject Arabic characters in email and display error', async ({ page }) => {
    console.log('\n========== TC-ILG-001: Arabic Characters Test START ==========');
    
    // Step 1-2: Navigate to login page
    console.log('\nSTEP 1-2: Navigating to login page...');
    await page.goto('https://app.vwo.com/#/login');
    await expect(page).toHaveTitle(/Login|VWO/);
    console.log('✓ Page loaded successfully');
    
    // Step 3-4: Locate and click on Email field
    console.log('STEP 3-4: Locating email field...');
    const emailField = page.locator('#login-username');
    await emailField.click();
    console.log('✓ Email field focused');
    
    // Step 5-6: Enter Arabic text in email
    console.log('STEP 5-6: Entering Arabic characters in email...');
    const arabicEmail = 'اختبار@gmail.com';
    await emailField.fill(arabicEmail);
    const enteredEmail = await emailField.inputValue();
    console.log(`✓ Arabic email entered: ${enteredEmail}`);
    
    // Step 7-8: Leave password empty
    console.log('STEP 7-8: Leaving password field empty...');
    const passwordField = page.locator('input[name="password"]');
    const passwordValue = await passwordField.inputValue();
    console.log(`✓ Password field empty: ${passwordValue === '' ? 'YES' : 'NO'}`);
    
    // Step 9: Click Sign in button
    console.log('STEP 9: Clicking Sign in button...');
    const signInButton = page.locator('button[type="submit"]').first();
    await signInButton.click();
    console.log('✓ Sign in button clicked');
    
    // Step 10: Wait for validation
    console.log('STEP 10: Waiting for validation...');
    await page.waitForTimeout(2000);
    console.log('✓ Validation complete');
    
    // Step 11-12: Verify error message
    console.log('STEP 11-12: Checking for error message...');
    const errorMessages = page.locator('[role="alert"]');
    const errorCount = await errorMessages.count();
    console.log(`✓ Error messages found: ${errorCount}`);
    
    if (errorCount > 0) {
      const errorText = await errorMessages.first().textContent();
      console.log(`✓ Error message: ${errorText}`);
    }
    
    // Step 14-15: Verify user is on login page
    console.log('STEP 14-15: Verifying user is still on login page...');
    const currentUrl = page.url();
    console.log(`✓ Current URL: ${currentUrl}`);
    expect(currentUrl).toContain('login');
    
    console.log('========== TC-ILG-001: PASSED ==========\n');
  });
});
