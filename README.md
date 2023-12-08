# @jimmymos/dom-helper

> Give vanilla Javascript equivalent for Jquery popular functions

## Does an element have a CSS class applied to it ?
```js
// jQuery $('#el').hasClass('className')
hasClass(document.querySelector('#el'), 'className')
```

## Add a CSS class to an element
```js
// jQuery $('#el').addClass('className')
addClass(document.querySelector('#el'), 'className')
```

## Remove a CSS class from an element
```js
// jQuery $('#el').removeClass('className')
removeClass(document.querySelector('#el'), 'className')
```

## Get the list of parents elements
```js
// jQuery $('#el').parents()
getParentsList(document.querySelector('#el'))
```

## Get the first parent matching a selector
```js
// jQuery $('#el').parents('.className')
findParent(document.querySelector('#el'), '.className')
```