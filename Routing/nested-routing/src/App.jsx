
import Root from './components/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/users/Dashboard'
import AllUsers from './components/users/AllUsers'
import Products from './components/products/Products';
import Players from './components/players/Players';
import Avengers from './components/avengers/Avengers';
import Prod from './prod/Prod';
const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Dashboard/>,
                children:[
                    {
                        index:true,
                        element:<AllUsers/>
                    },
                    {
                        path:'products',
                        element:<Products/>
                    },
                    {
                        path:'players',
                        element:<Players/>
                    },
                    {
                        path:'avangers',
                        element:<Avengers/>
                    },
                    {
                        path:'prod',
                        element:<Prod/>
                    },
                ]
            }
        ]
    }
])

const App = () => {
  return (
   <>
   <RouterProvider router={routes}>

   </RouterProvider>
   </>
  )
}

export default App
// !---------------------------------------------------------------------------------------------------------

// import Root from './components/Root'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Dashboard from './components/users/Dashboard'
// import AllUsers from './components/users/AllUsers'
// import Products from './components/products/Products';
// import Players from './components/players/Players';
// import Avengers from './components/avengers/Avengers';
// import Prod from './prod/Prod';
// import Profile from './components/users/Profile';
// const routes = createBrowserRouter([
//     {
//         path: '/',
//         element: <Root />,
//         children: [
//             {
//                 path: '/',
//                 element: <Dashboard />,
//                 children: [
//                     {
//                         path:"users",
//                         element: <AllUsers />,
//                         children: [
//                             {
//                                 path: ":login",
//                                 element: <Profile />,
//                             }
//                         ]
//                     },
//                     {
//                         index: true,
//                         element: <Products />
//                     },
//                     {
//                         path: 'players',
//                         element: <Players />
//                     },
//                 ]
//             }
//         ]
//     }
// ])

// const App = () => {
//     return (
//         <>
//             <RouterProvider router={routes}>

//             </RouterProvider>
//         </>
//     )
// }

// export default App
//!----------------------------------------------------------------------------------------
// import Root from './components/Root'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Dashboard from './components/users/Dashboard'
// import AllUsers from './components/users/AllUsers'
// import Products from './components/products/Products';
// import Players from './components/players/Players';
// import Avengers from './components/avengers/Avengers';
// import Prod from './prod/Prod';
// import Profile from './components/users/Profile';
// const routes = createBrowserRouter([
//     {
//         path: '/',
//         element: <Root />,
//         children: [
//             {
//                 path: '/',
//                 element: <Dashboard />,
//                 children: [
//                     {
//                         path:"users",
//                         element: <AllUsers />,
//                     },
//                     {
//                         index: true,
//                         element: <Products />
//                     },
//                     {
//                         path: 'players',
//                         element: <Players />
//                     },
//                     {
//                         path: "/:login",
//                         element: <Profile />,
//                     }
//                 ]
//             }
//         ]
//     }
// ])

// const App = () => {
//     return (
//         <>
//             <RouterProvider router={routes}>

//             </RouterProvider>
//         </>
//     )
// }

// export default App