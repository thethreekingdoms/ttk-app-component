webpackJsonp([34],{444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=h(n(4)),a=h(n(2)),l=h(n(3)),r=h(n(5)),u=h(n(6)),c=n(0),i=h(c),m=h(n(477)),d=h(n(474)),s=h(n(548)),f=h(n(549)),p=h(n(550));function h(e){return e&&e.__esModule?e:{default:e}}var k=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(m.default,{title:"示例一：基本",content:i.default.createElement(f.default,null),doc:s.default}),i.default.createElement(d.default,{source:p.default}))}}]),t}(c.Component);t.default=i.default.createElement(k,null),e.exports=t.default},474:function(e,t,n){e.exports=n(9)(1141)},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=m(n(4)),a=m(n(2)),l=m(n(3)),r=m(n(5)),u=m(n(6)),c=m(n(0)),i=n(476);function m(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,a.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={},n}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(i.UnControlled,{value:this.props.value,options:{mode:"javascript",theme:"material",readOnly:!0},onChange:function(e,t,n){}}))}}]),t}(c.default.Component);t.default=d,e.exports=t.default},476:function(e,t,n){e.exports=n(9)(1603)},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=m(n(4)),a=m(n(2)),l=m(n(3)),r=m(n(5)),u=m(n(6)),c=m(n(0)),i=(m(n(474)),m(n(475)));function m(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,a.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={},n}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("p",null,this.props.title),this.props.content,c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("div",null,c.default.createElement(i.default,{value:this.props.doc})))}}]),t}(c.default.Component);t.default=d,e.exports=t.default},548:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\nimport React, { Component } from 'react'\nimport { DatePicker } from 'ttk-component'\n\nconst { MonthPicker, RangePicker } = DatePicker\n\nexport default class Example1 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<DatePicker />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<MonthPicker placeholder=\"Select month\" />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<RangePicker />\n\t\t\t</div>\n\t\t)\n\t}\n}\n",e.exports=t.default},549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(4)),a=d(n(2)),l=d(n(3)),r=d(n(5)),u=d(n(6)),c=n(0),i=d(c),m=n(128);function d(e){return e&&e.__esModule?e:{default:e}}var s=m.DatePicker.MonthPicker,f=m.DatePicker.RangePicker,p=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(m.DatePicker,null),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement(s,{placeholder:"Select month"}),i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement(f,null))}}]),t}(c.Component);t.default=p,e.exports=t.default},550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n# DatePicker\n\n输入或选择日期的控件。\n\n\n## antd DatePicker API\n\n[详情请点击查看官方](https://ant.design/components/date-picker-cn/)\n\n日期类组件包括以下三种形式。\n\n* DatePicker\n* MonthPicker\n* RangePicker\n\n**注意：**DatePicker、MonthPicker、RangePicker 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。\n\n```\nimport moment from 'moment';\n\n// 推荐在入口文件全局设置 locale\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />\n```\n### 共同的 API\n\n以下 API 为 DatePicker、MonthPicker、RangePicker 共享的 API。\n\n| 参数          | 说明            | 类型     | 默认值        |\n|--------------|----------------|----------|--------------|\n| allowClear   | 是否显示清除按钮 | boolean     | true         |\n| disabled     | 禁用           | boolean     | false        |\n| style        | 自定义输入框样式     | object     | {}   |\n| popupStyle   | 格外的弹出日历样式   | object     | {}   |\n| size         | 输入框大小，large 高度为 32px，small 为 22px，默认是 28px | string   | 无  |\n| locale       | 国际化配置 | object   | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)  |\n| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无           |\n| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |\n| open | 控制弹层是否展开 | boolean | - |\n| onOpenChange   | 弹出日历和关闭日历的回调 | function(status) | 无 |\n| placeholder  | 输入框提示文字 | string or RangePicker[] | - |\n\n### DatePicker\n\n| 参数         | 说明           | 类型     | 默认值       |\n|--------------|----------------|----------|--------------|\n| value        | 日期           | [moment](http://momentjs.com/)   | 无           |\n| defaultValue | 默认日期       | [moment](http://momentjs.com/)   | 无           |\n| format       | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string   | \"YYYY-MM-DD\" |\n| onChange     | 时间发生变化的回调 | function(date: moment, dateString: string) | 无           |\n| showTime     | 增加时间选择功能  | Object or boolean | [TimePicker Options](/components/time-picker/#API) |\n| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/) | moment() |\n| showToday    | 是否展示“今天”按钮 | boolean | true |\n| disabledTime | 不可选择的时间 | function(date) | 无 |\n| onOk | 点击确定按钮的回调 | function() | - |\n\n### MonthPicker\n\n| 参数         | 说明           | 类型     | 默认值       |\n|--------------|----------------|----------|--------------|\n| value        | 日期           | [moment](http://momentjs.com/)   | 无           |\n| defaultValue | 默认日期       | [moment](http://momentjs.com/)   | 无           |\n| format       | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string   | \"YYYY-MM\" |\n| onChange     | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | -           |\n| monthCellContentRender | 自定义的月份内容渲染方法 | function(date, locale): ReactNode | - |\n\n### RangePicker\n\n| 参数         | 说明           | 类型     | 默认值       |\n|--------------|----------------|----------|--------------|\n| value        | 日期          | [moment](http://momentjs.com/)[] | 无           |\n| defaultValue | 默认日期       | [moment](http://momentjs.com/)[]   | 无           |\n| format       | 展示的日期格式  | string    | \"YYYY-MM-DD HH:mm:ss\" |\n| onChange     | 时间发生变化的回调，发生在用户选择时间时 | function(dates: [moment, moment], dateStrings: [string, string]) | 无           |\n| showTime     | 增加时间选择功能  | Object or boolean | [TimePicker Options](/components/time-picker/#API) |\n| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/)[] | [moment(), moment()] |\n| disabledTime | 不可选择的时间 | function(dates: [moment, moment], partial: start' 'end') | 无 |\n| ranges       | 预设时间范围快捷选择 | { [range: string]: [moment](http://momentjs.com/)[] } | 无 |\n| onOk | 点击确定按钮的回调 | function() | - |\n\n",e.exports=t.default}});