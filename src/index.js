/**
 * @author:mengting
 * 
 */
import React from "react"; //可省略，目前18版本。也可以不用单独引入这个语句。
// import ReactDOM  from "react-dom";
import ReactDOM from 'react-dom/client';

//react 规定类组件首字母大写
// import App from './01-base/01-class组件'  
// import App3 from './01-base/03-组件的嵌套'
// import App3 from './01-base/12-卖座选项卡'
import App3 from './02-advanced/06-新生命周期'

// ReactDOM.render(<App3/>,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     // 严格模式 可以去掉比如refs，其实已经被弃用了，开启这个就知道控制台报错的。
  <React.StrictMode>  
     <App3 />
  </React.StrictMode>
     );