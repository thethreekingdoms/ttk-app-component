webpackJsonp([25],{458:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=_(n(4)),u=_(n(2)),a=_(n(3)),r=_(n(5)),d=_(n(6)),i=n(0),o=_(i),f=_(n(473)),s=_(n(470)),c=_(n(631)),p=_(n(632)),m=_(n(633));function _(t){return t&&t.__esModule?t:{default:t}}var v=function(t){function e(){return(0,u.default)(this,e),(0,r.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(f.default,{title:"示例一",content:o.default.createElement(p.default,null),doc:c.default}),o.default.createElement(s.default,{source:m.default}))}}]),e}(i.Component);e.default=o.default.createElement(v,null),t.exports=e.default},470:function(t,e,n){t.exports=n(9)(1141)},471:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=f(n(4)),u=f(n(2)),a=f(n(3)),r=f(n(5)),d=f(n(6)),i=f(n(0)),o=n(472);function f(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){(0,u.default)(this,e);var n=(0,r.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.state={},n}return(0,d.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(o.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(t,e,n){}}))}}]),e}(i.default.Component);e.default=s,t.exports=e.default},472:function(t,e,n){t.exports=n(9)(1602)},473:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=f(n(4)),u=f(n(2)),a=f(n(3)),r=f(n(5)),d=f(n(6)),i=f(n(0)),o=(f(n(470)),f(n(471)));function f(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){(0,u.default)(this,e);var n=(0,r.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.state={},n}return(0,d.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("p",null,this.props.title),this.props.content,i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement(o.default,{value:this.props.doc})))}}]),e}(i.default.Component);e.default=s,t.exports=e.default},631:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Spin, Alert } from \'ttk-component\'\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Spin size="small" />\n\t\t\t\t<Spin />\n\t\t\t\t<Spin size="large" />\n\t\t\t\t<Spin tip="Loading...">\n\t\t\t\t\t<Alert\n\t\t\t\t\t\tmessage="Alert message title"\n\t\t\t\t\t\tdescription="Further details about the context of this alert."\n\t\t\t\t\t\ttype="info"\n\t\t\t\t\t/>\n\t\t\t\t</Spin>\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},632:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),u=s(n(2)),a=s(n(3)),r=s(n(5)),d=s(n(6)),i=n(0),o=s(i),f=n(128);function s(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(){return(0,u.default)(this,e),(0,r.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(f.Spin,{size:"small"}),o.default.createElement(f.Spin,null),o.default.createElement(f.Spin,{size:"large"}),o.default.createElement(f.Spin,{tip:"Loading..."},o.default.createElement(f.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})))}}]),e}(i.Component);e.default=c,t.exports=e.default},633:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n# Spin 加载中\n\n用于页面和区块的加载中状态。\n\n## 何时使用\n\n页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。\n\n## ant Spin API\n\n[详情请点击查看官方](https://ant.design/components/spin-cn/)\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nsize | 组件大小，可选值为 ;small; ;default; ;large; | string | 'default'\nspinning | 是否旋转 | boolean | true\ntip | 当作为包裹元素时，可以自定义描述文案 | string | -\ndelay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | -\nwrapperClassName | 包装器的类属性 | string | -\n\n",t.exports=e.default}});