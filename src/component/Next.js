import React, { useEffect, useState } from 'react'
// import Setting from './Setting'

export default function Next() {
const[show,setShow]=useState(true)
const[comp,setComp]=useState(false)

     useEffect(()=>{

        setTimeout(()=>{
            setShow(false)
            setComp(true)
        },5000)
     },[])
  return (
   <>
   {show &&  <img src="image/running_vehicle.gif" style={{width:"100%",height:"100%"}}/> }
   {comp && <h1>well done !</h1>}
   </>
  )
}
