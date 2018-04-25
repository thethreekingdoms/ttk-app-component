import React from 'react'
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class RightMenu extends React.Component {
    state = {
        collapsed: false,
        demoArr: [
            'activeLabelSelect',
            'city',
            'datagrid',
            'dateRangeMonthPicker',
            'dropdown',
            'echarts',
            'list',
            'localeWrapper',
            'search',
            'tableOperate',
            'tableSettingCard',
            'tableSort',
            'address',
            'affix',
            'alert',
            'anchor',
            'antSelect',
            'attachment',
            'backTop',
            'badge',
            'breadcrumb',
            'button',
            'card',
            'carousel',
            'cascader',
            'checkbox',
            'collapse',
            'datePicker',
            'form',
            'icon',
            'input',
            'layout',
            'link',
            'loadingMask',
            'menu',
            'message',
            'modal',
            'notification',
            'pagination',
            'popconfirm',
            'popover',
            'progress',
            'radio',
            'rate',
            'select',
            'selectRange',
            'shortcut',
            'slider',
            'spin',
            'steps',
            'switch',
            'table',
            'tabs',
            'tag',
            'timeline',
            'timePicker',
            'toast',
            'tooltip',
            'transfer',
            'tree',
            'treeSelect',
            'upload'
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
                <Menu.Item key={item}>
                    <a href={`#${item}`}>{item}</a>
                </Menu.Item>
            )
        })
    }

    render() {
      return (
        <div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub2']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                onSelect={(e) =>this.handleClick(e.key)}
            >
                <SubMenu key='sub2' title="组件列表">
                    {this.renderItem()}
                </SubMenu>
            </Menu>
        </div>
      );
    }
  }
  

  export default RightMenu