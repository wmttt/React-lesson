import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  state = {

  }
  render() {
    var obj={
      title:'测试',
      leftShow:true
    }
    return (
      <div>
        <div>
          <h2>首页页面</h2>
          <Navbar title="首页" leftShow={false}></Navbar>
        </div>
        <div>
          <h2>购物车页面</h2>
          <Navbar title={obj.title} leftShow={obj.leftShow}></Navbar>
        </div>
        <div>
          <h2>简写方式：与购物车显示一样的</h2>
          <Navbar {...obj}></Navbar>
        </div>
        <div>
          <h2>我的页面</h2>
          <Navbar title="我的" leftShow={true}></Navbar>
        </div>
      </div>

    )
  }
}


