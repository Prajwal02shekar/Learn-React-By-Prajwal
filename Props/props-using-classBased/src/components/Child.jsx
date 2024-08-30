
//? Basic example props using class based component
// import React, { Component } from 'react'

// export default class Child extends Component {
//   render() {
//     return (
//       <div>
//         <h1>My name is {this.props.name}</h1>
//         <h1>My age is {this.props.age}</h1>
//         <h1>Iam working for{this.props.company}</h1>
//       </div>
//     )
//   }
// }

//?---------------------------------------------------------

// import React, { Component } from 'react'
// class Child extends Component {
//     //context
//     // props
//     //state
//     //ref
//     render() {
//         return (
//             console.log(this),
//             console.log(this.props),
//             <div>
//                 <h1>My name is {this.props.name}</h1>
//                 <p>My age is {this.props.age}</p>
//                 <p>I work for {this.props.company}</p>
//                 <button onClick={() => this.props.val()}>Update Information from child component</button>
//             </div>
//         )
//     }
// }
// export default Child

//? -----------------------------------------------------------------------

//? props.children using function based components

// import React from 'react'

// const Child = ({name,children}) => {
//   return (
//     <div>
//         <h1>{name}</h1>
//         <strong>{children}</strong>
//     </div>
//   )
// }

// export default Child

//?---------------------------------------------------------

//? props.children using class based components

// import React, { Component, Fragment } from 'react'

// export default class Child extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.course}</h1>
//         <Fragment>
//             {this.props.children}
//         </Fragment>
//       </div>
//     )
//   }
// }


//?---------------------------------------------------------

// import { Fragment } from "react";


//  const Child = (props) => {
//     console.log(props);
//   return (
//     <div>
//         <Fragment>
//             <hr />
//             <h1>Iam Child component</h1>
//             <hr />
//             {props.children}
//         </Fragment>
//     </div>
//   )
// }

// export default Child
//? ------------------------------------------------

//? default props using functional way

// import React from 'react'
// // const Child = ({name="sachin",company="BCCI",salary=2000}) => {
// const Child = ({ name, company, salary }) => {
//     return (
//         <div>
//             {/* <h1>{name}</h1> */}
//             <h1>{name || "sachin"}</h1>
//             <p>Iam working for {company}</p>
//             <p> My annual salary {salary + " INR"}</p>
//             <hr />
//         </div>
//     )
// }

// export default Child

// Child.defaultProps = {
//     name: "sachin",
//     company: "BCCI",
//     salary: 50000
// }

// --------------------------------------------------------------
//? dafault props using class based 

import React, { Component } from 'react'

export default class Child extends Component {
    //     // ? setting default props
    // static defaultProps={
    //     name:"sachin",
    //     company:"BCCI",
    //     salary:750000
    // }
    render() {
        return (
            <div>
                <h1>My name is {this.props.name}</h1>
                <p>Iam working for {this.props.company}</p>
                <p>My annula salary is {this.props.salary}</p>
                <hr />
            </div>
        )
    }
}
Child.defaultProps = {
    name: "sachin",
    company: "BCCI",
    salary: 750000
}