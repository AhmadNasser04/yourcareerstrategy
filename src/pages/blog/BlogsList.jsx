import React from 'react'
import { blogs } from './Blogs.js'


function BlogsList() {
  let newBlogs = blogs.slice(1, blogs.length)

  return (
    <div className='flex flex-col px-5 pt-20 space-y-5'>
        {newBlogs.map((blog, i) => {
          console.log(i)
          return (
            <div key={i} className='rounded-md flex bg-slate-100 px-5 py-3 space-x-3'>
              <img src={blog.image} alt='blog' className='w-[120px] h-[120px] rounded-md' loading='lazy'/>
              <div>
                <a href={`/blogs/${blog.id}`} className='underline text-lg'>{blog.name}</a>
                <h1 className='text-gray-500 italic text-sm'>{blog.date}</h1>
                <h1 className='pt-3'>{`${(blog.desc).slice(0, 100)}...`}</h1>
                <a href={`/blogs/${blog.id}`} className='text-[#398492] underline'>Read More...</a>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default BlogsList