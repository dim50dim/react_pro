

const Pet = (props) => {
  function handleDelete() {
    
  }
  return (
    <div>
           <li>{props.name} is a {props.species} and is {props.age} years old.</li>
           <button onClick={handleDelete} >Delete</button>
    </div>
  )
}

export default Pet
