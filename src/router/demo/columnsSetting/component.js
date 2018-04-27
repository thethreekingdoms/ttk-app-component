import React from 'react'
import { ActiveLabelSelect } from 'ttk-component'
import Example from '../../example'
import Example1 from './example1'
import Markdown from 'react-markdown'
import string from './string'
import readmeMd from './readMe'

class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <Example
					title='示例一'
					content={<Example1 />}
					doc={string}
				/>

				<Markdown source={readmeMd} />

            </div>
        )
    }
}

export default <Demo/>