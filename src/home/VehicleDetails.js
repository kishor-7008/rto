import React from 'react'
import './vehicledetails.css'
import { Link } from 'react-router-dom'
import Home from './Home'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function VehicleDetails() {
    const {regNum}=useParams()
   
    const[reggNum,setReggNum]=useState(regNum)
    const[vClass,setVclass]=useState("")
    const[make,setMake]=useState("")
    const[model,setModel]=useState("")
    const[Enum,setEnum]=useState("")
    const[fuel,setFuel]=useState("")
    const[emission,setEmission]=useState("")
    const[speedG,setSpeedG]=useState("")
    const[GVW,setGVW]=useState("")
    const[mfg,setMfg]=useState("")
    return (
                <>
                <Home/>
        <div class="container" id="container">
            

            <div class="form-container sign-in-container">
                <form action="#">
                    <h1> Vehicle  Details</h1>
                  
                 
<label>Registration Number</label>
                    <input type="text" placeholder="registration number" value={reggNum} style={{textTransform:"uppercase"}}/>
<label>Vehicle Class</label>

                    <input type="text" placeholder="vehicle class" value={vClass} onChange={(e)=>setVclass(e.target.value)}/>
<label>Make</label>

                    <input type="text" placeholder="make" value={make} onChange={(e)=>setMake(e.target.value)}/>
<label>Model</label>

                    <input type="text" placeholder="model"  value={model} onChange={(e)=>setModel(e.target.value)}/>
<label>Engine No.</label>

                    <input type="text" placeholder="engine number" value={Enum} onChange={(e)=>setEnum(e.target.value)}/>

                    <button style={{opacity:0,margin:"30px"}}> </button>

                </form>
            </div>

            <div class="overlay-container">
                <div class="overlay">
                    

                    <div class="form-container dell">
                        <form action="#">
                            {/* <h1> Vehicle  Details</h1> */}
                             <div class="social-container"> 
              {/* <a href="#" class="social"> <i class="fab fa-facebook-f"></i> </a>
              <a href="#" class="social"> <i class="fab fa-google-plus-g"></i> </a>
              <a href="#" class="social"> <i class="fab fa-linkedin-in"></i> </a> */}
          </div> 
                            {/* <span> or use your account </span> */}

                            <label style={{textAlign: "left"}}>Fuel Type</label>
                    <input type="text" placeholder="fuel type" value={fuel} onChange={(e)=>setFuel(e.target.value)}/>
<label>Emission Norms</label>

                    <input type="text" placeholder="emission norms" value={emission} onChange={(e)=>setEmission(e.target.value)}/>
<label>Speed Governor  (If Any)</label>

                    <input type="text" placeholder="speed governor " value={speedG} onChange={(e)=>setSpeedG(e.target.value)} />
<label>Gvw (kg)</label>

                    <input type="text" placeholder="gvw" value={GVW} onChange={(e)=>setGVW(e.target.value)}/>
<label>Year Of mfg</label>

                    <input type="text" placeholder="mfg year " value={mfg} onChange={(e)=>setMfg(e.target.value)} />

                            {/* <input type="password"  placeholder="Your Secret" /> */}
                            {/* <a href="#"> Forgot Your Password ? </a> */}
                           <Link to="/dashboard"><button>Save </button></Link> 

                        </form>
                    </div>
                    {/*<div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              
              <p>
                To keep connected with us please login with your personal info
              </p>
              
              <button class="ghost" id="signIn">Sign In</button>
            </div>
            
            <div class="overlay-panel overlay-right">
              <h1> Hello Friend! </h1>
              
              <p> Enter your personal detail and start journey with us </p>
              <button class="ghost" id="signUp">Sign Up</button>
            </div>*/}

                </div>
                <img src="image/regi.gif" />
            </div>
        </div>
        </>


    )
}
