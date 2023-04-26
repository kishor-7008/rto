import React from 'react'
import { useState } from 'react'
// import './stage.css'
import { result } from '../result'
import { Link } from 'react-router-dom'
export default function WaringLight() {
   const[abs,setABS]=useState("")
   const[electrical,setElectrical]=useState("")
   const[brake,setBrake]=useState("")
   const[airBags,setAIrBags]=useState("")
   const[battery,setBattery]=useState("")
   const[OBD,setOBD]=useState("")
   const[slip,setSlip]=useState("")
   const[temp,setTemp]=useState("")
   const[oil,setOil]=useState("")
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize:"50px", fontWeight: "bold", color: "blue" }}>1.9 - Warning Light</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    {/* <Link to="/stage1" style={{textDecoration:"none"}}> */}
                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "60px", width: "60px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12006</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>ABS Waringlight illuminated</div><br /> 
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "800px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setABS({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setABS({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>


                               

                            </div>
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "60px", width: "60px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12007</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Electrical warning light illuminated</div><br />
                                 <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "715px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setElectrical({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setElectrical({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>


                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "60px", width: "60px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12008</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Brake system alert warning light illuminated</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "575px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setBrake({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setBrake({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%",height: "60px", width: "60px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12009</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Air bags warning light illuminated</div><br />
                                 <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "725px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setAIrBags({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setAIrBags({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>


                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "60px", width: "60px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12010</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Battery warning light illuminated</div><br /> 
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "735px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setBattery({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setBattery({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>


                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "60px", width: "60px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12011</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>OBD or malfunction warning light illuminated</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "580px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} iz>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setOBD({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%",height: "60px", width: "60px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12012</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Slip indicator or EAP/BSP warning light illuminated</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "515px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setSlip({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setSlip({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "60px", width: "60px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12013</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Temperature warning light illuminated</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "660px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setTemp({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setTemp({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "60px", width: "60px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>12014</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Oil pressure warning light illuminated</div><br /> 
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "675px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setOil({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setOil({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>


                            </div>
                            
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
