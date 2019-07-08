const config = require('./wdio.conf.appium').config;

// ============
// Specs
// ============


// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.host =  '127.0.0.1';
config.port = 4723;
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone X',
        platformName: 'iOS',
        platformVersion: '12.1',
        browserName: 'safari',
        newCommandTimeout: 240,
        metadata: {
            browser: {
                name: 'Safari',
                version: 'Unknown'
            },
            device: 'iPhone X',
            platform: {
                name: 'IOS',
                version: '12.1'
            }
        }
    },
];

exports.config = config;