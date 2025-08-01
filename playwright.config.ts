import { defineConfig, devices } from "@playwright/test"

export default defineConfig({

  //Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // workers
  //workers:27

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  //retries : process.env.CI ? 2:2,

  // reporter
  reporter: 'html',

  use: {
    baseURL: 'https://google.com',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',


  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }, // Default size
        launchOptions: {
          args: ['--window-size=1920,1080'] // Set to your screen resolution
        }
      },
    },
    // {
    //   name: 'Mobile Chrome',
    //   use: {...devices['Pixel 5']}
    // }

  ]

  ,
  // webServer:{
  //   command:'npm run start',
  //   url: 'http://localhost:3000'

  // }
})