import React from 'react'

const MyFriendLidt = ({friendType}) => {
  switch(friendType){
    case "school friend":
        return <h1>meeting up after a long time u guys....</h1>
        case "college friend":
            return <h1>hello all my dear friends....</h1>
        default:
            return <h1>You need have friends in your gorup</h1>
  }
}

export default MyFriendLidt