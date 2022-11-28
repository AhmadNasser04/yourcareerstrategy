import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ChapterOne from './ChapterOne.jsx'
import ChapterTwo from './ChapterTwo.jsx'
import ChapterThree from './ChapterThree.jsx'
import ChapterFour from './ChapterFour.jsx'

function InterviewGuide() {
  const [currentChaper, setCurrentChapter] = useState('c1')
  const [isMobile, setIsMobile] = useState(false)
 
  const handleResize = () => {
    if (window.innerWidth < 768) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className='mt-[15vh] scroll-smooth'>
      <div className='pt-[3vh] md:pt-[10vh] px-[10%] md:pl-[25%] flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-5'>
        {/* CHAPTER NAVIGATION */}
        <div className='flex flex-col space-y-10 md:w-[25%]'>
          <div>
            <a href='#chapters'><h1 onClick={() => setCurrentChapter('c1')} className='text-[#398492] text-xl uppercase cursor-pointer'>Chapter 1</h1></a>
            <p className='font-semibold text-lg'>Interviewing Fundamentals & Best Ways to Appear Confident</p>
          </div>
          <div>
            <a href='#chapters'><h1 onClick={() => setCurrentChapter('c2')} className='text-[#398492] text-xl uppercase cursor-pointer'>Chapter 2</h1></a>
            <p className='font-semibold text-lg'>Best Ways To Answer Interview Questions</p>
          </div>
          <div>
            <a href='#chapters'><h1 onClick={() => setCurrentChapter('c3')} className='text-[#398492] text-xl uppercase cursor-pointer'>Chapter 3</h1></a>
            <p className='font-semibold text-lg'>Best Questions To Ask</p>
          </div>
          <div>
            <a href='#chapters'><h1 onClick={() => setCurrentChapter('c4')} className='text-[#398492] text-xl uppercase cursor-pointer'>Chapter 4</h1></a>
            <p className='font-semibold text-lg'>Following Up: The Influencing Note</p>
          </div> 
          <div>
            <Link to='/payment' className='text-[#398492] text-xl uppercase cursor-pointer' rel="noreferrer" target='_blank'>Act your next interview</Link>
            <p className='font-semibold text-lg'>Interviewing Fundamentals & Best Ways to Appear Confident</p>
          </div>
        </div>
        {/* CAHPTER DISPLAY */}
        <div id={isMobile ? 'chapters' : ''} className='w-[80%]'>
          {currentChaper === 'c1' && <ChapterOne />}
          {currentChaper === 'c2' && <ChapterTwo />}
          {currentChaper === 'c3' && <ChapterThree />}
          {currentChaper === 'c4' && <ChapterFour />}
        </div>
      </div>
    </div>
  )
}

export default InterviewGuide