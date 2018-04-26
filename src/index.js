import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
import Router from './router'

const dom = (
    <div className="container"><Router></Router></div>
)

ReactDom.render(dom, document.getElementById('root'))