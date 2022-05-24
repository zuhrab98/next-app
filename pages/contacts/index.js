import Head from 'next/head'
import Link from "next/link"

import { Heading } from '../../component/Heading'

export const getStaticProps = async () => {
    const queryString = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await queryString.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contacts: data }
    }
}


const Contacts = ({ contacts }) => {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts:' />
            <ul>
                {contacts && contacts.map(({ name, email, id }) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))} 
            </ul>
        </>
    )
}

export default Contacts