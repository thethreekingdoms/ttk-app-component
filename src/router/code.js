import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/javascript/javascript');

class Code extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <CodeMirror
                    value={this.props.value}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        readOnly: true
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />
            </div>
        )
    }
}

export default Code