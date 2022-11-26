import React from 'react'
import { useState } from 'react'
import { MdRemove, MdAdd } from 'react-icons/md'
 
function Accordion({ data }) {

  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    } 

    setSelected(index)
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[85vw]'>
        {data.map((item, index) => (
          <div className='bg-[#a8cdd1] mb-[5px] px-[20px] py-[10px] cursor-pointer rounded'>
            <div className='text-[#398492] font-bold text-2xl flex justify-between items-center space-x-2 select-none' onClick={() => toggle(index)}>
              <h2>{item.question}</h2>
              <span>{selected === index ? <MdRemove /> : <MdAdd />}</span>
            </div>
            <div className={selected === index ? 'accordionContent show text-slate-800 select-none' : 'accordionContent text-slate-800 select-none'}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordion