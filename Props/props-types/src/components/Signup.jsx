import React from 'react'

const Signup = ({children}) => {
  return (
    
    <div>
        <hr />
        <h3>{children}</h3>
        <form action="">
            <div className='form-group'>
                <label htmlFor="userName">username</label>
                <input type="text" placeholder='username' />
            </div>
            <div className='form-group'>
                <label htmlFor="password">password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className='form-group'>
               <button>Signup</button>
            </div>
        </form>
    </div>
  )
}

export default Signup