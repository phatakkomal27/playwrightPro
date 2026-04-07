# VWO Login Page - Basic Testing Plan

## Application Overview

The VWO Login Page is the primary authentication interface for the VWO application. It provides multiple authentication methods including standard email/password login, Google OAuth, SSO, and Passkey authentication. This test plan covers basic testing of the login page UI, form validation, and authentication flows to ensure proper functionality and user experience.

## Test Scenarios

### 1. Smoke Tests - Page Load and Initial State

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify VWO Login Page Loads Successfully

**File:** `tests/smoke/verify_page_load.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: Page title should be 'Login - VWO'
    - expect: URL should contain '#/login'
    - expect: VWO logo should be visible
  2. Wait for page to fully load
    - expect: All form elements should be visible and clickable
    - expect: No console errors should be present
    - expect: Page should be responsive

#### 1.2. Verify All Form Elements Are Visible

**File:** `tests/smoke/verify_form_elements.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Email input field should be visible with placeholder 'Enter email ID'
  2. Check password field
    - expect: Password input field should be visible with placeholder 'Enter password'
  3. Check sign in button
    - expect: Sign in button should be visible and clickable
  4. Check forgot password button
    - expect: Forgot Password? button should be visible and clickable
  5. Check remember me checkbox
    - expect: Remember me checkbox should be visible and unchecked by default

#### 1.3. Verify Alternative Login Options Are Available

**File:** `tests/smoke/verify_alt_login_options.spec.ts`

**Steps:**
  1. Check for third-party login buttons
    - expect: Sign in with Google button should be visible
    - expect: Sign in using SSO button should be visible
    - expect: Sign in with Passkey button should be visible
  2. Verify Sign Up link
    - expect: 'Start a FREE TRIAL' link should be visible
    - expect: Link should navigate to VWO signup page

### 2. Form Field Validation Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Email Field - Empty Field Validation

**File:** `tests/validation/email_empty_validation.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Leave email field empty and click Sign in button
    - expect: An error message should appear requiring email input
    - expect: User should remain on the login page
    - expect: Focus should remain on email field or error message should be displayed

#### 2.2. Email Field - Invalid Format Validation

**File:** `tests/validation/email_format_validation.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Enter 'invalidemail' (without @) in email field
    - expect: Email field should accept the input
  3. Click Sign in button
    - expect: An error message should indicate invalid email format
    - expect: User should remain on the login page
  4. Enter 'test@' in email field and click Sign in
    - expect: An error message should indicate incomplete email format
  5. Enter 'test@domain' (without TLD) and click Sign in
    - expect: System should either reject or accept based on validation rules

#### 2.3. Password Field - Empty Field Validation

**File:** `tests/validation/password_empty_validation.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Enter valid email in email field
    - expect: Email should be accepted
  3. Leave password field empty and click Sign in
    - expect: An error message should appear requiring password input
    - expect: User should remain on the login page

#### 2.4. Password Field - Visibility Toggle

**File:** `tests/validation/password_visibility_toggle.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Click on password field and enter 'TestPassword123'
    - expect: Password should be masked as dots/asterisks by default
  3. Click on the password visibility toggle button
    - expect: Password text should become visible as plain text
    - expect: Toggle icon should change to indicate visible state
  4. Click the toggle button again
    - expect: Password should be masked again
    - expect: Toggle icon should change back to indicate hidden state

### 3. Interactive Elements Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Remember Me Checkbox Functionality

**File:** `tests/interaction/remember_me_checkbox.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Remember me checkbox should be unchecked by default
  2. Click on Remember me checkbox
    - expect: Checkbox should become checked
    - expect: Visual state should change (checked appearance)
  3. Click on Remember me checkbox again
    - expect: Checkbox should become unchecked
    - expect: Visual state should revert to unchecked appearance
  4. Click on the 'Remember me' text label
    - expect: Checkbox should toggle (acting as a clickable label)
    - expect: Checkbox state should change

#### 3.2. Forgot Password Button Navigation

**File:** `tests/interaction/forgot_password_navigation.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Forgot Password? button should be visible
  2. Click on Forgot Password? button
    - expect: User should be navigated to password recovery page
    - expect: Page URL should change appropriately
    - expect: Password recovery form should appear
  3. Browser back button
    - expect: User should return to login page

#### 3.3. Sign In Button State and Responsiveness

**File:** `tests/interaction/sign_in_button_states.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Sign in button should be visible
    - expect: Button should be enabled and clickable
  2. Hover over Sign in button
    - expect: Button should show hover state (visual feedback like color change or shadow)
  3. Leave both email and password fields empty and click Sign in
    - expect: Sign in button should be clickable even with empty fields
    - expect: Form validation should trigger error messages

### 4. Negative Testing

**Seed:** `tests/seed.spec.ts`

#### 4.1. Login with Non-existent Account

**File:** `tests/negative/nonexistent_account.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Enter a valid email format that doesn't have an account (e.g., nouser@example.com) and any password
    - expect: Form submission should be accepted
    - expect: User should remain on login page after sign in attempt
  3. Wait for response
    - expect: An error message should appear (e.g., 'Invalid email or password')
    - expect: No sensitive information should be revealed about whether the email exists

#### 4.2. Login with Special Characters in Email

**File:** `tests/negative/special_chars_email.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Enter email with SQL injection attempt: admin'--
    - expect: Field should accept or reject the input based on validation
  3. Click Sign in button
    - expect: Login should fail safely
    - expect: No SQL injection should occur
    - expect: Appropriate error message should appear
  4. Enter email with XSS attempt: <script>alert('xss')</script>@example.com
    - expect: Field should handle the input safely
    - expect: No JavaScript should execute
    - expect: Form should process safely

#### 4.3. Login with Very Long Inputs

**File:** `tests/negative/long_input_validation.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Enter 500+ character string in email field
    - expect: Field should either limit input length or handle gracefully
  3. Enter 500+ character string in password field
    - expect: Field should either limit input length or handle gracefully
    - expect: Password masking should still work
  4. Click Sign in button
    - expect: Form should process without crashing

#### 4.4. Rapid Form Submissions

**File:** `tests/negative/rapid_submissions.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Page should load successfully
  2. Enter email and password, then rapidly click Sign in button multiple times
    - expect: Only one request should be submitted
    - expect: Button should be disabled after first click (if applicable)
    - expect: User should not be able to submit multiple times simultaneously

### 5. UI/UX and Accessibility Tests

**Seed:** `tests/seed.spec.ts`

#### 5.1. Form Labels and Placeholders

**File:** `tests/ui_ux/labels_and_placeholders.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Email field should have placeholder text 'Enter email ID'
  2. Click on email field to focus it
    - expect: Placeholder should be visible or hidden appropriately
    - expect: Field should be clearly marked as an input area
  3. Check password field
    - expect: Password field should have placeholder text 'Enter password'
  4. Verify all buttons have clear labels
    - expect: All buttons should have descriptive text
    - expect: Icon buttons should have accessible labels

#### 5.2. Footer Links Functionality

**File:** `tests/ui_ux/footer_links.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Privacy policy link should be visible at the bottom
  2. Click Privacy policy link
    - expect: New tab or window should open with privacy policy page
    - expect: URL should navigate to VWO privacy policy
  3. Return to login page and click Terms link
    - expect: New tab or window should open with terms and conditions page

#### 5.3. Responsive Design Verification

**File:** `tests/ui_ux/responsive_design.spec.ts`

**Steps:**
  1. Navigate to login page on desktop viewport (1920x1080)
    - expect: All elements should be properly aligned and visible
    - expect: No horizontal scrolling should be needed
  2. Resize viewport to tablet size (768x1024)
    - expect: Layout should adjust appropriately
    - expect: All form elements should remain accessible
    - expect: Buttons should be appropriately sized for touch
  3. Resize viewport to mobile size (375x667)
    - expect: Layout should adapt for mobile devices
    - expect: Form should be easy to fill on small screens
    - expect: All buttons should be easily clickable

### 6. Alternative Authentication Methods

**Seed:** `tests/seed.spec.ts`

#### 6.1. Google Sign-In Button Navigation

**File:** `tests/alt_auth/google_signin_button.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Sign in with Google button should be visible
  2. Click Sign in with Google button
    - expect: User should be redirected to Google OAuth consent page or login
    - expect: URL should show google.com domain or VWO OAuth flow

#### 6.2. SSO Sign-In Button Navigation

**File:** `tests/alt_auth/sso_signin_button.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Sign in using SSO button should be visible
  2. Click Sign in using SSO button
    - expect: User should be redirected to SSO login page or shown SSO configuration screen

#### 6.3. Passkey Sign-In Button Navigation

**File:** `tests/alt_auth/passkey_signin_button.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Sign in with Passkey button should be visible
  2. Click Sign in with Passkey button
    - expect: Browser should show passkey/WebAuthn dialog
    - expect: User should be prompted to use biometric or security key

### 7. Sign Up and Navigation Tests

**Seed:** `tests/seed.spec.ts`

#### 7.1. Sign Up Link Navigation

**File:** `tests/navigation/signup_link_navigation.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: 'Start a FREE TRIAL' link should be visible
    - expect: Link text should say 'Start a FREE TRIAL'
  2. Click on Sign Up link
    - expect: User should be navigated to VWO sign-up or free trial page
    - expect: URL should change appropriately
    - expect: Page title should change to reflect sign-up page
  3. Verify the sign-up page loads
    - expect: Sign-up form should be visible
    - expect: Appropriate form fields should be present
