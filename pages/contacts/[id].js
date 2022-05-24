import Head from 'next/head'
import ContactInfo from '../../component/ContactInfo';


const Contact = ({contact}) => {
    console.log(contact);

    return (
        <>
            <Head>
                <title>Lack</title>
            </Head>
            <ContactInfo contanct={contact}/>
        </>
    )
}

export default Contact 