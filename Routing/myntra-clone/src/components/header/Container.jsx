import React from 'react'
import LeftSideHeader from './LeftSideHeader'
import RightSideHeader from './RightSideHeader'

const Container = () => {
  return (
    <section id='_navbar'>
        <article className="container">
            <LeftSideHeader/>
            <RightSideHeader/>
        </article>
    </section>
  )
}

export default Container