import React from 'react'

const AddPetForm = (props) => {
function handleSubmit(e) {
    e.preventDefault()
      props.setPets();
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
