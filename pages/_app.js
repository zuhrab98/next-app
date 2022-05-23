import { Layout } from '../component/Layout'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <main className='main'>
            <Component {...pageProps} />
        </main>
    </Layout>
)

export default MyApp
