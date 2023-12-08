/**
 * Get the list of parents elements.
 *
 * @param {HTMLElement} el - HTML element.
 * @returns {HTMLElement[]} Array of parents elements.
 */
export function getParentsList(el) {
    var parentSelector = document.querySelector('html');
    var parents        = [];
    var p              = el.parentNode;
    while (p !== parentSelector) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    parents.push(parentSelector);
    return parents;
}

/**
 * Get the first parent matching a selector.
 *
 * @param {HTMLElement} el       - HTML element.
 * @param {string     } selector - CSS selector.
 * @returns {HTMLElement} First parent element matching the selector.
 */
export function findParent(el, selector){
    var result      = false;
    var parents     = getParentsList(el);
    var elemsToTest = document.querySelectorAll(selector);
    //
    parents.forEach((parent) => {
        for (var e of elemsToTest) {
            if(parent === e){
                result = parent;
                break;
            }
        }
    })
    return result;
}