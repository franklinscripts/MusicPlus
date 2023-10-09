import React from 'react'
import Sidenav from '../components/Sidenav'

const AppLayout = ({ children }) => {
  return (
    <div className='bg-[#000000] h-screen flex '>
        <aside className='w-[500px]'>
            <Sidenav />
        </aside>
        <div className='w-full'>

        {children}
        </div>
    </div>
  )
}

export default AppLayout