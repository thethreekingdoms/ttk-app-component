webpackJsonp([27],{460:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=v(n(4)),a=v(n(2)),u=v(n(3)),r=v(n(5)),d=v(n(6)),o=n(0),i=v(o),f=v(n(477)),s=v(n(474)),c=v(n(632)),m=v(n(633)),p=v(n(634));function v(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(f.default,{title:"示例一",content:i.default.createElement(m.default,null),doc:c.default}),i.default.createElement(s.default,{source:p.default}))}}]),t}(o.Component);t.default=i.default.createElement(h,null),e.exports=t.default},474:function(e,t,n){e.exports=n(9)(1141)},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(n(4)),a=f(n(2)),u=f(n(3)),r=f(n(5)),d=f(n(6)),o=f(n(0)),i=n(476);function f(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){(0,a.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={},n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(i.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,t,n){}}))}}]),t}(o.default.Component);t.default=s,e.exports=t.default},476:function(e,t,n){e.exports=n(9)(1603)},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(n(4)),a=f(n(2)),u=f(n(3)),r=f(n(5)),d=f(n(6)),o=f(n(0)),i=(f(n(474)),f(n(475)));function f(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){(0,a.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.handleClick=function(){n.setState({visible:!n.state.visible})},n.state={visible:!1},n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("p",null,this.props.title),this.props.content,o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("a",{onClick:this.handleClick,href:"javasccript:;"},this.state.visible?"收起代码":"展开代码"),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("div",null,this.state.visible?o.default.createElement(i.default,{value:this.props.doc}):null))}}]),t}(o.default.Component);t.default=s,e.exports=t.default},632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\nimport React, { Component } from 'react'\nimport { Slider } from 'ttk-component'\n\nexport default class Example1 extends Component {\n\n\thandleChange(value) {\n\t\tconsole.log(value)\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div style={{ height: 400 }}>\n\t\t\t\t<Slider defaultValue={30} onChange={this.handleChange} />\n\t\t\t\t<Slider range defaultValue={[20, 50]} />\n\t\t\t\t<div style={{ float: \"left\", height: 300 }}>\n\t\t\t\t\t<Slider vertical defaultValue={30} />\n\t\t\t\t</div>\n\t\t\t\t<div style={{ float: \"left\", height: 300 }}>\n\t\t\t\t\t<Slider vertical range step={10} defaultValue={[20, 50]} />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t)\n\t}\n}\n",e.exports=t.default},633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(n(4)),a=s(n(2)),u=s(n(3)),r=s(n(5)),d=s(n(6)),o=n(0),i=s(o),f=n(128);function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"handleChange",value:function(e){console.log(e)}},{key:"render",value:function(){return i.default.createElement("div",{style:{height:400}},i.default.createElement(f.Slider,{defaultValue:30,onChange:this.handleChange}),i.default.createElement(f.Slider,{range:!0,defaultValue:[20,50]}),i.default.createElement("div",{style:{float:"left",height:300}},i.default.createElement(f.Slider,{vertical:!0,defaultValue:30})),i.default.createElement("div",{style:{float:"left",height:300}},i.default.createElement(f.Slider,{vertical:!0,range:!0,step:10,defaultValue:[20,50]})))}}]),t}(o.Component);t.default=c,e.exports=t.default},634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n# Slider 滑动输入\n\n滑动型输入器，展示当前值和可选范围。\n\n## 何时使用\n\n当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。\n\n## antd Slider API\n\n[详情请点击查看官方](https://ant.design/components/slider-cn/)\n\n| 参数       | 说明            | 类型         | 默认值       |\n|------------|----------------|-------------|--------------|\n| range          | 双滑块模式 | boolean          | false\n| min            | 最小值 | number\t\t\t| 0\n| max            | 最大值 | number\t\t\t| 100\n| step           | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 'marks' 不为空对象时，可以设置 'step' 为 'null'，此时 Slider 的可选值仅有 marks 标出来的部分。 | number or null\t| 1\n| marks          | 刻度标记，key 的类型必须为 'number' 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | object | { number: string or ReactNode } or { number: { style: object, label: string or ReactNode } }\n| dots           | 是否只能拖拽到刻度上 | boolean | false\n| value          | 设置当前取值。当 'range' 为 'false' 时，使用 'number'，否则用 '[number, number]'   | number or number[] |\n| defaultValue   | 设置初始取值。当 'range' 为 'false' 时，使用 'number'，否则用 '[number, number]'   | number or number[] | 0 or [0, 0]\n| included       | 'marks' 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | boolean\t\t\t | true\n| disabled       | 值为 'true' 时，滑块为禁用状态 | boolean \t\t\t| false\n| vertical       | 值为 'true' 时，Slider 为垂直方向 | Boolean | false\n| onChange       | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 | Function(value) | NOOP\n| onAfterChange  | 与 'onmouseup' 触发时机一致，把当前值作为参数传入。 | Function(value) | NOOP\n| tipFormatter   | Slider 会把当前值传给 'tipFormatter'，并在 Tooltip 中显示 'tipFormatter' 的返回值，若为 null，则隐藏 Tooltip。 | Function or null | IDENTITY\n\n",e.exports=t.default}});