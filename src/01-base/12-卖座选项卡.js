import React, { Component } from 'react'
import './css/index.css'
import Film from './maizuoComponent/Film'
import Cinema from './maizuoComponent/Cinema'
import Center from './maizuoComponent/Center'
import TabBar from './maizuoComponent/TabBar'
import Leftbar from './maizuoComponent/Leftbar'

export default class App extends Component {

  state = {
    current: 0,
    list: [
      { id: 1, text: '电影' },
      { id: 2, text: '影院' },
      { id: 3, text: '我的' }
    ],
  }

  // 方法一
  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Leftbar onEvent={() => {
          this.setState({
            current: 2
          })
        }} />
        {/* 方法二 */}
        {/* {this.state.current===0 &&  <Film></Film>}
        {this.state.current===1 &&  <Cinema></Cinema>}
        {this.state.current===2 &&    <Center></Center>} */}

        {this.which()}


        <TabBar myevent={(index) => {
          this.setState({
            current: index
          })
        }
        } current={this.state.current} list={this.state.list} />
      </div>
    )
  }


}
