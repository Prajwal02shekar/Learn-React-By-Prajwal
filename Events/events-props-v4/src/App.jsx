import React from 'react'
import AudioComp from './comp/AudioComp'
import link1 from "./audios/AVP.mp3"
import link2 from "./audios/ab2.mp3"


const App = () => {
  const audioArr = [
    {
      movie_name:"Alavaikuntapuramlo",
      link: link1,
      imgURL: "https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg",
    },
    {
      movie_name:"acc",
      link: link2,
      imgURL: "https://cdn.pixabay.com/photo/2024/05/18/08/16/cat-8769861_1280.jpg",
    },
    {
      movie_name:"acc",
      link: link2,
      imgURL: "https://cdn.pixabay.com/photo/2024/05/18/08/16/cat-8769861_1280.jpg",
    },
    {
      movie_name:"acc",
      link: link2,
      imgURL: "https://cdn.pixabay.com/photo/2024/05/18/08/16/cat-8769861_1280.jpg",
    },
    {
      movie_name:"acc",
      link: link2,
      imgURL: "https://cdn.pixabay.com/photo/2024/05/18/08/16/cat-8769861_1280.jpg",
    }]
  return (
    <div>
      <AudioComp audioArr={audioArr} />
    </div>
  )
}

export default App