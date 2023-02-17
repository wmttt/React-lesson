import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: [
            { id: 1, text: "111" }, 
            { id: 2, text: "222" }, 
            { id: 3, text: "3333" }]
    }

    render() {
        // 为了列表的重排和复用，设置key,对比虚拟DOM的时候，就可以提高性能，设置唯一不重复的标识符
        var nnlist = this.state.list.map((item, index) => <li key={item.id}>{item.text}</li>) //第二种方法
        return (
            <div>
                {/* 第一种方法、 */}
                <ul>
                    {this.state.list.map((item, index) => <li key={item.id}>{item.text}</li>)}
                    {nnlist}     {/* 第二种方法 */}
                </ul>

            </div>
        )
    }
}
/*原生js map循环 代码 */
// var list = ['aa', 'bb', 'cc']
// var newlist = list.map(item => `<li>${item}</li>`)
// console.log(newlist.join(""))
