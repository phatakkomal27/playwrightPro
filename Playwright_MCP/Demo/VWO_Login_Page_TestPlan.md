# Test Plan: VWO Login Page

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | QA Testing Team |
| **Date** | March 31, 2026 |
| **Environment** | Production (app.vwo.com) |
| **Browser** | Chrome, Firefox, Safari, Edge |

---

## 1. Introduction

This test plan describes the testing approach for the **VWO Login Page** feature. It outlines the scope, test strategy, resources, schedule, and deliverables for comprehensive testing of the authentication module. The login page is a critical entry point for the VWO application and requires thorough functional and security testing.

## 2. Objectives

- Verify core login functionality works correctly with valid credentials
- Validate error handling for invalid inputs
- Ensure user flows are complete and error-free
- Validate UI elements and navigation
- Test alternative login methods (Google, SSO, Passkey)
- Verify security measures and session handling
- Test accessibility and responsive design

## 3. Scope

### In Scope
- Email/Password login functionality
- Password visibility toggle
- Forgot Password link
- Remember me checkbox functionality
- Google OAuth login
- SSO (Single Sign-On) login
- Passkey authentication
- Form validation (email format, password requirements)
- Error messages for invalid credentials
- Account lockout after failed attempts
- "Start FREE TRIAL" link functionality
- Privacy Policy and Terms links
- Navigation to login page
- Session token generation
- CSRF protection

### Out of Scope
- Backend API testing (covered separately)
- Database testing
- Performance/load testing
- Payment gateway testing
- Multi-factor authentication (if applicable)
- Email verification process
- Password reset flow (separate test plan)

## 4. Test Strategy

### Test Approach
- **Automation Tool:** Playwright with @playwright/test
- **Test Type:** End-to-end functional testing
- **Browser:** Chrome, Firefox, Safari, Edge
- **Environment:** Production (app.vwo.com)

### Test Levels
- **Smoke Testing:** Critical login paths (valid email/password, Google login)
- **Functional Testing:** All form fields, buttons, error validations
- **Negative Testing:** Invalid inputs, empty fields, SQL injection attempts
- **UI Testing:** Element visibility, layout, responsive design

### Test Data Requirements
- Valid test user accounts with different access levels
- Invalid email formats
- Weak and strong passwords
- Special characters for SQL injection testing
- XSS payloads for security testing

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://app.vwo.com/#/login |
| Browser | Chrome v130+, Firefox v133+, Safari v17+, Edge v130+ |
| OS | Cross-platform (Windows, macOS, Linux) |
| Framework | Playwright v1.58+ with @playwright/test |
| Reporter | HTML + JSON |
| Test Runner | Node.js v18+ |

## 6. Entry Criteria

- Application is deployed and accessible at app.vwo.com
- Test environment is stable and functional
- Valid test user accounts are provisioned
- Test cases are reviewed and approved
- Playwright environment is configured
- All dependencies are installed (npm packages)

## 7. Exit Criteria

- All planned test cases executed (100% execution rate)
- All critical/high priority defects resolved or documented
- Test report generated and reviewed
- No open blockers for production release
- Code coverage minimum 80%
- Performance baseline established

## 8. Test Cases Summary

### TC-001: Valid Login with Email and Password
- **Priority:** P0 (Critical)
- **Precondition:** User has valid credentials
- **Steps:**
  1. Navigate to app.vwo.com
  2. Enter valid email in Email field
  3. Enter valid password in Password field
  4. Click "Sign in" button
- **Expected Result:** User logged in successfully, redirected to dashboard
- **Type:** Smoke Test

### TC-002: Invalid Email Format
- **Priority:** P1 (High)
- **Steps:**
  1. Enter invalid email (e.g., "testuser" without @)
  2. Click "Sign in" button
- **Expected Result:** Error message displayed: "Enter a valid email ID"
- **Type:** Negative Test

### TC-003: Empty Email Field
- **Priority:** P1 (High)
- **Steps:**
  1. Leave Email field empty
  2. Enter valid password
  3. Click "Sign in" button
- **Expected Result:** Error message displayed, form not submitted
- **Type:** Validation Test

### TC-004: Empty Password Field
- **Priority:** P1 (High)
- **Steps:**
  1. Enter valid email
  2. Leave Password field empty
  3. Click "Sign in" button
- **Expected Result:** Error message displayed, form not submitted
- **Type:** Validation Test

### TC-005: Empty Email and Password
- **Priority:** P1 (High)
- **Steps:**
  1. Leave both Email and Password fields empty
  2. Click "Sign in" button
- **Expected Result:** Error messages displayed for both fields
- **Type:** Validation Test

### TC-006: Invalid Credentials
- **Priority:** P1 (High)
- **Steps:**
  1. Enter valid email format but non-existent account
  2. Enter password
  3. Click "Sign in" button
- **Expected Result:** Error message: "Invalid email or password"
- **Type:** Negative Test

### TC-007: Correct Email, Incorrect Password
- **Priority:** P1 (High)
- **Steps:**
  1. Enter valid email of existing account
  2. Enter incorrect password
  3. Click "Sign in" button
- **Expected Result:** Error message displayed, attempt count increased
- **Type:** Negative Test

### TC-008: Password Visibility Toggle
- **Priority:** P2 (Medium)
- **Steps:**
  1. Enter password in Password field
  2. Click toggle visibility button
  3. Verify password is visible
  4. Click toggle again
- **Expected Result:** Password visibility toggles correctly
- **Type:** Functional Test

### TC-009: Remember Me Checkbox
- **Priority:** P2 (Medium)
- **Steps:**
  1. Check "Remember me" checkbox
  2. Enter credentials and sign in
  3. Clear browser data
  4. Navigate back to login page
- **Expected Result:** Email field should be pre-filled if browser allows
- **Type:** Functional Test

### TC-010: Forgot Password Link
- **Priority:** P1 (High)
- **Steps:**
  1. Click "Forgot Password?" link
- **Expected Result:** Redirected to password reset page
- **Type:** Navigation Test

### TC-011: Sign in with Google
- **Priority:** P1 (High)
- **Steps:**
  1. Click "Sign in with Google" button
  2. Complete Google OAuth flow
- **Expected Result:** User logged in, redirected to dashboard
- **Type:** Integration Test

### TC-012: Sign in using SSO
- **Priority:** P1 (High)
- **Steps:**
  1. Click "Sign in using SSO" button
  2. Follow SSO authentication flow
- **Expected Result:** User authenticated via SSO, logged in
- **Type:** Integration Test

### TC-013: Sign in with Passkey
- **Priority:** P2 (Medium)
- **Steps:**
  1. Click "Sign in with Passkey" button
  2. Complete passkey authentication
- **Expected Result:** User authenticated via passkey
- **Type:** Integration Test

### TC-014: Free Trial Link
- **Priority:** P3 (Low)
- **Steps:**
  1. Click "Start a FREE TRIAL" link
- **Expected Result:** Redirected to VWO free trial page
- **Type:** Navigation Test

### TC-015: Privacy Policy Link
- **Priority:** P3 (Low)
- **Steps:**
  1. Click "Privacy policy" link
- **Expected Result:** Privacy policy page opens in new tab/window
- **Type:** Navigation Test

### TC-016: Terms Link
- **Priority:** P3 (Low)
- **Steps:**
  1. Click "Terms" link
- **Expected Result:** Terms page opens in new tab/window
- **Type:** Navigation Test

### TC-017: SQL Injection Attempt
- **Priority:** P0 (Critical - Security)
- **Steps:**
  1. Enter SQL injection payload in email field: `' OR '1'='1`
  2. Click "Sign in"
- **Expected Result:** Input sanitized, error displayed, no unauthorized access
- **Type:** Security Test

### TC-018: XSS Attack Prevention
- **Priority:** P0 (Critical - Security)
- **Steps:**
  1. Enter XSS payload in email field: `<script>alert('XSS')</script>`
  2. Click "Sign in"
- **Expected Result:** Script not executed, error displayed
- **Type:** Security Test

### TC-019: Case Sensitivity
- **Priority:** P2 (Medium)
- **Steps:**
  1. Enter email with different cases (Test@Example.com vs test@example.com)
  2. Click "Sign in"
- **Expected Result:** Login works regardless of email case
- **Type:** Functional Test

### TC-020: Special Characters in Password
- **Priority:** P2 (Medium)
- **Steps:**
  1. Enter password with special characters (!@#$%^&*)
  2. Execute login
- **Expected Result:** Login successful if credentials correct
- **Type:** Functional Test

### TC-021: Account Lockout After Failed Attempts
- **Priority:** P1 (High)
- **Steps:**
  1. Attempt login with wrong password 5 times
  2. Attempt again
- **Expected Result:** Account locked, error message displayed
- **Type:** Security Test

### TC-022: Session Token Validation
- **Priority:** P0 (Critical - Security)
- **Steps:**
  1. Login successfully
  2. Verify session token is created
  3. Verify token expires after inactivity
- **Expected Result:** Session token generated and managed correctly
- **Type:** Security Test

### TC-023: CSRF Token Protection
- **Priority:** P0 (Critical - Security)
- **Steps:**
  1. Verify CSRF token is present in login form
  2. Attempt login with missing CSRF token
- **Expected Result:** Request rejected if CSRF token is missing/invalid
- **Type:** Security Test

### TC-024: Responsive Design - Mobile
- **Priority:** P2 (Medium)
- **Steps:**
  1. Open login page on mobile device (375x667)
  2. Verify all elements are visible and accessible
- **Expected Result:** UI properly responsive on mobile
- **Type:** UI Test

### TC-025: Responsive Design - Tablet
- **Priority:** P2 (Medium)
- **Steps:**
  1. Open login page on tablet (768x1024)
  2. Verify all elements are properly laid out
- **Expected Result:** UI properly responsive on tablet
- **Type:** UI Test

## 9. Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|-----------|
| Application downtime | High | Low | Use stable test environment, monitor uptime |
| Session timeout issues | Medium | Medium | Test with multiple browsers, clear cache |
| CORS issues with OAuth | Medium | Low | Test OAuth flow with actual credentials |
| Flaky tests due to network | Medium | Medium | Implement proper waits, retry logic |
| Account lockout during testing | Medium | High | Use dedicated test accounts, reset if needed |
| Browser compatibility issues | Medium | Medium | Test on multiple browsers and versions |
| Security vulnerabilities discovered | Critical | Low | Have security fix process ready |

## 10. Schedule

| Phase | Duration | Start Date | End Date |
|-------|----------|-----------|----------|
| Test Planning | 1 day | March 31, 2026 | March 31, 2026 |
| Test Case Design | 2 days | April 1, 2026 | April 2, 2026 |
| Test Automation | 3 days | April 3, 2026 | April 5, 2026 |
| Test Execution | 2 days | April 6, 2026 | April 7, 2026 |
| Defect Reporting & Fix | 2 days | April 8, 2026 | April 9, 2026 |
| Regression Testing | 1 day | April 10, 2026 | April 10, 2026 |
| Test Closure | 1 day | April 11, 2026 | April 11, 2026 |

## 11. Resources Required

- **QA Engineers:** 2
- **Test Automation Engineers:** 1
- **Security Analyst:** 1 (for security testing)
- **DevOps/Infrastructure:** 1 (environment setup)
- **Test Devices:** Multiple browsers, mobile devices, tablets

## 12. Deliverables

- [x] Test Plan (this document)
- [ ] Test Cases Document (automated)
- [ ] Test Scripts (Playwright code)
- [ ] Test Execution Report (HTML)
- [ ] Defect Reports (with screenshots/videos)
- [ ] Test Summary Report
- [ ] Code Coverage Report

## 13. Test Execution Metrics

| Metric | Target |
|--------|--------|
| Test Pass Rate | >95% |
| Code Coverage | >80% |
| Defect Detection Rate | >90% |
| Test Execution Time | <30 minutes for full suite |
| Critical Issues | 0 |
| High Priority Issues | <5 |

## 14. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Manager | ____________ | ____________ | ________ |
| Product Owner | ____________ | ____________ | ________ |
| QA Lead | ____________ | ____________ | ________ |

---

**Document History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | March 31, 2026 | QA Testing Team | Initial version with 25 test cases |
