export default  `
import React, { Component } from 'react'
import { Input } from 'ttk-component'

const InputNumber = Input.Number

export default class Example3 extends Component {

	render() {
		return (
			<div>
				<InputNumber placeholder="number" />
			</div>
		)
	}
}
`