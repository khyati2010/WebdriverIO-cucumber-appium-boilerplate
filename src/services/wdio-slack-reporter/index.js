const WDIOReporter = require('@wdio/reporter').default;

class SlackReporter extends WDIOReporter {
    constructor (options) {
      options = Object.assign(options);
      super(options);
    }

    onRunnerEnd (runner) {
      let feature = {
        state : 'passed',
        passed : 0,
        failed : 0,
        skipped : 0,
        platform_details : runner.sanitizedCapabilities
      }

      for (let suiteKey of Object.keys(this.suites)) {
        if(this.suites[suiteKey].type == 'scenario')
          { 
            const scenario = this.suites[suiteKey]
            if(scenario.tests.filter(test => test.state === 'failed').length)
            {
              feature.failed += 1;
              feature.state = 'failed';
              continue;
            }
            feature.passed += 1;
        }
      }
      process.emit(':featureEnd', feature);
    }

    
  //onTestSkip()
}
module.exports = SlackReporter;