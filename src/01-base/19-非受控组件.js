import React, { Component } from 'react'
/**
 * value 已经固定了。<input type="text" ref={this.myusername} value="wmting"></input>
 */
export default class App extends Component {
    myusername=React.createRef()
  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type="text" ref={this.myusername} value="受控的wmting"></input>
        <br/>
        <input type="text" ref={this.myusername} defaultValue="非受控组件defalutValue"></input>
        <button onClick={()=>{
          // 通过ref 从DOM节点中获取表单数据，就是非受控组件的使用,不受状态的控制
            console.log(this.myusername.current.value)
        }}>登录</button>

        <button onClick={()=>{
          this.myusername.current.value=""
        }}>重置</button>



        
      </div>
    )
  }
}
