import React from 'react'
import Home from '../assets/svgs/home.svg'
import Search from '../assets/svgs/search.svg'
import Add from '../assets/svgs/add.svg'
import Arrow from '../assets/svgs/arrow.svg'
import Recent from '../assets/svgs/recent.svg'

const Sidenav = () => {
  return (
    <div>

    <div className='bg-[#121212] w-full rounded-md m-2 '>
        <div className='flex flex-col h-full p-5 items-start gap-4'>
            <div className='flex items-center gap-6 font-bold text-white'>
            <img src={Home} alt="img" className='w-[30px]'/>
            Home
            </div>            
            <div className='flex items-center gap-6 font-bold text-white'>
            <img src={Search} alt="img" className='w-[30px]' />
            Search
            </div>            

        </div>
    </div>

    <div className='bg-[#121212] w-full rounded-md m-2 '>
        <div className='flex flex-col h-full p-5 items-start gap-4'>
            <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-6 font-bold text-white'>
            <svg role="img" height="24" fill='#E6E6E6' width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>
            Your Library
            </div>
            <div className='flex items-center gap-6 font-bold text-white'>
                <img src={Add} alt="img" className='w-[25px]'/>
                <img src={Arrow} alt="img" className='w-[25px]'/>

            </div>

            </div>            
            <div className='flex items-center justify-between w-full gap-6 font-bold text-white'>
            <img src={Search} alt="img" className='w-[25px]' />
            <p className='flex items-center gap-1 font-bold text-[#E6E6E6] text-[14px]'>
                Recents 
                <img src={Recent} alt="img" className='w-[20px]' />
            </p>
           
            </div>            

        </div>

    </div>
    </div>
  )
}

export default Sidenav