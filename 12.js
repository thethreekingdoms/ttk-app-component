webpackJsonp([12],{449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=g(n(4)),u=g(n(2)),a=g(n(3)),r=g(n(5)),o=g(n(6)),c=n(0),f=g(c),i=g(n(478)),d=g(n(475)),s=g(n(571)),y=g(n(572)),m=g(n(573)),p=g(n(574)),h=g(n(575));function g(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(){return(0,u.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(i.default,{title:"示例一",content:f.default.createElement(y.default,null),doc:s.default}),f.default.createElement(i.default,{title:"示例二",content:f.default.createElement(p.default,null),doc:m.default}),f.default.createElement(d.default,{source:h.default}))}}]),t}(c.Component);t.default=f.default.createElement(_,null),e.exports=t.default},475:function(e,t,n){e.exports=n(9)(1141)},476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(4)),u=i(n(2)),a=i(n(3)),r=i(n(5)),o=i(n(6)),c=i(n(0)),f=n(477);function i(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,u.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={},n}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(f.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,t,n){}}))}}]),t}(c.default.Component);t.default=d,e.exports=t.default},477:function(e,t,n){e.exports=n(9)(1603)},478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(4)),u=i(n(2)),a=i(n(3)),r=i(n(5)),o=i(n(6)),c=i(n(0)),f=(i(n(475)),i(n(476)));function i(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,u.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.handleClick=function(){n.setState({visible:!n.state.visible})},n.state={visible:!1},n}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("p",null,this.props.title),this.props.content,c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("a",{onClick:this.handleClick,href:"javasccript:;"},this.state.visible?"收起代码":"展开代码"),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("div",null,this.state.visible?c.default.createElement(f.default,{value:this.props.doc}):null))}}]),t}(c.default.Component);t.default=d,e.exports=t.default},571:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\nimport React, { Component } from 'react'\nimport { Layout } from 'ttk-component'\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Layout height={200}>\n\t\t\t\t<Layout height={50} justifyContent='center' alignItems='center' style={{ backgroundColor: '#eee' }}>header</Layout>\n\t\t\t\t<Layout justifyContent='center' alignItems='center' style={{ backgroundColor: 'aliceblue' }}>content</Layout>\n\t\t\t\t<Layout height={50} justifyContent='center' alignItems='center' style={{ backgroundColor: '#eee' }}>footer</Layout>\n\t\t\t</Layout>\n\t\t)\n\t}\n}\n",e.exports=t.default},572:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(4)),u=d(n(2)),a=d(n(3)),r=d(n(5)),o=d(n(6)),c=n(0),f=d(c),i=n(131);function d(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return(0,u.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return f.default.createElement(i.Layout,{height:200},f.default.createElement(i.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"header"),f.default.createElement(i.Layout,{justifyContent:"center",alignItems:"center",style:{backgroundColor:"aliceblue"}},"content"),f.default.createElement(i.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"footer"))}}]),t}(c.Component);t.default=s,e.exports=t.default},573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\nimport React, { Component } from 'react'\nimport { Layout } from 'ttk-component'\n\nexport default class Example2 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<Layout height={200}>\n\t\t\t\t<Layout height={50} justifyContent='center' alignItems='center' style={{ backgroundColor: '#eee' }}>header</Layout>\n\t\t\t\t<Layout direction='row' justifyContent='center' alignItems='stretch'>\n\t\t\t\t\t<Layout width={100} justifyContent='center' alignItems='center' style={{ backgroundColor: 'antiquewhite' }}>left</Layout>\n\t\t\t\t\t<Layout justifyContent='center' alignItems='center' style={{ backgroundColor: 'aliceblue' }}>content</Layout>\n\t\t\t\t</Layout>\n\t\t\t\t<Layout height={50} justifyContent='center' alignItems='center' style={{ backgroundColor: '#eee' }}>footer</Layout>\n\t\t\t</Layout>\n\t\t)\n\t}\n}\n",e.exports=t.default},574:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(4)),u=d(n(2)),a=d(n(3)),r=d(n(5)),o=d(n(6)),c=n(0),f=d(c),i=n(131);function d(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return(0,u.default)(this,t),(0,r.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return f.default.createElement(i.Layout,{height:200},f.default.createElement(i.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"header"),f.default.createElement(i.Layout,{direction:"row",justifyContent:"center",alignItems:"stretch"},f.default.createElement(i.Layout,{width:100,justifyContent:"center",alignItems:"center",style:{backgroundColor:"antiquewhite"}},"left"),f.default.createElement(i.Layout,{justifyContent:"center",alignItems:"center",style:{backgroundColor:"aliceblue"}},"content")),f.default.createElement(i.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"footer"))}}]),t}(c.Component);t.default=s,e.exports=t.default},575:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n# Layout\n\n一个简单的布局组件，采用flex布局\n\n## API\n\n### Menu props\n\n| 参数     | 说明           | 类型     | 默认值       |\n|----------|----------------|----------|--------------|\n| width | 宽度 | number | - |\n| height | 高度 | number | - |\n| direction | 方向 | string：'row' 'column' | 'column' |\n| justifyContent | 主轴上的对齐方式 | string： 'flex-start' 'flex-end' 'center' 'space-between' 'space-around' | 'flex-start' |\n| alignItems | 交叉轴上的对齐方式 | string： 'flex-start' 'flex-end' 'center' 'space-between' 'space-around' | 'flex-start' |\n| style | 样式 | object | - |\n| className | 样式名 | string | - |\n",e.exports=t.default}});