import React, { useState } from 'react'

const AddPetForm = (props) => {
    const [name,setName] = useState('');
    const [species,setSpecies] = useState();
    const [age,setAge] = useState()
function handleSubmit(e) {
    e.preventDefault()
      props.setPets(prev => prev.concat({name,species,age}) );
      setName('');
      setSpecies('');
      setAge('');
}
  return (
    <div>
          <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e=> setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e=> setSpecies(e.target.value)} placeholder="species" />
        <input value={age} onChange={e=> setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
    </div>
  )
}

export default AddPetForm
