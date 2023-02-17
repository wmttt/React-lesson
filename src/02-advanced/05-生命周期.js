import React, { Component } from 'react'


class Box extends Component {

    //scu的指令，性能优化函数
    componentWillMount() {
        console.log("willMount")
    }
    componentDidMount() {
        window.onresize = () => {
            console.log("resize")
        }
    }
    // componentWillUnmount() {
    //     console.log("销毁")
    //     window.onresize = null;
    // }

    //减少性能损耗，提升性能优化，面试中最会问的。return TRUE 组件才更新。性能优化之一，之二是PureComponent
    shouldComponentUpdate = (nextProps) => {
        if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
            return true
        }
        return false
    }



    render() {
        return <div style={{ width: "100px", height: "100px", border: this.props.current === this.props.index ? "3px solid red" : "1px solid gray", margin: "10px" }}> </div>
    }
}





export default class App extends Component {

    state = {
        list: ["00", "01", "02", "03", "04"],
        current: 2,
    }



    render() {
        console.log("render来了")
        return (
            <div>
                <input type="number" onChange={(evt) => {
                    this.setState({
                        // current: Number(evt.target.value)
                    })
                }}></input>
                {
                    this.state.list.map((item, index) =>
                        <Box key={item} current={this.state.current} index={index}></Box>
                    )
                }
            </div>
        )
    }
}
