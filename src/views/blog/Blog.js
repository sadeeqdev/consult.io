import React from 'react'
import BlogWelcomeBanner from '../../components/Blog/BlogBanner'
import PostRow from '../../components/Blog/PostRow'
import SubscribeBox from '../../components/Blog/SubscribeBox'
import Navbar from '../../components/Navbar'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <BlogWelcomeBanner/>
        <PostRow/>
        <SubscribeBox/>
    </div>
  )
}

export default Blog