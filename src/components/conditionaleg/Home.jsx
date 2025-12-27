import React from 'react'
import Logout from './Logout'
import Login from './Login'
export default function Home() {
    let isLogin = true
  return (
    <div>
        {isLogin? <Logout></Logout>:<Login></Login>}
    </div>
  )
}
