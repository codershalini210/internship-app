import React from 'react'

export default function TeamMember(props) {
    let colorname = "#f1c06dd9"
    if(props.exp>8)
    {
        colorname="#03a9f4"
    }
  return (
    <div className='teammember' style={{backgroundColor:colorname}}>
        <img src={props.imgsrc} alt="" style={{height:"130px",
            width:"130px",borderRadius:"50%",border:"2px solid orangered"}}/>
        <div className='membername'>{props.membername}</div>
        <div>{props.designation}</div>
        <div>{props.exp} years</div>
        <input type='button' value="view" onClick={()=>props.wfun(props.membername)}/>
    </div>
  )
}
