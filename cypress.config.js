const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e5kcrx',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
