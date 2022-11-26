import React from 'react'
import BYFDC from '../global/BYFDC'
import Carousel from './Carousel'
import Clients from './Clients'
import Coaches from './Coaches'
import JoinCommunity from './JoinCommunity'
import MainVideoDesktop from './MainVideoDesktop'
import MainVideoMobile from './MainVideoMobile'
import Statistics from './Statistics'
import Stories from './Stories'
import Testimonial from './Testimonial'

function Home() {
  return (
    <div className='space-y-32 mt-[7vh]'>

      {/* MAIN VIDEO */}
      <div className='hidden md:block'>
        <MainVideoDesktop />
      </div>
      <div className='md:hidden'>
        <MainVideoMobile />
      </div>

      <Clients />

      <JoinCommunity />

      <Stories />

      <BYFDC />

      <Testimonial />

      <Statistics />

      <Carousel />

      <BYFDC />

      <Coaches />
    </div>
  )
}

export default Home