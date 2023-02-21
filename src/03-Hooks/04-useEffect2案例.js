import React, { useEffect, useState } from 'react'

export default function App() {

    const [name,setname]=useState("wmt")

    useEffect(()=>{
        setname(name.substring(0,1).toUpperCase()+name.substring(1),[name]) //空数组，表示不依赖
    })
        //第一次执行一次，之后name就是依赖，更新也会执行一次
  return (
    <div>
      app-{name}
      <button onClick={()=>{
        setname("Wmting")
      }}>click</button>
    </div>
  )
}
