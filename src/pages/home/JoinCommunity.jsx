import React from 'react'

function JoinCommunity() {
  return (
    <div>
        <h1 className='text-4xl text-center items-center justify-center flex pb-16 text-[#398492]'>
            Join The YCS Community
        </h1>
        <p className='items-center text-center justify-center flex px-[10%] text-slate-600 font-semibold'>
            By providing your name and email you will receive an email invitation to join our global Slack community of leaders and career changers as well as receive important updates about our business, valuable resources, and relevant info with career related news.
        </p>
        <form className='flex justify-center flex-col items-center py-12 space-y-5'>
            <div className='flex flex-col items-center'>
                <label className='font-semibold'>
                    Your name
                </label>
                <input
                    name="name"
                    type="text" 
                    className='border-2 bg-slate-100 rounded w-[23rem] h-[42px]'
                    required 
                />
            </div>
            <div className='flex flex-col items-center'>
                <label className='font-semibold'>
                    Your email
                </label>
                <input
                    name="email"
                    type="email" 
                    className='border-2 bg-slate-100 rounded w-[23rem] h-[42px]'
                    required 
                />
            </div>
            <div>
                <button type='submit' className='bg-[#398492] rounded text-white w-28 h-12'>Submit</button>
            </div>
      </form>
    </div>
  )
}

export default JoinCommunity