import { Given, When, Then } from '@cucumber/cucumber';
import { HomePage } from '../pages/homePage';
import { CustomWorld } from '../config/world';
import { expect } from '@playwright/test';


let homePage: HomePage;

Given('I open the JQuery Datepicker page', async function (this: CustomWorld) {
    await this.page.goto('https://jqueryui.com/datepicker/'); 
});

When('I go to the datepicker section', async function (this: CustomWorld) {
    const frame = this.page.frameLocator('.demo-frame');
    homePage = new HomePage(frame);
});

When('I open the datepicker input', async function () {
    await homePage.openDatePicker();
});

When('I select the date {int}', async function (day: number) {
    await homePage.selectDate(day);
});

When('I navigate to the next month', async function () {
    await homePage.goToNextMonth();
});

When('I navigate to the previous month', async function () {
    await homePage.goToPreviousMonth();
});

When('I type the following: {string}', async function (this: CustomWorld, text: string) {
  const frame = this.page.frameLocator('.demo-frame');
        const input = frame.locator('#datepicker');

  await input.click();
  await input.fill(text); 
});

Then(
    'the input should show {string}',
    async function (this: CustomWorld, expectedDate: string) {
        const frame = this.page.frameLocator('.demo-frame');
        const input = frame.locator('#datepicker');

        await expect(input).toHaveValue(expectedDate);
    }
);

Then(
  'the datepicker input should not allow manual typing',
  { timeout: 20000 }, 
  async function (this: CustomWorld) {
    const frame = this.page.frameLocator('.demo-frame');
    const input = frame.locator('#datepicker');

    await input.waitFor({ state: 'visible' });
    const value = await input.inputValue();
    console.log(`🔹 Current input value: "${value}"`);
    await expect(input).toHaveValue('');
    console.log('✅ Input is still empty, manual typing is not allowed.');
  }
);


