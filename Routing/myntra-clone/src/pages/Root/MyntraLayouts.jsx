import React, { Fragment } from 'react'
import Container from '../../components/header/Container'
import { Outlet } from 'react-router-dom'

const MyntraLayouts = () => {
  return (
    <Fragment>
        <Container/>     {/*-------static component composition in layouts component */}
        <hr />
         <Outlet/>      {/*------- dynamic route based on URL */}
    </Fragment>
  )
}

export default MyntraLayouts