# Dropdown 下来框

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## API

属性如下

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| trigger     | 触发下拉的行为   | Array<'click' or 'hover'> | ['hover']        |
| overlay     | 菜单         | Menu | -     |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body |
| visible     | 菜单是否显示 | boolean   | -           |
| onVisibleChange  | 菜单显示状态改变时调用，参数为 visible | Function(visible) | - |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |

菜单可由 `ttk-component.Menu` 取得，可设置 `onSelect` 回调，菜单还包括菜单项 `ttk-component.Menu.Item`，分割线 `ttk-component.Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。

### Dropdown.Button

| 参数        | 说明             | 类型               | 默认值       |
|-------------|------------------|--------------------|--------------|
| type        | 按钮类型，和 Button 一致 | string | 'default' |
| onClick     | 点击左侧按钮的回调，和 Button 一致 | Function   | - |
| trigger     | 触发下拉的行为   | Array<'click' or 'hover'> | ['hover']        |
| overlay     | 菜单         | Menu | -     |
| visible     | 菜单是否显示 | boolean   | -           |
| onVisibleChange  | 菜单显示状态改变时调用，参数为 visible | Function | - |
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |
