import React from 'react'

const person = (props) => {
  return(
    <div>
     <p>exit code 0 {props.name}  </p>
     <p>{props.children}</p>
     </div>
  )
}

export default person;