!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=68)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e,r){var n=r(28),o=r(12);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},12:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},20:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},21:function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}t.exports=r},26:function(t,e,r){"use strict";var n=r(21),o=r.n(n),c=r(20),u=r.n(c),i=r(7),a=r.n(i),f=r(8),s=r.n(f),l=r(9),p=r.n(l),b=r(10),y=r.n(b),d=r(3),v=r.n(d),h=r(0),O=r(1);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(){return{attributes:{}}},x=function(t){p()(n,t);var e,r=(e=n,function(){var t,r=v()(e);if(g()){var n=v()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return y()(this,t)});function n(t){var e;return a()(this,n),(e=r.call(this,t)).state={hasError:!1},e}return s()(n,[{key:"render",value:function(){return this.state.hasError?Object(h.createInterpolateElement)(Object(O.__)("There was an error trying to render this content, please try another browser or device. If that doesn't work, please <a>contact us</a>.","wordcamporg"),{a:Object(h.createElement)("a",{href:"https://central.wordcamp.org/contact-us/"},"#21441-gutenberg")}):this.props.block}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(h.Component);e.a=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w,n=document.querySelectorAll(t);n.length&&Array.prototype.forEach.call(n,(function(t){var n=r(t)||{},c=j({},t.dataset,{},n.attributes);t.classList.remove("is-loading"),Object(h.render)(Object(h.createElement)(x,{block:Object(h.createElement)(e,o()({},n,{attributes:c}))}),t)}))}},27:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},28:function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},3:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},55:function(t,e){!function(){t.exports=this.wp.serverSideRender}()},68:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n),c=r(8),u=r.n(c),i=r(9),a=r.n(i),f=r(10),s=r.n(f),l=r(3),p=r.n(l),b=r(0),y=r(1),d=r(55),v=r.n(d),h=r(26);function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){a()(n,t);var e,r=(e=n,function(){var t,r=p()(e);if(O()){var n=p()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return s()(this,t)});function n(t){var e;return o()(this,n),(e=r.call(this,t)).renderInterval=setInterval((function(){e.forceUpdate()}),3e5),e}return u()(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.renderInterval)}},{key:"render",value:function(){var t=this.props.attributes;return delete t.attributes,Object(b.createElement)(v.a,{block:"core/latest-posts",attributes:t,LoadingResponsePlaceholder:function(){return Object(b.createElement)("p",null,Object(y.__)("Loading","wordcamporg"))}})}}]),n}(b.Component);Object(h.a)(".wp-block-latest-posts.has-live-update",m,(function(t){var e={},r=t.dataset.attributes;return r&&(e=JSON.parse(decodeURIComponent(r))),{attributes:e}}))},7:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},8:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},9:function(t,e,r){var n=r(27);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}}});