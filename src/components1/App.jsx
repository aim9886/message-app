// CRUD Operations in React Js

import React from 'react'
import CreatePost from './CreatePost';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import UpdatePosts from './UpdatePosts';
import ViewPosts from './ViewPosts';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CreatePost />}/>
          <Route path="/viewposts" element={<ViewPosts/>}/>
          <Route path="/updateposts/:id" element={<UpdatePosts/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App