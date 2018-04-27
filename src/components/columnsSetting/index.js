import React from 'react'
import classNames from 'classnames'
import clonedeep from 'lodash.clonedeep'
import Checkbox from '../checkbox/index'
import Button from '../button/index'
import Icon from '../icon/index'
import Input from '../input/index'

class ColumnsSetting extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            option: clonedeep(props.option) || [],
            label: '',
            editingKey: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            option: clonedeep(nextProps.option) || []
        })
    }

    componentWillUnmount = () => {
        if (window.removeEventListener) {
            window.removeEventListener('click', this.winClick, false)
        } else if (window.detachEvent) {
            window.detachEvent('click', this.winClick)
        } else {
            window.onclick = undefined
        }
    }

    componentDidMount = () => {
        if (window.addEventListener) {
            window.addEventListener('click', this.winClick, false)
        } else if (window.attachEvent) {
            window.attachEvent('click', this.winClick)
        } else {
            window.onclick = this.winClick
        }
    }

    checkInputHidden = (className) => {
        if( !className ){
            return true
        }else{
            return !className.includes('ttk-ColumnsSetting-item-input') && 
            !className.includes('ttk-ColumnsSetting-item-action-edit')
        }
         
    }

    winClick = (e) => {
        if( e && e.target && this.state.editingKey && this.checkInputHidden(e.target.className) ){
            this.setState({
                editingKey: null
            })
        }
    }

    itemClick = (key, e) => {
        const { singleKey, checkedKey, itemClick } = this.props
        const { option } = this.state
        const index = option.findIndex(item => item[singleKey] == key)
        console.log(index)
        if( index > -1 ){
            option[index][checkedKey] = e.target.checked
            this.setState({
                option,
            })
            itemClick && itemClick(option, option[index])
        }
    }

    exchangeArritemPosition = (arr, x, y) => {
        let a = arr[x],
        b = arr[ y]

        arr[y] = a
        arr[x] = b
        return arr
    }

    arrowUp = (key) => {
        const { singleKey } = this.props
        const { option } = this.state
        const index = option.findIndex(item => item[singleKey] == key)
        if( index > 0 ){
            this.setState({
                option: this.exchangeArritemPosition(option, index, index-1)
            })
        }
    }

    arrowDown = (key) => {
        const { singleKey } = this.props
        const { option } = this.state
        const index = option.findIndex(item => item[singleKey] == key)
        if( index < option.length - 1 ){
            this.setState({
                option: this.exchangeArritemPosition(option, index, index+1)
            })
        }
    }

    editClick = (key) => {
        this.setState({
            editingKey: key
        })
    }

    inputEdit = (key, e) => {
        const { singleKey, labelKey } = this.props
        const { option } = this.state
        const index = option.findIndex(item => item[singleKey] == key)
        option[index][labelKey] = e.target.value
        this.setState({
            option
        })
    }

    renderItem = (arr) => {
        const { itemClassName, labelKey, checkedKey, singleKey, sort, editName } = this.props
        const { editingKey } = this.state
        let className = classNames({
            'ttk-ColumnsSetting-item': true,
            [itemClassName]: !!itemClassName
        })
        return arr.map(item => {
            return (
                <div className={className} key={item[singleKey]}>
                    <div className='ttk-ColumnsSetting-item-container'>
                        {
                            editingKey == item[singleKey] ? (
                                <Input
                                    className="ttk-ColumnsSetting-item-input"
                                    value={item[labelKey]}
                                    onChange={(e) => this.inputEdit(item[singleKey], e)} 
                                />
                            ) : (
                                <Checkbox 
                                    checked={item[checkedKey]}
                                    onChange={(e)=>this.itemClick(item[singleKey], e)}
                                >
                                    {item[labelKey]}
                                </Checkbox>
                            )
                        }
                    </div>
                    <div className="ttk-ColumnsSetting-item-action">
                        {
                            sort ? (
                                <Icon 
                                    type="arrow-up" 
                                    title="上移" 
                                    onClick={() => this.arrowUp(item[singleKey])} 
                                />
                            ) : null
                        }
                        {
                            sort ? (
                                <Icon 
                                    type="arrow-down" 
                                    title="下移" 
                                    onClick={() => this.arrowDown(item[singleKey])} 
                                />
                            ) : null
                        }
                        {
                            editName ? (
                                <Icon 
                                    className="ttk-ColumnsSetting-item-action-edit"
                                    fontFamily='edficon' 
                                    type="bianji" 
                                    title="编辑"
                                    onClick={() => this.editClick(item[singleKey])}
                                />
                            ) : null
                        }
                        
                    </div>
                </div>
            )
        })
    }

    resetClick = () => {
        const { option, resetClick }  = this.props
        this.setState({
            option: clonedeep(option)
        })
        return resetClick && resetClick()
    }

    confirmClick = () => {
        const { confirmClick } =  this.props
        const { option } = this.state
        return confirmClick && confirmClick(option)
    }

    cancelClick = () => {
        const { cancelClick, option } = this.props
        this.setState({
            option: clonedeep(option)
        })
        return cancelClick && cancelClick()
    }

    render(){
        const props = this.props
        const { option } = this.state
        let className = classNames({
            'ttk-ColumnsSetting': true,
            [props.className]: !!props.className
        })
        return (
            <div className={className}>
                <div className="ttk-ColumnsSetting-header">
                    <div className="ttk-ColumnsSetting-header-title">
                        <span>选择列</span>
                    </div>
                    <div>
                        <a href="javascript:;" onClick={this.resetClick}>恢复默认设置</a>
                    </div>
                </div>
                <div className="ttk-ColumnsSetting-container">
                    {this.renderItem(option)}
                </div>
                <div className="ttk-ColumnsSetting-footer">
                    <Button type="primary" onClick={this.confirmClick}>确定</Button>
                    <Button onClick={this.cancelClick}>取消</Button>
                </div>
            </div>
        )
    }
}

export default ColumnsSetting