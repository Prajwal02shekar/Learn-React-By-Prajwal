import React, { useCallback, useEffect, useMemo, useState } from 'react'

const CallbackEg = () => {
    let [count, setCount] = useState(0)
  
    // let updateCount = useMemo(() => window.localStorage.setItem("add-to-cart-count", count), [count])
    // //! please useMemo() returns value ........ value cannot invoke

    let updateCount = useCallback(() => {
        let x = "shashi"
        let setValue=window.localStorage.setItem("add-to-cart-count", count)
        let getValue = window.localStorage.getItem("add-to-cart-count", count)
        return (getValue,setValue)
    }, [count])
    //! useCallback =>useCallback returns a function so function is invoking

   
    let fetchUser = useCallback(async () => {
        let data = await window.fetch("https://api.github.com/users");
        let finalValue = await data.json;
        console.log(finalValue)
    },[])
    useEffect(() => {
        // console.log(updateCount())
        // updateCount()
        console.log(fetchUser())
        fetchUser()
        console.log(count)
    }, [count, updateCount])
  return (
      <div>
          <h1>CallBack function</h1>
          <p>Add to cart : {count}</p>
          <button onClick={()=>setCount(count+1)}>add to cart</button>
    </div>
  )
}

export default CallbackEg