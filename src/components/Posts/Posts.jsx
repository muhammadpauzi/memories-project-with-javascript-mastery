import Post from "./Post/Post"
import { useSelector } from "react-redux"

export default function Posts() {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
            <h3>Posts</h3>
            <Post />
            <Post />
            <Post />
        </>
    )
}