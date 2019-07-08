/**
 * Check if the given element is visible inside the current viewport
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the element is visible
 *                              within the current viewport or not
 */
module.exports = (element, falseCase) => {
    /**
     * The state of visibility of the given element inside the viewport
     * @type {Boolean}
     */
    browser.waitUntil(() => {
    if (falseCase) {
        return !browser.isVisibleWithinViewport(element);
    } else {
        return browser.isVisibleWithinViewport(element);
    }
    },5000, `Expected element "${element}" ${falseCase} to be inside the viewport`)
};
