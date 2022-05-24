import { Heading } from "./Heading";

function PostsInfo({ post }) {
    console.log(post);
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