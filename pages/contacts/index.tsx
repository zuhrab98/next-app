import Head from 'next/head'
import Link from "next/link"
import { Heading } from '../../component/Heading'
import { contactType } from '../../types';

import { GetStaticProps } from 'next'
import { FC } from "react";

type contactsTypeProps = {
    contacts: [contactType]
}



export const getStaticProps:GetStaticProps = async () => {
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


const Contacts:FC<contactsTypeProps> = ({ contacts }) => {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts:' />
            <ul>
                {contacts && contacts.map(({ name, id }) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))} 
            </ul>
        </>
    )
}

export default Contacts