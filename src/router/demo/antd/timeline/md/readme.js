export default `
# Timeline 时间轴

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；

## antd Timeline API

[详情请点击查看官方](https://ant.design/components/timeline-cn/)

\`\`\`jsx
<Timeline>
  <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
  <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
  <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
  <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
</Timeline>
\`\`\`

### Timeline

时间轴。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|----------------------------------------|------------|-------|
| pending  | 指定最后一个幽灵节点是否存在或内容 | boolean or string or ReactNode | false  |

### Timeline.Item

时间轴的每一个节点。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|------------------------------------------|------------|-------|
| color   | 指定圆圈颜色 \`blue, red, green\`，或自定义的色值 | string | blue  |
| dot   | 自定义时间轴点 | string or ReactNode | -  |


`