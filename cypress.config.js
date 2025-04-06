const { defineConfig } = require('cypress') 

module.exports = defineConfig({
  e2e: {
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    supportFile: 'cypress/support/support.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
})

