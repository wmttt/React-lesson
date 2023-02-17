import React, { Component } from 'react'
/**
 * 需求：要在子组件navbarY中控制子组件slideY的显隐
 * 答案：要通过子组件通信把要求给父组件，让父组件来控制另一个子组件
 * 父传子：传属性。如布尔值，字符串啥的
 * 子传父：传回调函数
 */

 class NavbarY extends Component {
  render() {
    return (
     
        <div style={{background:"red"}}>
        <button onClick={()=>{
            this.props.event()
        }}>click</button>
        <span>navbarY</span>
      </div>
    )
  }
}
class SlideY extends Component{
    render(){
        return(
            <div style={{background:"yellow"}}>
                <ul>
                    <li>111111</li>
                    <li>222222</li>
                    <li>333333</li>
                    <li>4444444</li>
                </ul>
            </div>
        )
    }
}





export default class App extends Component {
    state={
        isShow:true
    }

    handleEvent=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
       // console.log("父组件定义的事件被子组件通知的被执行了")
    }
  render() {
    return (
      <div>
        <NavbarY  event={this.handleEvent}/>
        {this.state.isShow && <SlideY /> }
      </div>
    )
  }
}
