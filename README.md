#jQuery Watch Plugin

@author Darcy Clarke (http://darcyclarke.me)
@version 2.0

Updated and maintained version of the code found here: http://darcyclarke.me/development/detect-attribute-changes-with-jquery/
 
##ADDS: 

- $.watch()
 
##USES:

- DOMAttrModified event
 
##FALLBACKS:

- propertychange event
- setTimeout() with delay 

##EXAMPLE:

Demo's / examples can be found here: http://darcyclarke.me/dev/watch/

```javascript
$('div').watch('width height', function(){
	console.log(this.style.width, this.style.height);
});

$('div').animate({width:'100px',height:'200px'}, 500);
```

##License

Copyright (c) 2012 Darcy Clarke <darcy@darcyclarke.me>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 