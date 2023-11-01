import React from 'react'
import Like from '../assets/default.jpg'
import { Artist, LikedData } from '../data';

const List = () => {
  return (
    // hover:bg-[#57565634]
    <div className="w-full">
      <div className=' flex flex-col '>
        {
        LikedData.map(item => (
            <div className='flex text-slate-300 gap-4 py-2 px-1 hover:animate-pulse  rounded-sm'>
        <img src={item.img} className='w-[50px] rounded-md' alt="" />
        <div className='flex flex-col gap-2'>
          <p className=' font-medium'>{item.main}</p>
          <span className='flex items-center gap-1 text-[12px]'>
           {item.main === "Liked Songs" && <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              className='w-[15px] stroke-slate-300'
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />

            </svg>}
             <p> {item.title}</p>
              <div className=' h-1 w-1 rounded-full bg-slate-400'></div>
              <p>{item.sub}</p>
          </span>
        </div>
            </div>
        ))
        }
        {
        Artist.map(item => (
            <div className='flex text-slate-300 gap-4 py-2 px-1 hover:animate-pulse  rounded-sm'>
        <img src={item.img} className='w-[50px] h-[50px]  rounded-full bg-cover' alt="" />
        <div className='flex flex-col gap-2'>
          <p className=' font-medium'>{item.main}</p>
          <span className='flex items-center gap-1 text-[12px]'>
           
             <p> {item.title}</p>
          </span>
        </div>
            </div>
        ))
        }
      </div>
    </div>
  );
}

export default List