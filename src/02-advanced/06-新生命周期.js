import React, { Component } from 'react'

export default class App extends Component {
    state={
        myname:"wmt",
        myage:'20'
    }
    static getDerivedStateFromProps(){  //覆盖掉 state 的内容
        console.log("getDerivedStateFromProps")
        return {
            myname:"wumengting"
        }
    }
  render() {
    return (
      <div>
        app-{this.state.myname+this.state.myage}
      </div>
    )
  }
}
