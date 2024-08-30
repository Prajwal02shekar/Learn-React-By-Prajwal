import React, { useState } from 'react'
import Model from './Model'
import Login from './Login';
import Signup from './Signup';

const App = () => {
    let [toggle, setToggle] = useState(false);
    let handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='main-content'>
            <button onClick={handleToggle}>{toggle ? "X" : "Open"}</button>
            {toggle ? (
                <Model toggle={{ toggle, handleToggle }}>
                    <Signup/>
                </Model>
            ) : (
                    ""
            )}
        </div>
    )
}

export default App
