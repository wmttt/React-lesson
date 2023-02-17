import React, { Component } from 'react'

export default class TabBar extends Component {

    // 无状态组件了 不需要状态是，都是靠父传来的。
    // state={
       
    //     
    // }

  render() {
    return (
      <div>
        
        <ul>
            {
            this.props.list.map((item,index)=>
            <li key={ item.id} 
            className={this.props.current===index?'active':''} 
             onClick={()=>this.handClick(index)}> {item.text}</li>
            )
            }
        </ul>
      </div>
    )
  }


  handClick(index){
    // this.setState({
    //     current:index
    // })
    // 通知父组件去改变下应该显示的页面
    this.props.myevent(index);
  }
}


// 如果是函数组件的话，就是这样：
//  const TabBar=(props)=>{

    // return(
    //     <div>跟上面一样</div>
    // )
    
//     function handClick(index){
//         props.myevent(index)
//     }
// }
// export default TabBar
