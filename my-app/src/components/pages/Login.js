import React from 'react'
import './Login.css'
import { Button } from '../Button'

function Login() {
  return (
    <main id="Login">
      <div>
        <p>Welcome to Productini</p>
        <p>Let us help you have a productive day</p>
        <Button
          text={'Signin with Google'}
          color={'btn-lilac'}
          buttonSize={'btn-large'}
          icon={'fa fa-google'}
        />
        <Button
          text={'About us'}
          color={'btn-lilac'}
          buttonSize={'btn-large'}
        />
      </div>
    </main>
  )
}

export default Login
