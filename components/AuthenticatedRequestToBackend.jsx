import {withAuthInfo} from "@propelauth/react";
import {useEffect, useState} from "react";

// accessToken is automatically injected from withAuthInfo
function AuthenticatedRequestToBackend({accessToken}) {
    const [response, setResponse] = useState(null)

    useEffect(() => {
        fetchWhoAmI(accessToken).then(setResponse)
    }, [accessToken])

    return <span>
        <h2>Server Response</h2>
        <pre>{response ? JSON.stringify(response, null, 2) : "Loading..."}</pre>
    </span>
}

function fetchWhoAmI(accessToken) {
    return fetch("/api/whoami", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return {status: response.status}
        }
    })
}

export default withAuthInfo(AuthenticatedRequestToBackend);
