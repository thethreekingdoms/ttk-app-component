import React from 'react'
import Mk from 'react-markdown'
import Code from './code'


export default class Example extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        return (
            <div>
                <p>{this.props.title}</p>
                {this.props.content}
                <br/>
                <br/>
                <br/>
                <div>
                    <Code value={this.props.doc} />
                </div>
            </div>
        )
    }
}