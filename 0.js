webpackJsonp([0],{460:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=w(n(4)),a=w(n(2)),o=w(n(3)),u=w(n(5)),r=w(n(6)),d=n(0),i=w(d),c=w(n(478)),s=w(n(475)),f=w(n(618)),p=w(n(619)),h=w(n(620)),m=w(n(621)),v=w(n(622)),b=w(n(623)),g=w(n(624)),O=w(n(625)),C=w(n(626)),_=w(n(627)),E=w(n(628)),S=w(n(629)),y=w(n(630)),k=w(n(631)),x=w(n(632));function w(t){return t&&t.__esModule?t:{default:t}}var M=function(t){function e(){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,r.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.default,{title:"示例一:基本",content:i.default.createElement(p.default,null),doc:f.default}),i.default.createElement(c.default,{title:"示例二:Search",content:i.default.createElement(m.default,null),doc:h.default}),i.default.createElement(c.default,{title:"示例三:combobox",content:i.default.createElement(b.default,null),doc:v.default}),i.default.createElement(c.default,{title:"示例四:multiple",content:i.default.createElement(O.default,null),doc:g.default}),i.default.createElement(c.default,{title:"示例五:tags",content:i.default.createElement(_.default,null),doc:C.default}),i.default.createElement(c.default,{title:"示例六:新增功能",content:i.default.createElement(S.default,null),doc:E.default}),i.default.createElement(c.default,{title:"示例七:后缀",content:i.default.createElement(k.default,null),doc:y.default}),i.default.createElement(s.default,{source:x.default}))}}]),e}(d.Component);e.default=i.default.createElement(M,null),t.exports=e.default},475:function(t,e,n){t.exports=n(9)(1141)},476:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=c(n(4)),a=c(n(2)),o=c(n(3)),u=c(n(5)),r=c(n(6)),d=c(n(0)),i=n(477);function c(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.state={},n}return(0,r.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(i.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(t,e,n){}}))}}]),e}(d.default.Component);e.default=s,t.exports=e.default},477:function(t,e,n){t.exports=n(9)(1603)},478:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=c(n(4)),a=c(n(2)),o=c(n(3)),u=c(n(5)),r=c(n(6)),d=c(n(0)),i=(c(n(475)),c(n(476)));function c(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){(0,a.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.handleClick=function(){n.setState({visible:!n.state.visible})},n.state={visible:!1},n}return(0,r.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("p",null,this.props.title),this.props.content,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("a",{onClick:this.handleClick,href:"javasccript:;"},this.state.visible?"收起代码":"展开代码"),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("div",null,this.state.visible?d.default.createElement(i.default,{value:this.props.doc}):null))}}]),e}(d.default.Component);e.default=s,t.exports=e.default},618:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Select } from \'ttk-component\'\n\nconst Option = Select.Option\n\nexport default class Example1 extends Component {\n\n\thandleChange(value) {\n\t\tconsole.log(value);\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Select defaultValue="2" style={{ width: 120 }} onChange={this.handleChange}>\n\t\t\t\t\t<Option value="1">aaa</Option>\n\t\t\t\t\t<Option value="2">bbb</Option>\n\t\t\t\t\t<Option value="3" disabled>ccc</Option>\n\t\t\t\t\t<Option value="4">ddd</Option>\n\t\t\t\t</Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},619:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),a=s(n(2)),o=s(n(3)),u=s(n(5)),r=s(n(6)),d=n(0),i=s(d),c=n(131);function s(t){return t&&t.__esModule?t:{default:t}}var f=c.Select.Option,p=function(t){function e(){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,r.default)(e,t),(0,o.default)(e,[{key:"handleChange",value:function(t){console.log("selected "+t)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Select,{defaultValue:"2",style:{width:120},onChange:this.handleChange},i.default.createElement(f,{value:"1"},"aaa"),i.default.createElement(f,{value:"2"},"bbb"),i.default.createElement(f,{value:"3",disabled:!0},"ccc"),i.default.createElement(f,{value:"4"},"ddd")))}}]),e}(d.Component);e.default=p,t.exports=e.default},620:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Select } from \'ttk-component\'\n\nconst Option = Select.Option\n\nexport default class Example2 extends Component {\n\n\thandleChange(value) {\n\t\tconsole.log(value);\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Select\n\t\t\t\t\tshowSearch\n\t\t\t\t\tstyle={{ width: 200 }}\n\t\t\t\t\tplaceholder="Select"\n\t\t\t\t\tonChange={this.handleChange}>\n\t\t\t\t\t<Option value="1">aaa</Option>\n\t\t\t\t\t<Option value="2">bbb</Option>\n\t\t\t\t\t<Option value="3">ccc</Option>\n\t\t\t\t\t<Option value="4">ddd</Option>\n\t\t\t\t</Select>\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<Select\n\t\t\t\t\tshowSearch\n\t\t\t\t\tstyle={{ width: 200 }}\n\t\t\t\t\tplaceholder="Select"\n\t\t\t\t\toptionFilterProp="children"\n\t\t\t\t\tonChange={this.handleChange}>\n\t\t\t\t\t<Option value="1">aaa</Option>\n\t\t\t\t\t<Option value="2">bbb</Option>\n\t\t\t\t\t<Option value="3">ccc</Option>\n\t\t\t\t\t<Option value="4">ddd</Option>\n\t\t\t\t</Select>\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<Select\n\t\t\t\t\tshowSearch\n\t\t\t\t\tstyle={{ width: 200 }}\n\t\t\t\t\tplaceholder="Select"\n\t\t\t\t\tfilterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}\n\t\t\t\t\tonChange={this.handleChange}>\n\t\t\t\t\t<Option value="1">aaa</Option>\n\t\t\t\t\t<Option value="2">bbb</Option>\n\t\t\t\t\t<Option value="3">ccc</Option>\n\t\t\t\t\t<Option value="4">ddd</Option>\n\t\t\t\t</Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},621:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),a=s(n(2)),o=s(n(3)),u=s(n(5)),r=s(n(6)),d=n(0),i=s(d),c=n(131);function s(t){return t&&t.__esModule?t:{default:t}}var f=c.Select.Option,p=function(t){function e(){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,r.default)(e,t),(0,o.default)(e,[{key:"handleChange",value:function(t){console.log("selected "+t)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Select,{showSearch:!0,style:{width:200},placeholder:"Select",onChange:this.handleChange},i.default.createElement(f,{value:"1"},"aaa"),i.default.createElement(f,{value:"2"},"bbb"),i.default.createElement(f,{value:"3"},"ccc"),i.default.createElement(f,{value:"4"},"ddd")),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement(c.Select,{showSearch:!0,style:{width:200},placeholder:"Select",optionFilterProp:"children",onChange:this.handleChange},i.default.createElement(f,{value:"1"},"aaa"),i.default.createElement(f,{value:"2"},"bbb"),i.default.createElement(f,{value:"3"},"ccc"),i.default.createElement(f,{value:"4"},"ddd")),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement(c.Select,{showSearch:!0,style:{width:200},placeholder:"Select",filterOption:function(t,e){return e.props.children.toLowerCase().indexOf(t.toLowerCase())>=0},onChange:this.handleChange},i.default.createElement(f,{value:"1"},"aaa"),i.default.createElement(f,{value:"2"},"bbb"),i.default.createElement(f,{value:"3"},"ccc"),i.default.createElement(f,{value:"4"},"ddd")))}}]),e}(d.Component);e.default=p,t.exports=e.default},622:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Select } from \'ttk-component\'\n\nconst Option = Select.Option\n\nexport default class Example3 extends Component {\n\n\thandleChange(value) {\n\t\tconsole.log(value);\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Select\n\t\t\t\t\tmode="combobox"\n\t\t\t\t\tstyle={{ width: 200 }}\n\t\t\t\t\tplaceholder="Select"\n\t\t\t\t\toptionFilterProp="children"\n\t\t\t\t\toptionLabelProp="children"\n\t\t\t\t\tonChange={this.handleChange}>\n\t\t\t\t\t<Option value="1">aaa</Option>\n\t\t\t\t\t<Option value="2">bbb</Option>\n\t\t\t\t\t<Option value="3">ccc</Option>\n\t\t\t\t\t<Option value="4">ddd</Option>\n\t\t\t\t</Select>\n\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},623:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),a=s(n(2)),o=s(n(3)),u=s(n(5)),r=s(n(6)),d=n(0),i=s(d),c=n(131);function s(t){return t&&t.__esModule?t:{default:t}}var f=c.Select.Option,p=function(t){function e(){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,r.default)(e,t),(0,o.default)(e,[{key:"handleChange",value:function(t){console.log("selected "+t)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Select,{mode:"combobox",style:{width:200},placeholder:"Select",optionFilterProp:"children",optionLabelProp:"children",onChange:this.handleChange},i.default.createElement(f,{value:"1"},"aaa"),i.default.createElement(f,{value:"2"},"bbb"),i.default.createElement(f,{value:"3"},"ccc"),i.default.createElement(f,{value:"4"},"ddd")))}}]),e}(d.Component);e.default=p,t.exports=e.default},624:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\nimport React, { Component } from 'react'\nimport { Select } from 'ttk-component'\n\nconst Option = Select.Option\n\n\nconst children = [];\nfor (let i = 10; i < 36; i++) {\n\tchildren.push(<Option key={i.toString(36) + i} >{i.toString(36) + i}</Option>)\n}\n\nexport default class Example4 extends Component {\n\n\thandleChange(value) {\n\t\tconsole.log(value);\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Select\n\t\t\t\t\tmode=\"multiple\"\n\t\t\t\t\tstyle={{ width: '100%' }}\n\t\t\t\t\tplaceholder=\"多选模式\"\n\t\t\t\t\tonChange={this.handleChange}>\n\n\t\t\t\t\t{children}\n\n\t\t\t\t</Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n",t.exports=e.default},625:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),a=s(n(2)),o=s(n(3)),u=s(n(5)),r=s(n(6)),d=n(0),i=s(d),c=n(131);function s(t){return t&&t.__esModule?t:{default:t}}for(var f=c.Select.Option,p=[],h=10;h<36;h++)p.push(i.default.createElement(f,{key:h.toString(36)+h},h.toString(36)+h));var m=function(t){function e(){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,r.default)(e,t),(0,o.default)(e,[{key:"handleChange",value:function(t){console.log("selected "+t)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Select,{mode:"multiple",style:{width:"100%"},placeholder:"多选模式",onChange:this.handleChange},p))}}]),e}(d.Component);e.default=m,t.exports=e.default},626:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\nimport React, { Component } from 'react'\nimport { Select } from 'ttk-component'\n\nconst Option = Select.Option\n\n\nconst children = [];\nfor (let i = 10; i < 36; i++) {\n\tchildren.push(<Option key={i.toString(36) + i} >{i.toString(36) + i}</Option>)\n}\n\nexport default class Example5 extends Component {\n\n\thandleChange(value) {\n\t\tconsole.log(value);\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Select\n\t\t\t\t\tmode=\"tags\"\n\t\t\t\t\tstyle={{ width: '100%' }}\n\t\t\t\t\tplaceholder=\"标签模式\"\n\t\t\t\t\tonChange={this.handleChange}>\n\n\t\t\t\t\t{children}\n\n\t\t\t\t</Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n",t.exports=e.default},627:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),a=s(n(2)),o=s(n(3)),u=s(n(5)),r=s(n(6)),d=n(0),i=s(d),c=n(131);function s(t){return t&&t.__esModule?t:{default:t}}for(var f=c.Select.Option,p=[],h=10;h<36;h++)p.push(i.default.createElement(f,{key:h.toString(36)+h},h.toString(36)+h));var m=function(t){function e(){return(0,a.default)(this,e),(0,u.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,r.default)(e,t),(0,o.default)(e,[{key:"handleChange",value:function(t){console.log("selected "+t)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Select,{mode:"tags",style:{width:"100%"},placeholder:"标签模式",onChange:this.handleChange},p))}}]),e}(d.Component);e.default=m,t.exports=e.default},628:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Select, Button, Modal, Input } from \'ttk-component\'\n\nconst Option = Select.Option\n\nexport default class Example1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props)\n\n\t\tthis.state = {\n\t\t\titems: ["aaa1", "aaa2", "ccc3"],\n\t\t\tinputValue: \'\'\n\t\t}\n\n\t}\n\n\thandleChange = (value) => {\n\t\tconsole.log(value);\n\t}\n\n\thandleAddInputChange = (e) => {\n\t\tthis.setState({ inputValue: e.target.value })\n\t}\n\n\thandleAdd = async () => {\n\t\tif (await Modal.show({\n\t\t\ttitle: "新增",\n\t\t\tchildren: (<div><Input value={this.state.inputValue} onChange={this.handleAddInputChange} /></div>)\n\t\t})) {\n\t\t\tlet items = this.state.items\n\t\t\titems.push(this.state.inputValue)\n\t\t\tthis.setState({ items, inputValue: \'\' })\n\t\t}\n\t\telse {\n\t\t\tthis.setState({ inputValue: \'\' })\n\t\t}\n\t}\n\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Select\n\t\t\t\t\tstyle={{ width: 120 }}\n\t\t\t\t\tonChange={this.handleChange}\n\t\t\t\t\tdropdownFooter={<Button style={{ width: "100%" }} type="primary" onClick={this.handleAdd}>新增</Button>}\n\t\t\t\t\tenableHideDropdownByClick={true}>\n\t\t\t\t\t{\n\t\t\t\t\t\tthis.state.items.map(i => <Option key={i}>{i}</Option>)\n\t\t\t\t\t}\n\t\t\t\t</Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},629:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=p(n(62)),a=p(n(63)),o=p(n(4)),u=p(n(2)),r=p(n(3)),d=p(n(5)),i=p(n(6)),c=n(0),s=p(c),f=n(131);function p(t){return t&&t.__esModule?t:{default:t}}var h=f.Select.Option,m=function(t){function e(t){var n=this;(0,u.default)(this,e);var r=(0,d.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return r.handleChange=function(t){console.log("selected "+t)},r.handleAddInputChange=function(t){r.setState({inputValue:t.target.value})},r.handleAdd=(0,a.default)(l.default.mark(function t(){var e;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Modal.show({title:"新增",children:s.default.createElement("div",null,s.default.createElement(f.Input,{value:r.state.inputValue,onChange:r.handleAddInputChange}))});case 2:if(!t.sent){t.next=8;break}(e=r.state.items).push(r.state.inputValue),r.setState({items:e,inputValue:""}),t.next=9;break;case 8:r.setState({inputValue:""});case 9:case"end":return t.stop()}},t,n)})),r.state={items:["aaa1","aaa2","ccc3"],inputValue:""},r}return(0,i.default)(e,t),(0,r.default)(e,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(f.Select,{style:{width:120},onChange:this.handleChange,dropdownFooter:s.default.createElement(f.Button,{style:{width:"100%"},type:"primary",onClick:this.handleAdd},"新增"),enableHideDropdownByClick:!0},this.state.items.map(function(t){return s.default.createElement(h,{key:t},t)})))}}]),e}(c.Component);e.default=m,t.exports=e.default},630:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='\nimport React, { Component } from \'react\'\nimport { Select, Button, Modal, Input } from \'ttk-component\'\n\nconst Option = Select.Option\n\nexport default class Example7 extends Component {\n\n\thandleChange = (value) => {\n\t\tconsole.log(value);\n\t}\n\n\thandleLinkClick = (e) => {\n\t\te.stopPropagation()\n\t\tconsole.log(\'link\')\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Select\n\t\t\t\t\tstyle={{ width: 200 }}\n\t\t\t\t\tonChange={this.handleChange}\n\t\t\t\t\tshowArrow={false}\n\t\t\t\t\tsuffix={<a onClick={this.handleLinkClick}>link</a>}\n\t\t\t\t>\n\t\t\t\t\t<Option value="1">aaa</Option>\n\t\t\t\t\t<Option value="2">bbb</Option>\n\t\t\t\t\t<Option value="3">ccc</Option>\n\t\t\t\t\t<Option value="4">ddd</Option>\n\t\t\t\t</Select>\n\t\t\t</div>\n\t\t)\n\t}\n}\n',t.exports=e.default},631:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),a=s(n(2)),o=s(n(3)),u=s(n(5)),r=s(n(6)),d=n(0),i=s(d),c=n(131);function s(t){return t&&t.__esModule?t:{default:t}}var f=c.Select.Option,p=function(t){function e(){var t,n,o,r;(0,a.default)(this,e);for(var d=arguments.length,i=Array(d),c=0;c<d;c++)i[c]=arguments[c];return n=o=(0,u.default)(this,(t=e.__proto__||(0,l.default)(e)).call.apply(t,[this].concat(i))),o.handleChange=function(t){console.log("selected "+t)},o.handleLinkClick=function(t){t.stopPropagation(),console.log("link")},r=n,(0,u.default)(o,r)}return(0,r.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Select,{style:{width:200},onChange:this.handleChange,showArrow:!1,suffix:i.default.createElement("a",{onClick:this.handleLinkClick},"link")},i.default.createElement(f,{value:"1"},"aaa"),i.default.createElement(f,{value:"2"},"bbb"),i.default.createElement(f,{value:"3"},"ccc"),i.default.createElement(f,{value:"4"},"ddd")))}}]),e}(d.Component);e.default=p,t.exports=e.default},632:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n# Select 选择框\n\n选择框控件，基于rc-select，新增了一些接口\n\n## 新增或修改的API\n\n| 参数      | 说明             | 类型      | 默认值  |\n|----------|------------------|----------|--------|\n| dropdownFooter | 下拉脚，可以在下拉底部添加袁术 | ReactNode | - |\n| enableHideDropdownByClick | 下拉脚点击是否关闭当前弹出的下拉框 | boolean | - |\n| suffix | 后缀，类似input后缀的功能 | ReactNode | - |\n\n\n\n## antd Select API\n\n[详情请点击查看官方](https://ant.design/components/select-cn/)\n\n### Select props\n\n| 参数     | 说明           | 类型     | 默认值       |\n|----------|----------------|----------|--------------|\n| value    | 指定当前选中的条目 | string or string[] |  -  |\n| defaultValue | 指定默认选中的条目 | string or string[] |  -  |\n| mode | 设置 Select 的模式（2.9 之后支持） | 'multiple'  or  'tags'  or  'combobox' | - |\n| multiple   | 支持多选（2.9 之后废弃，请使用 'mode'） | boolean | false |\n| tags | 可以把随意输入的条目作为 tag，输入项不需要与下拉选项匹配（2.9 之后废弃，请使用 'mode'） | boolean | false |\n| combobox | 输入框自动提示模式（2.9 之后废弃，请使用 'mode'） | boolean | false |\n| allowClear   | 支持清除 | boolean | false |\n| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 'inputValue' 'option' 两个参数，当 'option' 符合筛选条件时，应返回 'true'，反之则返回 'false'。 | boolean or function(inputValue, option) | true     |\n| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value, option) | -   |\n| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 |  function(value) | -   |\n| onChange | 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数 | function(value) | - |\n| onSearch | 文本框值变化时回调 | function(value: string) |  |\n| onBlur | 失去焦点的时回调 | function | - |\n| onFocus | 获得焦点时回调 | function | - |\n| placeholder | 选择框默认文字 | string | - |\n| notFoundContent | 当下拉列表为空时显示的内容 | string | 'Not Found' |\n| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |\n| optionFilterProp | 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索 | string | value |\n| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 'value'。 | string | 'children' （combobox 模式下为 'value'） |\n| size    | 选择框大小，可选 'large' 'small'  | string      |      default      |\n| showSearch | 使单选模式可搜索 | boolean | false |\n| disabled | 是否禁用 | boolean | false |\n| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true\n| dropdownStyle | 下拉菜单的 style 属性 | object | - |\n| dropdownClassName | 下拉菜单的 className 属性 | string | - |\n| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](http://codepen.io/anon/pen/xVBOVQ?editors=001) | Function(triggerNode) | () => document.body |\n| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 'string' 变为 '{key: string, label: ReactNode}' 的格式 | boolean | false |\n| tokenSeparators | 在 tags 和 multiple 模式下自动分词的分隔符 | string[] |  |\n\n### Option props\n\n| 参数     | 说明           | 类型     | 默认值       |\n|----------|----------------|----------|--------------|\n| disabled    | 是否禁用 | boolean   |  false  |\n| value | 默认根据此属性值进行筛选 | string | - |\n| key   | 和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | string |  |\n| title | 选中该 Option 后，Select 的 title | string | - |\n\n### OptGroup props\n\n| 参数     | 说明           | 类型     | 默认值          |\n|----------|----------------|----------|-----------------|\n| label    | 组名           | string or React.Element | 无  |\n| key      |                |  string  | -               |\n\n",t.exports=e.default}});