export default `
import React, { Component } from 'react'
import { Icon } from 'ttk-component'

export default class Example1 extends Component {
	render() {
		let style = { fontSize: 16, marginRight: 20 }
		return (
			<div>
				<Icon type='github' style={style} />
				<Icon type='github' visible={false} style={style} />
				<Icon type='github' disabled style={style} />
				<Icon type='github' showStyle='showy' style={style} />
				<Icon type='github' showStyle='softly' style={style} />
				<Icon type='github' showStyle='primary' style={style} />
				<Icon type='github' showStyle='normal' style={style} />
				<Icon type='biandong' fontFamily='edficon' showStyle='primary' style={style} />
			</div>
		)
	}
}
`