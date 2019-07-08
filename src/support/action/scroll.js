/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
function scroll(selector ,xOffset = 0, yOffset = 0 )  {
    if(browser.isMobile){
        console.log('outer', selector);
        browser.execute(function(qselector){
            if(qselector.startsWith('.//')){
                $x(qselector)[0].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                
                });
            }else{
                document.querySelector(qselector).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                
                });
            }
        },selector);
    }else{
        browser.scroll(selector, xOffset, yOffset);
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
        browser.scroll(xOffset, yOffset);
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
        browser.scroll(xOffset, (0-yOffset));
    }
    
}

module.exports = {scroll, scrollUp, scrollDown};