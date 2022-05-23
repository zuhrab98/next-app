import { useEffect, useState } from "react"

import Head from 'next/head'
import { Heading } from '../../component/Heading'
import styles from '../../styles/Home.module.scss'

export const getStaticProps = async () => {
    const queryString = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = null

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
    console.log("Contacts => contacts", contacts)

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts:' />
            <ul>
                {contacts && contacts.map(({ name, email, id }) => (
                    <li key={id}><strong>{name}</strong> ({email})</li>
                ))}
            </ul>
        </>
    )
}

export default Contacts