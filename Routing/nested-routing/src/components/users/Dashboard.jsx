import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <main className="dashboard-content">
                <ul>
                    <li>
                        <Link to="./">Users</Link>
                        <Link to="./products">Products</Link>
                        <Link to="./players">Players</Link>
                        <Link to="./avangers">Avengers</Link>
                        <Link to="./prod">Prod</Link>



                    </li>
                </ul>
            </main>
            <Outlet />
        </div>
    )
}

export default Dashboard

//!------------------------------------------------------------------------------------------------------------
// import { NavLink, Outlet } from 'react-router-dom'
// const Dashboard = () => {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <main className="dashboard-content">
//                 <ul>
//                     <li>
//                         <NavLink
//                             to={{
//                                 pathname: "/users",
//                                 search: "?sort=name",      //query string parameter
//                                 state: { name: "dixith" },
//                                 hash: ""  //suffix //prefix with hash
//                             }}
//                         //  to="/users" className={({ isActive }) => (isActive === true ? 'active' : "")}
//                         >Users</NavLink>
//                         <NavLink
//                             // to="./" className={({ isActive }) => (isActive === true ? 'active' : "")}

//                             to={{
//                                 pathname: "/",
//                                 search: "",      //query string parameter
//                                 state: { name: "sashi" },
//                                 hash: ""  //suffix //prefix with hash
//                             }}
//                         >Products</NavLink>
//                         <NavLink to="./players" className={({ isActive }) => (isActive === true ? 'active' : "")} >Players</NavLink>
//                     </li>
//                 </ul>
//             </main>
//             <Outlet />
//         </div >
//     )
// }

// export default Dashboard