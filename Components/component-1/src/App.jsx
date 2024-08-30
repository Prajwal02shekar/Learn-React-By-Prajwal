import React from "react";
// App.jsx is the root component in react
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
    return <>
        <Navbar />
        <hr />
        <Login />
        <Register />
        <Navbar/>
    </>
}
export default App;

