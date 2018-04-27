webpackJsonp([22],{465:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n(4)),l=m(n(2)),o=m(n(3)),u=m(n(5)),r=m(n(6)),d=n(0),f=m(d),i=m(n(477)),c=m(n(474)),s=m(n(647)),b=m(n(648)),p=m(n(649));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(i.default,{title:"示例一",content:f.default.createElement(b.default,null),doc:s.default}),f.default.createElement(c.default,{source:p.default}))}}]),t}(d.Component);t.default=f.default.createElement(v,null),e.exports=t.default},474:function(e,t,n){e.exports=n(9)(1141)},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(4)),l=i(n(2)),o=i(n(3)),u=i(n(5)),r=i(n(6)),d=i(n(0)),f=n(476);function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,l.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={},n}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(f.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,t,n){}}))}}]),t}(d.default.Component);t.default=c,e.exports=t.default},476:function(e,t,n){e.exports=n(9)(1603)},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(4)),l=i(n(2)),o=i(n(3)),u=i(n(5)),r=i(n(6)),d=i(n(0)),f=(i(n(474)),i(n(475)));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,l.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={},n}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("p",null,this.props.title),this.props.content,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("div",null,d.default.createElement(f.default,{value:this.props.doc})))}}]),t}(d.default.Component);t.default=c,e.exports=t.default},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default='\nimport React, { Component } from \'react\'\nimport { Tabs } from \'ttk-component\'\nconst TabPane = Tabs.TabPane\n\nexport default class Example1 extends Component {\n\n\thandleChange = (key) => {\n\t\tconsole.log(key)\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<Tabs defaultActiveKey="1" onChange={this.handleChange}>\n\t\t\t\t<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>\n\t\t\t\t<TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>\n\t\t\t\t<TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>\n\t\t\t</Tabs>\n\t\t)\n\t}\n}\n',e.exports=t.default},648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(4)),l=c(n(2)),o=c(n(3)),u=c(n(5)),r=c(n(6)),d=n(0),f=c(d),i=n(128);function c(e){return e&&e.__esModule?e:{default:e}}var s=i.Tabs.TabPane,b=function(e){function t(){var e,n,o,r;(0,l.default)(this,t);for(var d=arguments.length,f=Array(d),i=0;i<d;i++)f[i]=arguments[i];return n=o=(0,u.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(f))),o.handleChange=function(e){console.log(e)},r=n,(0,u.default)(o,r)}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return f.default.createElement(i.Tabs,{defaultActiveKey:"1",onChange:this.handleChange},f.default.createElement(s,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),f.default.createElement(s,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),f.default.createElement(s,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3"))}}]),t}(d.Component);t.default=b,e.exports=t.default},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n# Tabs 标签页\n\n\n## antd Tabs API\n\n[详情请点击查看官方](https://ant.design/components/tabs-cn/)\n\nAnt Design 依次提供了三级选项卡，分别用于不同的场景。\n\n- 卡片式的页签，提供可关闭的样式，常用于容器顶部。\n- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。\n- [RadioButton](/components/radio/#components-radio-demo-radiobutton) 可作为更次级的页签来使用。\n\n### Tabs\n\n| 参数             | 说明                                         | 类型     | 默认值        |\n|------------------|----------------------------------------------|----------|---------------|\n| activeKey        | 当前激活 tab 面板的 key                      | string   | 无            |\n| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string   | 第一个面板    |\n| onChange         | 切换面板的回调                               | Function | 无            |\n| onTabClick       | tab 被点击的回调                             | Function | 无            |\n| onPrevClick      | prev 按钮被点击的回调                         | Function | 无            |\n| onNextClick      | next 按钮被点击的回调                         | Function | 无            |\n| tabBarExtraContent | tab bar 上额外的元素                       | React.ReactNode | 无          |\n| tabBarStyle      | tar bar 的样式对象                           | object   | -             |\n| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型   | string   | 'line'      |\n| size | 大小，提供 `default` 和 `small` 两种大小，仅当 `type=\"line\"` 时生效。  | string   | 'default'      |\n| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left`  | string   | 'top'      |\n| onEdit | 新增和删除页签的回调，在 `type=\"editable-card\"` 时有效 | (targetKey, action): void | 无 |\n| hideAdd | 是否隐藏加号图标，在 `type=\"editable-card\"` 时有效 | boolean   | false    |\n| animated | 是否使用动画切换 Tabs，在 `tabPosition=top or bottom` 时有效 | boolean or {inkBar:boolean, tabPane:boolean} | true |\n\n### Tabs.TabPane\n\n| 参数 | 说明             | 类型                    | 默认值 |\n|------|------------------|-------------------------|--------|\n| key  | 对应 activeKey   | string                  | 无     |\n| tab  | 选项卡头显示文字 | string or ReactNode | 无     |\n\n",e.exports=t.default}});