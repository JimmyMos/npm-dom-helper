# @jimmymos/dom-helper

> A lightweight utility library that replicates popular jQuery DOM functions using vanilla JavaScript.

This module provides simple, reusable helper functions for common DOM tasks—no need to include jQuery in your project!

## 📦 Installation

```bash
npm install @jimmymos/dom-helper
```

## 🚀 Usage

Import the functions you need:

```js
import { 
    hasClass, 
    addClass, 
    removeClass, 
    getParentsList, 
    findParent 
} from "@jimmymos/dom-helper"
```

## 🔧 API Reference

### Check if an element has a class
```js
// jQuery equivalent: $('#el').hasClass('className')
hasClass(document.querySelector('#el'), 'className');
```

### Add a CSS class to an element
```js
// jQuery equivalent: $('#el').addClass('className')
addClass(document.querySelector('#el'), 'className');
```

### Remove a CSS class from an element
```js
// jQuery equivalent: $('#el').removeClass('className')
removeClass(document.querySelector('#el'), 'className');
```

### Get all parent elements
```js
// jQuery equivalent: $('#el').parents()
getParentsList(document.querySelector('#el'));
```

### Find the first matching parent
```js
// jQuery equivalent: $('#el').parents('.className')
findParent(document.querySelector('#el'), '.className');
```