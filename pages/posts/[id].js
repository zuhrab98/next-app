import { Heading } from '../../component/Heading'
import Head from 'next/head'
import PostsInfo from '../../component/PostsInfo'

// Описали механизм генерацию статических страниц
export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params
    const queryString = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await queryString.json()

    if (!data) return { notFound: true }

    return {
        props: { post: data }
    }
}

const Post = ({ post }) => (
    <>
        <Head>
            <title>Post</title>
        </Head>
        <Heading text={'Post'} />
        <PostsInfo post={post} />
    </>
)

export default Post 