#Watch.js
 
This plugin lets you listen for when a CSS property, or properties, changes on element. It utilizes `Mutation Observers` or the `DOMAttrModified` / `propertychange` events, when available, and fallsback to polling utilizing `setInterval()`.

There is both a jQuery-specific plugin as well as a library agnostic version of this plugin available. 

Original blog post can be found [here](http://darcyclarke.me/development/detect-attribute-changes-with-jquery/)

#### Bower Usage
```shell

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

#### Original Release & Examples

[http://darcyclarke.me/dev/watch/](http://darcyclarke.me/dev/watch/)


## License
Copyright (c) 2013 Darcy Clarke  
Dual licensed under the MIT and GPL licenses.  
