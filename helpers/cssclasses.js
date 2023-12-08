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