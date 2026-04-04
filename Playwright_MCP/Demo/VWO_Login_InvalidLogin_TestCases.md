# Test Cases: VWO Login Page - Invalid Login Scenarios

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Testing Team |
| **Date** | March 31, 2026 |
| **Total Test Cases** | 5 |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-ILG-001, TC-ILG-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Negative / Security Test |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

---

## TC-ILG-001: Invalid Login with Arabic Characters in Email

| Field | Value |
|-------|-------|
| **TC ID** | TC-ILG-001 |
| **Title** | Verify system rejects Arabic characters in email field and displays appropriate error message |
| **Preconditions** | • Browser is open and user is on login page at https://app.vwo.com/#/login<br/>• Page is fully loaded<br/>• All form elements are visible |
| **Priority** | High |
| **Category** | Negative Test |
| **Spec File** | test-arabic.spec.ts |

### Step-by-Step Instructions:

| Step # | Action | Expected Result |
|--------|--------|-----------------|
| 1 | Open browser and navigate to https://app.vwo.com | Page loads successfully, login form is visible |
| 2 | Verify page title is "Login - VWO" | Page title confirmed in browser tab |
| 3 | Locate and inspect the Email input field | Email field is visible with placeholder text "Enter email ID" |
| 4 | Click on the Email input field to focus it | Input field is focused with cursor blinking inside |
| 5 | Enter Arabic text in email field: **"اختبار@gmail.com"** | Arabic characters are displayed in the field |
| 6 | Verify the entered text appears correctly | Arabic email text is visible in field |
| 7 | Leave the Password field empty (do not click on it) | Password field remains untouched |
| 8 | Observe form state before submission | Email field has focus, password is empty |
| 9 | Click the "Sign in" button | Form submission is triggered |
| 10 | Wait for page validation (3 seconds maximum) | System validates the form input |
| 11 | Verify error message is displayed | Error message appears below or near the email field |
| 12 | Read the error message text | Error message content is visible and readable |
| 13 | Capture screenshot of the error state | Screenshot is saved showing the error |
| 14 | Verify user is still on login page | Page URL still contains "/#/login" |
| 15 | Verify form was NOT submitted to backend | No navigation occurred, user remains on login page |

### Test Data:
```
Email: اختبار@gmail.com (Arabic text meaning "test")
Password: (empty/blank)
Expected Action: Form rejection with validation error
```

### Expected Results:
- **Error Message:** "Enter a valid email ID" OR "Invalid email format"
- **Field Highlighting:** Email field should have red border or red background
- **Form Behavior:** Form submission is prevented
- **Page Navigation:** User remains on login page
- **Backend Call:** No authentication request is sent to server
- **Password Validation:** Password field is not validated (email fails first)

### Acceptance Criteria:
✅ Arabic characters are rejected by email validation  
✅ Clear error message is displayed to user  
✅ Form submission is blocked  
✅ No XSS vulnerabilities from Arabic text input  
✅ System handles non-Latin characters gracefully  
✅ Error message is user-friendly and actionable  

---

## TC-ILG-002: Invalid Login with Chinese Characters and Dummy Password

| Field | Value |
|-------|-------|
| **TC ID** | TC-ILG-002 |
| **Title** | Verify system rejects Chinese characters in email and validates both fields |
| **Preconditions** | • Browser is open on login page at https://app.vwo.com/#/login<br/>• Page is fully loaded<br/>• All form elements and buttons are visible |
| **Priority** | High |
| **Category** | Negative Test |
| **Spec File** | test-chinese.spec.ts |

### Step-by-Step Instructions:

| Step # | Action | Expected Result |
|--------|--------|-----------------|
| 1 | Navigate to https://app.vwo.com/#/login | Login page loads successfully |
| 2 | Verify all form elements are present | Email field, Password field, Sign in button visible |
| 3 | Click on the Email input field | Email field receives focus |
| 4 | Enter Chinese text in email field: **"用户名@example.com"** | Chinese characters displayed in field (meaning "username") |
| 5 | Verify Chinese text entry | Text appears correctly in email field |
| 6 | Press Tab or click on Password field | Password field receives focus |
| 7 | Enter dummy password: **"DummyPass@123"** | Dummy password text is entered (masked with dots) |
| 8 | Verify password is entered and masked | Password field shows dots/asterisks, not plaintext |
| 9 | Locate the password visibility toggle button | Eye icon or toggle button is visible next to password field |
| 10 | Click the toggle password visibility button | Click the eye icon to show password |
| 11 | Verify password is now visible in plaintext | Password text "DummyPass@123" is displayed in clear text |
| 12 | Click the toggle button again | Click eye icon again to hide password |
| 13 | Verify password is hidden again | Password field shows dots/asterisks again |
| 14 | Click the "Sign in" button | Form submission is triggered |
| 15 | Wait for server response (3-5 seconds) | System sends validation to server |
| 16 | Verify error message appears on page | Error message is displayed to user |
| 17 | Check email field for error indicator | Email field has red border, red text, or error icon |
| 18 | Capture screenshot of error state | Screenshot showing the validation error |
| 19 | Repeat steps 4-5 with alternate Chinese email: **"登录@test.com"** | Test different Chinese characters |
| 20 | Repeat steps 4-5 with another variant: **"密码@vwo.com"** | Test another Chinese email variant |

### Test Data:
```
Primary Email: 用户名@example.com (Chinese characters)
Alternative Emails:
  - 登录@test.com (meaning "login")
  - 密码@vwo.com (meaning "password")
Password: DummyPass@123
```

### Expected Results:
- **Email Validation:** Chinese characters are rejected
- **Error Message:** "Enter a valid email ID" OR "Invalid email format"
- **Password Validation:** Password field shows no error (password itself is valid)
- **Password Toggle:** Eye icon toggle works correctly to show/hide password
- **Form Behavior:** Form is not submitted to backend
- **Multiple Tests:** All Chinese email variations are rejected consistently

### Acceptance Criteria:
✅ Chinese characters in email are properly rejected  
✅ Error message is clear about email field  
✅ Password visibility toggle works correctly  
✅ Password field accepts special characters properly  
✅ Validation is consistent across different Chinese inputs  
✅ No authentication bypass possible with Chinese emails  

---

## TC-ILG-003: Invalid Login with Dummy/Fake Email and Random Password

| Field | Value |
|-------|-------|
| **TC ID** | TC-ILG-003 |
| **Title** | Verify system rejects non-existent account with generic error message |
| **Preconditions** | • Browser is open on login page at https://app.vwo.com/#/login<br/>• No active user session exists<br/>• Network connectivity is available |
| **Priority** | High |
| **Category** | Negative Test |
| **Spec File** | test-dummyemail.spec.ts |

### Step-by-Step Instructions:

| Step # | Action | Expected Result |
|--------|--------|-----------------|
| 1 | Open browser and navigate to https://app.vwo.com | Login page loads with full form visible |
| 2 | Verify page title is "Login - VWO" | Page title confirmed |
| 3 | Verify URL shows login page | URL contains "/#/login" |
| 4 | Click on Email input field | Email field focused and active |
| 5 | Enter non-existent email: **"fakeuser.12345@dummytest.com"** | Email text entered in field |
| 6 | Verify email format is valid | Email appears correctly formatted (has @ and domain) |
| 7 | Click on Password input field | Password field focused and active |
| 8 | Enter random password: **"RandomPass@2026#$%^"** | Random password entered (masked with dots) |
| 9 | Verify password field has valid length | Password appears to be properly entered |
| 10 | Check if "Remember me" checkbox is checked | Verify checkbox state |
| 11 | If checkbox is checked, click to uncheck it | Checkbox becomes unchecked |
| 12 | Verify checkbox is now unchecked | Checkbox state is confirmed as unchecked |
| 13 | Open Browser Developer Tools (Press F12) | Developer Tools panel opens |
| 14 | Click on Network tab in Developer Tools | Network monitoring is active |
| 15 | Click the "Sign in" button | Form submission initiated |
| 16 | Monitor Network tab for POST request | Observe the authentication POST request in network tab |
| 17 | Wait for server response (3-5 seconds) | Server responds with authentication result |
| 18 | Verify response has 401 or similar error code | Check status code in network tab |
| 19 | Verify error message appears on login page | Error message is displayed to user |
| 20 | Read and note the error message text | Document the exact error message shown |
| 21 | Verify dashboard/home page is NOT shown | User is not logged in |
| 22 | Verify user is still on login page | Page URL is still "/#/login" |
| 23 | Open Browser Console tab | Console tab is now active |
| 24 | Check Local Storage and Session Storage | Inspect browser storage for auth tokens |
| 25 | Verify NO auth tokens in storage | LocalStorage and SessionStorage should be empty or have no auth token |
| 26 | Click "Sign in" button again with same credentials | Attempt login a second time |
| 27 | Wait for second response | Server responds again |
| 28 | Verify same error message appears | Error message is identical to first attempt |
| 29 | Capture screenshot of error state | Screenshot showing the error message |
| 30 | Test with alternative dummy email: **"nonexistent.user.test@invalidemaildomain.com"** | Test with different dummy email format |

### Test Data:
```
Primary Email: fakeuser.12345@dummytest.com
Password: RandomPass@2026#$%^

Alternative Emails:
  - nonexistent.user.test@invalidemaildomain.com
  - nobody123456789@test-domain.xyz

Alternative Passwords:
  - TestPass!@#$2026
  - MyPassword!2026
```

### Expected Results:
- **Email Format:** Email validation passes (format is valid)
- **Password Format:** Password validation passes (format is valid)
- **Server Response:** 401 Unauthorized OR 400/403 Error
- **Error Message:** Generic message like "Invalid email or password"
- **Not User-Specific:** Message should NOT say "User not found" or similar
- **No Session Created:** No auth tokens in LocalStorage/SessionStorage
- **Consistency:** Same error appears on repeated attempts
- **Security:** No information disclosure about user enumeration

### Acceptance Criteria:
✅ Non-existent accounts are safely rejected  
✅ Generic error message prevents user enumeration  
✅ Email field accepts special characters and domains  
✅ Password field accepts complex special characters  
✅ No session tokens are created  
✅ Server response is consistent  
✅ Error message does not leak account existence info  

---

## TC-ILG-004: Invalid Login with SQL Injection Attack

| Field | Value |
|-------|-------|
| **TC ID** | TC-ILG-004 |
| **Title** | Verify system prevents SQL injection and XSS attacks |
| **Preconditions** | • Browser is open on login page at https://app.vwo.com/#/login<br/>• Developer Tools are ready to monitor<br/>• Network monitoring capability is available |
| **Priority** | High |
| **Category** | Security Test |
| **Spec File** | test-security.spec.ts |

### Step-by-Step Instructions:

| Step # | Action | Expected Result |
|--------|--------|-----------------|
| 1 | Open Browser Developer Tools (F12 key) | Developer Tools panel opens |
| 2 | Click on "Network" tab | Network monitoring is active |
| 3 | Navigate to https://app.vwo.com/#/login | Login page loads, network tab ready |
| 4 | Click on Email input field | Email field is focused |
| 5 | Enter SQL injection payload: **"' OR '1'='1"** | Payload string entered in email field |
| 6 | Verify payload is displayed in field | Malicious string is visible in field |
| 7 | Click on Password input field | Password field is focused |
| 8 | Enter test password: **"password123"** | Password entered and masked |
| 9 | Click "Sign in" button | Form submission triggered |
| 10 | Monitor Network tab for POST request | Observe the authentication request |
| 11 | Check Request Headers and Payload | Verify input is properly encoded in request |
| 12 | Verify payload is encoded/escaped | Quotes should be encoded (%27 or similar) |
| 13 | Wait for server response (3-5 seconds) | Server processes request |
| 14 | Check Response Status Code | Should be 400/401, NOT 200 (success) |
| 15 | Verify NO unauthorized access granted | Dashboard does not appear |
| 16 | Verify error message on page | Error message displayed |
| 17 | Verify payload is NOT echoed in error | Error message doesn't show the injection payload |
| 18 | Click on Console tab in Developer Tools | Console is now active |
| 19 | Check for JavaScript errors or alerts | No unexpected script execution |
| 20 | Clear email field and enter: **"admin'--"** | Comment-based SQL injection payload |
| 21 | Repeat steps 8-19 with this payload | Test comment-based injection |
| 22 | Clear email field and enter: **"' OR 1=1 --"** | Another SQL injection variation |
| 23 | Repeat steps 8-19 with this payload | Test boolean-based injection |
| 24 | Clear email field and enter XSS payload: **"<script>alert('XSS')</script>"** | XSS script injection attempt |
| 25 | Click Sign in button | Submit the XSS payload |
| 26 | Watch for JavaScript alert popup | NO alert should appear |
| 27 | Verify NO script execution occurred | No popup dialog appears |
| 28 | Check Console for script errors | No script execution in console |
| 29 | Test with another XSS: **"<img src=x onerror=\"alert('XSS')\">"** | Alternative XSS payload |
| 30 | Repeat: sign in and verify NO execution | No alert popup should occur |
| 31 | Capture screenshot of Network tab | Screenshot showing sanitized requests |
| 32 | Take screenshot of final state | Confirm security protection is active |

### Test Data:
```
SQL Injection Payloads:
  1. ' OR '1'='1
  2. admin'--
  3. ' OR 1=1 --
  4. '; DROP TABLE users;--
  5. ' UNION SELECT * FROM users--

XSS Payloads:
  1. <script>alert('XSS')</script>
  2. <img src=x onerror="alert('XSS')">
  3. <svg/onload=alert('XSS')>
  4. javascript:alert('XSS')

Encoding Test Payloads:
  1. %27 OR %271%27=%271
  2. \' OR \'1\'=\'1
```

### Expected Results:
- **SQL Injection:** All payloads result in 400/401 error
- **Input Validation:** Special characters are properly escaped/encoded
- **Error Messages:** Do NOT contain the original payload
- **XSS Prevention:** NO JavaScript is executed
- **Alert Popup:** No browser alert dialogs appear
- **Console Errors:** Script execution is blocked
- **Network Response:** Shows properly sanitized requests
- **Security:** Parameterized queries are used

### Acceptance Criteria:
✅ All SQL injection attempts fail safely  
✅ All XSS attempts are prevented  
✅ Input is properly sanitized/escaped  
✅ Error messages are safe (no payload echo)  
✅ No script execution occurs  
✅ Parameterized queries protect database  
✅ Server response is consistent for all payloads  
✅ Security vulnerabilities are not present  

---

## TC-ILG-005: Invalid Login with Mixed Language and Empty Password

| Field | Value |
|-------|-------|
| **TC ID** | TC-ILG-005 |
| **Title** | Verify system rejects mixed language email and enforces password as mandatory |
| **Preconditions** | • Browser is open on login page at https://app.vwo.com/#/login<br/>• Page is fully loaded<br/>• All form elements are visible |
| **Priority** | High |
| **Category** | Negative Test |
| **Spec File** | test-mixedlang.spec.ts |

### Step-by-Step Instructions:

#### **FIRST ATTEMPT - Mixed Language Email with Empty Password:**

| Step # | Action | Expected Result |
|--------|--------|-----------------|
| 1 | Navigate to https://app.vwo.com/#/login | Login page loads successfully |
| 2 | Click on Email input field | Email field is focused and ready for input |
| 3 | Enter mixed language email: **"test用户名@تجربة.com"** | Mixed characters entered (English + Chinese + Arabic) |
| 4 | Verify text appears in email field | Mixed language email is displayed in field |
| 5 | Observe Password field (do NOT click on it) | Password field remains empty and unfocused |
| 6 | Verify password field is completely empty | No text, no focus in password field |
| 7 | Wait 1 second | Allow time for any auto-validation |
| 8 | Click the "Sign in" button | Form submission is triggered |
| 9 | Wait for form validation (2 seconds) | System validates both fields |
| 10 | Verify Password field shows error message | Error appears below password field saying "Password is required" |
| 11 | Verify Email field shows error message | Error appears below email field saying "Invalid email format" |
| 12 | Count total validation errors displayed | Document total number of error messages |
| 13 | Verify both fields are highlighted in red | Both email and password fields show error indicators |
| 14 | Verify form was NOT submitted to server | No network request made to backend |
| 15 | Capture screenshot of FIRST attempt errors | Screenshot showing both validation errors |

#### **SECOND ATTEMPT - Mixed Language Email with Valid Password:**

| Step # | Action | Expected Result |
|--------|--------|-----------------|
| 16 | Click on Password input field | Password field now receives focus |
| 17 | Enter valid password: **"ValidPass123!"** | Password is entered and masked with dots |
| 18 | Verify password field has some text | Password appears to be properly entered |
| 19 | Observe Email field | Mixed language email is still present |
| 20 | Press Tab or click Sign in | Focus moves away from password field |
| 21 | Locate password visibility toggle button | Eye icon is visible next to password field |
| 22 | Click the toggle button (if exists) | Try to show/hide password |
| 23 | Verify toggle functionality | Password visibility changes |
| 24 | Email field still has mixed language | Original mixed language email remains in field |
| 25 | Click the "Sign in" button | Form submission is attempted again |
| 26 | Wait 2 seconds for validation | System validates the form |
| 27 | Verify Password error is GONE | NO error message for password field (password is now filled) |
| 28 | Verify Email error still appears | Email field still shows "Invalid email format" error |
| 29 | Verify form was NOT submitted to server | Mixed language email prevents backend submission |
| 30 | Capture screenshot of SECOND attempt | Screenshot showing email error only |

#### **ADDITIONAL TESTING - Alternate Mixed Emails:**

| Step # | Action | Expected Result |
|--------|--------|-----------------|
| 31 | Clear email field | Remove current mixed language email |
| 32 | Enter alternate mixed email: **"user名前@тест.xyz"** | Japanese + Russian mixed characters |
| 33 | Leave password as-is (with "ValidPass123!") | Password remains filled |
| 34 | Click Sign in | Attempt with different mixed language |
| 35 | Verify error appears | Email validation error displayed |
| 36 | Test with: **"test中文@русский.ru"** | Chinese + Russian domain mixed |
| 37 | Click Sign in | Another mixed language test |
| 38 | Verify error appears | Email validation error displayed |
| 39 | Test with: **"usuario日本語@arabicarabia.ae"** | Spanish + Japanese + Arabic |
| 40 | Click Sign in | Final mixed language test |
| 41 | Verify error appears | Email validation error displayed |

### Test Data:
```
Primary Email (Mixed Languages):
  - test用户名@تجربة.com (English + Chinese + Arabic)

Alternative Mixed Emails:
  - user名前@тест.xyz (English + Japanese + Russian)
  - test中文@русский.ru (Chinese + Russian domain)
  - usuario日本語@arabicarabia.ae (Spanish + Japanese + Arabic)

Valid Passwords for Testing:
  - ValidPass123!
  - Test@Password2026
  - SecurePass#123

Invalid/Empty Passwords:
  - (empty field)
  - (single space)
  - (tab character only)
```

### Expected Results:

**First Attempt (Mixed Email + Empty Password):**
- Email Field Error: "Enter a valid email ID" OR "Invalid email format"
- Password Field Error: "Password is required" OR "Please enter your password"
- Total Errors: 2 error messages displayed
- Fields Highlighted: Both fields shown with red border/background
- Form Submission: BLOCKED - no network request to backend
- User Location: Remains on login page

**Second Attempt (Mixed Email + Valid Password):**
- Email Field Error: Still shows "Invalid email format"
- Password Field Error: GONE (no longer shown since password is filled)
- Total Errors: 1 error message only
- Form Submission: BLOCKED due to email validation failure
- User Location: Still on login page

**Additional Attempts (Various Mixed Languages):**
- All mixed language emails: Consistently rejected
- Error message: Always "Invalid email format" or similar
- Pattern: Same validation rule applies to all combinations
- Consistency: All attempts behave identically

### Acceptance Criteria:
✅ Mixed language emails are properly rejected  
✅ Password field is enforced as mandatory  
✅ Multiple validation errors display simultaneously  
✅ Error messages are clear and actionable  
✅ Form submission is prevented for invalid emails  
✅ Password error clears when field is filled  
✅ Email error persists across attempts  
✅ Client-side validation prevents server submission  

---

## Summary

| Priority | Count |
|----------|-------|
| High | **5** |
| Medium | **0** |
| Low | **0** |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Smoke | **0** |
| Functional | **0** |
| Negative | **4** |
| Security | **1** |
| **Total** | **5** |

---

## Test Execution Overview

| TC ID | Test Title | Priority | Category | Steps | Duration |
|-------|------------|----------|----------|-------|----------|
| TC-ILG-001 | Arabic Characters | High | Negative | 15 | 3-5 min |
| TC-ILG-002 | Chinese Characters | High | Negative | 20 | 5-7 min |
| TC-ILG-003 | Dummy Email | High | Negative | 30 | 5-7 min |
| TC-ILG-004 | SQL Injection & XSS | High | Security | 32 | 7-10 min |
| TC-ILG-005 | Mixed Language | High | Negative | 41 | 5-7 min |
| **TOTAL** | **5 Test Cases** | **All High** | **4 Neg + 1 Sec** | **138 steps** | **25-36 min** |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | March 31, 2026 | QA Testing Team | Initial version - 5 detailed invalid login test cases based on test template |
