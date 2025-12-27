import React from 'react'

export default function Conditional(props) {
    let age = props.age
  return (
    <div>
      {props.name } you are   {age>=18?<span style={{color:"green"}}>Eligible to vote   </span>: <span style={{color:"red"}}>Not eligible to vote </span>}


    </div>
  )
}
