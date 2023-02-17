import React, { Component } from 'react'

export default class App extends Component {
    state={
        myname:"wmt",
        myage:'20'
    }
    static getDerivedStateFromProps(nextProps,nextState){  //覆盖掉 state 的内容
        console.log(nextProps)
        console.log(nextState)
        return {
            myname:nextState.myname.substring(0,1).toUpperCase()
            +nextState.myname.substring(1)
        }
    }

 getSnapshotBeforeUpdate(){  //执行在componentDidUpdate之前
    console.log("getSnapshotBeforeUpdate")
    return 100;
}

    
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                myname:'xiaoming'
            })
        }}> 点击按钮</button>
        app-{this.state.myname}-{this.state.myage}
      </div>
    )
  }
}
