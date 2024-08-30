// import  { Fragment } from "react";

// import { CounterContext } from "../context/CounterContext";
// console.log(CounterContext);
// const Counter = () => {
//   return (
//       <Fragment>

//             <CounterContext.Consumer>
//                 {
//                     val=>{return(
//                         <Fragment>
//                             <h1>{val.count}</h1>
//                             <button onClick={val.Increment}>Increment</button>
//                             <button onClick={val.Decrement}>Decrement</button>
//                             <button onClick={val.Reset}>Reset</button>

//                         </Fragment>
//                     )}
//                 }
//             </CounterContext.Consumer>

//       </Fragment>

//   );
// };

// export default Counter;

//?-------------------------------------------------------

//! class based component
// import { Component } from "react";
// import { CounterContext } from "../context/CounterContext";

// export default class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <CounterContext.Consumer>
//           {(val) => {
//             return (
//               <>
//                 <h1>{val.count}</h1>
//                 <button onClick={val.Increment}>Increment</button>
//                 <button onClick={val.Decrement}>Decrement</button>
//                 <button onClick={val.Reset}>Reset</button>
//               </>
//             );
//           }}
//         </CounterContext.Consumer>
//       </div>
//     );
//   }
// }

//?-------------------------------------------------------

//! function based component
// import  { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";


// const Counter = () => {
//     let {count,Increment,Reset,Decrement}=useContext(CounterContext)
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//         <button onClick={Reset}>Reset</button>

//     </div>
//   )
// }

// export default Counter
//?-------------------------------------------------------
//! class based component

// import React, { Component } from 'react'
// import { CounterContext } from '../context/CounterContext';

// export default class Counter extends Component {
//     static contextType=CounterContext.displayName="My counter app with TYSS"
//     componentDidMount(){
//         let value=this.context;
//         console.log(value)
//     }
//   render() {
//     let value=this.context
//     return (
//       <div>
//         <h1>{value.count}</h1>
//         <button onClick={value.Increment}>Increment</button>
//         <button onClick={value.Decrement}>Decrement</button>
//         <button onClick={value.Reset}>Reset</button>
//       </div>

//     // <div>
//     //     <h1>{this.context.count}</h1>
//     //     <button onClick={this.context.Increment}>Increment</button>
//     //     <button onClick={this.context.Decrement}>Decrement</button>
//     //     <button onClick={this.context.Reset}>Reset</button>
//     //   </div>
//     )
//   }
// }
// Counter.contextType=CounterContext

//?--------------------------------------------------------
