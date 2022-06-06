import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './views/blog/Blog';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
