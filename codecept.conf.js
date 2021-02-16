exports.config = {
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'http://dokan-pro.test',
            show: false,
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
        I: './steps_file.js',
        product: './pages/product.js',
        helpers: './pages/helpers.js',
        register_locator: './pages/register_locator.js'
    },
    mocha: {
        reporterOptions: {
            mochaFile: 'output/result.xml'
        }
    },
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/steps.js']
    },
    plugins: {
        screenshotOnFail: {
            enabled: false
        },
        retryFailedStep: {
            enabled: true
        },
        multiple: {
            grep: '@accounts'
        },
        allure: {
            enabled: 'true'
        }
    },
    tests: './*_test.js',
    name: 'codecept_puppetiers'
}