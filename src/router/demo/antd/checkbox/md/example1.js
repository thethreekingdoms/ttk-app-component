export default `
import React, { Component } from 'react'
import { Checkbox } from 'ttk-component'

export default class Example1 extends Component {
	handleChange = (e) => {
		console.log('checked = {e.target.checked}')
	}
	render() {
		return (
			<div>
				<Checkbox onChange={this.handleChange}>Checkbox</Checkbox>
			</div>
		)
	}
}
`