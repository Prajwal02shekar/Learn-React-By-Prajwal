import React from 'react'
import {  useLocation, Link } from 'react-router-dom'

const Profile = () => {
  let profiledata = useLocation()
  let { avatar_url, login, html_url } = profiledata.state;
  return (
    <section id="profile">
      <article>
        <header>
          <Link to='/users' className='back-btn'>Back</Link>
          <picture>
            <img src={avatar_url} alt="" />
          </picture>
        </header>
        <main>
          <h2>{login}</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quibusdam ab culpa eos, veniam est, quis atque beatae perspiciatis, optio maiores alias nulla delectus fugit deleniti aperiam? Delectus, vitae aspernatur.</p>
          <a href={html_url} target='_blank' rel='noreffer'>View Github Profile</a>
        </main>
      </article>
    </section>

  )
}

export default Profile