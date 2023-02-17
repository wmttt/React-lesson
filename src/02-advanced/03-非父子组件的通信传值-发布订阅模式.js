import React, { Component } from 'react'
import axios from 'axios'
import "../css/index.css"

//调度中心
var bus = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },
    publish(text) {
        this.list.forEach(callback => {
            callback && callback(text)
        });
    }
}

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            fileList: [],
            info: ""
        }
        axios.get(`/text.json`).then(res => {
    
            this.setState({
                fileList: res.data.data.films
            })
        })

    }

    render() {
        return (
            <div>
                {
                    this.state.fileList.map(item =>
                        <FileItem key={item.filmId} {...item}
                            onevent={(value) => { //父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值
                                console.log("父组件接收兄弟1 的消息,马上把电影传给老二。" + value)
                                this.setState({
                                    info: value
                                })
                            }}></FileItem>
                    )
                }
                <FilmDetail />
            </div>
        )
    }
}


// 子组件,受控组件 兄弟1 
class FileItem extends Component {
    render() {
        let { name, poster, synopsis } = this.props  //解构对象中的属性名字，跟定义的一模一样
        return (
            <div className="filmitem" onClick={() => {
                bus.publish(synopsis)
            }}>
                <img src={poster} alt={name} ></img>
                <h4>{name}</h4>

            </div>
        )
    }
}



//展示细节的组件 兄弟2
class FilmDetail extends Component {
    constructor() {
        super()
        this.state = {
            info: ''
        }
        bus.subscribe((info) => {
            console.log("我在filmDetail中定义", info)
            this.setState({
                info: info
            })
        })

    }

    render() {
        return (
            <div className='filmDetail'> 开始展示你的电影细节:
                {this.state.info}
            </div>
        )
    }
}
