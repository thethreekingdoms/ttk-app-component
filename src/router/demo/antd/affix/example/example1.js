import React,{Component} from 'react'

import { Affix, Button } from 'ttk-component'

export default class Example1 extends Component {
		render() {
				return (
						<div id="Affix_1">
								<Affix  target={()=>document.querySelector('.content-container')} offsetBottom={0} >
									<Button type="primary">Affix top</Button>
								</Affix>
								<br />
								<br />
								<Affix offsetBottom={0}>
									<Button type="primary">Affix bottom</Button>
								</Affix>
							</div>
				)
		}
}