import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

export default function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();

    return (
        <div className="col-md-6 mb-2">
            <div className="card">
                <img src={post.selectedFile} className="card-img-top" alt="..." />
                <div className="card-body">
                    {post.tags.map(tag => `#${tag} `)}
                    <h5 className="card-title">{post.title}</h5>
                    <small className="text-muted">{moment(post.createdAt).fromNow()}</small>
                    <p className="card-text">{post.message}</p>
                    <div className="row g-1">
                        <div className="col-md-4">
                            <button className="btn btn-primary w-100">{post.likeCount} Like</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-danger w-100" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success w-100" onClick={() => setCurrentId(post._id)}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}