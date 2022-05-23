import { Heading } from "../component/Heading"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import styles from '../styles/Home.module.scss'

const Error = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>404</title>
            </Head>
            <Heading text={'Error 404'} />
            <Heading text={'Something is going wrong...'} tag={'h2'} />
        </div>
    )
}

export default Error