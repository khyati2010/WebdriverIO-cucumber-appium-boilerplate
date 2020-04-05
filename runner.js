const execSync = require('child_process').execSync;
const env = Object.create(process.env);

const _d = new Date();
env.TEST_START_TIME = `${_d.getDate()}_${_d.getMonth() + 1}_${_d.getFullYear()}_${_d.getHours()}hh_${_d.getMinutes()}mm_${_d.getSeconds()}ss`;
env.TEST_TAG = process.argv[3];
env.TEST_ENV = process.argv[4];
env.JOB_TRIGGERED = process.argv[5] === 'true';
async function execute(){
if (env.JOB_TRIGGERED) {
    console.log('This job is triggered from another job');
    console.log('wait for 60 seconds here...');
    await new Promise(resolve => setTimeout(resolve, 60000));
} 
console.log('Used env variables: ' + JSON.stringify(env));
console.log('running config file', process.argv[2]);
console.log(`Run command: wdio ${process.argv[2]}`);
execSync(`wdio ${process.argv[2]}`, { env: env, stdio: 'inherit' });
}

execute();