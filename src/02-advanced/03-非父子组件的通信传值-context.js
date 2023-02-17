
import React, { Component } from 'react'
import axios from 'axios'
import "../css/index.css"


const globalContext = React.createContext()// 创建上下文context对象

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            fileList: [],
            info: ''
        }
        axios.get(`/text.json`).then(res => {
            console.log(res.data.data.films)
            this.setState({
                fileList: res.data.data.films
            })
        })

    }

    render() {
        return (
            <globalContext.Provider value={{
                call: "打电话",
                sms: "短信",
                info: this.state.info,
                changeInfo: (value) => {
                    this.setState({
                        info: value
                    })
                }
            }}>
                <div>
                    {
                        this.state.fileList.map(item =>
                            <FileItem key={item.filmId} {...item}  ></FileItem>
                        )
                    }
                    <FilmDetail />
                </div>
            </globalContext.Provider>
        )
    }
}


// 子组件,消费者的模式
class FileItem extends Component {
    render() {
        let { name, poster, synopsis } = this.props  //解构对象中的属性名字，跟定义的一模一样
        return (
            <globalContext.Consumer>
                {
                    (value) =>
                        <div className="filmitem" onClick={() => { //先告诉父组件点了这个电影。
                            value.changeInfo(synopsis)
                        }}>
                            <img src={poster} alt={name} ></img>
                            <h4>{name}</h4>

                        </div>
                }
            </globalContext.Consumer>

        )
    }
}

//展示细节的组件 兄弟2
class FilmDetail extends Component {
    render() {
        return (
            <globalContext.Consumer>
                {
                    (value) =>
                        <div className='filmDetail'> 开始展示你的电影细节 :<br />{value.info}</div>
                }

            </globalContext.Consumer>

        )
    }
}
