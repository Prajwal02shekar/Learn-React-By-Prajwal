import React, { Component } from 'react'
import IMG1 from "./img1.png"
import IMG2 from "./img2.png"
import IMG3 from "./img3.jpeg"
import IMG4 from "./img4.png"
import IMG5 from "./img5.png"
import IMG6 from "./img6.png"

class LeftServicesBlock extends Component {
  render() {
    return (
      <aside className='leftServiceBlock'>
        <header>
          <h2>Home services at your doorstep</h2>
        </header>
        <main>
          <div className="top_Block">
            <h3>What are you looking for?</h3>
            <aside className="services_looking_for">
              <div className="block">
                <img src={IMG1} alt="img1" />
                <span>Woman's Salon,Spa, & Skin Care</span>
              </div>
              <div className="block">
                <img src={IMG2} alt="img2" />
              </div>
              <div className="block">
                <img src={IMG3} alt="img3" />
              </div>
              <div className="block">
                <img src={IMG4} alt="img4" />
              </div>
              <div className="block">
                <img src={IMG5} alt="img5" />
              </div>
              <div className="block_bottom">
                <img src={IMG6} alt="img6" />
              </div>
            </aside>
          </div>
          <div className="bottom_block">
            <h4>buy products</h4>
            <aside className="buy_products">
              <div className="block">
                <h4>native RO water</h4>
              </div>
            </aside>
          </div>
        </main>
      </aside>
    )
  }
}
export default LeftServicesBlock
