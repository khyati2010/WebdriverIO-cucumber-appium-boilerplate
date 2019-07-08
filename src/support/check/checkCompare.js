/**
 * Check if the given value is less than the actual
 * @param  {any}   actual   actual value
 * @param  {String}   falseCase     Whether to check if the content less than the
 *                                  given value or not
 * @param  {String}   expected  The value to validate against
 */
function checkLessThan(actual, falseCase, expected){
    if (falseCase) {
        expect(actual).to.not.be.lessThan(expected);
    } else {
        expect(actual).to.be.lessThan(expected);
    }
};

/**
 * Check if the given value is greater than the actual
 * @param  {any}   actual   actual value
 * @param  {String}   falseCase     Whether to check if the content greater than the
 *                                  given value or not
 * @param  {String}   expected  The value to validate against
 */
function checkGreaterThan(actual, falseCase, expected){
    if (falseCase) {
        expect(actual).to.not.be.greaterThan(expected);
    } else {
        expect(actual).to.be.greaterThan(expected);
    }
};

module.exports = {checkGreaterThan, checkLessThan}