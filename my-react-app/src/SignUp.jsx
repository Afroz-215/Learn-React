import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const SignUp = () => {
   

    return (
        <div>
            <fieldset>
                <h1>Sign Up Form</h1>
                <form action="">
                    <input type="text" placeholder='enter user name' autoComplete="off" />
                    <br />
                    <br />
                    <input type="text" placeholder='enter email' autoComplete="off" />
                    <br />
                    <br />
                    <input type="password" placeholder='enter password' autoComplete="new-password" />
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