import Head from "next/head"

import { Heading } from "../component/Heading"
import styles from '../styles/Home.module.scss'
import Socials from "../component/Socials"


export const getStaticProps = async () => {
    try {
        const queryString = await fetch(`${process.env.API_HOST}/socials`)
        const data = await queryString.json()

        if (!data) {
            return {
                notFound: true
            }
        }

        return {
            props: { socials: data }
        }
    } catch {
        return {
            props: { socials: null }
        }
    }
}


const Home = ({ socials }) => {

    return (
        <div className={styles.wrapper} >
            <Head>
                <title>Home</title>
            </Head>
            <Heading text={'Next.js Application'} />
            <Socials socials={socials} />
        </div>
    )
}
export default Home