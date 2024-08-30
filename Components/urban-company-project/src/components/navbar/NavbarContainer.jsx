import  { Component } from 'react'
import Logo from './Logo'
import SearchComponent from './SearchComponent'
import Menu from './Menu'

 class NavbarContainer extends Component {
  render() {
    return (
      <section id='navbarContainer'>
        <article className='container'>
            <Logo/>
            <SearchComponent/>
            <Menu/>
        </article>
      </section>
    )
  }
}

export default NavbarContainer