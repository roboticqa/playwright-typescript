import { defineConfig, devices } from "@playwright/test"

export default defineConfig({

  //Look for test files in the "tests" directory, relative to this configuration file.
  testDir:'tests',

   // Run all tests in parallel.
  fullyParallel:true,

  // workers
  //workers:27

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

})