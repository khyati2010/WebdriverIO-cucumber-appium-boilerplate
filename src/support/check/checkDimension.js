/**
 * Check the dimensions of the given element
 * @param  {String}   elem         Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or
 *                                 not
 * @param  {String}   expectedSize Expected size
 * @param  {String}   dimension    Dimension to check (broad or tall)
 */
module.exports = (elem, falseCase, expectedSize, dimension) => {
    /**
     * The size of the given element
     * @type {Object}
     */
    const elementSize = $(elem).getSize(dimension);

    /**
     * Parsed size to check for
     * @type {Int}
     */
    const intExpectedSize = parseInt(expectedSize, 10);

    if (falseCase) {
        expect(elementSize).to.not
            .equal(
                intExpectedSize,
                `Element "${elem}" should not have a ${dimension} of ` +
                `${intExpectedSize}px`
            );
    } else {
        expect(elementSize).to
            .equal(
                intExpectedSize,
                `Element "${elem}" should have a ${dimension} of ` +
                `${intExpectedSize}px, but is ${elementSize}px`
            );
    }
};
