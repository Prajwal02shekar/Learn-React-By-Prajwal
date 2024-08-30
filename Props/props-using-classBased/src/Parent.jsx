
//? Basic example props using class based component
// import React, { Component } from 'react'
// import Child from './components/Child'

// export default class 
//  extends Component {
//   render() {
//     return (
//       <div>
//         <Child name="prajwal" age={21} company="TYSS" />
//       </div>
//     )
//   }
// }

//?---------------------------------------------------------
// import React, { Component } from 'react'
// import Child from './components/Child';

// class Parent extends Component {
//   state = {
//     count: 0,
//   }
//   Increment = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count} from parent</h1>
//         <Child
//           name="girish"
//           age={30}
//           company="TYSS"
//           val={this.Increment}
//         />
//       </div>
//     )
//   }
// }

// export default Parent



//? -----------------------------------------------------------------

//? props.children using function based components
// import React from 'react'
// import Child from './components/Child'

// const Parent = () => {
//   return (
//     <div>
//       <Child name="prajwal">
//         <h3> Iam from Bangalore</h3>
//         <button>View More</button>
//       </Child>
//       <Child name="darshan">
//         <h3> Iam from Mandya</h3>
//         <button>View More</button>
//       </Child>
//       <Child name="Ashish">
//         <h3> Iam from Mysore</h3>
//         <button>View More</button>
//       </Child>
//       <Child name="Balaji">
//         <h3> Iam from Selam</h3>
//         <button>View More</button>
//       </Child>
//     </div>
//   )
// }

// export default Parent

//?---------------------------------------------------------

//? props.children using class based components

// import React, { Component } from 'react'
// import Child from './components/Child';

// export default class Parent extends Component {
//   render() {
//     return (
//       <div>
//         <Child course="Java Full Stak">
//           <ul>
//             <li>Java</li>
//             <li>Spring</li>
//             <li>Servlet</li>
//           </ul>
//         </Child>
//         <Child course="Python Full Stak">
//           <ul>
//             <li>Python</li>
//             <li>Django</li>
//             <li>Numy</li>
//           </ul>
//         </Child>
//         <Child course="Mern Full Stak">
//           <ul>
//             <li>MangoDb</li>
//             <li>Express Js</li>
//             <li>React js</li>
//             <li>Node js</li>
//           </ul>
//         </Child>
//         <Child course="Java Full Stak">
//           <ul>
//             <li>MangoDb</li>
//             <li>Express Js</li>
//             <li>angular js</li>
//             <li>Node js</li>
//           </ul>
//         </Child>
//       </div>
//     )
//   }
// }

//?---------------------------------------------------------



// import React, { Fragment } from 'react'
// import Child from './components/Child';
// import Login from './components/Login';
// import Signup from './components/Signup';


// const Parent = () => {
//   return (
//     <div>
//       <Fragment>
//         <Child>
//           <Login>
//             <p>Iam login Page</p>
//           </Login>
//           <Signup>
//             <p>Iam Signup page</p>
//           </Signup>
//         </Child>
//       </Fragment>
//     </div>
//   )
// }

// export default Parent

//? ------------------------------------------------

//? default props using functional way
// import React from 'react'
// import Child from './components/Child'

// const Parent = () => {
//   return (
//     <div>
//       <Child name="shashi" company="TYSS" salary={20000} />
//       <Child name="praju" company="QSP" salary={30000} />
//       <Child name="darshan" company="JSP" salary={40000} />
//       <Child  />
//     </div>
//   )
// }

// export default Parent
// ------------------------------------------------

//? dafault props using class based 

import React, { Component } from 'react'
import Child from './components/Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <Child name="prajwal" company="TYSS" salary={350000}/>
        <Child name="darshan" company="QSP" salary={320000}/>
        <Child name="balaji" company="JSP" salary={520000}/>
        <Child/>
      </div>
    )
  }
}
