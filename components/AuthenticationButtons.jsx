import {withAuthInfo, useLogoutFunction, useRedirectFunctions} from '@propelauth/react';

// isLoggedIn is automatically injected from withAuthInfo
function AuthenticationButtons({isLoggedIn}) {
    const logoutFn = useLogoutFunction()
    const {redirectToSignupPage, redirectToLoginPage, redirectToAccountPage} = useRedirectFunctions()

    if (isLoggedIn) {
        return <div className='header' style={{position: 'fixed', width: '100vw', height: '60px', background: '#000'}}>
            {/* <button onClick={redirectToAccountPage}>Account</button>
            <button onClick={() => logoutFn()}>Logout</button> */}
            <h6 className='logo'>Alfredo.</h6>
        </div>
    } else {
        return <div>
            <button onClick={redirectToSignupPage}>Signup</button>
            <button onClick={redirectToLoginPage}>Login</button>
        </div>
    }
}

export default withAuthInfo(AuthenticationButtons);
