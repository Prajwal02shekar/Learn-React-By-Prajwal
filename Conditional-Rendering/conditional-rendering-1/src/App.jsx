
// import { Fragment, useState } from 'react';
// const App = () => {
//   let [displayText, setDisplayText] = useState(false)
//   if (displayText) {
//     return (
//       <Fragment>
//         <h1>Welcome to test yanta software solutions</h1>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sunt repellendus eum rerum nesciunt sed? Eius quo aut ullam incidunt!</p>

//       </Fragment>
//     )

//   } else {
//     return (
//       <Fragment>
//         <h1>no data available</h1>
//       </Fragment>
//     )

//   }
// }

// export default App

// ----------------------------------------------------------------

// import React, { useState } from 'react'
// import Navbar from './Navbar/Navbar'

// const App = () => {

//   const[isLoggedIn,isSetLoggedIn]=useState(true)
//   return(
//     <div>
//       <Navbar data={{isLoggedIn,isSetLoggedIn}}/>
//     </div>
//   )
// }

// export default App

// ----------------------------------------------------------------


//? if and else <----> ternary operator both
// import React, { useState } from 'react'
// import Products from './products/Products';
// // import DATA from "./data.json"
// let lists = [
//   {
//     id: 1,
//     category: "t-shirt",
//     rating: {
//       rate: 4,
//       count: 2
//     },
//     description: "hello product",
//     title: "green t-shirt",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
//   }
// ]

// const App = () => {
//   let [state, setState] = useState(null)
//   return (
//     <section id="productsBlock">
//       <article className='container'>
//         <Products state={state} />
//       </article>
//     </section>
//   )
// }

// export default App

// ---------------------------------------------------------------------


//?  if else if

// import React, { useState } from 'react'

// const App = () => {
//   const [mode,setMode]=useState("b")
//   const[color,setColor]=useState("red")
//   if(mode==="a" && color==="red"){
//     return <h1 style={{color}}>Mode is A</h1>
//   }else if(mode==="b" && color==="green"){
//     return <h1 style={{color}}>Mode is B</h1>

//   }else if(mode==="c" && color==="blue"){
//     return <h1 style={{color}}>Mode is C</h1>
//   }
//   else{
//     return (

//       <h1>No Matching keyword</h1>

//     )
//   }
// }

// export default App

//?----------------------------------------------------

//? switch


// import React, { useState } from 'react'

// const App = () => {
//   const [mode, setMode] = useState("a")
//   const [color, setColor] = useState("red")
//   switch ((mode,color)) {
//     case 'a' && "red":
//       return <h1 style={{color}}>You selected A</h1>;
//     case 'b' && "green":
//       return <h1 style={{color}}>You selected B</h1>;
//     case 'c' && "purple":
//       return <h1 style={{color}}>You selected C</h1>
//     default:
//       return <h1>No mode is selected here</h1>
//   }
// }

// export default App

//? ---------------------------------------------------------------
import React, { useState } from 'react'
import Users from './auth/Users'

const App = () => {
  let [state,setState]=useState([
    {
      id:1,
      name:"manu",
      age:20,
      company:"TYSS",
      salary:30000,
      role:"user"
    },{
      id:2,
      name:"dixith",
      age:22,
      company:"QSpidsers",
      salary:40000,
      role:"admin",
    }
  ])
  
  return (
    <div>
      <Users state={state}/>
    </div>
  )
}

export default App