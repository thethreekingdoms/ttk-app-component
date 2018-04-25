import React, { Component } from 'react'
 import Example from '../../../example'
import Markdown from 'react-markdown'

import example1Md from './md/example1'
import Example1 from './example/example1'

import example2Md from './md/example2'
import Example2 from './example/example2'

import readmeMd from './md/readme'


class Demo extends Component {
	render() {
		return (
			<div>
				<Example
					title='示例一：垂直菜单'
					content={<Example1 />}
					doc={example1Md}
				/>

				<Example
					title='示例二：横向菜单'
					content={<Example2 />}
					doc={example2Md}
				/>

				<Markdown source={ readmeMd } />
			</div>
		)
	}

}

export default <Demo />