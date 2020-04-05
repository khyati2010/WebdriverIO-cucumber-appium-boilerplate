/**
 * Select an option of a select element
 * @param  {String}   selectionType  Type of method to select by (name, value or
 *                                   text)
 * @param  {String}   selectionValue Value to select by
 * @param  {String}   selectElem     Element selector
 */
module.exports = (selectionType, selectionValue, selectElem) => {


    /**
     * check whether selecton type is correct 
     */
    if(/name|value|text/.test(selectionType)){
        throw new Error(`Unknown selection type "${selectionType}"`);
    }

    /**
     * Arguments to pass to the selection method
     * @type {Array}
     */
    const commandArguments = [
        selectionType,
        selectionValue,
    ];

    /**
     * The method to use for selecting the option
     * @type {String}
     */
    let command = 'selectByAttribute';


    //if select by text then remove selection typr from argument as it only needs text
    if(selectionType == 'text'){
        command = 'selectByVisibleText';
        commandArguments.splice(0, 1);
    }
    $(selectElem)[command](...commandArguments);
};
