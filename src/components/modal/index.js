import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Modal, LocaleProvider } from 'antd'
import info from './info'
import error from './error'
import success from './success'
import warning from './warning'
import confirm from './confirm'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import classNames from 'classnames'

class ModalComponent extends Component {
	state = {
	}

	setOkListener = (cb) => {
		this.setState({ okListener: cb })
	}

	setCancelListener = (cb) => {
		this.setState({ cancelListener: cb })
	}


	handleOk = async () => {
		let listener = this.state.okListener, ret

		if (listener) {
			ret = await listener()
			if (ret === false) {
				return
			}
		}

		this.props.onOk && this.props.onOk(ret)
	}

	handleCancel = async () => {
		let listener = this.state.cancelListener, ret

		if (listener) {
			ret = await listener()
			if (ret === false) {
				return
			}
		}

		this.props.onCancel && this.props.onCancel(ret)
	}

	render() {
		var { children, ...otherProps } = this.props
		children = React.cloneElement(children, {
			setOkListener: this.setOkListener,
			setCancelLister: this.setCancelListener,
			closeModal: this.props.closeModal
		})
		let className = classNames({
			'mk-modal': true
		})
		return (
			<LocaleProvider locale={zhCN}>
				<Modal
					visible
					className={className}
					{...otherProps}
					children={children}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				/>
			</LocaleProvider>
		)
	}
}

ModalComponent.newInstance = (props) => {
	return {
		show(properties) {
			const div = document.createElement('div')
			return new Promise((resolve, reject) => {
				let handleCancel = (ret) => {
					ReactDOM.unmountComponentAtNode(div)
					try {
						document.body.removeChild(div)
					}
					catch (err) { }
					resolve(ret || false)
				}

				let handleOk = (ret) => {
					ReactDOM.unmountComponentAtNode(div)
					try {
						document.body.removeChild(div)
					}
					catch (err) { }
					resolve(ret || true)
				}

				const closeModal = (res) => {
					ReactDOM.unmountComponentAtNode(div)
					try {
						document.body.removeChild(div)
					}
					catch (err) { }
					resolve(res || true)
					return res
				}
				

				const props = properties || {}
				if( props.closeBack ){
					props.closeBack(closeModal)
				}
				props.cancelText = props.cancelText || '取消'
				props.okText = props.okText || '确定'
				document.body.appendChild(div)

				ReactDOM.render(
					<ModalComponent
						visible
						closeModal={closeModal}
						maskClosable={false}
						{...props}
						onCancel={handleCancel}
						onOk={handleOk} />
					, div)

			})
		}
	}
}

let m = window.__Modal

if (!m) {
	m = ModalComponent.newInstance()
	window.__Modal = m
}

m.info = info
m.success = success
m.error = error
m.warning = warning
m.confirm = confirm

export default m