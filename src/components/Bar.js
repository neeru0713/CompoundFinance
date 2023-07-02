import React from 'react'

const Bar = ({height}) => {
    const dynamiClass = `w-[6%] bg-[#1d2833] ${height} mr-2`
  return (
    <div className={dynamiClass}>
    </div>
  )
}

export default Bar