//? uncontrolled component  example

//react ref
//for the elements have to add ref attributes

import { useRef } from 'react'

const App = () => {
  let emailRef=useRef("")
  let passwordRef=useRef("")
let handleSubmit=(e)=>{
  e.preventDefault();
  let email=emailRef.current.value;
  let password=passwordRef.current.value;
  console.log({email,password});
}
  return (
    <div>
      <section id="form">
        <article>
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='email' id='email'  ref={emailRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='password' id='password' ref={passwordRef} />
            </div>
            <div className="form-group">
              <button onClick={handleSubmit}>Login</button>
            </div>
          </form>
        </article>
      </section>
    </div>
  )
}

export default App

//!---------------------------------------------------------------------------
//? Controlled component
// initialize state object     ---> react recomend this way
//add value attribute to the input or form elements
// state mutation or state update add onChange event to the elements

// import React, { useState } from 'react'

// const App = () => {
//   let [email,setEmail]=useState("")
//   let [password,setPasword]=useState("")
//   let handleSubmit=e=>{
//     e.preventDefault();
//     console.log({email,password});

//   }
//   return (
//     <div>
//       <h2>Login</h2>
//       <form  onSubmit={handleSubmit}>
//         <input type="email" placeholder='enter email'  value={email} onChange={(e)=>{setEmail(e.target.value);}} />
//         <input type="password" placeholder='enter password' value={password} onChange={(e)=>{setPasword(e.target.value);}}  />
//         <button>Login</button>
//       </form>
//     </div>
//   )
// }

// export default App

//!---------------------------------------------------------------------------


//? uncontrolled component
//? add ref to the element

// import React, { Component, createRef } from 'react'

// export default class App extends Component {
//    emailRef=createRef("");
//    passwordRef=createRef("")

//    handleSubmit=e=>{
//     e.preventDefault();
//     let email=this.emailRef.current.value
//     let password=this.passwordRef.current.value
//     console.log({email,password});
//    }

//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <form>
//           <div className="form-group">
//             <label htmlFor='email'>Email</label>
//             <input type="text" placeholder='email'  id='email' ref={this.emailRef} />
//           </div>
//           <div className="form-group">
//             <label htmlFor='password'>Password</label>
//             <input type="text" placeholder='password'  id='password' ref={this.passwordRef} />
//           </div>
//           <div className="form-group">
//             <button onClick={this.handleSubmit}>Login</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

//!------------------------------------------------------------------

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       email:"",
//       password:"",
//       loading:false,
//     }
//   }
//   handleChange=e=>{

//     this.setState({[e.target.value]:e.target.value})
//     console.log(e);
//   }
//   handleSubmit=e=>{
//     e.preventDefault()
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor='email'>Email</label>
//             {/* <input type="text" placeholder='email' name='email' value={this.state.email}  id='email' onChange={e=>this.setState({email:e.target.value})}  /> */}
//             <input type="text" placeholder='email' name='email' value={this.state.email}  id='email' onChange={this.handleChange}  />

//           </div>
//           <div className="form-group">
//             <label htmlFor='password'>Password</label>
//             {/* <input type="text" placeholder='password' name='password' value={this.state.password} id='password' onChange={e=>this.setState({password:e.target.value})} /> */}
//             <input type="text" placeholder='password' name='password' value={this.state.password} id='password' onChange={this.handleChange} />

//           </div>
//           <div className="form-group">
//             <button >{this.state.loading===true?"loading":"login"}</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

//! -------------------------------------------------------------------------------

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       email:"",
//       password:"",
//       loading:false,
//     }
//   }
//   handleChange=e=>{
//     let {name,value}=e.target
//     // console.log(name);
//     // console.log(value);
//     this.setState({[name]:value})
//     console.log(value);

//     // console.log(e);
//   }
//   handleSubmit=e=>{
//     e.preventDefault()
//     console.log(this.state);
//   }

//   render() {
//     // let company="company";
//     // let name="name";

//     // let details={
//     //   company:"TYSS",
//     //   name:"Shashi"
//     // }
//     // console.log(details);

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor='email'>Email</label>
//             <input type="text" placeholder='email' name='email' value={this.state.email}  id='email' onChange={this.handleChange}  />

//           </div>
//           <div className="form-group">
//             <label htmlFor='password'>Password</label>
//             <input type="text" placeholder='password' name='password' value={this.state.password} id='password' onChange={this.handleChange} />

//           </div>
//           <div className="form-group">
//             <button >{this.state.loading===true?"loading":"login"}</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

//! -------------------------------------------------------------------------------

// import { useState } from 'react'

// const App = () => {
//   let [state, setState] = useState({
//     email: "",
//     passwoed: "",
//     loading: false
//   })
//   let handleChange = e => {
//     let { name, value } =e.target
//      setState({ ...state,[name]: value })
//   }
//   let handleSubmit=e=>{
//     e.preventDefault()
//     console.log({name,password});
//   }

//   let { email, password, loading } = state
//   // let x={name:"shashi"};
//   // let y={company:"testyantra"}

//   let mergeTheseValue= Object.assign(x,y)
//   console.log(mergeTheseValue);

//   let mergeWithSpread={...x,...y}
//   console.log(mergeWithSpread);
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">email</label>
//           <input type="email" value={email} name="email" placeholder='email' id='email' onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="">password</label>
//           <input type="password" value={password} name='password' placeholder='password' id='pasword' onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <button>{loading ? "loading" : "submit"}</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default App
