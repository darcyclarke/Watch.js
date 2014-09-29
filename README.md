#Watch.js
 
This plugin lets you listen for when a CSS property, or properties, changes on element. It utilizes `Mutation Observers` to mimic the `DOMAttrModified` (Mutation Events API) and `propertychange` (Internet Explorer) events.

There is both a jQuery-specific plugin as well as a library agnostic version of this plugin available. 

Original blog post can be found [here](http://darcyclarke.me/development/detect-attribute-changes-with-jquery/)

#### Bower Usage
```
bower install darcyclarke/watch.js --save
````

#### Default Usage
```javascript

// Watch for width or height changes and log values
var div = document.querySelectorAll('div');
watch( div, 'width height', function(){
	console.log(this.style.width, this.style.height);
});
````

#### jQuery Usage
```javascript

// Watch for width or height changes and log values
$('div').watch('width height', function(){
	console.log(this.style.width, this.style.height);
});
````

#### Dependancies 
This library utilizes the Polymer team's [Mutation Observers](https://github.com/polymer/MutationObservers) and [WeakMap](https://github.com/Polymer/WeakMap) Polyfills. They are included by default which bulks the library a bit. Depending on future usage, I may choose to references these as bower dependancies. 

#### Original Release & Examples

[http://darcyclarke.me/dev/watch/](http://darcyclarke.me/dev/watch/)


## License
Copyright (c) 2013 Darcy Clarke  
Dual licensed under the MIT and GPL licenses.  
