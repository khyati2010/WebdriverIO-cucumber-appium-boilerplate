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
        deviceName: 'iPhone 11',
        platformName: 'iOS',
        platformVersion: '13.2',
        browserName: 'safari',
        newCommandTimeout: 240,
        metadata: {
            browser: {
                name: 'Safari',
                version: 'Unknown'
            },
            device: 'iPhone 11',
            platform: {
                name: 'IOS',
                version: '13.2'
            }
        }
    },
];

exports.config = config;