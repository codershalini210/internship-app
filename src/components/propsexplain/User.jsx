import React from 'react'
export default function User(props) {
    console.log(props)
    let username = props.username
    
  return (
   <>
 <div>Welcome : {username}</div>
<div>You will contact you on :<mark> {props.email}</mark></div>
    </>

  )
}
