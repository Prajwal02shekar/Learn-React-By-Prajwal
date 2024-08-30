import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>
            <hr />
           
            {<Outlet />}
        </div>
    )
}

export default Navbar