import React from 'react'

const AddPetForm = () => {
function handleSubmit(e) {
    e.preventDefault()
    alert('thank you for submit the form')
}
  return (
    <div>
          <form onSubmit={handleSubmit}>
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
