import { useEffect, useState } from "react"

import Head from 'next/head'
import { Heading } from '../../component/Heading'
import styles from '../../styles/Home.module.scss'
import Link from "next/link"

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