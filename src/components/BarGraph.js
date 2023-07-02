import React from 'react'
import Bar from './Bar'

const BarGraph = ({data}) => {
  return (
    <div className="flex items-end h-[40%]">
        {data.map((h) => (
            <Bar height={h}/>
        ))}
        
    </div>
  )
}

export default BarGraph