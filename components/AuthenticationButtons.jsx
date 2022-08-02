import {withAuthInfo, useLogoutFunction, useRedirectFunctions} from '@propelauth/react';
import { Hero } from './Hero';

// isLoggedIn is automatically injected from withAuthInfo
function AuthenticationButtons({isLoggedIn}) {
    const logoutFn = useLogoutFunction()
    const {redirectToSignupPage, redirectToLoginPage, redirectToAccountPage} = useRedirectFunctions()

    if (isLoggedIn) {
        return <div className='header' style={{position: 'fixed', width: '100vw', height: '60px', background: '#000'}}>
            {/* <button onClick={redirectToAccountPage}>Account</button>
            <button onClick={() => logoutFn()}>Logout</button> */}
            <h6 className='logo'>Alfredo.</h6>
            <a className='logout' onClick={logoutFn}>Log out</a>
        </div>
    } else {
        return <Hero 
            redirectToLoginPage={redirectToLoginPage}
            redirectToSignupPage={redirectToSignupPage}
        />
    }
}

export default withAuthInfo(AuthenticationButtons);
