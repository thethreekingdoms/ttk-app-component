import React from 'react'
import { SearchCard, Button } from 'ttk-component'
import moment from 'moment'
import Markdown from 'react-markdown'
import str from './string'
import Code from '../../code'
import readme from './readme'

class SearchDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    transformDateToNum = (date) => {
        try{
            if( !date ){
                return 0
            }
            let time = date
            if (typeof date == 'string') {
                time = moment(date)
            }
            return parseInt(`${time.year()}${time.month() < 10 ? `0${time.month()}` : `${time.month()}`}`)
        }catch(err){
            console.log(err)
            return 0
        }

    }

    disabledDate = (current, pointTime, type) => {
        const enableddate = moment('2012-08-01')
        // const enableddateNum = this.transformDateToNum(enableddate)
        if (type == 'pre') {
            let currentMonth = this.transformDateToNum(current)
            let enableddateMonth = this.transformDateToNum(enableddate)
            return currentMonth<enableddateMonth
        } else {
            let currentMonth = this.transformDateToNum(current)
            let pointTimeMonth = this.transformDateToNum(pointTime)
            let enableddateMonth = this.transformDateToNum(enableddate)
            return currentMonth < pointTimeMonth || currentMonth<enableddateMonth
        }

    }

    render(){
        return (
            <div>
                <SearchCard
                    searchClick={(...arg) =>console.log(arg)}
                    refreshBtn={<span>刷新</span>}
                    menuBtn={[
                        <Button key="11111">按钮一</Button>
                    ]}
                    normalSearchValue={{
                        date: [moment(), moment()], 
                        query: {
                            accountcode: '',
                            currencyId: '0',
                            nodatanodisplay: [ '1' ],
                            date_end: moment().endOf('month'),
                            date_start: moment().startOf('month'),
                        }
                    }}
                    normalSearchChange={(...arg)=>console.log(arg)}
                    normalSearch={[{
                        key: '222',
                        name: 'date',
                        key: 1,
                        type: 'DateRangeMonthPicker',
                        format: "YYYY-MM",
                        startEnableDate: moment(),
                        // open: '{{data.showPicker}}',
                        // renderExtraFooter:'{{$renderDatePickerExtraFooter}}',
                        // disabledDate: '{{function(value){$disabledRangePicker(value)}}}',
                        mode: ['month', 'month'],
                        onPanelChange: (...arg)=>console.log(arg)
                    }, {
                        key: '3333',
                        name: 'simpleCondition',
                        type: 'Input.Search',
                        className: 'mk-input',
                        onChange: '',
                        placeholder: "科目/摘要/凭证号/金额"
                    }]}
                    moreSearch={{
                        accountcode: '',
                        currencyId: '0',
                        nodatanodisplay: [ '1' ],
                        date_end: moment().endOf('month'),
                        date_start: moment().startOf('month'),
                    }}
                    moreSearchItem = {[{
                        name: 'date',
                        key: 'date',
                        range: true,
                        label: '会计期间',
                        centerContent: '到',
                        isTime: true,
                        pre: {
                            name: 'date_start',
                            key: 'date_start',
                            type: 'DatePicker.MonthPicker',
                            mode: ['month', 'month'],
                            format: "YYYY-MM",
                            noClear: true,
                            decoratorDate: (value, value2) => this.disabledDate(value, value2, "pre"),
                            rules: [{
                                type: 'object',
                                required: true,
                                message: '该项是必填项',
                            }],
                        },
                        next: {
                            name: 'date_end',
                            key: 'date_end',
                            type: 'DatePicker.MonthPicker',
                            mode: ['month', 'month'],
                            format: "YYYY-MM",
                            noClear: true,
                            decoratorDate: (value, value2)=>this.disabledDate(value, value2, "next"),
                            rules: [{
                                type: 'object',
                                required: true,
                                message: '该项是必填项',
                            }],
                        }
                    }, {
                        name: 'code',
                        key: 'code',
                        range: true,
                        label: '凭证号',
                        centerContent: '~',
                        pre: {
                            name: 'startCode',
                            key: 'startCode',
                            type: 'Input',
                        },
                        next: {
                            name: 'endCode',
                            key: 'endCode',
                            type: 'Input',
                        }
                    }, {
                        name: 'accountId',
                        key: 'accountId',
                        label: '科目',
                        type: 'Select',
                        showSearch: true,
                        childType: 'Option',
                        optionFilterProp:"children",
                        option: [{label: 1, value: 1},{label: 2, value: 2}],
                    }, {
                        name: 'summary',
                        label: '摘要',
                        type: 'Input',
                        key: 'summary',
                    },
                    {
                        name: 'voucherState',
                        key: 'voucherState',
                        label: '状态',
                        type: 'Select',
                        childType: 'Option',
                        option: [{
                            label: '成功',
                            value: '1'
                        },{
                            label: '失败',
                            value: '2'
                        }],
                    }]}
                />
                <p>code</p>
                <Code value={str} />
                <Markdown source={readme} />
            </div>
        )
    }
}

export default <SearchDemo/>