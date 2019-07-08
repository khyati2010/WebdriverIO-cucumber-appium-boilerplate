/**
 * Check if the given  value is the same as the actual
 * @param  {any}   actual   actual value
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given value or not
 * @param  {String}   expected  The value to validate against
 */
module.exports = (actual, falseCase, expected) => {
    
    if (falseCase) {
        expect(actual).to.not.equal(expected);
    } else {
        expect(actual).to.equal(expected);
    }
};
