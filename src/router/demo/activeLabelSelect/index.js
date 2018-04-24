import React from 'react'
import { ActiveLabelSelect } from 'ttk-component'
import Example from '../../example'
import Markdown from 'react-markdown'
import string from './activelabelSelectString'
import readmeMd from './readme'

class ActiveLabelSelectDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            label: 'fruit',
            data:[{
                name: '水果',
                key: 'fruit',
                children: [{
                    label: '苹果',
                    value: 'apple'
                },{
                    label: '草莓',
                    value: '草莓'
                },{
                    label: '香蕉',
                    value: 'xiangjiao'
                },{
                    label: '西瓜',
                    value: 'xigua'
                }]
            }, {
                name: '咖啡',
                key: 'coffee',
                children: [{
                    label: '美式咖啡',
                    value: '美式咖啡'
                },{
                    label: '拿铁',
                    value: '拿铁'
                },{
                    label: '卡布基诺',
                    value: '卡布基诺'
                },{
                    label: '摩卡',
                    value: '摩卡'
                }]
            }]
        }
    }

    handleClick=(label, value) => {
        const { data } = this.state
        const index = data.findIndex(item => item.key == label)
        data[index].value = value
        this.setState({
            data,
            label 
        })
    }

    render(){
        const {data, label} = this.state
        return (
            <div>
                <Example
					title='示例一'
					content={<ActiveLabelSelect 
                        option={data} 
                        selectLabel={label}
                        onChange={(label, value)=> this.handleClick(label, value)}
                    />}
					doc={string}
				/>

				<Markdown source={readmeMd} />

            </div>
        )
    }
}

export default ActiveLabelSelectDemo