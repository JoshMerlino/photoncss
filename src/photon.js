!function(e,t){"function"==typeof define&&define.amd?define("Velocity",[],function(){return e.Velocity=t()}):"object"==typeof module&&module.exports?module.exports=t():e.Velocity=t()}(this,function(){var e=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t=["version","RegisterEffect","style","patch","timestamp"],n=400,r=/[\d\.-]/,i={fast:200,normal:400,slow:600};function a(e){return!0===e||!1===e}function o(e){return"number"==typeof e}function s(e){return!isNaN(+e)}function l(e){return"string"==typeof e}function u(e){return"[object Function]"===Object.prototype.toString.call(e)}function c(e){return!(!e||!e.nodeType)}function f(e){return e&&o(e.length)&&u(e.velocity)}function g(e){return e&&e!==window&&o(e.length)&&!l(e)&&!u(e)&&!c(e)&&(0===e.length||c(e[0]))}function d(e){if(!e||"object"!=typeof e||e.nodeType||"[object Object]"!==Object.prototype.toString.call(e))return!1;var t=Object.getPrototypeOf(e);return!t||t.hasOwnProperty("constructor")&&t.constructor===Object}function p(e,t,n){e&&Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n})}var v,m,h,y,b,S,w,E,x,C,N,k,A,O,_,T,P,q,M,I,j,R,V,z,L,F,H,B,D,$,G,Q,W,U,J,Z,K,Y,X,ee,te,ne,re,ie,ae,oe,se=Date.now?Date.now:function(){return(new Date).getTime()};function le(e,t){for(var n=0;n<e.length;)if(e[n++]===t)return!0;return!1}function ue(e){for(var t=0,n=arguments;t<n.length;t++){var r=n[t];if(void 0!==r&&r==r)return r}}function ce(e,t){e instanceof Element&&(e.classList?e.classList.remove(t):e.className=(""+e.className).replace(RegExp("(^|\\s)"+t+"(\\s|$)","gi")," "))}function fe(e){var t=e.velocityData;if(t)return t;for(var n=0,r=0,i=oe.constructors;r<i.length;r++)e instanceof i[r]&&(n|=1<<r);var a={types:n,count:0,computedStyle:null,cache:Object.create(null),queueList:Object.create(null),lastAnimationList:Object.create(null),lastFinishList:Object.create(null)};return Object.defineProperty(e,"velocityData",{value:a}),a}function ge(e,t){return o(e)?e:l(e)?i[e.toLowerCase()]||parseFloat(e.replace("ms","").replace("s","000")):null==t?void 0:ge(t)}function de(e){if(a(e))return e}function pe(e){if(u(e))return e}function ve(e,t){if(u(e))return e}function me(e){var t=ge(e);if(!isNaN(t))return t}function he(e,t){var n=ge(e);if(!isNaN(n)&&n>=0)return n}function ye(e,t,n){var r=oe.Easing;if(l(e))return r.Easings[e];if(u(e))return e;if(Array.isArray(e)){if(1===e.length)return r.generateStep(e[0]);if(2===e.length)return r.generateSpringRK4(e[0],e[1],t);if(4===e.length)return r.generateBezier.apply(null,e)||!1}}function be(e){if(!1===e)return 0;var t=parseInt(e,10);return!isNaN(t)&&t>=0?Math.min(t,60):void 0}function Se(e){if(!1===e)return 0;if(!0===e)return!0;var t=parseInt(e,10);return!isNaN(t)&&t>=0?t:void 0}function we(e,t){if(!1===e||l(e))return e}function Ee(e){if(!1===e)return 0;if(!0===e)return!0;var t=parseInt(e,10);return!isNaN(t)&&t>=0?t:void 0}function xe(e){if(o(e))return e}function Ce(e){if(a(e))return e}function Ne(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n,r,i,o,s,v,m,h=oe.defaults,y=arguments,b=y[0],S=d(b)&&(b.p||d(b.properties)&&!b.properties.names||l(b.properties)),w=0;c(this)?n=[this]:g(this)?(n=Object.assign([],this),f(this)&&(o=this.velocity.animations)):S?(n=Object.assign([],b.elements||b.e),w++):c(b)?(n=Object.assign([],[b]),w++):g(b)&&(n=Object.assign([],b),w++),n&&(p(n,"velocity",Ne.bind(n)),o&&p(n.velocity,"animations",o));var E="reverse"===(r=S?ue(b.properties,b.p):y[w++]),x=!E&&l(r),C=S?ue(b.options,b.o):y[w];d(C)&&(i=C),Promise&&ue(i&&i.promise,h.promise)&&(s=new Promise(function(e,t){m=t,v=function(t){if(f(t)){var n=t&&t.then;n&&(t.then=void 0),e(t),n&&(t.then=n)}else e(t)}}),n&&(p(n,"then",s.then.bind(s)),p(n,"catch",s.catch.bind(s)),s.finally&&p(n,"finally",s.finally.bind(s))));var N=ue(i&&i.promiseRejectEmpty,h.promiseRejectEmpty);if(s&&(n||x?r||(N?m("Velocity: No properties supplied, if that is deliberate then pass `promiseRejectEmpty:false` as an option. Aborting."):v()):N?m("Velocity: No elements supplied, if that is deliberate then pass `promiseRejectEmpty:false` as an option. Aborting."):v()),!n&&!x||!r)return s;if(x){for(var k=[],A=s&&{_promise:s,_resolver:v,_rejecter:m};w<y.length;)k.push(y[w++]);var O=r.replace(/\..*$/,""),_=oe.Actions[O]||oe.Actions.default;if(_){var T=_(k,n,A,r);if(void 0!==T)return T}}else if(d(r)||E){var P={},q=h.sync;if(s&&(p(P,"_promise",s),p(P,"_rejecter",m),p(P,"_resolver",v)),p(P,"_ready",0),p(P,"_started",0),p(P,"_completed",0),p(P,"_total",0),d(i)){P.duration=ue(he(i.duration),h.duration),P.delay=ue(me(i.delay),h.delay),P.easing=ye(ue(i.easing,h.easing),P.duration)||ye(h.easing,P.duration),P.loop=ue(Se(i.loop),h.loop),P.repeat=P.repeatAgain=ue(Ee(i.repeat),h.repeat),null!=i.speed&&(P.speed=ue(xe(i.speed),1)),a(i.promise)&&(P.promise=i.promise),P.queue=ue(we(i.queue),h.queue),i.mobileHA&&!oe.State.isGingerbread&&(P.mobileHA=!0),E||(null!=i.display&&(r.display=i.display),null!=i.visibility&&(r.visibility=i.visibility));var M=pe(i.begin),I=ve(i.complete),j=function(e){if(u(e))return e}(i.progress),R=Ce(i.sync);null!=M&&(P.begin=M),null!=I&&(P.complete=I),null!=j&&(P.progress=j),null!=R&&(q=R)}else if(!S){var V=he(y[w]),z=0;if(void 0!==V&&(z++,P.duration=V),!u(y[w+z])){var L=ye(y[w+z],ue(P&&he(P.duration),h.duration));void 0!==L&&(z++,P.easing=L)}var F=ve(y[w+z]);void 0!==F&&(P.complete=F),P.loop=h.loop,P.repeat=P.repeatAgain=h.repeat}if(E&&!1===P.queue)throw Error("VelocityJS: Cannot reverse a queue:false animation.");var H={_prev:void 0,_next:void 0,_flags:q?32:0,options:P,percentComplete:0,elements:n,ellapsedTime:0,timeStart:0};o=[];for(var B=0;B<n.length;B++){var D=n[B],$=0;if(c(D)){if(E){var G=fe(D).lastAnimationList[P.queue];if(!(r=G&&G.tweens))continue;$|=64&~(64&G._flags)}var Q=Object.assign({element:D,tweens:Object.create(null)},H);P._total++,Q._flags|=$,o.push(Q),E?Q.tweens=r:oe.expandProperties(Q,r),oe.queue(D,Q,P.queue)}}!1===oe.State.isTicking&&oe.tick(),o&&p(n.velocity,"animations",o)}return n||s}if(function(e){function t(t,n){var r=t[0],i=t[1];l(r)&&u(i)&&(e.Actions[r]&&!Object.prototype.propertyIsEnumerable.call(e.Actions,r)||(!0===n?p(e.Actions,r,i):e.Actions[r]=i))}e.Actions=Object.create(null),e.registerAction=t,t(["registerAction",t],!0)}(oe||(oe={})),function(t){t.registerAction(["default",function(r,i,a,o){if(l(o)&&t.Redirects[o]){var s=d(r[0])?r[0]:{},c=e({},s),f=parseFloat(s.duration),g=parseFloat(s.delay)||0;!0===c.backwards&&(i=i.reverse()),i.forEach(function(e,r){parseFloat(c.stagger)?c.delay=g+parseFloat(c.stagger)*r:u(c.stagger)&&(c.delay=g+c.stagger.call(e,r,i.length)),c.drag&&(c.duration=f||(/^(callout|transition)/.test(o)?1e3:n),c.duration=Math.max(c.duration*(c.backwards?1-r/i.length:(r+1)/i.length),.75*c.duration,200)),t.Redirects[o].call(e,e,c,r,i.length,i,a&&a._resolver)})}else{var p="Velocity: First argument ("+o+") was not a property map, a known action, or a registered redirect. Aborting.";a?a._rejecter(Error(p)):window}}],!0)}(oe||(oe={})),function(e){function t(t,n,r){if(e.validateTweens(t),void 0===n||n===ue(t.queue,t.options.queue,r)){if(!(4&t._flags)){var i=t.options;0==i._started++&&(i._first=t,i.begin&&(e.callBegin(t),i.begin=void 0)),t._flags|=4}for(var a in t.tweens){var o=t.tweens[a],s=o[3],l="",u=0;if(s)for(;u<s.length;u++){var c=o[0][u];l+=null==c?s[u]:c}e.CSS.setPropertyValue(t.element,a,l)}e.completeCall(t)}}e.registerAction(["finish",function(n,r,i){var a=we(n[0],!0),o=e.defaults.queue,s=!0===n[void 0===a?0:1];if(f(r)&&r.velocity.animations)for(var l=0,u=r.velocity.animations;l<u.length;l++)t(u[l],a,o);else{for(var c=e.State.first,g=void 0;c=e.State.firstNew;)e.validateTweens(c);for(c=e.State.first;c&&(s||c!==e.State.firstNew);c=g||e.State.firstNew)g=c._next,r&&!le(r,c.element)||t(c,a,o)}i&&(f(r)&&r.velocity.animations&&r.then?r.then(i._resolver):i._resolver(r))}],!0)}(oe||(oe={})),function(e){var t={isExpanded:1,isReady:2,isStarted:4,isStopped:8,isPaused:16,isSync:32,isReverse:64};e.registerAction(["option",function(n,r,i,a){var o,s,l=n[0],u=a.indexOf(".")>=0?a.replace(/^.*\./,""):void 0,c="false"!==u&&we(u,!0),g=n[1];if(!l)return null;if(f(r)&&r.velocity.animations)o=r.velocity.animations;else{o=[];for(var d=e.State.first;d;d=d._next)r.indexOf(d.element)>=0&&ue(d.queue,d.options.queue)===c&&o.push(d);if(r.length>1&&o.length>1){for(var p=1,v=o[0].options;p<o.length;)if(o[p++].options!==v){v=null;break}v&&(o=[o[0]])}}if(void 0===g){var m=[],h=t[l];for(p=0;p<o.length;p++)m.push(void 0===h?ue(o[p][l],o[p].options[l]):0==(o[p]._flags&h));return 1===r.length&&1===o.length?m[0]:m}switch(l){case"cache":g=de(g);break;case"begin":g=pe(g);break;case"complete":g=ve(g);break;case"delay":g=me(g);break;case"duration":g=he(g);break;case"fpsLimit":g=be(g);break;case"loop":g=Se(g);break;case"percentComplete":s=!0,g=parseFloat(g);break;case"repeat":case"repeatAgain":g=Ee(g);break;default:if("_"!==l[0]){var y=parseFloat(g);g==y&&(g=y);break}case"queue":case"promise":case"promiseRejectEmpty":case"easing":case"started":return}if(void 0===g||g!=g)return null;for(p=0;p<o.length;p++){var b=o[p];s?b.timeStart=e.lastTick-ue(b.duration,b.options.duration,e.defaults.duration)*g:b[l]=g}i&&(f(r)&&r.velocity.animations&&r.then?r.then(i._resolver):i._resolver(r))}],!0)}(oe||(oe={})),function(e){function t(e,t,n,r){void 0!==t&&t!==ue(e.queue,e.options.queue,n)||(r?e._flags|=16:e._flags&=-17)}function n(n,r,i,a){var o=0===a.indexOf("pause"),s="false"!==(a.indexOf(".")>=0?a.replace(/^.*\./,""):void 0)&&we(n[0]),l=e.defaults.queue;if(f(r)&&r.velocity.animations)for(var u=0,c=r.velocity.animations;u<c.length;u++)t(c[u],s,l,o);else for(var g=e.State.first;g;)r&&!le(r,g.element)||t(g,s,l,o),g=g._next;i&&(f(r)&&r.velocity.animations&&r.then?r.then(i._resolver):i._resolver(r))}e.registerAction(["pause",n],!0),e.registerAction(["resume",n],!0)}(oe||(oe={})),(oe||(oe={})).registerAction(["reverse",function(e,t,n,r){throw new SyntaxError("VelocityJS: The 'reverse' action is private.")}],!0),function(e){function t(t,n,r){e.validateTweens(t),void 0!==n&&n!==ue(t.queue,t.options.queue,r)||(t._flags|=8,e.completeCall(t))}e.registerAction(["stop",function(n,r,i,a){var o=we(n[0],!0),s=e.defaults.queue,l=!0===n[void 0===o?0:1];if(f(r)&&r.velocity.animations)for(var u=0,c=r.velocity.animations;u<c.length;u++)t(c[u],o,s);else{for(var g=e.State.first,d=void 0;g=e.State.firstNew;)e.validateTweens(g);for(g=e.State.first;g&&(l||g!==e.State.firstNew);g=d||e.State.firstNew)d=g._next,r&&!le(r,g.element)||t(g,o,s)}i&&(f(r)&&r.velocity.animations&&r.then?r.then(i._resolver):i._resolver(r))}],!0)}(oe||(oe={})),function(e){function t(t,n,r,i){var a,s=t[0],u=t[1];if(!s)return null;if(void 0===u&&!d(s)){if(1===n.length)return e.CSS.getPropertyValue(n[0],s);for(var c=[],g=0;g<n.length;g++)c.push(e.CSS.getPropertyValue(n[g],s));return c}if(d(s))for(var p in s)for(g=0;g<n.length;g++){var v=s[p];l(v)||o(v)?e.CSS.setPropertyValue(n[g],p,s[p]):a=(a?a+", ":"")+"Cannot set a property '"+p+"' to an unknown type: "+typeof v}else if(l(u)||o(u))for(g=0;g<n.length;g++)e.CSS.setPropertyValue(n[g],s,u+"");else a="Cannot set a property '"+s+"' to an unknown type: "+typeof u;r&&(a?r._rejecter(a):f(n)&&n.velocity.animations&&n.then?n.then(r._resolver):r._resolver(n))}e.style=function(e,n,r){return t([n,r],e)},e.registerAction(["style",t],!0)}(oe||(oe={})),function(e){function t(t,n,r,i){var a;if(n){if(1!==n.length)throw Error("VelocityJS: Cannot tween more than one element!")}else{if(!t.length)return null;n=[document.body],a=!0}var s,u=t[0],c={elements:n,element:n[0],queue:!1,options:{duration:1e3},tweens:null},f={},g=t[1],p=t[2],v=0;if(l(t[1])?(s=!0,(h={})[t[1]]=t[2],g=h,p=t[3]):Array.isArray(t[1])&&(s=!0,g={tween:t[1]},p=t[2]),!o(u)||u<0||u>1)throw Error("VelocityJS: Must tween a percentage from 0 to 1!");if(!d(g))throw Error("VelocityJS: Cannot tween an invalid property!");if(a)for(var m in g)if(g.hasOwnProperty(m)&&(!Array.isArray(g[m])||g[m].length<2))throw Error("VelocityJS: When not supplying an element you must force-feed values: "+m);var h,y=ye(ue(p,e.defaults.easing),1e3);for(var m in e.expandProperties(c,g),c.tweens){var b=c.tweens[m],S=b[1]||y,w=b[3],E=b[4],x="";if(v++,w)for(var C=0;C<w.length;C++){var N=b[2][C];if(null==N)x+=w[C];else{var k=S(u,N,b[0][C],m);x+=E&&E[C]?Math.round(k):k}}f[m]=x}if(s&&1===v)for(var m in f)if(f.hasOwnProperty(m))return f[m];return f}e.tween=function(e,n,r,i,a){return t(arguments,e)},e.registerAction(["tween",t],!0)}(oe||(oe={})),v=oe||(oe={}),(m=v.State||(v.State={})).isClient=window&&window===window.window,m.isMobile=m.isClient&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),m.isAndroid=m.isClient&&/Android/i.test(navigator.userAgent),m.isGingerbread=m.isClient&&/Android 2\.3\.[3-7]/i.test(navigator.userAgent),m.isChrome=m.isClient&&window.chrome,m.isFirefox=m.isClient&&/Firefox/i.test(navigator.userAgent),m.prefixElement=m.isClient&&document.createElement("div"),m.windowScrollAnchor=m.isClient&&void 0!==window.pageYOffset,m.scrollAnchor=m.windowScrollAnchor?window:!m.isClient||document.documentElement||document.body.parentNode||document.body,m.scrollPropertyLeft=m.windowScrollAnchor?"pageXOffset":"scrollLeft",m.scrollPropertyTop=m.windowScrollAnchor?"pageYOffset":"scrollTop",m.className="velocity-animating",m.isTicking=!1,b=oe||(oe={}),h=b.CSS||(b.CSS={}),y=Object.create(null),h.camelCase=function(e){var t=y[e];return t||(y[e]=e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}))},function(e){function t(e,t,n,r){return"rgba("+parseInt(t,16)+","+parseInt(n,16)+","+parseInt(r,16)+",1)"}e.ColorNames=Object.create(null);var n=/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,r=/#([a-f\d])([a-f\d])([a-f\d])/gi,i=/(rgba?\(\s*)?(\b[a-z]+\b)/g,a=/rgba?\([^\)]+\)/gi,o=/\s+/g;e.fixColors=function(s){return s.replace(n,t).replace(r,function(e,n,r,i){return t(0,n+n,r+r,i+i)}).replace(i,function(t,n,r){return e.ColorNames[r]?(n||"rgba(")+e.ColorNames[r]+(n?"":",1)"):t}).replace(a,function(e){return e.replace(o,"")})}}((S=oe||(oe={})).CSS||(S.CSS={})),function(e){var t={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];e.ColorNames[n]=Math.floor(r/65536)+","+Math.floor(r/256%256)+","+r%256}}((w=oe||(oe={})).CSS||(w.CSS={})),function(e){function t(t,r){var i=fe(t),a=i&&i.computedStyle?i.computedStyle:window.getComputedStyle(t,null),o=0;if(i&&!i.computedStyle&&(i.computedStyle=a),"width"===r||"height"===r){var s="none"===n(t,"display");return s&&e.setPropertyValue(t,"display","auto"),o=E.augmentDimension(t,r,!0),s&&e.setPropertyValue(t,"display","none"),o+""}if((o=a[r])||(o=t.style[r]),"auto"===o)switch(r){case"top":case"left":var l=!0;case"right":case"bottom":var u=n(t,"position");if("fixed"===u||l&&"absolute"===u){o=t.getBoundingClientRect[r]+"px";break}default:o="0px"}return o?o+"":""}function n(e,n,r,i){var a,o=fe(e);if(E.NoCacheNormalizations.has(n)&&(i=!0),!i&&o&&null!=o.cache[n])return a=o.cache[n];for(var s=o.types,l=void 0,u=0;s;s>>=1,u++)1&s&&(l=E.Normalizations[u][n]||l);return a=l?l(e):t(e,n),o&&(o.cache[n]=a),a}e.computePropertyValue=t,e.getPropertyValue=n}((E=oe||(oe={})).CSS||(E.CSS={})),N=oe||(oe={}),x=N.CSS||(N.CSS={}),C=["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],x.getUnit=function(e,t){if(e[t=t||0]&&" "!==e[t])for(var n=0,r=C;n<r.length;n++){var i=r[n],a=0;do{if(a>=i.length)return i;if(i[a]!==e[t+a])break}while(++a)}return""},((k=oe||(oe={})).CSS||(k.CSS={})).RegEx={isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},((A=oe||(oe={})).CSS||(A.CSS={})).setPropertyValue=function(e,t,n){var r=fe(e);if(l(n)&&"c"===n[0]&&"a"===n[1]&&"l"===n[2]&&"c"===n[3]&&"("===n[4]&&"0"===n[5]&&(n=n.replace(/^calc\(0[^\d]* \+ ([^\(\)]+)\)$/,"$1")),r&&r.cache[t]!==n){r.cache[t]=n||void 0;for(var i=r.types,a=void 0,o=0;i;i>>=1,o++)1&i&&(a=A.Normalizations[o][t]||a);a&&a(e,n)||(e.style[t]=n)}},function(e){function t(t){var n=t[0],r=t[1];l(n)&&u(r)&&(e.Easings[n]||(e.Easings[n]=r))}e.Easings=Object.create(null),e.registerEasing=t,t(["linear",function(e,t,n){return t+e*(n-t)}]),t(["swing",function(e,t,n){return t+(.5-Math.cos(e*Math.PI)/2)*(n-t)}]),t(["spring",function(e,t,n){return t+(1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e))*(n-t)}])}((O=oe||(oe={})).Easing||(O.Easing={})),function(e){function t(t,n){e.registerEasing([t,function(e,t,r){return 0===e?t:1===e?r:Math.pow(e,2)*((n+1)*e-n)*(r-t)}])}function n(t,n){e.registerEasing([t,function(e,t,r){return 0===e?t:1===e?r:(Math.pow(--e,2)*((n+1)*e+n)+1)*(r-t)}])}function r(t,n){n*=1.525,e.registerEasing([t,function(e,t,r){return 0===e?t:1===e?r:.5*((e*=2)<1?Math.pow(e,2)*((n+1)*e-n):Math.pow(e-=2,2)*((n+1)*e+n)+2)*(r-t)}])}e.registerBackIn=t,e.registerBackOut=n,e.registerBackInOut=r,t("easeInBack",1.7),n("easeOutBack",1.7),r("easeInOutBack",1.7)}((_=oe||(oe={})).Easing||(_.Easing={})),function(e){function t(e){return Math.min(Math.max(e,0),1)}function n(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function i(e){return 3*e}function a(e,t,a){return((n(t,a)*e+r(t,a))*e+i(t))*e}function o(e,t,a){return 3*n(t,a)*e*e+2*r(t,a)*e+i(t)}function s(e,n,r,i){var s=4,l=.001,u=1e-7,c=10,f=11,g=1/(f-1),d="Float32Array"in window;if(4===arguments.length){for(var p=0;p<4;++p)if("number"!=typeof arguments[p]||isNaN(arguments[p])||!isFinite(arguments[p]))return;e=t(e),r=t(r);var v=d?new Float32Array(f):Array(f),m=!1,h=function(t,o,s,l){return m||S(),0===t?o:1===t?s:e===n&&r===i?o+t*(s-o):o+a(b(t),n,i)*(s-o)};h.getControlPoints=function(){return[{x:e,y:n},{x:r,y:i}]};var y="generateBezier("+[e,n,r,i]+")";return h.toString=function(){return y},h}function b(t){for(var n=0,i=1,d=f-1;i!==d&&v[i]<=t;++i)n+=g;var p=n+(t-v[--i])/(v[i+1]-v[i])*g,m=o(p,e,r);return m>=l?function(t,n){for(var i=0;i<s;++i){var l=o(n,e,r);if(0===l)return n;n-=(a(n,e,r)-t)/l}return n}(t,p):0===m?p:function(t,n,i){var o,s,l=0;do{(o=a(s=n+(i-n)/2,e,r)-t)>0?i=s:n=s}while(Math.abs(o)>u&&++l<c);return s}(t,n,n+g)}function S(){m=!0,e===n&&r===i||function(){for(var t=0;t<f;++t)v[t]=a(t*g,e,r)}()}}e.generateBezier=s;var l=s(.42,0,1,1),u=s(0,0,.58,1),c=s(.42,0,.58,1);e.registerEasing(["ease",s(.25,.1,.25,1)]),e.registerEasing(["easeIn",l]),e.registerEasing(["ease-in",l]),e.registerEasing(["easeOut",u]),e.registerEasing(["ease-out",u]),e.registerEasing(["easeInOut",c]),e.registerEasing(["ease-in-out",c]),e.registerEasing(["easeInSine",s(.47,0,.745,.715)]),e.registerEasing(["easeOutSine",s(.39,.575,.565,1)]),e.registerEasing(["easeInOutSine",s(.445,.05,.55,.95)]),e.registerEasing(["easeInQuad",s(.55,.085,.68,.53)]),e.registerEasing(["easeOutQuad",s(.25,.46,.45,.94)]),e.registerEasing(["easeInOutQuad",s(.455,.03,.515,.955)]),e.registerEasing(["easeInCubic",s(.55,.055,.675,.19)]),e.registerEasing(["easeOutCubic",s(.215,.61,.355,1)]),e.registerEasing(["easeInOutCubic",s(.645,.045,.355,1)]),e.registerEasing(["easeInQuart",s(.895,.03,.685,.22)]),e.registerEasing(["easeOutQuart",s(.165,.84,.44,1)]),e.registerEasing(["easeInOutQuart",s(.77,0,.175,1)]),e.registerEasing(["easeInQuint",s(.755,.05,.855,.06)]),e.registerEasing(["easeOutQuint",s(.23,1,.32,1)]),e.registerEasing(["easeInOutQuint",s(.86,0,.07,1)]),e.registerEasing(["easeInExpo",s(.95,.05,.795,.035)]),e.registerEasing(["easeOutExpo",s(.19,1,.22,1)]),e.registerEasing(["easeInOutExpo",s(1,0,0,1)]),e.registerEasing(["easeInCirc",s(.6,.04,.98,.335)]),e.registerEasing(["easeOutCirc",s(.075,.82,.165,1)]),e.registerEasing(["easeInOutCirc",s(.785,.135,.15,.86)])}((T=oe||(oe={})).Easing||(T.Easing={})),function(e){function t(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function n(e){return 1-t(1-e)}e.registerEasing(["easeInBounce",function(e,t,r){return 0===e?t:1===e?r:n(e)*(r-t)}]),e.registerEasing(["easeOutBounce",function(e,n,r){return 0===e?n:1===e?r:t(e)*(r-n)}]),e.registerEasing(["easeInOutBounce",function(e,r,i){return 0===e?r:1===e?i:(e<.5?.5*n(2*e):.5*t(2*e-1)+.5)*(i-r)}])}((P=oe||(oe={})).Easing||(P.Easing={})),function(e){var t=2*Math.PI;function n(n,r,i){e.registerEasing([n,function(e,n,a){return 0===e?n:1===e?a:-r*Math.pow(2,10*(e-=1))*Math.sin((e-i/t*Math.asin(1/r))*t/i)*(a-n)}])}function r(n,r,i){e.registerEasing([n,function(e,n,a){return 0===e?n:1===e?a:(r*Math.pow(2,-10*e)*Math.sin((e-i/t*Math.asin(1/r))*t/i)+1)*(a-n)}])}function i(n,r,i){e.registerEasing([n,function(e,n,a){if(0===e)return n;if(1===e)return a;var o=i/t*Math.asin(1/r);return((e=2*e-1)<0?r*Math.pow(2,10*e)*Math.sin((e-o)*t/i)*-.5:r*Math.pow(2,-10*e)*Math.sin((e-o)*t/i)*.5+1)*(a-n)}])}e.registerElasticIn=n,e.registerElasticOut=r,e.registerElasticInOut=i,n("easeInElastic",1,.3),r("easeOutElastic",1,.3),i("easeInOutElastic",1,.3*1.5)}((q=oe||(oe={})).Easing||(q.Easing={})),M=oe||(oe={}),function(e){function t(e){return-e.tension*e.x-e.friction*e.v}function n(e,n,r){var i={x:e.x+r.dx*n,v:e.v+r.dv*n,tension:e.tension,friction:e.friction};return{dx:i.v,dv:t(i)}}(M.Easing||(M.Easing={})).generateSpringRK4=function e(r,i,a){var o,s,l,u,c,f,g,d,p,v={x:-1,v:0,tension:parseFloat(r)||500,friction:parseFloat(i)||20},m=[0],h=0,y=null!=a;for(o=y?(h=e(v.tension,v.friction))/a*.016:.016;u=o,c={dx:(l=s||v).v,dv:t(l)},f=n(l,.5*u,c),g=n(l,.5*u,f),d=n(l,u,g),p=1/6*(c.dv+2*(f.dv+g.dv)+d.dv),l.x=l.x+1/6*(c.dx+2*(f.dx+g.dx)+d.dx)*u,l.v=l.v+p*u,m.push(1+(s=l).x),h+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return y?function(e,t,n){return 0===e?t:1===e?n:t+m[e*(m.length-1)|0]*(n-t)}:h}}(),R=oe||(oe={}),I=R.Easing||(R.Easing={}),j={},I.generateStep=function(e){var t=j[e];return t||(j[e]=function(t,n,r){return 0===t?n:1===t?r:n+Math.round(t*e)*(1/e)*(r-n)})},V=oe||(oe={}),(z=V.Easing||(V.Easing={})).registerEasing(["at-start",function(e,t,n){return 0===e?t:n}]),z.registerEasing(["during",function(e,t,n){return 0===e||1===e?t:n}]),z.registerEasing(["at-end",function(e,t,n){return 1===e?n:t}]),function(e){function t(t){var n=t[0],r=t[1],i=t[2];if(!l(n)&&n instanceof Object)if(l(r))if(u(i)){var a=e.constructors.indexOf(n);a<0&&(a=e.constructors.push(n)-1,e.Normalizations[a]=Object.create(null)),e.Normalizations[a][r]=i,!1===t[3]&&e.NoCacheNormalizations.add(r)}else;else;else;}e.Normalizations=[],e.NoCacheNormalizations=new Set,e.constructors=[],e.registerNormalization=t,e.registerAction(["registerNormalization",t])}(oe||(oe={})),function(e){function t(e){return function(t,n){return void 0===n?t.getAttribute(e):(t.setAttribute(e,n),!0)}}var n=document.createElement("div"),r=/^SVG(.*)Element$/,i=/Element$/;Object.getOwnPropertyNames(window).forEach(function(e){var a=r.exec(e);if(a){var o=document.createElementNS("http://www.w3.org/2000/svg",(a[1]||"svg").toLowerCase()),s=o.constructor;for(var c in o){var f=o[c];!l(c)||"o"===c[0]&&"n"===c[1]||c===c.toUpperCase()||i.test(c)||c in n||u(f)||L.registerNormalization([s,c,t(c)])}}})}((L=oe||(oe={})).CSS||(L.CSS={})),function(e){function t(e){return function(t,n){if(void 0===n)try{return t.getBBox()[e]+"px"}catch(e){return"0px"}return t.setAttribute(e,n),!0}}F.registerNormalization([SVGElement,"width",t("width")]),F.registerNormalization([SVGElement,"height",t("height")])}((F=oe||(oe={})).CSS||(F.CSS={})),function(e){function t(t,n,r){if("border-box"===(""+e.CSS.getPropertyValue(t,"boxSizing")).toLowerCase()===r){var i="width"===n?["Left","Right"]:["Top","Bottom"],a=["padding"+i[0],"padding"+i[1],"border"+i[0]+"Width","border"+i[1]+"Width"],o=void 0,s=void 0,l=0;for(o=0;o<a.length;o++)s=parseFloat(e.CSS.getPropertyValue(t,a[o])),isNaN(s)||(l+=s);return r?-l:l}return 0}function n(n,r){return function(i,a){return void 0===a?t(i,n,r)+"px":(e.CSS.setPropertyValue(i,n,parseFloat(a)-t(i,n,r)+"px"),!0)}}e.augmentDimension=t,e.registerNormalization([Element,"innerWidth",n("width",!0)]),e.registerNormalization([Element,"innerHeight",n("height",!0)]),e.registerNormalization([Element,"outerWidth",n("width",!1)]),e.registerNormalization([Element,"outerHeight",n("height",!1)])}(oe||(oe={})),function(e){e.inlineRx=/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,e.listItemRx=/^(li)$/i,e.tableRowRx=/^(tr)$/i,e.tableRx=/^(table)$/i,e.tableRowGroupRx=/^(tbody)$/i,e.registerNormalization([Element,"display",function(t,n){var r=t.style;if(void 0===n)return e.CSS.computePropertyValue(t,"display");if("auto"===n){var i=t&&t.nodeName,a=fe(t);n=e.inlineRx.test(i)?"inline":e.listItemRx.test(i)?"list-item":e.tableRowRx.test(i)?"table-row":e.tableRx.test(i)?"table":e.tableRowGroupRx.test(i)?"table-row-group":"block",a.cache.display=n}return r.display=n,!0}])}(oe||(oe={})),function(e){e.registerNormalization([Element,"textShadow",function(t,n){if(void 0===n){var r=(n=e.CSS.getPropertyValue(t,"textShadow")).split(/\s/g),i=r[0],a="";if(e.CSS.ColorNames[i])r.shift(),r.push(i),a=r.join(" ");else if(i.match(/^#|^hsl|^rgb|-gradient/)){var o=n.match(/(hsl.*\)|#[\da-fA-F]+|rgb.*\)|.*gradient.*\))\s/g)[0];a=n.replace(o,"")+" "+o.trim()}else a=n;return a}return!1}])}(oe||(oe={})),function(e){e.registerNormalization([HTMLElement,"scrollTop",function(t,n){if(null==n)return e.CSS.getPropertyValue(t,"clientHeight",!1,!0),e.CSS.getPropertyValue(t,"scrollHeight",!1,!0),e.CSS.getPropertyValue(t,"scrollTop",!1,!0),t.scrollTop+"px";var r=parseFloat(n);switch(n.replace(r+"","")){case"":case"px":t.scrollTop=r;break;case"%":var i=parseFloat(e.CSS.getPropertyValue(t,"clientHeight")),a=parseFloat(e.CSS.getPropertyValue(t,"scrollHeight"));t.scrollTop=Math.max(0,a-i)*r/100}return!1},!1]),e.registerNormalization([HTMLElement,"scrollWidth",function(e,t){return null==t&&e.scrollWidth+"px"}]),e.registerNormalization([HTMLElement,"clientWidth",function(e,t){return null==t&&e.clientWidth+"px"}]),e.registerNormalization([HTMLElement,"scrollHeight",function(e,t){return null==t&&e.scrollHeight+"px"}]),e.registerNormalization([HTMLElement,"clientHeight",function(e,t){return null==t&&e.clientHeight+"px"}])}(oe||(oe={})),function(e){function t(t,n){return function(r,i){return void 0===i?r.style[n]:(e.CSS.setPropertyValue(r,t,i),!0)}}var n=[/^webkit[A-Z]/,/^moz[A-Z]/,/^ms[A-Z]/,/^o[A-Z]/],r=e.State.prefixElement;for(var i in r.style)for(var a=0;a<n.length;a++)if(n[a].test(i)){var o=i.replace(/^[a-z]+([A-Z])/,function(e,t){return t.toLowerCase()});e.registerNormalization([Element,o,t(i,o)])}}(oe||(oe={})),function(e){e.completeCall=function(t){var n=t.options,r=ue(t.queue,n.queue),i=ue(t.loop,n.loop,e.defaults.loop),a=ue(t.repeat,n.repeat,e.defaults.repeat),o=8&t._flags;if(o||!i&&!a){var s=t.element,l=fe(s);if(--l.count||o||ce(s,e.State.className),n&&++n._completed===n._total){!o&&n.complete&&(function(e){try{var t=e.elements;e.options.complete.call(t,t,e)}catch(e){setTimeout(function(){throw e},1)}}(t),n.complete=null);var u=n._resolver;u&&(u(t.elements),delete n._resolver)}!1!==r&&(o||(l.lastFinishList[r]=t.timeStart+ue(t.duration,n.duration,e.defaults.duration)),e.dequeue(s,r)),e.freeAnimationCall(t)}else a&&!0!==a?t.repeat=a-1:i&&!0!==i&&(t.loop=i-1,t.repeat=ue(t.repeatAgain,n.repeatAgain,e.defaults.repeatAgain)),i&&(t._flags^=64),!1!==r&&(fe(t.element).lastFinishList[r]=t.timeStart+ue(t.duration,n.duration,e.defaults.duration)),t.timeStart=t.ellapsedTime=t.percentComplete=0,t._flags&=-5}}(oe||(oe={})),(oe||(oe={})).debug=!1,(H=oe||(oe={})).defaults={mobileHA:!0},Object.defineProperties(H.defaults,{reset:{enumerable:!0,value:function(){B=!0,D=void 0,$=void 0,G=0,Q=n,W=ye("swing",n),U=60,J=0,Z=980/60,K=!0,Y=!0,X="",ee=0,te=1,ne=!0}},cache:{enumerable:!0,get:function(){return B},set:function(e){void 0!==(e=de(e))&&(B=e)}},begin:{enumerable:!0,get:function(){return D},set:function(e){void 0!==(e=pe(e))&&(D=e)}},complete:{enumerable:!0,get:function(){return $},set:function(e){void 0!==(e=ve(e))&&($=e)}},delay:{enumerable:!0,get:function(){return G},set:function(e){void 0!==(e=me(e))&&(G=e)}},duration:{enumerable:!0,get:function(){return Q},set:function(e){void 0!==(e=he(e))&&(Q=e)}},easing:{enumerable:!0,get:function(){return W},set:function(e){void 0!==(e=ye(e,Q))&&(W=e)}},fpsLimit:{enumerable:!0,get:function(){return U},set:function(e){void 0!==(e=be(e))&&(U=e,Z=980/e)}},loop:{enumerable:!0,get:function(){return J},set:function(e){void 0!==(e=Se(e))&&(J=e)}},minFrameTime:{enumerable:!0,get:function(){return Z}},promise:{enumerable:!0,get:function(){return K},set:function(e){void 0!==(e=function(e){if(a(e))return e}(e))&&(K=e)}},promiseRejectEmpty:{enumerable:!0,get:function(){return Y},set:function(e){void 0!==(e=function(e){if(a(e))return e}(e))&&(Y=e)}},queue:{enumerable:!0,get:function(){return X},set:function(e){void 0!==(e=we(e))&&(X=e)}},repeat:{enumerable:!0,get:function(){return ee},set:function(e){void 0!==(e=Ee(e))&&(ee=e)}},speed:{enumerable:!0,get:function(){return te},set:function(e){void 0!==(e=xe(e))&&(te=e)}},sync:{enumerable:!0,get:function(){return ne},set:function(e){void 0!==(e=Ce(e))&&(ne=e)}}}),H.defaults.reset(),(oe||(oe={})).mock=!1,function(e){(oe||(oe={})).patch=function(e,t){try{p(e,(t?"V":"v")+"elocity",Ne)}catch(e){}}}(),function(e){function t(t){var n=e.State.last;t._prev=n,t._next=void 0,n?n._next=t:e.State.first=t,e.State.last=t,e.State.firstNew||(e.State.firstNew=t);var r,i,a=t.element;fe(a).count++||(i=e.State.className,(r=a)instanceof Element&&(r.classList?r.classList.add(i):(ce(r,i),r.className+=(r.className.length?" ":"")+i)))}e.queue=function(e,n,r){var i=fe(e);if(!1!==r&&(i.lastAnimationList[r]=n),!1===r)t(n);else{l(r)||(r="");var a=i.queueList[r];if(a){for(;a._next;)a=a._next;a._next=n,n._prev=a}else null===a?i.queueList[r]=n:(i.queueList[r]=null,t(n))}},e.dequeue=function(e,n,r){if(!1!==n){l(n)||(n="");var i=fe(e),a=i.queueList[n];return a?(i.queueList[n]=a._next||null,r||t(a)):null===a&&delete i.queueList[n],a}},e.freeAnimationCall=function(t){var n=t._next,r=t._prev,i=null==t.queue?t.options.queue:t.queue;e.State.firstNew===t&&(e.State.firstNew=n),e.State.first===t?e.State.first=n:r&&(r._next=n),e.State.last===t?e.State.last=r:n&&(n._prev=r),i&&fe(t.element)&&(t._next=t._prev=void 0)}}(oe||(oe={})),(re=oe||(oe={})).Redirects={},["Down","Up"].forEach(function(t){re.Redirects["slide"+t]=function(n,r,i,a,o,s){var l=e({},r),u=l.begin,c=l.complete,f={},g={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};if(void 0===l.display){var d=re.inlineRx.test(n.nodeName.toLowerCase());l.display="Down"===t?d?"inline-block":"block":"none"}l.begin=function(){for(var e in 0===i&&u&&u.call(o,o),g)if(g.hasOwnProperty(e)){f[e]=n.style[e];var r=re.CSS.getPropertyValue(n,e);g[e]="Down"===t?[r,0]:[0,r]}f.overflow=n.style.overflow,n.style.overflow="hidden"},l.complete=function(){for(var e in f)f.hasOwnProperty(e)&&(n.style[e]=f[e]);i===a-1&&(c&&c.call(o,o),s&&s(o))},Ne(n,g,l)}}),["In","Out"].forEach(function(t){re.Redirects["fade"+t]=function(n,r,i,a,o,s){var l=e({},r),u=l.complete,c={opacity:"In"===t?1:0};0!==i&&(l.begin=null),l.complete=i!==a-1?null:function(){u&&u.call(o,o),s&&s.resolver(o)},void 0===l.display&&(l.display="In"===t?"auto":"none"),Ne(this,c,l)}}),function(e){e.RegisterEffect=function(t,n){return e.Redirects[t]=function(r,i,a,o,s,l,u){var c=a===o-1,f=0;u=u||n.loop,n.defaultDuration="function"==typeof n.defaultDuration?n.defaultDuration.call(s,s):parseFloat(n.defaultDuration);for(var g=0;g<n.calls.length;g++){var d=n.calls[g][1];"number"==typeof d&&(f+=d)}var p=f>=1?0:n.calls.length?(1-f)/n.calls.length:1,v=function(f){var g=n.calls[f],d=g[0],v=1e3,m=g[1],h=g[2]||{},y={};if(void 0!==i.duration?v=i.duration:void 0!==n.defaultDuration&&(v=n.defaultDuration),y.duration=v*("number"==typeof m?m:p),y.queue=i.queue||"",y.easing=h.easing||"ease",y.delay=parseFloat(h.delay)||0,y.loop=!n.loop&&h.loop,y.cache=h.cache||!0,0===f&&(y.delay+=parseFloat(i.delay)||0,0===a&&(y.begin=function(){i.begin&&i.begin.call(s,s);var n,r,a,o,l,u,c=t.match(/(In|Out)$/);c&&"In"===c[0]&&void 0!==d.opacity&&(s.nodeType?[s]:s).forEach(function(t){e.CSS.setPropertyValue(t,"opacity",0)}),i.animateParentHeight&&c&&(r=c[0],a=v+y.delay,o=i.stagger,u=0,((n=s).nodeType?[n]:n).forEach(function(t,n){o&&(a+=n*o),l=t.parentNode;var r=["height","paddingTop","paddingBottom","marginTop","marginBottom"];"border-box"===(""+e.CSS.getPropertyValue(t,"boxSizing")).toLowerCase()&&(r=["height"]),r.forEach(function(n){u+=parseFloat(e.CSS.getPropertyValue(t,n))})}),Ne(l,{height:("In"===r?"+":"-")+"="+u},{queue:!1,easing:"ease-in-out",duration:a*("In"===r?.6:1)}))}),i.visibility&&"hidden"!==i.visibility&&(y.visibility=i.visibility)),f===n.calls.length-1){var b=function(){void 0!==i.display&&"none"!==i.display||!/Out$/.test(t)||(s.nodeType?[s]:s).forEach(function(t){e.CSS.setPropertyValue(t,"display","none")}),i.complete&&i.complete.call(s,s),l&&l(s||r)};y.complete=function(){if(u&&e.Redirects[t](r,i,a,o,s,l,!0===u||Math.max(0,u-1)),n.reset){for(var f in n.reset)n.reset.hasOwnProperty(f);var g={duration:0,queue:!1};c&&(g.complete=b),Ne(r,n.reset,g)}else c&&b()},"hidden"===i.visibility&&(y.visibility=i.visibility)}Ne(r,d,y)};for(g=0;g<n.calls.length;g++)v(g)},Ne}}(oe||(oe={})),function(t){(oe||(oe={})).RunSequence=function(t){var n=function e(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i,a=Object(t),o=Object.prototype.hasOwnProperty;i=n.shift();)if(null!=i)for(var s in i)if(o.call(i,s)){var l=i[s];Array.isArray(l)?e(a[s]=[],l):d(l)?e(a[s]={},l):a[s]=l}return a}([],t);n.length>1&&(n.reverse().forEach(function(t,r){var i=n[r+1];if(i){var a=t.o||t.options,o=i.o||i.options,s=a&&!1===a.sequenceQueue?"begin":"complete",l=o&&o[s],u={};u[s]=function(){var e=i.e||i.elements,n=e.nodeType?[e]:e;l&&l.call(n,n),Ne(t)},i.o?i.o=e({},o,u):i.options=e({},o,u)}}),n.reverse()),Ne(n[0])}}(),function(e){function t(e){try{var t=e.elements;e.options.begin.call(t,t,e)}catch(e){setTimeout(function(){throw e},1)}}function n(t,n){try{var r=t.elements,i=t.percentComplete,a=t.options,o=t.tween;t.options.progress.call(r,r,i,Math.max(0,t.timeStart+(null!=t.duration?t.duration:null!=a.duration?a.duration:e.defaults.duration)-n),void 0!==o?o:100*i+"",t)}catch(e){setTimeout(function(){throw e},1)}}var r,i;function a(){var t,a;for(t=r;t;t=a)a=t._nextProgress,n(t,e.lastTick);for(t=i;t;t=a)a=t._nextComplete,e.completeCall(t)}e.callBegin=t;var o,s=1e3/60,l=function(){var e=window.performance||{};if("function"!=typeof e.now){var t=e.timing&&e.timing.navigationStart?e.timing.navigationStart:se();e.now=function(){return se()-t}}return e}(),u=function(t){return setTimeout(function(){t(l.now())},Math.max(0,s-(l.now()-e.lastTick)))},c=window.requestAnimationFrame||u,f=document.hidden?u:c;function g(n){if(!o){if(o=!0,n){var u=n&&!0!==n?n:l.now(),c=e.lastTick?u-e.lastTick:s,d=e.defaults.speed,p=e.defaults.easing,v=e.defaults.duration,m=void 0,h=void 0,y=void 0,b=void 0;if(r=null,i=null,c>=e.defaults.minFrameTime||!e.lastTick){for(e.lastTick=u;m=e.State.firstNew;)e.validateTweens(m);for(m=e.State.first;m&&m!==e.State.firstNew;m=m._next){var S=m.element,w=void 0;if(S.parentNode&&(w=fe(S))){var E=m.options,x=m._flags;if(!(k=m.timeStart)){var C=null!=m.queue?m.queue:E.queue;k=u-c,!1!==C&&(k=Math.max(k,w.lastFinishList[C]||0)),m.timeStart=k}16&x?m.timeStart+=c:2&x||(m._flags|=2,E._ready++)}else e.freeAnimationCall(m)}for(m=e.State.first;m&&m!==e.State.firstNew;m=h){if(h=m._next,2&(x=m._flags)&&!(16&x)){E=m.options;if(32&x&&E._ready<E._total)m.timeStart+=c;else{var N=null!=m.speed?m.speed:null!=E.speed?E.speed:d,k=m.timeStart;if(!(4&x)){var A=null!=m.delay?m.delay:E.delay;if(A){if(k+A/N>u)continue;m.timeStart=k+=A/(A>0?N:1)}m._flags|=4,0==E._started++&&(E._first=m,E.begin&&(t(m),E.begin=void 0))}if(1!==N)m.timeStart=k+=Math.min(c,u-k)*(1-N);E._first===m&&E.progress&&(m._nextProgress=void 0,y?y._nextProgress=y=m:r=y=m);var O=null!=m.easing?m.easing:null!=E.easing?E.easing:p,_=m.ellapsedTime=u-k,T=m.percentComplete=e.mock?1:Math.min(_/(null!=m.duration?m.duration:null!=E.duration?E.duration:v),1),P=m.tweens,q=64&x;for(var M in 1===T&&(m._nextComplete=void 0,b?b._nextComplete=b=m:i=b=m),P){var I=P[M],j=I[1]||O,R=I[3],V=I[4],z="",L=0;if(R){for(;L<R.length;L++){var F=I[2][L];if(null==F)z+=R[L];else{var H=j(q?1-T:T,F,I[0][L],M);z+=V&&V[L]?Math.round(H):H}}"tween"!==M?e.CSS.setPropertyValue(m.element,M,z):m.tween=z}else delete P[M]}}}}(r||i)&&setTimeout(a,1)}}e.State.first?(e.State.isTicking=!0,f(g)):(e.State.isTicking=!1,e.lastTick=0),o=!1}}e.lastTick=0,e.State.isMobile||void 0===document.hidden||document.addEventListener("visibilitychange",function(e){var t=document.hidden;f=t?u:c,e&&setTimeout(g,2e3),g()}),e.tick=g}(oe||(oe={})),(oe||(oe={})).timestamp=!0,(ae=ie||(ie={}))[ae.END=0]="END",ae[ae.EASING=1]="EASING",ae[ae.START=2]="START",ae[ae.PATTERN=3]="PATTERN",ae[ae.ROUNDING=4]="ROUNDING",ae[ae.length=5]="length",function(e){var t=new Map;t.set("function",function(e,t,n,r){return e.call(t,r,n.length)}),t.set("number",function(e,t,r,a,o){return e+(t instanceof HTMLElement?function(e){if(le(n,e))return"deg";if(le(i,e))return"";return"px"}(o):"")}),t.set("string",function(t,n,r,i,a){return e.CSS.fixColors(t)}),t.set("undefined",function(t,n,r,i,a){return e.CSS.fixColors(e.CSS.getPropertyValue(n,a)||"")});var n=[],i=["borderImageSlice","columnCount","counterIncrement","counterReset","flex","flexGrow","flexShrink","floodOpacity","fontSizeAdjust","fontWeight","lineHeight","opacity","order","orphans","shapeImageThreshold","tabSize","widows","zIndex"];function a(t,n,i,a){var o=n[0],u=n[2];if(l(o)&&l(u)){var c=!1;do{c=!1;for(var f=n[2]=[null],g=n[0]=[null],d=n[3]=[""],p=n[1],v=void 0,m=0,h=0,y=0,b=0,S=0,w=void 0,E=function(){var t=u[m],i=o[h];if(r.test(t)&&r.test(i)){for(var p=t,E=i,x=".",C=".";++m<u.length;){if((t=u[m])===x)x="..";else if(!s(t))break;p+=t}for(;++h<o.length;){if((i=o[h])===C)C="..";else if(!s(i))break;E+=i}var N=e.CSS.getUnit(u,m),k=e.CSS.getUnit(o,h);m+=N.length,h+=k.length,0===k.length?k=N:0===N.length&&(N=k),N===k?p===E?d[d.length-1]+=p+N:(b&&(v||(v=n[4]=[]),v[f.length]=!0),d.push(0,N),f.push(parseFloat(p),null),g.push(parseFloat(E),null)):(d[d.length-1]+=y?"+ (":"calc(",d.push(0,N+" + ",0,k+")"),f.push(parseFloat(p)||0,null,0,null),g.push(0,null,parseFloat(E)||0,null))}else if(t===i)d[d.length-1]+=t,m++,h++,0===y&&"c"===t||1===y&&"a"===t||2===y&&"l"===t||3===y&&"c"===t||y>=4&&"("===t?y++:(y&&y<5||y>=4&&")"===t&&--y<5)&&(y=0),0===b&&"r"===t||1===b&&"g"===t||2===b&&"b"===t||3===b&&"a"===t||b>=3&&"("===t?(3===b&&"a"===t&&(S=1),b++):S&&","===t?++S>3&&(b=S=0):(S&&b<(S?5:4)||b>=(S?4:3)&&")"===t&&--b<(S?5:4))&&(b=S=0);else if(t||i){for(w=!0,l(f[f.length-1])||(1!==d.length||d[0]?(d.push(""),f.push(""),g.push("")):f[0]=g[0]="");m<u.length&&" "!==(t=u[m++])&&!r.test(t);)f[f.length-1]+=t;for(;h<o.length&&" "!==(i=o[h++])&&!r.test(i);)g[g.length-1]+=i}if(!a&&m===u.length!=(h===o.length)){var A=u.match(/\d\.?\d*/g)||["0"],O=A.length,_=0;return u=o.replace(/\d+\.?\d*/g,function(){return A[_++%O]}),c=a=!0,"break"}};m<u.length&&h<o.length;){if("break"===E())break}c||(""===d[0]&&null==g[0]&&(d.shift(),f.shift(),g.shift()),""===d[d.length]&&null==g[g.length]&&(d.pop(),f.pop(),g.pop()),"display"===t?/^(at-start|at-end|during)$/.test(p)||(p="none"===o?"at-end":"at-start"):"visibility"===t?/^(at-start|at-end|during)$/.test(p)||(p="hidden"===o?"at-end":"at-start"):w&&"at-start"!==p&&"during"!==p&&"at-end"!==p&&p!==e.Easing.Easings["at-Start"]&&p!==e.Easing.Easings.during&&p!==e.Easing.Easings["at-end"]&&(p="at-start"),n[1]=ye(p,i))}while(c)}}e.expandProperties=function(n,r){var i=n.tweens=Object.create(null),s=n.elements,c=n.element,f=s.indexOf(c),g=fe(c),d=ue(n.queue,n.options.queue),p=ue(n.options.duration,e.defaults.duration);for(var v in r){for(var m=e.CSS.camelCase(v),h=r[v],y=g.types,b="tween"===m,S=0;y&&!b;y>>=1,S++)b=!!(1&y&&e.Normalizations[S][m]);if((b||e.State.prefixElement&&l(e.State.prefixElement.style[m]))&&null!=h){var w=i[m]=Array(5),E=void 0,x=void 0;if(u(h)&&(h=h.call(c,f,s.length,s)),Array.isArray(h)){var C=h[1],N=h[2];E=h[0],l(C)&&(/^[\d-]/.test(C)||e.CSS.RegEx.isHex.test(C))||u(C)||o(C)?x=C:l(C)&&e.Easing.Easings[C]||Array.isArray(C)?(w[1]=C,x=N):x=C||N}else E=h;w[0]=t.get(typeof E)(E,c,s,f,m),null==x&&!1!==d&&void 0!==g.queueList[d]||(w[2]=t.get(typeof x)(x,c,s,f,m)),a(m,w,p,!!x)}}},e.validateTweens=function(t){if(e.State.firstNew===t&&(e.State.firstNew=t._next),!(1&t._flags)){var n=t.tweens,r=ue(t.options.duration,e.defaults.duration);for(var i in n){var o=n[i];if(null==o[2]){var s=e.CSS.getPropertyValue(t.element,i);l(s)&&(o[2]=e.CSS.fixColors(s),a(i,o,r))}}t._flags|=1}}}(oe||(oe={})),(oe||(oe={})).version="2.0.1",function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}}()<=8)throw Error("VelocityJS cannot run on Internet Explorer 8 or earlier");if(window===this){var ke=oe.patch,Ae=window.jQuery,Oe=window.Zepto;ke(window,!0),ke(Element&&Element.prototype),ke(NodeList&&NodeList.prototype),ke(HTMLCollection&&HTMLCollection.prototype),ke(Ae,!0),ke(Ae&&Ae.fn),ke(Oe,!0),ke(Oe&&Oe.fn)}var _e=function(e){Object.defineProperty(Ne,e,{enumerable:t.indexOf(e)>=0,get:function(){return oe[e]}})};for(var Te in oe)_e(Te);return Ne})
;(function(window) {

	var factory = function() {
	    'use strict';

	    var Waves            = Waves || {};
	    var $$               = document.querySelectorAll.bind(document);
	    var toString         = Object.prototype.toString;
	    var isTouchAvailable = 'ontouchstart' in window;


	    // Find exact position of element
	    function isWindow(obj) {
	        return obj !== null && obj === obj.window;
	    }

	    function getWindow(elem) {
	        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	    }

	    function isObject(value) {
	        var type = typeof value;
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
	        var docElem, win,
	            box = { top: 0, left: 0 },
	            doc = elem && elem.ownerDocument;

	        docElem = doc.documentElement;

	        if (typeof elem.getBoundingClientRect !== typeof undefined) {
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
	                style += (prop + ':' + styleObj[prop] + ';');
	            }
	        }

	        return style;
	    }

	    var Effect = {

	        duration: $(this).width(),
	        delay: 2000,

	        show: function(e, element, velocity) {

	            // Disable right click
	            if (e.button === 2) {
	                return false;
	            }

	            element = element || this;

	            // Create ripple
	            var ripple = document.createElement('div');
	            ripple.className = 'waves-ripple waves-rippling';
	            element.appendChild(ripple);

	            // Get click coordinate and element width
	            var pos       = offset(element);
	            var relativeY = 0;
	            var relativeX = 0;
	            // Support for touch devices
	            if('touches' in e && e.touches.length) {
	                relativeY   = (e.touches[0].pageY - pos.top);
	                relativeX   = (e.touches[0].pageX - pos.left);
	            }
	            //Normal case
	            else {
	                relativeY   = (e.pageY - pos.top);
	                relativeX   = (e.pageX - pos.left);
	            }
	            // Support for synthetic events
	            relativeX = relativeX >= 0 ? relativeX : 0;
	            relativeY = relativeY >= 0 ? relativeY : 0;

	            var scale = 'scale(' + function(a,e){

					const m = [40,40,.3];

					var a = $(a);
					var f = 1;
					var x = Math.round(e.pageX - a.offset().left);
					var y = Math.round(e.pageY - a.offset().top);
					var s = function(){
						if(a.outerWidth() > a.outerHeight()){
							return true;
						} else {
							return false;
						}
					}();

					if(s) {
						if(x < a.outerWidth()/2){
							f = (a.outerWidth() - x)/m[0];
							if(a.outerWidth() < 50){
								f = y/m[3];
							}
						} else {
							f = x/m[0];
						}
					} else {
						if(y < a.outerHeight()/2){
							f = (a.outerHeight() - y)/m[1];
							if(a.outerHeight() < 50){
								f = y/m[3];
							}
						} else {
							f = y/m[1];
						}
					}

					if(a.outerWidth() == a.outerHeight()){
						var origin = a.outerWidth()/2;
						var c = [Math.abs(origin - x),Math.abs(origin - y)];

						var c = (c[0] + c[1])/2;
						var f = (a.outerWidth() + c/m[2])/100;
					}

					return f;
				}(element,e) + ')';
	            var translate = 'translate(0,0)';

	            if (velocity) {
	                translate = 'translate(' + (velocity.x) + 'px, ' + (velocity.y) + 'px)';
	            }

	            // Attach data to element
	            ripple.setAttribute('data-hold', Date.now());
	            ripple.setAttribute('data-x', relativeX);
	            ripple.setAttribute('data-y', relativeY);
	            ripple.setAttribute('data-scale', scale);
	            ripple.setAttribute('data-translate', translate);

	            // Set ripple position
	            var rippleStyle = {
	                top: relativeY + 'px',
	                left: relativeX + 'px'
	            };

	            ripple.classList.add('waves-notransition');
	            ripple.setAttribute('style', convertStyle(rippleStyle));
	            ripple.classList.remove('waves-notransition');

	            // Scale the ripple
	            rippleStyle['-webkit-transform'] = scale + ' ' + translate;
	            rippleStyle['-moz-transform'] = scale + ' ' + translate;
	            rippleStyle['-ms-transform'] = scale + ' ' + translate;
	            rippleStyle['-o-transform'] = scale + ' ' + translate;
	            rippleStyle.transform = scale + ' ' + translate;

	            var duration = e.type === 'mousemove' ? 750 : Effect.duration;
	            rippleStyle['-webkit-transition-duration'] = duration + 'ms';
	            rippleStyle['-moz-transition-duration']    = duration + 'ms';
	            rippleStyle['-o-transition-duration']      = duration + 'ms';
	            rippleStyle['transition-duration']         = duration + 'ms';

	            ripple.setAttribute('style', convertStyle(rippleStyle));
	        },

	        hide: function(e, element) {
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
	        input: function(element) {

	            var parent = element.parentNode;

	            // If input already have parent just pass through
	            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
	                return;
	            }

	            // Put element class and style to the specified parent
	            var wrapper       = document.createElement('i');
	            wrapper.className = element.className + ' waves-input-wrapper';
	            element.className = 'waves-button-input';

	            // Put element as child
	            parent.replaceChild(wrapper, element);
	            wrapper.appendChild(element);

	            // Apply element color and background color to wrapper
	            var elementStyle    = window.getComputedStyle(element, null);
	            var color           = elementStyle.color;
	            var backgroundColor = elementStyle.backgroundColor;

	            wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);
	            element.setAttribute('style', 'background-color:rgba(0,0,0,0);');

	        },

	        // Wrap <img> tag so it can perform the effect
	        img: function(element) {

	            var parent = element.parentNode;

	            // If input already have parent just pass through
	            if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
	                return;
	            }

	            // Put element as child
	            var wrapper  = document.createElement('i');
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
	        var scale     = ripple.getAttribute('data-scale');
	        var translate = ripple.getAttribute('data-translate');

	        // Get delay beetween mousedown and mouse leave
	        var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
	        var delay = 0;

	        if (e.type === 'mousemove') {
	            delay = 150;
	        }

	        // Fade out ripple after delay
	        var duration = e.type === 'mousemove' ? 750 : Effect.duration;

	        setTimeout(function() {

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

	            setTimeout(function() {
	                try {
	                    el.removeChild(ripple);
	                } catch (e) {
	                    return false;
	                }
	            },duration);

	        },delay);
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

	        allowEvent: function(e) {

	            var allow = true;

	            if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
	                allow = false;
	            }

	            return allow;
	        },
	        registerEvent: function(e) {
	            var eType = e.type;

	            if (eType === 'touchstart') {

	                TouchHandler.touches += 1; // push

	            } else if (/^(touchend|touchcancel)$/.test(eType)) {

	                setTimeout(function() {
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
	            if ( (!(target instanceof SVGElement)) && target.classList.contains('waves-effect')) {
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

	                var hideEffect = function(hideEvent) {

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

	                var touchMove = function(moveEvent) {
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

	                var removeListeners = function() {
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

	    Waves.init = function(options) {
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
	    Waves.attach = function(elements, classes) {

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
	    Waves.ripple = function(elements, options) {
	        elements = getWavesElements(elements);
	        var elementsLen = elements.length;

	        options          = options || {};
	        options.wait     = options.wait || 0;
	        options.position = options.position || null; // default = centre of element


	        if (elementsLen) {
	            var element, pos, off, centre = {}, i = 0;
	            var mousedown = {
	                type: 'mousedown',
	                button: 1
	            };
	            var hideRipple = function(mouseup, element) {
	                return function() {
	                    Effect.hide(mouseup, element);
	                };
	            };

	            for (; i < elementsLen; i++) {
	                element = elements[i];
	                pos = options.position || {
	                    x: element.clientWidth / 2,
	                    y: element.clientHeight / 2
	                };

	                off      = offset(element);
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
	    Waves.calm = function(elements) {
	        elements = getWavesElements(elements);
	        var mouseup = {
	            type: 'mouseup',
	            button: 1
	        };

	        for (var i = 0, len = elements.length; i < len; i++) {
	            Effect.hide(mouseup, elements[i]);
	        }
	    };

	    /**
	     * Deprecated API fallback
	     */
	    Waves.displayEffect = function(options) {
	        Waves.init(options);
	    };

	    return Waves;
	}

	$(() => {

		$(".waves-effect").on("touchstart",function(e){

			var x = e.targetTouches[0].pageX - $(this).offset().left
			var y = e.targetTouches[0].pageY - $(this).offset().top

			Waves.ripple(this,{
				wait:1e10,
				position:$(this).hasClass("waves-ink") ? null : {
			        x:x,
			        y:y
			    }
			});
		}).on("touchend",function(e){
			Waves.calm(this);
		})

	})

    'use strict';

    // AMD. Register as an anonymous module.  Wrap in function so we have access
    // to root via `this`.
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            window.Waves = factory.call(window);
            return window.Waves;
        });
    }

    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    else if (typeof exports === 'object') {
        module.exports = factory.call(window);
    }

    // Browser globals.
    else {
        window.Waves = factory.call(window);
    }
})(window);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Photon = {
	guid:function(){
  		function s4(){
		    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  		}
  		return  s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	},
	updateTextFields:function(){
	$(".input-field").each(function(){
		if($(this).children("input").val().length > 0){
			$(this).children("input").addClass("containscontent")
		}
	})
}
}

;(function(){

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

				if (object.parent().hasClass('active')){
					object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, queue: false, complete: function() {$(this).css('height', '');}});
				} else {
					object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, queue: false, complete: function() {$(this).css('height', '');}});
				}

				$panel_headers.not(object).removeClass('active').parent().removeClass('active');

				$panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).each(function(){

					if($(this).is(':visible')){
						$(this).slideUp({
							duration: 350,
							queue: false,
							complete:function() {
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

				if(object.parent().hasClass('active')){
					object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, queue: false, complete: function() {$(this).css('height', '');}});
				} else {
					object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, queue: false, complete: function() {$(this).css('height', '');}});
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
				if ($curr_header.length && (methodName === 'open' || (methodName === 'close' && $curr_header.hasClass('active')))){
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
	$.fn.sidenav = function(a){
		var i = this;
		if(a){
			switch(a.toLowerCase()){
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

		$(".sidenav--xdiv").on("touchstart mousedown",function(){
			i.removeClass("active");
			$(this).remove();
		})

		$(".sidenav--draghandle").remove();
		$("body").append("<div class='sidenav--draghandle'></div>");
		$(".sidenav--draghandle").on("touchmove",function(e){
			e.preventDefault();
			$(this).css({
				left:(e.changedTouches[0].pageX > 300) ? 300:e.changedTouches[0].pageX
			})

			if(e.changedTouches[0].pageX > 50){
				$(this).css({
					left:300
				})
				i.sidenav("open")
			}
		}).on("touchcancel touchend",function(){
			$(this).css({
				left:0
			})
		})
		return this;
	}
	$.fn.scrollnav = function(){
		this.children("li").children("a[go]").click(function(){
			try {
				var stop = $($(this).attr("go"));
				$("html").animate({
					scrollTop:stop.offset().top - stop.height() - 64
				})
			} catch (w) {void(w)}
		})
		this.children("li").children("a[href]").click(function(){
			window.location.href = $(this).attr("href")
		})
	}
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
	            var tooltip = $('<div class="material-tooltip"></div>');

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

	                    if (tooltipPosition === "top") {
	                        // Top Position
	                        targetTop = origin.offset().top - tooltipHeight - margin;
	                        targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
	                        newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	                        tooltipVerticalMovement = '-10px';
	                    }
	                    // Left Position
	                    else if (tooltipPosition === "left") {
	                        targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
	                        targetLeft = origin.offset().left - tooltipWidth - margin;
	                        newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

	                        tooltipHorizontalMovement = '-10px';
	                    }
	                    // Right Position
	                    else if (tooltipPosition === "right") {
	                        targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
	                        targetLeft = origin.offset().left + originWidth + margin;
	                        newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

	                        tooltipHorizontalMovement = '+10px';
	                    } else {
	                        // Bottom Position
	                        targetTop = origin.offset().top + origin.outerHeight() + margin;
	                        targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
	                        newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	                        tooltipVerticalMovement = '+10px';
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
	                        duration: 300,
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
	$.fn.slider = function(o){
		var g = $(this);
		o = $.extend({
			value:parseInt(g.attr("value") || "50"),
			change:null,
			disabled:false
		},o);

		var slider = this;
		var thumb = this.children(".thumb");
		var track = this.children(".track");

		if(o.disabled){
			slider.addClass("disabled")
		}

		if(!o.disabled){
			thumb.on("touchmove",function(e){
				passDragEvent(e);
			})

			thumb.mousedown(function(e){
				$("html").on("mousemove",function(e){
					passDragEvent(e);
				})
			})

			$("html").on("mouseup",function(){
				$("html").off("mousemove");
			})

			slider.on("click",function(e){
				e.anim = true;
				passDragEvent(e);
			})
		}


		passDragEvent = function(e){
			e.preventDefault();
			var x = e.clientX;
			if(typeof x === "undefined"){
				x = e.changedTouches[0].clientX;
			}

			function getProg(){
				var i = x - slider.offset().left - thumb.width()/2;
				if(i > slider.width() - thumb.width()){
					i = slider.width() - thumb.width()
				} else if(i < 0){
					i = 0
				}
				return i;
			}

			thumb.animate({
				left:getProg()
			},(e.anim == true ? 100:0),"swing")

			track.animate({
				width:getProg()
			},(e.anim == true ? 100:0),"swing")

			slider.attr("value",function(){
				return Math.round(getProg()/slider.width()*105.8333)
			}())
		}

		slider.attr("value",function(){
			thumb.css({
				left:"calc(" + o.value + "% - 7px)"
			})
			track.css({
				width:"calc(" + o.value + "% - 7px)"
			})
			return o.value.toString();
		}())

	}
	$.fn.tabs = function(methodOrOptions) {
	    var methods = {
	        init: function(options) {
	            var defaults = {
	                onShow: null
	            };
	            options = $.extend(defaults, options);
	            var namespace = function (obj) {
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
	                    transition = 300;

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
	                    $content = $(function(hash){
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

	$(document).ready(function(){
		$(".sidenav").sidenav();
		$(".collapsible").collapsible();
		$(".scrollnav").scrollnav();
		$(".tooltipped").tooltip();
		$(".slider").slider();
		$(".tabs").tabs();
	})

}(jQuery));

;(function ($, Vel) {
  'use strict';

  var _defaults = {
    displayLength: Infinity,
    inDuration: 300,
    outDuration: 375,
    className: undefined,
    completeCallback: undefined,
    activationPercent: 0.8
  };

  var Toast = function () {
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
          toast.innerHTML = this.message;
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
        $.Velocity(this.el, { top: 0, opacity: 1 }, {
          duration: 300,
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
          this.counterInterval = setInterval(function () {
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

        $.Velocity(this.el, { opacity: 0, marginTop: '-40px' }, {
          duration: this.options.outDuration,
          easing: 'easeOutExpo',
          queue: false,
          complete: function () {
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
      get: function () {
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
  Photon.toast = function (message, displayLength, className, completeCallback) {
    return new Toast(message, displayLength, className, completeCallback);
  };
})(jQuery, Photon.Vel);

Photon.ready = Photon.reload = function(){

	Waves.init();

	$("iframe[src^='https://youtube.com/embed'],iframe[src^='http://youtube.com/embed']").each(function(){
		$(this).attr("height",$(this).width()*(9/16));
	})

	$("label").each(function(){
		var f = $("#" + $(this).attr("for"));
		$(this).addClass("for-" + f.attr("type"))
	})

	$(".input-field input").blur(function(){
		if($(this).attr("type").toLowerCase() == "number"){
		   $(this).val($(this).val() || "0").addClass("containscontent")
	   }
	}).change(function(){
		if($(this).val() != ""){
			$(this).addClass("containscontent");
		} else {
			$(this).removeClass("containscontent");
		}
	}).each(function(){
		var t = $(this).parent();
		if($(this).val() != ""){
			$(this).addClass("containscontent");
		} else {
			$(this).removeClass("containscontent");
		}
		if($(this).attr("type").toLowerCase() == "password" && !$(this).is(":disabled")){
			var id = Photon.guid();
			$("#" + id).click(function(e){
				var i = $(this).siblings("input");
				if(i.attr("type").toLowerCase() == "password") {
					i.attr("type","text");
					$(this).html("&#xE8F5;");
				} else {
					i.attr("type","password");
					$(this).html("&#xE8F4;");
				}
				$(this).siblings("input").focus();
			})
		} else if($(this).attr("type").toLowerCase() == "number"){
			$(this).val($(this).val() || "0").addClass("containscontent");
			$(this).bind("mousewheel",function(e){
				var v = parseInt($(this).val());
				e.preventDefault();

				function getDelta(g){
					if(e.originalEvent.deltaY < 0){
						return g*1
					} else {
						return g*-1;
					}
				}

				if(e.altKey){
					v += getDelta(1000)
				} else if(e.ctrlKey){
					v += getDelta(100)
				} else if(e.shiftKey){
					v += getDelta(10)
				} else {
					v += getDelta(1)
				}

				$(this).val(v)
			})
		}
	}).siblings("label").click(function(){
		$(this).siblings("input").focus()
	}).each(function(){
		$(this).parent().mouseenter();
	})

	$(".btn.toggle").not(":disabled,.disabled").click(function(){
		$(this).toggleClass("active");
	})

	$(".waves-ink").bind("mousedown",function(e){
		$(this).children(".waves-ripple").fadeOut(500);
		e.stopPropagation();
		Waves.ripple(this,{
			wait:1e10
		});
	}).on("mouseup mouseleave",function(){
		Waves.calm(this);
	}).bind("touchstart",function(e){
		e.stopPropagation()
	})

}

$(document).ready(() => Photon.ready());

setInterval(function(){
	if($("footer").length == 1){
		if($("body").height() < $(window).innerHeight() - $("footer").height()){
			$("footer").addClass("attached-to-bottom")
		} else {
			$("footer").removeClass("attached-to-bottom")
		}
	}
	$(".card-image.parallax").each(function(){
		var t = $(this).children("img")
		var px = ($("html").scrollTop() - t.offset().top*.75)/20;
		t[0].style.transform = "scale(2) translateY(" + px + "px)";
	})
})
