import { Page } from 'puppeteer';

import { GetSingedIn } from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sign = (page: Page, getSingedIn: GetSingedIn, version?: string) => async (): Promise<void> => {
  await page.bringToFront();
  if (!(await getSingedIn())) {
    throw new Error("You haven't signed in yet");
  }
  await page.reload();

  const button = await page.waitForSelector('button.btn-primary');
  await button.click();

  const secondBtn = await page.waitForSelector('button.btn-primary');
  await secondBtn.click();
};
