/**
 * jQuery Watch Plugin
 *
 * @author Darcy Clarke
 * @version 2.0
 *
 * Copyright (c) 2012 Darcy Clarke
 * Dual licensed under the MIT and GPL licenses.
 *
 * ADDS: 
 *
 * - $.watch()
 *  
 * USES:
 *
 * - DOMAttrModified event
 * 
 * FALLBACKS:
 * 
 * - propertychange event
 * - setTimeout() with delay 
 *
 * EXAMPLE:
 * 
 * $('div').watch('width height', function(){
 *      console.log(this.style.width, this.style.height);
 * });
 *
 * $('div').animate({width:'100px',height:'200px'}, 500);
 *
 */

(function(a){a.extend(a.fn,{watch:function(b,c,d){var e=document.createElement("div"),f=function(a,b){a="on"+a;var c=a in b;return c||(b.setAttribute(a,"return;"),c=typeof b[a]=="function"),c};typeof c=="function"&&(d=c,c={}),typeof d!="function"&&(d=function(){}),c=a.extend({},{throttle:10},c);var g=function(a){var b=a.data(),c=!1,d;for(var e=0;e<b.props.length;e++){d=a.css(b.props[e]);if(b.vals[e]!=d){b.vals[e]=d,c=!0;break}}c&&b.cb&&b.cb.call(a,b)};return this.each(function(){var h=a(this),i=function(){g.call(this,h)},j={props:b.split(","),cb:d,vals:[]};a.each(j.props,function(a){j.vals[a]=h.css(j.props[a])}),h.data(j),f("DOMAttrModified",e)?h.on("DOMAttrModified",d):f("propertychange",e)?h.on("propertychange",d):setInterval(i,c.throttle)})}})})(jQuery)