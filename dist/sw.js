!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}},i=!0;try{t[n].call(o.exports,o,o.exports,r),i=!1}finally{i&&delete e[n]}return o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=3)}([function(t,e,r){t.exports=r(2)},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)})}}},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function g(){}function v(){}function y(){}var w={};w[i]=function(){return this};var m=Object.getPrototypeOf,x=m&&m(m(O([])));x&&x!==r&&n.call(x,i)&&(w=x);var b=y.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,a){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=b.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var i=new L(u(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},k(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);var n,o,i,a=r(0),c=r.n(a),u=r(1),s=r.n(u),f=function(t){return Number(new URLSearchParams(t.search).get("width"))},l=function(t){var e=t.url;return{url:e}.url.pathname.startsWith("/media/catalog")&&!isNaN(f(e))},h=function(){var t=s()(c.a.mark(function t(e,r){var n,o,i,a,u,s,l,h,p,d,g,v;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=f(e),t.next=3,caches.open("catalog");case 3:return o=t.sent,t.next=6,o.matchAll(r,{ignoreSearch:!0});case 6:i=t.sent,a={difference:1/0,candidate:null},u=!0,s=!1,l=void 0,t.prev=11,h=i[Symbol.iterator]();case 13:if(u=(p=h.next()).done){t.next=27;break}if(d=p.value,g=f(new URL(d.url)),!isNaN(g)){t.next=18;break}return t.abrupt("continue",24);case 18:if(!((v=g-n)<0)){t.next=21;break}return t.abrupt("continue",24);case 21:if(0!==v){t.next=23;break}return t.abrupt("return",d);case 23:v<a.difference&&(a={difference:v,candidate:d});case 24:u=!0,t.next=13;break;case 27:t.next=33;break;case 29:t.prev=29,t.t0=t.catch(11),s=!0,l=t.t0;case 33:t.prev=33,t.prev=34,u||null==h.return||h.return();case 36:if(t.prev=36,!s){t.next=39;break}throw l;case 39:return t.finish(36);case 40:return t.finish(33);case 41:if(!a.candidate){t.next=44;break}return console.log("ServiceWorker responding to GET ".concat(e.pathname," at ").concat(n,"w with cached version ").concat(a.difference,"px larger: ").concat(a.candidate.url)),t.abrupt("return",a.candidate);case 44:case"end":return t.stop()}},t,null,[[11,29,33,41],[34,,36,40]])}));return function(e,r){return t.apply(this,arguments)}}(),p=function(t,e){return e?new Request(e,{method:t.method,headers:t.headers}):t},d={cacheKeyWillBeUsed:(o=s()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","/");case 1:case"end":return t.stop()}},t)})),function(){return o.apply(this,arguments)}),requestWillFetch:(n=s()(c.a.mark(function t(e){var r,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.request,n=p(r,"/"),t.abrupt("return",n);case 3:case"end":return t.stop()}},t)})),function(t){return n.apply(this,arguments)})};importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute(self.__precacheManifest||[]),i=new workbox.strategies.StaleWhileRevalidate({cacheName:"catalog",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.Plugin({statuses:[0,200]})]}),workbox.routing.registerRoute(new RegExp("(robots.txt|favicon.ico|manifest.json)"),new workbox.strategies.StaleWhileRevalidate),workbox.routing.registerRoute(l,function(t){var e=t.url,r=t.request,n=t.event,o=h(e,r);return n.waitUntil(o),o.then(function(t){return t||i.handle({request:r,event:n})})}),workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:2592e3})]})),workbox.routing.registerRoute(new RegExp(/\.js$/),new workbox.strategies.CacheFirst),workbox.routing.registerRoute(function(t){return function(t){return function(t){return"/"===t.pathname}(t)||new RegExp(".html$").test(t.pathname)}(t.url)},new workbox.strategies.StaleWhileRevalidate({plugins:[d]}))}]);