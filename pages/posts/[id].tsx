import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'

import { Heading } from '../../component/Heading'
import PostsInfo from '../../component/PostsInfo'
import { postType } from "../../types";


type postTypeProps = {
    post: postType
}

// Описали механизм генерацию статических страниц
export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params
    const queryString = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await queryString.json()

    if (!data) return { notFound: true }

    return {
        props: { post: data }
    }
}

const Post: FC<postTypeProps> = ({ post }) => (
    <>
        <Head>
            <title>Post</title>
        </Head>
        <Heading text={'Post'} />
        <PostsInfo post={post} />
    </>
)

export default Post 