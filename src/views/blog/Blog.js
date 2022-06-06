import React from 'react'
import BlogWelcomeBanner from '../../components/Blog/BlogBanner'
import PostRow from '../../components/Blog/PostRow'
import Navbar from '../../components/Navbar'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <BlogWelcomeBanner/>
        <PostRow/>
    </div>
  )
}

export default Blog