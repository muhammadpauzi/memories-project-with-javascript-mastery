import Post from "./Post/Post"
import { useSelector } from "react-redux"

export default function Posts({ setCurrentId }) {
    const posts = useSelector((state) => state.posts);
    return (
        <>
            <h3 className="py-3 fw-medium">Posts</h3>
            <div className="row g-2">
                {!posts.length ? <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                    posts.map(post => <Post key={post._id} post={post} setCurrentId={setCurrentId} />)
                }
            </div>
        </>
    )
}