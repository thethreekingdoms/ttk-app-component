import React from 'react'
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class RightMenu extends React.Component {
    state = {
        collapsed: false,
        demoArr: [
            {
                name: '动态label选择',
                key: 'activeLabelSelect'
            },
            {
                name: '城市JSON',
                key: 'city'
            },
            {
                name: 'grid表格',
                key: 'datagrid'
            },
            {
                name: '组合月份区间选择器',
                key: 'dateRangeMonthPicker'
            },
            {
                name: '下拉选择',
                key: 'dropdown'
            },
            {
                name: '图表',
                key: 'echarts'
            },
            {
                name: '列表',
                key: 'list'
            },
            {
                name: '国际化组件',
                key: 'localeWrapper'
            },
            {
                name: '高级查询组件',
                key: 'search'
            },
            {
                name: '表格操作列',
                key: 'tableOperate'
            },
            {
                name: '右侧checkbox弹窗',
                key: 'tableSettingCard'
            },
            {
                name: '表格排序',
                key: 'tableSort'
            },
            {
                name: '',
                key: 'address'
            },
            {
                name: '固钉',
                key: 'affix'
            },
            {
                name: '警告提示',
                key: 'alert'
            },
            {
                name: '锚点',
                key: 'anchor'
            },
            {
                name: '下拉选择',
                key: 'antSelect'
            },
            {
                name: '附件',
                key: 'attachment'
            },
            {
                name: '回到顶部',
                key: 'backTop'
            },
            {
                name: '徽标数',
                key: 'badge'
            },
            {
                name: '面包屑',
                key: 'breadcrumb'
            },
            {
                name: '按钮',
                key: 'button'
            },
            {
                name: '卡片',
                key: 'card'
            },
            {
                name: '走马灯',
                key: 'carousel'
            },
            {
                name: '级联选择',
                key: 'cascader'
            },
            {
                name: '多选框',
                key: 'checkbox'
            },
            {
                name: '折叠面板',
                key: 'collapse'
            },
            {
                name: '日期选择框',
                key: 'datePicker'
            },
            {
                name: '表单',
                key: 'form'
            },
            {
                name: '图标',
                key: 'icon'
            },
            {
                name: '输入框',
                key: 'input'
            },
            {
                name: '布局',
                key: 'layout'
            },
            {
                name: '链接',
                key: 'link'
            },
            {
                name: '加载',
                key: 'loadingMask'
            },
            {
                name: '导航菜单',
                key: 'menu'
            },
            {
                name: '全局提示',
                key: 'message'
            },
            {
                name: '对话框',
                key: 'modal'
            },
            {
                name: '通知提醒框',
                key: 'notification'
            },
            {
                name: '分页',
                key: 'pagination'
            },
            {
                name: '气泡确认框',
                key: 'popconfirm'
            },
            {
                name: '气泡卡片',
                key: 'popover'
            },
            {
                name: '进度条',
                key: 'progress'
            },
            {
                name: '单选框',
                key: 'radio'
            },
            {
                name: '评分',
                key: 'rate'
            },
            {
                name: '选择器',
                key: 'select'
            },
            {
                name: '',
                key: 'selectRange'
            },
            {
                name: '',
                key: 'shortcut'
            },
            {
                name: '滑动输入条',
                key: 'slider'
            },
            {
                name: '加载中',
                key: 'spin'
            },
            {
                name: '步骤条',
                key: 'steps'
            },
            {
                name: '开关',
                key: 'switch'
            },
            {
                name: '表格',
                key: 'table'
            },
            {
                name: '标签页',
                key: 'tabs'
            },
            {
                name: '标签',
                key: 'tag'
            },
            {
                name: '时间轴',
                key: 'timeline'
            },
            {
                name: '时间选择框',
                key: 'timePicker'
            },
            {
                name: '提示',
                key: 'toast'
            },
            {
                name: '文字提示',
                key: 'tooltip'
            },
            {
                name: '穿梭框',
                key: 'transfer'
            },
            {
                name: '树',
                key: 'tree'
            },
            {
                name: '树选择',
                key: 'treeSelect'
            },
            {
                name: '上传',
                key: 'upload'
            },
            {
                name: '栏目设置',
                key: 'columnsSetting'
            }
        ]
    }
    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }

    handleClick = (key) => {
        this.props.handleClick && this.props.handleClick(key)
    }

    renderItem = () =>{
        const {demoArr} = this.state
        return demoArr.map(item => {
            return (
                <Menu.Item key={item.key}>
                    <a className="menu-a" title={item.name} href={`#${item.key}`}>{item.key}/{item.name}</a>
                </Menu.Item>
            )
        })
    }

    render() {
      return (
        <div>
            <Menu
                mode="inline"
                theme="dark"
                defaultOpenKeys={['sub1']}
                inlineCollapsed={this.state.collapsed}
                onSelect={(e) =>this.handleClick(e.key)}
            >
                <SubMenu key='sub1' title="组件列表">
                    {this.renderItem()}
                </SubMenu>
            </Menu>
        </div>
      );
    }
  }
  

  export default RightMenu