import React from 'react'
const ThreeDotsIcon = (props) => {
  const { fill, size, stroke } = props
  const viewBox = 408
  return <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    fill={fill || '#949495'}
    stroke={stroke || 'unset'}
    width={size || '20px'}
    viewBox={`0 0 ${viewBox} ${viewBox}`}
    className={props.className || 'react-resizable-handle'}
    style={props.style}
  >
		<path d="M204,102c28.05,0,51-22.95,51-51S232.05,0,204,0s-51,22.95-51,51S175.95,102,204,102z M204,153c-28.05,0-51,22.95-51,51
			s22.95,51,51,51s51-22.95,51-51S232.05,153,204,153z M204,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
			S232.05,306,204,306z"/>
  </svg>
}

export default ThreeDotsIcon