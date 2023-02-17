import React, { Component } from 'react'
// import BetterScroll  from 'better-scroll'
import BetterScroll from 'better-scroll'

export default class App extends Component {
   state = {
        list: [],
       
    }
   
    render() {
      
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div className='wrapper' style={{height:'200px',background:'yellow',overflow:'hidden'}}>
                    <ul className='content'>
                        {
                            this.state.list.map(item=>
                                <li key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
    getData() { // REACT18+BetterScroll这个功能不能用，因为用了createRoot
       var  list =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,112,12,13,14]
        setTimeout(() => {
            this.setState({
                list: list
            },
            new BetterScroll('.wrapper')
            )
        }, 0);
   
       
    } 
}
