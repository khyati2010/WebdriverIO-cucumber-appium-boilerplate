// const SlackReporter = require('./../src/services/wdio-slack-reporter')
// const SlackService = require('./../src/services/wdio-slack-service');

/* Env variable passed from CLI */
//Suite execution start time
// const currentDate = process.env.TEST_START_TIME;
// //cucumber tags that need to be run
// const tag = process.env.TEST_TAG;
// //Test environment
// const testEnv = process.env.TEST_ENV;
//report portal config
// const reportportal = require('wdio-reportportal-reporter');
// const RpService = require("wdio-reportportal-service");
// const conf = {
//   reportPortalClientConfig: {
//     token: '',
//     endpoint: '',
//     launch: `${tag.replace(/[@|\s]/g,'_')}_${testEnv.slice(0, -1)}_${currentDate}`,
//     project: '',
//     mode: 'DEFAULT',
//     debug: false,
//     description: ``,
//     tags: [...tag.split(' '), testEnv.slice(0, -1)],
//   },
//   reportSeleniumCommands: false,
//   autoAttachScreenshots: false,
//   seleniumCommandsLogLevel: 'debug',
//   screenshotsLogLevel: 'info',
//   parseTagsFromTestTitle: false,
// };



exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './src/features/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
        './src/features/login.feature'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    hostname: 'localhost',
    port: 4444,
    //path: '/',
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an
        // in-house Selenium grid with only 5 firefox instance available you can
        // make sure that not more than 5 instance gets started at a time.
        maxInstances: 3,
        //
        browserName: 'chrome',
        pageLoadStrategy: 'normal'
    },
    // {
    //     maxInstances: 3,
    //     //
    //     browserName: 'firefox'
    // }
],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',
    //
    //output directory for selenium and wdio logs
    //outputDir:`logs/${currentDate}`,
    //
    //path to save snap after error
    //screenshotPath: `reports/${this.currentDate}/json`,
    //
    coloredLogs: true,
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: `https://furthermore.equinox.com/`,
    //
    //graphql api url 
    // graphql_API_URL: ``,
    //
    //sail thru keys
    
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    //Default interval for all waitForXXX commands
    waitforInterval: 250,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services:   [
                    'selenium-standalone',
                //    [SlackService,
                //     {
                //         slack_url:'',
                //         environment: `https://furthermore.equinox.com`,
                //         tag: tag.replace(/[@|\s]/g,' '),
                //         //channel:'GNA2W8ZLH', //local: GNA2W8ZLH , furthermore: G0C5880DR

                //     }],
                //    [RpService, {}]
                ], 
    seleniumLogs: `logs/`,
    //Arguments passed down to selenium.start()
    seleniumArgs: {
        seleniumArgs: [ '-port', '4444']
    },
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: [
        //'dot',
        'spec',
        // ['cucumberjs-json',{
        //     jsonFolder:`reports/${currentDate}/json/`
        // }],
        // [reportportal, conf],
        // [SlackReporter,{}], 
    ],
    // ['allure', {
    //     outputDir: `./reports/allure-results/${new Date()}`,
    //     disableWebdriverStepsReporting: true,
    //     disableWebdriverScreenshotsReporting: true,
    // }]],
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./src/steps/steps.js'],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        requireModule: [['@babel/register', { ignore: ['node_modules'] }]],  // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        failAmbiguousDefinitions: true,
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @pending',           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
    
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
        // browser.timeouts("script", 120000);
        // browser.timeouts("page load", 120000);
        // browser.timeouts("implicit", 10000);
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs before a Cucumber feature
     * @param {Object} feature feature details
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     * Runs before a Cucumber scenario
     * @param {Object} scenario scenario details
     */
    // beforeScenario: function (uri, feature, scenario) {
    // },
    /**
     * Runs before a Cucumber step
     * @param {Object} step step details
     */
    // beforeStep: function (uri, feature, scenario, step) {
    // },
    /**
     * Runs after a Cucumber step
     * @param {Object} stepResult step result
     */
    afterStep: function (uri, feature, scenario, step, result) {
    //     if (result.status === 'failed') {
    //        let failureObject = {};
    //        failureObject.type = 'afterStep';
    //        failureObject.title = step.keyword + step.text;
    //        const screenShot = global.browser.takeScreenshot();
    //        let attachment = Buffer.from(screenShot, 'base64');
    //        reportportal.sendFileToTest(failureObject, 'error', "screnshot.png", attachment);
    //    }
     },
    /**
     * Runs after a Cucumber scenario
     * @param {Object} scenario scenario details
     */
    // afterScenario: function (uri, feature, scenario, result) {
    // },
    /**
     * Runs after a Cucumber feature
     * @param {Object} feature feature details
     */
    // afterFeature: function (uri, feature) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    /**
   * Gets executed after all workers got shut down and the process is about to exit.
   */
    onComplete: () => {
        // Generate the report when it all tests are done
        // generate({
        // // Required
        // // This part needs to be the same path where you store the JSON files
        // // default = '.tmp/json/'
        // jsonDir: `reports/${currentDate}/json/`,
        // reportPath: `reports/${currentDate}/html/`,
        // // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
        // });
    },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
