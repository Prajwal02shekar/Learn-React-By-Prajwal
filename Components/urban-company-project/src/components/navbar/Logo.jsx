import  { Component } from 'react'
import LOGO  from "./logo.png"
class Logo extends Component {
  render() {
    return (
      <div className='LogoBlock'>
        <a href="">
          <span>
            <picture>
              <img src={LOGO} alt="logo" />
            </picture>
          </span>
        </a>
      </div>
    )
  }
}

export default  Logo