import React, { Component } from 'react'
 import Example from '../../../example'
import Markdown from 'react-markdown'

import example1Md from './md/example1'
import Example1 from './example/example1'

import readmeMd from './md/readme'


export default class Demo extends Component {
	render() {
		return (
			<div>
				<Example
					title='示例一：图标'
					content={<Example1 />}
					doc={example1Md}
				/>

				<Markdown source={ readmeMd } />
			</div>
		)
	}

}