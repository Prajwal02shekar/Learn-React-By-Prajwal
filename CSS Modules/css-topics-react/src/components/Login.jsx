// import Style from './login.module.css'
// import colors from './login.module.css'
// console.log(colors)

// import * as cssMod from './login.module.css'
// console.dir(cssMod,"LOGIN")

const Login = () => {
  return (
    <div id={cssMod.auth}>
      <h1>Login</h1>
      <form style={{background:cssMod.green}}>
        <div>
          <label htmlFor='email' id={cssMod.label}>Email</label>
          <input type="text" placeholder='Enter email' id={cssMod.input} />
        </div>
        <div>
          <label htmlFor='password' id={cssMod.label}>Password</label>
          <input type="password" placeholder='Enter Password' id={cssMod.input} />
        </div>
      </form>
    </div>
  )
}

export default Login;
// ------------------------------------------------------
// const Login = () => {
//     return (
//       <div id={cssMod.auth}>
//         <h1>Login</h1>
//         <form style={{background:cssMod.green}}>
//           <div>
//             <label htmlFor='email' >Email</label>
//             <input type="text" placeholder='Enter email'  />
//           </div>
//           <div>
//             <label htmlFor='password' >Password</label>
//             <input type="password" placeholder='Enter Password'/>
//           </div>
//         </form>
//       </div>
//     )
//   }

//   export default Login;