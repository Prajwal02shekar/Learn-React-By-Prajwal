import React, { Component } from 'react'
import LeftServiceBlock from './LeftServicesBlock'
import RightServiceBlock from './RightServicesBlock'


 class SevicesContainer extends Component {
  render() {
    return (
      <section id="serviceBlock">
        <article className="container">
            <LeftServiceBlock/>
            <RightServiceBlock/>
        </article>
      </section>
    )
  }
}
export default SevicesContainer