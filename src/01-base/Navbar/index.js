import React, { Component } from 'react'
import kerwinProTypes from 'prop-types'


export default class Navbar extends Component {
  state={
    //这个state是内部自己用的，不能作为组件间的传值或接收
  }

  
  render() {

    /**
     * 类组件接收父组件传来的值
     */
    let {title,leftShow}=this.props

    return (
      <div>
        {leftShow && <button>返回</button>}
        navbar-{title}
      </div>
    )
  }
}
//类属性
Navbar.propTypes={
  title:kerwinProTypes.string,//验证是不是字符串的方法
  leftShow:kerwinProTypes.bool//验证是不是布尔的方法
}
// 默认属性：传过来的参数会覆盖默认的。 所以这个被覆盖了
Navbar.defaultProps={
  leftShow:true
}