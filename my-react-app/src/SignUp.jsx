import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <fieldset>
                <h1>Sign Up Form</h1>
                <form action="">
                    <input type="text" placeholder='enter user name' />
                    <br />
                    <br />
                    <input type="text" placeholder='enter email' />
                    <br />
                    <br />
                    <input type="password" placeholder='enter password' />
                    <br />
                    <br />
                    <button type="submit">Sign Up</button>
                    <br />
                </form>
                <p>Already have an account? <Link to='/Login'>Login</Link></p>
            </fieldset>
        </div>
    )
}

export default SignUp