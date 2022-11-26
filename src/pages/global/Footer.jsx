import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import logo from '../../assets/logo/Full.png'

function Footer() {
  return (
    <div className='mt-16 overflow-hidden'>
        <div className='bg-[#222222] w-[100%] h-[35vh] flex justify-center items-center flex-col relative mobile:space-y-10'>
            {/* SOCIAL ICONS */}
            <div className='items-center text-center flex justify-center absolute top-5'>
                <SocialIcon 
                    url='https://www.facebook.com/'
                    bgColor='transparent'
                    fgColor='white'
                />
                <SocialIcon 
                    url='https://www.twitter.com/'
                    bgColor='transparent'
                    fgColor='white'
                />
                <SocialIcon 
                    url='https://www.linkedin.com/'
                    bgColor='transparent'
                    fgColor='white'
                />
            </div>

            {/* MENU */}
            <div>
                <div className='space-x-10 items-center text-center mobile:mt-10'>
                    <Link to='/about'><button className='text-[#707070] hover:text-[#398492] transition-all'>About</button></Link>
                    <Link to='/blog'><button className='text-[#707070] hover:text-[#398492] transition-all'>Blog</button></Link>
                    <Link to='/workshop'><button className='text-[#707070] hover:text-[#398492] transition-all'>Workshops</button></Link>
                    <Link to='/1-1-coaching'><button className='text-[#707070] hover:text-[#398492] transition-all'>1-1 Coaching</button></Link>
                    <Link to='/faq'><button className='text-[#707070] hover:text-[#398492] transition-all'>FAQs</button></Link>
                    <Link to='/terms-and-conditions'><button className='text-[#707070] hover:text-[#398492] transition-all'>TOS</button></Link>
                </div>
            </div>

            {/* TERMS AND LOGO */}
            <div className='flex mobile:flex-col justify-center items-center space-y-5'>
                <div className= 'lg:absolute break-words md:bottom-5 md:left-10 text-center'>
                    <p className='text-[#707070]'>@2022 YourCareerStrategy. All Rights Reserved</p>
                </div>
                <div className='lg:absolute break-words md:bottom-5'>
                    <p className='text-[#707070]'>This website was made by <a href='https://codebrave.org/' className='text-blue-600 cursor-pointer'>Codebrave</a> Scolars</p>
                </div>
                <div className='md:absolute md:bottom-5 md:right-10 w-28'>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer