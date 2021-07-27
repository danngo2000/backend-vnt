import React, { useState, FC } from 'react'
import { Resizable } from 're-resizable'
import ThreeDotsIcon from '../Icons/ThreeDots'

const LeftSidebar:FC = (props) => {
  const [widthSidebar, setWidthSidebar] = useState(200)

  const handleResize = (ref: any) => {
    setWidthSidebar(ref.getBoundingClientRect().width)
  }

  return (
    <div className='app-left-slider'>
      <Resizable
        size={{ width: widthSidebar, height: '100%' }}
        minHeight='100%'
        maxWidth={500}
        minWidth={210}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        }}
        handleStyles={{ right: { right: -5, width: '0px', top: "50%" } }}
        // handleComponent={{ right: <ThreeDotsIcon className='hiden' /> }}
        onResizeStop={(e, d, ref, delta) => {
          handleResize(ref)
        }}
      >
        <div
          className={`left-sider-content fill`}
        >
          {props.children}
        </div>
      </Resizable>
    </div>
  )
}

export default LeftSidebar
