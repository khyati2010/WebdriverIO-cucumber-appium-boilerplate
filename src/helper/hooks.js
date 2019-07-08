const { Before, BeforeAll, After } = require('cucumber');
import multipleCucumberHtmlReporter from 'wdio-multiple-cucumber-html-reporter';

import GraphqlHelper from '../helper/graphql.helper'

let tagsToRun = [];
let currentFeature = '';
let checkTagsToRun = false;


BeforeAll(function() {
    console.log('running before all')
})

Before(async function(scenario){
    
    let feature = scenario.sourceLocation.uri.split('features/')[1];
    if(currentFeature != feature){
        currentFeature = feature;
        if(currentFeature == 'home.feature'){
            tagsToRun = await new GraphqlHelper().getHomepagePageModules();
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
        multipleCucumberHtmlReporter.attach(browser.saveScreenshot('reports/errorShots/assertionError_' + new Date() + '.png'), 'image/png');
    }
})