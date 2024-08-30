import {useRoutes} from "react-router-dom";
import Home from './../pages/Home';
import Login from './../components/auth/Login';
import Register from './../components/auth/Register';
import User from './../components/profiles/User';
import NotFound from './../pages/NotFound';

const CustomRoutes=()=>{
let element=useRoutes([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/user",
        element:<User/>
    },
    {
        path:"*",
        element:<NotFound/>
    },
])
return element
}

export default CustomRoutes;