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

The above code would cause the *padding left* on *element* to change from *0px* to *100px* as the user scrolls between 100 and 800 pixels down the page.
The same thing happens in reverse as the user scrolls back up.

### Options

**cssProperty**  
The css property that should change as the user scrolls (this should be written Javascript style, so paddingLeft not padding-left).

**cssStartVal**  
The starting value of the css property (specified with the *cssProperty* option). When the window's scroll value is anything less than the *scrollStartVal* value, the target element gets this value applied to it.

**cssStopVal**  
The ending value of the css property (specified with the *cssProperty* option). When the window's scroll value is anything above the *scrollStopVal* value, the target element gets this value applied to it.

**scrollStartVal**  
This is the window's scroll value, in pixels, where the css property will start to animate. Don't inlucde "px."

**scrollStopVal**  
This is the window's scroll value, in pixels, where the css property will complete its animation and reach the value specified with *cssStopVal*. Don't include "px" here either.

### Tips and Tricks

**Units**  
As of now, you need to use like units for the *cssStartVal* and *cssStopVal*. Units can be pixels, percentage, ems, rems, etc., but the start and stop values need to use the same unit.

**Anchor Links as Scroll Start and Stop Values**  
To make life easy (espeically for responsive design), you can specify the *scrollStartVal* and *scrollStopVal* as an anchor link string or even as an anchor link plus a number.

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

**Conditionizr**  
This plugin contains code that prevents it from firing on touch screen devices, using Conditionizr. Until we can find a better work around, Conditionizr is an easy way to simply disable the ScrollCSS effect on any device that identifies itself as a touch screen device.

Conditionizr is a separate plugin, found at http://conditionizr.com. If you prefer not to include Conditionizr, ScrollCSS will not break, but you may get unwanted results on touchscreens.

Questions? Email leverage@brolik.com
