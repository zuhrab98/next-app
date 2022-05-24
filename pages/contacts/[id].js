import Head from 'next/head'
import ContactInfo from '../../component/ContactInfo';

export const getServerSideProps = async (context) => {
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

const Contact = ({ contact }) => {

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