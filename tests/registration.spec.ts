import { test } from '@playwright/test';
import { setTimeout } from 'timers/promises';

test('Registration - 1', async ({ }, testInfo) => {
  console.log(` START: ${testInfo.title}`);

  // Access the workerIndex from testInfo
  const workerIndex = testInfo.workerIndex;
  // Print the workerIndex to the console
  console.log(`Running on Worker Index: ${workerIndex}`);

  await setTimeout(4000);
  console.log(` END: ${testInfo.title}`);
});

test('Registration - 2', async ({ }, testInfo) => {
  console.log(` START: ${testInfo.title}`);

  // Access the workerIndex from testInfo
  const workerIndex = testInfo.workerIndex;
  // Print the workerIndex to the console
  console.log(`Running on Worker Index: ${workerIndex}`);

  await setTimeout(4000);
  console.log(` END: ${testInfo.title}`);
});

test('Registration - 3', async ({ }, testInfo) => {
  console.log(` START: ${testInfo.title}`);

  // Access the workerIndex from testInfo
  const workerIndex = testInfo.workerIndex;
  // Print the workerIndex to the console
  console.log(`Running on Worker Index: ${workerIndex}`);

  await setTimeout(4000);
  console.log(` END: ${testInfo.title}`);
});
