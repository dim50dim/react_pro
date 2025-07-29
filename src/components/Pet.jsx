

const Pet = (props) => {
  function handleDelete() {
    props.setPets(prev=> prev.filter(pet => pet.id !== props.id));
  }
  return (
    <div>
           <li>{props.name} is a {props.species} and is {props.age} years old.</li>
           <button onClick={handleDelete} >Delete</button>
    </div>
  )
}

export default Pet
