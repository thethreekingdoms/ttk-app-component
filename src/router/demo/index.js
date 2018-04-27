import React from 'react'
import Detail from './Detail'
import ActiveLabelSelect from './activeLabelSelect/index'
import DatagridDemo from './antd/datagrid'
import DateRangeMonthPickerDemo from './dateRangeMonthPicker'
import DropDown from './dropDown'
import Echarts from './echarts'
import List from './list'
import PrintOption from './printOption'
import SearchDemo from './search'
import TableOperateDemo from './tableOperate'
import TableSettingCard from './tableSettingCard'
import TableSort from './tableSort'
import LocaleWrapper from './localeWrapper'

import Affix from './antd/affix' 
import Alert from './antd/alert'
import Anchor from './antd/anchor'
import BackTop from './antd/backTop'
import Badge from './antd/badge'
import Breadcrumb from './antd/breadcrumb'
import Button from './antd/button'
import Card from './antd/card'
import Carousel from './antd/carousel'
import Cascader from './antd/cascader'
import Checkbox from './antd/checkbox'
import Collapse from './antd/collapse'
import DatePicker from './antd/datePicker'
import Form from './antd/form'
import Icon from './antd/icon'
import Input from './antd/input'
import Layout from './antd/layout'
import Link from './antd/link'
import Menu from './antd/menu'
import Modal from './antd/modal'
import Notification from './antd/notification'
import Pagination from './antd/pagination'
import Popconfirm from './antd/popconfirm'
import Popover from './antd/popover'
import Progress from './antd/progress'
import Radio from './antd/radio'
import Rate from './antd/rate'
import Select from './antd/select'
import Slider from './antd/slider'
import Spin from './antd/spin'
import Steps from './antd/steps'
import Switch from './antd/switch'
import Table from './antd/table'
import Tabs from './antd/tabs'
import Timeline from './antd/timeline'
import Toast from './antd/toast'
import Tooltip from './antd/tooltip'
import Transfer from './antd/transfer'
import Tree from './antd/tree'
import TreeSelect from './antd/treeSelect'
import Upload from './antd/upload'
import ColumnsSetting from './columnsSetting'

export default {
    button: () => <Button/>,
    detail: ()=> <Detail/>,
    activeLabelSelect: () => <ActiveLabelSelect />,
    datagrid: () => <DatagridDemo />,
    dateRangeMonthPicker: () => <DateRangeMonthPickerDemo/>,
    dropdown: () => <DropDown />,
    echarts: () => <Echarts />,
    list: () => <List />,
    printOption: () =><PrintOption />,
    search: () => <SearchDemo />,
    tableOperate: () => <TableOperateDemo/>,
    tableSettingCard: ()=> <TableSettingCard />,
    tableSort: () => <TableSort />,
    localeWrapper: () => <LocaleWrapper />,
    affix: () => <Affix />,
    alert: () => <Alert />,
    anchor: () => <Anchor />,
    backTop: () => <BackTop />,
    badge: () => <Badge />,
    breadcrumb: () => <Breadcrumb />,
    card: () => <Card />,
    carousel: () => <Carousel />,
    cascader: () => <Cascader/>,
    checkbox: () => <Checkbox/>,
    collapse: () => <Collapse />,
    datePicker: () => <DatePicker />,
    form: () => <Form />, 
    icon: () => <Icon />,
    input: () => <Input/>,
    layout: () => <Layout/>,
    link: () => <Link/>,
    menu: () => <Menu />,
    modal: () => <Modal />,
    notification: () => <Notification />,
    pagination: () => <Pagination/>,
    popconfirm: () => <Popconfirm />,
    popover: () => <Popover />,
    progress: () => <Progress/>,
    radio: () => <Radio/>,
    rate: () => <Rate/>,
    select: () => <Select />,
    slider: () => <Slider/>,
    spin: () => <Spin />,
    steps: () => <Steps />,
    switch: () => <Switch/>,
    table: () => <Table />,
    tabs: () => <Tabs />,
    timeline: () => <Timeline />,
    toast: () => <Toast />,
    tooltip: () => <Tooltip />,
    transfer: () => <Transfer />,
    tree: () => <Tree />,
    treeSelect: () => <TreeSelect />,
    upload: () => <Upload />,
    columnsSetting: () => <ColumnsSetting/>
}