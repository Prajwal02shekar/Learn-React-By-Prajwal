// import React from 'react'
// import Button from './components/Button';


// const App = () => {
//   return (
//     <div>
//       <button onClick={()=>alert("hello shashi")}>Click Me</button>
//       <span onClick={()=>alert("hello shashi with span tag")}>Click Me with span tag</span>
//       <Button onTest={()=>alert("hello naming event handler")}>Play Audio</Button>
//       <Button onTest={()=>alert("Hello naming handle props...")}>Play video</Button>



//     </div>
//   )
// }

// export default App

// todo-->----------Event Propagation-------------------------------------------

// import React from 'react'

// const App = () => {
//   return (
//     <div onClick={()=>console.log("container and parent of button")}>
//       <button onClick={()=>console.log("playing with child...")}> Play Movie</button>
//       <button onClick={()=>console.log("watching with child  ....")}>Watch Cricket</button>

//     </div>
//   )
// }

// export default App
// -------------------------------------------------------------------------------------------
//? bubbling phase

// import React from 'react'

// const App = () => {
//   return (
//     <section
//       className='section'
//       onClick={(e) => {
//         e.stopPropagation()
//         console.log("Grand parent has been triggered")
//       }}
//     >
//       Grand Parent
//       <div
//         className='div'
//         onClick={(e) => {
//           e.stopPropagation()
//           console.log("Parent block has been triggered")
//         }}
//       >
//         Parent
//         <button
//           className='btn'
//           onClick={(e) => {
//             e.stopPropagation()
//             console.log("Child event has been triggered")
//           }}>
//           Child
//         </button>
//       </div>



//     </section >
//   )
// }

// export default App

//? --------------------------------------------------------------------------------

//? Capturing phase   ----> only for routing purpose we are using this  
//? its oppossing to bubbling phase

import React from 'react'

const App = () => {
  return (
    <section
      className='section'
      onClickCapture={(e) => {
        e.stopPropagation()
        console.log("Grand parent has been triggered")
      }}
    >
      Grand Parent
      <div
        className='div'
        onClickCapture={(e) => {
          e.stopPropagation()
          console.log("Parent block has been triggered")
        }}
      >
        Parent
        <button
          className='btn'
          onClickCapture={(e) => {
          e.stopPropagation()
            console.log("Child event has been triggered")
          }}>
          Child
        </button>
      </div>



    </section >
  )
}

export default App
//!---------------------------------------------------------------------------
//? form events
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <form onSubmit={e=>{
//         e.preventDefault()
//         console.log("hello dom");
//       }}>
//         <input type="text" />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//!---------------------------------------------------------------------------

//? keyboard events
// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   let [state,setState]=useState("")
//   let handleKeyboarddEvent = (e) => {
//     // if(e.key==="Enter"){
//     //   console.log(`you have been pressed ${e.key}`);
//     // }else if(e.keyCode===32){
//     //   console.log(`you have been pressed ${e.keyCode}`);
//     // }
//     if (e.key === "y") {
//       console.log("you pressed y");
//       setState(e.key)
//     } else if (e.key === "n") {
//       console.log("you pressed n");
//       setState(e.key)
//     } else {
//       console.log("some other key");
//       setState(e.key)

//     }
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       {/* <input type="text" placeholder='type any key' onKeyPress={handleKeyboarddEvent} /> */}
//       {/* <input type="text" placeholder='type any key' onKeyDown={handleKeyboarddEvent} /> */}
//       <input type="text" placeholder='type any key' value={state} onKeyUp={handleKeyboarddEvent} />


//     </div>
//   )
// }

// export default App
