import Head from 'next/head'
import AuthInfoOnFrontend from "../components/AuthInfoOnFrontend";
import AuthenticationButtons from "../components/AuthenticationButtons";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Alfredo 3D</title>
                <meta name="description" content="Exebition expirience"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="shortcut icon" href="/favicon.ico" />
                
            </Head>

            <main>
                <AuthenticationButtons/>
                <AuthInfoOnFrontend/>
                
            </main>
        </div>
    )
}
