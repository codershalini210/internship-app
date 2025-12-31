import React from 'react'
import { useParams } from 'react-router-dom';
import { teamMembersARY } from './memberdata';
export default function MemberDetails() {
    let params = useParams()
    console.log(params)
    let mname =params.name;
    let member  = teamMembersARY.find((d)=>d.name ==mname)

  return (
    <div>
    {member.name} <br />
    {member.email}<br />
    {member.city}<br />
    {member.contactno}
    </div>
  )
}
