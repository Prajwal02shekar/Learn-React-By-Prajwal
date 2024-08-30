import React, { useEffect } from 'react'
import { dbConnection } from '../components/dbConnection'


//? syntax of effect hook

//? useEffect(setup,dependencies?)


const EffectHookExample = ({counter:{count,setCount}}) => {
   
//     useEffect(()=>{
//         document.title=`Title is comming from  useEffect ${count}`
//     })

// without dependencies are equal to render method in class based component

//? example of componentDidMount features in functional based component
// useEffect(()=>{
//         document.title=`Title is comming from  useEffect ${count}`
//     console.log("Check re-rendered or not in functional based component");
// },[])     //?if it is empty array dependencies means that is componentDidMount in functional

//? example of componentDidUpdate features in functional based component

// useEffect(()=>{
//     document.title=`Title is comming from  useEffect ${count}`
// console.log("Check re-rendered or not in functional based component");
// },[count])  

//? example of componentWillUnmount features in functional based component

// useEffect(()=>{
// dbConnection.connect()
//     return ()=>{
//         dbConnection.disConnect()
//     }
// })


return (
    <div>
        <h1>Hook Based Component</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
)
}

export default EffectHookExample