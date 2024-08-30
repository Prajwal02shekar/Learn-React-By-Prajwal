import React,{useState,Fragment} from 'react'
import PROD from '../prod.json'

const Prod = () => {
    let [state,setState]=useState(PROD)
   

  return (
    <div className='users'>
      <h1>Prod</h1>

        {
            state.map.length>0&& state.map(user=>(
                <Fragment key={user.id}>
                    <div className="container">
                        <figure>
                            <picture>
                                <img src={user?.images[0]} alt={user?.title} height={150} width={150} />
                                </picture>
                        </figure>
                    </div>
                </Fragment>
            ))
        }
    </div>
  )
}

export default Prod