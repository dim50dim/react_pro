import React, { useState } from 'react'

const TimeArea = () => {
  const [time,setTime] = useState(new Date().toLocaleString());

  setTimeout(() => {
    setTime(new Date().toLocaleString())
  }, 1000);
  return (
    <div>
       <p>The current time is {time}.</p>
    </div>
  )
}

export default TimeArea
