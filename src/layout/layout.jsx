import React from 'react'
import Sidenav from '../components/Sidenav'

const AppLayout = ({ children }) => {
  return (
    <div className='bg-[rgb(0,0,0)] h-screen flex '>
        <aside className='w-[600px]'>
            <Sidenav />
        </aside>
        <div className='w-full'>

        {children}
        </div>
    </div>
  )
}

export default AppLayout