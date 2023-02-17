import React, { Component } from 'react'
/**
 * 受控组件，可以进行通信父子及时通信，使得state成为唯一的数据源
 */
export default class App extends Component {
   state={
    username:'wuemngting'
   }
  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type="text"  value={this.state.username} onChange={this.handChange}></input>
        <br/>
       
        <button onClick={()=>{
            console.log(this.myusername.current.value)
        }}>登录</button>

        <button onClick={()=>{
          this.setState({
            username:''
          })
        }}>重置</button>



        
      </div>
    )
  }
  handChange=(evt)=>{
   console.log(evt.target.value)
   this.setState({
     username:evt.target.value
   })
  }
}
