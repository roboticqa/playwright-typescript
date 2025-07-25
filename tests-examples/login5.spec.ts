import { test } from '@playwright/test';
import { setTimeout } from 'timers/promises';

test('Login - 1', async ({ }, testInfo) => {
  console.log(` START:  ${testInfo.title}`);

  // Access the workerIndex from testInfo
  const workerIndex = testInfo.workerIndex;
  // Print the workerIndex to the console
  console.log(`Running on Worker Index: ${workerIndex}`);

  await setTimeout(4000);
  console.log(` END: ${testInfo.title}`);
});

test('Login - 2', async ({ }, testInfo) => {
  console.log(` START: ${testInfo.title}`);

  // Access the workerIndex from testInfo
  const workerIndex = testInfo.workerIndex;
  // Print the workerIndex to the console
  console.log(`Running on Worker Index: ${workerIndex}`);

  await setTimeout(4000);
  console.log(` END: ${testInfo.title}`);
});

test('Login - 3', async ({ }, testInfo) => {
  console.log(` SSTART: ${testInfo.title}`);

  // Access the workerIndex from testInfo
  const workerIndex = testInfo.workerIndex;
  // Print the workerIndex to the console
  console.log(`Running on Worker Index: ${workerIndex}`);

  await setTimeout(4000);
  console.log(` END: ${testInfo.title}`);
});
