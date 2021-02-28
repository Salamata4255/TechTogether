import React from 'react'
import './Login.css'
import { Button } from '../Button'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: 'AIzaSyAeUw2MfTi7gpYy2Bt-YelHeeJMhEd1sQ0',
  authDomain: 'techtogether-auth.firebaseapp.com',
})

function Login() {
  React.state = { isSignedIn: false }
  React.uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  }
  const componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      React.setState({ isSignedIn: !!user })
    })
  }
  return (
    <main id="Login">
      <div className="login-container">
        <p className="welcome">Welcome to Productini</p>
        <p className="disclaimer">
          <i>Let us help you have a productive day</i>
        </p>
        <div className="button-groups">
          {React.state.isSignedIn ? (
            <div>Signed In!</div>
          ) : (
            <StyledFirebaseAuth
              uiConfig={React.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
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
