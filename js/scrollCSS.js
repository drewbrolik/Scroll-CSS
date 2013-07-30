/*
Scroll CSS jQuery Plugin
Version 1.0.0
Jul 30th, 2013

Documentation: http://
Repository: https://github.com/drewbrolik/Scroll-CSS

Copyright 2013 Drew Thomas

Dual licensed under the MIT and GPL licenses:
https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://www.gnu.org/licenses/gpl.txt

This file is part of Scroll CSS.

Scroll CSS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Scroll CSS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Scroll CSS.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
Changelog
4/25/13 Initial plugin (1.0.0)
7/30/13 Bug fixes
*/

(function($) {

	$.fn.scrollCSS = function(additionalOptions) {
		
		var options = { //- set default options
			cssProperty:"paddingLeft",
			cssStartVal:"0px",
			cssStopVal:"100px",
			scrollStartVal:100,
			scrollStopVal:800
		}
		options = $.extend(options, additionalOptions ); //- override default options with user-supplied options
		
		$(this).each(function() {

			var $this = $(this);

			// separate css property value numbers and units
			var cssStartVal = parseInt(options.cssStartVal);
			var cssUnit = options.cssStartVal.replace(cssStartVal,""); // ends up always being pixels anyway...

			var cssStopVal = parseInt(options.cssStopVal);
			if (cssUnit == "") { cssUnit = options.cssStopVal.replace(cssStopVal,""); } // in case start value was 0 (no unit specified)...

			var scrollStartVal;
			var scrollStopVal;

			$(window).on("ready load scroll resize",function() {
				if (!$("html").hasClass("touch")) { // this prevents scrollCSS from running on touchscreens, but it requires Conditionizr (http://conditionizr.com). If you don't have Conditionizr, the plugin will still work.

					// convert scrollStartVal into a number (if it's not already)
					if (options.scrollStartVal != parseInt(options.scrollStartVal)) { // not a number
						
						if (options.scrollStartVal.indexOf("+") > -1) { // anchor plus math
							var scrollStartValArray = options.scrollStartVal.split("+");
							scrollStartValAnchorOffset = $(scrollStartValArray[0]).offset().top;
							scrollStartVal = parseInt(scrollStartValAnchorOffset)+parseInt(scrollStartValArray[1]);
						} else if (options.scrollStartVal.indexOf("-") > -1) { // anchor minus math
							var scrollStartValArray = options.scrollStartVal.split("-");
							scrollStartValAnchorOffset = $(scrollStartValArray[0]).offset().top;
							scrollStartVal = parseInt(scrollStartValAnchorOffset)-parseInt(scrollStartValArray[1]);
						} else { // just anchor
							scrollStartVal = $(options.scrollStartVal).offset().top;
						}

					} else { // already a number
						
						scrollStartVal = options.scrollStartVal;
					
					}

					// convert scrollStopVal into a number (if it's not already)
					if (options.scrollStopVal != parseInt(options.scrollStopVal)) { // not a number
						
						if (options.scrollStopVal.indexOf("+") > -1) { // anchor plus math
							var scrollStopValArray = options.scrollStopVal.split("+");
							scrollStopValAnchorOffset = $(scrollStopValArray[0]).offset().top;
							scrollStopVal = parseInt(scrollStopValAnchorOffset)+parseInt(scrollStopValArray[1]);
						} else if (options.scrollStopVal.indexOf("-") > -1) { // anchor minus math
							var scrollStopValArray = options.scrollStopVal.split("-");
							scrollStopValAnchorOffset = $(scrollStopValArray[0]).offset().top;
							scrollStopVal = parseInt(scrollStopValAnchorOffset)-parseInt(scrollStopValArray[1]);
						} else { // just anchor
							scrollStopVal = $(options.scrollStopVal).offset().top;
						}

					} else { // already a number
						
						scrollStopVal = options.scrollStopVal;
					
					}

					// scroll stuff
					var scrollVal = $(window).scrollTop();
					var thisCss = {};

					if (scrollVal < scrollStartVal) {

						thisCss[options.cssProperty] = options.cssStartVal;
						$this.css(thisCss);

					} else if (scrollVal >= scrollStartVal && scrollVal <= scrollStopVal) {
						
						var percentageDecimal = (scrollVal-scrollStartVal)/(scrollStopVal-scrollStartVal);
						var cssVal = (cssStopVal-cssStartVal)*percentageDecimal+cssStartVal;

						thisCss[options.cssProperty] = cssVal+cssUnit;
						$this.css(thisCss);

					} else if (scrollVal > scrollStopVal) {

						thisCss[options.cssProperty] = options.cssStopVal;
						$this.css(thisCss);

					}
				} // if !.touch (to prevent touch screens, uses Conditionizr)

			});

		});
		
		return this;
	};
	
})(jQuery);