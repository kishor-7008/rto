import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import Home from './Home'
export default function Register() {
const [regNum,setRegNum]=useState("")
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [date,setDate]=useState("")
  return (
   <>
<Home/>
    <div class="container" id="container">
         <div class="form-container sign-in-container">
           <form action="#">
             <h1> Registration  Details</h1>
             
            <input type="text" placeholder="Registration Number...." value={regNum} onChange={(e)=>setRegNum(e.target.value)} style={{textTransform:"uppercase"}}/>
            <input type="text"  placeholder="Applicant Name...." value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text"  placeholder="Email Id...." value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text"  placeholder="Phone Number...." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <input type="text"  placeholder="Scheduling Date & Time" value={date} onChange={(e)=>setDate(e.target.value)}/>
           
            <Link to={`/vehicle/details/${regNum}`}    style={{textDecoration:"none"}}><button>Next </button></Link> 
                         
           </form>
        </div> 
        
        <div class="overlay-container">
          <div class="overlay">
                        
          </div> 
          <img src="image/regi.gif" />
        </div>
  </div>

  
 
  

   </>
  )
}

