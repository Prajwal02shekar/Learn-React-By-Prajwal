import Style from './register.module.css'
console.log(Style)
const Register = () => {
    return (
        <div className={Style.auth}>
            <h2>Register</h2>
            <form className={Style.form}>
                <div>
                    <label htmlFor='email' className={Style.label}>Email</label>
                    <input type="text" placeholder='Enter email' className={Style.input} />
                </div>
                <div>
                    <label htmlFor='password' className={Style.label}>Password</label>
                    <input type="password" placeholder='Enter Password' className={Style.input} />
                </div>
            </form>
        </div>
    )
}

export default Register
