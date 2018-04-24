export default `
# SearchCard

| api | 说明 |  类型 | 默认值 | 
| ---- | ----- | ----- | -----|
|  searchClick | 点击高级查询框中查询按钮 | function(value) | | 
| cancelClick | 点击高级查询框中取消按钮 | function(value) | | 
| clearClick | 点击高级查询框中清除按钮 | function(value) | | 
|confirmBtn | 查询按钮| object { hidden: 是否隐藏, text: 文案 } |  | 
| cancelBtn | 取消按钮| object { hidden: 是否隐藏, text: 文案 } |  |
| clearBtn |清除按钮| object { hidden: 是否隐藏, text: 文案 } |  |
|refreshBtn |简单查询条件中的刷新按钮| reactNode |  |
|menuBtn | 高级查询右侧按钮集合 |  array 为reactnode组成的集合 |  |
|normalSearch | 简单查询集合如 | array | 尽量不适用改参数使用normalSearcChildren |
|normalSearchValue |  简单查询所有的值与normalSearch 配套使用| object | |
|normalSearchChange | 简单查询的值发生变化触发的参数normalSearch 配套使用 | function(value)| |
|normalSearcChildren| 简单查询集合与normalSearch集合的区别该集合为reactnode节点，且searchCard没有对改子节点的控制| array | |
|moreSearch| 高级查询每一个项的字段和值 | object | | 
|moreSearchItem| 高级查询 | array | |

#### moreSearchItem 

moreSearchItem是一个对象的集合该对象可以具有以下参数


| api       | 说明      | 类型     | 默认值 | 
| -----     | -----     | ----     | ----- |
| name      | 必填并且高级查询输出是会将name当做字段输出 | string | null |
| range | 是否是区间的选项和pre和next配套使用 | boolean | null |
| type | 标识antd中相应的表单类型组件 | string |  |
|label | 该表单想的label | string |  |
| centerContent | 和 range 为true配套使用表示两个组件中间的值 |  reactnode 或 string | null  |
| pre | 和 range 为true配套使用 表示前一个表单项| object 对象下面的字段与moreSearchItem相同range相关除外|  null |
| noClear | 为true时点击清除也不会被清除 | boolean |      |
| decoratorDate | 在range中且type为时间选择的组件使用 | function(current, value) 且返回值为Boolean，是否禁用该时间 | null |


`