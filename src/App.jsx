import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/Posts";
function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div className="col-md-4">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
