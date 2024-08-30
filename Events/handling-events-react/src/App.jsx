// import React from 'react'

// const App = () => {
//   const handleEventsInReact=()=>{
//     alert("Hello React Events")
//   }
//   return (
//     <div>
//       <h1>Hello All</h1>
//       <button onClick={handleEventsInReact}>Click here</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   let handleSubmit=(e)=>{
//     e.preventDefault()        //-----> you must call preventDefault explicitly to prevent browser default...
//     console.log("hello react");
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='enter some text' id='inout' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//? -----------------------------------------------------

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0

//     }
//     this.Increment = this.Increment.bind(this)


//   }
//   Increment(){
//     this.setState({ count: this.state.count + 1 })
//   }
//   Decrement=()=> {
//     this.setState({ count: this.state.count - 1 })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>Increment with constructor</button>
//         <br />
//         <br />
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Increment with inline arrow function</button>
//         <br />
//         <br />
//         <button onClick={this.Increment.bind()}>Increment with inline bind</button>
//         <br /> <br />
//         <button onClick={this.Decrement}>Decrement with arrow function </button>


//       </div>
//     )
//   }
// }

//? ------------------------------------------------------------------------------

// import React from 'react'

// const App = () => {
//   let customEvent=()=>{
//     let yantra=new Event("click") 
//     let body=document.body
//     console.log(body);
//     body.addEventListener("click",e=>{
//       e.target.style.background="brown"
//       console.log(e.target);
//     })
//     body.dispatchEvent(yantra)
//   }
//   return (
//     <div>
//       <h1>customEvent in react</h1>

//       <button onClick={customEvent}>Trigger Custom Event</button>
//     </div>
//   )
// }

// export default App

//? ------------------------------------------------------------------------

// import { useState } from 'react'

// const App = () => {
//   let [isShow, isSetShow] = useState(false)

//   return (
//     <div>
//       <button onMouseEnter={() => isSetShow(true)} onMouseLeave={() => isSetShow(false)}>Hover on me will get something....</button>
//       {isShow && <div>It will show...</div>}

//     </div>
//   )
// }

// export default App
//? ------------------------------------------------------------------------

// import React from 'react'

// const App = () => {
//   let ChangeBgColor=(e)=>{
//     console.log(e);
//     e.target.style.background="purple";
//     e.target.style.color="white";
//     e.target.style.width="700px";
//     e.target.style.padding="10px";
//     e.target.children[0].innerHTML="QSP"
//   }
//   return (
//     <div>
//       <button onMouseOver={ChangeBgColor}>Hover Me</button>
//     </div>
//   )
// }

// export default App

//? ------------------------------------------------------------------------
// import React from 'react'

// const App = () => {
//   let show=()=>{
//     console.log("Iam a show");
//   }
//   let showOnemoreTime=()=>{
//     console.log("one more time show");
//   }
//   let showTYlogo=()=>{
//     console.log("LOGO");
//   }

//   let showMenu=()=>{
//     console.log("menu");
//   }
//   return (
//     <div>
//       <button onClick={(()=>{show(),showOnemoreTime(),showTYlogo(),showMenu()})}>Multiple Click</button>
//     </div>
//   )
// }

// export default App

//? ------------------------------------------------------------------------



