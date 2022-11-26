import React from 'react'
import { blogs } from './Blogs.js'

function FeaturedBlog() {
  return (
    <div className='flex flex-col items-center md:items-start md:flex-row justify-center pb-16 space-x-5 px-5'>
        <div>
            <img src={blogs[0].image} alt='Blog' className='rounded-md w-[350px] h-[350px]' loading='lazy'/>
        </div>
        <div className='md:w-[20%]'>
            <a href={`/blogs/${blogs[0].id}`} className='text-xl text-bold underline'>
                {blogs[0].name} 
            </a>
            <h1 className='text-gray-500 text-sm italic'>
                {blogs[0].date}
            </h1>
            <h1 className='pt-5'>
                {`${(blogs[0].desc).slice(0, 100)}...`}
            </h1>
            <a href={`/blogs/${blogs[0].id}`} className='text-[#398492] underline'>Read More...</a>
        </div>
    </div>
  )
}

export default FeaturedBlog