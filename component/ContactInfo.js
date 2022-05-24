import { Heading } from "./Heading";

function ContactInfo({ contact }) {

    const { name, email, address } = contact || {}
    const { street, suite, city, zipcode } = address || {}

    if (!contact) {
        return <Heading tag={'h3'} text={'Emty contact'}/>
    }

    return (
        <>
            <Heading tag={'h3'} text={name} />
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Adress: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>

    )
}

export default ContactInfo