# CURA Healthcare - Make Appointment Test Plan

## Application Overview

This test plan covers the successful appointment booking flow in the CURA Healthcare Service application. The flow includes navigating from the home page, authenticating with valid credentials, filling out the appointment form with appropriate details, and verifying the appointment confirmation. This plan focuses on testing the complete happy path scenario for making an appointment with various facility options, healthcare programs, and form validations.

## Test Scenarios

### 1. Homepage and Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify CURA Healthcare Homepage Loads

**File:** `tests/appointments/verify_homepage_load.spec.ts`

**Steps:**
  1. Navigate to https://katalon-demo-cura.herokuapp.com/
    - expect: Page title should be 'CURA Healthcare Service'
    - expect: URL should be https://katalon-demo-cura.herokuapp.com/
    - expect: Header should display 'We Care About Your Health'
  2. Verify homepage elements
    - expect: Make Appointment button should be visible and clickable
    - expect: Navigation menu should display Home, Login links

#### 1.2. Make Appointment Button Navigation

**File:** `tests/appointments/make_appointment_button_navigation.spec.ts`

**Steps:**
  1. Navigate to CURA Healthcare homepage
    - expect: Page loads successfully
  2. Click on Make Appointment button
    - expect: User should be navigated to login page
    - expect: URL should contain 'profile.php#login'
    - expect: Login form should be visible

### 2. Login Page Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Login with Valid Credentials

**File:** `tests/appointments/login_with_valid_credentials.spec.ts`

**Steps:**
  1. Navigate to Make Appointment and reach login page
    - expect: Login page loads successfully
    - expect: Username and Password input fields are visible
  2. Enter username 'John Doe' in username field
    - expect: Username field should accept input
  3. Enter password 'ThisIsNotAPassword' in password field
    - expect: Password field should accept input
  4. Click Login button
    - expect: User should be authenticated
    - expect: Page should redirect to appointment form
    - expect: URL should change to appointment page (#appointment)

#### 2.2. Login Page UI Elements Visibility

**File:** `tests/appointments/login_page_elements.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Username input field should be visible with label
  2. Check password field
    - expect: Password input field should be visible with label
  3. Verify login button
    - expect: Login button should be visible and clickable

### 3. Appointment Form Submission

**Seed:** `tests/seed.spec.ts`

#### 3.1. Submit Complete Appointment Form Successfully

**File:** `tests/appointments/successful_appointment_submission.spec.ts`

**Steps:**
  1. Navigate to CURA Healthcare and click Make Appointment
    - expect: Login page loads
  2. Login with John Doe / ThisIsNotAPassword
    - expect: Form fields are ready for input
  3. Verify facility default selection
    - expect: Facility dropdown shows Tokyo CURA Healthcare Center
  4. Click Apply for hospital readmission checkbox
    - expect: Hospital readmission checkbox is then checked
  5. Verify Medicare is the default option
    - expect: Healthcare program Medicare is visible and selected
  6. Click on Visit Date field
    - expect: Date picker opens and calendar is visible
  7. Select 15/04/2026 from calendar
    - expect: Date 15 is selected in the calendar
  8. Enter 'I need a routine checkup and consultation with the doctor.'
    - expect: Comment text appears in field
  9. Verify form is completely filled
    - expect: All required fields are completed with valid data
  10. Click Book Appointment button
    - expect: Form submits without errors
    - expect: Page navigates to confirmation

#### 3.2. Verify Appointment Confirmation Details

**File:** `tests/appointments/appointment_confirmation_verification.spec.ts`

**Steps:**
  1. Complete appointment submission
    - expect: Confirmation page loads successfully
  2. Wait for page navigation
    - expect: URL changes to appointment.php#summary
  3. Verify heading text
    - expect: Confirmation heading 'Appointment Confirmation' is displayed
  4. Check confirmation message
    - expect: Message 'Please be informed that your appointment has been booked as following:' appears
  5. Verify facility in confirmation
    - expect: Facility displays: Tokyo CURA Healthcare Center
  6. Verify readmission status
    - expect: Hospital readmission displays: Yes
  7. Verify program selection
    - expect: Healthcare program displays: Medicare
  8. Verify date in format dd/mm/yyyy
    - expect: Visit date displays: 15/04/2026
  9. Verify comment content
    - expect: Comment displays: I need a routine checkup and consultation with the doctor.

#### 3.3. Navigate from Confirmation Page to Homepage

**File:** `tests/appointments/appointment_confirmation_navigation.spec.ts`

**Steps:**
  1. Complete successful appointment booking
    - expect: Appointment confirmation page is displayed
  2. Check for navigation link
    - expect: 'Go to Homepage' link is visible on confirmation page
  3. Click Go to Homepage link
    - expect: Clicking link navigates to homepage
  4. Verify homepage is loaded
    - expect: Homepage loads successfully
    - expect: URL becomes https://katalon-demo-cura.herokuapp.com/
