import React from 'react'
import TeamMember from './TeamMember'

export default function PropsHome() {
   
  return (
    <div className='flex'>
    <TeamMember exp={3} imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tZt2GTv3xusdfAEeIuJj-Po7TUIxUEaTzw&s"
    membername="Maria" designation="HR"></TeamMember>
   <TeamMember exp={13} imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tZt2GTv3xusdfAEeIuJj-Po7TUIxUEaTzw&s"
    membername="Oxana" designation="MD"></TeamMember>
  
    <TeamMember imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESMmT9nYpPb4B05Nf6oiACfVtRyfyWaeEj6hB85dGfA&s"
    membername="John" exp={5} designation="Team Lead"></TeamMember>
  
    <TeamMember imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Mq5XWa2W1GnPvhPlyqRbAVc5j-c0CoyecQ&s"
    membername="Ron" exp={10} designation="Project Manager"></TeamMember>
   
    </div>
  )
}
