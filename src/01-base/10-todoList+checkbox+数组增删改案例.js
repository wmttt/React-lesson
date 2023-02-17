import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef()
    state = {
        list: [
            { id: 0, text: "111",ischecked:false },
            { id: 1, text: "222" ,ischecked:true},
            { id: 2, text: "3333",ischecked:false }],
           
    }


    render() {
        var  aHtml=<div>暂无待办事项</div>
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={() => this.handclick()}>增加数据</button>
                <ul>
                    {
                        this.state.list.map((item, index) => <li key={item.id}>
                            {/* 受控的案例 */}
                                <input type="checkbox" checked={item.ischecked} onChange={()=>this.handChanged(index)}></input>
                            {/* {item.text} 正常文本普通 */  }
                            {/* dangerouslySetInnerHTML-富文本标签，可以识别html标签 */}
                            <span dangerouslySetInnerHTML={
                                {__html:item.text}
                            }  style={{textDecoration:item.ischecked?'line-through':''}}></span>
                            
                            <button onClick={() => this.delClick(index)}>删除</button>
                            {/* <button onClick={this.delClick.bind(this,item.id)}></button> 第二种方法*/}
                        </li>)

                    }
                </ul>
                {/* {this.state.list.length===0 ? aHtml :null}  第一,第三种方法 相当于v-if*/}
                {/* <div className={this.state.list.length===0?'':''}>暂无待办事项</div> 第二种方法 相当于v-show */}
                {this.state.list.length===0 && aHtml }
            </div>
        )
    }
    //不要直接修改状态，会造成不可逾期的问题!!
    // input 的CheckBox的改变
    handChanged=(index)=>{
       let newList=[...this.state.list]
       newList[index].ischecked=!newList[index].ischecked
       this.setState({
        list:newList
       })
    }
     //数组的增加
    handclick = () => {
        let bList = [...this.state.list] //相当于把数组再进行重组成一个新的列表
        bList.push({          
            id: Math.random() * 1000,
            text: this.myref.current.value,
            ischecked:false
        })
        this.setState({
            list: bList
        })

    }
     //数组的删除
    delClick = (index) => {
        let bList = this.state.list.concat()
        bList.splice(index, 1) // 下标，删除一个
        //每次要setState页面更新
        this.setState({
            list: bList
        })
    }

}
