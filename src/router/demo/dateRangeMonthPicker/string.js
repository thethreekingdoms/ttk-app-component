export default `
import React from 'react'
import {DateRangeMonthPicker} from 'ttk-component'
import moment from 'moment'

class DateRangeMonthPickerDemo extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    
    render(){
        return (
            <div>
                <DateRangeMonthPicker
                    format="YYYY-MM"
                    allowClear={false}
                    mode= {['month', 'month']}
                    startEnableDate="2018-02"
                    onChange={(value)=> console.log(value)}
                    value={[moment('2018-07-01'), moment('2018-11-01')]}
                />
            </div>
        )
    }
}

export default DateRangeMonthPickerDemo
`