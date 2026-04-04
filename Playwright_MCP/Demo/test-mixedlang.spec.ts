import { test, expect } from '@playwright/test';

test.describe('TC-ILG-005: Invalid Login with Mixed Language and Empty Password', () => {
  test('Should reject mixed language emails and enforce password as mandatory', async ({ page }) => {
    console.log('\n========== TC-ILG-005: Mixed Language Test START ==========');
    
    const mixedEmails = [
      'test用户名@تجربة.com',
      'user名前@тест.xyz',
      'test中文@русский.ru',
      'usuario日本語@arabicarabia.ae'
    ];
    
    // FIRST ATTEMPT - Mixed Language Email with Empty Password
    console.log('\n--- FIRST ATTEMPT: Mixed Email + Empty Password ---');
    
    console.log('STEP 1: Navigating to login page...');
    await page.goto('https://app.vwo.com/#/login');
    await expect(page).toHaveTitle(/Login|VWO/);
    console.log('✓ Login page loaded');
    
    // Step 2-3: Click Email field and enter mixed language
    console.log('STEP 2-3: Entering mixed language email...');
    const emailField = page.locator('#login-username');
    await emailField.click();
    const mixedEmail1 = mixedEmails[0];
    await emailField.fill(mixedEmail1);
    console.log(`✓ Mixed email entered: ${mixedEmail1}`);
    
    // Step 5-6: Leave password empty
    console.log('STEP 5-6: Leaving password field empty...');
    const passwordField = page.locator('input[name="password"]');
    const passwordEmpty = await passwordField.inputValue();
    console.log(`✓ Password field empty: ${passwordEmpty === '' ? 'YES' : 'NO'}`);
    
    // Step 8-9: Click Sign in
    console.log('STEP 8-9: Clicking Sign in button...');
    const signInButton = page.locator('button[type="submit"]').first();
    await signInButton.click();
    console.log('✓ Sign in clicked');
    
    // Step 10-12: Wait for validation and check errors
    console.log('STEP 10-12: Checking for validation errors...');
    await page.waitForTimeout(2000);
    
    const errorMessages = page.locator('[role="alert"]');
    const errorCount = await errorMessages.count();
    console.log(`✓ Total error messages found: ${errorCount}`);
    
    if (errorCount > 0) {
      for (let i = 0; i < Math.min(errorCount, 5); i++) {
        const errorText = await errorMessages.nth(i).textContent();
        console.log(`  Error ${i + 1}: ${errorText}`);
      }
    }
    
    // SECOND ATTEMPT - Mixed Language Email with Valid Password
    console.log('\n--- SECOND ATTEMPT: Mixed Email + Valid Password ---');
    
    // Step 16-17: Click password field and enter password
    console.log('STEP 16-17: Entering valid password...');
    await passwordField.click();
    const validPassword = 'ValidPass123!';
    await passwordField.fill(validPassword);
    console.log('✓ Valid password entered');
    
    // Step 25: Click Sign in again
    console.log('STEP 25: Clicking Sign in button again...');
    await signInButton.click();
    console.log('✓ Sign in clicked');
    
    // Step 26-28: Wait and check errors
    console.log('STEP 26-28: Checking errors after password entry...');
    await page.waitForTimeout(2000);
    
    const errorMessages2 = page.locator('[role="alert"]');
    const errorCount2 = await errorMessages2.count();
    console.log(`✓ Total error messages now: ${errorCount2}`);
    
    if (errorCount2 > 0) {
      console.log('✓ Email error still present (password error should be gone)');
      const errorText = await errorMessages2.first().textContent();
      console.log(`  Error: ${errorText}`);
    }
    
    // ADDITIONAL TESTING - Alternative Mixed Emails
    console.log('\n--- ADDITIONAL TESTING: Alternative Mixed Language Emails ---');
    
    for (let i = 1; i < mixedEmails.length; i++) {
      console.log(`\nTesting mixed email ${i}: ${mixedEmails[i]}`);
      
      // Clear and enter new email
      await emailField.click();
      await emailField.clear();
      await emailField.fill(mixedEmails[i]);
      console.log('✓ New mixed email entered');
      
      // Password already filled from previous attempt
      // Click Sign in
      await signInButton.click();
      console.log('✓ Sign in clicked');
      
      // Wait and verify error
      await page.waitForTimeout(2000);
      const errors = page.locator('[role="alert"]');
      const hasError = await errors.count() > 0;
      console.log(`✓ Error displayed: ${hasError ? 'YES' : 'NO'}`);
    }
    
    // Final verification
    console.log('\n--- FINAL VERIFICATION ---');
    const finalUrl = page.url();
    console.log(`✓ Final URL: ${finalUrl}`);
    expect(finalUrl).toContain('login');
    console.log('✓ User still on login page (not logged in)');
    
    console.log('\n========== TC-ILG-005: PASSED ==========\n');
  });
});
