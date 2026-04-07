import { test, expect } from '@playwright/test';
import { CuraHomePage } from './pages/CuraHomePage';
import { CuraLoginPage } from './pages/CuraLoginPage';
import curaData from './testdata/cura-data.json';

const { validUser } = curaData;

test.describe('Login Page Tests', () => {
    async function navigateToLogin(page: any) {
        const homePage = new CuraHomePage(page);
        await homePage.navigate();
        await homePage.clickMakeAppointment();
    }

    test('TC-005: Login with Valid Credentials', async ({ page }) => {
        const loginPage = new CuraLoginPage(page);

        await test.step('Navigate to Make Appointment and reach login page', async () => {
            await navigateToLogin(page);
            await loginPage.expectOnLoginPage();
        });

        await test.step('Enter username John Doe', async () => {
            await loginPage.enterUsername(validUser.username);
            await expect(page.locator('#txt-username')).toHaveValue(validUser.username);
        });

        await test.step('Enter password ThisIsNotAPassword', async () => {
            await loginPage.enterPassword(validUser.password);
            await loginPage.expectPasswordFieldMasked();
        });

        await test.step('Click Login button', async () => {
            await loginPage.clickLogin();
            await expect(page).toHaveURL(/\/#appointment/);
            await expect(page.locator('#combo_facility')).toBeVisible();
        });
    });

    test('TC-006: Login Page UI Elements Visibility', async ({ page }) => {
        const loginPage = new CuraLoginPage(page);

        await test.step('Navigate to login page', async () => {
            await navigateToLogin(page);
            await loginPage.expectOnLoginPage();
        });

        await test.step('Check username field', async () => {
            await loginPage.expectUsernameFieldVisible();
        });

        await test.step('Check password field', async () => {
            await loginPage.expectPasswordFieldVisible();
        });

        await test.step('Verify login button', async () => {
            await loginPage.expectLoginButtonVisible();
        });

        await test.step('Verify password field is masked', async () => {
            await loginPage.expectPasswordFieldMasked();
        });
    });

    test('TC-007: Login with Invalid Credentials', async ({ page }) => {
        const loginPage = new CuraLoginPage(page);

        await test.step('Navigate to login page', async () => {
            await navigateToLogin(page);
            await loginPage.expectOnLoginPage();
        });

        await test.step('Enter invalid username and password', async () => {
            await loginPage.enterUsername('InvalidUser');
            await loginPage.enterPassword('WrongPassword');
        });

        await test.step('Click Login button and expect error', async () => {
            await loginPage.clickLogin();
            // Wait for error message to appear
            await expect(page.locator('.text-danger')).toBeVisible();
        });
    });

    test('TC-008: Login with Empty Fields', async ({ page }) => {
        const loginPage = new CuraLoginPage(page);

        await test.step('Navigate to login page', async () => {
            await navigateToLogin(page);
            await loginPage.expectOnLoginPage();
        });

        await test.step('Leave fields empty and click login', async () => {
            await loginPage.clickLogin();
            // Wait for error message
            await expect(page.locator('.text-danger')).toBeVisible();
        });
    });
});
