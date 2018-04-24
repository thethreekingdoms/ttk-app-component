import React from 'react'
import { TableOperate } from 'ttk-component'
import Code from '../../code'
import str from './string'

export default class TableOperateDemo extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
                <p>TableOperate</p>
                <TableOperate 
                    viewClick={() => console.log('viewClick')}
                    editClick={() => console.log('editClick')}
                    deleteClick={() => console.log('deleteClick')}
                    noteClick = {() => console.log('deleteClick')}
                    submitNote = {(value) => console.log(value)}
                    checkMaxInput={(e)=>console.log(e)}
                    status={1}
                />
                <br/>
                <TableOperate 
                    viewClick={() => console.log('viewClick')}
                    editClick={() => console.log('editClick')}
                    deleteClick={() => console.log('deleteClick')}
                    noteClick = {() => console.log('deleteClick')}
                    submitNote = {(value) => console.log(value)}
                    checkMaxInput={(e)=>console.log(e)}
                    status={2}
                />
                <p>代码</p>
                <Code value={str} />
            </div>
        )
    }
}