export function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

export function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

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