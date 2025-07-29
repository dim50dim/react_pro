import React, { useEffect, useState } from 'react'

import './App.css'
import OurHeader from './components/OurHeader';
import TimeArea from './components/TimeArea';
import Footer from './components/Footer';
import Pet from './components/Pet';
import LikeArea from './components/LikeArea';
import AddPetForm from './components/AddPetForm';



function App() {
   const [pets,setPets] = useState([])
//only run once the first time this component is rendered
   useEffect(() => {
    
   })
  return (
    <>
      <h1>react</h1>
      <OurHeader />
      <LikeArea/>
      <TimeArea/>
      <AddPetForm setPets={setPets} />
      <ol>
                {pets.map(pet =>
                 <li>  <Pet setPets={setPets} name={pet.name} species={pet.species} age={pet.age} id={pet.id}/></li>)}
      </ol>

      <Footer/>
    </>
  )
}

export default App
