import React from 'react'
import BYFDC from '../global/BYFDC'
import BlogsList from './BlogsList'
import FeaturedBlog from './FeaturedBlog'

function Blog() {
  return (
    <div className='mt-[7vh]'>
          <h1 className='text-4xl text-center items-center justify-center flex py-16 text-[#398492]'>
              YourCareerStrategy Blog
          </h1>
          <FeaturedBlog />
          <div>
            <BYFDC />
          </div>
          <BlogsList />
    </div>
  )
}

export default Blog