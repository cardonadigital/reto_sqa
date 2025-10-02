import { Page, FrameLocator, Locator, expect } from '@playwright/test';

type PageOrFrame = Page | FrameLocator;

export class HomePage {
  readonly sectionDatepicker: Locator;
  readonly inputDatepicker: Locator;
  readonly nextMonthBtn: Locator;
  readonly prevMonthBtn: Locator;
  readonly currentMonthLabel: Locator;

  constructor(private root: PageOrFrame) {
    this.sectionDatepicker = root.locator('xpath=//*[@id="sidebar"]/aside[2]/ul/li[6]/a');
    this.inputDatepicker = root.locator('#datepicker');
    this.nextMonthBtn = root.locator('.ui-icon-circle-triangle-e');
    this.prevMonthBtn = root.locator('.ui-icon-circle-triangle-w');
    this.currentMonthLabel = root.locator('.ui-datepicker-month');
  }

  getDateLocator(day: number): Locator {
    return this.root.locator(`[data-date="${day}"]`);
  }

  async openDatePicker(): Promise<void> {
    await this.inputDatepicker.click();
  }

  async selectDate(day: number): Promise<void> {
    await this.getDateLocator(day).click();
  }

  async goToNextMonth(): Promise<void> {
    await this.nextMonthBtn.click();
  }

  async goToPreviousMonth(): Promise<void> {
    await this.prevMonthBtn.click();
  }

  async getCurrentMonth(): Promise<string> {
    return await this.currentMonthLabel.innerText();
  }

  async assertSelectedDate(expectedDate: string): Promise<void> {
    await expect(this.inputDatepicker).toHaveValue(expectedDate);
  }
}
