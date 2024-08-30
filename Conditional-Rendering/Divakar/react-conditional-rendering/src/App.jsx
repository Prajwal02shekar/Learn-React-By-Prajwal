// import React from 'react'
// import Navbar from './Navbar'  
// import GithubUsers from './GithubUsers'
// import MyFriendLidt from './MyFriendLidt'

// const App = () => {
//   let arr = ["hello","hii","bye"];
//   return (
//     <div>
//       <Navbar/>
//       {/* <GithubUsers/> */}
//       {/* <MyFriendLidt friendType={"school friend"}/> */}
//       {
//         arr.length > 0 && arr.map(ele => {
//           return <h1>{ ele}</h1>
//         })
//       }
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navbar from './Navbar';

const App = () => {
  let arr = ["hello", "hii", "bye"];
  let num=Math.random()*10

  return (
    <div>
      <Navbar name="prajwal" />
      {/* {
        arr.length > 0 && arr.map(ele => {
          return <h1>{ele}</h1>
        })
      } */}
      {
        (() => {
          if (num > 5){
            return <h1> number more than 5</h1>;
          } else {
            return <h1> number less than 5</h1>;
          }
      })()
    }
    </div>
    
  )

}

export default App