import React from 'react'

const Pet = (props) => {
  return (
    <div>
           <li>{props.name} is a {props.species} and is {props.age} years old</li>
    </div>
  )
}

export default Pet
