const { Before, BeforeAll, After } = require('cucumber');
import GraphqlHelper from '../helper/graphql.helper'

let tagsToRun = [];
let currentFeature = '';
let checkTagsToRun = false;


BeforeAll(function() {
    console.log('Test execution started......', new Date());
    //browser.fullscreenWindow();
})

Before(function(scenario){
    
    let feature = scenario.sourceLocation.uri.split('features/')[1];
    if(currentFeature != feature){
        browser.config['CHECK_SAIL_THRU_POPUP'] = true;
        browser.config['COOKIE_CONSENT'] = true;
        currentFeature = feature;
        if(currentFeature == 'home.feature'){
            tagsToRun = new GraphqlHelper().getHomepagePageModules();
            checkTagsToRun = true;
        }else{
            checkTagsToRun = false;
        }
    }
    if(checkTagsToRun){
        let enable = scenario.pickle.tags.find((tag) => {
            return tagsToRun.includes(tag.name);
        })
        if (enable == undefined){
            return 'skipped';
        }
    }
});

After(function(scenario){
    if(scenario.result.status == 'failed'){
        // // Attach a screenshot if scenario failed
        // cucumberJson.attach(browser.saveScreenshot(`${browser.config['screenshotPath']}/${scenario.pickle.name}` + new Date().getTime() + '.png'), 'image/png');
    }
})