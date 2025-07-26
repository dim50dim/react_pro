import React from 'react'

import './App.css'
import OurHeader from './components/OurHeader';
const arr = [1,2,3,4];
function App() {


  return (
    <>
      <h1>react</h1>
      <OurHeader/>
      <ol>
              {arr.map((item,index) => 
                <li key={index}>{item}</li>
              )}
              {arr.sort((a,b) => b - a ).map((item,index) => 
                           <li key={index}>{item}</li>
              )}
      </ol>
    </>
  )
}

export default App
