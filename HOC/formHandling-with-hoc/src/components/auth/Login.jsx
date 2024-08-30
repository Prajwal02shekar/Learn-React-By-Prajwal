import React, { useState } from 'react'
import withFormHandling from './../hoc/withFormHandling';

const Login = ({handleChange,handleSubmit,errors,values}) => {
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="email" placeholder='enter email' name='email' value={values.email} onChange={handleChange} />
                <input type="password" placeholder='enter password' name='password' value={values.password} onChange={handleChange} />
                <input type="number" placeholder='enter phone number' name='number' value={values.number} onChange={handleChange} />
                <input type="date"  name='date' value={values.date} onChange={handleChange} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default withFormHandling(Login)