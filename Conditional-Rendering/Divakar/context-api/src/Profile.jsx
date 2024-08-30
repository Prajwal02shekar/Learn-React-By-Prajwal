import React, { useContext } from 'react'
import ProfileContext from './context/ProfileContext';
import { MyContext } from './context/GlobalContaxt';

const Profile = () => {
    // let value=useContext(ProfileContext)
    let value=useContext(MyContext)
  return (
      <div>
          {/* <h1>{ value}</h1> */}
          <h1>My name is {value.name} and Iam { value.age} years old</h1>
    </div>
  )
}

export default Profile