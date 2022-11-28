import React from 'react'
import logo from '../../assets/logo/Full.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  

  return (
    <header className='bg-white flex justify-evenly items-center w-screen h-auto shadow-md shadow-slate-300 space-x-36 z-10 fixed top-0'>
        {/* LOGO */}
        <div className='ml-[10%]'>
            <Link to='/'><img className='w-auto max-w-[144px]' src={logo} alt='logo' /></Link>
        </div>

        {/* NAV ITEMS */}
        <div className='nav stroke'>
          <ul className='flex space-x-10 justify-center items-center mobile:hidden'>
            <Link to='/about'><li className='uppercase text-slate-500 text-sm hover:text-[#398492] border-b-2 border-transparent hover:border-[#398492] py-2 transition-all cursor-pointer'>About</li></Link>
            <Link to='/1-1-coaching'><li className='uppercase text-slate-500 text-sm hover:text-[#398492] border-b-2 border-transparent hover:border-[#398492] py-2 transition-all cursor-pointer'>1-1 Coaching</li></Link>
            <Link to='/workshop'><li className='uppercase text-slate-500 text-sm hover:text-[#398492] border-b-2 border-transparent hover:border-[#398492] py-2 transition-all cursor-pointer'>Workshops</li></Link> 
            <Link to='/interview-guide'><li className='uppercase text-slate-500 text-sm hover:text-[#398492] border-b-2 border-transparent hover:border-[#398492] py-2 transition-all cursor-pointer'>Interview Guide</li></Link>
            <Link to='/blog'><li className='uppercase text-slate-500 text-sm hover:text-[#398492] border-b-2 border-transparent hover:border-[#398492] py-2 transition-all cursor-pointer'>Blog</li></Link>
          </ul>
        </div>
        {/* HAMBURGER MENU */}
        <div className='hidden mobile:block absolute right-5'>
          <button onClick={handleToggle}>{navbarOpen ? <IoClose className='w-8 h-8 text-slate-800' /> : <GiHamburgerMenu className='w-8 h-8 text-slate-800' />}</button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""} flex flex-col space-y-5 text-center pt-10 transition-all`}>
            <Link
              to='/about'
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              ABOUT
            </Link>
            <Link
              to='/1-1-coaching'
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              1-1 COACHING
            </Link>
            <Link
              to='/workshop'
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              WORKSHOPS
            </Link>
            <Link
              to='/interview-guide'
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              INTERVIEW GUIDE
            </Link>
            <Link
              to='/blog'
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              BLOG
            </Link>
          </ul>
        </div>
        {/* DISCOVERY CALL */}
        <div>
            <a href='https://calendly.com/elicareercoach/45-minute-coaching-call?month=2022-11' rel="noreferrer" target='_blank' ><button className='navBarButton hidden md:block'>Book Your Free Discovery Call</button></a>
        </div>
    </header>
  )
}

export default NavBar