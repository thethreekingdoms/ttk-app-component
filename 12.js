webpackJsonp([12],{440:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=_(n(4)),r=_(n(2)),a=_(n(3)),o=_(n(5)),u=_(n(6)),d=n(0),f=_(d),i=_(n(471)),s=_(n(468)),c=_(n(545)),m=_(n(546)),p=_(n(547)),y=_(n(548)),h=_(n(549));function _(t){return t&&t.__esModule?t:{default:t}}var v=function(t){function e(){return(0,r.default)(this,e),(0,o.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(i.default,{title:"示例一",content:f.default.createElement(m.default,null),doc:c.default}),f.default.createElement(i.default,{title:"示例二",content:f.default.createElement(y.default,null),doc:p.default}),f.default.createElement(s.default,{source:h.default}))}}]),e}(d.Component);e.default=f.default.createElement(v,null),t.exports=e.default},468:function(t,e,n){t.exports=n(9)(1141)},469:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i(n(4)),r=i(n(2)),a=i(n(3)),o=i(n(5)),u=i(n(6)),d=i(n(0)),f=n(470);function i(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){(0,r.default)(this,e);var n=(0,o.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.state={},n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(f.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(t,e,n){}}))}}]),e}(d.default.Component);e.default=s,t.exports=e.default},470:function(t,e,n){t.exports=n(9)(1602)},471:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=i(n(4)),r=i(n(2)),a=i(n(3)),o=i(n(5)),u=i(n(6)),d=i(n(0)),f=(i(n(468)),i(n(469)));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){(0,r.default)(this,e);var n=(0,o.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.state={},n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("p",null,this.props.title),this.props.content,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("div",null,d.default.createElement(f.default,{value:this.props.doc})))}}]),e}(d.default.Component);e.default=s,t.exports=e.default},545:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\nimport React, { Component } from 'react'\nimport { Form, Input, Button } from 'ttk-component'\nconst FormItem = Form.Item\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Form>\n\t\t\t\t<FormItem\n\t\t\t\t\tstyle={{ marginBottom: 20 }}\n\t\t\t\t\tlabel=\"用户名\"\n\t\t\t\t\tlabelCol={{ style: { width: 100 } }}\n\t\t\t\t\tvalidateStatus='error'\n\t\t\t\t\thelp='error'\n\t\t\t\t\thasFeedback\n\t\t\t\t\trequired\n\t\t\t\t>\n\t\t\t\t\t<Input />\n\t\t\t\t</FormItem>\n\t\t\t\t<FormItem\n\t\t\t\t\tstyle={{ marginBottom: 20 }}\n\t\t\t\t\tlabel=\"密码\"\n\t\t\t\t\tlabelCol={{ style: { width: 100 } }}\n\t\t\t\t\trequired\n\t\t\t\t>\n\t\t\t\t\t<Input type='password' />\n\t\t\t\t</FormItem>\n\t\t\t\t<FormItem wrapperCol={{ style: { marginLeft: 100 } }}>\n\t\t\t\t\t<Button type=\"primary\">\n\t\t\t\t\t\tLog in\n\t\t          </Button>\n\t\t\t\t</FormItem>\n\t\t\t</Form>\n\t\t)\n\t}\n}\n",t.exports=e.default},546:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),r=s(n(2)),a=s(n(3)),o=s(n(5)),u=s(n(6)),d=n(0),f=s(d),i=n(128);function s(t){return t&&t.__esModule?t:{default:t}}var c=i.Form.Item,m=function(t){function e(){return(0,r.default)(this,e),(0,o.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return f.default.createElement(i.Form,null,f.default.createElement(c,{style:{marginBottom:20},label:"用户名",labelCol:{style:{width:100}},validateStatus:"error",help:"error",hasFeedback:!0,required:!0},f.default.createElement(i.Input,null)),f.default.createElement(c,{style:{marginBottom:20},label:"密码",labelCol:{style:{width:100}},required:!0},f.default.createElement(i.Input,{type:"password"})),f.default.createElement(c,{wrapperCol:{style:{marginLeft:100}}},f.default.createElement(i.Button,{type:"primary"},"Log in")))}}]),e}(d.Component);e.default=m,t.exports=e.default},547:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Form, Input, Icon, Button } from \'ttk-component\'\nconst FormItem = Form.Item\n\nexport default class Example2 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Form layout="horizontal">\n\t\t\t\t<FormItem\n\t\t\t\t\tvalidateStatus=\'error\'\n\t\t\t\t\thelp=\'error\'\n\t\t\t\t\thasFeedback\n\t\t\t\t\twrapperCol={{ style: { marginRight: 20 } }}\n\t\t\t\t>\n\t\t\t\t\t<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />\n\t\t\t\t</FormItem>\n\t\t\t\t<FormItem wrapperCol={{ style: { marginRight: 20 } }}>\n\t\t\t\t\t<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />\n\t\t\t\t</FormItem>\n\t\t\t\t<FormItem>\n\t\t\t\t\t<Button type="primary">\n\t\t\t\t\t\tLog in\n\t\t          </Button>\n\t\t\t\t</FormItem>\n\t\t\t</Form>\n\t\t)\n\t}\n}\n',t.exports=e.default},548:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),r=s(n(2)),a=s(n(3)),o=s(n(5)),u=s(n(6)),d=n(0),f=s(d),i=n(128);function s(t){return t&&t.__esModule?t:{default:t}}var c=i.Form.Item,m=function(t){function e(){return(0,r.default)(this,e),(0,o.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return f.default.createElement(i.Form,{layout:"horizontal"},f.default.createElement(c,{validateStatus:"error",help:"error",hasFeedback:!0,wrapperCol:{style:{marginRight:20}}},f.default.createElement(i.Input,{prefix:f.default.createElement(i.Icon,{type:"user",style:{fontSize:13}}),placeholder:"Username"})),f.default.createElement(c,{wrapperCol:{style:{marginRight:20}}},f.default.createElement(i.Input,{prefix:f.default.createElement(i.Icon,{type:"lock",style:{fontSize:13}}),type:"password",placeholder:"Password"})),f.default.createElement(c,null,f.default.createElement(i.Button,{type:"primary"},"Log in")))}}]),e}(d.Component);e.default=m,t.exports=e.default},549:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n# Form 表单\n\n\n## API\n\n### Form\n\n\n| 参数      | 说明                                     | 类型       | 默认值 |\n|-----------|------------------------------------------|------------|-------|\n| layout | 表单布局 | 'horizontal' or 'vertical' | 'vertical' |\n\n\n\n### Form.Item\n\n\n| 参数      | 说明                                     | 类型       | 默认值 |\n|-----------|-----------------------------------------|-----------|--------|\n| label | label 标签的文本 | string or ReactNode | -  |\n| labelCol | label 标签布局，如 {style:{width: 100}} | object | - |\n| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol |  object| - |\n| help | 提示信息，如不设置 | string or ReactNode | |\n| extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | string or ReactNode | |\n| required | 是否必填 | boolean | false |\n| validateStatus | 校验状态，可选：'success' 'warning' 'error' 'validating' | string |  |\n| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | false  |\n| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | boolean | true |\n\n\n",t.exports=e.default}});