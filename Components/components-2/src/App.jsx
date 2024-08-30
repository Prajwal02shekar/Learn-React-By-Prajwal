
//? Class based component
// import { Component } from "react";
// class App extends Component {
//     render() {
//         return(
//             <>
//             <h1>Iam a class based component</h1>
//             </>
//         )

//     }
// }
// export default App


//? Functional Based component

// const App=()=>{
//     return(
//         <>
//             <h1>Iam a function based compoent</h1>        
//         </>
//     )
// }
// export default App
// ==================================================================

// import React, { Component } from "react";
// class App extends Component {
//     constructor() {
//         super()
//         // constructor is the best way for initializing the state object and binding this keyword adding event
//         //handler ....many more
//         // it renders only once in to the dom
//         console.log(this);
//         // this.state="praju"  //state can accept null pr object data type...
//         this.state = {
//             name: "praju",
//             company: "qspiders",
//             salary: 100000,
//             city: "mandya"
//         }
//     }
//     render() {
//         return (
//             <>
//                 <h1>My name is {this.state.name} and iam woring in {this.state.company} and salary is {this.state.salary} Iam from {this.state.city}</h1>
//             </>
//         )
//     }
// }
// export default App

// ====================================================================



//? example for state full component
// import React, { Component } from "react";
// class App extends Component {

//     constructor() {
//         super()
//         this.state = {
//             username: "shasi",
//             company: "TYSS"
//         }
//     }
//     render() {
//         return (
//             <>
//                 <h1>My name is {this.state.username} and Iam working for {this.state.company}</h1>
//                 <button onClick={() => this.setState({ username: "manu", company: "QSpiders" })}>Update Name</button>
//             </>
//         )
//     }
// }
// export default App
// ==========================================================================================================

//? functional component
// import React from "react";

// const App = () => {   
//     const [username, setUsername] = React.useState({
//         name: "shashi"
//     })
//     return (
//         <>
//             <h1>Iam stateless component..... {username.name}</h1>
//             <button onClick={() => (setUsername({ name:"praju" }))}>Change my name</button>
//         </>
//     )
// }

// export default App

//!====================================================
// Practice

//? class based component
// import { Component } from 'react'
// class App extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Hello iam class based component</h1>
//             </>
//         )
//     }
// }
// export default App

//? function based component

// import { Component } from "react";

// const App=()=>{
//     return(
//         <>
//             <h1>Hello iam function based component</h1>        
//         </>
//     )
// }

// export default App

//? class based component using states
// import { Component } from 'react';

// class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             username:"Prajwal",
//             age:23,
//             city:"bangalore",
//         }
//     }
//     render(){
//         return(
//                 <>
//                     <h1>My name is {this.state.username} and iam {this.state.age} years old and i came from {this.state.city}</h1>
//                 </>

//         )
//     }
// }
// export default App

//? function based component using states---hooks
// import React from "react"
// const App = () => {
//     const [state,setState] = React.useState({
//         username: "prajwal",
//         age: 25,
//         city: "bangalore"
//     })
//     console.log(setState);
//     return (
//         <>
//             <h1>My name is {state.username} and iam {state.age} years old and i came from {state.city}</h1>

//         </>
//     )
// }
// export default App


//? classed based component

// import { Component } from "react"
// class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             username:"Prajwal",
//             age:23,
//             city:"bangalore",
//         }
//     }
//     render(){
//         return(
//                 <>
//                     <h1>My name is {this.state.username} and iam {this.state.age} years old and i came from {this.state.city}</h1>
//                     <button onClick={()=>this.setState({username:"Darshan",age:23,city:"mysore"})}>Update the changes</button>
//                 </>

//         )
//     }
// }
// export default App

//? function based component
import React from "react"
const App = () => {
    const [state, setState] = React.useState({
        username: "prajwal",
        age: 25,
        city: "bangalore"
    })
    console.log(setState);
    return (
        <>
            <h1>My name is {state.username} and iam {state.age} years old and i came from {state.city}</h1>
            <button onClick={() => setState({ username: "Darshan", age: 23, city: "mysore" })}>Update the changes</button>


        </>
    )
}
export default App
