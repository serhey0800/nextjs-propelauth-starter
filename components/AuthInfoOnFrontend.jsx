import {withAuthInfo} from '@propelauth/react';

// user is automatically injected from withAuthInfo
function AuthInfoOnFrontend({user}) {
    return <div  style={{width: '100vw', height: '100vh', display: !!user ? 'block' : 'none'}}>
        {user &&
            <iframe width="100%" height="100%" src="https://www.crypt.art/exhibitions" scrolling="no"></iframe>
            }
    </div>
}

export default withAuthInfo(AuthInfoOnFrontend);