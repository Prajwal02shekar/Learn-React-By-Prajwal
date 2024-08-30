import React from 'react';
//? React router dom version 5
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import Home from './components/Home';
import NotFound from './components/NotFound';

// let route=true;
// switch(route){
//     case '/':
//         return "home";
//     case '/login':
//         return "login"
//     case '/register':
//         return "register"
//     case '/users':
//         return "users"
// }

const App = () => {
    return (
        <Router>
            <Navbar />
            <hr />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/users" exact>
                    <Users />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default App