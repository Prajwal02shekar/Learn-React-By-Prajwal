// import React, { useState } from 'react'
// import VIDEO from "./viedo1.mp4"
// import { useRef } from 'react';
// const Video = () => {
//     let [play, setPlay] = useState(true)
//     let videoRef = useRef()
//     let PlayorPause = () => {
//         setPlay(!play)
//         if (play === true) {
//             videoRef.current.play()
//         } else {
//             videoRef.current.pause()
//         }
//     }
//     return (
//         <section id='videoBlock'>
//             <article>
//                 <video src={VIDEO} ref={videoRef} ></video>
//                 <button onClick={PlayorPause}>{play ? "play" : "pause"}</button>
//             </article>
//         </section>
//     )
// }

// export default Video 