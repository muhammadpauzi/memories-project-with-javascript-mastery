import { useEffect, useState } from "react"
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

export default function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const dispatch = useDispatch();
    const post = useSelector(state => currentId ? state.posts.find(post => post._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        handleClear();
    }

    const handleClear = () => {
        setCurrentId(null);
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile: ''
        });
    }

    return (
        <div>
            <h2>{currentId ? 'Editing' : 'Creating'} a Memory</h2>
            <form method="post" autoComplete="no" noValidate>
                <div className="mb-3">
                    <label htmlFor="creator" className="form-label">Creator</label>
                    <input type="text" className="form-control" id="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <input type="text" className="form-control" id="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags (coma saparated)</label>
                    <input type="text" className="form-control" id="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                </div>
                <div className="mb-3">
                    {/* <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile" /> */}
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <button className="btn btn-primary mb-2 w-100" type="submit" onClick={handleSubmit}>{currentId ? 'Edit' : 'Create'}</button>
                <button type="button" className="btn btn-danger w-100" onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
}