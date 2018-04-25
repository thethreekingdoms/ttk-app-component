import React from 'react'
import { Spin } from 'antd'
import { isNull } from 'util';

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            children: null
        }
    }
    componentDidMount(){
        import('./component').then((res) => {
            console.log(typeof res)
            this.setState({
                loading: false,
                children: res
            })
        })
    }
    render() {
        return (
            <Spin spinning={this.state.loading}>
                {this.state.children}
            </Spin>
        )
    }
}

export default Container