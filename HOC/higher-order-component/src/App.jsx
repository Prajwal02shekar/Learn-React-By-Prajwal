// import React from 'react'
// import Profile from './components/auth/Profile'
// import Menu from './components/navbar/Menu'

// const App = () => {
//   return (
//     <div>
//       <Profile/>
//       <Menu/>
//     </div>
//   )
// }

// export default App

//? ================================================

import React from 'react'
import Profile from './components/auth/Profile'
import User from './components/navbar/User';

const App = () => {
  return (
    <div className='flex'>
      <div className="profile">
        <Profile />
      </div>

      <div className="user">
        <User />
      </div>
    </div>
  )
}

export default App