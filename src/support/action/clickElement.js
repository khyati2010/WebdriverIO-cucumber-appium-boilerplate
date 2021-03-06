import checkIfElementExists from '../lib/checkIfElementExists';
import clickElementWithJS from './clickElementWithJS'

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, element) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const elem = (type === 'link') ? `=${element}` : element;

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

    checkIfElementExists(elem);

    try {
       $(elem)[method]();
    } catch (error) {
        console.log('an error occurred: ', error.message);
        console.log('trying with javascript click');
        clickElementWithJS(action, type, element);
        
    }
    
};
