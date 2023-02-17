
import React, { Component } from 'react'

/**
 * 状态与属性的关系，孩子组件没有什么权利，不能修改父组件传过来的值。如果要改变的话，则要父子之间通信，那么父组件改变状态改值后再传给子组件。子组件是个傀儡。
 */
class Child extends Component{
render(){
    return(
        <div>
            我是孩子-{this.props.text}
            {/* 而子组件不能修改值。只能用传过去的值，一下语句点击会报错。 */}
            <button onClick={()=>{
                this.props.text="3333333333"
            }}>孩子按钮</button>
        </div>
    )
}
}




export default class App extends Component {
state={
    text:"1111111"
}


  render() {
    return (
      <div>
        <button onClick={()=>this.handclick()}>父组件的按钮</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }

  //父组件可以修改状态，来改变子属性的值,而子组件不能通过属性：this.props.text="3333333333"去修改值。只能用传过去的值。
  handclick=()=>{ 
    this.setState({
        text:"2222"
    })
  }
}
