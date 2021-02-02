"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('@codeceptjs/configure'),
    setHeadlessWhen = _require.setHeadlessWhen; // turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run


setHeadlessWhen(process.env.HEADLESS);
exports.config = {
  tests: './*_test.js',
  //./tests./*_test.js
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://staging.appsero.com',
      show: true,
      windowSize: '1400x900',
      smartWait: 7000,
      waitForAction: 3000,
      keepCookies: true
    },
    MyHelper: {
      require: './myhelper_helper.js'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: _defineProperty({
    reporterOptions: {
      reportDir: 'output'
    }
  }, "reporterOptions", {
    mochaFile: 'output/result.xml'
  }),
  name: 'codecept_puppetiers',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
    multiple: {
      grep: '@accounts'
    },
    allure: {
      enabled: 'true'
    }
  }
};