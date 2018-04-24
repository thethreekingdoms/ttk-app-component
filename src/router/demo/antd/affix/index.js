import React, { Component } from 'react'
import Mk from 'react-markdown'
import Code from '../../../code'
import example1Md from './md/example1'
import Example from './example/example1'

import readmeMd from './md/readme'

export default class Demo extends Component {
	render() {
		return (
			<div >
				<Example />
				<Code value={example1Md} />
				<Mk source={readmeMd} />
			</div>
		)
	}

}