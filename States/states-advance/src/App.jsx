//? storing objects using class based components

// import { Component, Fragment } from 'react'
// export default class App extends Component {
//     state = {
// fname: "prajwal",
// lname: "shekar",
// company: "TYSS",
// skills: ["java", "js", "reactjs", "nodejs"],
// isHire: true
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.fname} {this.state.lname}</h1>
//                 <p>company: {this.state.company}</p>
//                 <p> {this.state.isHire === true ? <button>Hire me</button> : ""}</p>
//                 <p>
//                     My skills are:
//                     <ul>
//                         {
//                             this.state.skills.map((skill, i) => {
//                                 return (
//                                     <Fragment key={i + 1}>
//                                         <li><span>{skill}</span></li>
//                                     </Fragment>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </p>
//             </div>
//         )
//     }
// }

//? -------------------------------------------------------------------------
//? storing objects using function based components

// import React, { useState } from 'react'
// import { Fragment } from 'react'

// const App = () => {
//     const [state, setState] = useState({
//         fname: "prajwal",
//         lname: "shekar",
//         company: "TYSS",
//         skills: ["java", "js", "reactjs", "nodejs"],
//         isHire: true

//     })
//     return (
//         <div>
//             <h1>{state.fname} {state.lname}</h1>
//             <p>company: {state.company}</p>
//             <p> {state.isHire === true ? <button>Hire me</button> : ""}</p>
//             <p>
//                 My skills are:
//                 <ul>
//                     {
//                         state.skills.map((skill, i) => {
//                             return (
//                                 <Fragment key={i + 1}>
//                                     <li><span>{skill}</span></li>
//                                 </Fragment>
//                             )
//                         })
//                     }
//                 </ul>
//             </p>
//         </div>
//     )
// }

// export default App
//? ----------------------------------------------------------------------

//? array of objects using class based component


// import React, { Component, Fragment } from 'react'

// export default class App extends Component {
//     state = {
//         courses: [
//             {
//                 course_id: 1,
//                 course_name: "mernstack",
//                 duration: 4,
//                 trainer: ["prajwal", "darshan", "anish", "satyam", "sravya"],
//                 price: 40000,
//                 branch: "BTM",
//                 course_details: {
//                     frontend: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Redux-toolkit", "react-query"],
//                     backend: ["Nodejs", "Expressjs", "mangoose", "RestAPI", "graphQl"],
//                     database: ["MongoDB", "SQL", "PostgresSQL"],
//                     tools: ["git", "github", "jenkins", "linux", "AWS"]
//                 }
//             },
//             {
//                 course_id: 2,
//                 course_name: "javafullstack",
//                 duration: 5,
//                 trainer: ["prajwal", "darshan", "anish", "satyam", "pranav"],
//                 price: 50000,
//                 branch: "BTR",
//                 course_details: {
//                     frontend: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Redux-toolkit", "react-query"],
//                     backend: ["java", "spring", "spring boot", "graphQl"],
//                     database: ["MongoDB", "SQL", "PostgresSQL"],
//                     tools: ["git", "github", "jenkins", "linux", "AWS"]
//                 }
//             },
//             {
//                 course_id: 3,
//                 course_name: "pythonfullstack",
//                 duration: 4,
//                 trainer: ["shashi", "prajwal", "darshan", "anish", "satyam", "arvind"],
//                 price: 38000,
//                 branch: "Rajajinagar",
//                 course_details: {
//                     frontend: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Redux-toolkit", "react-query"],
//                     backend: ["python", "djongo", "flask", "RestAPI", "graphQl"],
//                     database: ["MongoDB", "SQL", "PostgresSQL"],
//                     tools: ["git", "github", "jenkins", "linux", "AWS"]
//                 }
//             }
//         ]
//     }
//     render() {
//         let { courses } = this.state;
//         return (
//             <section id='courseBlock'>
//                 <article>
//                     <main>
//                         <header>
//                             <h2>List of Courses</h2>
//                         </header>
//                         <aside className='container'>
//                             {
//                                 this.state.courses.map(course => {
//                                     return (
//                                         <div className='list' key={course.id}>
//                                             <h2>{course.course_name}</h2>
//                                             <p><span>Branch: </span><span>{course.branch}</span></p>
//                                             <p><span>Duration: </span><span>{course.duration + " " + "months"} </span></p>
//                                             <p><span>Price: </span><span>&#x20B9; {course.price} </span></p>
//                                             <p>
//                                                 <span>Trainers: </span>
//                                                 <div className='trainer'>
//                                                     {
//                                                         course.trainer.map((trainer, index) => {
//                                                             return (
//                                                                 <Fragment key={index + 1}>
//                                                                     <p>{trainer}</p>
//                                                                 </Fragment>

//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </p>
//                                             <span className='heading'>Frontend Technologies :</span>
//                                             <div className='technologies'>
//                                                 {
//                                                     course.course_details.frontend.map((front, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{front}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Backend Technologies :</span>
//                                             <div className='technologies'>

//                                                 {
//                                                     course.course_details.backend.map((back, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{back}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Database Technologies :</span>

//                                             <div className='technologies '>
//                                                 {
//                                                     course.course_details.database.map((data, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{data}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Tools :</span>

//                                             <div className='technologies'>
//                                                 {
//                                                     course.course_details.tools.map((tool, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{tool}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <div className="btn-group">
//                                                 <button>Apply</button>
//                                             </div>
//                                         </div>

//                                     )
//                                 })
//                             }
//                         </aside>
//                     </main>
//                 </article>
//             </section>
//         )
//     }
// }



//? ----------------------------------------------------------------------

//? array of objects using function based component

// import React, {  Fragment, useState } from 'react'

// const App= ()=>{
//     const [state,setState] = useState({
//         courses: [
//             {
//                 course_id: 1,
//                 course_name: "mernstack",
//                 duration: 4,
//                 trainer: ["prajwal", "darshan", "anish", "satyam", "sravya"],
//                 price: 40000,
//                 branch: "BTM",
//                 course_details: {
//                     frontend: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Redux-toolkit", "react-query"],
//                     backend: ["Nodejs", "Expressjs", "mangoose", "RestAPI", "graphQl"],
//                     database: ["MongoDB", "SQL", "PostgresSQL"],
//                     tools: ["git", "github", "jenkins", "linux", "AWS"]
//                 }
//             },
//             {
//                 course_id: 2,
//                 course_name: "javafullstack",
//                 duration: 5,
//                 trainer: ["prajwal", "darshan", "anish", "satyam", "pranav"],
//                 price: 50000,
//                 branch: "BTR",
//                 course_details: {
//                     frontend: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Redux-toolkit", "react-query"],
//                     backend: ["java", "spring", "spring boot", "graphQl"],
//                     database: ["MongoDB", "SQL", "PostgresSQL"],
//                     tools: ["git", "github", "jenkins", "linux", "AWS"]
//                 }
//             },
//             {
//                 course_id: 3,
//                 course_name: "pythonfullstack",
//                 duration: 4,
//                 trainer: ["shashi", "prajwal", "darshan", "anish", "satyam", "arvind"],
//                 price: 38000,
//                 branch: "Rajajinagar",
//                 course_details: {
//                     frontend: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Redux-toolkit", "react-query"],
//                     backend: ["python", "djongo", "flask", "RestAPI", "graphQl"],
//                     database: ["MongoDB", "SQL", "PostgresSQL"],
//                     tools: ["git", "github", "jenkins", "linux", "AWS"]
//                 },
//             },
//         ],
//     });

//         let { courses } = state;
//         return (
//             <section id='courseBlock'>
//                 <article>
//                     <main>
//                         <header>
//                             <h2>List of Courses</h2>
//                         </header>
//                         <aside className='container'>
//                             {
//                                 state.courses.map(course => {
//                                     return (
//                                         <div className='list' key={course.id}>
//                                             <h2>{course.course_name}</h2>
//                                             <p><span>Branch: </span><span>{course.branch}</span></p>
//                                             <p><span>Duration: </span><span>{course.duration + " " + "months"} </span></p>
//                                             <p><span>Price: </span><span>&#x20B9; {course.price} </span></p>
//                                             <p>
//                                                 <span>Trainers: </span>
//                                                 <div className='trainer'>
//                                                     {
//                                                         course.trainer.map((trainer, index) => {
//                                                             return (
//                                                                 <Fragment key={index + 1}>
//                                                                     <p>{trainer}</p>
//                                                                 </Fragment>

//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </p>
//                                             <span className='heading'>Frontend Technologies :</span>
//                                             <div className='technologies'>
//                                                 {
//                                                     course.course_details.frontend.map((front, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{front}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Backend Technologies :</span>
//                                             <div className='technologies'>

//                                                 {
//                                                     course.course_details.backend.map((back, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{back}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Database Technologies :</span>

//                                             <div className='technologies '>
//                                                 {
//                                                     course.course_details.database.map((data, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{data}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Tools :</span>

//                                             <div className='technologies'>
//                                                 {
//                                                     course.course_details.tools.map((tool, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{tool}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <div className="btn-group">
//                                                 <button>Apply</button>
//                                             </div>
//                                         </div>

//                                     )
//                                 })
//                             }
//                         </aside>
//                     </main>
//                 </article>
//             </section>
//         )
//     }
// export default App

//? ----------------------------------------------------------------------

//? use JSON as a state value using function based components 

// import React, { Fragment, useState } from 'react'
// import JSON from "./data.json"

// const App= ()=>{
//     let [state,setState]=useState({
//         courses:JSON
//     })
//         return (
//             <section id='courseBlock'>
//                 <article>
//                     <main>
//                         <header>
//                             <h2>List of Courses</h2>
//                         </header>
//                         <aside className='container'>
//                             {
//                                 state.courses.map(course => {
//                                     return (
//                                         <div className='list' key={course.id}>
//                                             <h2>{course.course_name}</h2>
//                                             <p><span>Branch: </span><span>{course.branch}</span></p>
//                                             <p><span>Duration: </span><span>{course.duration + " " + "months"} </span></p>
//                                             <p><span>Price: </span><span>&#x20B9; {course.price} </span></p>
//                                             <p>
//                                                 <span>Trainers: </span>
//                                                 <div className='trainer'>
//                                                     {
//                                                         course.trainer.map((trainer, index) => {
//                                                             return (
//                                                                 <Fragment key={index + 1}>
//                                                                     <p>{trainer}</p>
//                                                                 </Fragment>

//                                                             )
//                                                         })
//                                                     }
//                                                 </div>
//                                             </p>
//                                             <span className='heading'>Frontend Technologies :</span>
//                                             <div className='technologies'>
//                                                 {
//                                                     course.course_details.frontend.map((front, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{front}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Backend Technologies :</span>
//                                             <div className='technologies'>

//                                                 {
//                                                     course.course_details.backend.map((back, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{back}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Database Technologies :</span>

//                                             <div className='technologies '>
//                                                 {
//                                                     course.course_details.database.map((data, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{data}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <span className='heading'>Tools :</span>

//                                             <div className='technologies'>
//                                                 {
//                                                     course.course_details.tools.map((tool, i) => {
//                                                         return (
//                                                             <Fragment key={i + 1}>
//                                                                 <span className='hover'>{tool}</span>
//                                                             </Fragment>

//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                             <div className="btn-group">
//                                                 <button>Apply</button>
//                                             </div>
//                                         </div>

//                                     )
//                                 })
//                             }
//                         </aside>
//                     </main>
//                 </article>
//             </section>
//         )
//     }
// export default App

//? ----------------------------------------------------------------------

//? update state object using class based component

// import React, { Component } from 'react'
// import { useState } from 'react';

// export default class App extends Component {
//     state = {
//         count: 0,
//         loading:false,
//         name:"shashi"
//     }
//     Increment = () => {
//         this.setState({count:this.state.count+1,loading:true,name:"manu"})
//     }
//     Decrement=()=>{
//         this.setState({count:this.state.count-1,loading:true,name:"dixith"})

//     }
//     Reset=()=>{
//         this.setState({count:0,loading:true ,name:"vinay"})

//     }
//     render() {
//         return (
//             <div>
//                 <p>Increment / Decrement by <strong>{this.state.name}</strong></p>
//                 <h1>{this.state.count}</h1>
//                 <div className="btn-group">
//                     <button onClick={this.Increment}>Increment</button>
//                     <button onClick={this.Decrement}>Decrement</button>
//                     <button onClick={this.Reset}>Reset</button>
//                 </div>
//             </div>
//         )
//     }
// }

//? ----------------------------------------------------------------------

//? update state object using function based component

// import { useState } from 'react';

// const App =()=>  {
//     const [state,setState] =useState( {
//         count: 0,
//         loading:false,
//         name:"shashi"
//     })
//     let Increment = () => {
//         setState({count:state.count+1,loading:true,name:"manu"})
//     }
//     let Decrement=()=>{
//         setState({count:state.count-1,loading:true,name:"dixith"})

//     }
//     let Reset=()=>{
//         setState({count:0,loading:true ,name:"vinay"})

//     }
//         return (
//             <div>
//                 <p>Increment / Decrement by <strong>{state.name}</strong></p>
//                 <h1>{state.count}</h1>
//                 <div className="btn-group">
//                     <button onClick={Increment}>Increment</button>
//                     <button onClick={Decrement}>Decrement</button>
//                     <button onClick={Reset}>Reset</button>
//                 </div>
//             </div>
//         )
// }
// export default App

//? ----------------------------------------------------------------------

//? update the state objects

// import { useState } from 'react';

// const App = () => {
//     const [state, setState] = useState({
//         fname: "shashi",
//         lname: "kumar",
//         company: "TYSS",
//         salary: 350000
//     })
//     let Update = () => {
//         setState({ fname: "prajwal", lname: "shekar" ,company:"QSpiders",salary:400000})
//     }
//     let Reset = () => {
//         setState({
//             fname: "shashi",
//             lname: "kumar",
//             company: "TYSS",
//             salary: 350000
//         })

//     }
//     return (
//         <div>
//             <h1>My name is {state.fname} {state.lname}</h1>
//             <p>Iam working for {state.company} and Iam getting 	&#8377;{state.salary}/- per annuam</p>
//             <div className="btn-group">
//                 <button onClick={Update}>Update Name</button>
//                 <button onClick={Reset}>Reset All</button>
//             </div>
//         </div>
//     )
// }
// export default App

//? ----------------------------------------------------------------------

//?

// import React, { useState } from 'react'

// const App = () => {
//     let [cart,setCart]=useState(0)
//     let addToCart=()=>{
//         setCart(preVal=>preVal+100)
//         setCart(preVal=>preVal+100)
//         setCart(preVal=>preVal+100)

//     }
//   return (
//     <div>
//         <h1> Cart: {cart}</h1>
//         <button onClick={addToCart}>Add to Cart</button>
//     </div>
//   )
// }

// export default App