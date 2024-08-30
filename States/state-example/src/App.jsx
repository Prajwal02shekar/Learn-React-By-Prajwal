
//? with constructor

// import { Component } from 'react'

// export default class App extends Component {
//     //constructor is mounting only once to the dom
//     constructor() {
//         super()
//         // console.log(this);
//         this.state = {
//             username: "shashi"
//         }
//     }

//     // render method is rerendering
//     render() {
//         return (
//             <div>
//                 <h1>My name is {this.state.username}</h1>
//             </div>
//         )
//     }
// }


//! -----------------------------------------------------------------------------
//? without constructor

// import { Component } from 'react'

// export default class App extends Component {
//     state={
//         username:"shahsi"
//     }
//     render() {
//         return (
//             <div>My name is {this.state.username }</div>
//         )
//     }
// }

//! -----------------------------------------------------------------------------


//? how to create state object in functional based components
// import React from "react";

// const App = () => {
//     const username = React.useState("shashi")
//     return (
//         <>
//             <h1>My name is {username}</h1>

//         </>
//     )
// }

// export default App

//! -----------------------------------------------------------------------------


//? update state property using class based components
import { Component } from 'react'

export default class App extends Component {
    state = {
        username: "shashi"
    } //mutate state property..
    render() {
        return (
            <div>
                <h1>My name is {this.state.username}</h1>
                <button onClick={()=>this.setState({username:"dixith"})}>Update name</button>

            </div>
        )
    }
}

//? update state property using function based components

// import { useState } from "react"

// const App=()=>{
//     // let array=[undefined,function(){}]
//     // console.log(array[1]);
//     // console.log(useState()[1]);       //return an array with 2 values [initialValue and updaterFunction]
//     const [state,setState]=useState({
//         user:"prajwal",
//         age:25
//     })
//     return (
//         <>
//             <h1>My name is {state.user} and Iam {state.age} </h1>
//             <button onClick={()=>setState({user:"dixith",age:26})}>Update username</button>
//         </>
//     )
// }

// export default App

//! -----------------------------------------------------------------------------

//? arrays using class based components

// import { Component, Fragment } from 'react'

// export default class App extends Component {
//     // react-dom_client.js?v=148a4374:519 Warning: App.state: must be set to an object or null
//     state = {
//         language: ["java", "javascript", "expressjs", "nodejs", "react", "redux", "react-query"]
//     }

//     render() {
//         console.log(this.state);
//         return (

//             <div>
//                 {
//                     this.state.language.map((val, index) => {
//                         return (
//                             <Fragment key={index}>
//                                 <li>{val}</li>
//                             </Fragment>
//                         )

//                     })
//                 }
//             </div>
//         )
//     }
// }

//! -----------------------------------------------------------------------------

//? arrays using function based components

// import { Fragment, useState } from 'react'

// const App = () => {
//     let [language, setLanguages] = useState(["java", "javascript", "expressjs", "nodejs", "react", "redux", "react-query"]

//     )
//     return (
//         <div>
//             {
//                 language.map((val, index) => {
//                     return (
//                         <Fragment key={index}>
//                         <li>{val}</li>
//                         </Fragment>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default App

//! -----------------------------------------------------------------------------

//? print boolean values using class based components
// import { Component, useState } from 'react'

// export default class App extends Component {
//     state = {
//         isAvailable: false,

//     }
//     render() {
//         if (this.state.isAvailable === true) {
//             return (
//                 <>
//                     <h1>Yes iam available on internet</h1>
//                 </>
//             )
//         } 
//         else {
//             return (
//                 <>
//                     <h1>Yes iam not  available on internet</h1>
//                 </>
//             )
//         }
//     }
// }

//! -----------------------------------------------------------------------------

//? print boolean values using function based components

// import { useState } from "react"
// const App = () => {
//     let [isOnline, isSetOnline] = useState(false)
//     if(isOnline){
//         return(
//             <>
//             <h1>yes iam in online....</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//             <h1>iam ofline....</h1>
//             </>
//         )
//     }

// }
// export default App
//! -----------------------------------------------------------------------------

//? null using class based component

// import { Component } from 'react'

// export default class App extends Component {
//     state={
//         isNull:null
//     }
//   render() {
    
//     if(this.state.isNull===null){
//         return(
//             <>
//             <h1>Loading.....</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//             <h1> sorry not loading.....</h1>
//             </>
//         )
//     }
//   }
// }

//! -----------------------------------------------------------------------------


//? null using function based component

// import { useState } from "react"
// const App = () => {
//     let [isNull, isSetNull] = useState()
//     if(isNull===null){
//         return(
//             <>
//             <h1>loading....</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//             <h1>not loading......</h1>
//             </>
//         )
//     }

// }
// export default App

//! ------------------------------------------------------------

//? undefined using class based component

// import { Component } from 'react'

// export default class App extends Component {
//     state={
//         isUndefined:undefined
//     }
//   render() {
    
//     if(this.state.isUndefined===undefined){
//         return(
//             <>
//             <h1>Some content.....</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//             <h1>no content.....</h1>
//             </>
//         )
//     }
//   }
// }



//! -----------------------------------------------------------------------------


//? undefined using function based component

// import { useState } from "react"
// const App = () => {
//     let [isUndefined, isSetUndefined] = useState(undefined)
//     if(isUndefined===undefined){
//         return(
//             <>
//             <h1>Some content.....</h1>
//             </>
//         )
//     }else{
//         return(
//             <>
//             <h1>no content.....</h1>
//             </>
//         )
//     }

// }
// export default App

//todo --------------------------------------------------------------------------------------------
