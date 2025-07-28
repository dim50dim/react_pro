import React, { useState } from 'react'

const TimeArea = () => {
  useState(new Date().toLocaleString())
  return (
    <div>
       <p>The current time is {new Date().toLocaleString()}.</p>
    </div>
  )
}

export default TimeArea
