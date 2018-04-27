import React from 'react'
import { ColumnsSetting } from 'ttk-component'
import classNames from 'classnames'
import Example from '../../example'

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

class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            initVisible: false,
            data: initOption
        }
    }
    handleClick = () => {
        this.setState({
            visible: !this.state.visible,
            initVisible: true
        })
    }

    resetClick = () => {
        this.setState({
            data: initOption,
            visible: false
        })
    }

    confirmClick = (data) => {
        this.setState({
            data: data,
            visible: false
        })
    }

    cancelClick = () => {
        this.setState({
            visible: false
        })
    }


    render(){
        const { visible, initVisible } = this.state
        let className = classNames({
            'animated': true,
            'slideInRight': visible,
            'slideOutRight': !visible
        })
        return (
            <div>
                <a onClick={this.handleClick}>设置</a>
                <div className={className} style={{
                    width: '400px',
                    height: '400px',
                    position: 'fixed',
                    top: '50px',
                    border: '1px solid #e8e8e8',
                    boxShadow: '0 0 5px #e8e8e8',
                    zIndex: '1000',
                    right: '0',
                    opacity: !initVisible ? '0' : '1' 
                }}>
                    <ColumnsSetting 
                        option={this.state.data} 
                        singleKey='id'
                        checkedKey='visible' 
                        labelKey="name"
                        sort={true}
                        editName={true}
                        resetClick={()=> this.resetClick()}
                        confirmClick={(arr) => this.confirmClick(arr)}
                        cancelClick={() => this.cancelClick()}
                        itemClassName="item_checkbox"
                    />
                </div>
                
            </div>
        )
    }
}

export default Demo