const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      module.exports = (on, config) => {
        on('before:browser:launch', (browser = {}, launchOptions) => {
          if (browser.name === 'electron') {
            launchOptions.args.push('--lang=fr');
            return launchOptions;
          }
        });
      };

    },
  },
});


// module.exports = (on, config) => {
//   on('before:browser:launch', (browser = {}, launchOptions) => {
//     if (browser.name === 'electron') {
//       launchOptions.args.push('--lang=fr');
//       return launchOptions;
//     }
//   });
// };