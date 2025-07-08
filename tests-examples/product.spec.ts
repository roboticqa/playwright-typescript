import { test } from '@playwright/test';
import { setTimeout } from 'timers/promises';

test('Product - 1', async ({ }, testInfo) => {
  console.log(` START: ${testInfo.title}`);
  await setTimeout(4000);
  console.log(` END: ${testInfo.title}`);
});

test('Product - 2', async ({ },testInfo) => {
 console.log(` START: ${testInfo.title}`);
 await setTimeout(4000);
 console.log(` END: ${testInfo.title}`);
});

test('Product - 3', async ({ },testInfo) => {
 console.log(` START: ${testInfo.title}`);
 await setTimeout(4000);
 console.log(` END: ${testInfo.title}`);
});
