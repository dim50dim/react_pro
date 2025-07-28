import React from 'react'

const AddPetForm = () => {
  return (
    <div>
          <form>
      <fieldset>
        <legend>Add New Pet</legend>
        <input placeholder="Name" />
        <input placeholder="species" />
        <input placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
    </div>
  )
}

export default AddPetForm
