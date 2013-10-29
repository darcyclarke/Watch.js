#jQuery Watch Plugin
 
This plugin lets you listen for when a CSS property, or properties, changes on element. It utilizes `Mutation Observers` or the `DOMAttrModified` / `propertychange` events, when available, and fallsback to polling utilizing `setInterval()`.

Original blog post can be found [here](http://darcyclarke.me/development/detect-attribute-changes-with-jquery/)

### Example Use

More examples can be found [here](http://darcyclarke.me/dev/watch/)

```javascript

// Watch for width or height changes and log values
$('div').watch('width height', function(){
	console.log(this.style.width, this.style.height);
});

// Animated div
$('div').animate({width:'100px',height:'200px'}, 500);
````

## License
Copyright (c) 2013 Darcy Clarke  
Dual licensed under the MIT and GPL licenses.  
