webpackJsonp([14],{433:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=v(n(4)),l=v(n(2)),a=v(n(3)),o=v(n(5)),u=v(n(6)),s=n(0),i=v(s),d=v(n(474)),c=v(n(477)),f=v(n(502)),p=v(n(503)),m=v(n(504)),g=v(n(505)),_=v(n(506));function v(t){return t&&t.__esModule?t:{default:t}}var y=function(t){function e(){return(0,l.default)(this,e),(0,o.default)(this,(e.__proto__||(0,r.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.default,{title:"示例一",content:i.default.createElement(p.default,null),doc:f.default}),i.default.createElement(c.default,{title:"示例二",content:i.default.createElement(g.default,null),doc:m.default}),i.default.createElement(d.default,{source:_.default}))}}]),e}(s.Component);e.default=i.default.createElement(y,null),t.exports=e.default},474:function(t,e,n){t.exports=n(9)(1141)},475:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(4)),l=d(n(2)),a=d(n(3)),o=d(n(5)),u=d(n(6)),s=d(n(0)),i=n(476);function d(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t){(0,l.default)(this,e);var n=(0,o.default)(this,(e.__proto__||(0,r.default)(e)).call(this,t));return n.state={},n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(i.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(t,e,n){}}))}}]),e}(s.default.Component);e.default=c,t.exports=e.default},476:function(t,e,n){t.exports=n(9)(1603)},477:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=d(n(4)),l=d(n(2)),a=d(n(3)),o=d(n(5)),u=d(n(6)),s=d(n(0)),i=(d(n(474)),d(n(475)));function d(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t){(0,l.default)(this,e);var n=(0,o.default)(this,(e.__proto__||(0,r.default)(e)).call(this,t));return n.state={},n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("p",null,this.props.title),this.props.content,s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("div",null,s.default.createElement(i.default,{value:this.props.doc})))}}]),e}(s.default.Component);e.default=c,t.exports=e.default},502:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Alert } from \'ttk-component\'\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Alert message="Success Text" type="success" />\n\t\t\t\t<br />\n\t\t\t\t<Alert message="Info Text" type="info" />\n\t\t\t\t<br />\n\t\t\t\t<Alert message="Warning Text" type="warning" />\n\t\t\t\t<br />\n\t\t\t\t<Alert message="Error Text" type="error" />\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},503:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(n(4)),l=c(n(2)),a=c(n(3)),o=c(n(5)),u=c(n(6)),s=n(0),i=c(s),d=n(128);function c(t){return t&&t.__esModule?t:{default:t}}var f=function(t){function e(){return(0,l.default)(this,e),(0,o.default)(this,(e.__proto__||(0,r.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(d.Alert,{message:"Success Text",type:"success"}),i.default.createElement("br",null),i.default.createElement(d.Alert,{message:"Info Text",type:"info"}),i.default.createElement("br",null),i.default.createElement(d.Alert,{message:"Warning Text",type:"warning"}),i.default.createElement("br",null),i.default.createElement(d.Alert,{message:"Error Text",type:"error"}))}}]),e}(s.Component);e.default=f,t.exports=e.default},504:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Alert } from \'ttk-component\'\n\nexport default class Example1 extends Component {\n\thandleClose(e) {\n\t\tconsole.log(e, \'I was closed.\');\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Alert\n\t\t\t\t\tmessage="success tips"\n\t\t\t\t\tdescription="Detailed description and advices about successful copywriting."\n\t\t\t\t\ttype="success"\n\t\t\t\t\tshowIcon\n\t\t\t\t\tclosable\n\t\t\t\t\tonClose={this.handleClose}\n\t\t\t\t/>\n\t\t\t\t<br />\n\t\t\t\t<Alert\n\t\t\t\t\tmessage="Informational Notes"\n\t\t\t\t\tdescription="Additional description and informations about copywriting."\n\t\t\t\t\ttype="info"\n\t\t\t\t\tshowIcon\n\t\t\t\t/>\n\t\t\t\t<br />\n\t\t\t\t<Alert\n\t\t\t\t\tmessage="Warning"\n\t\t\t\t\tdescription="This is a warning notice about copywriting."\n\t\t\t\t\ttype="warning"\n\t\t\t\t\tshowIcon\n\t\t\t\t/>\n\t\t\t\t<br />\n\t\t\t\t<Alert\n\t\t\t\t\tmessage="Error"\n\t\t\t\t\tdescription="This is an error message about copywriting."\n\t\t\t\t\ttype="error"\n\t\t\t\t\tshowIcon\n\t\t\t\t/>\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},505:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(n(4)),l=c(n(2)),a=c(n(3)),o=c(n(5)),u=c(n(6)),s=n(0),i=c(s),d=n(128);function c(t){return t&&t.__esModule?t:{default:t}}var f=function(t){function e(){return(0,l.default)(this,e),(0,o.default)(this,(e.__proto__||(0,r.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"handleClose",value:function(t){console.log(t,"I was closed.")}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(d.Alert,{message:"success tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0,closable:!0,onClose:this.handleClose}),i.default.createElement("br",null),i.default.createElement(d.Alert,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),i.default.createElement("br",null),i.default.createElement(d.Alert,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),i.default.createElement("br",null),i.default.createElement(d.Alert,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0}))}}]),e}(s.Component);e.default=f,t.exports=e.default},506:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n# Alert 警告提示\n\n警告提示，展现需要关注的信息。\n\n## 何时使用\n\n- 当某个页面需要向用户显示警告的信息时。\n- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。\n\n## antd Alert API\n\n[详情请点击查看官方](https://ant.design/components/alert-cn/)\n\n| 参数        | 说明                                                      | 类型        | 默认值 |\n|----------- |---------------------------------------------------------  | ---------- |-------|\n| type       | 指定警告提示的样式，有四种选择 'success'、'info'、'warning'、'error'   | string     | 'info'，'banner' 模式下默认值为 'warning'    |\n| closable   | 默认不显示关闭按钮                                  | boolean   | 无    |\n| closeText  | 自定义关闭按钮                                     | string or ReactNode   | 无    |\n| message    | 警告提示内容                                       | string or ReactNode   | 无    |\n| description | 警告提示的辅助性文字介绍                            | string or ReactNode   | 无    |\n| onClose     | 关闭时触发的回调函数                                | Function   | 无    |\n| showIcon   | 是否显示辅助图标                                 | boolean   | false，'banner' 模式下默认值为 true    |\n| banner   | 是否用作顶部公告                                 | boolean   | false    |\n",t.exports=e.default}});