import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
import Router from './router'
import './style/index.less'
import './assets/style/green.less'

const dom = (
    <div className="container"><Router></Router></div>
)

ReactDom.render(dom, document.getElementById('root'))