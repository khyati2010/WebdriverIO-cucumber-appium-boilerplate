const config = require('./wdio.conf.appium').config;
const { spawnSync } = require('child_process');
const { resolve } = require('path');

// ============
// Specs
// ============


// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

const ANDROID_EMULATOR_PATH = '/Users/yogendra.porwal/Library/Android/sdk/tools/emulator';
const emulatorName = 'Nexus_5X_API_27';
const wipeData = false;

config.host =  '127.0.0.1';
config.port = 4723;
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'Nexus 5X API 27',
        platformName: 'Android',
        platformVersion: '8.1',
        browserName: 'chrome',
        UDID: 'emulator-5554',
        newCommandTimeout: 240,
        automationName: 'UiAutomator2',

        metadata: {
            browser: {
                name: 'chrome',
                version: 'unknown'
            },
            device: 'Nexus 5X API 27',
            platform: {
                name: 'ANDROID',
                version: '8.1'
            }
        }
    }
];
config.onPrepare = function onPrepare(config, capabilities) {
    //start android emulator
    let runOnEmulator = spawnSync(
        `${resolve(process.env.HOME, ANDROID_EMULATOR_PATH)}`,
        ['-avd', emulatorName, wipeData === true ? '-wipe-data' : '-no-snapshot'],
    );
    console.log(runOnEmulator.stdout.toString());
    process.exit(0);
}

exports.config = config;