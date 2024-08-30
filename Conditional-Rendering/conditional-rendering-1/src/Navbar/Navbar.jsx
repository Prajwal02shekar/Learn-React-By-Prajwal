// import React, { Fragment } from 'react'

// const Navbar = (props) => {
//     console.log(props);
//     let { isLoggedIn, isSetLoggedIn } = props.data
//     let changeState=()=>{
//         isSetLoggedIn(false)
//     }
//     if(isLoggedIn===true) {
//         return (
//             <Fragment>
//                 <section id='navbar'>
//                     <article className="container">
//                         <div className="logoBlock">LOGO</div>
//                         <div className="menuBlock">
//                             <ul>
//                                 <li>
//                                     <a href="#">Home</a>
//                                 </li>
//                                 <li>
//                                     <a href="#">Service</a>
//                                 </li>
//                                 <li>
//                                     <button onClick={changeState}>Logout</button>
//                                 </li>
//                             </ul>
//                         </div>
//                     </article>
//                 </section>

//             </Fragment>
//         )
//     }
//    else {
//         return (
//             <Fragment>
//                 <section id='navbar'>
//                     <article className="container">
//                         <div className="logoBlock">LOGO</div>
//                         <div className="menuBlock">
//                             <ul>
//                                 <li>
//                                     <a href="#">Home</a>
//                                 </li>
//                                 <li>
//                                     <a href="#">Service</a>
//                                 </li>
//                                 <li>
//                                     <button onClick={()=>isSetLoggedIn(true)}>Login</button>
//                                 </li>
//                                 <li>
//                                     <a href="#">Register</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </article>
//                 </section>
//             </Fragment>
//         )
//     }

// }

// export default Navbar

// -------------------------------------------------------------------------------
// import { Fragment, useState } from 'react'

// const Navbar = ({ data: { isLoggedIn, isSetLoggedIn } }) => {
//     console.log(isLoggedIn);
//     if (!isLoggedIn) {
//         return (
//             <Fragment>
//                 <li>
                    //    <button onClick={()=>isSetLoggedIn(true)}>Login</button>
//                 </li>
//                 <li>
//                     <a href="#">Register</a>
//                 </li>
//             </Fragment>
//         )
//     }
//     return (
//         <Fragment>
//             <li>
//                 <button onClick={()=>isSetLoggedIn(false)}>Logout</button>
//             </li>
//         </Fragment>
//     )
// }
// export default Navbar
// ---------------------------------------------------------------------

//?Component Rendering 

// import React, { Fragment } from 'react'

// const Navbar = ({ data: { isLoggedIn, isSetLoggedIn } }) => {
//     const IsAuthenticated = () => {
//         return (
//             <Fragment>
//                 <li>
//                     <button onClick={() => isSetLoggedIn(false)}>Logout</button>
//                 </li>
//             </Fragment>
//         )
//     }
//     const IsanonymousUser = () => {
//         return (
//             <Fragment>
//                 <li>
//                     <a href="#">Register</a>
//                 </li>
//                 <li>
//                     <button onClick={() => isSetLoggedIn(true)}>Login</button>

//                 </li>
//             </Fragment>
//         )
//     }
//     return (
//         <section id='navbar'>
//             <article className="container">
//                 <div className="logBlock">LOGO</div>
//                 <div className="MenuBlock">
//                     <ul>
//                         <li>
//                             <a href="#">Home</a>
//                         </li>
//                         <li>
//                             <a href="#">About</a>
//                         </li>
//                         {isLoggedIn === true ? < IsAuthenticated /> : <IsanonymousUser />}
//                     </ul>
//                 </div>
//             </article>
//         </section>
//     )
// }

// export default Navbar

//? ------------------------------------------------------

