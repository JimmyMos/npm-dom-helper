/**
 * Check if an element have a CSS class applied to it.
 *
 * @param {HTMLElement} el        - HTML element.
 * @param {string     } className - CSS class name.
 * @returns {void}
 */
export function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

/**
 * Add a CSS class to an element.
 *
 * @param {HTMLElement} el        - HTML element.
 * @param {string     } className - CSS class name.
 * @returns {void}
 */
export function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

/**
 * Remove a CSS class from an element.
 *
 * @param {HTMLElement} el        - HTML element.
 * @param {string     } className - CSS class name.
 * @returns {void}
 */
export function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

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