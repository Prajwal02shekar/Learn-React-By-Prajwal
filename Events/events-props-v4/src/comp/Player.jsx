// import React from 'react'

// const Player = (props) => {
//   console.log(props.link);
//   return (
//     <div>
//       <video src={props.link} controls></video>
//       <span>
//         <button>Play</button>
//       </span>
//     </div>
//   )
// }

// export default Player
// ----------------------------------------------------

import React from 'react'

const Player = (props) => {
  let { movie_name, link, imgURL } = props.data
  console.log(props.data);
  let handleClick = () => {
    const audio = new Audio(link)
    audio.play()
  }
  return (

    <div>
      <h1>{movie_name}</h1>
      <figure>
        <picture>
          <img src={imgURL} alt="photo" onClick={handleClick} />
        </picture>
      </figure>
    </div>


  )
}

export default Player