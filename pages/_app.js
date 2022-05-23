import { Layout } from '../component/Layout'
import '../styles/globals.scss'
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,700&display=swap" rel="stylesheet" />
        </Head>
        <main className='main'>
            <Component {...pageProps} />
        </main>
        
    </Layout>
)

export default MyApp
