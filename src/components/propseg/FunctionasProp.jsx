import React from 'react'

export default function FunctionasProp(props) {
  return (
    <div>FunctionasProp : <input type="button" value="hi"
    onClick={()=>props.fun1()} /></div>
  )
}
