import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

// class App extends Component {

//   add1 = ()=>{
//     this.props.onAdd1()
//   }

//   add2 = ()=>{
//     this.props.onAdd2()
//   }

//   add3 = ()=>{
//     this.props.onAdd3()
//   }

//   add4(){
//     this.props.onAdd4()
//   }


//   render() {
//     return (
//       <div className="App">
//         你点击了<span id="value">{this.props.value}</span>次
//         <div>
//           <button id="add1" onClick = {this.add1}>+1</button>
//           <button id="add2" onClick = {this.add2}>+2</button>
//           <button id="addIfOdd" onClick = {this.add3}>如果是单数就+1</button>
//           <button id="addAfterTwoSec" onClick = {()=>this.add4()}>两秒钟后+1</button>
//         </div>
//       </div>
//     );
//   }
// }

//export default App;

class App extends Component {

  render(){
    return (<div>
      你点击了<span id="value">{this.props.n}</span>次
        <div>
           <button id="add1" onClick = {this.props.add1}>+1</button>
           <button id="add2" onClick = {this.props.add2}>+2</button>
           <button id="addIfOdd" onClick = {this.props.add3}>如果是单数就+1</button>
           <button id="addAfterTwoSec" onClick = {this.props.add4}>两秒钟后+1</button>
         </div>
    </div>)
  }
}

//map state to props ,用于获取部分store,即将state里面的内容传给组件的props
function x(state){
  return {
    n:state.n
  }
}

// map Dispatch To Props,用于生成action,是一个对象
// const y= {
//     add1: ()=>{
//       return {type:'add',payload:1}
//     },
//     add2: ()=>{
//       return {type:'add',payload:2}
//     },
//     add3: (content)=>{
//       if(content % 2 === 1){
//         return {type:'add',payload:1}
//       }
//     },
//     add4: ()=>{
//       //setTimeout(()=>{return {type:'add',payload:1}},2000)
//     }
// }

//将mapDispatch写成函数
function y(dispatch){
  return {
    add1: ()=>{
      dispatch({type:'add',payload:1}) 
    },
    add2: ()=>{
      dispatch({type:'add',payload:2}) 
    },
    add3: ()=>{
      
    },
    add4: ()=>{
      
    }
  }
}




export default connect(x,y)(App)


