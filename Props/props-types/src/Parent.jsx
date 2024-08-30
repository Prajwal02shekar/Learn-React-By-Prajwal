// import React from 'react'
// import Child from './components/Child'
// import Login from './components/Login';
// // import { element } from 'prop-types';

// const Parent = () => {
//   return (
//     <div>
//       <Child  username={"kunal"} />
//       <Child name="shashi" username={true}/>
//       <Child arr={["java","js","nodejs",true,{name:"praju"}]}/>
//       <Child lang={["js","nodejs","expressjs"]}/>
//       <Child
//         obj={{
//           id:1,
//           name:"stringh",
//           salary:1000,
//           isHire:true,
//         }}/>
//         {/* <h1>hello</h1>
//       </Child>
//         <Child username="manu" >
//           <h1>hello</h1>
//         </Child>
//         <Child username="dixith">
//           <h1>hello</h1>
//         </Child> */}


//       {/* <Child
//         elementProp="shashi"
//         id={"1"}
//         name={"shashi"}
//         company="JSP"
//         salary={10000}
//         details={{ address: "pnb layout", pincode: 560062 }}
//         languages={["java", "js"]}
//         fuc={() => console.log("hello child")}
//         isHired={true}
//         isSymbol={Symbol("shashi")}
//       />
//       <Child
//         elementProp="dixith"
//         id={2}
//         name={"dixith"}
//         company="QSP"
//         salary={30000}
//         details={{ address: "pnb layout", pincode: 560062 }}
//         languages={["java", "js"]}
//         fuc={() => console.log("hello child")}
//         isHired={true}
//         isSymbol={Symbol("manu")}


//       />
//       <Child
//         elementProp="manu "
//         id={"3"}
//         company="TYSS"
//         salary={20000}
//         details={{ address: "pnb layout", pincode: 560062 }}
//         languages={["java", "js"]}
//         fuc={() => console.log("hello child")}
//         isHired={true}
//         isSymbol={Symbol("dixith")}

//       /> */}
//     </div>
//   )
// }

// export default Parent

import React from 'react'
import Child from './components/Child'
const Parent = () => {
  return (
    <div>
      <Child username="prajwal" salary={200000} isAvailable={true}/>
    </div>
  )
}

export default Parent