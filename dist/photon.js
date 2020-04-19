/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
;

(function (window, factory) {
  'use strict'; // AMD. Register as an anonymous module.  Wrap in function so we have access
  // to root via `this`.

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      window.Waves = factory.call(window);
      return window.Waves;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  else {}
})((typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' ? global : this, function () {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);
  var toString = Object.prototype.toString;
  var isTouchAvailable = 'ontouchstart' in window; // Find exact position of element

  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function isObject(value) {
    var type = _typeof(value);

    return type === 'function' || type === 'object' && !!value;
  }

  function isDOMNode(obj) {
    return isObject(obj) && obj.nodeType > 0;
  }

  function getWavesElements(nodes) {
    var stringRepr = toString.call(nodes);

    if (stringRepr === '[object String]') {
      return $$(nodes);
    } else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
      return nodes;
    } else if (isDOMNode(nodes)) {
      return [nodes];
    }

    return [];
  }

  function offset(elem) {
    var docElem,
        win,
        box = {
      top: 0,
      left: 0
    },
        doc = elem && elem.ownerDocument;
    docElem = doc.documentElement;

    if (_typeof(elem.getBoundingClientRect) !== ( true ? "undefined" : undefined)) {
      box = elem.getBoundingClientRect();
    }

    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(styleObj) {
    var style = '';

    for (var prop in styleObj) {
      if (styleObj.hasOwnProperty(prop)) {
        style += prop + ':' + styleObj[prop] + ';';
      }
    }

    return style;
  }

  var Effect = {
    // Effect duration
    duration: 750,
    // Effect delay (check for scroll before showing effect)
    delay: 50,
    show: function show(e, element, velocity) {
      // Disable right click
      if (e.button === 2) {
        return false;
      }

      element = element || this; // Create ripple

      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple waves-rippling';
      element.appendChild(ripple); // Get click coordinate and element width

      var pos = offset(element);
      var relativeY = 0;
      var relativeX = 0; // Support for touch devices

      if ('touches' in e && e.touches.length) {
        relativeY = e.touches[0].pageY - pos.top;
        relativeX = e.touches[0].pageX - pos.left;
      } //Normal case
      else {
          relativeY = e.pageY - pos.top;
          relativeX = e.pageX - pos.left;
        } // Support for synthetic events


      relativeX = relativeX >= 0 ? relativeX : 0;
      relativeY = relativeY >= 0 ? relativeY : 0; // Custom PhotonCSS ripple scale function

      var scale = function () {
        var a = $(element);
        var h = element.clientHeight;
        var w = element.clientWidth;
        var x = relativeX;
        var y = relativeY;
        if (x > w / 2) x = w - x;
        if (y > h / 2) y = h - y;
        x = w - x;
        y = h / 2 - y;
        var f = (x * 1.019 + y * 0.350 + (h + w) / 2 * 0.118) / 52;
        if (h == w) return (w - Math.abs(w - (h - (w - x) - (h - y)) - w)) / 50;
        if (a.hasClass("waves-ink")) return 0.475;

        if (a.hasClass("waves-touch")) {
          a.removeClass("waves-touch");
          return f / 1.1;
        }

        return f;
      }();

      scale = "scale(".concat(scale, ")");
      var translate = 'translate(0,0)';

      if (velocity) {
        translate = 'translate(' + velocity.x + 'px, ' + velocity.y + 'px)';
      } // Attach data to element


      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-translate', translate); // Set ripple position

      var rippleStyle = {
        top: relativeY + 'px',
        left: relativeX + 'px'
      };
      ripple.classList.add('waves-notransition');
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.classList.remove('waves-notransition'); // Scale the ripple

      rippleStyle['-webkit-transform'] = scale + ' ' + translate;
      rippleStyle['-moz-transform'] = scale + ' ' + translate;
      rippleStyle['-ms-transform'] = scale + ' ' + translate;
      rippleStyle['-o-transform'] = scale + ' ' + translate;
      rippleStyle.transform = scale + ' ' + translate;
      rippleStyle.opacity = '1';
      var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
      rippleStyle['-webkit-transition-duration'] = duration + 'ms';
      rippleStyle['-moz-transition-duration'] = duration + 'ms';
      rippleStyle['-o-transition-duration'] = duration + 'ms';
      rippleStyle['transition-duration'] = duration + 'ms';
      ripple.setAttribute('style', convertStyle(rippleStyle));
    },
    hide: function hide(e, element) {
      element = element || this;
      var ripples = element.getElementsByClassName('waves-rippling');

      for (var i = 0, len = ripples.length; i < len; i++) {
        removeRipple(e, element, ripples[i]);
      }

      if (isTouchAvailable) {
        element.removeEventListener('touchend', Effect.hide);
        element.removeEventListener('touchcancel', Effect.hide);
      }

      element.removeEventListener('mouseup', Effect.hide);
      element.removeEventListener('mouseleave', Effect.hide);
    }
  };
  /**
   * Collection of wrapper for HTML element that only have single tag
   * like <input> and <img>
   */

  var TagWrapper = {
    // Wrap <input> tag so it can perform the effect
    input: function input(element) {
      var parent = element.parentNode; // If input already have parent just pass through

      if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
        return;
      } // Put element class and style to the specified parent


      var wrapper = document.createElement('i');
      wrapper.className = element.className + ' waves-input-wrapper';
      element.className = 'waves-button-input'; // Put element as child

      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element); // Apply element color and background color to wrapper

      var elementStyle = window.getComputedStyle(element, null);
      var color = elementStyle.color;
      var backgroundColor = elementStyle.backgroundColor;
      wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);
      element.setAttribute('style', 'background-color:rgba(0,0,0,0);');
    },
    // Wrap <img> tag so it can perform the effect
    img: function img(element) {
      var parent = element.parentNode; // If input already have parent just pass through

      if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
        return;
      } // Put element as child


      var wrapper = document.createElement('i');
      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element);
    }
  };
  /**
   * Hide the effect and remove the ripple. Must be
   * a separate function to pass the JSLint...
   */

  function removeRipple(e, el, ripple) {
    // Check if the ripple still exist
    if (!ripple) {
      return;
    }

    ripple.classList.remove('waves-rippling');
    var relativeX = ripple.getAttribute('data-x');
    var relativeY = ripple.getAttribute('data-y');
    var scale = ripple.getAttribute('data-scale');
    var translate = ripple.getAttribute('data-translate'); // Get delay beetween mousedown and mouse leave

    var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
    var delay = 350 - diff;

    if (delay < 0) {
      delay = 0;
    }

    if (e.type === 'mousemove') {
      delay = 150;
    } // Fade out ripple after delay


    var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
    setTimeout(function () {
      var style = {
        top: relativeY + 'px',
        left: relativeX + 'px',
        opacity: '0',
        // Duration
        '-webkit-transition-duration': duration + 'ms',
        '-moz-transition-duration': duration + 'ms',
        '-o-transition-duration': duration + 'ms',
        'transition-duration': duration + 'ms',
        '-webkit-transform': scale + ' ' + translate,
        '-moz-transform': scale + ' ' + translate,
        '-ms-transform': scale + ' ' + translate,
        '-o-transform': scale + ' ' + translate,
        'transform': scale + ' ' + translate
      };
      ripple.setAttribute('style', convertStyle(style));
      setTimeout(function () {
        try {
          el.removeChild(ripple);
        } catch (e) {
          return false;
        }
      }, duration);
    }, delay);
  }
  /**
   * Disable mousedown event for 500ms during and after touch
   */


  var TouchHandler = {
    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,
    allowEvent: function allowEvent(e) {
      var allow = true;

      if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
        allow = false;
      }

      return allow;
    },
    registerEvent: function registerEvent(e) {
      var eType = e.type;

      if (eType === 'touchstart') {
        TouchHandler.touches += 1; // push
      } else if (/^(touchend|touchcancel)$/.test(eType)) {
        setTimeout(function () {
          if (TouchHandler.touches) {
            TouchHandler.touches -= 1; // pop after 500ms
          }
        }, 500);
      }
    }
  };
  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */

  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentElement) {
      if (!(target instanceof SVGElement) && target.classList.contains('waves-effect')) {
        element = target;
        break;
      }

      target = target.parentElement;
    }

    return element;
  }
  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */


  function showEffect(e) {
    // Disable effect if element has "disabled" property on it
    // In some cases, the event is not triggered by the current element
    // if (e.target.getAttribute('disabled') !== null) {
    //     return;
    // }
    var element = getWavesEffectElement(e);

    if (element !== null) {
      // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
      if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
        return;
      }

      TouchHandler.registerEvent(e);

      if (e.type === 'touchstart' && Effect.delay) {
        var hidden = false;
        var timer = setTimeout(function () {
          timer = null;
          Effect.show(e, element);
        }, Effect.delay);

        var hideEffect = function hideEffect(hideEvent) {
          // if touch hasn't moved, and effect not yet started: start effect now
          if (timer) {
            clearTimeout(timer);
            timer = null;
            Effect.show(e, element);
          }

          if (!hidden) {
            hidden = true;
            Effect.hide(hideEvent, element);
          }

          removeListeners();
        };

        var touchMove = function touchMove(moveEvent) {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }

          hideEffect(moveEvent);
          removeListeners();
        };

        element.addEventListener('touchmove', touchMove, false);
        element.addEventListener('touchend', hideEffect, false);
        element.addEventListener('touchcancel', hideEffect, false);

        var removeListeners = function removeListeners() {
          element.removeEventListener('touchmove', touchMove);
          element.removeEventListener('touchend', hideEffect);
          element.removeEventListener('touchcancel', hideEffect);
        };
      } else {
        Effect.show(e, element);

        if (isTouchAvailable) {
          element.addEventListener('touchend', Effect.hide, false);
          element.addEventListener('touchcancel', Effect.hide, false);
        }

        element.addEventListener('mouseup', Effect.hide, false);
        element.addEventListener('mouseleave', Effect.hide, false);
      }
    }
  }

  Waves.init = function (options) {
    var body = document.body;
    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    if ('delay' in options) {
      Effect.delay = options.delay;
    }

    if (isTouchAvailable) {
      body.addEventListener('touchstart', showEffect, false);
      body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
      body.addEventListener('touchend', TouchHandler.registerEvent, false);
    }

    body.addEventListener('mousedown', showEffect, false);
  };
  /**
   * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
   * waves classes to a set of elements. Set drag to true if the ripple mouseover
   * or skimming effect should be applied to the elements.
   */


  Waves.attach = function (elements, classes) {
    elements = getWavesElements(elements);

    if (toString.call(classes) === '[object Array]') {
      classes = classes.join(' ');
    }

    classes = classes ? ' ' + classes : '';
    var element, tagName;

    for (var i = 0, len = elements.length; i < len; i++) {
      element = elements[i];
      tagName = element.tagName.toLowerCase();

      if (['input', 'img'].indexOf(tagName) !== -1) {
        TagWrapper[tagName](element);
        element = element.parentElement;
      }

      if (element.className.indexOf('waves-effect') === -1) {
        element.className += ' waves-effect' + classes;
      }
    }
  };
  /**
   * Cause a ripple to appear in an element via code.
   */


  Waves.ripple = function (elements, options) {
    elements = getWavesElements(elements);
    var elementsLen = elements.length;
    options = options || {};
    options.wait = options.wait || 0;
    options.position = options.position || null; // default = centre of element

    if (elementsLen) {
      var element,
          pos,
          off,
          centre = {},
          i = 0;
      var mousedown = {
        type: 'mousedown',
        button: 1
      };

      var hideRipple = function hideRipple(mouseup, element) {
        return function () {
          Effect.hide(mouseup, element);
        };
      };

      for (; i < elementsLen; i++) {
        element = elements[i];
        pos = options.position || {
          x: element.clientWidth / 2,
          y: element.clientHeight / 2
        };
        off = offset(element);
        centre.x = off.left + pos.x;
        centre.y = off.top + pos.y;
        mousedown.pageX = centre.x;
        mousedown.pageY = centre.y;
        Effect.show(mousedown, element);

        if (options.wait >= 0 && options.wait !== null) {
          var mouseup = {
            type: 'mouseup',
            button: 1
          };
          setTimeout(hideRipple(mouseup, element), options.wait);
        }
      }
    }
  };
  /**
   * Remove all ripples from an element.
   */


  Waves.calm = function (elements) {
    elements = getWavesElements(elements);
    var mouseup = {
      type: 'mouseup',
      button: 1
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      Effect.hide(mouseup, elements[i]);
    }
  };

  return Waves;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  "red": {
    "50": "#ffebee",
    "100": "#ffcdd2",
    "200": "#ef9a9a",
    "300": "#e57373",
    "400": "#ef5350",
    "500": "#f44336",
    "600": "#e53935",
    "700": "#d32f2f",
    "800": "#c62828",
    "900": "#b71c1c",
    "a100": "#ff8a80",
    "a200": "#ff5252",
    "a400": "#ff1744",
    "a700": "#d50000"
  },
  "pink": {
    "50": "#fce4ec",
    "100": "#f8bbd0",
    "200": "#f48fb1",
    "300": "#f06292",
    "400": "#ec407a",
    "500": "#e91e63",
    "600": "#d81b60",
    "700": "#c2185b",
    "800": "#ad1457",
    "900": "#880e4f",
    "a100": "#ff80ab",
    "a200": "#ff4081",
    "a400": "#f50057",
    "a700": "#c51162"
  },
  "purple": {
    "50": "#f3e5f5",
    "100": "#e1bee7",
    "200": "#ce93d8",
    "300": "#ba68c8",
    "400": "#ab47bc",
    "500": "#9c27b0",
    "600": "#8e24aa",
    "700": "#7b1fa2",
    "800": "#6a1b9a",
    "900": "#4a148c",
    "a100": "#ea80fc",
    "a200": "#e040fb",
    "a400": "#d500f9",
    "a700": "#aa00ff"
  },
  "deep-purple": {
    "50": "#ede7f6",
    "100": "#d1c4e9",
    "200": "#b39ddb",
    "300": "#9575cd",
    "400": "#7e57c2",
    "500": "#673ab7",
    "600": "#5e35b1",
    "700": "#512da8",
    "800": "#4527a0",
    "900": "#311b92",
    "a100": "#b388ff",
    "a200": "#7c4dff",
    "a400": "#651fff",
    "a700": "#6200ea"
  },
  "indigo": {
    "50": "#e8eaf6",
    "100": "#c5cae9",
    "200": "#9fa8da",
    "300": "#7986cb",
    "400": "#5c6bc0",
    "500": "#3f51b5",
    "600": "#3949ab",
    "700": "#303f9f",
    "800": "#283593",
    "900": "#1a237e",
    "a100": "#8c9eff",
    "a200": "#536dfe",
    "a400": "#3d5afe",
    "a700": "#304ffe"
  },
  "blue": {
    "50": "#e3f2fd",
    "100": "#bbdefb",
    "200": "#90caf9",
    "300": "#64b5f6",
    "400": "#42a5f5",
    "500": "#2196f3",
    "600": "#1e88e5",
    "700": "#1976d2",
    "800": "#1565c0",
    "900": "#0d47a1",
    "a100": "#82b1ff",
    "a200": "#448aff",
    "a400": "#2979ff",
    "a700": "#2962ff"
  },
  "light-blue": {
    "50": "#e1f5fe",
    "100": "#b3e5fc",
    "200": "#81d4fa",
    "300": "#4fc3f7",
    "400": "#29b6f6",
    "500": "#03a9f4",
    "600": "#039be5",
    "700": "#0288d1",
    "800": "#0277bd",
    "900": "#01579b",
    "a100": "#80d8ff",
    "a200": "#40c4ff",
    "a400": "#00b0ff",
    "a700": "#0091ea"
  },
  "cyan": {
    "50": "#e0f7fa",
    "100": "#b2ebf2",
    "200": "#80deea",
    "300": "#4dd0e1",
    "400": "#26c6da",
    "500": "#00bcd4",
    "600": "#00acc1",
    "700": "#0097a7",
    "800": "#00838f",
    "900": "#006064",
    "a100": "#84ffff",
    "a200": "#18ffff",
    "a400": "#00e5ff",
    "a700": "#00b8d4"
  },
  "teal": {
    "50": "#e0f2f1",
    "100": "#b2dfdb",
    "200": "#80cbc4",
    "300": "#4db6ac",
    "400": "#26a69a",
    "500": "#009688",
    "600": "#00897b",
    "700": "#00796b",
    "800": "#00695c",
    "900": "#004d40",
    "a100": "#a7ffeb",
    "a200": "#64ffda",
    "a400": "#1de9b6",
    "a700": "#00bfa5"
  },
  "green": {
    "50": "#e8f5e9",
    "100": "#c8e6c9",
    "200": "#a5d6a7",
    "300": "#81c784",
    "400": "#66bb6a",
    "500": "#4caf50",
    "600": "#43a047",
    "700": "#388e3c",
    "800": "#2e7d32",
    "900": "#1b5e20",
    "a100": "#b9f6ca",
    "a200": "#69f0ae",
    "a400": "#00e676",
    "a700": "#00c853"
  },
  "light-green": {
    "50": "#f1f8e9",
    "100": "#dcedc8",
    "200": "#c5e1a5",
    "300": "#aed581",
    "400": "#9ccc65",
    "500": "#8bc34a",
    "600": "#7cb342",
    "700": "#689f38",
    "800": "#558b2f",
    "900": "#33691e",
    "a100": "#ccff90",
    "a200": "#b2ff59",
    "a400": "#76ff03",
    "a700": "#64dd17"
  },
  "lime": {
    "50": "#f9fbe7",
    "100": "#f0f4c3",
    "200": "#e6ee9c",
    "300": "#dce775",
    "400": "#d4e157",
    "500": "#cddc39",
    "600": "#c0ca33",
    "700": "#afb42b",
    "800": "#9e9d24",
    "900": "#827717",
    "a100": "#f4ff81",
    "a200": "#eeff41",
    "a400": "#c6ff00",
    "a700": "#aeea00"
  },
  "yellow": {
    "50": "#fffde7",
    "100": "#fff9c4",
    "200": "#fff59d",
    "300": "#fff176",
    "400": "#ffee58",
    "500": "#ffeb3b",
    "600": "#fdd835",
    "700": "#fbc02d",
    "800": "#f9a825",
    "900": "#f57f17",
    "a100": "#ffff8d",
    "a200": "#ffff00",
    "a400": "#ffea00",
    "a700": "#ffd600"
  },
  "amber": {
    "50": "#fff8e1",
    "100": "#ffecb3",
    "200": "#ffe082",
    "300": "#ffd54f",
    "400": "#ffca28",
    "500": "#ffc107",
    "600": "#ffb300",
    "700": "#ffa000",
    "800": "#ff8f00",
    "900": "#ff6f00",
    "a100": "#ffe57f",
    "a200": "#ffd740",
    "a400": "#ffc400",
    "a700": "#ffab00"
  },
  "orange": {
    "50": "#fff3e0",
    "100": "#ffe0b2",
    "200": "#ffcc80",
    "300": "#ffb74d",
    "400": "#ffa726",
    "500": "#ff9800",
    "600": "#fb8c00",
    "700": "#f57c00",
    "800": "#ef6c00",
    "900": "#e65100",
    "a100": "#ffd180",
    "a200": "#ffab40",
    "a400": "#ff9100",
    "a700": "#ff6d00"
  },
  "deep-orange": {
    "50": "#fbe9e7",
    "100": "#ffccbc",
    "200": "#ffab91",
    "300": "#ff8a65",
    "400": "#ff7043",
    "500": "#ff5722",
    "600": "#f4511e",
    "700": "#e64a19",
    "800": "#d84315",
    "900": "#bf360c",
    "a100": "#ff9e80",
    "a200": "#ff6e40",
    "a400": "#ff3d00",
    "a700": "#dd2c00"
  },
  "brown": {
    "50": "#efebe9",
    "100": "#d7ccc8",
    "200": "#bcaaa4",
    "300": "#a1887f",
    "400": "#8d6e63",
    "500": "#795548",
    "600": "#6d4c41",
    "700": "#5d4037",
    "800": "#4e342e",
    "900": "#3e2723"
  },
  "grey": {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121"
  },
  "bluegrey": {
    "50": "#eceff1",
    "100": "#cfd8dc",
    "200": "#b0bec5",
    "300": "#90a4ae",
    "400": "#78909c",
    "500": "#607d8b",
    "600": "#546e7a",
    "700": "#455a64",
    "800": "#37474f",
    "900": "#263238"
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _lib_Waves_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _lib_Waves_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_Waves_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_MaterialColors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*!
 * Photon v1.0.0
 * https://photoncss.github.io/
 *
 * Copyright 2020 Josh Merlino
 * Released under the MIT license
 * https://github.com/PhotonCSS/Photon/LISCENSE
 */

 // Define constant Photon global

var Photon = {
  // Array of functions to execute after a Photon.reload
  hooks: [],
  // Generates a UUID in XXXXXXXXXXXX
  guid: function guid() {
    // Generate a random 4 digit number in hex XXXX
    var s4 = function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    return "".concat(s4()).concat(s4()).concat(s4());
  },
  // Converts a string classname color like "green accent-2" to a hex value
  parseColor: function parseColor(query) {
    var _query$split = query.split(" "),
        _query$split2 = _slicedToArray(_query$split, 2),
        color = _query$split2[0],
        shade = _query$split2[1];

    switch (shade) {
      case "lighten-5":
        shade = "50";
        break;

      case "lighten-4":
        shade = "100";
        break;

      case "lighten-3":
        shade = "200";
        break;

      case "lighten-2":
        shade = "300";
        break;

      case "lighten-1":
        shade = "400";
        break;

      case "darken-1":
        shade = "600";
        break;

      case "darken-2":
        shade = "700";
        break;

      case "darken-3":
        shade = "800";
        break;

      case "darken-4":
        shade = "900";
        break;

      case "accent-1":
        shade = "a100";
        break;

      case "accent-2":
        shade = "a200";
        break;

      case "accent-3":
        shade = "a400";
        break;

      case "accent-4":
        shade = "a700";
        break;

      default:
        shade = "500";
        break;
    } // Return result


    return _lib_MaterialColors_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"][color][shade];
  },
  // Converts string color like "green accent-2" to "prefix-green prefix-accent-2"
  prefixColorQuery: function prefixColorQuery(prefix, query) {
    return "".concat(prefix, "-").concat(query.replace(/\s/g, " ".concat(prefix, "-").concat(query)));
  },
  // Binds event listeners where needed
  reload: function reload() {
    // Checkbox:
    $(".checkbox").not("[md]").each(function () {
      var $this = $(this);
      var $input = $(this).children("input");
      $(this).children("label, .waves-effect").on("click", function () {
        if (!$this.hasClass("disabled")) $input.prop("checked", !$input.prop("checked")).trigger("change");
      }); // Flag changed elements

      $(this).attr("md", "");
    }); // Drawer

    $(".drawer").not("[md]").each(function () {
      Photon.Drawer(this);
    }); // List

    $(".list").not("[md]").each(function () {
      $(this).children(".list-item").on("click", function (event) {
        var $input = $(this).children(".meta").children(".checkbox, .switch, .radio").children("input");
        var $target = $(event.target);
        if ($target.is($input.parent().children())) return;
        $input.prop("checked", $input.parent().hasClass("radio") ? true : !$input.prop("checked")).trigger("change");
      });
      $(this).attr("md", "");
    }); // Menu

    $(".menu").not("[md]").each(function () {
      Photon.Menu(this);
    }); // Radio:

    $(".radio").not("[md]").each(function () {
      var $this = $(this);
      var $input = $(this).children("input");
      $(this).children().not("input").on("click", function () {
        if (!$this.hasClass("disabled")) $input.prop("checked", true).trigger("change");
      });
      $(this).attr("md", "");
    }); // Slider

    $(".slider").not("[md]").each(function () {
      Photon.Slider(this);
    }); // Switch:

    $(".switch").not("[md]").each(function () {
      var $this = $(this);
      var $input = $(this).children("input");
      $(this).children().not("input").on("click", function () {
        if (!$this.hasClass("disabled")) $input.prop("checked", !$input.prop("checked")).trigger("change");
      });
      $(this).attr("md", "");
    }); // Textfield:

    $(".input-field").not("[md]").each(function () {
      // Outlined
      if ($(this).hasClass("outlined")) {
        var $input = $(this).children("input");
        var $label = $(this).children("label");
        var $maxlength = $(this).children(".max-length");
        $input.on("keydown keyup change mouseleave", function () {
          if ($input.val().length === 0) {
            $label.removeClass("floating");
          } else {
            $label.addClass("floating");
          }

          $maxlength.text($input.val().length + "/" + $maxlength.text().split("/")[1]);
        }).change();
        $(this).attr("md", ""); // Filled & Normal
      } else {
        $(this).append("<div class=\"bar\"></div>");
        var $bar = $(this).children(".bar");

        var _$input = $(this).children("input");

        var _$label = $(this).children("label");

        var _$maxlength = $(this).children(".max-length");

        _$input.on("keydown keyup change mouseleave", function () {
          if (_$input.val().length === 0) {
            _$label.removeClass("floating");
          } else {
            _$label.addClass("floating");
          }

          _$maxlength.text(_$input.val().length + "/" + _$maxlength.text().split("/")[1]);
        }).change();

        var focus = false;

        _$input.on("click", function (_ref) {
          var offsetX = _ref.offsetX;
          if (focus === true) return;
          focus = true;
          var width = _$input[0].clientWidth;
          $bar.removeClass("transition").css({
            left: offsetX,
            width: 0,
            opacity: 1
          });
          setTimeout(function () {
            $bar.addClass("transition").css({
              left: 0,
              width: width
            });
          });
        });

        _$input.on("blur", function () {
          focus = false;
          $bar.addClass("transition").css({
            opacity: 0
          });
        });

        $(this).attr("md", "");
      }
    }); // Tabs:

    $(".tabs").not("[md]").each(function () {
      Photon.Tabs(this);
    }); // Toolbar:

    $(".toolbar").not("[md]").each(function () {
      // Elevate Effect:
      if ($(this).hasClass("elevate")) {
        var $toolbar = $(this);

        (function frame() {
          requestAnimationFrame(frame);
          if ($(document).scrollTop() === 0) $toolbar.addClass("flat").removeClass("raised");
          if ($(document).scrollTop() != 0) $toolbar.removeClass("flat").addClass("raised");
        })();

        $(this).attr("md", "");
      } // Auto-hide Effect:


      if ($(this).hasClass("auto-hide")) {
        var _cache = 0;

        var _$toolbar = $(this);

        (function frame() {
          requestAnimationFrame(frame);
          var delta = Math.sign($(document).scrollTop() - _cache);
          if (delta > 0) _$toolbar.addClass("collapsed");
          if (delta < 0) _$toolbar.removeClass("collapsed");
          _cache = $(document).scrollTop();
        })();

        $(this).attr("md", "");
      } // Update ToolbarSafeArea


      if ($(this).hasClass("fixed")) {
        var $safearea = $(this).siblings(".toolbar-safe-area").not("[md]");
        if ($safearea.length > 0) return $safearea.eq(0).css({
          marginTop: $(this)[0].clientHeight
        }).attr("md", "");
      }
    }); // Waves:

    $(".waves-effect").not("[md]").each(function () {
      _lib_Waves_js__WEBPACK_IMPORTED_MODULE_0___default.a.attach(this);
    }); // Waves Ink:

    $(".waves-ink").not("[md]").each(function () {
      $(this).on("mousedown touchstart", function (event) {
        event.stopPropagation();
        _lib_Waves_js__WEBPACK_IMPORTED_MODULE_0___default.a.calm(this);
        _lib_Waves_js__WEBPACK_IMPORTED_MODULE_0___default.a.ripple(this, {
          wait: 1e10
        });
      });
      $(this).on("mouseup mouseleave", function () {
        _lib_Waves_js__WEBPACK_IMPORTED_MODULE_0___default.a.calm(this);
      }); // Flag changed elements as processed

      $(this).attr("md", "");
    }); // Execute reload hooks

    Photon.hooks.map(function (hook) {
      return hook();
    }); // return true for hammer syntax

    return true;
  }
}; // Import script-based-components and insert into Photon global

var importAll = function importAll(a) {
  return a.keys().forEach(function (k) {
    return Object.assign(Photon, a(k)["default"]);
  });
};

importAll(__webpack_require__(4)); // On DOM load

$(function () {
  // Initialize Waves.js
  _lib_Waves_js__WEBPACK_IMPORTED_MODULE_0___default.a.init(); // Bind required event listeners when the DOM loads

  Photon.reload();
}); // Load Photon into the window scope

global.Photon = Photon; // Export Photon as a module

/* harmony default export */ __webpack_exports__["default"] = (Photon);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Dialog.js": 5,
	"./Drawer.js": 6,
	"./Menu.js": 7,
	"./Slider.js": 8,
	"./Snackbar.js": 9,
	"./Tabs.js": 10
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* harmony default export */ __webpack_exports__["default"] = ({
  Dialog: function Dialog() {
    return new ( /*#__PURE__*/function () {
      function Dialog(_ref) {
        var _this = this;

        var type = _ref.type,
            transition = _ref.transition,
            actions = _ref.actions,
            dismissable = _ref.dismissable,
            props = _objectWithoutProperties(_ref, ["type", "transition", "actions", "dismissable"]);

        _classCallCheck(this, Dialog);

        // Give the dialog a unique id if it dosnt already have one
        var guid = this.guid = Photon.guid(); // Define $modal

        $("<div class=\"modal-close-area\" modal=\"".concat(guid, "\"></div>")).appendTo($("body"));
        var $modal = $(".modal-close-area[modal=\"".concat(guid, "\"]")); // On click away close

        dismissable && $modal.click(function () {
          return _this.close();
        }); // Append and get $dialog

        $("<div class=\"dialog-wrapper\"><div class=\"dialog\" id=\"".concat(guid, "\"></div></div>")).appendTo($("body"));
        var $dialog = $("#".concat(guid)); // Close dialog on ESC

        dismissable && $(document).on("keydown", function (_ref2) {
          var key = _ref2.key;
          return key === "Escape" && _this.close();
        }); // Add transition class

        $dialog.addClass("transition-".concat(transition)); // Add basic dialog content to multiple types

        $("<h6 class=\"title\">".concat(props.title, "</h6>")).appendTo($dialog);

        if (type === "alert" || type === "form") {
          $("<p class=\"content\">".concat(props.content, "</p>")).appendTo($dialog);
        } // Add input to form type


        if (type === "form") {
          this.field_keys = {};
          props.fields.map(function (field) {
            var key = Photon.guid();
            $("<div class=\"".concat([].concat(_toConsumableArray((field.classes || "").split(" ")), ["input-field", "primary"]).join(" "), "\"><input id=\"").concat(key, "\" type=\"").concat(field.type || "text", "\" ").concat(field.value ? "value=".concat(field.value) : "", " ").concat(field.placeholder ? "placeholder=".concat(field.placeholder) : "", " />").concat(field.label ? "<label>".concat(field.label, "</label>") : "", "</div>")).appendTo($dialog);
            _this.field_keys[field.id || field.name] = key;
          });
          Photon.reload();
        } // Action button wrapper


        actions.length > 0 && $("<div class=\"actions\"></div>").appendTo($dialog);
        var $dialog_actions = $dialog.children(".actions"); // Add actions

        actions.map(function (action) {
          var act_id = Photon.guid();
          $("<button class=\"btn flat waves-effect primary\" id=\"".concat(act_id, "\">").concat(action.name, "</button>")).appendTo($dialog_actions);
          $("#".concat(act_id)).click(function () {
            return action.click(_this);
          });
        });
        return this;
      }

      _createClass(Dialog, [{
        key: "open",
        value: function open() {
          // Get $dialog and $modal
          var $dialog = $("#".concat(this.guid));
          var $modal = $(".modal-close-area[modal=\"".concat(this.guid, "\"]")); // Activate both on next frame

          requestAnimationFrame(function () {
            return [$dialog, $modal].map(function (e) {
              return e.addClass("active");
            });
          });
          return this;
        }
      }, {
        key: "close",
        value: function close() {
          // Get $dialog and $modal
          var $dialog = $("#".concat(this.guid));
          var $modal = $(".modal-close-area[modal=\"".concat(this.guid, "\"]")); // Deactivate both

          [$dialog, $modal].map(function (e) {
            return e.removeClass("active");
          }); // Remove after animation

          setTimeout(function () {
            return [$dialog.parent(), $modal].map(function (e) {
              return e.remove();
            });
          }, 250);
          return this;
        }
      }, {
        key: "fields",
        value: function fields() {
          // Return values from keys
          var result = {};

          for (var key in this.field_keys) {
            result[key] = $("#".concat(this.field_keys[key])).val();
          }

          return result;
        }
      }]);

      return Dialog;
    }())(_objectSpread({
      type: "alert",
      transition: "grow",
      title: "This page says:",
      message: "",
      actions: [],
      dismissable: true
    }, arguments[0]));
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Drawer Component
/* harmony default export */ __webpack_exports__["default"] = ({
  Drawer: function Drawer() {
    return _construct( /*#__PURE__*/function () {
      function Drawer(target) {
        _classCallCheck(this, Drawer);

        // Define $nav and $swipe
        this.target = $(target);
        var $nav = this.target;
        var $swipe = this.target.children(".drawer-swipe-target"); // Make sure were not adding listeners that are already there

        if ($nav.is("[md]")) return this;
        $nav.attr("md", ""); // Give the drawer a unique id if it dosnt already have one

        var id = $nav.attr("id") || Photon.guid();
        $nav.attr("id", id); // Define $modal

        $("<div class=\"modal-close-area\" modal=\"".concat(id, "\"></div>")).appendTo($("body"));
        var $modal = $(".modal-close-area[modal=\"".concat(id, "\"]")); // Cache original transform positions

        var aX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
        var aY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]); // Compare transform positions on every frame

        (function frame() {
          $nav.length !== 0 && requestAnimationFrame(frame); // Get current transform positions

          var tX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
          var tY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]); // Determine by transform if it is open or closed

          Math.abs(tX - aX) < 2 && Math.abs(tY - aY) < 2 ? $nav.removeClass("shadow") && $modal.removeClass("active") : $nav.addClass("shadow") && $modal.addClass("active");
        })(); // On click away from drawer


        $modal.on("click touchstart", function (event) {
          // Stop event spread
          event.stopPropagation(); // Start a transition

          $nav.addClass("transition").removeClass("active"); // Determine the transform of the closed state drawer

          if ($nav.hasClass("from-right")) $nav.css({
            transform: "translateX(100%)"
          });else if ($nav.hasClass("from-bottom")) $nav.css({
            transform: "translateY(100%)"
          });else if ($nav.hasClass("from-top")) $nav.css({
            transform: "translateY(-100%)"
          });else $nav.css({
            transform: "translateX(-100%)"
          }); // End animation

          setTimeout(function () {
            return $nav.removeClass("transition shadow");
          }, 250);
        }); // Is touchdown?

        var state = false;
        $swipe.on("touchstart", function () {
          return state = true;
        }); // On drag stop, determine how to transform to next state

        $swipe.on("touchend", function () {
          // Mark drawer as not dragging and start animation
          state = false;
          $nav.addClass("transition"); // Determine next position

          if ($nav.hasClass("from-right")) {
            var pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
            var s = window.innerWidth - pos > $nav.width() / 2;
            $nav.css({
              transform: s ? "translateX(0%)" : "translateX(100%)"
            });
          } else if ($nav.hasClass("from-bottom")) {
            var _pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);

            var _s = _pos < $nav.height() / 2;

            $nav.css({
              transform: _s ? "translateY(0%)" : "translateY(100%)"
            });
          } else if ($nav.hasClass("from-top")) {
            var _pos2 = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);

            var _s2 = $nav.height() + _pos2 < $nav.height() / 2;

            $nav.css({
              transform: _s2 ? "translateY(-100%)" : "translateY(0%)"
            });
          } else {
            var _pos3 = $nav.width() + parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);

            var _s3 = _pos3 < $nav.width() / 2;

            $nav.css({
              transform: _s3 ? "translateX(-100%)" : "translateX(0%)"
            });
          } // End animation


          setTimeout(function () {
            return $nav.removeClass("transition");
          }, 250);
        }); // On drag

        $swipe.on("touchmove", function (event) {
          // Show drawer
          $nav.removeClass("active"); // If it is not in drag mode, return

          if (!state) return; // Get touch from drag event

          var touch = event.touches[0]; // Determine where drag is and where to move drawer to

          if ($nav.hasClass("from-right")) $nav.css({
            transform: "translateX(".concat(Math.max(touch.clientX - Math.abs(window.innerWidth - $nav.width()), 0), "px)")
          });else if ($nav.hasClass("from-bottom")) $nav.css({
            transform: "translateY(".concat(Math.max(touch.clientY - Math.abs(window.innerHeight - $nav.height()), 0), "px)")
          });else if ($nav.hasClass("from-top")) $nav.css({
            transform: "translateY(".concat(Math.min(touch.clientY - $nav.height(), 0), "px)")
          });else $nav.css({
            transform: "translateX(".concat(Math.min(touch.clientX - $nav.width(), 0), "px)")
          });
        });
        return this;
      }

      _createClass(Drawer, [{
        key: "open",
        value: function open() {
          // Get $nav
          var $nav = this.target; // Open $nav

          $nav.addClass("active transition");
          setTimeout(function () {
            return $nav.removeClass("transition");
          }, 250);
          return this;
        }
      }, {
        key: "close",
        value: function close() {
          // Get $nav
          var $nav = this.target; // Close $nav

          $nav.addClass("transition").removeClass("active");
          setTimeout(function () {
            return $nav.removeClass("transition");
          }, 250);
          return this;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this.target.hasClass("active");
        }
      }]);

      return Drawer;
    }(), Array.prototype.slice.call(arguments));
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Menu Component
/* harmony default export */ __webpack_exports__["default"] = ({
  Menu: function Menu() {
    return _construct( /*#__PURE__*/function () {
      function Menu(target) {
        _classCallCheck(this, Menu);

        // Define $menu from target
        this.target = $(target);
        var $menu = this.target; // Make sure were not adding listeners that are already there

        if ($menu.is("[md]")) return this;
        $menu.attr("md", ""); // Append modal close target to DOM

        var id = $menu.attr("id") || Photon.guid();
        $menu.attr("id", id);
        $("<div class=\"modal-close-area transparent\" modal=\"".concat(id, "\"></div>")).appendTo($("body"));
        var $modal = $(".modal-close-area[modal=\"".concat(id, "\"]")); // Close menu on click from menu or modal

        [$menu, $modal].map(function (e) {
          return e.on("click", function (event) {
            event.stopPropagation();
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br active");
            $modal.removeClass("active");
          });
        });
        return this;
      }

      _createClass(Menu, [{
        key: "anchor",
        value: function anchor(x, y) {
          // Get $menu
          var $menu = this.target;

          if (y === undefined) {
            // If anchoring to element
            var $anchor = $(x);
            x = $anchor.offset().left;
            y = $anchor.offset().top;
            $menu.css({
              left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8),
              top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8)
            });
          } else {
            // If anchoring to a fixed position
            $menu.css({
              left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8),
              top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8)
            });
          } // Determine anchor origin


          if (x < window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tl");
          if (x > window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tr");
          if (x < window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-bl");
          if (x > window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-br");
          return this;
        }
      }, {
        key: "open",
        value: function open() {
          // Get $menu and $modal
          var $menu = this.target;
          var $modal = $(".modal-close-area[modal=\"".concat($menu.attr("id"), "\"]")); // Activate both

          [$menu, $modal].map(function (e) {
            return e.addClass("active");
          });
          return this;
        }
      }, {
        key: "close",
        value: function close() {
          // Get $menu and $modal
          var $menu = this.target;
          var $modal = $(".modal-close-area[modal=\"".concat($menu.attr("id"), "\"]")); // Deactivate both

          [$menu, $modal].map(function (e) {
            return e.removeClass("active");
          });
          return this;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this.target.hasClass("active");
        }
      }]);

      return Menu;
    }(), Array.prototype.slice.call(arguments));
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* harmony default export */ __webpack_exports__["default"] = ({
  Slider: function Slider() {
    var _temp;

    return _construct((_temp = /*#__PURE__*/function () {
      _createClass(Slider, [{
        key: "__jumpTo",

        /**@private*/
        value: function __jumpTo(X) {
          var _this2 = this;

          // Get $slider and load into class scope
          var $slider = this.target.length === 0 ? $(this.target.prevObject[0]) : this.target; // Ensure X is within bounds

          X = Math.max(Math.min(X, $slider.width() - 20), 0); // Get parts of the slider

          var $thumb = $slider.children(".thumb");
          var $determinate = $slider.children(".determinate"); // Start animation

          $thumb.addClass("transition");
          $determinate.addClass("transition"); // Go To

          $thumb.css({
            left: X
          });
          $determinate.css({
            width: X + 10
          });
          setTimeout(function () {
            return $thumb.removeClass("transition");
          }, 150);
          setTimeout(function () {
            return $determinate.removeClass("transition");
          }, 150); // Fire change event

          setTimeout(function () {
            return _this2.__fireChange();
          }, 150);
        }
        /**@private*/

      }, {
        key: "__fireChange",
        value: function __fireChange() {
          var _this3 = this;

          this.__changeHooks.map(function (hook) {
            return hook(_this3.value);
          });
        }
        /**@private*/

      }, {
        key: "__withinBounds",
        value: function __withinBounds(val) {
          return val * (this.bounds.max - this.bounds.min);
        }
        /**@private*/

      }]);

      function Slider(target) {
        _classCallCheck(this, Slider);

        _defineProperty(this, "__changeHooks", []);

        // Get $slider and load into class scope
        var $slider = this.target = $(target).children(".slider-field");
        this.setBounds(parseInt($slider.data("bounds-min")) || 0, parseInt($slider.data("bounds-max")) || 1);
        if ($(target).attr("md") === "") return; // Get parts of the slider

        var $thumb = $slider.children(".thumb");
        var $determinate = $slider.children(".determinate"); // Store touch down

        var localState = false; // Store local instance

        var _this = this; // On thumb drag


        $thumb.on("mousedown touchstart", function () {
          return localState = true;
        }); // On thumb release

        $(document).on("mouseup touchend", function () {
          return localState = false;
        }); // On thumb move

        $(document).on("mousemove touchmove", function (event) {
          // If dragging
          if (!localState) return; // Move thumb and deter progress

          var X = Math.max(Math.min((event.hasOwnProperty("changedTouches") && event.changedTouches[0] || event).clientX - $slider.offset().left - 10, $slider.width() - 20), 0); // Go To

          $thumb.css({
            left: X
          });
          $determinate.css({
            width: X + 10
          });

          _this.__fireChange();
        }); // On jump click

        $slider.on("click", function (event) {
          // Get X
          var X = event.clientX - $slider.offset().left - 10; // Animate jump

          _this.__jumpTo(X);
        });
        $(target).attr("md", ""); // Return instance;

        return this;
      }

      _createClass(Slider, [{
        key: "setBounds",
        value: function setBounds(min, max) {
          // Get $slider
          var $slider = $(this.target); // Load bounds into class scope

          this.bounds = {
            min: min,
            max: max
          }; // Make $slider reflect bounds

          $slider.data("bounds-min", min);
          $slider.data("bounds-max", max); // Return instance;

          return this;
        }
      }, {
        key: "increment",
        value: function increment(amnt) {
          // Get $slider
          var $slider = $(this.target);
          var $determinate = $slider.children(".determinate"); // Get X

          var X = ($determinate.width() || 0) + amnt / 2 + (amnt > 0 ? 0 : -20); // Animate jump

          this.__jumpTo(X);

          $slider.click();
        }
      }, {
        key: "onChange",
        value: function onChange(change) {
          // Add to hooks
          this.__changeHooks.push(change); // Return instance;


          return this;
        }
      }, {
        key: "set",
        value: function set(value) {
          // Get $slider
          var $slider = $(this.target);
          var _this$bounds = this.bounds,
              min = _this$bounds.min,
              max = _this$bounds.max;

          this.__jumpTo((value - min) / (max - min) * ($slider.width() - 20));

          $slider.click();
          return this;
        }
      }, {
        key: "value",
        get: function get() {
          // Get $slider
          var $slider = this.target.length === 0 ? $(this.target.prevObject[0]) : $(this.target[0]);
          var $determinate = $slider.children(".determinate");
          return this.__withinBounds($determinate.width() - 10) / ($slider.width() - 20) + this.bounds.min;
        }
      }]);

      return Slider;
    }(), _temp), Array.prototype.slice.call(arguments));
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* harmony default export */ __webpack_exports__["default"] = ({
  Snackbar: function Snackbar() {
    return new ( /*#__PURE__*/function () {
      function Snackbar(_ref) {
        var _this = this;

        var content = _ref.content,
            duration = _ref.duration,
            classes = _ref.classes,
            action = _ref.action;

        _classCallCheck(this, Snackbar);

        // Load arguments into class scope
        this.content = content;
        this.duration = duration; // Create a snackbar container if it dosnt already exist

        $(".snackbar-container").length === 0 && $("<div class=\"snackbar-container\"></div>").appendTo("body"); // Generate unique id for snackbar

        var guid = this.guid = Photon.guid(); // Append snackbar to container

        $("<div class=\"".concat(["snackbar"].concat(_toConsumableArray(classes.split(" "))).join(" "), "\" id=\"").concat(guid, "\"><div class=\"label\">").concat(content, "</div>").concat(action === false ? "" : "<button id=\"".concat(guid, "-action\" class=\"btn flat waves-effect accent\">").concat(action.name, "</button>"), "</div>")).appendTo(".snackbar-container");
        var $snackbar = $("#".concat(guid)); // Add click event to action if it exists

        action !== false && $("#".concat(guid, "-action")).click(function () {
          return action.click(_this);
        }); // Animate in

        requestAnimationFrame(function () {
          return $snackbar.addClass("active");
        }); // Queue auto-close

        var autoclose = setTimeout(function () {
          return _this.close();
        }, duration); // On snackbar interact, reset autoclose timer

        $snackbar.on("click mousedown touchstart mouseup touchend", function () {
          clearTimeout(autoclose);
          autoclose = setTimeout(function () {
            return _this.close();
          }, duration);
        });
        return this;
      }

      _createClass(Snackbar, [{
        key: "close",
        value: function close() {
          // Get $snackbar
          var $snackbar = $("#".concat(this.guid)); // Close snackbar

          $snackbar.removeClass("active");
          setTimeout(function () {
            return $snackbar.remove();
          }, 250);
          return this;
        }
      }]);

      return Snackbar;
    }())(_objectSpread({
      content: "",
      duration: 10000,
      classes: "",
      action: false
    }, arguments[0]));
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* harmony default export */ __webpack_exports__["default"] = ({
  Tabs: function Tabs() {
    return _construct( /*#__PURE__*/function () {
      _createClass(Tabs, [{
        key: "__moveIndicatorTo",

        /**@private*/
        value: function __moveIndicatorTo($tab) {
          // Get $tabs and $indicator
          var $tabs = this.target;
          var $indicator = $tabs.children(".indicator"); // Start transition

          $indicator.addClass("transition-to-" + ($indicator.offset().left > $tab.offset().left ? "left" : "right")); // Math to calc positions

          var calcRightPos = function calcRightPos(el) {
            return Math.ceil($tabs.width() - el.position().left - el[0].getBoundingClientRect().width - $tabs.scrollLeft()) + el[0].clientWidth / 2 - el[0].clientWidth / 2;
          };

          var calcLeftPos = function calcLeftPos(el) {
            return Math.floor(el.position().left + $tabs.scrollLeft()) + el[0].clientWidth / 2 - el.width() / 2 - 12;
          }; // Animate indicator


          $indicator.css({
            left: calcLeftPos($tab),
            right: calcRightPos($tab)
          }); // End transition

          setTimeout(function () {
            return $indicator.removeClass("transition-to-left transition-to-right");
          }, 250);
        }
      }]);

      function Tabs(target) {
        _classCallCheck(this, Tabs);

        // Define $tabs
        var $tabs = this.target = $(target); // If component was already processed

        if ($tabs.attr("md") === "") return; // Create $indicator

        $("<div class=\"indicator\"></div>").appendTo($tabs); // Proxy this

        var _this = this; // On tab click


        $tabs.children(".tab").on("click", function () {
          // Get clicked tab
          var $tab = $(this); // If tab is disabled return

          if ($tab.hasClass("disabled")) return;
          var htmlFor = $(this).attr("for");
          htmlFor && $(document.getElementById(htmlFor)).addClass("active").siblings(".tab-content").removeClass("active"); // Add active class to that tab and remove from others

          $tab.addClass("active").siblings(".tab").removeClass("active"); // Move indicator to this tab

          _this.__moveIndicatorTo($tab);
        }); // Get $tab children

        var $tab = $tabs.children(".tab"); // Select active or first tab

        var state = false;
        $tab.each(function () {
          if ($(this).hasClass("active")) {
            state = true;
            $(this).click();
          }
        });
        state === false && $tab.first().click(); // Flag component as processed

        $tabs.attr("md", "");
      }

      _createClass(Tabs, [{
        key: "set",
        value: function set($tab) {
          // Trigger click on $tab
          $tab.click();
        }
      }]);

      return Tabs;
    }(), Array.prototype.slice.call(arguments));
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);