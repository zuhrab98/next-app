import Head from "next/head"
import { Heading } from "../component/Heading"
import styles from '../styles/Home.module.scss'

const Home = () => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text={'Hello World'} />
    </div>
)

export default Home