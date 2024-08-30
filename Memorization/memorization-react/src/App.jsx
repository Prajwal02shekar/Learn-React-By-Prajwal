// import React, { useState } from 'react'
// import { MemorizedComp } from './Count'
// import CountWithCBC from './CountWithCBC'

// const App = () => {
// let [count, setCount] = useState(0)
// let Increment = () => {
// setCount(count + 1)
// }
// return (
// <div>
// <h1>Iam a Parent component <strong style={{ color: "green" }}>{count}</strong></h1>
// <button onClick={Increment}>Increment</button>
// <hr />
// <MemorizedComp count={ {count,Increment}} />
// <hr />
// <CountWithCBC count={{ count, Increment }} />
// </div>
// )
// }

// export default App

//?---------------------------------------------------------------------------------------
// import React, { useState } from 'react'
// import { MemorizedComp } from './Count'
// import CountWithCBC from './CountWithCBC'

// const App = () => {
// 	let [state, setState] = useState({
// 		count: 0
// 	})
// 	let Increment = () => {
// 		setState({ count: state.count + 1 })
// 	}
// 	let { count } = state;

// 	return (
// 		<div>
// 			<h1>Iam a Parent component <strong style={{ color: "green" }}>{state.count}</strong></h1>
// 			<button onClick={Increment}>Increment</button>
// 			<hr />
// 			<MemorizedComp count={{ count, Increment }} />
// 			<hr />
// 			<CountWithCBC count={{ count, Increment }} />
// 		</div>
// 	)
// }

// export default App

//!-----------------------------------------------------------------------------------------------

// //? --useMemo()
// import React, { useCallback, useMemo, useState } from 'react'
// import { MemorizedComp } from './Count'
// import CountWithCBC from './CountWithCBC'

// const App = () => {
//     let [state, setState] = useState({
//         count: 0
//     })
//     //! useMemo()
//     // let Increment = useMemo(() => {
//     //     setState({count:state.count+1})
//     // }, []);

//     // let Increment=() => {
//     //     setState({count:state.count+1})
//     // }

//     //! useCallback()
//     let Increment = useCallback(() => {
//         setState({count:state.count+1})
//     }, [state.count])
    
//     let { count } = state;

//     return (
//         <div>
//             <h1>Iam a Parent component <strong style={{ color: "green" }}>{state.count}</strong></h1>
//             <button onClick={Increment}>Increment</button>
//             <hr />
//             <MemorizedComp count={{ count, Increment }} />
//             <hr />
//             {/* <CountWithCBC count={{ count, Increment }} /> */}
//         </div>
//     )
// }

// export default App
//!------------------------------------------------------------------------------------------------
//! -new
import React, { useCallback, useState } from 'react'

import { MemorizrdComp } from './Count';
import MemoExample from './MemoExample';
import OneMoreMemoEg from './OneMoreMemoEg';
import CallbackEg from './CallbackEg';

const App = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    
    // let Memorized = useCallback(()=> {
    // <MemorizrdComp/>
    // },[])
    
  return (
    //   <div>
    //       <h1>Parent Component</h1>
    //       <label>Name:</label>
    //       <input type="text" onChange={e => { setName(e.target.value) }} value={name} placeholder='name' />
    //       <label>Address:</label>
    //       <input type="text" onChange={e => { setAddress(e.target.value) }} value={address} placeholder='address' />
    //       <hr />
    //   {/* <MemorizrdComp name={name} /> */}
    //   <MemoExample/>
    // </div>
    <div>
      {/* <h1>Parent Component</h1>
      <OneMoreMemoEg/> */}
      <CallbackEg/>
    </div>

  )
}

export default App