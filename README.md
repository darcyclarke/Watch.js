# Watch.js
 
This plugin lets you listen for when a CSS property, or properties, changes on element. It utilizes `Mutation Observers` to mimic the `DOMAttrModified` (Mutation Events API) and `propertychange` (Internet Explorer) events.

There is both a jQuery-specific plugin as well as a library agnostic version of this plugin available. 

#### Bower Usage
```
bower install darcyclarke/watch.js --save
```

#### Default Usage
```js
// Watch for width or height changes and log values
let $div = document.querySelectorAll('div')
watch($div, 'width height', function() {
  console.log(this.style.width, this.style.height)
})
```

#### jQuery Usage
```js
// Watch for width or height changes and log values
$('div').watch('width height', function() {
  console.log(this.style.width, this.style.height)
})
```

#### Dependancies 
This library utilizes the Polymer team's [Mutation Observers](https://github.com/polymer/MutationObservers) and [WeakMap](https://github.com/Polymer/WeakMap) Polyfills. They are included by default which bulks the library a bit. Depending on future usage, I may choose to references these as bower dependancies. 
