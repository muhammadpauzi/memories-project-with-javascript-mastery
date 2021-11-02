import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

export default function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();

    return (
        <div className="col-md-6 mb-2">
            <div className="card card-post">
                <img src={post.selectedFile} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="mb-3">
                        {post.tags.map(tag => (
                            <span className="badge bg-primary me-1">#{tag}</span>
                        ))}
                    </div>
                    <h5 className="card-title fs-6 fw-bold">{post.title}</h5>
                    <small className="text-muted mb-2 d-block fw-medium">{moment(post.createdAt).fromNow()}</small>
                    <p className="card-text">{post.message}</p>
                    <div className="row g-1">
                        <div className="col-md-8">
                            <button className="btn btn-primary w-100" onClick={() => dispatch(likePost(post._id))}>{post.likeCount} Like</button>
                        </div>
                        <div className="col-md-4">
                            <div className="dropdown w-100 d-block">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuPostButton" data-bs-toggle="dropdown" aria-expanded="false">
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuPostButton">
                                    <li>
                                        <button className="dropdown-item" onClick={() => setCurrentId(post._id)}>Edit</button>
                                    </li>
                                    <li><button className="dropdown-item" onClick={() => dispatch(deletePost(post._id))}>Delete</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}