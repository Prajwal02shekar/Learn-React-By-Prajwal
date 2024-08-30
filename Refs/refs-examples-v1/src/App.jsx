// //? How to create refs

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.divRef=React.createRef(null)
//     this.h1ref=React.createRef(null)
//   }

//   //! ------ref way------

//   // componentDidMount(){
//   //   // console.log(this.divRef);  //object     =>current
//   //   // console.log(this.h1ref);
//   //   this.h1ref.current.style.background="red"
//   //   this.h1ref.current.style.color="white"
//   //   this.h1ref.current.style.padding="10px"
//   // }

//   //! --------native way--------

//   componentDidMount(){
//     let para=document.getElementById("para")
//     para.style.background="purple"
//     para.style.color="white"
//     para.style.padding="10px"
//   }
//   render() {
//     return (
//       <div ref={this.divRef}>
//         <h1 ref={this.h1ref}>Hello h1</h1>
//         <p id='para'>Hello para</p>
//       </div>
//     )
//   }
// }

//! ---------------------------------------------------------------------------

//?  using class based component

// import  { Component } from 'react'
// import { createRef } from 'react'

// export default class App extends Component {
//   state={
//     val:""
//   }
//   inputRef=createRef()

//   changeInputColor=()=>{
//     this.setState({val:"shashi"})
//     this.inputRef.current.style.background="purple"
//     this.inputRef.current.style.color="white" 
//     this.inputRef.current.style.width="300px"
//     this.inputRef.current.append="added some helping text"



//   }
//   render() {
//     return (
//       <div>
//         <input type="text" placeholder='change my color' ref={this.inputRef} value={this.state.val} />
//         <button onClick={this.changeInputColor}>Change into color</button>
//       </div>
//     )
//   }
// }

//! ---------------------------------------------------------------------------

//?  using function based component

// import React from 'react'
// import { createRef } from 'react';

// const App = () => {
//   let usernameRef=createRef()
//   let passwordRef=createRef()
//   let btnRef=createRef()


//   let  getDatafromForm=(e)=>{
//     e.preventDefault()
//     let usename=usernameRef.current.value
//     let password=passwordRef.current.value
//     console.log({usename,password});

//   }

//   return (
//     <div>
//       <form action="">
//         <input type="text" id='username' placeholder='username' ref={usernameRef}/>
//         <input type="text" id='password' placeholder='password' ref={passwordRef}/>
//         <button onClick={getDatafromForm}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//!----------------------------------
//? after react v-18 onwards they introduced  useef

// import { useRef } from "react"

// const App = () => {
//   const inputRef=useRef()

//   let changeInput=()=>{
//     inputRef.current.placeholder="enter some text";
//     inputRef.current.style.background="#efefef";



//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} onClick={changeInput} />
//     </div>
//   )
// }

// export default App

//! --------------------------------------------------
// import React from 'react'
// import Video from './components/videos/Video'

// const App = () => {
//   return (
//     <div>
//       <Video/>
//     </div>
//   )
// }

// export default App

//! ------------------------------------------------------

import { useState } from 'react'
import JSON from "./video.json"
import VideoContainer from './components/VideoComp/VideoContainer';

const App = () => {
  let [state, setState] = useState(JSON)
  let [selectedVideo, setSelectedVideo] = useState(state[0].contenturl)
  // let [videoIndex, setVideoIndex] = useState(0)
  // let selectedVideo = JSON[videoIndex].contenturl;
  let handleClick = item => {
    console.log(item);
    return setSelectedVideo(item.contenturl)
  }
  return (

    <VideoContainer state={state} selectedVideo={selectedVideo} handleClick={handleClick} />

  )
}

export default App

