/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
module.exports = (element, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isVisible = $(element).isDisplayed();

    

    if(Array.isArray(isVisible)){
        isVisible.forEach(flag => {
            validate(flag);
        });
    }else{
        validate(isVisible);
    }
    function validate(flag){
        if (falseCase) {
            expect(flag).to.not
                .equal(true, `Expected element "${element}" not to be visible`);
        } else {
            expect(flag).to
                .equal(true, `Expected element "${element}" to be visible`);
        }
    }
   
};
