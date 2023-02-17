import React from 'react'

/**
 * 
 * @param {*} props   函数组件
 * @returns 
 */
export default function App(props) {
/**
 * 函数组件接受父组件传来的值
 */
let {bg,position}=props
var obj1={
    left:0,
    color:"red"
}
var obj2={
    right:0
}
var  obj={
    background:bg,
    width:"200px",
    position:"fixed"
}
var styleObj= position==="left"?{...obj,...obj1}:{...obj,...obj2}

  return (
    <div  style={styleObj} >
      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </div>
  )
}
