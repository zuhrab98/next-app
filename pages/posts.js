import { Heading } from '../component/Heading'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'

const Posts = () => (
    <div className={styles.wrapper}>
        <Head>
            <title>Post</title>
        </Head>
        <Heading text={'Post lists:'} />
    </div>
)

export default Posts