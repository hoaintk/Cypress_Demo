const { defineConfig } = require('cypress') // ← Bỏ dấu chấm

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/e2e/support/e2e.js' 
  }
})