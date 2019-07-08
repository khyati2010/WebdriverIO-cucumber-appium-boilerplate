/**
 * Scroll the page to the given element
 * @param  {number}   time time to wait
 * @param  {string}   unit unit of time  milliseconds|seconds|minuts
 */
function wait(time, unit){
    let milliseconds = 0
    switch(unit){
        case 'milliseconds':
            milliseconds = time;
            break;
        case 'seconds':
            milliseconds = time * 1000;
            break;
        case 'minuts':
            milliseconds = time * 1000 * 60;
            break;
    }

const currTime = new Date().getTime();
while(new Date().getTime() < currTime+ milliseconds) {}
}

/**
 * Scroll the page to the given element
 * @param  {string}   innerModule
 * @param  {string}   position 
 * @param  {string}   outerModule
 */
function checkPositionInModule(innerModule, position, outerModule){
    let outerModuleCord = { x: 0, y: 0 };
    let outerModuleSize = { width: 0, height: 0 };
    let innerModuleCord = { x: 0, y: 0 };
    let innerModuleSize = { width: 0, height: 0 };
   
    if(outerModule == 'site' || outerModule == 'page' ){
        outerModuleCord = { x: 0, y: 0 }
    }else{
        outerModuleCord = browser.getLocation(outerModule);
        outerModuleSize = browser.getElementSize(outerModule);
    }

    innerModuleCord = browser.getLocation(innerModule);
    innerModuleSize = browser.getElementSize(innerModule);
    
    switch (position){
        case 'top':
            expect((innerModuleCord.y - outerModuleCord.y)).to.be.most(100);
            break;

        case 'bottom':
            expect((outerModuleCord.y + outerModuleSize.height) - (innerModuleCord.y + innerModuleSize.height)).to.be.most(100)
            break;

        case 'right':
            expect((outerModuleCord.x + outerModuleSize.width) - (innerModuleCord.x + innerModuleSize.width) ).to.be.most(100)
            break;

        case 'left':
            expect(innerModuleCord.x - outerModuleCord.x).to.be.most(100);
            break
    }
}


/**
 * @param {string} listOfElements x path to list of item
 * @param {string} falseCase x path to list of item
 */
function checkItemInList(listOfElements, falseCase , itemsToCheck) {
    let expectedList = $$(listOfElements).map( ele => ele.getText());
        itemsToCheck.split(',').forEach( (item) => {
            if (falseCase) {
                expect(expectedList).to.be.an('array').that.not.include(item);
            }else{
                expect(expectedList).to.be.an('array').that.include(item);
            }
        })
}

/**
 * @param {string} urlpath
 * @param {string} command
 * @description this method will halt script and wait for url to change.
 */
function waitForURLPath(cmnd, path) {
    let command = (cmnd == 'endswith') ? 'endsWith' : 'includes'
    browser.waitUntil(() => {
        return browser.getUrl()[command](path)
      }, 5000, 'waited for url to have "'+ path + '" but found '+ browser.getUrl());
}

/**
 * @param {string} urlpath
 * @description this method will halt script and wait for url to change.
 */
function waitForURL(falseCase, expectedUrl) {
    browser.waitUntil(() => {
        if (falseCase) {
            return browser.getUrl() != expectedUrl
        }else{
            return browser.getUrl() == expectedUrl
        }
      }, 5000, 'expected url '+falseCase+' to be '+ expectedUrl + ' but found '+ browser.getUrl());
}

module.exports = {wait, waitForURL, waitForURLPath, checkPositionInModule, checkItemInList};
