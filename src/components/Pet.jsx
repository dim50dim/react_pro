import React from 'react'


const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 }
]
const Pet = (props) => {
  return (
    <div>
           <li>{props.name} is a {props.species} and is {props.age} years old</li>
    </div>
  )
}

export default Pet
