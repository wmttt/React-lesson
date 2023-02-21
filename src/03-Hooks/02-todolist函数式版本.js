import React, { useState } from 'react'

export default function App() {
    const [text,settext] =useState("")
    const [list,setList]=useState(["aa","bb","cc"])

    const handleChange=(evt)=>{
        console.log("handleChange",evt.target.value)
        settext(text,evt.target.value)
    }
    const handleAdd=()=>{
        console.log(text)
        setList([...list,text])
        settext("")
    }
   const  handleDel=(index)=>{
    var newlist=[...list]
    newlist.splice(index,1)
        setList(newlist)
    }

  return (
    <div>
      <input onChange={ handleChange }  value={text}/>
      <button onClick={handleAdd}>add</button>
      <ul>
        {
            list.map((item,index)=>
               <li key={index}>{item}
               <button onClick={()=> handleDel(index)}>del</button>
               </li>
            )
        }
      </ul>
      {!list.length &&<div>暂无代办事项</div>}
    </div>
  )
}
