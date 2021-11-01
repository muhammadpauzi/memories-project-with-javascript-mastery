import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/Posts";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Posts />
          </div>
          <div className="col-md-4">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
