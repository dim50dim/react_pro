import React, { useState } from 'react'

const LikeArea = () => {
    const [like,setLike] = useState(0)
    const increaseLikeHandler = () => {
       setLike(like + 1);
    }
    const decreaseLikeHandler = () => {
       setLike(prev => prev > 0 ? prev - 1 : 0)
    }
  return (
    <div>
        <button onClick={increaseLikeHandler} >Increase likes</button>
        <button onClick={decreaseLikeHandler}>Decrease likes</button>
        <h2>This page has been liked {like} times</h2>
    </div>
  )
}

export default LikeArea
