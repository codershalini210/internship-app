import React from 'react'
import Pageheader from './Pageheader'
import Sidebar from './Sidebar'
import PageBody from './PageBody'
import Pagefooter from './Pagefooter'

export default function Eg1Home() {
  return (
    <>
    <Pageheader></Pageheader>
    <div className='flex' style={{height:'80dvh'}}>
        <Sidebar></Sidebar>
        <PageBody></PageBody>
        <Sidebar></Sidebar>

    </div>
    <Pagefooter></Pagefooter>
    </>
    
  )
}
