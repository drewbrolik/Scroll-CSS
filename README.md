Scroll-CSS
==========

ScrollCSS is a jQuery plugin that changes a specified CSS property of an element incrementally as the browser window is scrolled.

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

*cssProperty*
The css property that should change as the user scrolls (this should be written Javascript style, so paddingLeft not padding-left).

*cssStartVal*
The starting value of the css property specified with the *cssProperty* option. When the window is scrolled anywhere below the *scrollStartVal*, the element gets this value applied to it.

*cssStopVal*
The ending value of the css property specified with the *cssProperty* option. When the window is scrolled anywhere above the *scrollStopVal* value, the element gets this value applied to it.

*scrollStartVal*
This is the window's scroll value, in pixels, where the css property specified with *cssProperty* will start to animate.

*scrollStopVal*
This is the window's scroll value, in pixels, where the css property specified with *cssProperty* will complete its animation and reach the value specified with *cssStopVal*.
