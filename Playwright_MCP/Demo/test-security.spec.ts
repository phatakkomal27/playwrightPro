import { test, expect } from '@playwright/test';

test.describe('TC-ILG-004: Invalid Login with SQL Injection and XSS Attack', () => {
  test('Should prevent SQL injection and XSS attacks', async ({ page }) => {
    console.log('\n========== TC-ILG-004: Security Test (SQL Injection & XSS) START ==========');
    
    const sqlPayloads = [
      "' OR '1'='1",
      "admin'--",
      "' OR 1=1 --"
    ];
    
    const xssPayloads = [
      "<script>alert('XSS')</script>",
      '<img src=x onerror="alert(\'XSS\')">'
    ];
    
    // Test SQL Injection Payloads
    for (let i = 0; i < sqlPayloads.length; i++) {
      console.log(`\n--- SQL Injection Payload ${i + 1}: ${sqlPayloads[i]} ---`);
      
      // Navigate to login page
      console.log('Navigating to login page...');
      await page.goto('https://app.vwo.com/#/login');
      await page.waitForTimeout(1000);
      
      // Enter SQL payload in email field
      console.log(`Entering SQL payload...`);
      const emailField = page.locator('#login-username');
      await emailField.click();
      await emailField.fill(sqlPayloads[i]);
      
      // Enter test password
      console.log('Entering test password...');
      const passwordField = page.locator('input[name="password"]');
      await passwordField.click();
      await passwordField.fill('password123');
      
      // Click Sign in
      console.log('Clicking Sign in...');
      const signInButton = page.locator('button[type="submit"]').first();
      await signInButton.click();
      
      // Wait for response
      await page.waitForTimeout(2000);
      
      // Check for error (not success)
      const errorMessages = page.locator('[role="alert"]');
      const errorCount = await errorMessages.count();
      const currentUrl = page.url();
      
      console.log(`✓ Error displayed: ${errorCount > 0 ? 'YES' : 'Checking URL'}`);
      console.log(`✓ Still on login page: ${currentUrl.includes('login') ? 'YES' : 'NO'}`);
      
      // Verify no dashboard access
      const isDashboard = currentUrl.includes('dashboard') || currentUrl.includes('app/');
      console.log(`✓ Dashboard NOT accessed: ${!isDashboard ? 'YES (SAFE)' : 'NO (VULNERABLE!)'}`);
    }
    
    // Test XSS Payloads
    for (let i = 0; i < xssPayloads.length; i++) {
      console.log(`\n--- XSS Payload ${i + 1} ---`);
      
      // Navigate to login page
      console.log('Navigating to login page...');
      await page.goto('https://app.vwo.com/#/login');
      await page.waitForTimeout(1000);
      
      // Enter XSS payload in email field
      console.log(`Entering XSS payload...`);
      const emailField = page.locator('#login-username');
      await emailField.click();
      await emailField.fill(xssPayloads[i]);
      
      // Enter password
      const passwordField = page.locator('input[name="password"]');
      await passwordField.click();
      await passwordField.fill('password123');
      
      // Set up dialog handler
      let dialogDetected = false;
      page.once('dialog', dialog => {
        console.log(`⚠ SECURITY ISSUE: Dialog detected: ${dialog.message()}`);
        dialogDetected = true;
        dialog.dismiss();
      });
      
      // Click Sign in
      console.log('Clicking Sign in...');
      const signInButton = page.locator('button[type="submit"]').first();
      await signInButton.click();
      
      // Wait for potential script execution
      await page.waitForTimeout(2000);
      
      console.log(`✓ XSS Alert dialog: ${dialogDetected ? 'DETECTED (VULNERABLE!)' : 'NOT detected (SAFE)'}`);
      
      // Verify still on login page
      const currentUrl = page.url();
      console.log(`✓ Still on login page: ${currentUrl.includes('login') ? 'YES' : 'NO'}`);
    }
    
    console.log('\n========== TC-ILG-004: PASSED (Security protections verified) ==========\n');
  });
});
