import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { result } from '../result'
export default function Horn() {
  const[broken,setBroken]=useState()
  const[loose,setLoose]=useState()
  const[hornFitted,setHornFitted]=useState()
  const[airHorn,setAirHorn]=useState()
  const[multi,setMulti]=useState()
  console.log([broken,loose,hornFitted,airHorn,multi])
  return (
    <>
      <section>

        <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
          <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1.7 - Horn</div>
          <hr style={{ color: "white", height: "4px", background: "white" }} />
          <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                    <div style={{ width: "100%", height: "100%" }}>
                            <div style={{ display: "flex",marginTop:"20px" }}>

                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop:'10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>14001</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Broken/damaged/Not functioning</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "550px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e);
            setBroken({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setBroken({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex",marginTop:"20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop:'10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>14002</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Loose wiring/Not securely fitted</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "590px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setLoose({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setLoose({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex",marginTop:"20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop:'10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>14003</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>More than two tone horn fitted</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "610px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setHornFitted({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setHornFitted({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex",marginTop:"20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop:'10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>14004</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Air horn fitted</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "865px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setAirHorn({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setAirHorn({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex",marginTop:"20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop:'10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>14005</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Multi tones horn are fitted</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "680px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setMulti({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setMulti({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                        
        </div>
        </div>
        </div>
      </section>


    </>



  )
}
