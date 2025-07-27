import React from 'react'

import './App.css'
import OurHeader from './components/OurHeader';
import TimeArea from './components/TimeArea';
import Footer from './components/Footer';
import Pet from './components/Pet';

function App() {


  return (
    <>
      <h1>react</h1>
      <OurHeader />
      <TimeArea/>
      <ul>
                <Pet name='Barsik' species='cat' age='66'/>
                <Pet name='Lily' species='dog' age='3'/>
                <Pet name='Flaffy' species='rabbit' age='5'/>
      </ul>
      <Footer/>
    </>
  )
}

export default App
