
// import React from 'react'
// import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import User from './components/profiles/User';
// import NotFound from './pages/NotFound';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//         <li>
//           <Link to="/user">User</Link>
//         </li>
//       </ul>
//       {/*  routes new component introduced in react router dom v6 onwards and it replaces the switch component */}
//       <Routes>
//         {/* A container for a nested tree of <Route> element that renders the branch that best matches the current location */}
//         <Route path='/' element={<Home />} />
//         {/*  route is the child component that renders a specific UI component when URL matches the specified path using path attribute */}
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/user' element={<User />} />
//         {/* Page not found always at the bottom of the route */}
//         <Route path='*' element={<NotFound />} />

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//?-----------------------------------------------------------------------------

//? version 6.15 onwards they intriduces data API's  

//? if u need data api fallow below syntax

//? createBrowserRouter enables data api's like loaders actions,fetcher and many more

//? version v6.0 only added history api's without  data api's

// const router = createBrowserRouter([{
//   path: "/",
//   element: <Home />,
// },
// {
//   path: "/register",
//   element: <Register />,
// },
// {
//   path: "/login",
//   element: <Login />,
// },
// {
//   path: "/user",
//   element: <User />,
// }])
// console.log(router);


// import React from 'react'
// import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import User from './components/profiles/User';
// import Home from './pages/Home';
// import Layout from './layouts/Layout';
// import NotFound from './pages/NotFound';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/user",
//         element: <User />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       }
//     ]
//   }
// ])
// console.log(router);

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router}>

//         {/* <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/register">Register</Link>
//           </li>
//           <li>
//             <Link to="/user">User</Link>
//           </li>
//         </ul> */}
//       </RouterProvider>
//     </>

//   )
// }

// export default App

//! ================================================================================================

// import { createBrowserRouter,Routes,Route,RouterProvider,createRoutesFromElements } from "react-router-dom";
// import Layout from './layouts/Layout';
// import Home from './pages/Home';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import User from './components/profiles/User';
// import NotFound from './pages/NotFound';

// const Router=createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<Layout/>}>
//     <Route path="/home" element={<Home/>}/>
//     <Route path="/login" element={<Login/>}/>
//     <Route path="/register" element={<Register/>}/>
//     <Route path="/user" element={<User/>}/>
//     <Route path="*" element={<NotFound/>}/>

//   </Route>
// ))

// const App = () => {
//   return (
//     <RouterProvider router={Router}></RouterProvider>
//   )
// }

// export default App
//! ================================================================================================
// import { BrowserRouter as Router, Routes, } from "react-router-dom"
// import CustomRoutes from "./routes/CustomRoutes"
// import Navbar from "./components/navbar/Navbar"

// const App = () => {
//   return (
//     <Router>
//       <Navbar/>
//       <CustomRoutes />

//     </Router>
//   )
// }

// export default App

//! ================================================================================================
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes/NewRouteConfig";

// const App=()=>{
//   return <RouterProvider router={router}></RouterProvider>
// }
// export default App

//! ================================================================================================


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Layout from './layouts/Layout';
import About from './pages/About';
import { router } from './routes/NewRouteConfig';
import NotFound from './pages/NotFound';
import User from './components/profiles/User';

const App = () => {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/login",
          element:<Login/>,
        
        },
        {
          path:"/user/:name",
          element:<User/>,
        
        },
        {
          path:"/register",
          element:<Register/>,
        
        },
        {
          path:"*",
          element:<NotFound/>,
        
        }
      
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App