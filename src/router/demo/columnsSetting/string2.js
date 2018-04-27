export default `
import React from 'react'
import { ColumnsSetting, Modal } from 'ttk-component'

class Demo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick = async() => {
        const initOption =  [{
            id: 1,
            name: '第一',
            visible: true
        }, {
            id: 2,
            name: '第二',
            visible: false
        }, {
            id: 3,
            name: '第三',
            visible: false
        }, {
            id: 4,
            name: '第四',
            visible: false
        }, {
            id: 5,
            name: '第五',
            visible: false
        }, {
            id: 6,
            name: '第六',
            visible: false
        }, {
            id: 7,
            name: '第七',
            visible: false
        }]
        console.log(Modal)
        const res =  await Modal.show({
            title: '选择格式',
            width: 500,
            iconType: null,
            children: <ColumnsSetting 
                option={initOption} 
                singleKey='id'
                sort={true}
                editName={true}
                checkedKey='visible' 
                labelKey="name"
            />
        })
        console.log(res)
    }

    render(){
        return (
            <a onClick={this.handleClick}>设置</a>
        )
    }
}

export default Demo
`