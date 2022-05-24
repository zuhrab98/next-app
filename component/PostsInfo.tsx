import { Heading } from "./Heading";
import { FC } from "react";
import { postType } from '../types'

type postInfoProps = {
    post: postType
}

const PostsInfo: FC<postInfoProps> = ({ post }) => {
    const { title, body } = post || {}

    if (!post) {
        return <Heading tag={'h3'} text={'Emty contact'} />
    }

    return (
        <>
            <Heading tag={'h3'} text={title} />
            <div>
                {body}
            </div>
        </>

    )
}

export default PostsInfo