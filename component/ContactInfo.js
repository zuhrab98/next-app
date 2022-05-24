import { Heading } from "./Heading";

function ContactInfo({ contanct }) {

    const { name, email, adress } = contanct || {}
    const { street, suite, city, zipcode } = adress || {}

    if (!contanct) {
        return <Heading tag={'h3'} text={'Emty contact'}/>
    }

    return (
        <>
            <Heading tag={'h3'} text={name} />
            <div>
                <strong>Email:</strong>
                {email}
            </div>
            <div>
                <strong>Adress:</strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>

    )
}

export default ContactInfo