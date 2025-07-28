import React, { useState } from 'react'

import './App.css'
import OurHeader from './components/OurHeader';
import TimeArea from './components/TimeArea';
import Footer from './components/Footer';
import Pet from './components/Pet';
import LikeArea from './components/LikeArea';
import AddPetForm from './components/AddPetForm';



function App() {
   const [pets,setPets] = useState(
[
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 }
])

  return (
    <>
      <h1>react</h1>
      <OurHeader />
      <LikeArea/>
      <TimeArea/>
      <AddPetForm/>
      <ul>
                {pets.map(pet =>
                 <li>  <Pet name={pet.name} species={pet.species} age={pet.age} id={pet.id}/></li>)}
      </ul>

      <Footer/>
    </>
  )
}

export default App
