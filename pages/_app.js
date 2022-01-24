import '../styles/globals.css'
import {AuthProvider} from "@propelauth/react";

function MyApp({Component, pageProps}) {
  return <AuthProvider authUrl={process.env.NEXT_PUBLIC_PROPELAUTH_AUTH_URL}>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
