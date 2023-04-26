import React from 'react'
import "./footer.css"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai"
const RTOFooter = () => {
  return (


    <div style={{width:"100%",height:"40vh",background:"#3f0097",margin:"auto",marginTop:"40px",padding:"30px",borderRadius:"30px",marginBottom:"",boxShadow: "3px 3px 10px rgba(0, 30, 87, 0.751)"}}>
      <div className="flexPoint">
        <div style={{width:"300px"}}>
        <h4 className='head'>Details</h4>
            <div class="divClass">About us</div>
            <div class="divClass">Services</div>
            <div class="divClass">Contact us</div>
            <div class="divClass">Profile </div>
        </div>
        <div style={{width:"300px"}}>
        <h4 className='head'>Automated</h4>
            <div class="divClass">Break Test</div>
            <div class="divClass" >Speed Test</div>
            <div class="divClass">Side Slip Test</div>
            <div class="divClass">Head Lamp Test</div>
        </div><div style={{width:"300px"}}>
        <h4 className='head'>Non Automated</h4>
            <div class="divClass">Light</div>
            <div class="divClass" >Horn</div>
            <div class="divClass">Silencer</div>
            <div class="divClass">FASTag</div>
        </div><div style={{width:"300px"}}>
        <h4 className='head'>Contact</h4>
            <div class="divClass">Phone Num : 7008774493</div>
            <div class="divClass">Email : kishor@gmail.com</div>
            <div class="divClass">Adress : Bhiwadi</div>
            <div class="divClass">Alwar</div>
        </div>

        </div>
        <div style={{textAlign:"center",color:"white",padding:"30px",opacity:"6"}}>&copy; Copyright All Right Reserved 2023 , H&M Innovance LLP | T & C </div>
         
    </div>



  )
}

export default RTOFooter