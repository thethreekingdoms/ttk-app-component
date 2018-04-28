export default `
## ColumnsSetting

与tableSettingCard不同，该组件仅提供设置的内容展示，不提供动画效果。动画效果可以参考demo设置。

| api | 说明 | 类型 | 默认值 | 
| ----| ----| ------| -----|
| option | 栏目的类的集合 | array [{key: '栏目类的标识', name: '名称', option: []//"栏目的详细信息集合"}] |  |
| singleKey | 栏目对象中该字段作为每个栏目的标记不变且唯一。 | string/必填 | null|
| checkedKey | 栏目对象中每个元素的该字段判断checkbox是否被选中 | string/必填 | null|
|labelKey | 栏目对象中每个元素的该字段作为checkbox的label| string/必填| null|
|sort | 是否展示排序功能 | Boolean | false |
|editName | 是否展示编辑label功能| Boolean | false|
|resetClick | 点击重置默认设置| function |  |
|confirmClick | 点击确定按钮 | function(data)/data为操作后的数据|  |
| cancelClick | 点击取消按钮 | function() | |
|itemClassName | 每个栏目渲染时的className | string | |


`


