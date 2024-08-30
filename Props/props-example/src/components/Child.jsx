import React, { Fragment } from 'react'

// ? CHILD COMPONENT  

// const Child = (props) => {
//     // console.log(props);
//     let { name, salary, isAvailable, isNull, isUndefined, isSymbol } = props.objectProps;
//     // console.log(typeof name);
//     // console.log(typeof salary);
//     // console.log(typeof isAvailable);
//     // console.log(typeof isNull);
//     // console.log(typeof isUndefined);
//     // console.log(typeof isSymbol);
//     // console.log(typeof props.objectProps);

//         // let obj=new Object(isSymbol)
//         // console.log(obj.toString());

//         // let element=<h1>hello</h1>
//         // console.log(element);

//     return (
//         <div>
//             {/* <h1>{props.name}</h1>
//             <p>I am eating {props.food}</p> */}
//             {/* ----------------------------------------- 2nd one---- */}
//             <h1>name: {name}</h1>
//             <p>Salary:{salary}</p>
//             <p>isAvailable:{(isAvailable === true ? "available" : "not available")}</p>
//             <p>isNull:{(isNull === null ? "loading...." : "some content")}</p>
//             <p>isUndefined:{(isUndefined === undefined ? "loading with undefined data" : "some content")}</p>
//             <hr />
//         </div>
//     )
// }




//? destructuring

// const Child = props => {
//    let {facebook,google}=props.data.frontend.libraries;

//     return (
//         <div>
//             <h1>FaceBook:{facebook}</h1>
//             <h1>Google:{props.data.frontend.libraries.google}</h1>

//             <hr />
//         </div>
//     )
// }


//? sending array

// const Child = props => {
//     console.log(props.data);
//     console.log(typeof props.data);
//     console.log(Array.isArray(props.data));
//     return (
//         <div>
//             {
//                 props.data.map((lang, index) => {
//                     return <Fragment key={index + 1}>
//                         <p>{lang}</p>

//                     </Fragment>
//                 })
//             }
//             <hr />
//         </div>
//     )
// }
// ? sending array of objects

// const Child = props => {
//     console.log(props.courses);
//     return (
//         <div>
//             {
//                 props.courses.map(courses => {
//                     return <Fragment key={courses.id}>
//                         <h1>{courses.course_name}</h1>
//                         <p>
//                             <span>Trainer: </span>
//                             {courses.trainer.map(tutor =>
//                                 <Fragment key={courses.id}>
//                                     {" "}
//                                     <span>{tutor}</span>

//                                 </Fragment>)}
//                         </p>
//                         <p>Duration: {courses.duration}
//                         </p>
//                         <p>
//                             <span>Languages: </span>
//                             {courses.languages.map(lang =>
//                                 <Fragment key={courses.id}>
//                                     {" "}
//                                     <span>{lang}</span>

//                                 </Fragment>)}
//                         </p>
//                     </Fragment>
//                 })
//             }
//             <hr />
//         </div>
//     )
// }

//? Bi-directional using hoocks----Imperative way


// const Child = props => {
//     return (
//         <div>
//             <hr />
//             <h1>{props.data.count} from child</h1>
//             <button onClick={() => props.data.Increment()}>From Child we are updating parent data</button>
//         </div>
//     )
// }


//? JSON

// const Child = props => {
//     console.log(props);
//     return (
//         <div>
//             {
//                 props.jsonData.map(user=>{
//                     return <Fragment key={user.id}>
//                         <img src={user.avatar_url} alt="name" />
//                     </Fragment>
//                 })
//             }
//             <hr />
//         </div>
//     )
// }

//? Advance level props -->without using prop name ---destructuring

// const Child = ({ name, duration, trainer,
//     details: { branch, price,
//         discount: {
//             percent:
//             { btr_branch } } } }) => {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>duration: {duration + "months"}</p>
//             <p>Trainer: {trainer}</p>
//             <p>branch: {branch}</p>
//             <p>price: {price}</p>
//             <p>discount:  {btr_branch}</p>
//             <hr />
//         </div>
//     )
// }
export default Child 