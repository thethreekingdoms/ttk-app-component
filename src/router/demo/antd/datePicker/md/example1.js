export default `
import React, { Component } from 'react'
import { DatePicker } from 'ttk-component'

const { MonthPicker, RangePicker } = DatePicker

export default class Example1 extends Component {
	render() {
		return (
			<div>
				<DatePicker />
				<br />
				<br />
				<MonthPicker placeholder="Select month" />
				<br />
				<br />
				<RangePicker />
			</div>
		)
	}
}
`