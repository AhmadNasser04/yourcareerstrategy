import React from 'react'
import quotes from '../../assets/images/quotes.png'

function TestimonialCard({ description, icon, name, hidden }) {
  return (
    <div className='mb-16'>
        <div className='w-[350px] h-[500px] shadow-lg shadow-slate-300 text-center text-[1rem] text-slate-700 px-[10%] relative'>
            <div className='items-center justify-center flex my-[3%]'>
                <img src={quotes} alt="Quotes icon" />
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
            <div className='items-center justify-center flex absolute bottom-[-30px] ml-[25%]'>
                <img src={icon} alt="icon" className='rounded-full w-28' loading='lazy'/>
            </div>
            <div className='items-center text-center flex justify-center'>
                <p className='font-semibold text-lg text-black absolute bottom-[-60px]'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard