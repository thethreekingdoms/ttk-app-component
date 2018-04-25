import React from 'react'
import {DateRangeMonthPicker} from 'ttk-component'
import moment from 'moment'
import Markdown  from 'react-markdown'
import Example from '../../example'
import str from './string'
import Code from '../../code'
import readMe from './readme'


class DateRangeMonthPickerDemo extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    
    render(){
        return (
            <div>

                <Example 
                    title="示例"
                    content={<DateRangeMonthPicker
                        format="YYYY-MM"
                        allowClear={false}
                        mode= {['month', 'month']}
                        startEnableDate="2018-02"
                        onChange={(value)=> console.log(value)}
                        value={[moment('2018-07-01'), moment('2018-11-01')]}
                    />}
                    doc={ str }
                />

                <br/>
                <Markdown source={readMe} />
            </div>
        )
    }
}

export default <DateRangeMonthPickerDemo/>