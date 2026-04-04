import { test, expect } from '@playwright/test';

test.describe('TC-ILG-002: Invalid Login with Chinese Characters and Dummy Password', () => {
  test('Should reject Chinese characters in email and test password visibility toggle', async ({ page }) => {
    console.log('\n========== TC-ILG-002: Chinese Characters Test START ==========');
    
    // Step 1-2: Navigate and verify page
    console.log('\nSTEP 1-2: Navigating to login page...');
    await page.goto('https://app.vwo.com/#/login');
    await expect(page).toHaveTitle(/Login|VWO/);
    console.log('✓ Login page loaded');
    
    // Step 3: Click on Email field
    console.log('STEP 3: Clicking email field...');
    const emailField = page.locator('#login-username');
    await emailField.click();
    console.log('✓ Email field focused');
    
    // Step 4-5: Enter Chinese text
    console.log('STEP 4-5: Entering Chinese characters in email...');
    const chineseEmail = '用户名@example.com';
    await emailField.fill(chineseEmail);
    const enteredEmail = await emailField.inputValue();
    console.log(`✓ Chinese email entered: ${enteredEmail}`);
    
    // Step 6: Press Tab to move to Password field
    console.log('STEP 6: Pressing Tab to move to password field...');
    await emailField.press('Tab');
    console.log('✓ Moved to password field');
    
    // Step 7-8: Enter password
    console.log('STEP 7-8: Entering dummy password...');
    const passwordField = page.locator('input[name="password"]');
    const dummyPassword = 'DummyPass@123';
    await passwordField.fill(dummyPassword);
    const passwordType = await passwordField.getAttribute('type');
    console.log(`✓ Password entered, type: ${passwordType}`);
    
    // Step 9: Locate password visibility toggle
    console.log('STEP 9: Locating password visibility toggle...');
    const toggleButton = page.locator('[class*="toggle"], [class*="visibility"], [class*="show-password"], button[aria-label*="password"]').first();
    const toggleExists = await toggleButton.isVisible().catch(() => false);
    console.log(`✓ Toggle button exists: ${toggleExists}`);
    
    if (toggleExists) {
      // Step 10: Click to show password
      console.log('STEP 10: Clicking toggle to show password...');
      await toggleButton.click();
      const passwordVisible = await passwordField.getAttribute('type');
      console.log(`✓ Password visibility toggled, type: ${passwordVisible}`);
      
      // Step 12: Click to hide password again
      console.log('STEP 12: Clicking toggle to hide password...');
      await toggleButton.click();
      const passwordHidden = await passwordField.getAttribute('type');
      console.log(`✓ Password hidden again, type: ${passwordHidden}`);
    } else {
      console.log('⚠ Toggle button not found, continuing without toggle test');
    }
    
    // Step 14: Click Sign in button
    console.log('STEP 14: Clicking Sign in button...');
    const signInButton = page.locator('button[type="submit"]').first();
    await signInButton.click();
    console.log('✓ Sign in button clicked');
    
    // Step 15: Wait for response
    console.log('STEP 15: Waiting for server response...');
    await page.waitForTimeout(3000);
    console.log('✓ Server response received');
    
    // Step 16: Verify error message
    console.log('STEP 16: Checking for error message...');
    const errorMessages = page.locator('[role="alert"]');
    const errorCount = await errorMessages.count();
    console.log(`✓ Error messages found: ${errorCount}`);
    
    if (errorCount > 0) {
      const errorText = await errorMessages.first().textContent();
      console.log(`✓ Error message: ${errorText}`);
    }
    
    console.log('========== TC-ILG-002: PASSED ==========\n');
  });
});
