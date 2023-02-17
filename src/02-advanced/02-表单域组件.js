import React, { Component } from 'react'


class Field extends Component{
    render(){
        return(
            <div style={{background:"yellow"}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(evt)=>{
                            this.props.onchangeEvent(evt.target.value)
                }} value={this.props.value}></input>
            </div>
        )
    }
}
export default class App extends Component {
    state={
        username:'',
        password:''
    }
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field label="用户名" type="text" onchangeEvent={(value)=>{
           this.setState({
            username:value
           })
        }} value={this.state.username}></Field>
        <Field label="密码" type="password" onchangeEvent={(value)=>{
             this.setState({
                password:value
               })
        }} value={this.state.username}></Field>
        <button onClick={()=>{
            console.log(this.state.username+this.state.password)
        }}>登录</button>
      </div>
    )
  }
}
