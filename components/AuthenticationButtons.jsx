import {withAuthInfo, useLogoutFunction, useRedirectFunctions} from '@propelauth/react';

// isLoggedIn is automatically injected from withAuthInfo
function AuthenticationButtons({isLoggedIn}) {
    const logoutFn = useLogoutFunction()
    const {redirectToSignupPage, redirectToLoginPage, redirectToAccountPage} = useRedirectFunctions()

    if (isLoggedIn) {
        return <div>
            <button onClick={redirectToAccountPage}>Account</button>
            <button onClick={() => logoutFn()}>Logout</button>
        </div>
    } else {
        return <div>
            <button onClick={redirectToSignupPage}>Signup</button>
            <button onClick={redirectToLoginPage}>Login</button>
        </div>
    }
}

export default withAuthInfo(AuthenticationButtons);
