/**
 * Handle a modal
 * @param  {String}   action    Action to perform on the modal (accept, dismiss)
 * @param  {String}   modalType Type of modal (alertbox, confirmbox, prompt)
 */
module.exports = (action, modalType) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = `${action}Alert`;

    browser[command]();
};
