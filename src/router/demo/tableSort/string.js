export default `
import React from 'react'
import { TableSort } from 'ttk-component'

export default class TableSortDemo extends React.Component{
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
            </div>
        )
    }
}
`