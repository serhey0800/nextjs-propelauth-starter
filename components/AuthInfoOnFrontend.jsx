import {withAuthInfo} from '@propelauth/react';

// user is automatically injected from withAuthInfo
function AuthInfoOnFrontend({user}) {
    return <div style={{width: '100vw', height: '100vh'}}>
        <h2>User Info</h2>
        
        {user &&
            <iframe width="100%" height="100%" src="https://www.addictinggames.com/embed/html5-games/19016" scrolling="no"></iframe>
            }
    </div>
}

export default withAuthInfo(AuthInfoOnFrontend);