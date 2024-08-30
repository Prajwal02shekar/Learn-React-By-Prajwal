import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="sideMenu">
            <div className="logo">BLINKO</div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/">Users</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li> 
                    <li>
                        <Link to="/players">Players</Link>
                    </li>  
                    <li>
                        <Link to="/avangers">Avengers</Link>
                    </li>
                    <li>
                        <Link to="/prod">Prod</Link>
                    </li>                    
                </ul>
            </div>

        </div>
    )
}

export default Menu

//!------------------------------------------------------------------------
// import React from 'react'
// import { NavLink } from 'react-router-dom';

// const Menu = () => {
//     return (
//         <div className="sideMenu">
//             <div className="logo">BLINKO</div>
//             <div className="menu">
//                 <ul>
//                     <li>
//                         <NavLink
//                         to="/" style={({ isActive }) => (
//                             {
//                                 background: isActive ? '#361968' : "",
//                                 borderBottom: isActive ? "2px solid #ffc10778" : ""

//                             }
//                         )}
//                         >Dashboard</NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                         to="/players" style={({ isActive }) => (
//                             {
//                                 background: isActive ? '#361968' : "",
//                                 borderBottom: isActive ? "2px solid #ffc10778" : ""
//                             }
//                         )}
//                         > Player</NavLink>
//                     </li>
//                 </ul>
//             </div>

//         </div>
//     )
// }

// export default Menu