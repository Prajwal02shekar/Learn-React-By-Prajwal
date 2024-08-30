
// import Login from './Login';

// const Navbar = () => {
//     return (
//         <div className='flex justify-between bg-blue-600 p-4'>
//             <ul className='flex gap-4 '>
//                 <li className='hover:text-white'>Home</li>
//                 <li className='hover:text-white'>Services</li>
//                 <li className='hover:text-white'>Contact</li>
//             </ul>
//             <section>
//                 <Login loggedIn={true} />
//             </section>
//         </div>
//     )
// }

// export default Navbar

// --------------------------------------------------------------------

import React from 'react'

const Navbar = ({name}) => {
  return (
      <div>
          <div className='flex justify-between bg-blue-600 p-4'>
              <ul className='flex gap-4 '>
                  <li className='hover:text-white'>Home</li>
                  <li className='hover:text-white'>Services</li>
                  <li className='hover:text-white'>Contact</li>
                  <li>{name || "praju"}</li>
              </ul>
              
          </div>
    </div>
  )
}

export default Navbar
