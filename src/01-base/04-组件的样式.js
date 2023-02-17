import React, { Component } from 'react'
import './css/index.css' //之所以当成模块引入进来，是webpack的作用。


export default class App extends Component {
  render() {
        var myname="wumengting"
        var obj={
            backgroundColor:"yellow",
            fontSize:'30px'  //fontSize而不是font-size，都不用- 了，用驼峰命名就行。
        }
    return (
      <div>
        {/* 大括号里不能放语句：ifelse for循环，只能放表达式 */}
        {10+20}-{myname}  
        <br/>
        {10>20?'aaa':'bbb'}
        <br/>
        <div style={obj}>111111</div>   
        <div style={{background:"red"}}>111111</div>
        <div className="active">33333333333333333</div>   
        <label htmlFor="username">用户名：</label><input type="text" id="username"></input>
      </div>
    )
  }
}
