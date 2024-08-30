import React, { Fragment, useState } from 'react'
import USER from '../../data.json'
const AllUsers = () => {
    let [state,setState]=useState(USER)
  return (
    <div className='users'>
      <h1>Users</h1>

        {
            state.map.length>0&& state.map(user=>(
                <Fragment key={user.id}>
                    <div className="container">
                        <figure>
                            <picture>
                                <img src={user.avatar_url} alt={user.login} height={150} width={150} />
                                </picture>
                        </figure>
                    </div>
                </Fragment>
            ))
        }
    </div>
  )
}

export default AllUsers

// //!------------------------------------------------------------------------------------------------
// import React, { Fragment, useState } from 'react'
// import USER from '../../data.json'
// import { Link, useLocation } from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
// const AllUsers = () => {
//   let [state, setState] = useState(USER)
//   let location = useLocation()
//   console.log(location.state);
//   return (
//     <main>
//       <Outlet/>
//       <div className='users'>
//         {
//           state.map.length > 0 && state.map(user => (
//             <Fragment key={user.id}>
//               <div className="container">
//                 <figure>
//                   <picture>
//                     <img src={user.avatar_url} alt={user.login} height={150} width={150} />
//                   </picture>
//                   {/* <Link to={`/users/${user.login}`} state={user}>View More</Link> */}
//                   <Link to={`/${user.login}`} state={user}>View More</Link>

//                 </figure>
//               </div>
//             </Fragment>
//           ))
//         }
//       </div>
//     </main>
//   )
// }

// export default AllUsers

//!------------------------------------------------------------------------------------------------
// import React, { Fragment, useState } from 'react'
// import USER from '../../data.json'
// import { NavLink, useLocation } from 'react-router-dom'
//  const AllUsers = () => {
//   let [state, setState] = useState(USER)
//   let location = useLocation()
//   console.log(location.state);
//   return (
//     <main>
//       <div className='users'>
//         {
//           state.map.length > 0 && state.map(user => (
//             <Fragment key={user.id}>
//               <div className="container">
//                 <figure>
//                   <picture>
//                     <img src={user.avatar_url} alt={user.login} height={150} width={150} />
//                   </picture>
//                   <NavLink to={`/users${user.login}`} state={user}>View More</NavLink>

//                 </figure>
//               </div>
//             </Fragment>
//           ))
//         }
//       </div>
//     </main>
//   )
// }

// export default AllUsers