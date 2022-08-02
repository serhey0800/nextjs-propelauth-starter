import React from 'react'

export const Hero = ({redirectToSignupPage,redirectToLoginPage}) => {
  return (<div className='hero'>
    <h1>Alfredo Exhibition Expirience</h1>
    <p className="subtitle">The virtual recreation of a physical three dimensional (3D) exhibition or museum allows a visitor to navigate in this virtual scenario in a way closer to reality.</p>
    <div className='btn-wrap'>
            <button onClick={redirectToSignupPage}>Signup</button>
            <button onClick={redirectToLoginPage}>Login</button>
    </div>
    </div>
  )
}
