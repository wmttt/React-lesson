import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function App() {
    const [list,setlist]=useState([])
    

    useEffect(()=>{
        axios.get("/text.json").then(res=>{
            console.log(res.data)
            setlist(res.data.data.films)
        })
    },[])
  return (
    <div>
      {
        list.map(item=>
            <li key={item.filmId}>{item.name}</li>)
      }
    </div>
  )
}
