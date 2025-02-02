import React, { useMemo, useState } from 'react'
const initialItem = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected:i===29_999_999,
    }
})

const OneMoreMemoEg = () => {
    let [count, setCount] = useState(0);
    let [items] = useState(initialItem);
    let [name,setName]=useState("")
    const selectedItem = useMemo(() => items.find(item => item.id === count),[count])
    console.log(selectedItem)
  return (
      <div>
          <h1>useMemo Example</h1>
          <h1>{count}</h1>
          <hr />
          <h2>{selectedItem?.id}</h2>
          <hr />
          <button onClick={()=>setCount(prevVal=>prevVal+1)}>Increment</button>
          <button onClick={() => setCount(prevVal => prevVal - 1)}>Decrement</button>
          <hr />
          <input type="text" placeholder='Enter count value' value={count} onChange={e=>setCount(e.target.value)} />

      </div>
  )
}

export default OneMoreMemoEg