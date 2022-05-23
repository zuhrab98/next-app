import Head from 'next/head'
import { Heading } from '../../component/Heading'
import styles from '../../styles/Home.module.scss'

const Contacts = () => (
    <div className={styles.wrapper}>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text={'Contacts lists:'} />
    </div>
)

export default Contacts