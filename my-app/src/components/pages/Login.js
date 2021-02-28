import React from 'react'
import './Login.css'
import { Button } from '../Button'

function Login() {
  return (
    <main id="Login">
      <div className="login-container">
        <p className="welcome">Welcome to Productini</p>
        <p className="disclaimer">
          <i>Let us help you have a productive day</i>
        </p>
        <div className="button-groups">
          <Button
            text={'Signin with Google'}
            color={'btn-lilac'}
            buttonSize={'btn-large'}
            icon={'fa fa-google'}
            dest={'/'}
          />
          <Button
            text={'About us'}
            color={'btn-lilac'}
            buttonSize={'btn-large'}
          />
        </div>
      </div>
    </main>
  )
}

export default Login
