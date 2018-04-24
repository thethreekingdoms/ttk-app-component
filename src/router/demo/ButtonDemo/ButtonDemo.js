import React from 'react'
import { Button } from 'ttk-component'
import Code from '../../code'
class ButtonDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Button>确定</Button>
                <Code value={'<Button>确定</Button>'} />
            </div>
        )
    }
}

export default ButtonDemo