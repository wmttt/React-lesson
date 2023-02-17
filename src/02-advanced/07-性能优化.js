import React, { PureComponent } from 'react'  //性能优化之一:shouldComponentUpdate，之二是PureComponent

export default class App extends PureComponent {
     //减少性能损耗，提升性能优化，面试中最会问的。return TRUE 组件才更新。性能优化之一:shouldComponentUpdate，之二是PureComponent
    //  shouldComponentUpdate = (nextProps) => {
    //     if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
    //         return true
    //     }
    //     return false
    // }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
