import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import RightMenu from './RightMenu'
const { Header, Content, Footer, Sider } = Layout;
import demo from './demo/index'

class Router extends React.Component{
  constructor(props){
    super(props)
    const hash = window.location.hash ? window.location.hash.replace('#/', '') : ''
    let children = hash && demo[hash] ? demo[hash] : demo.detail
    this.state={
      children: children
    }
  }

  handleClick = (key) => {
    console.log(key)
    if( demo[key] ){
      this.setState({
        children: demo[key]
      })
    }
  }

  render(){
    return (
      <Layout className="container">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{overflow: 'auto'}}
        >
          <div className="logo" />
          <RightMenu handleClick={this.handleClick} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content className="content-container" style={{ margin: '24px 16px 0' , overflow: 'auto'}}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.state.children()}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
           ttk-Component
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Router