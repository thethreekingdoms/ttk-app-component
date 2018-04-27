import React from 'react'
import Mk from 'react-markdown'
import Code from './code'


export default class Example extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            visible: false
        }
    }

    handleClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render(){
        return (
            <div>
                <br/>
                <br/>
                <p>{this.props.title}</p>
                {this.props.content}
                <br/>
                <br/>
                <br/>
                <a onClick={this.handleClick} href="javasccript:;">
                    {
                        this.state.visible ? '收起代码' : '展开代码'
                    }
                </a>
                <br/>
                <br/>
                <br/>
                <div>
                    {
                        this.state.visible ? <Code value={this.props.doc} /> : null
                    }
                    
                </div>
            </div>
        )
    }
}