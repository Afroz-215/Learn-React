import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
         <fieldset>
            <h1>Login Form</h1>
                <form action="">
                    <input type="text" placeholder='enter email' autoComplete="off"  />
                    <br />
                    <br />
                    <input type="password" placeholder='enter password' autoComplete="new-password" />
                    <br />
                    <br />
                    <button type="submit">Login</button>
                    <br />
                </form>
                <p>Don't have an account? <Link to='/'>Sign Up</Link></p>
            </fieldset>
    </div>
  )
}

export default Login