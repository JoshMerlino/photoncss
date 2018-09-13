!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&!1!==c.apply(a[e],d);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.apply(a[e],d))break}else if(g)for(;e<f&&!1!==c.call(a[e],e,a[e]);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.call(a[e],e,a[e]))break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position.toLowerCase();)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),!1===c&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&!0!==a?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(!0!==s.resume)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(!0!==f.loop&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&!0!==f.loop&&h(e),m&&!0===f.loop&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),!1!==f.queue&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(!1!==y.State.calls[p]){i=!0;break}!1===i&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(b.navigator.userAgent),isAndroid:/Android/i.test(b.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(b.navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(b.navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:2},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b||"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&!0===k.isAnimating&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
;if(!(k&&k.isSVG||"tween"===l||!1!==A.Names.prefixCheck(l)[1]||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),!1===y.State.isTicking&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&!1!==i.queue&&o.queue(a,i.queue,function(b,c){if(!0===c)return!0;y.velocityQueueEntryFlag=!0;var d=y.State.delayedElements.count++;y.State.delayedElements[d]=a;var e=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(d);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:e}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(!1!==y.mock&&(!0===y.mock?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,!1===i.queue)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(!0===b)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&!1===v.promiseRejectEmpty?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||!0!==v&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue))return!0;o.each(r,function(c,d){if(d===e)if((!0===v||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&(!0===f||""===f)&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return!0===j.backwards&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
(function() {$.fn.actualWidth = function() {return this.width() + parseInt(this.css("padding-left")) + parseInt(this.css("padding-right"));};$.fn.actualHeight = function() {return this.height() + parseInt(this.css("padding-top")) + parseInt(this.css("padding-bottom"));}}(jQuery));
;(function(){$.nest = function(nest){var n = nest.split(" ");var s = $(n[0]);n.shift();$.each(n,function(i){s = s.children(n[i]);});return s;}}());(function(window) {var factory = function() {'use strict';var Waves = Waves || {};var $$ = document.querySelectorAll.bind(document);var toString = Object.prototype.toString;var isTouchAvailable = 'ontouchstart' in window;function isWindow(obj) {return obj !== null && obj === obj.window;}function getWindow(elem) {return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;}function isObject(value) {var type = typeof value;return type === 'function' || type === 'object' && !!value;}function isDOMNode(obj) {return isObject(obj) && obj.nodeType > 0;}function getWavesElements(nodes) {var stringRepr = toString.call(nodes);if (stringRepr === '[object String]') {return $$(nodes);} else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {return nodes;} else if (isDOMNode(nodes)) {return [nodes];}return [];}function offset(elem) {var docElem, win,box = {top: 0,left: 0},doc = elem && elem.ownerDocument;docElem = doc.documentElement;if (typeof elem.getBoundingClientRect !== typeof undefined) {box = elem.getBoundingClientRect();}win = getWindow(doc);return {top: box.top + win.pageYOffset - docElem.clientTop,left: box.left + win.pageXOffset - docElem.clientLeft};}function convertStyle(styleObj) {var style = '';for (var prop in styleObj) {if (styleObj.hasOwnProperty(prop)) {style += (prop + ':' + styleObj[prop] + ';');}}return style;}var Effect = {duration: $(this).width(),delay: 2000,show: function(e, element, velocity) {if (e.button === 2) {return false;}element = element || this;var ripple = document.createElement('div');ripple.className = 'waves-ripple waves-rippling';element.appendChild(ripple);var pos = offset(element);var relativeY = 0;var relativeX = 0;if ('touches' in e && e.touches.length) {relativeY = (e.touches[0].pageY - pos.top);relativeX = (e.touches[0].pageX - pos.left);}else {relativeY = (e.pageY - pos.top);relativeX = (e.pageX - pos.left);}relativeX = relativeX >= 0 ? relativeX : 0;relativeY = relativeY >= 0 ? relativeY : 0;var wavesfn = function(a, e) {

	/*
	a = $(a);
	var x = relativeX,
		y = relativeY;
	if (x > a.actualWidth() / 2) {
		x = a.actualWidth() - x;
	}
	if (y > a.actualHeight() / 2) {
		y = a.actualHeight() - y;
	}
	x = a.actualWidth() - x;
	y = a.actualHeight() - y;

	var l = x;
	if (y > x) {
		l = y;
	}
	if (a.hasClass("waves-ink")) {
		return a.actualWidth() / 100;
	} else {
		return l / 46;
	}
	*/

	///*
	var a = $(a),
		d = 52,
		dj = 0.118,
		dx = 1.019,
		dy = 0.350,
		f = 1,
		h = a.actualHeight(),
		w = a.actualWidth(),
		x = relativeX,
		y = relativeY;

	if (x > w / 2) {
		x = w - x;
	}
	if (y > h / 2) {
		y = h - y;
	}

	x = w - x;
	y = h / 2 - y;

	f = (x * dx + y * dy + ((h + w) / 2) * dj) / d;

	if(a.hasClass("waves-ink")){
		return 0.475;
	}

	return f;
	//*/

};var scale = 'scale(' + wavesfn(element, e) + ')';
var translate = 'translate(0,0)';if (velocity) {translate = 'translate(' + (velocity.x) + 'px, ' + (velocity.y) + 'px)';}ripple.setAttribute('data-hold', Date.now());ripple.setAttribute('data-x', relativeX);ripple.setAttribute('data-y', relativeY);ripple.setAttribute('data-scale', scale);ripple.setAttribute('data-translate', translate);var rippleStyle = {top: relativeY + 'px',left: relativeX + 'px'};ripple.classList.add('waves-notransition');ripple.setAttribute('style', convertStyle(rippleStyle));ripple.classList.remove('waves-notransition');rippleStyle['-webkit-transform'] = scale + ' ' + translate;rippleStyle['-moz-transform'] = scale + ' ' + translate;rippleStyle['-ms-transform'] = scale + ' ' + translate;rippleStyle['-o-transform'] = scale + ' ' + translate;rippleStyle.transform = scale + ' ' + translate;var duration = e.type === 'mousemove' ? 750 : Effect.duration;rippleStyle['-webkit-transition-duration'] = duration + 'ms';rippleStyle['-moz-transition-duration'] = duration + 'ms';rippleStyle['-o-transition-duration'] = duration + 'ms';rippleStyle['transition-duration'] = duration + 'ms';ripple.setAttribute('style', convertStyle(rippleStyle));},hide: function(e, element) {element = element || this;var ripples = element.getElementsByClassName('waves-rippling');for (var i = 0, len = ripples.length; i < len; i++) {removeRipple(e, element, ripples[i]);}if (isTouchAvailable) {element.removeEventListener('touchend', Effect.hide);element.removeEventListener('touchcancel', Effect.hide);}element.removeEventListener('mouseup', Effect.hide);element.removeEventListener('mouseleave', Effect.hide);}};var TagWrapper = {input: function(element) {var parent = element.parentNode;if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {return;}var wrapper = document.createElement('i');wrapper.className = element.className + ' waves-input-wrapper';element.className = 'waves-button-input';parent.replaceChild(wrapper, element);wrapper.appendChild(element);var elementStyle = window.getComputedStyle(element, null);var color = elementStyle.color;var backgroundColor = elementStyle.backgroundColor;wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);element.setAttribute('style', 'background-color:rgba(0,0,0,0);');},img: function(element) {var parent = element.parentNode;if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {return;}var wrapper = document.createElement('i');parent.replaceChild(wrapper, element);wrapper.appendChild(element);}};function removeRipple(e, el, ripple) {if (!ripple) {return;}ripple.classList.remove('waves-rippling');var relativeX = ripple.getAttribute('data-x');var relativeY = ripple.getAttribute('data-y');var scale = ripple.getAttribute('data-scale');var translate = ripple.getAttribute('data-translate');var diff = Date.now() - Number(ripple.getAttribute('data-hold'));var delay = 0;if (e.type === 'mousemove') {delay = 150;}var duration = e.type === 'mousemove' ? 750 : Effect.duration;setTimeout(function() {var style = {top: relativeY + 'px',left: relativeX + 'px',opacity: '0','-webkit-transition-duration': duration + 'ms','-moz-transition-duration': duration + 'ms','-o-transition-duration': duration + 'ms','transition-duration': duration + 'ms','-webkit-transform': scale + ' ' + translate,'-moz-transform': scale + ' ' + translate,'-ms-transform': scale + ' ' + translate,'-o-transform': scale + ' ' + translate,'transform': scale + ' ' + translate};ripple.setAttribute('style', convertStyle(style));setTimeout(function() {try {el.removeChild(ripple);} catch (e) {return false;}}, duration);}, delay);}var TouchHandler = {touches: 0,allowEvent: function(e) {var allow = true;if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {allow = false;}return allow;},registerEvent: function(e) {var eType = e.type;if (eType === 'touchstart') {TouchHandler.touches += 1;} else if (/^(touchend|touchcancel)$/.test(eType)) {setTimeout(function() {if (TouchHandler.touches) {TouchHandler.touches -= 1;}}, 500);}}};function getWavesEffectElement(e) {if (TouchHandler.allowEvent(e) === false) {return null;}var element = null;var target = e.target || e.srcElement;while (target.parentElement) {if ((!(target instanceof SVGElement)) && target.classList.contains('waves-effect')) {element = target;break;}target = target.parentElement;}return element;}function showEffect(e) {var element = getWavesEffectElement(e);if (element !== null) {if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {return;}TouchHandler.registerEvent(e);if (e.type === 'touchstart' && Effect.delay) {var hidden = false;var timer = setTimeout(function() {timer = null;Effect.show(e, element);}, Effect.delay);var hideEffect = function(hideEvent) {if (timer) {clearTimeout(timer);timer = null;Effect.show(e, element);}if (!hidden) {hidden = true;Effect.hide(hideEvent, element);}removeListeners();};var touchMove = function(moveEvent) {if (timer) {clearTimeout(timer);timer = null;}hideEffect(moveEvent);removeListeners();};element.addEventListener('touchmove', touchMove, false);element.addEventListener('touchend', hideEffect, false);element.addEventListener('touchcancel', hideEffect, false);var removeListeners = function() {element.removeEventListener('touchmove', touchMove);element.removeEventListener('touchend', hideEffect);element.removeEventListener('touchcancel', hideEffect);};} else {Effect.show(e, element);if (isTouchAvailable) {element.addEventListener('touchend', Effect.hide, false);element.addEventListener('touchcancel', Effect.hide, false);}element.addEventListener('mouseup', Effect.hide, false);element.addEventListener('mouseleave', Effect.hide, false);}}}Waves.init = function(options) {var body = document.body;options = options || {};if ('duration' in options) {Effect.duration = options.duration;}if ('delay' in options) {Effect.delay = options.delay;}if (isTouchAvailable) {body.addEventListener('touchstart', showEffect, false);body.addEventListener('touchcancel', TouchHandler.registerEvent, false);body.addEventListener('touchend', TouchHandler.registerEvent, false);}body.addEventListener('mousedown', showEffect, false);};Waves.attach = function(elements, classes) {elements = getWavesElements(elements);if (toString.call(classes) === '[object Array]') {classes = classes.join(' ');};classes = classes ? ' ' + classes : '';var element, tagName;for (var i = 0, len = elements.length; i < len; i++) {element = elements[i];tagName = element.tagName.toLowerCase();if (['input', 'img'].indexOf(tagName) !== -1) {TagWrapper[tagName](element);element = element.parentElement;}if (element.className.indexOf('waves-effect') === -1) {element.className += ' waves-effect' + classes;}}};Waves.ripple = function(elements, options) {elements = getWavesElements(elements);var elementsLen = elements.length;options = options || {};options.wait = options.wait || 0;options.position = options.position || null;if (elementsLen) {var element, pos, off, centre = {},i = 0;var mousedown = {type: 'mousedown',button: 1};var hideRipple = function(mouseup, element) {return function() {Effect.hide(mouseup, element);};};for (; i < elementsLen; i++) {element = elements[i];pos = options.position || {x: element.clientWidth / 2,y: element.clientHeight / 2};off = offset(element);centre.x = off.left + pos.x;centre.y = off.top + pos.y;mousedown.pageX = centre.x;mousedown.pageY = centre.y;Effect.show(mousedown, element);if (options.wait >= 0 && options.wait !== null) {var mouseup = {type: 'mouseup',button: 1};setTimeout(hideRipple(mouseup, element), options.wait);}}}};Waves.calm = function(elements) {elements = getWavesElements(elements);var mouseup = {type: 'mouseup',button: 1};for (var i = 0, len = elements.length; i < len; i++) {Effect.hide(mouseup, elements[i]);}};Waves.displayEffect = function(options) {Waves.init(options);};return Waves;};$(() => {$(".waves-effect").on("touchstart", function(e) {var x = e.targetTouches[0].pageX - $(this).offset().left;var y = e.targetTouches[0].pageY - $(this).offset().top;Waves.ripple(this, {wait: 1e10,position: $(this).hasClass("waves-ink") ? null : {x: x,y: y}});}).on("touchend", function(e) {Waves.calm(this);})}); if (typeof define === 'function' && define.amd) {define([], function() {window.Waves = factory.call(window);return window.Waves;});}else if (typeof exports === 'object') {module.exports = factory.call(window);}else {window.Waves = factory.call(window);}})(window);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}} return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var Photon = {
	theme: {
		colors: {
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
			"deeppurple": {
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
			"lightblue": {
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
			"lightgreen": {
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
			"deeporange": {
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
		},
		getTheme: function() {
			var rules = {
				"darkPrimaryColor": null,
				"primaryColor": null,
				"lightPrimaryColor": null,
				"textPrimaryColor": null,
				"accentColor": null,
				"primaryTextColor": null,
				"secondaryTextColor": null,
				"dividerColor": null
			}

			for (var i = 0, n = document.styleSheets.length; i < n; i++) {
				$.each(document.styleSheets[i].cssRules, function(i, v) {
					$.each(rules, function(i) {
						if (".photon-" + i == v["selectorText"]) {
							rules[i] = "#" + v["cssText"].split("#")[1].split(";")[0]
						}
					});
				});
			}

			return rules;
		},
		setBarColor: function(c) {
			$("head meta[name='theme-color']").remove();
			$("head").append("<meta name=\"theme-color\" content=\"" + c + "\"/>")
		},
		setDarkTheme: function(a) {
			less.modifyVars({
				"@photonDarkTheme":a
			})
		}
	},
	guid: function() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	},
	speed: 150,
	updateTextFields: function() {
		$(".input-field").not(".slider-field").each(function() {
			if ($(this).children("input").val().length > 0) {
				$(this).children("input").addClass("containscontent")
			}
		});
		$(".input-field.backboard").each(function(){
			if($(this).children("label").length == 1) $(this).addClass("containslabel")
		})
	}
}

disableArrowKeyScrolling = false;

window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        if(disableArrowKeyScrolling){
			e.preventDefault();
		}
    }
}, false);

;(function() {

	$.fn.autocomplete = function(){
		this.each(function(){

			var input = $(this).children("input");
			var acopt = $(this).children(".options");

			var selopt = -1;

			$(this).children("label").click(function(e){
				acopt.addClass("active");
				$(this).keyup();
				e.stopPropagation();
			})
			input.focus(function(){
				acopt.addClass("active");
				$(this).keyup();
			}).click(function(e){
				e.stopPropagation();
			}).keyup(function(){
				var v = $(this).val();

				$(this).siblings(".options").children(".option").each(function(){
					if($(this).text().toLowerCase().indexOf(v.toLowerCase()) > -1){
						$(this).show();
					} else {
						$(this).hide();
					}
				})
			})

			$("body").click(function(){
				acopt.removeClass("active");
			});

			acopt.children(".option").click(function(e){
				input.val($(this).text());
				Photon.updateTextFields();
			});

		});

		return this;
	}
	$.fn.collapsible = function(options, methodParam) {
		var defaults = {
			accordion: undefined,
			onOpen: undefined,
			onClose: undefined
		};

		var methodName = options;
		options = $.extend(defaults, options);

		return this.each(function() {

			var $this = $(this);
			var $panel_headers = $(this).find('> li > .collapsible-header');
			var collapsible_type = $this.data("collapsible");

			function accordionOpen(object) {
				$panel_headers = $this.find('> li > .collapsible-header');

				if (object.hasClass('active')) {
					object.parent().addClass('active');
				} else {
					object.parent().removeClass('active');
				}

				if (object.parent().hasClass('active')) {
					object.siblings('.collapsible-body').stop(true, false).slideDown({
						duration: Photon.speed,
						queue: false,
						complete: function() {
							$(this).css('height', '');
						}
					});
				} else {
					object.siblings('.collapsible-body').stop(true, false).slideUp({
						duration: Photon.speed,
						queue: false,
						complete: function() {
							$(this).css('height', '');
						}
					});
				}

				$panel_headers.not(object).removeClass('active').parent().removeClass('active');

				$panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).each(function() {

					if ($(this).is(':visible')) {
						$(this).slideUp({
							duration: Photon.speed,
							queue: false,
							complete: function() {
								$(this).css('height', '');
								execCallbacks($(this).siblings('.collapsible-header'));
							}
						});
					}
				});
			}

			function expandableOpen(object) {
				if (object.hasClass('active')) {
					object.parent().addClass('active');
				} else {
					object.parent().removeClass('active');
				}

				if (object.parent().hasClass('active')) {
					object.siblings('.collapsible-body').stop(true, false).slideDown({
						duration: Photon.speed,
						queue: false,
						complete: function() {
							$(this).css('height', '');
						}
					});
				} else {
					object.siblings('.collapsible-body').stop(true, false).slideUp({
						duration: Photon.speed,
						queue: false,
						complete: function() {
							$(this).css('height', '');
						}
					});
				}
			}

			function collapsibleOpen(object, noToggle) {
				if (!noToggle) {
					object.toggleClass('active');
				}

				if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
					accordionOpen(object);
				} else {
					expandableOpen(object);
				}

				execCallbacks(object);
			}

			function execCallbacks(object) {
				if (object.hasClass('active')) {
					if (typeof(options.onOpen) === "function") {
						options.onOpen.call(this, object.parent());
					}
				} else {
					if (typeof(options.onClose) === "function") {
						options.onClose.call(this, object.parent());
					}
				}
			}

			function isChildrenOfPanelHeader(object) {
				var panelHeader = getPanelHeader(object);
				return panelHeader.length > 0;
			}

			function getPanelHeader(object) {
				return object.closest('li > .collapsible-header');
			}

			function removeEventHandlers() {
				$this.off('click.collapse', '> li > .collapsible-header');
			}

			if (methodName === 'destroy') {
				removeEventHandlers();
				return;
			} else if (methodParam >= 0 &&
				methodParam < $panel_headers.length) {
				var $curr_header = $panel_headers.eq(methodParam);
				if ($curr_header.length && (methodName === 'open' || (methodName === 'close' && $curr_header.hasClass('active')))) {
					collapsibleOpen($curr_header);
				}
				return;
			}

			removeEventHandlers();

			$this.on('click.collapse', '> li > .collapsible-header', function(e) {
				var element = $(e.target);

				if (isChildrenOfPanelHeader(element)) {
					element = getPanelHeader(element);
				}

				collapsibleOpen(element);
			});

			if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
				collapsibleOpen($panel_headers.filter('.active').first(), true);
			} else {
				$panel_headers.filter('.active').each(function() {
					collapsibleOpen($(this), true);
				});
			}
		});
	};
	$.fn.scrollnav = function() {
		this.each(function() {
			$(this).children("li").children("a[go]").click(function() {
				try {
					var stop = $($(this).attr("go"));
					$("html").animate({
						scrollTop: stop.offset().top - stop.height() - 64
					})
				} catch (w) {
					void(w)
				}
			})
			$(this).children("li").children("a[href]").click(function() {
				window.location.href = $(this).attr("href")
			})
		});
		return this;
	}
	$.fn.select = function(){
		this.each(function(){

			var input = $(this).children("input");
			var acopt = $(this).children(".options");

			var selopt = -1;

			input.attr("readonly","true")

			$(this).children("label").click(function(e){
				acopt.addClass("active");
				$(this).keyup();
				e.stopPropagation();
			})
			input.focus(function(){
				acopt.addClass("active");
				disableArrowKeyScrolling = true;
				$(this).keyup();
			}).blur(function(){
				disableArrowKeyScrolling = false;
			}).click(function(e){
				e.stopPropagation();
			}).keydown(function(e){
				if(e.which == 38){
					selopt --;
					if(selopt < 0) selopt = 0;

					var opt = $(acopt.children(".option")[selopt]);
						opt.addClass("active").siblings().removeClass("active");
					input.val(opt.text()).addClass("containscontent");
				} else if(e.which == 40){
					selopt ++;
					if(selopt >= acopt.children(".option").length) selopt = acopt.children(".option").length -1;

					var opt = $(acopt.children(".option")[selopt]);
						opt.addClass("active").siblings().removeClass("active");
					input.val(opt.text()).addClass("containscontent");
				};

				var p = acopt.children(".option.active").index() * 44 - 64;
				acopt.animate({
					scrollTop: p
				}, {
					duration: 175,
					queue: false
				})

			})

			$("body").click(function(){
				acopt.removeClass("active");
			});

			acopt.children(".option").click(function(e){

				selopt = $(this).index();

				var opt = $(acopt.children(".option")[selopt]);
					opt.addClass("active").siblings().removeClass("active");
				input.val(opt.text()).addClass("containscontent");
			}).first().click();

		});
		return this;
	}
	$.fn.sidenav = function(a) {
		var i = this;
		if (a) {
			switch (a.toLowerCase()) {
				case "open":
					i.addClass("active");
					$(".sidenav--xdiv").remove();
					$("body").append("<div class='sidenav--xdiv'></div>");
					break;
				case "close":
					i.addClass("active");
					$(".sidenav--xdiv").remove();
					break;
			}
		}

		$(".sidenav--xdiv").on("touchstart mousedown", function() {
			i.removeClass("active");
			$(this).remove();
		})

		$(".sidenav--draghandle").remove();
		$("body").append("<div class='sidenav--draghandle'></div>");
		$(".sidenav--draghandle").on("touchmove", function(e) {
			e.preventDefault();
			$(this).css({
				left: (e.changedTouches[0].pageX > 300) ? 300 : e.changedTouches[0].pageX
			})

			if (e.changedTouches[0].pageX > 50) {
				$(this).css({
					left: 300
				})
				i.sidenav("open")
			}
		}).on("touchcancel touchend", function() {
			$(this).css({
				left: 0
			})
		})
		return this;
	}
	$.fn.slider = function(s = "",g) {
		this.each(function() {

			var thumb = $(this).children(".thumb");
			var track = $(this).children(".determinate");
			var slider = $(this);

			var value = parseInt($(this).attr("value") || "50");

			thumb.css("left", value + "%");
			track.width(value + "%");

			thumb.on("mousedown touchstart", function() {
				$("body").on("mousemove touchmove", function(e) {

					e.preventDefault();

					var x = (e.pageX || e.changedTouches[0].pageX);
					var o = (x - slider.offset().left - 3) / slider.width() * 100;
					o = o < 0 ? 0 : o
					o = o > 100 ? 100 : o

					thumb.css("left", o + "%");
					track.width(o + "%");

					slider.attr("value",o);

				});
			});

			slider.click(function(e) {
				var x = e.pageX;
				var o = (x - slider.offset().left - 3) / slider.width() * 100;
				o = o < 0 ? 0 : o
				o = o > 100 ? 100 : o

				thumb.animate({
					"left": o + "%"
				}, Photon.speed, "swing");
				track.animate({
					"width": o + "%"
				}, Photon.speed, "swing");

				slider.attr("value",o);

			})

			$("body").on("mouseup touchcancel touchend", function() {
				$(this).off("mousemove touchmove");
			});

		});

		if(s.toLowerCase() == "value"){
			return parseInt(this.attr("value") || "50");
		} else if(s.toLowerCase() == "set"){

			var o = g;

			var thumb = this.children(".thumb");
			var track = this.children(".determinate");
			var slider = this;

			thumb.animate({
				"left": o + "%"
			}, Photon.speed, "swing");
			track.animate({
				"width": o + "%"
			}, Photon.speed, "swing");

			slider.attr("value",o);
		}

		return this;
	}
	$.fn.stepper = function(){
		return this.each(function(){

			var stepper = $(this);
			var stepcounter = $(this).children(".stepper-stepcounter").children(".container");
			var nav = $(this).children(".stepper-nav").children(".container");
			var content = $(this).children(".stepper-content");

			var max = content.children(".step").length,
				step = 1;

			stepcounter.text("Step " + step + " of " + max + function(){
				var title = $(content.children(".step").hide()[step -1]).data("title");
				if(title){
					return " - " + title
				};
			}());

			$(content.children(".step").hide()[step -1]).show();

			function right(){
				step ++;
				if(step == max){
					nav.children(".btn").last().hide();
				} else {
					nav.children(".btn").first().show();
				}

				common(1);
			}
			function left(){

				step --;
				if(step == 1){
					nav.children(".btn").first().hide();
				} else {
					nav.children(".btn").last().show();
				}

				common(-1);
			}

			function common(pos){

				if(step < 1) step = 1;
				if(step > max) step = max;

				stepcounter.text("Step " + step + " of " + max + function(){
					var title = $(content.children(".step")[step -1]).data("title");
					if(title){
						return " - " + title
					};
				}());

				$(content.children(".step").hide()[step -1]).show();
			}

			nav.children(".btn").click(function(){
				if($(this).hasClass("right")){
					right();
				} else {
					left();
				}
			}).first().hide();

			var oe = 0;
			content.on("touchstart",function(e){
				oe = e.changedTouches[0].pageX;
			}).on("touchmove", function(e) {
				e.preventDefault();
			}).on("touchend",function(e){
				var ne = e.changedTouches[0].pageX;
				if((oe - ne) > 200){
					right();
				} else if((oe - ne) < -200){
					left();
				}
			});

		});
	}
	$.fn.tabs = function(methodOrOptions) {
		var methods = {
			init: function(options) {
				var defaults = {
					onShow: null
				};
				options = $.extend(defaults, options);
				var namespace = function(obj) {
					var tagStr = obj.prop('tagName') || '';
					var idStr = obj.attr('id') || '';
					var classStr = obj.attr('class') || '';
					return (tagStr + idStr + classStr).replace(/\s/g, '');
				}($(this));

				return this.each(function(i) {

					var uniqueNamespace = namespace + i;

					// For each set of tabs, we want to keep track of
					// which tab is active and its associated content
					var $this = $(this),
						window_width = $(window).width();

					var $active,
						$content,
						$links = $this.find('li.tab a'),
						$tabs_width = $this.width(),
						$tabs_content = $(),
						$tabs_wrapper,
						$tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
						$indicator,
						index = 0,
						prev_index = 0,
						clicked = false,
						clickedTimeout,
						transition = Photon.speed;

					// Finds right attribute for indicator based on active tab.
					// el: jQuery Object
					var calcRightPos = function(el) {
						return Math.ceil($tabs_width - el.position().left - el[0].getBoundingClientRect().width - $this.scrollLeft());
					};

					// Finds left attribute for indicator based on active tab.
					// el: jQuery Object
					var calcLeftPos = function(el) {
						return Math.floor(el.position().left + $this.scrollLeft());
					};

					// Animates Indicator to active tab.
					// prev_index: Number
					var animateIndicator = function(prev_index) {
						if (index - prev_index >= 0) {
							$indicator.velocity({
								"right": calcRightPos($active)
							}, {
								duration: transition,
								queue: false,
								easing: 'easeOutQuad'
							});
							$indicator.velocity({
								"left": calcLeftPos($active)
							}, {
								duration: transition,
								queue: false,
								easing: 'easeOutQuad',
								delay: 90
							});
						} else {
							$indicator.velocity({
								"left": calcLeftPos($active)
							}, {
								duration: transition,
								queue: false,
								easing: 'easeOutQuad'
							});
							$indicator.velocity({
								"right": calcRightPos($active)
							}, {
								duration: transition,
								queue: false,
								easing: 'easeOutQuad',
								delay: 90
							});
						}
					};

					// If the location.hash matches one of the links, use that as the active tab.
					$active = $($links.filter('[href="' + location.hash + '"]'));

					// If no match is found, use the first link or any with class 'active' as the initial active tab.
					if ($active.length === 0) {
						$active = $(this).find('li.tab a.active').first();
					}
					if ($active.length === 0) {
						$active = $(this).find('li.tab a').first();
					}

					$active.addClass('active');
					index = $links.index($active);
					if (index < 0) {
						index = 0;
					}

					if ($active[0] !== undefined) {
						$content = $($active[0].hash);
						$content.addClass('active');
					}

					// append indicator then set indicator width to tab width
					if (!$this.find('.indicator').length) {
						$this.append('<li class="indicator"></li>');
					}
					$indicator = $this.find('.indicator');

					// we make sure that the indicator is at the end of the tabs
					$this.append($indicator);

					if ($this.is(":visible")) {
						// $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
						// $indicator.css({"left": index * $tab_width});
						setTimeout(function() {
							$indicator.css({
								"right": calcRightPos($active)
							});
							$indicator.css({
								"left": calcLeftPos($active)
							});
						}, 0);
					}
					$(window).off('resize.tabs-' + uniqueNamespace).on('resize.tabs-' + uniqueNamespace, function() {
						$tabs_width = $this.width();
						$tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
						if (index < 0) {
							index = 0;
						}
						if ($tab_width !== 0 && $tabs_width !== 0) {
							$indicator.css({
								"right": calcRightPos($active)
							});
							$indicator.css({
								"left": calcLeftPos($active)
							});
						}
					});

					$this.off('click.tabs').on('click.tabs', 'a', function(e) {
						if ($(this).parent().hasClass('disabled')) {
							e.preventDefault();
							return;
						}

						// Act as regular link if target attribute is specified.
						if (!!$(this).attr("target")) {
							return;
						}

						clicked = true;
						$tabs_width = $this.width();
						$tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

						// Make the old tab inactive.
						$active.removeClass('active');
						var $oldContent = $content;

						// Update the variables with the new link and content
						$active = $(this);
						$content = $(function(hash) {
							return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
						}(this.hash));
						$links = $this.find('li.tab a');
						var activeRect = $active.position();

						// Make the tab active.
						$active.addClass('active');
						prev_index = index;
						index = $links.index($(this));
						if (index < 0) {
							index = 0;
						}
						// Change url to current tab
						// window.location.hash = $active.attr('href');

						// Swap content
						if (options.swipeable) {
							if ($tabs_content.length) {
								$tabs_content.carousel('set', index, function() {
									if (typeof options.onShow === "function") {
										options.onShow.call($this[0], $content);
									}
								});
							}
						} else {
							if ($content !== undefined) {
								$content.show();
								$content.addClass('active');
								if (typeof options.onShow === "function") {
									options.onShow.call(this, $content);
								}
							}

							if ($oldContent !== undefined && !$oldContent.is($content)) {
								$oldContent.hide();
								$oldContent.removeClass('active');
							}
						}

						// Reset clicked state
						clickedTimeout = setTimeout(function() {
							clicked = false;
						}, transition);

						// Update indicator
						animateIndicator(prev_index);

						// Prevent the anchor's default click action
						e.preventDefault();
					});
				});

			},
			select_tab: function(id) {
				this.find('a[href="#' + id + '"]').trigger('click');
			}
		};

		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.tabs');
		}

	};
	$.fn.tooltip = function(options) {
		var timeout = null,
			margin = 5;

		// Defaults
		var defaults = {
			delay: 350,
			tooltip: '',
			position: 'bottom',
			html: false
		};

		// Remove tooltip from the activator
		if (options === "remove") {
			this.each(function() {
				$('#' + $(this).attr('data-tooltip-id')).remove();
				$(this).removeAttr('data-tooltip-id');
				$(this).off('mouseenter.tooltip mouseleave.tooltip');
			});
			return false;
		}

		options = $.extend(defaults, options);


		return this.each(function() {
			var tooltipId = Photon.guid();
			var origin = $(this);

			// Destroy old tooltip
			if (origin.attr('data-tooltip-id')) {
				$('#' + origin.attr('data-tooltip-id')).remove();
			}

			origin.attr('data-tooltip-id', tooltipId);

			// Get attributes.
			var allowHtml, tooltipDelay, tooltipPosition, tooltipText, tooltipEl;
			var setAttributes = function() {
				allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
				tooltipDelay = origin.attr('data-delay');
				tooltipDelay = tooltipDelay === undefined || tooltipDelay === '' ? options.delay : tooltipDelay;
				tooltipPosition = origin.attr('data-position');
				tooltipPosition = tooltipPosition === undefined || tooltipPosition === '' ? options.position : tooltipPosition;
				tooltipText = origin.attr('data-tooltip');
				tooltipText = tooltipText === undefined || tooltipText === '' ? options.tooltip : tooltipText;
			};
			setAttributes();

			var renderTooltipEl = function() {
				var tooltip = $('<div class="material-tooltip ' + options.position + '"></div>');

				// Create Text span
				if (allowHtml) {
					tooltipText = $('<span></span>').html(tooltipText);
				} else {
					tooltipText = $('<span></span>').text(tooltipText);
				}

				// Create tooltip
				tooltip.append(tooltipText).appendTo($('body')).attr('id', tooltipId);
				return tooltip;
			};
			tooltipEl = renderTooltipEl();

			// Destroy previously binded events
			origin.off('mouseenter.tooltip mouseleave.tooltip');
			// Mouse In
			var started = false,
				timeoutRef;
			origin.on({
				'mouseenter.tooltip': function(e) {
					var showTooltip = function() {
						setAttributes();
						started = true;
						tooltipEl.velocity('stop');
						tooltipEl.css({
							visibility: 'visible',
							left: '0px',
							top: '0px'
						});

						// Tooltip positioning
						var originWidth = origin.outerWidth();
						var originHeight = origin.outerHeight();
						var tooltipHeight = tooltipEl.outerHeight();
						var tooltipWidth = tooltipEl.outerWidth();
						var tooltipVerticalMovement = '0px';
						var tooltipHorizontalMovement = '0px';
						var scaleXFactor = 8;
						var scaleYFactor = 8;
						var scaleFactor = 0;
						var targetTop, targetLeft, newCoordinates;

						var repositionWithinScreen = function(x, y, width, height) {
							var newX = x;
							var newY = y;

							if (newX < 0) {
								newX = 4;
							} else if (newX + width > window.innerWidth) {
								newX -= newX + width - window.innerWidth;
							}

							if (newY < 0) {
								newY = 4;
							} else if (newY + height > window.innerHeight + $(window).scrollTop) {
								newY -= newY + height - window.innerHeight;
							}

							return {
								x: newX,
								y: newY
							};
						};

						tooltipEl.removeClass("bottom")
						if (tooltipPosition === "top") {
							// Top Position
							targetTop = origin.offset().top - tooltipHeight - margin;
							targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
							newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
							tooltipVerticalMovement = '-10px';

							tooltipEl.addClass("top");
						}
						// Left Position
						else if (tooltipPosition === "left") {
							targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
							targetLeft = origin.offset().left - tooltipWidth - margin;
							newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

							tooltipHorizontalMovement = '-10px';

							tooltipEl.addClass("left");
						}
						// Right Position
						else if (tooltipPosition === "right") {
							targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
							targetLeft = origin.offset().left + originWidth + margin;
							newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

							tooltipHorizontalMovement = '+10px';

							tooltipEl.addClass("right");
						} else {
							// Bottom Position
							targetTop = origin.offset().top + origin.outerHeight() + margin;
							targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
							newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
							tooltipVerticalMovement = '+10px';

							tooltipEl.addClass("bottom");
						}

						// Set tooptip css placement
						tooltipEl.css({
							top: newCoordinates.y,
							left: newCoordinates.x
						});

						tooltipEl.addClass("active").velocity({
							translateY: tooltipVerticalMovement,
							translateX: tooltipHorizontalMovement
						}, {
							duration: 350,
							queue: false
						}).velocity({
							opacity: 1
						}, {
							duration: Photon.speed,
							delay: 50,
							queue: false
						});
					};

					timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

					// Mouse Out
				},
				'mouseleave.tooltip': function() {
					// Reset State
					started = false;
					clearTimeout(timeoutRef);

					// Animate back
					setTimeout(function() {
						if (started !== true) {
							tooltipEl.removeClass("active").velocity({
								opacity: 0,
								translateY: 0,
								translateX: 0
							}, {
								duration: 225,
								queue: false
							});

						}
					}, 225);
				}
			});
		});
	};

}(jQuery));

;(function($, Vel) {
	'use strict';

	var _defaults = {
		displayLength: Infinity,
		inDuration: Photon.speed,
		outDuration: 375,
		className: undefined,
		completeCallback: undefined,
		activationPercent: 0.8
	};

	var Toast = function() {
		function Toast(message, displayLength, className, completeCallback) {
			_classCallCheck(this, Toast);

			if (!message) {
				return;
			}

			/**
			 * Options for the toast
			 * @member Toast#options
			 */
			this.options = {
				displayLength: displayLength,
				className: className,
				completeCallback: completeCallback
			};

			this.options = $.extend({}, Toast.defaults, this.options);
			this.message = message;

			/**
			 * Describes current pan state toast
			 * @type {Boolean}
			 */
			this.panning = false;

			/**
			 * Time remaining until toast is removed
			 */
			this.timeRemaining = this.options.displayLength;

			if (Toast._toasts.length === 0) {
				Toast._createContainer();
			}

			// Create new toast
			Toast._toasts.push(this);
			var toastElement = this.createToast();
			toastElement.M_Toast = this;
			this.el = toastElement;
			this._animateIn();
			this.setTimer();
		}

		_createClass(Toast, [{
			key: 'createToast',


			/**
			 * Create toast and append it to toast container
			 */
			value: function createToast() {
				var toast = document.createElement('div');
				toast.classList.add('toast');

				// Add custom classes onto toast
				if (this.options.className) {
					var classes = this.options.className.split(' ');
					var i = void 0,
						count = void 0;
					for (i = 0, count = classes.length; i < count; i++) {
						toast.classList.add(classes[i]);
					}
				}

				// Set content
				if (typeof HTMLElement === 'object' ? this.message instanceof HTMLElement : this.message && typeof this.message === 'object' && this.message !== null && this.message.nodeType === 1 && typeof this.message.nodeName === 'string') {
					toast.appendChild(this.message);

					// Check if it is jQuery object
				} else if (this.message instanceof jQuery) {
					$(toast).append(this.message);

					// Insert as text;
				} else {
					if((this.options.className.split(" ") || "").includes("note")){
						toast.innerHTML = "<div class='" + this.options.className + "'><div class='header'></div><div class='content'>" + this.message + "</div></div>"
					} else {
						toast.innerHTML = this.message;
					}
				}

				// Append toasft
				Toast._container.appendChild(toast);
				return toast;
			}

			/**
			 * Animate in toast
			 */

		}, {
			key: '_animateIn',
			value: function _animateIn() {
				// Animate toast in
				$.Velocity(this.el, {
					top: 0,
					opacity: 1
				}, {
					duration: Photon.speed,
					easing: 'easeOutCubic',
					queue: false
				});
			}

			/**
			 * Create setInterval which automatically removes toast when timeRemaining >= 0
			 * has been reached
			 */

		}, {
			key: 'setTimer',
			value: function setTimer() {
				var _this3 = this;

				if (this.timeRemaining !== Infinity) {
					this.counterInterval = setInterval(function() {
						// If toast is not being dragged, decrease its time remaining
						if (!_this3.panning) {
							_this3.timeRemaining -= 20;
						}

						// Animate toast out
						if (_this3.timeRemaining <= 0) {
							_this3.remove();
						}
					}, 20);
				}
			}

			/**
			 * Dismiss toast with animation
			 */

		}, {
			key: 'remove',
			value: function remove() {
				var _this4 = this;

				window.clearInterval(this.counterInterval);
				var activationDistance = this.el.offsetWidth * this.options.activationPercent;

				if (this.wasSwiped) {
					this.el.style.transition = 'transform .05s, opacity .05s';
					this.el.style.transform = 'translateX(' + activationDistance + 'px)';
					this.el.style.opacity = 0;
				}

				$.Velocity(this.el, {
					opacity: 0,
					marginTop: '-40px'
				}, {
					duration: this.options.outDuration,
					easing: 'easeOutExpo',
					queue: false,
					complete: function() {
						// Call the optional callback
						if (typeof _this4.options.completeCallback === 'function') {
							_this4.options.completeCallback();
						}
						// Remove toast from DOM
						_this4.el.parentNode.removeChild(_this4.el);
						Toast._toasts.splice(Toast._toasts.indexOf(_this4), 1);
						if (Toast._toasts.length === 0) {
							Toast._removeContainer();
						}
					}
				});
			}
		}], [{
			key: '_createContainer',


			/**
			 * Append toast container and add event handlers
			 */
			value: function _createContainer() {
				var container = document.createElement('div');
				container.setAttribute('class', 'toast-container');

				// Add event handler
				container.addEventListener('touchstart', Toast._onDragStart);
				container.addEventListener('touchmove', Toast._onDragMove);
				container.addEventListener('touchend', Toast._onDragEnd);

				container.addEventListener('mousedown', Toast._onDragStart);
				document.addEventListener('mousemove', Toast._onDragMove);
				document.addEventListener('mouseup', Toast._onDragEnd);

				document.body.appendChild(container);
				Toast._container = container;
			}

			/**
			 * Remove toast container and event handlers
			 */

		}, {
			key: '_removeContainer',
			value: function _removeContainer() {
				// Add event handler
				document.removeEventListener('mousemove', Toast._onDragMove);
				document.removeEventListener('mouseup', Toast._onDragEnd);

				Toast._container.parentNode.removeChild(Toast._container);
				Toast._container = null;
			}

			/**
			 * Begin drag handler
			 * @param {Event} e
			 */

		}, {
			key: '_onDragStart',
			value: function _onDragStart(e) {
				if (e.target && $(e.target).closest('.toast').length) {
					var $toast = $(e.target).closest('.toast');
					var toast = $toast[0].M_Toast;
					toast.panning = true;
					Toast._draggedToast = toast;
					toast.el.classList.add('panning');
					toast.el.style.transition = '';
					toast.startingXPos = Toast._xPos(e);
					toast.time = Date.now();
					toast.xPos = Toast._xPos(e);
				}
			}

			/**
			 * Drag move handler
			 * @param {Event} e
			 */

		}, {
			key: '_onDragMove',
			value: function _onDragMove(e) {
				if (!!Toast._draggedToast) {
					e.preventDefault();
					var toast = Toast._draggedToast;
					toast.deltaX = Math.abs(toast.xPos - Toast._xPos(e));
					toast.xPos = Toast._xPos(e);
					toast.velocityX = toast.deltaX / (Date.now() - toast.time);
					toast.time = Date.now();

					var totalDeltaX = toast.xPos - toast.startingXPos;
					var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
					toast.el.style.transform = 'translateX(' + totalDeltaX + 'px)';
					toast.el.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
				}
			}

			/**
			 * End drag handler
			 * @param {Event} e
			 */

		}, {
			key: '_onDragEnd',
			value: function _onDragEnd(e) {
				if (!!Toast._draggedToast) {
					var toast = Toast._draggedToast;
					toast.panning = false;
					toast.el.classList.remove('panning');

					var totalDeltaX = toast.xPos - toast.startingXPos;
					var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
					var shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance || toast.velocityX > 1;

					// Remove toast
					if (shouldBeDismissed) {
						toast.wasSwiped = true;
						toast.remove();

						// Animate toast back to original position
					} else {
						toast.el.style.transition = 'transform .2s, opacity .2s';
						toast.el.style.transform = '';
						toast.el.style.opacity = '';
					}
					Toast._draggedToast = null;
				}
			}

			/**
			 * Get x position of mouse or touch event
			 * @param {Event} e
			 */

		}, {
			key: '_xPos',
			value: function _xPos(e) {
				if (e.targetTouches && e.targetTouches.length >= 1) {
					return e.targetTouches[0].clientX;
				}
				// mouse event
				return e.clientX;
			}

			/**
			 * Remove all toasts
			 */

		}, {
			key: 'removeAll',
			value: function removeAll() {
				for (var toastIndex in Toast._toasts) {
					Toast._toasts[toastIndex].remove();
				}
			}
		}, {
			key: 'defaults',
			get: function() {
				return _defaults;
			}
		}]);

		return Toast;
	}();

	/**
	 * @static
	 * @memberof Toast
	 * @type {Array.<Toast>}
	 */


	Toast._toasts = [];

	/**
	 * @static
	 * @memberof Toast
	 */
	Toast._container = null;

	/**
	 * @static
	 * @memberof Toast
	 * @type {Toast}
	 */
	Toast._draggedToast = null;

	Photon.Toast = Toast;
	Photon.toast = function(message, displayLength, className, completeCallback) {
		return new Toast(message, displayLength = 3750, className = "", completeCallback);
	};
})(jQuery, Photon.Vel);

// Dialogs
;(function() {

	Photon.dialog = {
		alert: function(a, b = () => {}) {

			$(".photon-dialog").remove();
			$("body").append("<div class=\"photon-dialog alert\"><div class=\"content\"></div><a class=\"btn waves-effect waves-light\">ok</a></div>")

			$(".photon-dialog .content").text(a);
			$(".photon-dialog .btn").click(function() {
				$(".photon-dialog").removeClass("active")
				setTimeout(() => {
					$(".photon-dialog").remove();
					b();
				}, Photon.speed);
			})
			setTimeout(() => $(".photon-dialog").addClass("active"), 100);

		},
		confirm: function(a, b = () => {}) {

			$(".photon-dialog").remove();
			$("body").append("<div class=\"photon-dialog confirm\"><div class=\"content\"></div><a class=\"btn waves-effect waves-light ok\">ok</a><a class=\"btn waves-effect white grey-text text-darken-2 dense\">cancel</a></div>")

			$(".photon-dialog .content").text(a);
			$(".photon-dialog .btn").click(function() {
				$(".photon-dialog").removeClass("active")
				setTimeout(() => {
					$(".photon-dialog").remove();
					b($(this).hasClass("ok"));
				}, Photon.speed);
			})
			setTimeout(() => $(".photon-dialog").addClass("active"), 100);

		},
		prompt: function(a, b = () => {}) {

			$(".photon-dialog").remove();
			$("body").append("<div class=\"photon-dialog prompt\"><div class=\"content\"></div><div class=\"input-field\"><input type=\"text\"></div><a class=\"btn waves-effect waves-light ok\">ok</a><a class=\"btn waves-effect white grey-text text-darken-2 dense\">cancel</a></div>")

			$(".photon-dialog .content").text(a);
			$(".photon-dialog .btn").click(function() {
				$(".photon-dialog").removeClass("active")
				setTimeout(() => {
					$(".photon-dialog").remove();
					b($(this).siblings(".input-field").children("input").val() || false);
				}, Photon.speed);
			});

			Photon.reload();
			$(".photon-dialog .input-field input").keypress(function(e) {
				if (e.which == 13) {
					$(".photon-dialog .ok").click()
				}
			}).focus();
			setTimeout(() => $(".photon-dialog").addClass("active"), 100);

		}
	}

}())

// Pickers
;(function() {

	Photon.picker = {};

	Photon.picker.date = function(cb = () => {}){

		$("body").append('<div class="date photon-picker"><div class=bar><div class=year></div><div class=date></div></div><div class=yearpick></div><div class=nav><i class="waves-effect material-icons waves-ink right">chevron_right</i> <i class="waves-effect material-icons waves-ink left">chevron_left</i></div><div class=panes><div class=pane><div class=month></div><div class=smtwtfs><div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div></div><div class=calendar></div></div><div class=pane><div class=month></div><div class=smtwtfs><div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div></div><div class=calendar></div></div></div><div class=actions><a class="waves-effect btn ok waves-light">ok</a><a class="waves-effect btn dense grey-text text-darken-2 white">cancel</a></div></div>');

		setTimeout(() => $(".photon-picker").addClass("active"),100);

		$(".photon-picker.date").each(function() {
			var picker = $(this);

			var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

			var ddate = {
				"month":new Date().getMonth(),
				"year":new Date().getYear() + 1900,
				"day":new Date().getDate().toString()
			}

			function getCD(i){
				if(ddate.year == new Date().getYear() +1900){
					if(ddate.month == new Date().getMonth()){
						if(i == new Date().getDate().toString()){
							return " class=\"today\"";
						}
					}
				};
				return "";
			}

			var p1 = picker.children(".panes").children().first();
			var p2 = picker.children(".panes").children().last();

			var fd = new Date(ddate.year, ddate.month, 1).getDay();
			for(var i = 1; i < fd; i++){
				p1.children(".calendar").append("<div class=\"empty\">0</div>")
			}

			var ld = new Date(ddate.year, ddate.month +1, 0).getDate() +1;
			for(var i = 1; i < ld; i++){
				p1.children(".calendar").append("<div" + getCD(i) + ">" + i + "</div>")
			}

			p1.children(".month").text(months[ddate.month]);
			propClicks();

			function goPrevMonth() {

				p2.children(".month").text(months[ddate.month]);

				p2.children(".calendar").empty();
				var fd = new Date(ddate.year, ddate.month, 1).getDay();
				for(var i = 1; i < fd; i++){
					p2.children(".calendar").append("<div class=\"empty\">0</div>")
				}

				var ld = new Date(ddate.year, ddate.month +1, 0).getDate() +1;
				for(var i = 0; i < ld; i++){
					if(i == 0){
						p2.children(".calendar").append("<div class=\"empty\">0</div>")
					} else {
						p2.children(".calendar").append("<div" + getCD(i) + ">" + i + "</div>")
					}
				}

				ddate.month --;
				if(ddate.month == -1){
					ddate.month = 11;
					ddate.year --;
				}

				p1.children(".month").text(months[ddate.month])

				p1.children(".calendar").empty();
				var fd = new Date(ddate.year, ddate.month, 1).getDay();
				for(var i = 1; i < fd; i++){
					p1.children(".calendar").append("<div class=\"empty\">0</div>")
				}

				var ld = new Date(ddate.year, ddate.month +1, 0).getDate() +1;
				for(var i = 0; i < ld; i++){
					if(i == 0){
						p1.children(".calendar").append("<div class=\"empty\">0</div>")
					} else {
						p1.children(".calendar").append("<div" + getCD(i) + ">" + i + "</div>")
					}
				}
			}

			function goNextMonth() {

				p1.children(".month").text(months[ddate.month]);
				p2.children(".calendar").empty();
				var fd = new Date(ddate.year, ddate.month, 1).getDay();
				for(var i = 1; i < fd; i++){
					p2.children(".calendar").append("<div class=\"empty\">0</div>")
				}

				var ld = new Date(ddate.year, ddate.month +1, 0).getDate() +1;
				for(var i = 0; i < ld; i++){
					if(i == 0){
						p2.children(".calendar").append("<div class=\"empty\">0</div>")
					} else {
						p2.children(".calendar").append("<div" + getCD(i) + ">" + i + "</div>")
					}
				}

				ddate.month ++;
				if(ddate.month == 12){
					ddate.month = 0;
					ddate.year ++;
				}

				p2.children(".month").text(months[ddate.month])
				setTimeout(() => p1.children(".month").text(months[ddate.month]),Photon.speed*2)

				p1.children(".calendar").empty();
				var fd = new Date(ddate.year, ddate.month, 1).getDay();
				for(var i = 1; i < fd; i++){
					p1.children(".calendar").append("<div class=\"empty\">0</div>")
				}

				var ld = new Date(ddate.year, ddate.month +1, 0).getDate() +1;
				for(var i = 0; i < ld; i++){
					if(i == 0){
						p1.children(".calendar").append("<div class=\"empty\">0</div>")
					} else {
						p1.children(".calendar").append("<div" + getCD(i) + ">" + i + "</div>")
					}
				}

			}

			function propClicks(){
				picker.children(".panes").children(".pane").children(".calendar").children("div").click(function(){
					var blob = $(this);

					blob.addClass("active").siblings().removeClass("active");
					ddate.day = parseInt(blob.text());

					picker.children(".bar").children(".year").text(ddate.year)
					picker.children(".bar").children(".date").text(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(ddate.year,ddate.month,ddate.day).getDay()] + ", " + months[ddate.month].substr(0,3) + " " + ddate.day);

				});

				picker.children(".bar").children(".year").text(ddate.year)
				picker.children(".bar").children(".date").text(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(ddate.year,ddate.month,ddate.day).getDay()] + ", " + months[ddate.month].substr(0,3) + " " + ddate.day);
			}

			picker.children(".bar").children(".year").click(function(){
				picker.children(".yearpick").show();
				picker.children(".panes").hide();

				var sc = 0;
					sc = picker.children(".yearpick").children(".active").index()*36;

				picker.children(".yearpick")[0].scrollTop = sc;

			});

			for(var i = 1900; i < 2101; i++){
				var g = "";
				if(i == new Date().getYear() + 1900) g = " active";
				picker.children(".yearpick").append("<div class=\"yearsel waves-effect waves-dark" + g + "\">" + i + "</div>");
			}

			picker.children(".yearpick").children(".yearsel").click(function(){

				$(this).addClass("active").siblings().removeClass("active")

				ddate.year = parseInt($(this).text());

				p1.children(".calendar").empty();
				var fd = new Date(ddate.year, ddate.month, 1).getDay();
				for(var i = 1; i < fd; i++){
					p1.children(".calendar").append("<div class=\"empty\">0</div>")
				}

				var ld = new Date(ddate.year, ddate.month +1, 0).getDate() +1;
				for(var i = 1; i < ld; i++){
					p1.children(".calendar").append("<div" + getCD(i) + ">" + i + "</div>")
				}
				picker.children(".bar").children(".year").text(ddate.year);

				picker.children(".yearpick").hide();
				picker.children(".panes").show()
			})

			picker.children(".nav").children().click(function() {
				if ($(this).hasClass("left")) {

					if(picker.hasClass("picker-v")){
						picker.children(".panes").css({
							"right": "0",
							"left": "-100%"
						}).animate({
							"left": "0",
							"right": "-100%"
						},{
							queue:false,
							duration:Photon.speed*2
						});
					} else {
						picker.children(".panes").css({
							"right": "0",
							"left": 0 - picker.width() + 200
						}).animate({
							"left": "200px",
							"right": 0 - picker.width() + 200
						},{
							queue:false,
							duration:Photon.speed*2
						});
					}

					goPrevMonth();
					propClicks();

				} else if ($(this).hasClass("right")) {

					if(picker.hasClass("picker-v")){
						picker.children(".panes").animate({
							"right": "0",
							"left": "-100%"
						},{
							queue:false,
							duration:Photon.speed*2,
							complete:function() {
								$(this).css({
									"left": "0",
									"right": "-100%"
								});
							}
						});
					} else {
						picker.children(".panes").animate({
							"right": "0",
							"left": 0 - picker.width() + 200
						},{
							queue:false,
							duration:Photon.speed*2,
							complete:function() {
								$(this).css({
									"left": "200px",
									"right": 0 - picker.width() + 200
								});
							}
						});
					}

					goNextMonth();
					propClicks();

				}
			});

			picker.children(".actions").children(".btn").click(function(){
				var seldate = [ddate.year,ddate.month+1,ddate.day];
				if($(this).hasClass("ok")){
					cb(seldate);
				} else {
					cb(false);
				}

				picker.removeClass("active");
				setTimeout(() => picker.remove(),Photon.speed);

			})

			Photon.ready();

		})

	}

	Photon.picker.time = function(cb = () => {}){

		$("body").append('<div class="time photon-picker"><div class=bar><div class=time><div class="active hour">12</div><div class=colan>:</div><div class=minute>30</div></div><div class=ampm><div class="active am">AM</div><div class=pm>PM</div></div></div><div class=clocks><div class="active hour clock"><div class=hand></div></div><div class="clock minute"><div class=hand></div></div></div><div class=actions><a class="btn waves-effect ok waves-light">ok</a><a class="btn waves-effect dense grey-text text-darken-2 white">cancel</a></div></div>');

		setTimeout(() => $(".photon-picker").addClass("active"),100);

		$(".photon-picker.time").each(function() {

			var picker = $(this);

			picker.children(".bar").children(".time").click(function(){
				$(this).children(".hour,.minute").toggleClass("active")
				picker.children(".clocks").children(".clock").toggleClass("active");
			})

			picker.children(".bar").children(".ampm").click(function(){
				$(this).children().toggleClass("active")
			});

			picker.children(".clocks").children().each(function(){

				var poses,
					clock = $(this);

				if($(this).hasClass("hour")){
					poses = ["12","1","2","3","4","5","6","7","8","9","10","11"];
				} else {
					poses = ["00","05","10","15","20","25","30","35","40","45","50","55"];
				}

				for(var i = 0; i < 12; i++){
					clock.append("<div class=\"timeblob tbpos-" + i + "\">" + poses[i] + "</div>")
				}

			});

			picker.children(".clocks").children(".hour").children(".timeblob").first().addClass("active");
			picker.children(".clocks").children(".minute").children(".timeblob").eq(6).addClass("active");

			picker.children(".clocks").children(".hour").children(".hand").css("transform","translate(-50%,-50%) rotate(-90deg)");
			picker.children(".clocks").children(".minute").children(".hand").css("transform","translate(-50%,-50%) rotate(90deg)");

			picker.children(".clocks").children(".clock").children(".timeblob").click(function(){
				$(this).addClass("active").siblings(".timeblob").removeClass("active");

				var deg = parseInt($(this).attr("class").split(" ")[1].split("-")[1])*30 - 90;
				$(this).siblings(".hand").css("transform","translate(-50%,-50%) rotate(" + deg + "deg)");

				var nv = $(this).text();
					nv = nv.length < 2 ? "0" + nv:nv;

				setTimeout(function(){
					picker.children(".bar").children(".time").children(".hour,.minute").toggleClass("active")
					picker.children(".clocks").children(".clock").toggleClass("active");

					setTimeout(() => picker.children(".bar").children(".time").children().not(".active").not(".colan").text(nv),10)

				},Photon.speed)

			});

			picker.children(".actions").children(".btn").click(function(){
				var time = picker.children(".bar").children(".time").text() + picker.children(".bar").children(".ampm").children(".active").text().toLowerCase();
				if($(this).hasClass("ok")){
					cb(time);
				} else {
					cb(false);
				}

				picker.removeClass("active");
				setTimeout(() => picker.remove(),Photon.speed);

			})

			Photon.ready();

		});

	}

	setInterval(function(){
		$(".photon-picker").each(function() {
			if(window.innerWidth > window.innerHeight){
				$(this).addClass("picker-h").removeClass("picker-v");
			} else {
				$(this).addClass("picker-v").removeClass("picker-h");
			}
		})
	},100)

}());

Photon.ready = Photon.reload = function() {

	$(".autocomplete").autocomplete();
	$(".collapsible").collapsible();
	$(".scrollnav").scrollnav();
	$(".select").select();
	$(".sidenav").sidenav();
	$(".slider").slider();
	$(".stepper").stepper();
	$(".tabs").tabs();
	$(".tooltipped").tooltip();

	Waves.init();

	$("iframe[src^='https://youtube.com/embed'],iframe[src^='http://youtube.com/embed']").each(function() {
		$(this).attr("height", $(this).width() * (9 / 16));
	})

	$("label").each(function() {
		var f = $("#" + $(this).attr("for"));
		$(this).addClass("for-" + f.attr("type"))
	})

	$(".input-field input,.input-field.select select").on("focus", function(e) {
		$(this).parent().append("<div class=\"bar\"></div>");
		var bar = $(this).siblings(".bar");

		bar.animate({
			left: 0,
			width: "100%"
		}, Photon.speed, "swing");
	}).blur(function() {
		$(this).siblings(".bar").animate({
			width: 0,
			left: "50%"
		}, Photon.speed, "swing", function() {
			$(this).remove();
		})
	}).change(function() {
		if ($(this).val() != "") {
			$(this).addClass("containscontent");
		} else {
			$(this).removeClass("containscontent");
		}
	}).each(function() {
		var t = $(this).parent();
		if ($(this).val() != "") {
			$(this).addClass("containscontent");
		} else {
			$(this).removeClass("containscontent");
		}
		if ($(this).attr("type").toLowerCase() == "password" && !$(this).is(":disabled")) {
			var id = Photon.guid();
			$("#" + id).click(function(e) {
				var i = $(this).siblings("input");
				if (i.attr("type").toLowerCase() == "password") {
					i.attr("type", "text");
					$(this).html("&#xE8F5;");
				} else {
					i.attr("type", "password");
					$(this).html("&#xE8F4;");
				}
				$(this).siblings("input").focus();
			})
		} else if ($(this).attr("type").toLowerCase() == "number") {
			$(this).val($(this).val() || "0").addClass("containscontent");
			$(this).bind("mousewheel", function(e) {
				var v = parseInt($(this).val());
				e.preventDefault();

				function getDelta(g) {
					if (e.originalEvent.deltaY < 0) {
						return g * 1
					} else {
						return g * -1;
					}
				}

				if (e.altKey) {
					v += getDelta(1000)
				} else if (e.ctrlKey) {
					v += getDelta(100)
				} else if (e.shiftKey) {
					v += getDelta(10)
				} else {
					v += getDelta(1)
				}

				$(this).val(v)
			})
		}
	}).siblings("label").click(function() {
		$(this).siblings("input").focus()
	}).each(function() {
		$(this).parent().mouseenter();
	})

	$(".btn.toggle").not(":disabled,.disabled").click(function() {
		$(this).toggleClass("active");
	})

	$(".waves-ink").bind("mousedown", function(e) {
		$(this).children(".waves-ripple").fadeOut(500);
		e.stopPropagation();
		Waves.ripple(this, {
			wait: 1e10
		});
	}).on("mouseup mouseleave", function() {
		Waves.calm(this);
	}).bind("touchstart", function(e) {
		e.stopPropagation()
	})

	setTimeout(() => {
		$(".tabs.auto").each(function() {
			$(this).children(".tab").first().children("a").click()
		})
	}, Photon.speed);

	if($("head").children("meta[name='theme-color']").length == 0){
		Photon.theme.setBarColor(Photon.theme.getTheme()["darkPrimaryColor"]);
	}

	$(() => {
		$(".collapsible").each(function() {
			if($(this).data("collapsible") == "expandable"){
				$(this).children().not(".active").children(".collapsible-header").click().click()
			} else {
				if($(this).children(".active").length != 0){
					$(this).children(".active").first().children(".collapsible-header").click().click()
				} else {
					$(this).children().first().children(".collapsible-header").click().click()
				}
			}
		})
	})

}

$(document).ready(() => Photon.ready());

setInterval(function() {
	if ($("footer").length == 1) {
		if ($("body").height() < $(window).innerHeight() - $("footer").height()) {
			$("footer").addClass("attached-to-bottom")
		} else {
			$("footer").removeClass("attached-to-bottom")
		}
	}
	$(".card-image.parallax").each(function() {
		var t = $(this).children("img")
		var px = ($("html").scrollTop() - t.offset().top * .75) / 20;
		t[0].style.transform = "scale(2) translateY(" + px + "px)";
	});
	Photon.updateTextFields();

	$(".collapsible").each(function(){
		$(this).children().removeClass("adjact");
		$(this).children(".active").prev("li").addClass("adjact");
	})

})
