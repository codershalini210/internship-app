import React from 'react'

export default function StudentList() {
    let students = [
        {name:"Raman",email:"Raman@gmail.com"},
        {name:"John",email:"John@gmail.com"},
        {name:"sonia",email:"sonia@outlook.com"},
        {name:"oxana",email:"oxana@gmail.com"},
    ]
    let studentsUI = students.map((s,index)=>
    {
    return <tr id={index}><td>{s.name}</td><td>{s.email}</td></tr>       
    })
  return (
    <div>
        <table>
            <tr><th>NAme</th><th>Email</th></tr>
            {studentsUI}
        </table>
    </div>
  )
}
