webpackJsonp([2],{435:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=v(n(4)),o=v(n(2)),a=v(n(3)),l=v(n(5)),u=v(n(6)),i=n(0),s=v(i),f=v(n(471)),c=v(n(468)),d=v(n(523)),p=v(n(524)),h=v(n(530));function v(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(f.default,{title:"示例一",content:s.default.createElement(p.default,null),doc:d.default}),s.default.createElement(c.default,{source:h.default}))}}]),t}(i.Component);t.default=s.default.createElement(m,null),e.exports=t.default},468:function(e,t,n){e.exports=n(9)(1141)},469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(4)),o=f(n(2)),a=f(n(3)),l=f(n(5)),u=f(n(6)),i=f(n(0)),s=n(470);function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,o.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={},n}return(0,u.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(s.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,t,n){}}))}}]),t}(i.default.Component);t.default=c,e.exports=t.default},470:function(e,t,n){e.exports=n(9)(1602)},471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(4)),o=f(n(2)),a=f(n(3)),l=f(n(5)),u=f(n(6)),i=f(n(0)),s=(f(n(468)),f(n(469)));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,o.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={},n}return(0,u.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("p",null,this.props.title),this.props.content,i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement(s.default,{value:this.props.doc})))}}]),t}(i.default.Component);t.default=c,e.exports=t.default},523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n//js 文件\nimport React, { Component } from 'react'\nimport { Carousel } from 'ttk-component'\nimport './style1.less'\n\nexport default class Example1 extends Component {\n\thandleChange(a, b, c) {\n\t\tconsole.log(a, b, c)\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div style={{ width: 300, height: 180 }}>\n\t\t\t\t<Carousel afterChange={this.handleChange}>\n\t\t\t\t\t<div><h3>1</h3></div>\n\t\t\t\t\t<div><h3>2</h3></div>\n\t\t\t\t\t<div><h3>3</h3></div>\n\t\t\t\t\t<div><h3>4</h3></div>\n\t\t\t\t</Carousel>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n//less 文件\n.ant-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  color: #fff;\n  overflow: hidden;\n}\n",e.exports=t.default},524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(4)),o=c(n(2)),a=c(n(3)),l=c(n(5)),u=c(n(6)),i=n(0),s=c(i),f=n(128);function c(e){return e&&e.__esModule?e:{default:e}}n(525);var d=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,a.default)(t,[{key:"handleChange",value:function(e,t,n){console.log(e,t,n)}},{key:"render",value:function(){return s.default.createElement("div",{style:{width:300,height:180}},s.default.createElement(f.Carousel,{afterChange:this.handleChange},s.default.createElement("div",null,s.default.createElement("h3",null,"1")),s.default.createElement("div",null,s.default.createElement("h3",null,"2")),s.default.createElement("div",null,s.default.createElement("h3",null,"3")),s.default.createElement("div",null,s.default.createElement("h3",null,"4"))))}}]),t}(i.Component);t.default=d,e.exports=t.default},525:function(e,t,n){var r=n(526);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(528)(r,o);r.locals&&(e.exports=r.locals)},526:function(e,t,n){(e.exports=n(527)(!1)).push([e.i,".ant-carousel .slick-slide{text-align:center;height:160px;line-height:160px;background:#364d79;color:#fff;overflow:hidden}",""])},527:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(l=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var l;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var l=e[o];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},528:function(e,t,n){var r,o,a={},l=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e){var t={};return function(e){return void 0===t[e]&&(t[e]=function(e){return document.querySelector(e)}.call(this,e)),t[e]}}(),i=null,s=0,f=[],c=n(529);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var l=0;l<o.parts.length;l++)o.parts[l](r.parts[l]);for(;l<r.parts.length;l++)o.parts.push(g(r.parts[l],t))}else{var u=[];for(l=0;l<r.parts.length;l++)u.push(g(r.parts[l],t));a[r.id]={id:r.id,refs:1,parts:u}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};r[l]?r[l].parts.push(u):n.push(r[l]={id:l,parts:[u]})}return n}function h(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function m(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=s++;n=i||(i=m(t)),r=_.bind(null,n,l,!1),o=_.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var l=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(l),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=l()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var l=n[o];(u=a[l.id]).refs--,r.push(u)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var i=0;i<u.parts.length;i++)u.parts[i]();delete a[u.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}},529:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n# Carousel 走马灯\n\n旋转木马，一组轮播的区域。\n\n## 何时使用\n\n- 当有一组平级的内容。\n- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。\n- 常用于一组图片或卡片轮播。\n\n## antd Carousel API\n\n[详情请点击查看官方](https://ant.design/components/carousel-cn/)\n\n| 参数             | 说明                                         | 类型     | 默认值                          |\n|------------------|----------------------------------------------|----------|---------------------------------|\n| effect           | 动画效果函数，可取 scrollx, fade | string | scrollx |\n| dots | 是否显示面板指示点 | boolean   | true |\n| vertical | 垂直显示 | boolean   | false |\n| autoplay | 是否自动切换 | boolean   | false |\n| easing | 动画效果 | string   | linear |\n| beforeChange      | 切换面板的回调                              | function(from, to) | 无\n| afterChange       | 切换面板的回调                              | function(current)  | 无\n\n更多参数可参考：https://github.com/akiran/react-slick\n\n",e.exports=t.default}});