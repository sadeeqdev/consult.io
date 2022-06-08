import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './views/blog/Article';
import Blog from './views/blog/Blog';
import BlogPost from './views/blog/BlogPost';
import Home from './views/Home'
import Login from './views/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/post" element={<BlogPost/>}/>
          <Route path="/blog/article" element={<Article/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
