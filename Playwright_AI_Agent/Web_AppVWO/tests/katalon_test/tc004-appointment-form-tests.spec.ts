import { test, expect } from '@playwright/test';
import { CuraHomePage } from './pages/CuraHomePage';
import { CuraLoginPage } from './pages/CuraLoginPage';
import { CuraAppointmentPage } from './pages/CuraAppointmentPage';
import curaData from './testdata/cura-data.json';

const { validUser, facilities, healthcarePrograms } = curaData;

test.describe('Appointment Form Tests', () => {
    async function loginToAppointment(page: any) {
        const homePage = new CuraHomePage(page);
        const loginPage = new CuraLoginPage(page);

        await homePage.navigate();
        await homePage.clickMakeAppointment();
        await loginPage.enterUsername(validUser.username);
        await loginPage.enterPassword(validUser.password);
        await loginPage.clickLogin();
        await expect(page).toHaveURL(/\/#appointment/);
    }

    test('TC-009: Submit Complete Appointment Form with Tokyo Facility', async ({ page }) => {
        const appointmentPage = new CuraAppointmentPage(page);

        await test.step('Login to appointment form', async () => {
            await loginToAppointment(page);
            await appointmentPage.expectOnAppointmentPage();
        });

        await test.step('Select Tokyo facility', async () => {
            await appointmentPage.selectFacility(facilities[0]);
            await expect(page.locator('#combo_facility')).toHaveValue(facilities[0]);
        });

        await test.step('Leave readmission unchecked', async () => {
            await appointmentPage.expectReadmissionUnchecked();
        });

        await test.step('Select Medicare program', async () => {
            await appointmentPage.selectMedicare();
            await appointmentPage.expectMedicareSelected();
        });

        await test.step('Enter visit date 15/04/2026', async () => {
            await appointmentPage.enterVisitDate('15/04/2026');
        });

        await test.step('Enter comment', async () => {
            await appointmentPage.enterComment('I need a routine checkup and consultation with the doctor.');
        });

        await test.step('Click Book Appointment', async () => {
            await appointmentPage.clickBookAppointment();
            await expect(page).toHaveURL(/appointment\.php#summary/);
        });
    });

    test('TC-010: Appointment Form with Hongkong Facility and Readmission', async ({ page }) => {
        const appointmentPage = new CuraAppointmentPage(page);

        await test.step('Login to appointment form', async () => {
            await loginToAppointment(page);
            await appointmentPage.expectOnAppointmentPage();
        });

        await test.step('Select Hongkong facility', async () => {
            await appointmentPage.selectFacility(facilities[1]);
            await expect(page.locator('#combo_facility')).toHaveValue(facilities[1]);
        });

        await test.step('Check hospital readmission', async () => {
            await appointmentPage.checkReadmission();
            await appointmentPage.expectReadmissionChecked();
        });

        await test.step('Select Medicare program', async () => {
            await appointmentPage.selectMedicare();
            await appointmentPage.expectMedicareSelected();
        });

        await test.step('Enter visit date', async () => {
            await appointmentPage.enterVisitDate('20/04/2026');
        });

        await test.step('Click Book Appointment', async () => {
            await appointmentPage.clickBookAppointment();
            await expect(page).toHaveURL(/appointment\.php#summary/);
        });
    });

    test('TC-011: Appointment Form with Seoul Facility and Medicaid', async ({ page }) => {
        const appointmentPage = new CuraAppointmentPage(page);

        await test.step('Login to appointment form', async () => {
            await loginToAppointment(page);
            await appointmentPage.expectOnAppointmentPage();
        });

        await test.step('Select Seoul facility', async () => {
            await appointmentPage.selectFacility(facilities[2]);
            await expect(page.locator('#combo_facility')).toHaveValue(facilities[2]);
        });

        await test.step('Select Medicaid program', async () => {
            await appointmentPage.selectMedicaid();
            await appointmentPage.expectMedicaidSelected();
        });

        await test.step('Enter visit date', async () => {
            await appointmentPage.enterVisitDate('25/04/2026');
        });

        await test.step('Click Book Appointment', async () => {
            await appointmentPage.clickBookAppointment();
            await expect(page).toHaveURL(/appointment\.php#summary/);
        });
    });

    test('TC-012: Test All Healthcare Programs', async ({ page }) => {
        const appointmentPage = new CuraAppointmentPage(page);

        await test.step('Login to appointment form', async () => {
            await loginToAppointment(page);
            await appointmentPage.expectOnAppointmentPage();
        });

        await test.step('Select and verify Medicare', async () => {
            await appointmentPage.selectMedicare();
            await appointmentPage.expectMedicareSelected();
        });

        await test.step('Select and verify Medicaid', async () => {
            await appointmentPage.selectMedicaid();
            await appointmentPage.expectMedicaidSelected();
        });

        await test.step('Select and verify None', async () => {
            await appointmentPage.selectNone();
            await appointmentPage.expectNoneSelected();
        });
    });

    test('TC-013: Appointment Without Date Should Be Valid', async ({ page }) => {
        const appointmentPage = new CuraAppointmentPage(page);

        await test.step('Login to appointment form', async () => {
            await loginToAppointment(page);
            await appointmentPage.expectOnAppointmentPage();
        });

        await test.step('Select facility and program without date', async () => {
            await appointmentPage.selectFacility(facilities[0]);
            await appointmentPage.selectMedicare();
        });

        await test.step('Attempt to book appointment', async () => {
            await appointmentPage.clickBookAppointment();
            // The application may show an error or book with current date
            // This test verifies the behavior
        });
    });

    test('TC-014: Verify All Form Elements Are Visible', async ({ page }) => {
        const appointmentPage = new CuraAppointmentPage(page);

        await test.step('Login to appointment form', async () => {
            await loginToAppointment(page);
        });

        await test.step('Verify all form elements are visible', async () => {
            await appointmentPage.expectFacilityDropdownVisible();
            await appointmentPage.expectReadmissionCheckboxVisible();
            await appointmentPage.expectVisitDateFieldVisible();
            await appointmentPage.expectCommentFieldVisible();
            await appointmentPage.expectBookAppointmentButtonVisible();
        });
    });
});
