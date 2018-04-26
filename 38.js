webpackJsonp([38],{431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=b(n(4)),u=b(n(2)),a=b(n(3)),r=b(n(5)),o=b(n(6)),d=n(0),f=b(d),c=b(n(471)),s=b(n(468)),i=b(n(507)),p=b(n(508)),m=b(n(509));function b(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,u.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(c.default,{title:"示例一",content:f.default.createElement(p.default,null),doc:i.default}),f.default.createElement(s.default,{source:m.default}))}}]),t}(d.Component);t.default=f.default.createElement(v,null),e.exports=t.default},468:function(e,t,n){e.exports=n(9)(1141)},469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=c(n(4)),u=c(n(2)),a=c(n(3)),r=c(n(5)),o=c(n(6)),d=c(n(0)),f=n(470);function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){(0,u.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={},n}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(f.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,t,n){}}))}}]),t}(d.default.Component);t.default=s,e.exports=t.default},470:function(e,t,n){e.exports=n(9)(1602)},471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(4)),u=c(n(2)),a=c(n(3)),r=c(n(5)),o=c(n(6)),d=c(n(0)),f=(c(n(468)),c(n(469)));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){(0,u.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={},n}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("p",null,this.props.title),this.props.content,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("div",null,d.default.createElement(f.default,{value:this.props.doc})))}}]),t}(d.default.Component);t.default=s,e.exports=t.default},507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\nimport React, { Component } from 'react'\nimport { Badge } from 'ttk-component'\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Badge count={25} />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<Badge count={109} style={{ backgroundColor: '#87d068' }} />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<Badge count={5}>\n\t\t\t\t\t<a href=\"#\" style={{ height: 42, width: 42, display: 'inline-block', backgroundColor: '#eee' }} />\n\t\t\t\t</Badge>\n\t\t\t</div>\n\t\t)\n\t}\n}\n",e.exports=t.default},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(n(4)),u=s(n(2)),a=s(n(3)),r=s(n(5)),o=s(n(6)),d=n(0),f=s(d),c=n(128);function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return(0,u.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(c.Badge,{count:25}),f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement(c.Badge,{count:4,style:{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}}),f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement(c.Badge,{count:109,style:{backgroundColor:"#87d068"}}),f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement(c.Badge,{count:5},f.default.createElement("a",{href:"#",style:{height:42,width:42,display:"inline-block",backgroundColor:"#eee"}})))}}]),t}(d.Component);t.default=i,e.exports=t.default},509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n# Badge 徽标数\n\n\n图标右上角的圆形徽标数字。\n\n## 何时使用\n\n一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。\n\n## antd Badge API\n\n[详情请点击查看官方](https://ant.design/components/badge-cn/)\n\n```jsx\n<Badge count={5}>\n  <a href=\"#\" className=\"head-example\" />\n</Badge>\n```\n\n\n```jsx\n<Badge count={5} />\n```\n\n| 参数           | 说明                             | 类型       | 默认值 |\n|----------------|----------------------------------|------------|---------|\n| count          | 展示的数字，大于 overflowCount 时显示为 '{overflowCount}+'，为 0 时隐藏 | number | |\n| overflowCount  | 展示封顶的数字值                 | number | 99 |\n| showZero       | 当数值为 0 时，是否展示 Badge   | boolean | false |\n| dot            | 不展示数字，只有一个小红点       | boolean | false  |\n| status         | 设置 Badge 为状态点            | Enum{ 'success', 'processing, 'default', 'error', 'warning' } | '' |\n| text           | 在设置了 status 的前提下有效，设置状态点的文本  | string | '' |\n",e.exports=t.default}});