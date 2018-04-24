export default `
import React from 'react'
import { List } from 'ttk-component'


class List2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ]
        return (
            <div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<p>{item}</p>)}
                />
            </div>
        )
    }
}

export default List2
`