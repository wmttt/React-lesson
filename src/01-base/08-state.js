import React, { Component } from 'react'

export default class App extends Component {
    a = 1
    // 第一种方法
    // state={
    //     mytext:"收藏",
    //     myshow:true
    // }
    // 第二种方法
    constructor() {
        super()
        this.state = {
            mytext: "收藏",
            myshow: true
        }
    }

    render() {
        return (
            <div>
                <h1>欢迎来到react开发</h1>
                <button onClick={() => { this.handClick() }}>{this.state.myshow ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }

    handClick = () => {
        this.setState({
            myshow: !this.state.myshow
        })
        if (this.state.myshow) {
            //写一些逻辑
        }
    }


}
