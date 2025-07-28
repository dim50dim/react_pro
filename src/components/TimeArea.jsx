import React from 'react'

const TimeArea = () => {
  return (
    <div>
       <p>The current time is {new Date().toLocaleString()}.</p>
    </div>
  )
}

export default TimeArea
