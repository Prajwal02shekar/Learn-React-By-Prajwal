import React, { useState } from 'react'
import Child from './components/Child'
import JSON from "./data.json"

// ? PARENT COMPONENT  

// const Parent = () => {
//   return (
//     <div>
//       {/* <h1>{props.name}</h1>
//       <p>{props.food}</p> */}
//       {/* <Child food="rice samber" name="shasi"/>
//         <Child food="pulav" name="dixith"/>
//         <Child food="figure rice" name="sagar"/>
//         <Child food="roti curry" name="prasad"/> */}
//       {/* ---------------------------------------------- */}
//       {/* <Child
//         name="shasi"
//         salary={10000}
//         isAvailable={true}
//         isNull={null}
//         isUndefined={undefined}
//         isSymbol={Symbol("shasi")}
//       /> */}

//     </div>
//   )
// }


// const Parent = () => {
//   // let obj = {
//   //   name: "shasi",
//   //   salary: 10000,
//   //   isAvailable: true,
//   //   isNull: true,
//   //   isUndefined: undefined,
//   //   isSymbol: Symbol("foo"),
//   // };
//   return (
//     <div>
//       {/* <Child objectProps={obj} /> */}
//       <Child objectProps={{
//         name: "shasi",
//         salary: 10000,
//         isAvailable: true,
//         isNull: true,
//         isUndefined: undefined,
//         isSymbol: Symbol("foo")
//       }} />
//     </div>
//   )
// }


//? destructuring

// const Parent = () => {
//   let courses = {
//     frontend: {
//       libraries: {
//         facebook: "react",
//         google: "angular"
//       }
//     }
//   };
//   return (
//     <div>
//       <Child data={courses}/>
//     </div>
//   )
// }

//? sending array

// const Parent = () => {
//   return (
//     <div>
//       <Child data={["java","js","nodejs","express","mongodb"]} />
//     </div>
//   )
//   };

//? sending array of objects

// const Parent = () => {
//   let courses = [
//     {
//       course_id: 1,
//       course_name: "javascript",
//       trainer: ["shasi", "dixith"],
//       duration: 1,
//       price: 10000,
//       branch: ["btr", "btm"],
//       languages: ["js", "dom", "es6", "react"]
//     }, {
//       course_id: 2,
//       course_name: "react js",
//       trainer: ["shasi", "dixith"],
//       duration: 1,
//       price: 10000,
//       branch: ["btr", "btm"],
//       languages: ["js", "dom", "es6", "react", "webpack", "babel"]
//     }, {
//       course_id: 3,
//       course_name: "java",
//       trainer: ["dixith"],
//       duration: 3,
//       price: 10000,
//       branch: ["btr", "btm"],
//       languages: ["java", "spring"]

//     }
//   ]
//   return (
//     <div>
//       <Child courses={courses}/>
//     </div>
//   )
// };


//? Bi-directional using hoocks------Imperative way

// const Parent = () => {
//   let [count, setCount] = useState(0);
//   let Increment = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <h1>{count} from parent</h1>
//       <Child data={{ count, Increment }} />
//     </div>
//   )
// }


//? JSON

// const Parent = () => {
//   return (
//     <div>
//       <Child jsonData={JSON} />
//     </div>
//   )
// }

//? Advance level props -->without using prop name---destructuring
// const Parent = () => {
//   let obj={
//     name:"JAVA FULL STACK",
//     duration: 3,
//     trainer:"Dixith",
//     details:{
//       branch:"btr",
//       price:2000,
//       discount:{
//         percent:{
//           btr_branch:80,
//         }
//       }
//     }
//   }
//   return (
//     <div>
//       <Child  {...obj}/>
//     </div>
//   )
// }
export default Parent


