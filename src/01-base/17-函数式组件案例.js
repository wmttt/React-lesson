import React, { Component } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="测试组件函数" leftShow={true}></Navbar>
        <SideBar bg="yellow" position="left"></SideBar>
      </div>
    )
  }
}
