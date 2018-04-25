import React from 'react'
import { TableSort } from 'ttk-component'
import Code from '../../code'
import str from './string'
import MarkDown  from 'react-markdown'
import markStr from './markdown'

class TableSortDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sortOrder: 'asc'
        }
    }

    handleClick = (value) => {
        console.log(value)
        this.setState({
            sortOrder: value
        })
    }

    render(){
        return(
            <div>
                <TableSort
                    sortOrder={this.state.sortOrder}
                    handleClick={(e) => this.handleClick(e)}
                />
                <p>代码</p>
                <MarkDown source={markStr} />
                <Code value={str} />
            </div>
        )
    }
}

export default <TableSortDemo />