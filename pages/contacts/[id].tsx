import Head from 'next/head'
import ContactInfo from '../../component/ContactInfo';
import { GetServerSideProps } from 'next';
import { contactType } from '../../types';
import { FC } from "react";

type contactProps = {
    contact: contactType
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    const { id } = context.query
    const queryString = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await queryString.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contact: data }
    }
}

const Contact:FC<contactProps> = ({ contact }) => {

    return (
        <>
            <Head>
                <title>Lack</title>
            </Head>
            <ContactInfo contact={contact} />
        </>
    )
}

export default Contact 