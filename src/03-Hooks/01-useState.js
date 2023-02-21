import React, { Component, useState } from 'react'

export default function App() {
  
        const [name,setName]=useState("kerwin")
        const [age,setage]=useState(100)
    
    return (
      <div>App-{name+age}
        <button onClick={()=>{
            setName("xiaoming")
            setage(18)
        }}>wwwww 按钮</button>
      </div>
    )
  
}
