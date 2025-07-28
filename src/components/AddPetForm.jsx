import React, { useState } from 'react'

const AddPetForm = (props) => {
    const [name,setName] = useState('');
    const [species,setSpecies] = useState();
    const [age,setAge] = useState()
function handleSubmit(e) {
    e.preventDefault()
      props.setPets(prev => prev.concat() );
}
  return (
    <div>
          <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input onChange={e=> setName(e.target.value)} placeholder="Name" />
        <input onChange={e=> setSpecies(e.target.value)} placeholder="species" />
        <input onChange={e=> setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
    </div>
  )
}

export default AddPetForm
