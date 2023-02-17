import React, { Component } from 'react'
import axios from 'axios'
import cinema from '../模拟数据'
import '../css/index.css'

export default class Cinema extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cinemaList:[]
      }

      axios({
        url:'https://m.maizuo.com/gateway?cityId=310100&k=2229520',
        //如果不加header的内容，那就会出现跨域问题。这是这个接口的后端决定的。
        headers:{
            'X-Client-Info': {"a":"3000","ch":"1002","v":"5.2.1","e":"167601852089786291322881","bc":"310100"},
            'X-Host': 'mall.cfg.film-float.banner'
        }
      }).then(res=>{
      //   console.log(res.data)
      //   this.setState({
      //     cinemaList:res.data.data,
     //      bakcinemaList:res.data.data
      //  }) 现在是axios不能访问，所以我用模拟数据来
 
      })
      this.state={
            cinemaList:cinema,
            bakcinemaList:cinema //备份一下数组，专用于过滤。
          }
    }
    
  render() {
    return (
      <div className='cinemaC'>
        <input onInput={this.handInput} placeholder="search.."></input>
        <dl>
          {
            this.state.cinemaList.map(item=>
            <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
            </dl>)
          }
        </dl>
      </div>
    )
  }

handInput=(event)=>{
  console.log("input",event.target.value)
  var newList= this.state.bakcinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())||item.address.toUpperCase().includes(event.target.value.toUpperCase()))
  console.log(newList)

  this.setState({
    cinemaList:newList
  })
    
  
}

/**
 * filter
 */



}
