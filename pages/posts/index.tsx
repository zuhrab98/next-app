import { Heading } from '../../component/Heading'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
    const queryString = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await queryString.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { posts: data }
    }
}

const Posts = ({ posts }) => (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading text={'Post lists:'} />
        {posts && posts.map(({ id, title }) => (
            <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
            </li>
        ))}
    </>
)

export default Posts