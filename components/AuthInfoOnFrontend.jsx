import {withAuthInfo} from '@propelauth/react';

// user is automatically injected from withAuthInfo
function AuthInfoOnFrontend({user}) {
    return <span>
        <h2>User Info</h2>
        {user && user.pictureUrl && <img src={user.pictureUrl} />}
        <pre>user: {JSON.stringify(user, null, 2)}</pre>
    </span>
}

export default withAuthInfo(AuthInfoOnFrontend);