import Image from "next/image"
import Head from "next/head"

import { Heading } from "../component/Heading"
import styles from '../styles/Home.module.scss'
import img from '../public/w1.jpg'

const Home = () => {

    return (
        <div div className={styles.wrapper} >
            <Head>
                <title>Home</title>
            </Head>
            <Heading text={'Hello World'} />
            <Image
                src={img}
                alt='img'
                placeholder='blur'
            />
        </div>
    )
}
export default Home