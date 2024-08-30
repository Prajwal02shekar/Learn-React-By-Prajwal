import React, { useContext,useRef, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Container = () => {
    const [toggle,setToggle]=useState(false)
    const {light,dark} =useContext(ThemeContext)
    let elemRef=useRef()
    let handleTheme=()=>{
        setToggle(!toggle);
        {
            if(toggle==true){
                elemRef.current.style.background=dark.background
                elemRef.current.style.color=dark.color

            }else{
                elemRef.current.style.background=light.background
                elemRef.current.style.color=light.color

                
            }
        }
    }
    
  return (
    <div ref={elemRef}>
        <h1>Iam a container block</h1>
        <button style={{float:"right"}} onClick={handleTheme}>{toggle? 'Dark':'Light'}</button>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis enim error explicabo, ab suscipit ea natus molestias? Quibusdam doloribus repudiandae necessitatibus provident, beatae labore iste, error velit unde repellendus vitae hic non quidem. Reprehenderit, debitis perferendis? Blanditiis vitae sequi fugiat. Quis vitae, dolores officiis quo hic soluta sequi quidem voluptatem doloribus sit perspiciatis itaque delectus illo aliquid aliquam expedita? Odio corrupti, repellat minima omnis neque quis? Facere, sint inventore nulla placeat fuga deserunt! Distinctio impedit, minima consequuntur, quam blanditiis dolores ratione deleniti architecto harum ipsa perspiciatis quod? Magnam, optio. Praesentium illum, officia omnis maxime assumenda perferendis ab vel asperiores?</p>
    </div>
  )
}

export default Container