import React from 'react'
import { Outlet, useLocation,useParams } from 'react-router-dom';

const User = () => {
  let location=useLocation();
  console.log(location);

  let value=useParams()
  console.log(value);
  // console.log(window.location.protocol);
  // console.log(window.location.origin);
  // console.log(window.location.pathname);
  // console.log(window.location.href);
  // console.log(window.location.port);
  // console.log(window.location.hash);
  // console.log(window.location.hostname);
  // console.log(window.location.host);

  // let testLocation = () => {
  //   // window.location.reload()
  //   window.location.assign("https://github.com/Prajwal02shekar?tab=repositories")
  // }
  return (
    <div>
      <h1>Hello {value.name } please relode the page</h1>
      {/* <button onClick={testLocation}>Relode</button> */}
      {Outlet}
    </div>
  )
}

export default User