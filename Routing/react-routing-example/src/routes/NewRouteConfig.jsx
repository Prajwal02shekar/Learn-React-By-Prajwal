import { createBrowserRouter } from "react-router-dom";
import Layout from './../layouts/Layout';
import Home from './../pages/Home';
import Register from './../components/auth/Register';
import Login from './../components/auth/Login';
import User from './../components/profiles/User';
import NotFound from './../pages/NotFound';


export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/user",
                element: <User />,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ]
    }])