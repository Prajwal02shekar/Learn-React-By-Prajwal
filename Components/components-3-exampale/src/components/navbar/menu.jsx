import React,{Component} from "react";

class Menu extends Component{
    render(){
        return(
            <div className="menuBlock">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Menu