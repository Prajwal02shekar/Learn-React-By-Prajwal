import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import GetUsers from "./components/GetUsers"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/users",
    element: <GetUsers />,
    loader: async (val) => {
      console.log(val);
      let data = await window.fetch("https://api.github.com/users");
      let finalData = await data.json();
      return finalData
    }
  }
])
const App = () => {
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}

export default App