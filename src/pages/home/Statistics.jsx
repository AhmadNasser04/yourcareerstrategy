import React from 'react'
import Statistic from '../../components/Home/Statistic'

function Statistics() {
  return (
    <div>
        <h1 className='text-4xl text-center items-center justify-center pb-16 flex text-[#398492]'>
            Career Coaching Statistics
        </h1>
        <div className='flex mobile:flex-col justify-center items-center'>
            <div className='text-center w-[100%]'>
                <Statistic percentage='96' text='96%' />
                <p className='px-[10%]'>CLIENT SATISFACTION SCORE FROM 40+ INDIVIDUALS PER THEIR END OF COACHING PROGRAM SURVEYS</p>
            </div>
            <div className='text-center w-[100%]'>
                <Statistic percentage='64.3' text='64.3%' />
                <p className='px-[10%]'>AVERAGE INCREASE IN BASE COMPENSATION FOR 50+ CLIENTS WHO SELF-REPORTED TOTALING $1.5M MORE IN OUR CLIENTS BANK ACCOUNTS YoY</p>
            </div>
            <div className='text-center w-[100%]'>
                <Statistic percentage='40' text='5 mnths' />
                <p className='px-[10%]'>AVERAGE AMOUNT OF TIME OUR CLIENTS TAKE TO GAIN CLARITY AND TRANSITION INTO THEIR IDEAL CAREER PATH</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics