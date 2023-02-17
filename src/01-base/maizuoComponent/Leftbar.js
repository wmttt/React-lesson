import React, { Component } from 'react'

export default class Leftbar extends Component {
  render() {
    return (
      <div style={{background:"yellow",textAlign:'center',overflow:'hidden'}}>
        <button style={{float:"left"}}>back</button>
        <span>卖座电影</span>
        <button style={{float:"right"}} onClick={()=>{
            this.props.onEvent()
        }}>我的</button>
      </div>
    )
  }
}
