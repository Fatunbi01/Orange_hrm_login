// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// module.exports = {
//   reporter: 'allure-mocha',
//   reporterOptions: {
//     reportDir: 'cypress/reports/allure-results',
//     overwrite: false,
//     html: false,
//     json: true
//   }
// }
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
//   reporter: 'allure-mocha',
//   reporterOptions: {
//     reportDir: 'cypress/reports/allure-results',
//     overwrite: false,
//     html: false,
//     json: true
//   }
// });

// const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       allureWriter(on, config);
//       return config;
//     },
//     env: {
//       allure: true,
//       allureAddVideoOnPass: true,
//       allureAttachCommands: true
//     }
//   },
//   reporter: 'mocha-allure-reporter',
//   reporterOptions: {
//     resultsDir: 'cypress/reports/allure-results'
//   }
// });
const { defineConfig } = require("cypress");
const mochawesome = require('mochawesome');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cypress/reports/'
  }
});