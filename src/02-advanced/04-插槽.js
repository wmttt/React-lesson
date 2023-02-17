import React, { Component } from 'react'

class Child extends Component{
        render(){
            return(
                <div>
                    {/* 这样显示，相当于vue的slot ,还可以这样下面这种具名插槽。*/}
                    {this.props.children  } 
                    {this.props.children[0]  }  
                    
                </div>
            )
        }
}
export default class App extends Component {

//   其实这样显示出来是显示child里面的东西，直接覆盖了这个里面app里面的111 222 33.。 
  render() {
    return (
      <div>
        <Child>
            <div>111111</div> 
            <div>222</div>
            <div>33333</div>
            <div>444444</div>
        </Child>
      
      </div>
    )
  }
}
