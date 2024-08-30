// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// const Layout = () => {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/login">Login</Link>
//                 </li>
//                 <li>
//                     <Link to="/register">Register</Link>
//                 </li>
//                 <li>
//                     <Link to="/user">User</Link>
//                 </li>
//             </ul>
//             <hr />
//             {/* renders the child route's elememt if there is one */}
//             {<Outlet/>}
//         </div>
//     )
// }

// export default Layout
//!--------------------------------------------------------------
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Layout = () => {
    const user = [
        {
            id: 1,
            name: "prajwal",
            company: "jspiders",
        },
        {
            id: 2,
            name: "balaji",
            company: "qspiders",
        },
        {
            id: 3,
            name: "darshan",
            company: "tyss",
        }
    ]
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">
                        {
                            user.map((user) => {
                                return <Fragment key={user.id}>
                                    <li>
                                        <Link to={`/user/${user.name}`} key={user.id}>{user.name}</Link>
                                    </li>
                                </Fragment>
                            })}
                    </Link>
                </li>
            </ul>
            <hr />
            {/* renders the child route's elememt if there is one */}
            {<Outlet />}
        </div>
    )
}

export default Layout