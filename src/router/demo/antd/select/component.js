import React, { Component } from 'react'
 import Example from '../../../example'
import Markdown from 'react-markdown'

import example1Md from './md/example1'
import Example1 from './example/example1'

import example2Md from './md/example2'
import Example2 from './example/example2'

import example3Md from './md/example3'
import Example3 from './example/example3'

import example4Md from './md/example4'
import Example4 from './example/example4'

import example5Md from './md/example5'
import Example5 from './example/example5'

import example6Md from './md/example6'
import Example6 from './example/example6'

import example7Md from './md/example7'
import Example7 from './example/example7'

import readmeMd from './md/readme'


class Demo extends Component {
	render() {
		return (
			<div>
				<Example
					title='示例一:基本'
					content={<Example1 />}
					doc={example1Md}
				/>

				<Example
					title='示例二:Search'
					content={<Example2 />}
					doc={example2Md}
				/>

				<Example
					title='示例三:combobox'
					content={<Example3 />}
					doc={example3Md}
				/>

				<Example
					title='示例四:multiple'
					content={<Example4 />}
					doc={example4Md}
				/>

				<Example
					title='示例五:tags'
					content={<Example5 />}
					doc={example5Md}
				/>

				<Example
					title='示例六:新增功能'
					content={<Example6 />}
					doc={example6Md}
				/>

				<Example
					title='示例七:后缀'
					content={<Example7 />}
					doc={example7Md}
				/>

				<Markdown source={ readmeMd } />
			</div>
		)
	}

}

export default <Demo />