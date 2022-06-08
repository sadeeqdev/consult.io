import React from 'react'
import BlogWelcomeBanner from '../../components/Blog/BlogBanner'
import PostRow from '../../components/Blog/PostRow'
import SubscribeBox from '../../components/Blog/SubscribeBox'
import Webinars from '../../components/Blog/Webinars'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Videos from '../../components/Blog/Videos'
import RandomPosts from '../../components/Blog/RndomPosts'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <BlogWelcomeBanner/>
        <PostRow/>
        <SubscribeBox/>
        <Webinars/>
        <Videos/>
        <RandomPosts/>
        <Footer/>
    </div>
  )
}

export default Blog