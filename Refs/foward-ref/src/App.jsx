import React, { useRef } from 'react'
import MyInput from './MyInput'

const App = () => {
  let Myref = useRef();
  let changeColor = ()=>{
    Myref.current.style.background = "#a881af"
    Myref.current.style.color = "#B43F3F"
  }
  return (
    <div>
      <MyInput ref={Myref} placeholder="Enter your name" type="text" />
      <button onClick={changeColor}>Change Color of text</button>
    </div>
  )
}

export default App