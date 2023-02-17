import React, {  Component } from 'react'


class Child extends Component{
    render(){
        return <div>我是Navbar的孩子</div>
    }
}

class Navbar extends Component{  //写法一
    render(){
        return <div>Navbar
            <Child></Child>  
        </div>
    }
}

function Swiper(){  //写法二
    return <div>Swiper</div>
}

const Tabbar=()=>{   //写法三都可
    return <div>Tabbar</div>
}
// 也可以如此：const Tabbar=()=><div>Tabbar</div>



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
