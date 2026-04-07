import { test, expect } from '@playwright/test';
import { CuraHomePage } from './pages/CuraHomePage';
import { CuraLoginPage } from './pages/CuraLoginPage';
import { CuraAppointmentPage } from './pages/CuraAppointmentPage';
import { CuraConfirmationPage } from './pages/CuraConfirmationPage';
import curaData from './testdata/cura-data.json';

const { validUser, defaultAppointment } = curaData;

test.describe('Appointment Confirmation Tests', () => {
    async function completeAppointmentBooking(page: any) {
        const homePage = new CuraHomePage(page);
        const loginPage = new CuraLoginPage(page);
        const appointmentPage = new CuraAppointmentPage(page);

        await homePage.navigate();
        await homePage.clickMakeAppointment();
        await loginPage.enterUsername(validUser.username);
        await loginPage.enterPassword(validUser.password);
        await loginPage.clickLogin();

        await appointmentPage.selectFacility(defaultAppointment.facility);
        await appointmentPage.selectMedicare();
        await appointmentPage.enterVisitDate(defaultAppointment.visitDate);
        await appointmentPage.enterComment(defaultAppointment.comment);
        await appointmentPage.clickBookAppointment();

        await expect(page).toHaveURL(/appointment\.php#summary/);
    }

    test('TC-015: Verify Appointment Confirmation Page Loads', async ({ page }) => {
        const confirmationPage = new CuraConfirmationPage(page);

        await test.step('Complete appointment submission', async () => {
            await completeAppointmentBooking(page);
        });

        await test.step('Verify confirmation page elements', async () => {
            await confirmationPage.expectOnConfirmationPage();
            await confirmationPage.expectConfirmationMessage();
        });
    });

    test('TC-016: Verify Appointment Confirmation Details', async ({ page }) => {
        const confirmationPage = new CuraConfirmationPage(page);

        await test.step('Complete appointment submission', async () => {
            await completeAppointmentBooking(page);
        });

        await test.step('Verify all confirmation details', async () => {
            await confirmationPage.expectOnConfirmationPage();
            await confirmationPage.expectFacility(defaultAppointment.facility);
            await confirmationPage.expectReadmission('No');
            await confirmationPage.expectProgram(defaultAppointment.program);
            await confirmationPage.expectVisitDate(defaultAppointment.visitDate);
        });
    });

    test('TC-017: Verify Confirmation Label Visibility', async ({ page }) => {
        const confirmationPage = new CuraConfirmationPage(page);

        await test.step('Complete appointment submission', async () => {
            await completeAppointmentBooking(page);
        });

        await test.step('Verify all labels are visible', async () => {
            await confirmationPage.expectFacilityLabelVisible();
            await confirmationPage.expectReadmissionLabelVisible();
            await confirmationPage.expectProgramLabelVisible();
            await confirmationPage.expectVisitDateLabelVisible();
        });
    });

    test('TC-018: Navigate from Confirmation Page to Homepage', async ({ page }) => {
        const confirmationPage = new CuraConfirmationPage(page);

        await test.step('Complete appointment submission', async () => {
            await completeAppointmentBooking(page);
        });

        await test.step('Verify Go to Homepage link is visible', async () => {
            await confirmationPage.expectGoToHomepageLinkVisible();
        });

        await test.step('Click Go to Homepage link', async () => {
            await confirmationPage.clickGoToHomepage();
            await expect(page).toHaveURL(/katalon-demo-cura\.herokuapp\.com\/$/);
        });
    });

    test('TC-019: Confirmation with Different Facility - Hongkong', async ({ page }) => {
        const homePage = new CuraHomePage(page);
        const loginPage = new CuraLoginPage(page);
        const appointmentPage = new CuraAppointmentPage(page);
        const confirmationPage = new CuraConfirmationPage(page);

        await test.step('Navigate and login', async () => {
            await homePage.navigate();
            await homePage.clickMakeAppointment();
            await loginPage.enterUsername(validUser.username);
            await loginPage.enterPassword(validUser.password);
            await loginPage.clickLogin();
        });

        await test.step('Book appointment with Hongkong facility', async () => {
            await appointmentPage.selectFacility('Hongkong CURA Healthcare Center');
            await appointmentPage.selectMedicare();
            await appointmentPage.enterVisitDate('22/04/2026');
            await appointmentPage.clickBookAppointment();
        });

        await test.step('Verify confirmation shows Hongkong facility', async () => {
            await confirmationPage.expectFacility('Hongkong CURA Healthcare Center');
        });
    });

    test('TC-020: Confirmation with Readmission Yes', async ({ page }) => {
        const homePage = new CuraHomePage(page);
        const loginPage = new CuraLoginPage(page);
        const appointmentPage = new CuraAppointmentPage(page);
        const confirmationPage = new CuraConfirmationPage(page);

        await test.step('Navigate and login', async () => {
            await homePage.navigate();
            await homePage.clickMakeAppointment();
            await loginPage.enterUsername(validUser.username);
            await loginPage.enterPassword(validUser.password);
            await loginPage.clickLogin();
        });

        await test.step('Book appointment with readmission checked', async () => {
            await appointmentPage.selectFacility('Tokyo CURA Healthcare Center');
            await appointmentPage.checkReadmission();
            await appointmentPage.selectMedicare();
            await appointmentPage.enterVisitDate('18/04/2026');
            await appointmentPage.clickBookAppointment();
        });

        await test.step('Verify confirmation shows readmission as Yes', async () => {
            await confirmationPage.expectReadmission('Yes');
        });
    });

    test('TC-021: Confirmation with Different Healthcare Program - Medicaid', async ({ page }) => {
        const homePage = new CuraHomePage(page);
        const loginPage = new CuraLoginPage(page);
        const appointmentPage = new CuraAppointmentPage(page);
        const confirmationPage = new CuraConfirmationPage(page);

        await test.step('Navigate and login', async () => {
            await homePage.navigate();
            await homePage.clickMakeAppointment();
            await loginPage.enterUsername(validUser.username);
            await loginPage.enterPassword(validUser.password);
            await loginPage.clickLogin();
        });

        await test.step('Book appointment with Medicaid', async () => {
            await appointmentPage.selectFacility('Tokyo CURA Healthcare Center');
            await appointmentPage.selectMedicaid();
            await appointmentPage.enterVisitDate('24/04/2026');
            await appointmentPage.clickBookAppointment();
        });

        await test.step('Verify confirmation shows Medicaid program', async () => {
            await confirmationPage.expectProgram('Medicaid');
        });
    });
});
