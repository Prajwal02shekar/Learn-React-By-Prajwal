import React, { Component } from "react";
import Menu from "./menu";
import Logo from "./logo";

class Navbar extends Component {
    render() {
        return (
            
                <div className="navbar-container">
                    <Logo />
                    <Menu />
                </div>
            
        )
    }
}
export default Navbar