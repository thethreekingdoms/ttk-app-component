webpackJsonp([42],{429:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=x(n(4)),f=x(n(2)),r=x(n(3)),o=x(n(5)),a=x(n(6)),l=n(0),d=x(l),i=x(n(470)),c=x(n(471)),s=x(n(495)),p=x(n(496)),m=x(n(497));function x(t){return t&&t.__esModule?t:{default:t}}var _=function(t){function e(){return(0,f.default)(this,e),(0,o.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,a.default)(e,t),(0,r.default)(e,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(p.default,null),d.default.createElement(c.default,{value:s.default}),d.default.createElement(i.default,{source:m.default}))}}]),e}(l.Component);e.default=d.default.createElement(_,null),t.exports=e.default},470:function(t,e,n){t.exports=n(9)(1141)},471:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(4)),f=i(n(2)),r=i(n(3)),o=i(n(5)),a=i(n(6)),l=i(n(0)),d=n(472);function i(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t){(0,f.default)(this,e);var n=(0,o.default)(this,(e.__proto__||(0,u.default)(e)).call(this,t));return n.state={},n}return(0,a.default)(e,t),(0,r.default)(e,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(d.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(t,e,n){}}))}}]),e}(l.default.Component);e.default=c,t.exports=e.default},472:function(t,e,n){t.exports=n(9)(1602)},495:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n\nimport React,{Component} from 'react'\n\nimport { Affix, Button } from 'ttk-component'\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t \t\t<Affix target={()=>document.querySelector('#main')}>\n\t\t\t      <Button type=\"primary\">Affix top</Button>\n\t\t\t    </Affix>\n\t\t\t    <br />\n\t\t\t    <br />\n\t\t\t    <Affix target={()=>document.querySelector('#main')} offsetBottom={0}>\n\t\t\t      <Button type=\"primary\">Affix bottom</Button>\n\t\t\t    </Affix>\n\t\t  \t</div>\n\t\t)\n\t}\n}\n",t.exports=e.default},496:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=c(n(4)),f=c(n(2)),r=c(n(3)),o=c(n(5)),a=c(n(6)),l=n(0),d=c(l),i=n(128);function c(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return(0,f.default)(this,e),(0,o.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,a.default)(e,t),(0,r.default)(e,[{key:"render",value:function(){return d.default.createElement("div",{id:"Affix_1"},d.default.createElement(i.Affix,{target:function(){return document.querySelector(".content-container")},offsetBottom:0},d.default.createElement(i.Button,{type:"primary"},"Affix top")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement(i.Affix,{offsetBottom:0},d.default.createElement(i.Button,{type:"primary"},"Affix bottom")))}}]),e}(l.Component);e.default=s,t.exports=e.default},497:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n# Affix 固钉\n\n将页面元素钉在可视范围。\n\n## 何时使用\n\n当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。\n\n页面可视范围过小时，慎用此功能以免遮挡页面内容。\n\n## antd Affix API\n\n[详情请点击查看官方](https://ant.design/components/affix-cn/)\n\n| 成员        | 说明           | 类型               | 默认值       |\n|-------------|----------------|--------------------|--------------|\n| offsetTop    | 距离窗口顶部达到指定偏移量后触发   | number |         |\n| offsetBottom | 距离窗口底部达到指定偏移量后触发   | number |         |\n| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |\n| onChange | 固定状态改变时触发的回调函数   | Function(affixed) | 无        |\n\n**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：\n",t.exports=e.default}});