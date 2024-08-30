//? Components 1

// import React from "react";
// import { createRoot } from "react-dom/client";

//to create a components 2 ways 
//1. Class based components
//2.Functional based components


//if it is  component starts with lower case u will get warning 
// const App = function () {
//     return (
//         <>
//             <div>
//                 <h1>Iam a first component</h1>
//             </div>
//         </>
//     )
// }
// const Header = () => {
//     return

//     <>
//         <div className="logo">logo</div>
//         <div className="menu">menu</div>

//     </>

// }
// createRoot(document.getElementById("root")).render(
//     <Header />
// )
// ===============================================================


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />)