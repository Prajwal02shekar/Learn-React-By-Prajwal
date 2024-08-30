import React, { useRef, useState } from 'react'
import VideoItem from './VideoItem'
import Player from './Player'

const VideoContainer = ({ state, selectedVideo, handleClick }) => {
    // console.log(state, "state")
    let [toggle, setToggle] = useState(true)
    let videoRef = useRef()

    let HandleVideoControls = () => {
        if (!toggle) {
            setToggle(false)
        }
        if (toggle === true) {
            videoRef.current.play()
            videoRef.current.autoPlay = true
        } else {
            videoRef.current.pause()

        }
    }
    return (
        <section id='videoBlock'>
            <article>
                <aside className='left'>
                    <Player selectedVideo={selectedVideo} />
                </aside>
                <aside className='right'>

                    {
                        state?.map(video => {
                            return (
                                <VideoItem key={video.id} video={video} handleClick={handleClick} />
                            )
                        })
                    }
                </aside>
            </article>
        </section>

    )
}

export default VideoContainer