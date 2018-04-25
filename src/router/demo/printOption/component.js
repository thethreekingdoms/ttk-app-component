import React from 'react'
import { PrintOption, PrintOption2 } from 'ttk-component'


class PrintOptionDemo extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    submitPrintOption = (...arg) => {
        console.log(arg)
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default <PrintOptionDemo/>