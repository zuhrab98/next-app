import { Heading } from "../component/Heading"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"


const Error = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <Heading text={'Error 404'} />
            <Heading text={'Something is going wrong...'} tag={'h2'} />
        </>
    )
}

export default Error