// import React, { useState } from 'react'


// const App = () => {
// // let [state, setState] = useState("");

// //? example 1

// // for (let i = 0; i < 100; i++){
// // let [state, setState] = useState("praju");
// // }

// //? example 2

// // if (true) {
// // let [state, setState] = useState("praju");
// // }
// // else {
// // console.log("hello")
// // }

// //? example 3

// // (() => {
// // let x = () => {
// // let y = () => {
// // console.log("nested function")
// // };
// // y();
// // };
// // x();
// // })()

// return (
// <div>
// <h1>Hello</h1>
// </div>
// )
// }

// export default App

//!---------------------------------------------------------------------------------------------------------
//? useReducer Hook

// import React, { useReducer, useState } from 'react'
// let initialState = {
// name: "prajwal",
// company: "TYSS",
// salary: 35000,
// }
// const App = () => {
// // let [value, setvalue] = useState("")

// let [state, dispatch] = useReducer(() => { }, initialState)
// console.log(state)
// return (
// <div>
// <h1>{state.name}</h1>
// <p>{state.company}</p>
// <p>{ state.salary}</p>
// </div>
// )
// }
// export default App
//!---------------------------------------------------------------------------------------------------------

//? example 2

import React, { useReducer } from 'react'

let initialState = {
	count: 0,
}
let reducer = (state, action) => {
	console.log(action.type)
	// console.log(state)
	switch (action.type) {
		case 'INCREMENT':
			return {
        count: state.count + 1

			};

		case 'DECREMENT':
      return {
        count: state.count -1

			}

		case 'RESET':
			return {
        count: 0
			}

		default:
			return state;
	}
}
const App = () => {
	let [state, dispatch] = useReducer(reducer, initialState)
	return (
		<div>
			<h1>{state.count}</h1>
			{/* <button onClick={()=>dispatch(state.conunt+1)}>Increment</button> //? not right way */}
			<button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
			<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

		</div>
	)
}

export default App
