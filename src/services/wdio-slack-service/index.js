const {readFile, writeFile, deleteFile} = require('../../helper/fs-util');
const { IncomingWebhook } = require('@slack/webhook');

module.exports = class SlackService {
  constructor (config) {
    if(config){
      this.slack_url = config.slack_url;
      this.environment = config.environment;
      this.tag = config.tag;
      this.channel = config.channel;
    }
    this.slackHook = new IncomingWebhook(this.slack_url);
    

    this.SLACK_RESULT_SET = {
      duration: 0,
      title: '',
      start: '',
      end:'',
      platform_details: '',
      features: {
        passed: 0,
        failed: 0,
        skipped: 0
      },
      scenarios:{
        passed: 0,
        failed: 0,
        skipped: 0
      }
    };
    
    process.on(':featureEnd', (feature) => this.addFeatureData(feature));
  }

  addFeatureData(feature) {
    let resultset = JSON.parse(readFile('./reports/slack_report.json'));
    if(feature.state == 'passed')
      resultset.features.passed += 1;
    else if(feature.state == 'failed')
      resultset.features.failed += 1;
    else
      resultset.features.skipped += 1;

      resultset.scenarios.passed += feature.passed;
      resultset.scenarios.failed += feature.failed;
      resultset.scenarios.skipped += feature.skipped;
      writeFile('./reports/slack_report.json', JSON.stringify(resultset), 'utf8');
    
  }

  onPrepare (config) {
    
    this.SLACK_RESULT_SET.title = config.title ? config.title : 'Automation Execution Notification';
    this.SLACK_RESULT_SET.start = new Date().toISOString();
    writeFile('./reports/slack_report.json', JSON.stringify(this.SLACK_RESULT_SET), 'utf8');
    
  }
  
  async onComplete() {
    this.SLACK_RESULT_SET = JSON.parse(readFile('./reports/slack_report.json'));
    deleteFile('./reports/slack_report.json');
    this.SLACK_RESULT_SET.end = new Date().toISOString();
    var payload = this.preparePayload();
    await this.slackHook.send(payload);
  }

  preparePayload(){
    let payload = {
      "blocks" : [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Furthermore Automated Test Report*"
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `*Environment:* <${this.environment}> \t *Tags: * ${this.tag}`
          }
        },
          {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*<http://automation.equinoxfitness.com/ui/#furthermore/launches/all?page.page=1&page.size=50|Detailed report at - Report Portal >*"
          }
        }
       ],
       "attachments" : [
        {
          "color" : "#4899f4",
          "fields" : [
            {
              "title":"*Features*",
              "value": `*Passed :* ${this.SLACK_RESULT_SET.features.passed} \t *Failed :* ${this.SLACK_RESULT_SET.features.failed} \t *Skipped :* ${this.SLACK_RESULT_SET.features.skipped}`,
              "short":false
            },
            {
              "title":"*Scenarios*",
              "value": `*Passed :* ${this.SLACK_RESULT_SET.scenarios.passed} \t *Failed :* ${this.SLACK_RESULT_SET.scenarios.failed} \t *Skipped :* ${this.SLACK_RESULT_SET.scenarios.skipped}`,
              "short":false
            }
          ]
        }
       ]
    }
    if(this.channel){
      payload['channel'] = this.channel;
    }
    return payload;
  }
}
