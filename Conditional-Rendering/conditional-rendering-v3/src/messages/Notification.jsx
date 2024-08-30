import React from 'react'
import Info from './Info';

const Notification = ({state}) => {
    // if(state[0].status==="info"){
    //   console.log("hello info text");
    // }
  return (
    <div>
      {/* {
        (function(){
          switch(state[0].status){
            case "warning":
              return <h1>Iam info text</h1>
            default :
            return <h1>no status found here</h1>
          }
        })()
      } */}
      {
        state.map((data,index)=>{
          return <Info key={index+1} {...data}/>
        })
      }
    </div>
  )
}

export default Notification