webpackJsonp([4],{421:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=y(n(4)),o=y(n(2)),a=y(n(3)),r=y(n(5)),u=y(n(6)),d=n(0),c=y(d),i=y(n(477)),f=y(n(474)),s=y(n(480)),m=y(n(481)),h=y(n(482)),C=y(n(483)),p=y(n(484)),w=y(n(485)),x=y(n(486));function y(t){return t&&t.__esModule?t:{default:t}}var E=function(t){function e(){return(0,o.default)(this,e),(0,r.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(i.default,{title:"示例一",content:c.default.createElement(m.default,null),doc:s.default}),c.default.createElement(i.default,{title:"示例二",content:c.default.createElement(C.default,null),doc:h.default}),c.default.createElement(i.default,{title:"示例三",content:c.default.createElement(w.default,null),doc:p.default}),c.default.createElement(f.default,{source:x.default}))}}]),e}(d.Component);e.default=c.default.createElement(E,null),t.exports=e.default},474:function(t,e,n){t.exports=n(9)(1141)},475:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i(n(4)),o=i(n(2)),a=i(n(3)),r=i(n(5)),u=i(n(6)),d=i(n(0)),c=n(476);function i(t){return t&&t.__esModule?t:{default:t}}var f=function(t){function e(t){(0,o.default)(this,e);var n=(0,r.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.state={},n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(c.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(t,e,n){}}))}}]),e}(d.default.Component);e.default=f,t.exports=e.default},476:function(t,e,n){t.exports=n(9)(1603)},477:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=i(n(4)),o=i(n(2)),a=i(n(3)),r=i(n(5)),u=i(n(6)),d=i(n(0)),c=(i(n(474)),i(n(475)));function i(t){return t&&t.__esModule?t:{default:t}}var f=function(t){function e(t){(0,o.default)(this,e);var n=(0,r.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return n.state={},n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("p",null,this.props.title),this.props.content,d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("div",null,d.default.createElement(c.default,{value:this.props.doc})))}}]),e}(d.default.Component);e.default=f,t.exports=e.default},480:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\nimport React, { Component } from 'react'\nimport { DataGrid, Checkbox, Icon } from 'ttk-component'\n\nconst Column = DataGrid.Column\nconst Cell = DataGrid.Cell\n\nconst dataSource = []\n\nfor (let i = 0; i < 100; i++) {\n\tdataSource.push({\n\t\tcode: 'code'+i,\n\t\tname: 'name'+i\n\t})\n}\n\nconst columns = [\n\t<Column\n\t\tcolumnKey='select'\n\t\tfixed\n\t\theader={<Cell><Checkbox /></Cell>}\n\t\tcell={(ps) => <Cell><Checkbox /></Cell>}\n\t\twidth={40}\n\t/>,\n\t<Column\n\t\tcolumnKey='option'\n\t\tfixed\n\t\theader={<Cell>操作</Cell>}\n\t\tcell={(ps) => <Cell ><Icon type='github' showStyle='showy' style={{ marginRight: 8 }} /><Icon type='github' showStyle='softly' /></Cell>}\n\t\twidth={70}\n\t/>,\n\t<Column\n\t\tcolumnKey='code'\n\t\theader={<Cell>编码</Cell>}\n\t\tcell={(ps) => <Cell>{dataSource[ps.rowIndex].code}</Cell>}\n\t\tfooter={<Cell>footer</Cell>}\n\t\twidth={200}\n\t/>,\n\t<Column\n\t\tcolumnKey='name'\n\t\theader={<Cell>名称</Cell>}\n\t\tcell={(ps) => <Cell>{dataSource[ps.rowIndex].name}</Cell>}\n\t\tfooter={<Cell>footer</Cell>}\n\t\tflexGrow={1}\n\t\twidth={200}\n\t/>,\n\t<Column\n\t\tcolumnKey='ext1'\n\t\theader={<Cell>Ext1</Cell>}\n\t\tcell={(ps) => <Cell>ext1</Cell>}\n\t\tflexGrow={1}\n\t\twidth={400}\n\t/>,\n\t<Column\n\t\tcolumnKey='ext2'\n\t\theader={<Cell>Ext2</Cell>}\n\t\tcell={(ps) => <Cell>ext2</Cell>}\n\t\tflexGrow={1}\n\t\twidth={400}\n\t/>,\n\t<Column\n\t\tcolumnKey='ext3'\n\t\theader={<Cell>Ext3</Cell>}\n\t\tcell={(ps) => <Cell>ext3</Cell>}\n\t\tflexGrow={1}\n\t\twidth={400}\n\t/>\n]\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div style={{ height: 300, display: 'flex' }}>\n\t\t\t\t<DataGrid\n\t\t\t\t\theaderHeight={35}\n\t\t\t\t\trowsCount={100}\n\t\t\t\t\trowHeight={35}\n\t\t\t\t\tfooterHeight={35}\n\t\t\t\t\tcolumns={columns}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t)\n\t}\n}\n",t.exports=e.default},481:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=f(n(4)),o=f(n(2)),a=f(n(3)),r=f(n(5)),u=f(n(6)),d=n(0),c=f(d),i=n(128);function f(t){return t&&t.__esModule?t:{default:t}}for(var s=i.DataGrid.Column,m=i.DataGrid.Cell,h=[],C=0;C<100;C++)h.push({code:"code"+C,name:"name"+C});var p=[c.default.createElement(s,{columnKey:"select",fixed:!0,header:c.default.createElement(m,null,c.default.createElement(i.Checkbox,null)),cell:function(t){return c.default.createElement(m,null,c.default.createElement(i.Checkbox,null))},width:40}),c.default.createElement(s,{columnKey:"option",fixed:!0,header:c.default.createElement(m,null,"操作"),cell:function(t){return c.default.createElement(m,null,c.default.createElement(i.Icon,{type:"github",showStyle:"showy",style:{marginRight:8}}),c.default.createElement(i.Icon,{type:"github",showStyle:"softly"}))},width:70}),c.default.createElement(s,{columnKey:"code",header:c.default.createElement(m,null,"编码"),cell:function(t){return c.default.createElement(m,null,h[t.rowIndex].code)},footer:c.default.createElement(m,null,"footer"),width:200}),c.default.createElement(s,{columnKey:"name",header:c.default.createElement(m,null,"名称"),cell:function(t){return c.default.createElement(m,null,h[t.rowIndex].name)},footer:c.default.createElement(m,null,"footer"),flexGrow:1,width:200}),c.default.createElement(s,{columnKey:"ext1",header:c.default.createElement(m,null,"Ext1"),cell:function(t){return c.default.createElement(m,null,"ext1")},flexGrow:1,width:400}),c.default.createElement(s,{columnKey:"ext2",header:c.default.createElement(m,null,"Ext2"),cell:function(t){return c.default.createElement(m,null,"ext2")},flexGrow:1,width:400}),c.default.createElement(s,{columnKey:"ext3",header:c.default.createElement(m,null,"Ext3"),cell:function(t){return c.default.createElement(m,null,"ext3")},flexGrow:1,width:400})],w=function(t){function e(){return(0,o.default)(this,e),(0,r.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return c.default.createElement("div",{style:{height:300,display:"flex"}},c.default.createElement(i.DataGrid,{headerHeight:35,rowsCount:100,rowHeight:35,footerHeight:35,columns:p}))}}]),e}(d.Component);e.default=w,t.exports=e.default},482:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\nimport React, { Component } from 'react'\nimport { DataGrid, Checkbox } from 'ttk-component'\n\nconst Column = DataGrid.Column\nconst Cell = DataGrid.Cell\nconst TextCell = DataGrid.TextCell\n\nconst dataSource = []\n\nfor (let i = 0; i < 100; i++) {\n\tdataSource.push({\n\t\tcode: 'code' +i,\n\t\tname: 'name' +i',\n\t\tmemo: '这是一个使用textCell的示例，鼠标移入到当前会有提示',\n\t})\n}\n\nconst columns = [\n\t<Column\n\t\tcolumnKey='select'\n\t\tfixed\n\t\theader={<Cell><Checkbox /></Cell>}\n\t\tcell={(ps) => <Cell><Checkbox /></Cell>}\n\t\twidth={40}\n\t/>,\n\t<Column\n\t\tcolumnKey='code'\n\t\theader={<Cell>编码</Cell>}\n\t\tcell={(ps) => <TextCell value={dataSource[ps.rowIndex].code} />}\n\t\tfooter={<Cell>footer</Cell>}\n\t\twidth={200}\n\t/>,\n\t<Column\n\t\tcolumnKey='name'\n\t\theader={<Cell>名称</Cell>}\n\t\tcell={(ps) => <TextCell align='left' value={dataSource[ps.rowIndex].name} sand={(v) => [<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, v]} />}\n\t\tfooter={<Cell>footer</Cell>}\n\t\tflexGrow={1}\n\t\twidth={200}\n\t/>,\n\t<Column\n\t\tcolumnKey='memo'\n\t\theader={<Cell>描述</Cell>}\n\t\tcell={(ps) => <TextCell enableEllipsis value={dataSource[ps.rowIndex].memo} />}\n\t\tfooter={<Cell>footer</Cell>}\n\t\tflexGrow={1}\n\t\twidth={200}\n\t/>,\n\t<Column\n\t\tcolumnKey='price'\n\t\theader={<Cell>单价</Cell>}\n\t\tcell={(ps) => <TextCell dataType='float' align='right' style={{ paddingRight: 8 }} precision={2} enableTooltip value={43243432.116666666} sand={(v) => (\"\" + v).replace(/(d{1,3})(?=(d{3})+(?:$|.))/g, \"$1,\")} />}\n\t\tflexGrow={1}\n\t\twidth={200}\n\t/>,\n\t<Column\n\t\tcolumnKey='bool'\n\t\theader={<Cell>布尔</Cell>}\n\t\tcell={(ps) => <TextCell dataType='bool' value={true} />}\n\t\tflexGrow={1}\n\t\twidth={200}\n\t/>,\n\t<Column\n\t\tcolumnKey='custom'\n\t\theader={<Cell>自定义</Cell>}\n\t\tcell={(ps) => <div>自定义cell组件</div>}\n\t\tflexGrow={1}\n\t\twidth={200}\n\t/>\n]\n\nexport default class Example2 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div style={{ height: 300, width: '100%', display: 'flex' }}>\n\t\t\t\t<DataGrid\n\t\t\t\t\theaderHeight={35}\n\t\t\t\t\trowsCount={100}\n\t\t\t\t\trowHeight={35}\n\t\t\t\t\tfooterHeight={35}\n\t\t\t\t\tcolumns={columns}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t)\n\t}\n}\n",t.exports=e.default},483:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=f(n(4)),o=f(n(2)),a=f(n(3)),r=f(n(5)),u=f(n(6)),d=n(0),c=f(d),i=n(128);function f(t){return t&&t.__esModule?t:{default:t}}for(var s=i.DataGrid.Column,m=i.DataGrid.Cell,h=i.DataGrid.TextCell,C=[],p=0;p<100;p++)C.push({code:"code"+p,name:"name"+p,memo:"这是一个使用textCell的示例，鼠标移入到当前会有提示"});var w=[c.default.createElement(s,{columnKey:"select",fixed:!0,header:c.default.createElement(m,null,c.default.createElement(i.Checkbox,null)),cell:function(t){return c.default.createElement(m,null,c.default.createElement(i.Checkbox,null))},width:40}),c.default.createElement(s,{columnKey:"code",header:c.default.createElement(m,null,"编码"),cell:function(t){return c.default.createElement(h,{value:C[t.rowIndex].code})},footer:c.default.createElement(m,null,"footer"),width:200}),c.default.createElement(s,{columnKey:"name",header:c.default.createElement(m,null,"名称"),cell:function(t){return c.default.createElement(h,{align:"left",value:C[t.rowIndex].name,sand:function(t){return[c.default.createElement("span",null,"    "),t]}})},footer:c.default.createElement(m,null,"footer"),flexGrow:1,width:200}),c.default.createElement(s,{columnKey:"memo",header:c.default.createElement(m,null,"描述"),cell:function(t){return c.default.createElement(h,{enableEllipsis:!0,value:C[t.rowIndex].memo})},footer:c.default.createElement(m,null,"footer"),flexGrow:1,width:200}),c.default.createElement(s,{columnKey:"price",header:c.default.createElement(m,null,"单价"),cell:function(t){return c.default.createElement(h,{dataType:"float",align:"right",style:{paddingRight:8},precision:2,enableTooltip:!0,value:43243432.11666667,sand:function(t){return(""+t).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")}})},flexGrow:1,width:200}),c.default.createElement(s,{columnKey:"bool",header:c.default.createElement(m,null,"布尔"),cell:function(t){return c.default.createElement(h,{dataType:"bool",value:!0})},flexGrow:1,width:200}),c.default.createElement(s,{columnKey:"custom",header:c.default.createElement(m,null,"自定义"),cell:function(t){return c.default.createElement("div",null,"自定义cell组件")},flexGrow:1,width:200})],x=function(t){function e(){return(0,o.default)(this,e),(0,r.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,a.default)(e,[{key:"render",value:function(){return c.default.createElement("div",{style:{height:300,width:"100%",display:"flex"}},c.default.createElement(i.DataGrid,{headerHeight:35,rowsCount:100,rowHeight:35,footerHeight:35,columns:w}))}}]),e}(d.Component);e.default=x,t.exports=e.default},484:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n\nimport React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nimport { DataGrid, Checkbox, Input } from 'ttk-component'\n\nconst Column = DataGrid.Column\nconst Cell = DataGrid.Cell\nconst TextCell = DataGrid.TextCell\n\nexport default class Example3 extends Component {\n\tconstructor(props) {\n\t\tsuper(props)\n\n\t\tthis.state = {\n\t\t\tfocusCellInfo: undefined,\n\t\t\tdataSource: []\n\t\t}\n\n\t\tfor (let i = 0; i < 2; i++) {\n\t\t\tthis.state.dataSource.push({\n\t\t\t\tcode: 'code' +i,\n\t\t\t\tname: 'name' +i,\n\t\t\t})\n\t\t}\n\t}\n\n\tisFocusCell(ps, columnKey) {\n\t\tif (!this.state.focusCellInfo)\n\t\t\treturn false\n\t\treturn this.state.focusCellInfo.columnKey == columnKey && this.state.focusCellInfo.rowIndex == ps.rowIndex\n\t}\n\n\thandleCellClick = (ps, columnKey) => {\n\t\treturn () => {\n\t\t\tthis.setState({ focusCellInfo: { rowIndex: ps.rowIndex, columnKey } })\n\t\t\tconst that = this\n\t\t\tsetTimeout(() => {\n\t\t\t\tReactDOM.findDOMNode(columnKey == 'code' ? this.refCode : this.refName).focus()\n\t\t\t}, 0)\n\t\t}\n\t}\n\n\thandleCellChange = (ps, columnKey) => {\n\t\treturn (e) => {\n\t\t\tvar dataSource = this.state.dataSource\n\t\t\tdataSource[ps.rowIndex][columnKey] = e.target.value\n\t\t\tthis.setState({ dataSource })\n\t\t}\n\t}\n\n\thandleAddrow = (ps) => {\n\t\tconst dataSource = this.state.dataSource\n\t\tdataSource.push({\n\t\t\tcode: 'code' + dataSource.length,\n\t\t\tname: 'name'+ dataSource.length,\n\t\t})\n\n\t\tthis.setState({ dataSource })\n\t}\n\n\thandleDelrow = (ps) => {\n\t\tconst dataSource = this.state.dataSource\n\t\tdataSource.splice(ps.rowIndex, 1)\n\t\tthis.setState({ dataSource })\n\t}\n\n\tgetColumns = () => {\n\t\tlet dataSource = this.state.dataSource\n\t\tconst columns = []\n\t\tconst codeCellGetter = (ps) => {\n\t\t\treturn this.isFocusCell(ps, 'code')\n\t\t\t\t? <Input\n\t\t\t\t\tstyle={{ width: '100%', height: '100%' }}\n\t\t\t\t\tonChange={this.handleCellChange(ps, 'code')}\n\t\t\t\t\tvalue={dataSource[ps.rowIndex].code}\n\t\t\t\t\tref={o => this.refCode = o} />\n\t\t\t\t: <TextCell\n\t\t\t\t\tonClick={this.handleCellClick(ps, 'code')}\n\t\t\t\t\tvalue={dataSource[ps.rowIndex].code} />\n\t\t}\n\t\tcolumns.push(<Column\n\t\t\tcolumnKey='code'\n\t\t\theader={<Cell>编码</Cell>}\n\t\t\tcell={codeCellGetter}\n\t\t\tfooter={<Cell>footer</Cell>}\n\t\t\twidth={200}\n\t\t/>)\n\n\t\tconst nameCellGetter = (ps) => {\n\t\t\treturn this.isFocusCell(ps, 'name')\n\t\t\t\t? <Input\n\t\t\t\t\tstyle={{ width: '100%', height: '100%' }}\n\t\t\t\t\tonChange={this.handleCellChange(ps, 'name')}\n\t\t\t\t\tvalue={dataSource[ps.rowIndex].name}\n\t\t\t\t\tref={o => this.refName = o} />\n\t\t\t\t: <TextCell\n\t\t\t\t\tonClick={this.handleCellClick(ps, 'name')}\n\t\t\t\t\tvalue={dataSource[ps.rowIndex].name} />\n\t\t}\n\t\tcolumns.push(<Column\n\t\t\tcolumnKey='name'\n\t\t\theader={<Cell>名称</Cell>}\n\t\t\tcell={nameCellGetter}\n\t\t\tfooter={<Cell>footer</Cell>}\n\t\t\twidth={200}\n\t\t\tflexGrow={1}\n\t\t/>)\n\n\t\treturn columns\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div style={{ height: 300, width: '100%', display: 'flex' }}>\n\t\t\t\t<DataGrid\n\t\t\t\t\theaderHeight={50}\n\t\t\t\t\trowsCount={this.state.dataSource.length}\n\t\t\t\t\trowHeight={50}\n\t\t\t\t\tfooterHeight={50}\n\t\t\t\t\treadonly={false}\n\t\t\t\t\tenableSequence={true}\n\t\t\t\t\tenableAddDelrow={true}\n\t\t\t\t\tstartSequence={1}\n\t\t\t\t\tsequenceFooter={<Cell>footer</Cell>}\n\t\t\t\t\tonAddrow={this.handleAddrow}\n\t\t\t\t\tonDelrow={this.handleDelrow}\n\t\t\t\t\tcolumns={this.getColumns()}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n",t.exports=e.default},485:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(n(4)),o=s(n(2)),a=s(n(3)),r=s(n(5)),u=s(n(6)),d=n(0),c=s(d),i=s(n(14)),f=n(128);function s(t){return t&&t.__esModule?t:{default:t}}var m=f.DataGrid.Column,h=f.DataGrid.Cell,C=f.DataGrid.TextCell,p=function(t){function e(t){(0,o.default)(this,e);var n=(0,r.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));n.handleCellClick=function(t,e){return function(){n.setState({focusCellInfo:{rowIndex:t.rowIndex,columnKey:e}});setTimeout(function(){i.default.findDOMNode("code"==e?n.refCode:n.refName).focus()},0)}},n.handleCellChange=function(t,e){return function(l){var o=n.state.dataSource;o[t.rowIndex][e]=l.target.value,n.setState({dataSource:o})}},n.handleAddrow=function(t){var e=n.state.dataSource;e.push({code:"code"+e.length,name:"name"+e.length}),n.setState({dataSource:e})},n.handleDelrow=function(t){var e=n.state.dataSource;e.splice(t.rowIndex,1),n.setState({dataSource:e})},n.getColumns=function(){var t=n.state.dataSource,e=[];e.push(c.default.createElement(m,{columnKey:"code",header:c.default.createElement(h,null,"编码"),cell:function(e){return n.isFocusCell(e,"code")?c.default.createElement(f.Input,{style:{width:"100%",height:"100%"},onChange:n.handleCellChange(e,"code"),value:t[e.rowIndex].code,ref:function(t){return n.refCode=t}}):c.default.createElement(C,{onClick:n.handleCellClick(e,"code"),value:t[e.rowIndex].code})},footer:c.default.createElement(h,null,"footer"),width:200}));return e.push(c.default.createElement(m,{columnKey:"name",header:c.default.createElement(h,null,"名称"),cell:function(e){return n.isFocusCell(e,"name")?c.default.createElement(f.Input,{style:{width:"100%",height:"100%"},onChange:n.handleCellChange(e,"name"),value:t[e.rowIndex].name,ref:function(t){return n.refName=t}}):c.default.createElement(C,{onClick:n.handleCellClick(e,"name"),value:t[e.rowIndex].name})},footer:c.default.createElement(h,null,"footer"),width:200,flexGrow:1})),e},n.state={focusCellInfo:void 0,dataSource:[]};for(var a=0;a<2;a++)n.state.dataSource.push({code:"code"+a,name:"name"+a});return n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"isFocusCell",value:function(t,e){return!!this.state.focusCellInfo&&(this.state.focusCellInfo.columnKey==e&&this.state.focusCellInfo.rowIndex==t.rowIndex)}},{key:"render",value:function(){return c.default.createElement("div",{style:{height:300,width:"100%",display:"flex"}},c.default.createElement(f.DataGrid,{headerHeight:50,rowsCount:this.state.dataSource.length,rowHeight:50,footerHeight:50,readonly:!1,enableSequence:!0,enableAddDelrow:!0,startSequence:1,sequenceFooter:c.default.createElement(h,null,"footer"),onAddrow:this.handleAddrow,onDelrow:this.handleDelrow,columns:this.getColumns()}))}}]),e}(d.Component);e.default=p,t.exports=e.default},486:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="\n# DataGrid 数据网格\n\nDataGrid 基于[fixed-data-table](http://facebook.github.io/fixed-data-table/),做了一些修改\n\n重要的改动有：\n\n- 高度，宽度属性不可用，使用父亲组件高宽自适用，父组件需要是flex布局\n- 只能使用 columns属性设置列，原来使用children\n- 提供新的Cell和TextCell, Cell不再使用table布局改flex\n- 增加了启用序号列功能\n- 增加了可编辑，启用增删行功能\n\n\n## API\n\n| 参数             | 说明                                         | 类型     | 默认值                          |\n|------------------|----------------------------------------------|----------|---------------------------------|\n| columns        | 列   | Array<ReactNode> | - |\n| rowsCount        | 行数   | Number | - |\n| headerHeight | 头部高度 | Number   | - |\n| rowHeight         | 行高                               | Number | -                              |\n| groupHeaderHeight | 头部Group高度 | Number   | - |\n| footerHeight | 脚部高度 | Number   | - |\n| heightFromRowsCount | 高度是否通过行数计算 | boolean   | - |\n| readonly | 只读属性，readonly为false,增行删行功能不能用,行事件也不可用 | boolean   | - |\n|scrollToRow | 滚到第几行 | Number | -|\n|scrollToColumn | 滚到第几列 | Number | -|\n|enableSequence | 启用序号列,启用会自动给追加一个序号列在DataGrid最前面 | boolean | -|\n|startSequence | 开始序号 | Number | 1|\n|enableAddDelrow | 启用增删行功能,表格readonly===false可用,启用后鼠标移到行上,序号单元格中出现增删图标 | boolean | - |\n|sequenceFooter | 序号列Footer | ReactNode | - |\n|onAddrow | 增行事件 | function | - |\n|onDelrow | 删行事件 | function | - |\n|onRowClick | 行点击事件 | function | - |\n|onRowDoubleClick | 行双击事件 | function | - |\n|onRowMouseEnter | 行进入事件 | function | - |\n|onRowMouseLeave | 行离开事件 | function | - |\n|onScrollEnd | 滚到末尾事件 | function | - |\t\n|className | 样式名 | string| -|\n\n其他属性参考官网\n\n### Column\n\n| 参数             | 说明                                         | 类型     | 默认值                          |\n|------------------|----------------------------------------------|----------|---------------------------------|\n| fixed        | 是否固定   | boolean | - |\n| header        | 头单元格   | ReactNode or Function | - |\n| cell        | 行单元格   | ReactNode or Function | - |\n| footer        | 脚单元格   | ReactNode or Function | - |\n| columnKey        | 唯一键   | string | - |\n| width        | 宽度   | Number | - |\n| minWidth        | 最小宽度   | Number | - |\n| maxWidth        | 最大宽度   | Number | - |\n| flexGrow        | 列宽是否自动适用  | Number | - |\n\n### Cell\n\n| 参数             | 说明                                         | 类型     | 默认值                          |\n|------------------|----------------------------------------------|----------|---------------------------------|\n| align        | 布局 'left' 'center' 'right'   | string | - |\n| className        | 样式名   | string | - |\n| style        | 样式   | Object | - |\n\n### TextCell\n适用于只有值得cell,没有children节点\n\n| 参数             | 说明                                         | 类型     | 默认值                          |\n|------------------|----------------------------------------------|----------|---------------------------------|\n| align        | 布局 'left' 'center' 'right'，设置后内容会根据设置来布局   | string | - |\n| value        | 值   | string  | - |\n| dataType        | 值数据类型 'float' 'bool',设置为bool（true内容会显示为是），设置为float可以使用precision  | string |  string |\n| precision        | 数值精度   | Number | - |\n| enableTooltip        | 是否启用文字提示   | boolean | - |\n| enableEllipsis        | 是否启用省略，如果文字溢出   | boolean | - |\n| sand        | 打磨函数，可以加工cell的输出结果   | function | - |\n| className        | 样式名   | string | - |\n| style        | 样式   | Object | - |\n",t.exports=e.default}});