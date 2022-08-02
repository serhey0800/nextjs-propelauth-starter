import React from 'react'
import { Contact } from './Contact'

export const Hero = ({redirectToSignupPage,redirectToLoginPage}) => {
  return (
  <>
  <Contact/>
  <div className='hero'>
    <h1>Alfredo Exhibition Expirience</h1>
    <p className="subtitle">We create virtual, interactive 3D exhibitions around the world.</p>
    <p style={{marginTop: '24px'}}>Register to visit the demo</p>
    <div className='btn-wrap'>
            <button onClick={redirectToSignupPage}>Signup</button>
            <button onClick={redirectToLoginPage}>Login</button>
    </div>
    </div>
</>
  )
}
