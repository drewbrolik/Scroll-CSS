Scroll-CSS
==========

ScrollCSS is a jQuery plugin that changes a CSS property of an element incrementally as the browser window is scrolled.

### Basic usage

```javascript
$("element").scrollCSS({
    cssProperty:"paddingLeft",
    cssStartVal:"0px",
    cssStopVal:"100px",
    scrollStartVal:100,
    scrollStopVal:800
});
```

The above code would cause the *paddingLeft* on *element* to change from *0px* to *100px* as the user scrolls between 100 and 800 pixels down the page.
The same thing happens in reverse as the user scrolls back up.

### Options

**cssProperty**  
The css property that should change as the user scrolls (this should be written Javascript style, so paddingLeft not padding-left).

**cssStartVal**  
The starting value of the css property specified with the *cssProperty* option. When the window is scrolled anywhere below the *scrollStartVal*, the element gets this value applied to it.

**cssStopVal**  
The ending value of the css property specified with the *cssProperty* option. When the window is scrolled anywhere above the *scrollStopVal* value, the element gets this value applied to it.

**scrollStartVal**  
This is the window's scroll value, in pixels, where the css property specified with *cssProperty* will start to animate.

**scrollStopVal**  
This is the window's scroll value, in pixels, where the css property specified with *cssProperty* will complete its animation and reach the value specified with *cssStopVal*.

### Tips and Tricks

**Units**  
As of now, you need to use like units for the *cssStartVal* and *cssStopVal*. Units can be pixels, percentage, ems, rems, etc., but the start and stop values need to use the same unit.

**Anchor Links as Scroll Start and Stop Values**  
To make life easy (espeically for responsive design), you can specify the *scrollStartVal* and *scrollStopVal* as anchor links or even as an anchor link plus a number.

ScrollCSS will always calculate the pixel value of the anchor link when scrolling, and it will adjust the value based on window resize, scroll, etc.

*Example*
```javascript
$("element").scrollCSS({
    cssProperty:"paddingLeft",
    cssStartVal:"0px",
    cssStopVal:"100px",
    scrollStartVal:"#anchorName",
    scrollStopVal:"#anchorName + 100"
});
```

Questions? Email leverage@brolik.com
