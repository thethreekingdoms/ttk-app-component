webpackJsonp([23],{464:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=b(t(4)),r=b(t(2)),l=b(t(3)),o=b(t(5)),d=b(t(6)),s=t(0),u=b(s),c=b(t(477)),i=b(t(474)),f=b(t(644)),m=b(t(645)),p=b(t(646));function b(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function n(){return(0,r.default)(this,n),(0,o.default)(this,(n.__proto__||(0,a.default)(n)).apply(this,arguments))}return(0,d.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.default,{title:"示例一",content:u.default.createElement(m.default,null),doc:f.default}),u.default.createElement(i.default,{source:p.default}))}}]),n}(s.Component);n.default=u.default.createElement(y,null),e.exports=n.default},474:function(e,n,t){e.exports=t(9)(1141)},475:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=c(t(4)),r=c(t(2)),l=c(t(3)),o=c(t(5)),d=c(t(6)),s=c(t(0)),u=t(476);function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function n(e){(0,r.default)(this,n);var t=(0,o.default)(this,(n.__proto__||(0,a.default)(n)).call(this,e));return t.state={},t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(u.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,n,t){}}))}}]),n}(s.default.Component);n.default=i,e.exports=n.default},476:function(e,n,t){e.exports=t(9)(1603)},477:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(t(4)),r=c(t(2)),l=c(t(3)),o=c(t(5)),d=c(t(6)),s=c(t(0)),u=(c(t(474)),c(t(475)));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function n(e){(0,r.default)(this,n);var t=(0,o.default)(this,(n.__proto__||(0,a.default)(n)).call(this,e));return t.handleClick=function(){t.setState({visible:!t.state.visible})},t.state={visible:!1},t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("p",null,this.props.title),this.props.content,s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("a",{onClick:this.handleClick,href:"javasccript:;"},this.state.visible?"收起代码":"展开代码"),s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("div",null,this.state.visible?s.default.createElement(u.default,{value:this.props.doc}):null))}}]),n}(s.default.Component);n.default=i,e.exports=n.default},644:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default="\nimport React, { Component } from 'react'\nimport { Table, Icon } from 'ttk-component'\n\nconst columns = [{\n  title: 'Name',\n  dataIndex: 'name',\n  key: 'name',\n  render: text => <a href=\"#\">{text}</a>,\n}, {\n  title: 'Age',\n  dataIndex: 'age',\n  key: 'age',\n}, {\n  title: 'Address',\n  dataIndex: 'address',\n  key: 'address',\n}, {\n  title: 'Action',\n  key: 'action',\n  render: (text, record) => (\n    <span>\n      <a href=\"#\">Action 一 {record.name}</a>\n      <span className=\"ant-divider\" />\n      <a href=\"#\">Delete</a>\n      <span className=\"ant-divider\" />\n      <a href=\"#\" className=\"ant-dropdown-link\">\n        More actions <Icon type=\"down\" />\n      </a>\n    </span>\n  ),\n}]\n\nconst data = [{\n  key: '1',\n  name: 'John Brown',\n  age: 32,\n  address: 'New York No. 1 Lake Park',\n}, {\n  key: '2',\n  name: 'Jim Green',\n  age: 42,\n  address: 'London No. 1 Lake Park',\n}, {\n  key: '3',\n  name: 'Joe Black',\n  age: 32,\n  address: 'Sidney No. 1 Lake Park',\n}]\n\nexport default class Example1 extends Component {\n  render() {\n    return (\n      <div>\n        <Table bordered columns={columns} dataSource={data} />\n      </div>\n    )\n  }\n}\n",e.exports=n.default},645:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t(4)),r=i(t(2)),l=i(t(3)),o=i(t(5)),d=i(t(6)),s=t(0),u=i(s),c=t(128);function i(e){return e&&e.__esModule?e:{default:e}}var f=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return u.default.createElement("a",{href:"#"},e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Action",key:"action",render:function(e,n){return u.default.createElement("span",null,u.default.createElement("a",{href:"#"},"Action 一 ",n.name),u.default.createElement("span",{className:"ant-divider"}),u.default.createElement("a",{href:"#"},"Delete"),u.default.createElement("span",{className:"ant-divider"}),u.default.createElement("a",{href:"#",className:"ant-dropdown-link"},"More actions ",u.default.createElement(c.Icon,{type:"down"})))}}],m=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],p=function(e){function n(){return(0,r.default)(this,n),(0,o.default)(this,(n.__proto__||(0,a.default)(n)).apply(this,arguments))}return(0,d.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.Table,{bordered:!0,columns:f,dataSource:m}))}}]),n}(s.Component);n.default=p,e.exports=n.default},646:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default="\n# Table 表格\n\n\n展示行列数据。\n\n## 何时使用\n\n- 当有大量结构化的数据需要展现时；\n- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。\n\n## 如何使用\n\n指定表格的数据源 `dataSource` 为一个数组。\n\n```jsx\nconst dataSource = [{\n  key: '1',\n  name: '胡彦斌',\n  age: 32,\n  address: '西湖区湖底公园1号'\n}, {\n  key: '2',\n  name: '胡彦祖',\n  age: 42,\n  address: '西湖区湖底公园1号'\n}];\n\nconst columns = [{\n  title: '姓名',\n  dataIndex: 'name',\n  key: 'name',\n}, {\n  title: '年龄',\n  dataIndex: 'age',\n  key: 'age',\n}, {\n  title: '住址',\n  dataIndex: 'address',\n  key: 'address',\n}];\n\n<Table dataSource={dataSource} columns={columns} />\n```\n\n## antd Table API\n\n[详情请点击查看官方](https://ant.design/components/table-cn/)\n\n### Table\n\n| 参数           | 说明                     | 类型             | 默认值   |\n|---------------|--------------------------|-----------------|---------|\n| rowSelection  | 列表项是否可选择，[配置项](#rowSelection) | object  | null  |\n| pagination    | 分页器，配置项参考 [pagination](/components/pagination/)，设为 false 时不展示和进行分页 | object |  |\n| size          | 正常或迷你类型，`default` or `small`  | string | default |\n| dataSource    | 数据数组 | any[] |            |\n| columns       | 表格列的配置描述，具体项见下表 | [ColumnProps](https://git.io/vMMXC)[] | - |\n| rowKey        | 表格行 key 的取值，可以是字符串或一个函数 | string or Function(record):string | 'key' |\n| rowClassName  | 表格行的类名      | Function(record, index):string | - |\n| expandedRowRender  | 额外的展开行 | Function | - |\n| defaultExpandedRowKeys | 默认展开的行 | string[] | - |\n| expandedRowKeys | 展开的行，控制属性 | string[] | - |\n| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |\n| onExpandedRowsChange | 展开的行变化时触发 | Function(expandedRows) | |\n| onExpand      | 点击展开图标时触发 | Function(expanded, record) | |\n| onChange      | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |\n| loading       | 页面是否加载中 | boolean | false |\n| locale        | 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: '确定' <br> filterReset: '重置' <br> emptyText: '暂无数据' <br> [默认值](https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511) |\n| indentSize    | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number   | 15 |\n| onRowClick    | 处理行点击事件 | Function(record, index)   | - |\n| bordered  | 是否展示外边框和列边框 | boolean | false      |\n| showHeader  | 是否显示表头 | boolean          | true      |\n| footer | 表格尾部         | Function(currentPageData)   | |\n| title  | 表格标题         | Function(currentPageData)   | |\n| scroll | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{{ x: true, y: 300 }}` | object   | -  |\n\n### Column\n\n列描述数据对象，是 columns 中的一项，Column 使用相同的 API。\n\n| 参数       | 说明                       | 类型            |  默认值  |\n|-----------|----------------------------|-----------------|---------|\n| title      | 列头显示文字               | string or ReactNode | - |\n| key        | React 需要的 key，建议设置 | string          | - |\n| dataIndex  | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | string | - |\n| render     | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格[行/列合并](#demo-colspan-rowspan) | Function(text, record, index) {} | - |\n| filters    | 表头的筛选菜单项           | object[]           | - |\n| onFilter   | 本地模式下，确定筛选的运行函数 | Function    | - |\n| filterMultiple | 是否多选 | boolean    | true    |\n| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | ReactNode | - |\n| filterDropdownVisible | 用于控制自定义筛选菜单是否可见 | boolean | - |\n| onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |\n| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string[] | - |\n| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |\n| filterIcon | 自定义 fiter 图标。| ReactNode | false |\n| sorter     | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function or boolean | - |\n| colSpan    | 表头列合并,设置为 0 时，不渲染 | number      |         |\n| width      | 列宽度 | string or number | -  |\n| className  | 列的 className             | string          |  -      |\n| fixed      | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | boolean or string | false |\n| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean or string | - |\n| onCellClick | 单元格点击回调 | Function(record, event) | - |\n\n### ColumnGroup\n\n| 参数       | 说明                       | 类型            |  默认值  |\n|-----------|----------------------------|-----------------|---------|\n| title      | 列头显示文字               | string or ReactNode | - |\n\n### rowSelection\n\n选择功能的配置。\n\n| 参数              | 说明                     | 类型             |  默认值   |\n|------------------|--------------------------|-----------------|---------------------|---------|\n| type | 多选/单选，`checkbox` or `radio` | string | `checkbox`  |\n| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[] | []  |\n| onChange | 选中项发生变化的时的回调 | Function(selectedRowKeys, selectedRows) | -   |\n| getCheckboxProps | 选择框的默认属性配置        | Function(record) |  -   |\n| onSelect | 用户手动选择/取消选择某列的回调         | Function(record, selected, selectedRows) |   -   |\n| onSelectAll | 用户手动选择/取消选择所有列的回调    | Function(selected, selectedRows, changeRows) |   -   |\n| onSelectInvert | 用户手动选择反选的回调 | Function(selectedRows) | - |\n| selections | 自定义选择项 [配置项](#selection), 设为 `true` 时显示默认选择项 | object[] | true | - |\n\n### selection\n\n| 参数              | 说明                     | 类型             |  默认值   |\n|------------------|--------------------------|-----------------|---------------------|---------|\n| key | React 需要的 key，建议设置 | string | -  |\n| text | 选择项显示的文字 | string or React.ReactNode | -  |\n| onSelect | 选择项点击回调 | Function(changeableRowKeys) | -   |\n\n## 在 TypeScript 中使用\n\n```jsx\nimport { Table } from 'antd';\nimport { TableColumnConfig } from 'antd/lib/table/Table';\n\ninterface IUser {\n  key: number,\n  name: string;\n}\n\nconst columns: TableColumnConfig<IUser>[] = [{\n  key: 'name',\n  title: 'Name',\n  dataIndex: 'name',\n}];\n\nconst data: IUser[] = [{\n  key: 0,\n  name: 'Jack',\n}];\n\nclass UserTable extends Table<IUser> {}\n<UserTable columns={columns} dataSource={data} />\n\n// 使用 JSX 风格的 API\nclass NameColumn extends Table.Column<IUser> {}\n\n<UserTable dataSource={data}>\n  <NameColumn key=\"name\" title=\"Name\" dataIndex=\"name\" />\n</UserTable>\n```\n\n## 注意\n\n按照 [React 的规范](https://facebook.github.io/react/docs/lists-and-keys.html#keys)，所有的组件数组必须绑定 key。在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。\n\n如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。\n\n![](https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png)\n\n```jsx\n// 比如你的数据主键是 uid\nreturn <Table rowKey=\"uid\" />;\n// 或\nreturn <Table rowKey={record => record.uid} />;\n```\n\n",e.exports=n.default}});