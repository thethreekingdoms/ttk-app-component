import React from 'react'
import Markdown from 'react-markdown'
import readMe from './readme'

class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <Markdown source={readMe} />
            </div>
        )
    }
}

export default <Demo />