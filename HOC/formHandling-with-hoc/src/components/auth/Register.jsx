import React from 'react'
import FormHandlingWithHoc from './../hoc/FormHandlingWithHoc';

const Register = ({values,handleChange,handleSubmit}) => {
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter email" name="email" value={values.email} onChange={handleChange} />
            <input type="password" placeholder="Enter password" name="password" value={values.password} onChange={handleChange}  />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormHandlingWithHoc(Register)