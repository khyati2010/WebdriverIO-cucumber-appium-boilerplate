/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
function scroll(selector ,xOffset = 0, yOffset = -80 )  {
    if(browser.isMobile){
        // browser.execute(function(qselector){
        //     if(qselector.includes('.//')){
        //         $x(qselector)[0].scrollIntoView({
        //             behavior: 'smooth',
        //             block: 'center',
        //             inline: 'center'
                
        //         });
        //     }else{
        //         document.querySelector(qselector).scrollIntoView({
        //             behavior: 'smooth',
        //             block: 'center',
        //             inline: 'center'
                
        //         });
        //     }
        // },selector);
        $(selector).scrollIntoView(xOffset, yOffset);
    }else{
        $(selector).scrollIntoView(xOffset, yOffset);
    }  
};

/**
 * Scroll up on the page by given offset
 * @param  {Number} xOffset Offset for x axis
 * @param  {Number} yOffset Offset for y axis
 */
function scrollUp(xOffset = 0, yOffset = 500)  {
    if(browser.isMobile){
        browser.touchAction([
            {action: 'press', x: (browser.getViewportSize('width')/2), y: (browser.getViewportSize('height')/2)},
            { action: 'moveTo', x: xOffset, y: (yOffset) },
            'release']);
    }else{
        browser.execute(function(xOffset, yOffset){
            window.scroll(xOffset, yOffset)
        }, xOffset, (0-yOffset));
    }
}

/**
 * Scroll up on the page by given offset
 * @param  {Number} xOffset Offset for x axis
 * @param  {Number} yOffset Offset for y axis
 */
function scrollDown(xOffset = 0, yOffset = 500)  {
    if(browser.isMobile){
        browser.touchAction([
            {action: 'press', x: (browser.getViewportSize('width')/2), y: (browser.getViewportSize('height')/2)},
            { action: 'moveTo', x: xOffset, y: (0- yOffset) },
            'release']);
    }else{
        browser.execute(function(xOffset, yOffset){
            window.scroll(xOffset, yOffset)
        }, xOffset, yOffset);
    }
    
}
/**
 * Scroll the page to the given element untill its visible
 * @param  {String}   selector Element selector
 */
function scrollUntilVisible(selector, xOffset = 0, yOffset = -80){
    browser.waitUntil(() => {
        $(selector).scrollIntoView({behavior: 'auto',block: 'center',inline: 'start'});
        return $(selector).isDisplayed();
      }, 20000, `expected ${selector} to be visible after 5s`);
}

module.exports = {scroll, scrollUp, scrollDown, scrollUntilVisible};