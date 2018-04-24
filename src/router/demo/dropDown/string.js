export default `
import React from 'react'
import { Dropdown, Menu } from 'ttk-component'
import Code from '../../code'
import str from './string'

class DropDown2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer">3rd menu item</a>
                </Menu.Item>
            </Menu>
        )
        return (
            <div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Click me
                    </a>
                </Dropdown>
            </div>
        )
    }
}


export default DropDown2
`