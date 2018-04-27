import React from 'react'
import { ActiveLabelSelect } from 'ttk-component'
import Example from '../../example'
import Example1 from './example1'
import Example2 from './example2'
import Markdown from 'react-markdown'
import string from './string'
import string2 from './string2'
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

                <Example
					title='示例二:通过Modal引用'
					content={<Example2 />}
					doc={string2}
				/>
				<Markdown source={readmeMd} />

            </div>
        )
    }
}

export default <Demo/>