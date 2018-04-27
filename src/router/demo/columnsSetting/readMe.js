export default `
## ColumnsSetting

与tableSettingCard不同，该组件仅提供设置的内容展示，不提供动画效果。动画效果可以参考demo设置。

| api | 说明 | 类型 | 默认值 | 
| ----| ----| ------| -----|
| option | 栏目的详细信息的集合,每个栏目都应该是一个对象| array | [] |
| singleKey | 将option中每个元素的该字段作为每个栏目的标记不变且唯一。 | string/必填 | null|
| checkedKey | 根据option中每个元素的该字段判断checkbox是否被选中 | string/必填 | null|
|labelKey | 将optiong中每个元素的该字段作为checkbox的label| string/必填| null|
|sort | 是否展示排序功能 | Boolean | false |
|editName | 是否展示编辑label功能| Boolean | false|
|resetClick | 点击重置默认设置| function |  |
|confirmClick | 点击确定按钮 | function(data)/data为操作后的数据|  |
| cancelClick | 点击取消按钮 | function() | |
|itemClassName | 每个栏目渲染时的className | string | |
`