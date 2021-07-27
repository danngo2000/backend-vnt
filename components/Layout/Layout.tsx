import React, { useState, FC } from 'react'
import Header from '../Header/Header'
import LeftSidebar from './LeftSidebar'
import SideBar from './SideBar'

interface IProp {
  children: any
  fill?: string
}

const Layout: FC<IProp> = ({ fill, children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='app app-wrap'>
      <Header />
      <div className='main'>
        <div className='main-content'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
