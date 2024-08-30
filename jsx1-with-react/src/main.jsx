// import React from "react";
// import { createRoot } from "react-dom/client";

// // creating element without jsx

// type`1`  [native react] 
// const element=React.createElement("h1",null,"Iam react without jsx")
// console.log(element);  //object
// createRoot(document.getElementById("root")).render(element)

// // React element Object consiss of
// //$$typeof  
// // props
// // key
// // ref
// // type

// //! type 2 ---> easiernto compares others  [wrapper of js and html]
// const elementWithJsx=<h1>Iam a jsx</h1>
// console.log(elementWithJsx); //object
// createRoot(document.getElementById("root")).render(elementWithJsx) 

// //! type 3
// // createRoot(document.getElementById("root")).render(React.createElement("h1",null,"Iam react without jsx"))

// -------------------------------------------------------------------------------------------------------------------------------------------
// //? jsx-2
// import React from "react";
// import { createRoot } from "react-dom/client";

// //? JSX Syntax
//? Rule 1   : jsx element should have closing tag wheather it may be a paired or unpaired tag
// // const element=<h1>Hello JSX</h1>
// // createRoot(document.querySelector("#root")).render(element)

// // const element=React.createElement(
// //     "h1",
// //     null,
// //     "hello react with jsx",
// //     React.createElement("h1",null,"hello react with tsx"),
// // )
// // console.log(element);
// // createRoot(document.querySelector("#root")).render(element);

// const elementWithJsx=(<div>
//     <h1>JSX</h1>
//     <h1>TSX</h1>
// </div>)
// console.log(elementWithJsx);
// createRoot(document.querySelector("#root")).render(elementWithJsx);

// //? RULE-2  :  element with same-level should have parent compusoluary

// --------------------------------------------------------------------------------------------------------------------------------------------------------

//? JSX 3

// import React, { createElement } from "react";
// import { createRoot } from "react-dom/client";

// let div=document.createElement("p")
// div.textContent="Iam para"
// console.log(div);
// console.log(typeof div);
// console.log(React.createElement());

// const element=React.createElement("elementName","property/attribute","children/content")

// const para = React.createElement("p", { className: "para" }, "Iam para from react native element")

// let section = React.createElement(
//     "section",
//     { id: "mainSection" },
//     React.createElement(
//         "article",
//         { className: "container" },
//         React.createElement(
//             "main", null,
//             React.createElement("h1", null, "Welcome to TestYantra"),
//             React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit ex quasi pariatur ratione. Minima fugiat optio voluptas aperiam adipisci aliquid laudantium, repudiandae inventore asperiores delectus incidunt culpa dolorum maiores!",
//                 React.createElement("button", null, "view more")
//             )
//         )
//     )
// )
// createRoot(document.getElementById("root")).render(<section id="section">
//     <article className="container">
//         <main>
//             <h1>Welcome to Test Yantra</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit ex quasi pariatur ratione. Minima fugiat optio voluptas aperiam adipisci aliquid laudantium, repudiandae inventore asperiores delectus incidunt culpa dolorum maiores!
//             </p>
//             <button>view more</button>
//         </main>
//     </article>
// </section>)

//! --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//? JSX 4

// const lists=()=>{
//     return (<ul>
//     <li>sashi</li>
//     <li>manu</li>
//     <li>vinay</li>
// </ul>)
// }
// createRoot(document.querySelector("#root")).render(<lists/>)


// const Block =
//     <div>
//         <h1>Iam h1 </h1> <h2>Iam h2</h2> <h3>Iam h3</h3>
//     </div>
// createRoot(document.querySelector("#root")).render(Block)

//todo ================================================================== javascript code
// const fragment = new DocumentFragment();
// const liNative=document.createElement("li")
// liNative.textContent="iam native li content"
// console.log(liNative);

// let liFragment=document.createDocumentFragment("li")
// liFragment.textContent="Iam a fragment text"
// console.log(liFragment);

// let ul=document.querySelector("ul")
// ul.appendChild(liNative)
// console.log(document.all);
//todo ==================================================================

// import React from "react";
// import { createRoot } from "react-dom/client";
// console.log(document.all);

// createRoot(document.getElementById("root")).render(
//     <div>
//         <li>hello</li>
//         <li>world</li>
//         <li>and India</li>
//     </div>
// )

// import React from "react";
// import { createRoot } from "react-dom/client";
// console.log(document.all);

// createRoot(document.getElementById("root")).render(
//     // <div className="container">                 //adding extra node to the dom
//     //     <li>hello</li>
//     //     <li>world</li>
//     //     <li>and India</li>
//     // </div>
//     // <Fragment key="1"> 
//     //     {/* it is not adding an extra node to the dom                    */}
//     //     <li>sashi</li>
//     //     <li>manu</li>
//     //     <li>Priyanka</li>
//     // </Fragment>
//     // <>
//     // {/* ------shorthand Fragment component--------------- */}
//     //     <li>sashi</li>
//     //     <li>manu</li>
//     //     <li>vinu</li>
//     // </>
// )

//? jsx expression


// import React, { Fragment } from "react";
// import { createRoot } from "react-dom/client";
// let num1=10
// let num2=20

// let firstName="Prajwal"
// let lastName="Shekar"
// let company="QSpiders"
// let description="he jkawbedenskawhj cds cjndioewjdewjc skAE D   EWO DEWN QWE WKJ CEKW CQE CAS CM CAL"
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <h1>My name is {firstName.toUpperCase()}</h1>
//         <p>My lastName is {lastName}</p>
//         <p>I work for {company}</p>
//         <p>{description.slice(0,10)}</p>
//     </Fragment>
// )


// import React, { Fragment } from "react";
// import { createRoot } from "react-dom/client";

// let elm=document.createElement("label")
// elm.className="demo"
// elm.htmlFor="username"
// console.log(elm);
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <div className="demo">Hello div</div>
//         <label htmlFor="username" ></label>
//         <input type="text" name="username" id="username" placeholder="username" />
//     </Fragment>
// )
// -------------------------------------------------------------------------------------------------------------------------------------------------------

//? JSX -5


// import React from "react";
// import { createRoot } from "react-dom/client";

// let MyComponent = () => {
//     return <h1>hello sashi</h1>
// }

// createRoot(document.getElementById("root")).render(
//     <MyComponent />
// )
// ===================================================================
// import React from "react";
// import { createRoot } from "react-dom/client";

// let arr = ["sashi", "manu", "priya", "vinu"]
// let isAvailable = true
// let isNullValue = null
// let isUndefinedValue = undefined

// createRoot(document.getElementById("root")).render(
//     <>
//         {
//             arr.map(x => {
//                 return (
//                     <>
//                         <li>{x}</li>
//                     </>
//                 )
//             })
//         }
//         {isAvailable === true ? "Iam isAvailable" : ""}
//         {isNullValue === null ? "yes iam null value" : ""}
//         {isUndefinedValue === undefined ? "yes iam undefined value" : ""}
//         {arr.map(x => {
//             return <>{x}</>
//         })}
//     </>
// )




