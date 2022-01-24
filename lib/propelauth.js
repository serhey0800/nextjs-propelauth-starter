import {initAuth} from "@propelauth/express";

const propelauth = initAuth({
    authUrl: process.env.NEXT_PUBLIC_PROPELAUTH_AUTH_URL,
    apiKey: process.env.PROPELAUTH_API_KEY,
    manualTokenVerificationMetadata: {
        verifierKey: process.env.PROPELAUTH_VERIFIER_KEY,
        issuer:  process.env.PROPELAUTH_VERIFIER_ISSUER
    }
})

export default propelauth
