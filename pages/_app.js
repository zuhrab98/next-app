import { Layout } from '../component/Layout'
import '../styles/globals.scss'
import Image from 'next/image';
import img from '../public/w1.jpg'

const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <main className='main'>
            <Component {...pageProps} />
        </main>
        <Image
            src={img}
            alt='img'
            placeholder='blur'
        />
    </Layout>
)

export default MyApp
