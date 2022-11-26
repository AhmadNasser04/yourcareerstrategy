import React from 'react'
import Coach from '../../components/Home/Coach'
import Peter from '../../assets/images/Peter-Hill-Headshot-new-1-2.webp'
import Eli from '../../assets/images/Eli.png'
import Sharahn from '../../assets/images/Head-Shot-SLaRue-Sales.webp'
import Martica from '../../assets/images/Martica-final-digital-1-scaled.webp'

function Coaches() {
  return (
    <div className='mx-[10%]'>
        <h1 className='text-4xl text-center items-center justify-center pb-16 flex text-[#398492]'>
            Meet Your Coaches
        </h1>
        <div className='grid grid-rows-2 grid-flow-col gap-4'>
            <Coach image={Eli} name='Eli Bohemond' />
            <Coach image={Martica} name='Martica Wakeman' />
            <Coach image={Sharahn} name='Sharahn LaRue McClung' />
            <Coach image={Peter} name='Peter Hill' />
        </div>
    </div>
  )
}

export default Coaches