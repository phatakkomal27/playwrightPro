import { test, expect } from '@playwright/test';
import { CuraHomePage } from './pages/CuraHomePage';

test.describe('Homepage and Navigation Tests', () => {
    test('TC-002: Verify CURA Healthcare Homepage Loads', async ({ page }) => {
        const homePage = new CuraHomePage(page);

        await test.step('Navigate to https://katalon-demo-cura.herokuapp.com/', async () => {
            await homePage.navigate();
            await homePage.expectPageLoaded();
        });

        await test.step('Verify homepage elements', async () => {
            await homePage.expectMakeAppointmentButtonVisible();
            await homePage.expectBrandHeadingVisible();
            await homePage.expectToggleNavigationVisible();
        });
    });

    test('TC-003: Make Appointment Button Navigation', async ({ page }) => {
        const homePage = new CuraHomePage(page);

        await test.step('Navigate to CURA Healthcare homepage', async () => {
            await homePage.navigate();
            await homePage.expectPageLoaded();
        });

        await test.step('Click on Make Appointment button', async () => {
            await homePage.clickMakeAppointment();
            await expect(page).toHaveURL(/profile\.php#login/);
            await expect(page.locator('#txt-username')).toBeVisible();
            await expect(page.locator('#txt-password')).toBeVisible();
            await expect(page.locator('#btn-login')).toBeVisible();
        });
    });

    test('TC-004: Homepage Navigation Menu Verification', async ({ page }) => {
        const homePage = new CuraHomePage(page);

        await test.step('Navigate to homepage', async () => {
            await homePage.navigate();
            await homePage.expectPageLoaded();
        });

        await test.step('Click hamburger menu and verify sidebar', async () => {
            await homePage.clickToggleNavigation();
            await homePage.expectSidebarMenuVisible();
            await homePage.expectSidebarMenuItems();
        });

        await test.step('Click Home link from sidebar', async () => {
            await homePage.clickSidebarHome();
            await expect(page).toHaveURL(/katalon-demo-cura\.herokuapp\.com\/$/);
        });
    });
});
