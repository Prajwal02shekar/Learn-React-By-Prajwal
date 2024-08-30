// //? Immediate Invoke Function Expression
// import { useState } from 'react';
// import Notification from './messages/Notification';

// const App = () => {
//   let [state, setState] = useState([
//     {
//       text: "Info text",
//       status: "info"
//     },
//     {
//       text: "Warning text",
//       status: "warning"
//     },
//     {
//       text: "Error text",
//       status: "error"
//     },
//   ])
//   return (
//     <div>
//       <Notification state={state} />
//     </div>
//   )
// }

// export default App

//! ------------------------------------------------------------------------------------------

//? 
// import React, { useState } from 'react'

// const App = () => {
//   let [message,setMessage]=useState([
//     "some text","shashi is teaching react js"
//   ])
//   return (
//     <div>
//       <div>Messages<sup>1</sup></div>
//     </div>
//   )
// }

// export default App

//! ------------------------------------------------------------------------------------------
//? Short-circuit AND Operator &&

// import React, { useState } from 'react'
// let data=["dixith is teaching java","shashi is teaching react js"]

// const App = () => {
//   let [message,setMessage]=useState(data)

//   return (
//     <div>
//       {/* <div>Notification<sup>{message.length}</sup></div> */}
//       Notificationsv
//       {message.length>1 && <sup>{message.length}</sup>}

//     </div>
//   )
// }

// export default App

//! ------------------------------------------------------------------------------------------

import { Fragment, useState } from 'react'

 const App = () => {
  let [data, setData] = useState(null);


    (async function () {
      let res = await window.fetch("https://api.github.com/users")
      let finalVal = await res.json()
      setData(finalVal)
    })()
  return (
    <div>
      {
        data === null ? "loading..." : data.map(user => {
          return (
            <Fragment key={user.id}>
              <li>{user.login}</li>
            </Fragment>
          )
        })
      }
    </div>
  )
}


export default App