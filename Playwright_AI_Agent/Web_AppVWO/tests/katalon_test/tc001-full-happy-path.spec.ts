import { test, expect } from '@playwright/test';
import { CuraHomePage } from './pages/CuraHomePage';
import { CuraLoginPage } from './pages/CuraLoginPage';
import { CuraAppointmentPage } from './pages/CuraAppointmentPage';
import { CuraConfirmationPage } from './pages/CuraConfirmationPage';
import curaData from './testdata/cura-data.json';

const { validUser, defaultAppointment } = curaData;

test.describe('E2E - Successful Make Appointment Flow', () => {
    test('TC-001: Complete end-to-end successful appointment booking', async ({ page }) => {
        const homePage = new CuraHomePage(page);
        const loginPage = new CuraLoginPage(page);
        const appointmentPage = new CuraAppointmentPage(page);
        const confirmationPage = new CuraConfirmationPage(page);

        // 1. Navigate to https://katalon-demo-cura.herokuapp.com/
        await test.step('Navigate to CURA Healthcare homepage', async () => {
            await homePage.navigate();
            await homePage.expectPageLoaded();
            await expect(page).toHaveURL(/katalon-demo-cura\.herokuapp\.com\/$/);
        });

        // 2. Click the 'Make Appointment' button on the homepage
        await test.step('Click Make Appointment button', async () => {
            await homePage.clickMakeAppointment();
            await expect(page).toHaveURL(/profile\.php#login/);
            await loginPage.expectUsernameFieldVisible();
            await loginPage.expectPasswordFieldVisible();
            await loginPage.expectLoginButtonVisible();
        });

        // 3. Enter 'John Doe' in the Username field
        await test.step('Enter username', async () => {
            await loginPage.enterUsername(validUser.username);
            await expect(page.locator('#txt-username')).toHaveValue(validUser.username);
        });

        // 4. Enter 'ThisIsNotAPassword' in the Password field
        await test.step('Enter password', async () => {
            await loginPage.enterPassword(validUser.password);
            await loginPage.expectPasswordFieldMasked();
        });

        // 5. Click the 'Login' button
        await test.step('Click Login button and verify appointment form', async () => {
            await loginPage.clickLogin();
            await expect(page).toHaveURL(/\/#appointment/);
            await appointmentPage.expectOnAppointmentPage();
        });

        // 6. Verify facility dropdown
        await test.step('Select facility', async () => {
            await appointmentPage.selectFacility(defaultAppointment.facility);
            await expect(page.locator('#combo_facility')).toHaveValue(defaultAppointment.facility);
        });

        // 7. Verify and uncheck hospital readmission
        await test.step('Verify readmission checkbox is unchecked', async () => {
            await appointmentPage.expectReadmissionUnchecked();
        });

        // 8. Select 'Medicare' radio button
        await test.step('Select Medicare radio button', async () => {
            await appointmentPage.selectMedicare();
            await appointmentPage.expectMedicareSelected();
        });

        // 9. Enter visit date
        await test.step('Enter visit date', async () => {
            await appointmentPage.enterVisitDate(defaultAppointment.visitDate);
            await expect(page.locator('#txt_visit_date')).toHaveValue(defaultAppointment.visitDate);
        });

        // 10. Enter comment
        await test.step('Enter comment', async () => {
            await appointmentPage.enterComment(defaultAppointment.comment);
            await expect(page.locator('#txt_comment')).toHaveValue(defaultAppointment.comment);
        });

        // 11. Click the 'Book Appointment' button
        await test.step('Book appointment and verify confirmation', async () => {
            await appointmentPage.clickBookAppointment();
            await expect(page).toHaveURL(/appointment\.php#summary/);
            await confirmationPage.expectOnConfirmationPage();
            await confirmationPage.expectConfirmationMessage();
            await confirmationPage.expectFacility(defaultAppointment.facility);
            await confirmationPage.expectReadmission('No');
            await confirmationPage.expectProgram(defaultAppointment.program);
            await confirmationPage.expectVisitDate(defaultAppointment.visitDate);
        });
    });
});
