const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'a49ntr',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/support.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    pageLoadTimeout: 100000,

    
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    }
  }
});
