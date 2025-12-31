import React from 'react'
import { teamMembersARY } from './memberdata'
import { Link } from 'react-router-dom'
export default function TeamMembers() {
    // const teamMembers  = 
    let ui = teamMembersARY.map((member,index)=>
    {
    return  <div className='w25 teammember'>
        <img src={member.img} alt="" style={{width:"80%"}} />
        <span style={{fontWeight:"bold",fontSize:"20px"}}>{member.name}</span>
        <Link to={"/memberdetails/"+member.name}>View Details</Link>
      </div>
    })
  return (
    <>     <h1>TeamMembers</h1>
    <div className='flex'>
     
      {ui}
      
    </div>

</>
  )
}
