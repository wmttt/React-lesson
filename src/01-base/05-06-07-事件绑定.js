import React, { Component } from 'react'

export default class App extends Component {
  a=100;
  myref=React.createRef()  //ref 的新型写法
  render() {
    return (
      <div>
        {/* <input ref="mytext"></input>  这种写法已经弃用了，下面这条是新型写法 */}
        <input ref={this.myref}></input>   
        <button onClick={()=>{ console.log("click") }}>add1</button>
        {/* 不推荐这种写法,bind修正this指向，否则指向了undefind */}
        <button onClick={this.handClick.bind(this)}>add2</button> 
        {/* 推荐三 */}
        <button onClick={this.handClick3}>add3</button>
        {/* 推荐4 */}
        <button onClick={()=>{this.handClick4()}}>add4</button> 
      </div>
    )
  }


  handClick(){  //不推荐这种写法
      console.log("click2");
  }
  handClick3=(evt)=>{ //推荐这种写法
    console.log("click2",evt.target);
}

// handClick3(){ //不用箭头函数不行。这样取不到ref的值
//   console.log("click2",this.myref.current.value);
// }

  handClick4=()=>{  //ref的使用，但是被弃用了，但目前还是可以用的
    console.log("click2",this.myref.current.value);
  }
}

  /**改变this的指向有三种方法：
   * call,apply。改变this，自动执行函数
   * bind 
   */

  // var obj1={
  //   name:'obj1',
  //   getName(){
  //     console.log(this.name);
  //   }
  // }
  // var obj2={
  //   name:'obj2',
  //   getName(){
  //     console.log(this.name);
  //   }
  // }
//这几种都是一样的。但是用bind不会自动执行，推荐用bind，要点完按钮才执行。
  // obj1.getName.bind(obj2)();
  // obj1.getName.apply(obj2);
  // obj1.getName.call(obj2);

