webpackJsonp([36],{434:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(n(4)),a=m(n(2)),u=m(n(3)),r=m(n(5)),d=m(n(6)),o=n(0),f=m(o),c=m(n(471)),i=m(n(468)),s=m(n(520)),p=m(n(521)),_=m(n(522));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(c.default,{title:"示例一：简单card",content:f.default.createElement(p.default,null),doc:s.default}),f.default.createElement(i.default,{source:_.default}))}}]),t}(o.Component);t.default=f.default.createElement(v,null),e.exports=t.default},468:function(e,t,n){e.exports=n(9)(1141)},469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=c(n(4)),a=c(n(2)),u=c(n(3)),r=c(n(5)),d=c(n(6)),o=c(n(0)),f=n(470);function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){(0,a.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={},n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(f.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,t,n){}}))}}]),t}(o.default.Component);t.default=i,e.exports=t.default},470:function(e,t,n){e.exports=n(9)(1602)},471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(4)),a=c(n(2)),u=c(n(3)),r=c(n(5)),d=c(n(6)),o=c(n(0)),f=(c(n(468)),c(n(469)));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){(0,a.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={},n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",null,this.props.title),this.props.content,o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("div",null,o.default.createElement(f.default,{value:this.props.doc})))}}]),t}(o.default.Component);t.default=i,e.exports=t.default},520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\nimport React, { Component } from 'react'\nimport { Card } from 'ttk-component'\n\nexport default class Example1 extends Component {\n\n  render() {\n    return (\n      <Card title=\"Card title\" extra={<a href=\"#\">More</a>} style={{ width: 300 }}>\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n      </Card>\n    )\n  }\n}\n",e.exports=t.default},521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(4)),a=i(n(2)),u=i(n(3)),r=i(n(5)),d=i(n(6)),o=n(0),f=i(o),c=n(128);function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(c.Card,{title:"Card title",extra:f.default.createElement("a",{href:"#"},"More"),style:{width:300}},f.default.createElement("p",null,"Card content"),f.default.createElement("p",null,"Card content"),f.default.createElement("p",null,"Card content"))}}]),t}(o.Component);t.default=s,e.exports=t.default},522:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n# Card 卡片\n\n通用卡片容器。\n\n## antd Card API\n\n[详情请点击查看官方](https://ant.design/components/card-cn/)\n\n\n| 参数     | 说明           | 类型     | 默认值       |\n|----------|----------------|----------|--------------|\n| title    | 卡片标题 | string or ReactNode   |  -  |\n| extra    | 卡片右上角的操作区域 | string or ReactNode   | - |\n| bordered | 是否有边框 | boolean   |  true  |\n| bodyStyle | 内容区域自定义样式 | object   |  -  |\n| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean   |  false  |\n\n",e.exports=t.default}});