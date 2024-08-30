useReducer =>complex state object go with useReducer
--> the useReducer is the alternative to the usestate hook whenever have complex state

usestate =>basic state object go with useState
-->

====> the contextAPI with useReducer is the best option to create complex state logic in react application

===> for the state management like redux,Recoil,Mobx useReducer is the best option compare to useState


what is useReducer?
The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.

--->syntax for useReducer
useReducer accepts 2 parameters as reducerfunction and initialState

  let [state,dispatch]=useReducer("reducerFunction","initialState")


--->simple example of useReducer

import React, { useReducer } from 'react'
let initialState = {
  name: "prajwal",
  company: "TYSS",
  salary: 35000,
}
const App = () => {
  let [state, dispatch] = useReducer(() => { }, initialState)
  console.log(state)
  return (
    <div>
      <h1>{state.name}</h1>
      <p>{state.company}</p>
      <p>{ state.salary}</p>
    </div>
  )
}